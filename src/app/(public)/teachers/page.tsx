import { MOCK_TEACHERS } from '@/lib/constants';
import { SUBJECT_LABELS, SUBJECT_LIGHT_BG } from '@/types';
import { Mail, Phone, BookOpen, Star, Award, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function TeachersPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-800 to-blue-900 text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/inspiration-geometry.png')] opacity-20"></div>
        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl backdrop-blur-sm mb-6">
            <Award className="w-8 h-8 text-amber-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Đội ngũ Giáo viên</h1>
          <p className="text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed">
            Hội tụ những thầy cô giáo tâm huyết, giàu kinh nghiệm và chuyên môn cao, luôn sẵn sàng đồng hành cùng các em trên con đường chinh phục tri thức.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_TEACHERS.map((teacher, index) => (
            <div 
              key={teacher.id} 
              className="bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-slate-100 group relative"
            >
              {/* Decorative top background */}
              <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 absolute top-0 left-0 w-full z-0 group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors"></div>
              
              <div className="p-8 relative z-10 flex flex-col items-center text-center mt-4">
                {/* Avatar */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 relative group-hover:scale-105 transition-transform duration-500 bg-white">
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                    <GraduationCap className="w-12 h-12" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{teacher.name}</h3>
                
                {/* Subjects Badges */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {teacher.subjects.map(subject => (
                    <span 
                      key={subject}
                      className={cn(
                        "px-3 py-1 rounded-full text-xs font-semibold",
                        SUBJECT_LIGHT_BG[subject as keyof typeof SUBJECT_LIGHT_BG] || "bg-slate-100 text-slate-700"
                      )}
                    >
                      {SUBJECT_LABELS[subject as keyof typeof SUBJECT_LABELS] || subject}
                    </span>
                  ))}
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-8 line-clamp-4">
                  Giáo viên giàu kinh nghiệm, phương pháp giảng dạy hiện đại, dễ hiểu, giúp học sinh nắm bắt kiến thức nhanh chóng và ghi nhớ lâu dài. Luôn tận tâm và theo sát từng tiến bộ của học sinh.
                </p>
                
                <div className="w-full space-y-3 mt-auto border-t border-slate-100 pt-6">
                  <a href={`mailto:${teacher.email}`} className="flex items-center justify-center gap-3 text-slate-500 hover:text-blue-600 transition-colors bg-slate-50 hover:bg-blue-50 py-2.5 rounded-xl text-sm font-medium">
                    <Mail className="w-4 h-4" />
                    {teacher.email}
                  </a>
                  <a href={`tel:${teacher.phone}`} className="flex items-center justify-center gap-3 text-slate-500 hover:text-blue-600 transition-colors bg-slate-50 hover:bg-blue-50 py-2.5 rounded-xl text-sm font-medium">
                    <Phone className="w-4 h-4" />
                    {teacher.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
