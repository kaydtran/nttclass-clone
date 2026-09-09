import { ClassItem, Teacher, ScheduleItem, Student, SiteSettings } from '@/types';

export const GAS_API_URL = process.env.NEXT_PUBLIC_GAS_URL || '';
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const MOCK_SETTINGS: SiteSettings = {
  siteName: 'EduCenter',
  phone: '0123 456 789',
  email: 'info@educenter.vn',
  address: '123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh',
  facebook: 'https://facebook.com/educenter',
  zalo: 'https://zalo.me/0123456789',
  description: 'Trung tâm Anh ngữ & Bồi dưỡng Văn hóa hàng đầu',
  logoUrl: '',
};

export const MOCK_CLASSES: ClassItem[] = [
  { id: '1', name: 'IELTS Fundamentals', subject: 'english', level: 'Cơ bản', description: 'Khóa IELTS nền tảng cho người mới bắt đầu, target 5.0-5.5. Rèn luyện đầy đủ 4 kỹ năng Nghe - Nói - Đọc - Viết.', maxStudents: 20, fee: 3500000, status: 'active' },
  { id: '2', name: 'IELTS Advanced', subject: 'english', level: 'Nâng cao', description: 'Khóa IELTS nâng cao, target 6.5-7.5. Chiến lược làm bài chuyên sâu.', maxStudents: 15, fee: 5000000, status: 'active' },
  { id: '3', name: 'Toán 12 - Luyện thi THPT', subject: 'math', level: 'Lớp 12', description: 'Luyện thi THPT Quốc gia môn Toán. Tổng ôn kiến thức & giải đề chuyên sâu.', maxStudents: 25, fee: 2500000, status: 'active' },
  { id: '4', name: 'Vật Lý 11', subject: 'physics', level: 'Lớp 11', description: 'Bồi dưỡng Vật Lý lớp 11: Điện học, Từ trường, Quang học.', maxStudents: 20, fee: 2000000, status: 'active' },
  { id: '5', name: 'Hóa Học 12 - Luyện thi', subject: 'chemistry', level: 'Lớp 12', description: 'Luyện thi THPT Quốc gia môn Hóa. Hệ thống kiến thức & phương pháp giải nhanh.', maxStudents: 20, fee: 2500000, status: 'active' },
  { id: '6', name: 'Ngữ Văn 12', subject: 'literature', level: 'Lớp 12', description: 'Bồi dưỡng Ngữ Văn 12: Nghị luận xã hội & nghị luận văn học.', maxStudents: 25, fee: 2000000, status: 'active' },
  { id: '7', name: 'English Communication', subject: 'english', level: 'Trung cấp', description: 'Tiếng Anh giao tiếp cho người đi làm. Phát âm chuẩn, tự tin hội thoại.', maxStudents: 15, fee: 3000000, status: 'active' },
  { id: '8', name: 'Toán 10 - Nâng cao', subject: 'math', level: 'Lớp 10', description: 'Toán nâng cao lớp 10: Hàm số, phương trình, bất phương trình.', maxStudents: 20, fee: 2000000, status: 'active' },
];

export const MOCK_TEACHERS: Teacher[] = [
  { id: '1', name: 'Nguyễn Văn An', email: 'an.nguyen@educenter.vn', phone: '0901 234 567', subjects: ['english'], bio: 'IELTS 8.5, 10 năm kinh nghiệm giảng dạy. Thạc sĩ Ngôn ngữ Anh - ĐH KHXH&NV TP.HCM.', avatarUrl: 'https://ui-avatars.com/api/?name=Nguyen+Van+An&background=3b82f6&color=fff&size=200', status: 'active' },
  { id: '2', name: 'Trần Thị Bình', email: 'binh.tran@educenter.vn', phone: '0902 345 678', subjects: ['math'], bio: 'Thạc sĩ Toán học, 8 năm kinh nghiệm luyện thi THPT QG. Nhiều học sinh đạt 9+ môn Toán.', avatarUrl: 'https://ui-avatars.com/api/?name=Tran+Thi+Binh&background=ef4444&color=fff&size=200', status: 'active' },
  { id: '3', name: 'Lê Minh Cường', email: 'cuong.le@educenter.vn', phone: '0903 456 789', subjects: ['physics'], bio: 'Tiến sĩ Vật Lý, giảng viên ĐH Bách Khoa. 12 năm kinh nghiệm giảng dạy.', avatarUrl: 'https://ui-avatars.com/api/?name=Le+Minh+Cuong&background=8b5cf6&color=fff&size=200', status: 'active' },
  { id: '4', name: 'Phạm Hoàng Dung', email: 'dung.pham@educenter.vn', phone: '0904 567 890', subjects: ['chemistry'], bio: 'Thạc sĩ Hóa Học, 7 năm kinh nghiệm. Chuyên luyện thi THPT QG và HSG cấp tỉnh.', avatarUrl: 'https://ui-avatars.com/api/?name=Pham+Hoang+Dung&background=10b981&color=fff&size=200', status: 'active' },
  { id: '5', name: 'Võ Thị Mai', email: 'mai.vo@educenter.vn', phone: '0905 678 901', subjects: ['literature'], bio: 'Cử nhân Sư phạm Ngữ Văn, 15 năm kinh nghiệm. Nhiều học sinh đạt giải HSG thành phố.', avatarUrl: 'https://ui-avatars.com/api/?name=Vo+Thi+Mai&background=f59e0b&color=fff&size=200', status: 'active' },
  { id: '6', name: 'David Smith', email: 'david@educenter.vn', phone: '0906 789 012', subjects: ['english'], bio: 'Native speaker từ Mỹ, TESOL certified. 5 năm giảng dạy tại Việt Nam.', avatarUrl: 'https://ui-avatars.com/api/?name=David+Smith&background=06b6d4&color=fff&size=200', status: 'active' },
];

