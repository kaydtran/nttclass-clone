'use client';

import { useState } from 'react';
import { MOCK_CLASSES } from '@/lib/constants';
import { User, Phone, Mail, Calendar, BookOpen, CheckCircle, Send, Users, UserPlus } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    phone: '',
    dob: '',
    parentName: '',
    parentPhone: '',
    selectedCourses: [] as string[],
    notes: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCourseChange = (courseId: string) => {
    setFormData(prev => {
      const isSelected = prev.selectedCourses.includes(courseId);
      if (isSelected) {
        return { ...prev, selectedCourses: prev.selectedCourses.filter(id => id !== courseId) };
      } else {
        return { ...prev, selectedCourses: [...prev.selectedCourses, courseId] };
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.selectedCourses.length === 0) {
      alert('Vui lòng chọn ít nhất một khóa học.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-10 rounded-[2rem] shadow-xl max-w-lg w-full text-center border border-slate-100">
          <div className="w-24 h-24 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Đăng ký thành công!</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Cảm ơn bạn đã đăng ký khóa học. Thông tin của bạn đã được ghi nhận. Trung tâm sẽ liên hệ với bạn qua số điện thoại <strong>{formData.phone}</strong> trong thời gian sớm nhất để xác nhận và tư vấn thêm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors"
            >
              Về trang chủ
            </Link>
            <button 
              onClick={() => {
                setIsSuccess(false);
                setFormData({ studentName: '', email: '', phone: '', dob: '', parentName: '', parentPhone: '', selectedCourses: [], notes: '' });
              }}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              Đăng ký thêm
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-800 to-indigo-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl backdrop-blur-sm mb-6">
            <UserPlus className="w-8 h-8 text-blue-200" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Đăng ký học</h1>
          <p className="text-blue-100 text-lg">Điền thông tin bên dưới để đăng ký tham gia các khóa học tại trung tâm.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl -mt-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
          
          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Student Info Section */}
              <section>
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-100">
                  <User className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-900">Thông tin học viên</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Họ và tên <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="studentName"
                      required
                      value={formData.studentName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 focus:bg-white outline-none transition-all"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Số điện thoại <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 focus:bg-white outline-none transition-all"
                      placeholder="0901234567"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 focus:bg-white outline-none transition-all"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Ngày sinh</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 focus:bg-white outline-none transition-all text-slate-700"
                    />
                  </div>
                </div>
              </section>

              {/* Parent Info Section */}
              <section>
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-100">
                  <Users className="w-5 h-5 text-indigo-600" />
                  <h3 className="text-xl font-bold text-slate-900">Thông tin phụ huynh</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Họ tên phụ huynh</label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 focus:bg-white outline-none transition-all"
                      placeholder="Nguyễn Văn B"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Số điện thoại phụ huynh</label>
                    <input
                      type="tel"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 focus:bg-white outline-none transition-all"
                      placeholder="0909876543"
                    />
                  </div>
                </div>
              </section>

              {/* Courses Selection */}
              <section>
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-100">
                  <BookOpen className="w-5 h-5 text-amber-500" />
                  <h3 className="text-xl font-bold text-slate-900">Chọn khóa học <span className="text-red-500">*</span></h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {MOCK_CLASSES.map(course => (
                    <label 
                      key={course.id} 
                      className={cn(
                        "flex items-start gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all",
                        formData.selectedCourses.includes(course.id)
                          ? "border-blue-500 bg-blue-50"
                          : "border-slate-100 hover:border-blue-200 bg-white"
                      )}
                    >
                      <div className="pt-1">
                        <input
                          type="checkbox"
                          className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                          checked={formData.selectedCourses.includes(course.id)}
                          onChange={() => handleCourseChange(course.id)}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 leading-tight">{course.name}</h4>
                        <p className="text-sm text-slate-500 mt-1">Giáo viên: {course.teacherName}</p>
                        <p className="text-xs font-semibold text-blue-600 mt-1 bg-blue-100/50 inline-block px-2 py-0.5 rounded">Lớp {course.level}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </section>

              {/* Notes */}
              <section>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Ghi chú thêm (nếu có)</label>
                  <textarea
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 focus:bg-white outline-none transition-all resize-none"
                    placeholder="Những yêu cầu đặc biệt hoặc câu hỏi của bạn..."
                  ></textarea>
                </div>
              </section>

              {/* Submit Button */}
              <div className="pt-6 border-t border-slate-100">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-4 rounded-xl font-bold text-lg text-white flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/30",
                    isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:-translate-y-1"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Đang xử lý...
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      Gửi đăng ký học
                    </>
                  )}
                </button>
                <p className="text-center text-sm text-slate-500 mt-4">
                  Bằng cách nhấp vào &ldquo;Gửi đăng ký học&rdquo;, bạn đồng ý với các điều khoản của trung tâm.
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
