'use client';

import { useState } from 'react';
import { Plus, Edit, Trash2, Search, X } from 'lucide-react';
import { MOCK_CLASSES } from '@/lib/constants';
import { ClassItem } from '@/types';
import { formatCurrency } from '@/lib/utils';

export default function ClassesPage() {
  const [classes, setClasses] = useState<ClassItem[]>(MOCK_CLASSES);
  const [searchTerm, setSearchTerm] = useState('');
  
  const filtered = classes.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-slate-900">Quản lý Khóa học</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors">
          <Plus size={20} />
          Thêm khóa học
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Tìm kiếm theo tên khóa học, môn học..." 
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
                <th className="px-6 py-3 font-medium">Mã/Tên lớp</th>
                <th className="px-6 py-3 font-medium">Môn học</th>
                <th className="px-6 py-3 font-medium">Cấp độ/Khối</th>
                <th className="px-6 py-3 font-medium">Học phí</th>
                <th className="px-6 py-3 font-medium">Sĩ số</th>
                <th className="px-6 py-3 font-medium">Trạng thái</th>
                <th className="px-6 py-3 font-medium text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map(item => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-900">{item.name}</div>
                    <div className="text-xs text-slate-500">{item.id}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{item.subject}</td>
                  <td className="px-6 py-4 text-slate-600">{item.level}</td>
                  <td className="px-6 py-4 text-slate-600">{formatCurrency(item.fee)}/tháng</td>
                  <td className="px-6 py-4 text-slate-600">0/{item.maxStudents}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${item.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                      {item.status === 'active' ? 'Đang hoạt động' : 'Đã đóng'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit size={16} />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
