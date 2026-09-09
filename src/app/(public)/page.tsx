'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Award, Users, BookOpen, Star, ChevronRight, 
  Quote 
} from 'lucide-react';
import { MOCK_CLASSES, MOCK_TEACHERS } from '@/lib/constants';
import { SUBJECT_BG_CLASSES, SUBJECT_LABELS } from '@/types';
import { cn, formatCurrency } from '@/lib/utils';

export default function HomePage() {
  const featureCards = [
    {
      icon: <Award className="h-8 w-8 text-amber-500" />,
      title: 'Giáo viên giỏi',
      description: 'Đội ngũ giáo viên tận tâm, nhiều năm kinh nghiệm giảng dạy.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: 'Lớp học nhỏ',
      description: 'Sĩ số ít giúp giáo viên theo sát từng học viên hiệu quả.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-500" />,
      title: 'Giáo trình chuẩn',
      description: 'Chương trình học được cập nhật liên tục bám sát thực tế.'
    },
    {
      icon: <Star className="h-8 w-8 text-purple-500" />,
      title: 'Kết quả cao',
      description: 'Cam kết đầu ra, giúp học viên đạt mục tiêu mong muốn.'
    }
  ];

  const testimonials = [
    {
      name: 'Nguyễn Văn A',
      class: 'Học viên IELTS 6.5',
      quote: 'Trung tâm có phương pháp giảng dạy rất hay, thầy cô nhiệt tình. Em đã đạt được mục tiêu sau 1 khóa học.',
      rating: 5
    },
    {
      name: 'Trần Thị B',
      class: 'Học viên Toán lớp 12',
      quote: 'Nhờ sự hướng dẫn tận tình của thầy cô, em đã đậu vào trường đại học mơ ước với điểm số rất cao.',
      rating: 5
    },
    {
      name: 'Lê Hoàng C',
      class: 'Học viên Tiếng Anh Giao Tiếp',
      quote: 'Môi trường học tập chuyên nghiệp, thân thiện. Giờ em đã tự tin giao tiếp tiếng Anh trong công việc.',
      rating: 5
    }
  ];

  // Defensively slice mock arrays just in case they're undefined
  const classes = (MOCK_CLASSES || []).slice(0, 4);
  const teachers = (MOCK_TEACHERS || []).slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 min-h-[600px] h-[85vh] flex items-center pt-20">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight whitespace-pre-line drop-shadow-sm">
            {'Nâng Tầm Tri Thức\nKiến Tạo Tương Lai'}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
            Trung tâm Anh ngữ & Bồi dưỡng Văn hóa hàng đầu với đội ngũ giáo viên chất lượng cao và phương pháp giảng dạy hiện đại
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/scheduler" 
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-amber-500/30 hover:-translate-y-1"
            >
              Xem lịch học
            </Link>
            <Link 
              href="/courses" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:-translate-y-1"
            >
              Tìm hiểu thêm
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 py-4 md:py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-white/10">
              <div className="px-2">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-blue-200 text-sm md:text-base">Học viên</div>
              </div>
              <div className="px-2">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-blue-200 text-sm md:text-base">Giáo viên</div>
              </div>
              <div className="px-2">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">8+</div>
                <div className="text-blue-200 text-sm md:text-base">Năm kinh nghiệm</div>
              </div>
              <div className="px-2">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">95%</div>
                <div className="text-blue-200 text-sm md:text-base">Hài lòng</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: About */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 inline-block relative">
              Về chúng tôi
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-amber-500 rounded-full"></div>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                EduCenter được thành lập với sứ mệnh mang đến môi trường học tập chất lượng, khơi dậy niềm đam mê học hỏi và phát triển toàn diện cho học sinh.
              </p>
              <p>
                Chúng tôi tự hào sở hữu đội ngũ giáo viên giàu kinh nghiệm, chuyên môn cao từ các trường chuyên và đại học uy tín. Với phương pháp giảng dạy hiện đại, lấy học sinh làm trung tâm, chúng tôi cam kết đồng hành cùng các em trên con đường chinh phục những đỉnh cao tri thức.
              </p>
              <div className="pt-4">
                <Link href="/about" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                  Tìm hiểu thêm về EduCenter <ChevronRight className="h-5 w-5 ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {featureCards.map((card, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                  <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-slate-600">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Courses Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 inline-block relative">
              Các khóa học nổi bật
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-amber-500 rounded-full"></div>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {classes.map((cls: any) => (
              <div key={cls.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className={cn("h-3 w-full", SUBJECT_BG_CLASSES ? SUBJECT_BG_CLASSES[cls.subject as keyof typeof SUBJECT_BG_CLASSES] : "bg-blue-500")} />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-semibold",
                      "bg-slate-100 text-slate-700"
                    )}>
                      {cls.level}
                    </span>
                    {cls.subject && (
                      <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-semibold text-white",
                        SUBJECT_BG_CLASSES ? SUBJECT_BG_CLASSES[cls.subject as keyof typeof SUBJECT_BG_CLASSES] : "bg-blue-500"
                      )}>
                        {cls.subject}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {cls.name}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-3 flex-1">
                    {cls.description || 'Khóa học cung cấp kiến thức nền tảng và nâng cao, giúp học viên tự tin đạt kết quả tốt nhất.'}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    <span className="font-bold text-blue-700">
                      {typeof formatCurrency === 'function' ? formatCurrency(cls.fee) : `${cls.fee?.toLocaleString() || 0}đ`}
                    </span>
                    <Link href={`/courses/${cls.id}`} className="text-sm font-medium text-slate-600 hover:text-amber-500 transition-colors">
                      Chi tiết →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/courses" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-medium transition-colors">
              Xem tất cả khóa học <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: Teachers Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 inline-block relative">
              Đội ngũ giáo viên
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-amber-500 rounded-full"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {teachers.map((teacher: any) => (
              <div key={teacher.id} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-50 bg-slate-100">
                  {teacher.avatar ? (
                    <img src={teacher.avatar} alt={teacher.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                      <Users className="h-12 w-12" />
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{teacher.name}</h3>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {teacher.subjects?.map((sub: string) => (
                    <span key={sub} className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium",
                      "bg-blue-50 text-blue-700"
                    )}>
                      {sub}
                    </span>
                  ))}
                </div>
                <p className="text-slate-600 line-clamp-3">
                  {teacher.bio || 'Giáo viên giàu kinh nghiệm, chuyên môn xuất sắc, tận tâm với nghề.'}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/teachers" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-6 py-3 rounded-xl font-medium transition-colors shadow-sm">
              Xem tất cả giáo viên <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: Testimonials */}
      <section className="py-20 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 inline-block relative">
              Học viên nói gì về chúng tôi
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-amber-500 rounded-full"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
                <Quote className="absolute top-6 right-6 h-12 w-12 text-slate-200" />
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-8 italic relative z-10 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.class}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-700 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Sẵn sàng bắt đầu hành trình học tập?
          </h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Đăng ký ngay hôm nay để nhận ưu đãi đặc biệt và được tư vấn lộ trình học phù hợp nhất.
          </p>
          <Link 
            href="/register" 
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-amber-500/40 hover:-translate-y-1"
          >
            Đăng ký ngay
          </Link>
        </div>
      </section>
    </div>
  );
}
