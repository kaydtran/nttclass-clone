'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { setSession } from '@/lib/auth';
import { Lock, User } from 'lucide-react';

export default function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Local check for demo purposes
    if (username === 'admin' && password === 'admin123') {
      setTimeout(() => {
        setSession({ user: { username: 'admin', role: 'admin' }, token: 'demo-token-123' });
        router.push('/admin');
      }, 500);
    } else {
      setTimeout(() => {
        setError('Tên đăng nhập hoặc mật khẩu không chính xác.');
        setLoading(false);
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Quản trị viên</h1>
          <p className="text-blue-200">Đăng nhập để quản lý hệ thống</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-100 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-100">Tên đăng nhập</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-blue-300" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full pl-10 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-blue-300/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Nhập tên đăng nhập"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-100">Mật khẩu</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-blue-300" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-blue-300/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Nhập mật khẩu"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/30 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
          >
            {loading ? (
              <span className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
            ) : (
              'Đăng nhập'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
