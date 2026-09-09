'use client';

import { useState } from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import { MOCK_TEACHERS } from '@/lib/constants';

export default function TeachersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filtered = MOCK_TEACHERS.filter(t => 
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.phone.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-slate-900">Quản lý Giáo viên</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors">
          <Plus size={20} />
          Thêm giáo viên
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Tìm kiếm theo tên, số điện thoại..." 
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
                <th className="px-6 py-3 font-medium">Họ tên</th>
                <th className="px-6 py-3 font-medium">Liên hệ</th>
                <th className="px-6 py-3 font-medium">Môn dạy</th>
                <th className="px-6 py-3 font-medium">Mô tả ngắn</th>
                <th className="px-6 py-3 font-medium text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map(item => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-900">{item.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-slate-900">{item.phone}</div>
                    <div className="text-xs text-slate-500">{item.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {item.subjects.map(sub => (
                        <span key={sub} className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 max-w-xs truncate" title={item.bio}>
                    {item.bio}
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
