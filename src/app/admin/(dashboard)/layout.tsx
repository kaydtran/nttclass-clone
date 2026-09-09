'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { isAuthenticated, clearSession } from '@/lib/auth';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  Calendar,
  BookOpen,
  Users,
  UserCheck,
  Settings,
  Home,
  LogOut,
  Menu,
  X
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: BarChart3 },
  { name: 'Lịch dạy', href: '/admin/schedule', icon: Calendar },
  { name: 'Khóa học', href: '/admin/classes', icon: BookOpen },
  { name: 'Học viên', href: '/admin/students', icon: Users },
  { name: 'Giáo viên', href: '/admin/teachers', icon: UserCheck },
  { name: 'Cài đặt', href: '/admin/settings', icon: Settings },
];

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (!isAuthenticated()) {
      router.push('/admin/login');
    }
  }, [router]);

  if (!isMounted) return null; // Prevent hydration mismatch

  const handleLogout = () => {
    clearSession();
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:block",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="bg-blue-600 text-white p-1 rounded-lg"><BookOpen size={24} /></span>
              NTT Class
            </h2>
          </div>

          <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                    isActive 
                      ? "bg-blue-600 text-white shadow-md shadow-blue-900/20" 
                      : "hover:bg-slate-800 hover:text-white"
                  )}
                >
                  <Icon size={20} className={cn(isActive ? "text-white" : "text-slate-400 group-hover:text-blue-400")} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
            
            <div className="my-4 border-t border-slate-800 pt-4">
              <Link
                href="/"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 hover:bg-slate-800 hover:text-white text-slate-400"
              >
                <Home size={20} className="group-hover:text-blue-400" />
                <span className="font-medium">Về trang chủ</span>
              </Link>
            </div>
          </nav>

          <div className="p-4 border-t border-slate-800">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg transition-all duration-200 hover:bg-red-500/10 hover:text-red-400 text-slate-400"
            >
              <LogOut size={20} />
              <span className="font-medium">Đăng xuất</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4 lg:px-8 shrink-0 z-10">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            <Menu size={24} />
          </button>
          <div className="flex-1"></div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-slate-600 font-medium">Xin chào, Admin</div>
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
