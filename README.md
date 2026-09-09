# EduCenter - Trung tâm Anh ngữ & Bồi dưỡng Văn hóa

Website quản lý trung tâm dạy tiếng Anh và bồi dưỡng văn hóa, được xây dựng với Next.js 14, Tailwind CSS, và Google Sheets làm database.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Database:** Google Sheets (via Google Apps Script)
- **Deploy:** Vercel

## 📋 Tính năng

### Trang công khai
- 🏠 **Trang chủ** - Hero section, giới thiệu, khóa học nổi bật, đội ngũ giáo viên, testimonials
- 📅 **Lịch học** - Xem lịch theo tuần/tháng, filter theo môn/giáo viên, color-coded
- 📚 **Khóa học** - Danh sách khóa học, filter theo môn, thông tin chi tiết
- 👨‍🏫 **Giáo viên** - Profile giáo viên, môn dạy, thông tin liên hệ
- 📞 **Liên hệ** - Form liên hệ, thông tin trung tâm, bản đồ
- 📝 **Đăng ký** - Form đăng ký học viên, chọn khóa học

### Admin Dashboard (`/admin`)
- 📊 **Dashboard** - Thống kê tổng quan, đăng ký mới, lịch hôm nay
- 📅 **Quản lý lịch dạy** - CRUD lịch dạy, gán giáo viên/phòng
- 📚 **Quản lý khóa học** - CRUD khóa học
- 👥 **Quản lý học viên** - CRUD học viên, tìm kiếm
- 👨‍🏫 **Quản lý giáo viên** - CRUD giáo viên
- ⚙️ **Cài đặt** - Cập nhật thông tin trung tâm

## 🛠️ Cài đặt & Chạy

### Yêu cầu
- Node.js 18+ 
- npm hoặc yarn

### Bước 1: Cài đặt dependencies

```bash
npm install
```

### Bước 2: Chạy development server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem website.

### Bước 3: Build cho production

```bash
npm run build
npm start
```

## 🔐 Admin Login

- URL: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
- Username: `admin`
- Password: `admin123`

## 📊 Kết nối Google Sheets (Tùy chọn)

Website hoạt động với mock data mặc định. Để kết nối Google Sheets:

### Bước 1: Tạo Google Sheet

Tạo Google Sheet mới với các sheet sau:

| Sheet Name | Columns |
|-----------|---------|
| `Schedule` | id, classId, className, teacherId, teacherName, subject, dayOfWeek, startTime, endTime, room, color, status |
| `Classes` | id, name, subject, level, description, maxStudents, fee, status |
| `Teachers` | id, name, email, phone, subjects, bio, avatarUrl, status |
| `Students` | id, name, email, phone, parentName, parentPhone, dob, enrolledDate, status |
| `Enrollments` | id, studentId, classId, enrolledDate, status, note |
| `Settings` | key, value |
| `Contacts` | id, name, email, phone, subject, message, createdAt, status |
| `Users` | username, password |

### Bước 2: Deploy Google Apps Script

1. Mở Google Sheet → Extensions → Apps Script
2. Copy nội dung từ `google-apps-script/Code.gs`
3. Thay `YOUR_SPREADSHEET_ID` bằng ID thực của Google Sheet
4. Deploy → New deployment → Web app
5. Chọn "Anyone" cho access
6. Copy URL của deployment

### Bước 3: Cấu hình Environment

Tạo file `.env.local`:

```env
NEXT_PUBLIC_GAS_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

### Bước 4: Restart server

```bash
npm run dev
```

## 🚀 Deploy lên Vercel

### Qua GitHub

1. Push code lên GitHub repository
2. Vào [vercel.com](https://vercel.com) → New Project
3. Import GitHub repo
4. Thêm Environment Variables (nếu dùng Google Sheets):
   - `NEXT_PUBLIC_GAS_URL` = URL Google Apps Script
5. Click Deploy

### Qua Vercel CLI

```bash
npm i -g vercel
vercel
```

## 📁 Cấu trúc dự án

```
nttclass-clone/
├── google-apps-script/
│   └── Code.gs              # Google Apps Script API
├── src/
│   ├── app/
│   │   ├── (public)/         # Trang công khai
│   │   │   ├── layout.tsx    # Layout (Header + Footer)
│   │   │   ├── page.tsx      # Trang chủ
│   │   │   ├── scheduler/    # Lịch học
│   │   │   ├── courses/      # Khóa học
│   │   │   ├── teachers/     # Giáo viên
│   │   │   ├── contact/      # Liên hệ
│   │   │   └── register/     # Đăng ký
│   │   ├── admin/            # Admin dashboard
│   │   │   ├── login/        # Đăng nhập
│   │   │   └── (dashboard)/  # Các trang quản lý
│   │   ├── api/              # API routes
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   └── layout/           # Header, Footer
│   ├── lib/                  # Utils, constants, API
│   └── types/                # TypeScript types
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 📝 Tùy chỉnh

### Đổi tên trung tâm
Sửa trong `src/lib/constants.ts` → `MOCK_SETTINGS.siteName`

### Đổi logo
Thay thế logo trong `src/components/layout/Header.tsx` và `Footer.tsx`

### Thêm/sửa khóa học
Sửa `MOCK_CLASSES` trong `src/lib/constants.ts` hoặc cập nhật Google Sheets

### Đổi màu sắc
Sửa trong `tailwind.config.ts` → `theme.extend.colors`

## 📄 License

MIT
