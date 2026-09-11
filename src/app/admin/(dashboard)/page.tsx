'use client';

import { Users, BookOpen, UserCheck, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { MOCK_STUDENTS, MOCK_CLASSES, MOCK_TEACHERS, MOCK_SCHEDULE } from '@/lib/constants';

export default function AdminDashboard() {
  const stats = [
    { name: 'Tổng học viên', value: MOCK_STUDENTS.length, icon: Users, color: 'bg-blue-500' },
    { name: 'Tổng khóa học', value: MOCK_CLASSES.length, icon: BookOpen, color: 'bg-indigo-500' },
    { name: 'Tổng giáo viên', value: MOCK_TEACHERS.length, icon: UserCheck, color: 'bg-emerald-500' },
    { name: 'Lịch dạy tuần này', value: MOCK_SCHEDULE.length, icon: Calendar, color: 'bg-amber-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Tổng quan</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${stat.color} shadow-lg shadow-${stat.color.split('-')[1]}-500/30`}>
                <Icon size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.name}</p>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Enrollments */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Học viên mới đăng ký</h2>
            <Link href="/admin/students" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
              Xem tất cả <ArrowRight size={16} />
            </Link>
          </div>
          <div className="p-0 flex-1">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 font-medium">Họ tên</th>
                  <th className="px-6 py-3 font-medium">Khóa học</th>
                  <th className="px-6 py-3 font-medium">Ngày ĐK</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MOCK_STUDENTS.slice(0, 5).map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">{student.name}</td>
                    <td className="px-6 py-4 text-slate-600">-</td>
                    <td className="px-6 py-4 text-slate-500">Hôm nay</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-900">Thao tác nhanh</h2>
          </div>
          <div className="p-6 grid grid-cols-2 gap-4">
            <Link href="/admin/schedule" className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors border border-slate-100 group">
              <Calendar size={32} className="text-slate-400 group-hover:text-blue-500 mb-3" />
              <span className="font-medium text-slate-700 group-hover:text-blue-700">Xếp lịch dạy</span>
            </Link>
            <Link href="/admin/classes" className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors border border-slate-100 group">
              <BookOpen size={32} className="text-slate-400 group-hover:text-indigo-500 mb-3" />
              <span className="font-medium text-slate-700 group-hover:text-indigo-700">Mở lớp mới</span>
            </Link>
            <Link href="/admin/students" className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition-colors border border-slate-100 group">
              <Users size={32} className="text-slate-400 group-hover:text-emerald-500 mb-3" />
              <span className="font-medium text-slate-700 group-hover:text-emerald-700">Thêm học viên</span>
            </Link>
            <Link href="/admin/teachers" className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-colors border border-slate-100 group">
              <UserCheck size={32} className="text-slate-400 group-hover:text-amber-500 mb-3" />
              <span className="font-medium text-slate-700 group-hover:text-amber-700">Thêm giáo viên</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
