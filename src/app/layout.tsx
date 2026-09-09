import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EduCenter - Trung tâm Anh ngữ & Bồi dưỡng Văn hóa',
  description: 'Trung tâm dạy tiếng Anh và bồi dưỡng các môn văn hóa hàng đầu. Đội ngũ giáo viên chất lượng, phương pháp giảng dạy hiện đại.',
  keywords: ['trung tâm tiếng anh', 'bồi dưỡng văn hóa', 'luyện thi THPT', 'IELTS', 'gia sư'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
