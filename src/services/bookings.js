import { db } from '../firebase';
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
  orderBy,
} from 'firebase/firestore';

const BOOKINGS_COLLECTION = 'bookings';

// تحويل الـ Date object لصيغة نص ثابتة (YYYY-MM-DD) عشان التخزين والمقارنة
export function toDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// هات الأوقات المحجوزة فعلاً في فرع معين ويوم معين (عشان نعطلها في الواجهة)
export async function getBookedTimes(branchId, dateKey) {
  const q = query(
    collection(db, BOOKINGS_COLLECTION),
    where('branchId', '==', branchId),
    where('dateKey', '==', dateKey),
    where('status', '!=', 'cancelled')
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => d.data().time);
}

// إنشاء حجز جديد — بيرجع { ok: true, id } أو { ok: false, reason }
// بيتحقق أول حاجة إن السلوت لسه فاضي قبل ما يكتب (يحمي من تعارض حجزين في نفس اللحظة)
export async function createBooking({ branchId, branchName, service, date, time, name, phone }) {
  const dateKey = toDateKey(date);

  const already = await getBookedTimes(branchId, dateKey);
  if (already.includes(time)) {
    return { ok: false, reason: 'slot_taken' };
  }

  const docRef = await addDoc(collection(db, BOOKINGS_COLLECTION), {
    branchId,
    branchName,
    service,
    dateKey,
    dateLabel: date.toISOString(),
    time,
    name,
    phone,
    status: 'pending', // pending | confirmed | cancelled
    createdAt: serverTimestamp(),
  });

  return { ok: true, id: docRef.id };
}

// للأدمن: استماع لايف لكل الحجوزات (أحدث حجز الأول)
export function listenToBookings(callback) {
  const q = query(collection(db, BOOKINGS_COLLECTION), orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snap) => {
    const bookings = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(bookings);
  });
}

export async function updateBookingStatus(id, status) {
  await updateDoc(doc(db, BOOKINGS_COLLECTION, id), { status });
}

export async function deleteBooking(id) {
  await deleteDoc(doc(db, BOOKINGS_COLLECTION, id));
}