// ==================== Interfaces ====================

export interface ClassItem {
  id: string;
  name: string;
  subject: string;
  level: string;
  description: string;
  maxStudents: number;
  fee: number;
  status: 'active' | 'inactive';
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
  phone: string;
  subjects: string[];
  bio: string;
  avatarUrl: string;
  status: 'active' | 'inactive';
}

export interface ScheduleItem {
  id: string;
  classId: string;
  className: string;
  teacherId: string;
  teacherName: string;
  subject: string;
  dayOfWeek: number; // 1=Monday ... 7=Sunday
  startTime: string; // "HH:mm"
  endTime: string;   // "HH:mm"
  room: string;
  color: string;
  status: 'active' | 'inactive';
}

export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  parentName: string;
  parentPhone: string;
  dob: string;
  enrolledDate: string;
  status: 'active' | 'inactive';
}

export interface Enrollment {
  id: string;
  studentId: string;
  studentName?: string;
  classId: string;
  className?: string;
  enrolledDate: string;
  status: 'active' | 'cancelled';
  note: string;
}

export interface SiteSettings {
  siteName: string;
  phone: string;
  email: string;
  address: string;
  facebook: string;
  zalo: string;
  description: string;
  logoUrl: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'new' | 'read' | 'replied';
}

// ==================== Constants ====================

export const SUBJECT_LABELS: Record<string, string> = {
  english: 'Tiếng Anh',
  math: 'Toán',
  physics: 'Vật Lý',
  chemistry: 'Hóa Học',
  literature: 'Ngữ Văn',
  biology: 'Sinh Học',
  history: 'Lịch Sử',
  geography: 'Địa Lý',
  informatics: 'Tin Học',
};

export const SUBJECT_COLORS: Record<string, string> = {
  english: '#3b82f6',
  math: '#ef4444',
  physics: '#8b5cf6',
  chemistry: '#10b981',
  literature: '#f59e0b',
  biology: '#06b6d4',
  history: '#ec4899',
  geography: '#84cc16',
  informatics: '#6366f1',
};

export const SUBJECT_BG_CLASSES: Record<string, string> = {
  english: 'bg-blue-500',
  math: 'bg-red-500',
  physics: 'bg-violet-500',
  chemistry: 'bg-emerald-500',
  literature: 'bg-amber-500',
  biology: 'bg-cyan-500',
  history: 'bg-pink-500',
  geography: 'bg-lime-500',
  informatics: 'bg-indigo-500',
};

export const SUBJECT_LIGHT_BG: Record<string, string> = {
  english: 'bg-blue-50 text-blue-700 border-blue-200',
  math: 'bg-red-50 text-red-700 border-red-200',
  physics: 'bg-violet-50 text-violet-700 border-violet-200',
  chemistry: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  literature: 'bg-amber-50 text-amber-700 border-amber-200',
  biology: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  history: 'bg-pink-50 text-pink-700 border-pink-200',
  geography: 'bg-lime-50 text-lime-700 border-lime-200',
  informatics: 'bg-indigo-50 text-indigo-700 border-indigo-200',
};

export const DAYS_OF_WEEK = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
export const DAYS_OF_WEEK_SHORT = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
export const DAYS_MONDAY_START = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];
export const DAYS_MONDAY_START_SHORT = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

export const LEVEL_OPTIONS = [
  'Lớp 6', 'Lớp 7', 'Lớp 8', 'Lớp 9',
  'Lớp 10', 'Lớp 11', 'Lớp 12',
  'Cơ bản', 'Trung cấp', 'Nâng cao',
  'Luyện thi',
];