export const MOCK_SCHEDULE: ScheduleItem[] = [
  // Monday (1)
  { id: '1', classId: '1', className: 'IELTS Fundamentals', teacherId: '1', teacherName: 'Nguyễn Văn An', subject: 'english', dayOfWeek: 1, startTime: '08:00', endTime: '09:30', room: 'P.101', color: '#3b82f6', status: 'active' },
  { id: '2', classId: '3', className: 'Toán 12 - Luyện thi THPT', teacherId: '2', teacherName: 'Trần Thị Bình', subject: 'math', dayOfWeek: 1, startTime: '09:30', endTime: '11:00', room: 'P.102', color: '#ef4444', status: 'active' },
  { id: '3', classId: '4', className: 'Vật Lý 11', teacherId: '3', teacherName: 'Lê Minh Cường', subject: 'physics', dayOfWeek: 1, startTime: '14:00', endTime: '15:30', room: 'P.201', color: '#8b5cf6', status: 'active' },
  { id: '4', classId: '7', className: 'English Communication', teacherId: '6', teacherName: 'David Smith', subject: 'english', dayOfWeek: 1, startTime: '17:30', endTime: '19:00', room: 'P.101', color: '#06b6d4', status: 'active' },
  // Tuesday (2)
  { id: '5', classId: '5', className: 'Hóa Học 12 - Luyện thi', teacherId: '4', teacherName: 'Phạm Hoàng Dung', subject: 'chemistry', dayOfWeek: 2, startTime: '08:00', endTime: '09:30', room: 'P.201', color: '#10b981', status: 'active' },
  { id: '6', classId: '6', className: 'Ngữ Văn 12', teacherId: '5', teacherName: 'Võ Thị Mai', subject: 'literature', dayOfWeek: 2, startTime: '09:30', endTime: '11:00', room: 'P.102', color: '#f59e0b', status: 'active' },
  { id: '7', classId: '2', className: 'IELTS Advanced', teacherId: '1', teacherName: 'Nguyễn Văn An', subject: 'english', dayOfWeek: 2, startTime: '14:00', endTime: '15:30', room: 'P.101', color: '#3b82f6', status: 'active' },
  { id: '8', classId: '8', className: 'Toán 10 - Nâng cao', teacherId: '2', teacherName: 'Trần Thị Bình', subject: 'math', dayOfWeek: 2, startTime: '17:30', endTime: '19:00', room: 'P.102', color: '#ef4444', status: 'active' },
  // Wednesday (3)
  { id: '9', classId: '1', className: 'IELTS Fundamentals', teacherId: '1', teacherName: 'Nguyễn Văn An', subject: 'english', dayOfWeek: 3, startTime: '08:00', endTime: '09:30', room: 'P.101', color: '#3b82f6', status: 'active' },
  { id: '10', classId: '3', className: 'Toán 12 - Luyện thi THPT', teacherId: '2', teacherName: 'Trần Thị Bình', subject: 'math', dayOfWeek: 3, startTime: '09:30', endTime: '11:00', room: 'P.102', color: '#ef4444', status: 'active' },
  { id: '11', classId: '4', className: 'Vật Lý 11', teacherId: '3', teacherName: 'Lê Minh Cường', subject: 'physics', dayOfWeek: 3, startTime: '14:00', endTime: '15:30', room: 'P.201', color: '#8b5cf6', status: 'active' },
  { id: '12', classId: '7', className: 'English Communication', teacherId: '6', teacherName: 'David Smith', subject: 'english', dayOfWeek: 3, startTime: '17:30', endTime: '19:00', room: 'P.101', color: '#06b6d4', status: 'active' },
  // Thursday (4)
  { id: '13', classId: '5', className: 'Hóa Học 12 - Luyện thi', teacherId: '4', teacherName: 'Phạm Hoàng Dung', subject: 'chemistry', dayOfWeek: 4, startTime: '08:00', endTime: '09:30', room: 'P.201', color: '#10b981', status: 'active' },
  { id: '14', classId: '6', className: 'Ngữ Văn 12', teacherId: '5', teacherName: 'Võ Thị Mai', subject: 'literature', dayOfWeek: 4, startTime: '09:30', endTime: '11:00', room: 'P.102', color: '#f59e0b', status: 'active' },
  { id: '15', classId: '2', className: 'IELTS Advanced', teacherId: '1', teacherName: 'Nguyễn Văn An', subject: 'english', dayOfWeek: 4, startTime: '14:00', endTime: '15:30', room: 'P.101', color: '#3b82f6', status: 'active' },
  { id: '16', classId: '8', className: 'Toán 10 - Nâng cao', teacherId: '2', teacherName: 'Trần Thị Bình', subject: 'math', dayOfWeek: 4, startTime: '17:30', endTime: '19:00', room: 'P.102', color: '#ef4444', status: 'active' },
  // Friday (5)
  { id: '17', classId: '1', className: 'IELTS Fundamentals', teacherId: '1', teacherName: 'Nguyễn Văn An', subject: 'english', dayOfWeek: 5, startTime: '08:00', endTime: '09:30', room: 'P.101', color: '#3b82f6', status: 'active' },
  { id: '18', classId: '3', className: 'Toán 12 - Luyện thi THPT', teacherId: '2', teacherName: 'Trần Thị Bình', subject: 'math', dayOfWeek: 5, startTime: '09:30', endTime: '11:00', room: 'P.102', color: '#ef4444', status: 'active' },
  { id: '19', classId: '5', className: 'Hóa Học 12 - Luyện thi', teacherId: '4', teacherName: 'Phạm Hoàng Dung', subject: 'chemistry', dayOfWeek: 5, startTime: '14:00', endTime: '15:30', room: 'P.201', color: '#10b981', status: 'active' },
  { id: '20', classId: '7', className: 'English Communication', teacherId: '6', teacherName: 'David Smith', subject: 'english', dayOfWeek: 5, startTime: '17:30', endTime: '19:00', room: 'P.101', color: '#06b6d4', status: 'active' },
  // Saturday (6)
  { id: '21', classId: '2', className: 'IELTS Advanced', teacherId: '1', teacherName: 'Nguyễn Văn An', subject: 'english', dayOfWeek: 6, startTime: '08:00', endTime: '09:30', room: 'P.101', color: '#3b82f6', status: 'active' },
  { id: '22', classId: '8', className: 'Toán 10 - Nâng cao', teacherId: '2', teacherName: 'Trần Thị Bình', subject: 'math', dayOfWeek: 6, startTime: '09:30', endTime: '11:00', room: 'P.102', color: '#ef4444', status: 'active' },
  { id: '23', classId: '6', className: 'Ngữ Văn 12', teacherId: '5', teacherName: 'Võ Thị Mai', subject: 'literature', dayOfWeek: 6, startTime: '14:00', endTime: '15:30', room: 'P.102', color: '#f59e0b', status: 'active' },
  { id: '24', classId: '4', className: 'Vật Lý 11', teacherId: '3', teacherName: 'Lê Minh Cường', subject: 'physics', dayOfWeek: 6, startTime: '14:00', endTime: '15:30', room: 'P.201', color: '#8b5cf6', status: 'active' },
];

