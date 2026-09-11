'use client';

import { useState, useMemo } from 'react';
import { MOCK_CLASSES, MOCK_SCHEDULE } from '@/lib/constants';
import { SUBJECT_LABELS, SUBJECT_BG_CLASSES, SUBJECT_COLORS } from '@/types';
import { Clock, User, BookOpen, GraduationCap, ChevronRight, Calendar } from 'lucide-react';
import { cn, formatCurrency } from '@/lib/utils';
import Link from 'next/link';

export default function CoursesPage() {
  const [filterSubject, setFilterSubject] = useState<string>('all');

  const filteredCourses = useMemo(() => {
    if (filterSubject === 'all') return MOCK_CLASSES;
    return MOCK_CLASSES.filter(c => c.subject === filterSubject);
  }, [filterSubject]);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Danh sách Khóa học</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Khám phá các khóa học chất lượng cao tại NTT Class, được thiết kế chuyên biệt để giúp học sinh nắm vững kiến thức và đạt kết quả xuất sắc.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl -mt-8 relative z-20">
        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-md p-4 mb-10 flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setFilterSubject('all')}
            className={cn(
              "px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300",
              filterSubject === 'all' 
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" 
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            )}
          >
            Tất cả
          </button>
          {Object.entries(SUBJECT_LABELS).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilterSubject(key)}
              className={cn(
                "px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300",
                filterSubject === key 
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" 
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => {
              const scheduleItem = MOCK_SCHEDULE.find(s => s.classId === course.id);
              const subjectColorClass = SUBJECT_BG_CLASSES[course.subject as keyof typeof SUBJECT_BG_CLASSES] || 'bg-blue-500';
              
              return (
                <div key={course.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-slate-100 flex flex-col h-full group">
                  <div className={cn("h-2 w-full", subjectColorClass)}></div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <span className={cn(
                        "text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full",
                        SUBJECT_BG_CLASSES[course.subject as keyof typeof SUBJECT_BG_CLASSES]?.replace('bg-', 'text-').replace('-500', '-700'),
                        SUBJECT_BG_CLASSES[course.subject as keyof typeof SUBJECT_BG_CLASSES]?.replace('bg-', 'bg-').replace('-500', '-100')
                      )}>
                        {SUBJECT_LABELS[course.subject as keyof typeof SUBJECT_LABELS] || course.subject}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                        <GraduationCap className="w-3.5 h-3.5" />
                        Lớp {course.level}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{course.name}</h3>
                    
                    <p className="text-slate-500 text-sm mb-6 flex-1 line-clamp-3">
                      Khóa học chuyên sâu giúp học sinh nắm vững kiến thức trọng tâm, rèn luyện kỹ năng giải bài tập và chuẩn bị tốt cho các kỳ thi.
                    </p>
                    
                    <div className="space-y-3 mb-6 bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <div className="flex items-center text-sm text-slate-700">
                        <User className="w-4 h-4 text-slate-400 mr-3 shrink-0" />
                        <span className="font-medium">{scheduleItem?.teacherName || 'Đang cập nhật'}</span>
                      </div>
                      <div className="flex items-center text-sm text-slate-700">
                        <Calendar className="w-4 h-4 text-slate-400 mr-3 shrink-0" />
                        <span>{scheduleItem?.dayOfWeek || 'Đang cập nhật'}</span>
                      </div>
                      <div className="flex items-center text-sm text-slate-700">
                        <Clock className="w-4 h-4 text-slate-400 mr-3 shrink-0" />
                        <span>{scheduleItem ? `${scheduleItem.startTime} - ${scheduleItem.endTime}` : 'Đang cập nhật'}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                      <div className="text-lg font-bold text-amber-600">
                        {formatCurrency(course.fee)}
                        <span className="text-xs font-normal text-slate-400 ml-1">/tháng</span>
                      </div>
                      <Link 
                        href={`/register?course=${course.id}`}
                        className="flex items-center justify-center gap-2 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-xl font-semibold transition-colors duration-300 text-sm"
                      >
                        Đăng ký ngay <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center">
            <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">Không tìm thấy khóa học</h3>
            <p className="text-slate-500">Hiện tại không có khóa học nào phù hợp với bộ lọc của bạn.</p>
            <button 
              onClick={() => setFilterSubject('all')}
              className="mt-6 text-blue-600 font-medium hover:underline"
            >
              Xem tất cả khóa học
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
