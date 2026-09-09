'use client';

import { useState } from 'react';
import { MOCK_SETTINGS } from '@/lib/constants';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Liên hệ với chúng tôi</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn. Hãy gửi tin nhắn cho chúng tôi để được hỗ trợ tốt nhất.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Form Column */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Gửi tin nhắn</h2>
              </div>

              {isSuccess ? (
                <div className="bg-emerald-50 text-emerald-800 p-6 rounded-2xl flex flex-col items-center text-center py-12">
                  <CheckCircle className="w-16 h-16 text-emerald-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Gửi tin nhắn thành công!</h3>
                  <p className="text-emerald-600">
                    Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 px-6 py-2.5 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors"
                  >
                    Gửi tin nhắn khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700">Họ và tên <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white"
                        placeholder="Nguyễn Văn A"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-slate-700">Số điện thoại <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white"
                        placeholder="0901234567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-slate-700">Chủ đề <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white"
                        placeholder="Vấn đề cần hỗ trợ"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">Nội dung <span className="text-red-500">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                      placeholder="Vui lòng mô tả chi tiết..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full md:w-auto px-8 py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/20",
                      isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Gửi tin nhắn
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Thông tin liên hệ</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Địa chỉ</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{MOCK_SETTINGS.centerAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Điện thoại</h4>
                    <p className="text-slate-600 text-sm">{MOCK_SETTINGS.centerPhone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600 text-sm">{MOCK_SETTINGS.centerEmail}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Giờ làm việc</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Thứ 2 - Thứ 7: 7:00 - 21:00<br/>
                      Chủ nhật: 8:00 - 17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-200 rounded-3xl h-64 w-full overflow-hidden relative shadow-sm border border-slate-100 group">
              <div className="absolute inset-0 bg-black/5 flex items-center justify-center group-hover:bg-black/0 transition-colors z-10 pointer-events-none"></div>
              {/* Replace with actual map iframe in production */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2!2d106.6!3d10.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ4JzAwLjAiTiAxMDbCsDM2JzAwLjAiRQ!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