export const MOCK_STUDENTS: Student[] = [
  { id: '1', name: 'Nguyễn Minh Tuấn', email: 'tuan@gmail.com', phone: '0911 111 111', parentName: 'Nguyễn Văn Hùng', parentPhone: '0922 222 222', dob: '2006-05-15', enrolledDate: '2024-09-01', status: 'active' },
  { id: '2', name: 'Trần Thùy Linh', email: 'linh@gmail.com', phone: '0933 333 333', parentName: 'Trần Văn Đức', parentPhone: '0944 444 444', dob: '2007-03-22', enrolledDate: '2024-09-15', status: 'active' },
  { id: '3', name: 'Lê Hoàng Nam', email: 'nam@gmail.com', phone: '0955 555 555', parentName: 'Lê Thị Hoa', parentPhone: '0966 666 666', dob: '2006-11-08', enrolledDate: '2024-10-01', status: 'active' },
  { id: '4', name: 'Phạm Thanh Hà', email: 'ha@gmail.com', phone: '0977 777 777', parentName: 'Phạm Minh Tâm', parentPhone: '0988 888 888', dob: '2005-07-30', enrolledDate: '2024-08-20', status: 'active' },
  { id: '5', name: 'Võ Đình Khoa', email: 'khoa@gmail.com', phone: '0999 999 999', parentName: 'Võ Văn Thành', parentPhone: '0900 000 000', dob: '2007-01-14', enrolledDate: '2024-09-10', status: 'active' },
];

export const TIME_SLOTS = [
  '07:00', '07:30', '08:00', '08:30', '09:00', '09:30',
  '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
  '19:00', '19:30', '20:00', '20:30', '21:00',
];
