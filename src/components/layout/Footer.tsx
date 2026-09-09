import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, GraduationCap, Facebook, MessageCircle } from 'lucide-react';
import { MOCK_SETTINGS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">EduCenter</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Trung tâm Anh ngữ và Bồi dưỡng Văn hóa chất lượng cao, đồng hành cùng bạn trên con đường chinh phục tri thức.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all text-slate-400">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Khóa học</h3>
            <ul className="space-y-4">
              {['IELTS', 'Tiếng Anh Giao Tiếp', 'Toán Học', 'Vật Lý', 'Hóa Học', 'Ngữ Văn'].map((item) => (
                <li key={item}>
                  <Link href="/courses" className="hover:text-amber-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Liên kết</h3>
            <ul className="space-y-4">
              {[
                { name: 'Trang chủ', href: '/' },
                { name: 'Lịch học', href: '/scheduler' },
                { name: 'Đội ngũ giáo viên', href: '/teachers' },
                { name: 'Liên hệ', href: '/contact' },
                { name: 'Đăng ký học', href: '/register' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-amber-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                <span>{MOCK_SETTINGS?.address || '123 Đường Nguyễn Văn Cừ, Quận 5, TP.HCM'}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-slate-400 shrink-0" />
                <span>{MOCK_SETTINGS?.phone || '0123 456 789'}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-slate-400 shrink-0" />
                <span>{MOCK_SETTINGS?.email || 'contact@educenter.edu.vn'}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© 2024 EduCenter. Mọi quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
