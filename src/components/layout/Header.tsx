'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Lịch học', href: '/scheduler' },
    { name: 'Khóa học', href: '/courses' },
    { name: 'Giáo viên', href: '/teachers' },
    { name: 'Liên hệ', href: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2 h-16'
          : 'bg-white py-4 h-20'
      )}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-blue-700 text-white p-2 rounded-lg group-hover:bg-blue-800 transition-colors">
            <GraduationCap className="h-6 w-6" />
          </div>
          <span className="text-2xl font-bold text-blue-700 tracking-tight">EduCenter</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-blue-600 relative after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full',
                pathname === link.href ? 'text-blue-600 after:w-full' : 'text-slate-600'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/register"
            className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
          >
            Đăng ký học
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                pathname === link.href
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-600 hover:bg-slate-50'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/register"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 rounded-lg font-medium text-center transition-colors shadow-sm"
          >
            Đăng ký học
          </Link>
        </div>
      )}
    </header>
  );
}
