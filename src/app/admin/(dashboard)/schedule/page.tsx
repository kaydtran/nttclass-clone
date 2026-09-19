'use client';

import { useState } from 'react';
import { Plus, Edit, Trash2, Search, X } from 'lucide-react';
import { MOCK_SCHEDULE } from '@/lib/constants';
import { DAYS_OF_WEEK, ScheduleItem } from '@/types';

export default function SchedulePage() {
  const [schedules, setSchedules] = useState<ScheduleItem[]>(MOCK_SCHEDULE);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState<Partial<ScheduleItem>>({
    classId: '',
    teacherId: '',
    dayOfWeek: 1,
    startTime: '08:00',
    endTime: '09:30',
    room: 'Phòng 1'
  });

  const filtered = schedules.filter(s =>
    s.className.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.teacherName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: string) => {
    if (confirm('Bạn có chắc chắn muốn xóa lịch này?')) {
      setSchedules(prev => prev.filter(s => s.id !== id));
    }
  };

  const handleEdit = (item: ScheduleItem) => {
    setFormData(item);
    setEditingId(item.id);
    setIsModalOpen(true);
  };

  const openNew = () => {
    setFormData({
      classId: '',
      teacherId: '',
      dayOfWeek: 1,
      startTime: '08:00',
      endTime: '09:30',
      room: 'Phòng 1'
    });
    setEditingId(null);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (editingId) {
      setSchedules(prev => prev.map(s => s.id === editingId ? { ...s, ...formData } as ScheduleItem : s));
    } else {
      setSchedules(prev => [...prev, { ...formData, id: Date.now().toString() } as ScheduleItem]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-slate-900">Quản lý Lịch dạy</h1>
        <button onClick={openNew} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors">
          <Plus size={20} />
          Thêm lịch mới
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Tìm kiếm theo lớp, giáo viên..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 font-medium">Lớp</th>
                <th className="px-6 py-3 font-medium">Giáo viên</th>
                <th className="px-6 py-3 font-medium">Thứ</th>
                <th className="px-6 py-3 font-medium">Giờ</th>
                <th className="px-6 py-3 font-medium">Phòng</th>
                <th className="px-6 py-3 font-medium text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map(item => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4 font-medium text-slate-900">{item.className}</td>
                  <td className="px-6 py-4 text-slate-600">{item.teacherName}</td>
                  <td className="px-6 py-4 text-slate-600">{DAYS_OF_WEEK[item.dayOfWeek] || ''}</td>
                  <td className="px-6 py-4 text-slate-600">{item.startTime} - {item.endTime}</td>
                  <td className="px-6 py-4 text-slate-600">{item.room}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => handleEdit(item)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit size={16} />
                      </button>
                      <button onClick={() => handleDelete(item.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-slate-500">Không tìm thấy lịch dạy nào.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900">{editingId ? 'Cập nhật lịch dạy' : 'Thêm lịch dạy mới'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 p-1">
                <X size={20} />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Lớp học</label>
                <input
                  type="text"
                  value={formData.classId || ''}
                  onChange={e => setFormData({ ...formData, classId: e.target.value })}
                  className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ID Lớp"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Giáo viên</label>
                <input
                  type="text"
                  value={formData.teacherId || ''}
                  onChange={e => setFormData({ ...formData, teacherId: e.target.value })}
                  className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ID Giáo viên"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Thứ</label>
                <select
                  value={formData.dayOfWeek || 1}
                  onChange={e => setFormData({ ...formData, dayOfWeek: parseInt(e.target.value) })}
                  className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {DAYS_OF_WEEK.map((day, idx) => (
                    <option key={idx} value={idx}>{day}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Giờ bắt đầu</label>
                  <input
                    type="time"
                    value={formData.startTime || ''}
                    onChange={e => setFormData({ ...formData, startTime: e.target.value })}
                    className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Giờ kết thúc</label>
                  <input
                    type="time"
                    value={formData.endTime || ''}
                    onChange={e => setFormData({ ...formData, endTime: e.target.value })}
                    className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Phòng</label>
                <input
                  type="text"
                  value={formData.room || ''}
                  onChange={e => setFormData({ ...formData, room: e.target.value })}
                  className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Phòng học"
                />
              </div>
            </div>
            <div className="p-4 border-t border-slate-100 flex justify-end gap-3 bg-slate-50">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-slate-600 hover:bg-slate-200 rounded-lg font-medium transition-colors">
                Hủy
              </button>
              <button onClick={handleSave} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                Lưu thay đổi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
