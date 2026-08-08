import { useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase';
import { listenToBookings, updateBookingStatus, deleteBooking } from '../services/bookings';
import './Admin.css';

const branchNames = {
  banha: 'بنها',
  tagamoa: 'التجمع الخامس',
  zayed: 'الشيخ زايد',
};

const statusLabels = {
  pending: 'قيد المراجعة',
  confirmed: 'مؤكد',
  cancelled: 'ملغي',
};

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login">
      <form className="admin-login__box" onSubmit={handleLogin}>
        <h2>تسجيل دخول الإدارة</h2>
        <div className="admin-login__group">
          <label htmlFor="email">البريد الإلكتروني</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="admin-login__group">
          <label htmlFor="password">كلمة المرور</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="admin-login__error">{error}</p>}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'جاري الدخول...' : 'دخول'}
        </button>
      </form>
    </div>
  );
}

function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [branchFilter, setBranchFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [busyId, setBusyId] = useState(null);

  useEffect(() => {
    const unsub = listenToBookings(setBookings);
    return () => unsub();
  }, []);

  const filtered = bookings.filter((b) => {
    if (branchFilter !== 'all' && b.branchId !== branchFilter) return false;
    if (statusFilter !== 'all' && b.status !== statusFilter) return false;
    return true;
  });

  const handleStatus = async (id, status) => {
    setBusyId(id);
    await updateBookingStatus(id, status).catch(() => {});
    setBusyId(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('متأكد إنك عايز تمسح الحجز ده؟')) return;
    setBusyId(id);
    await deleteBooking(id).catch(() => {});
    setBusyId(null);
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard__header">
        <h2>لوحة إدارة الحجوزات</h2>
        <button className="btn btn-outline" onClick={() => signOut(auth)}>
          تسجيل الخروج
        </button>
      </div>

      <div className="admin-dashboard__filters">
        <select value={branchFilter} onChange={(e) => setBranchFilter(e.target.value)}>
          <option value="all">كل الفروع</option>
          {Object.entries(branchNames).map(([id, name]) => (
            <option key={id} value={id}>{name}</option>
          ))}
        </select>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="all">كل الحالات</option>
          {Object.entries(statusLabels).map(([id, label]) => (
            <option key={id} value={id}>{label}</option>
          ))}
        </select>
        <span className="admin-dashboard__count">{filtered.length} حجز</span>
      </div>

      {filtered.length === 0 ? (
        <p className="admin-dashboard__empty">مفيش حجوزات مطابقة للفلتر الحالي</p>
      ) : (
        <div className="admin-dashboard__table-wrap">
          <table className="admin-dashboard__table">
            <thead>
              <tr>
                <th>الاسم</th>
                <th>الهاتف</th>
                <th>الفرع</th>
                <th>الخدمة</th>
                <th>التاريخ</th>
                <th>الوقت</th>
                <th>الحالة</th>
                <th>إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b) => (
                <tr key={b.id}>
                  <td>{b.name}</td>
                  <td dir="ltr">{b.phone}</td>
                  <td>{b.branchName}</td>
                  <td>{b.service}</td>
                  <td>{b.dateKey}</td>
                  <td>{b.time}</td>
                  <td>
                    <span className={`admin-status admin-status--${b.status}`}>
                      {statusLabels[b.status] || b.status}
                    </span>
                  </td>
                  <td className="admin-dashboard__actions">
                    <button
                      className="admin-action admin-action--confirm"
                      disabled={busyId === b.id || b.status === 'confirmed'}
                      onClick={() => handleStatus(b.id, 'confirmed')}
                    >
                      تأكيد
                    </button>
                    <button
                      className="admin-action admin-action--cancel"
                      disabled={busyId === b.id || b.status === 'cancelled'}
                      onClick={() => handleStatus(b.id, 'cancelled')}
                    >
                      إلغاء
                    </button>
                    <button
                      className="admin-action admin-action--delete"
                      disabled={busyId === b.id}
                      onClick={() => handleDelete(b.id)}
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Admin() {
  const [user, setUser] = useState(undefined); // undefined = لسه بيتحقق, null = مش مسجل دخول

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  if (user === undefined) {
    return <div className="admin-loading">جاري التحقق...</div>;
  }

  return (
    <section className="section admin-page">
      <div className="container">
        {user ? <Dashboard /> : <LoginForm />}
      </div>
    </section>
  );
}

export default Admin;
