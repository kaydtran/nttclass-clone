import { GAS_API_URL } from './constants';

interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

async function fetchFromGAS<T>(action: string, params?: Record<string, string>): Promise<ApiResponse<T>> {
  try {
    if (!GAS_API_URL) {
      console.warn('GAS_API_URL not configured, using mock data');
      return { success: false, error: 'API not configured' };
    }

    const url = new URL(GAS_API_URL);
    url.searchParams.set('action', action);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
      });
    }

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 60 },
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${action}:`, error);
    return { success: false, error: String(error) };
  }
}

async function postToGAS<T>(action: string, data: Record<string, unknown>): Promise<ApiResponse<T>> {
  try {
    if (!GAS_API_URL) {
      console.warn('GAS_API_URL not configured');
      return { success: false, error: 'API not configured' };
    }

    const response = await fetch(GAS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, ...data }),
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Error posting ${action}:`, error);
    return { success: false, error: String(error) };
  }
}

export const sheetsApi = {
  // Public
  getSchedule: () => fetchFromGAS('getSchedule'),
  getClasses: () => fetchFromGAS('getClasses'),
  getTeachers: () => fetchFromGAS('getTeachers'),
  getSettings: () => fetchFromGAS('getSettings'),

  // Public forms
  addStudent: (data: Record<string, unknown>) => postToGAS('addStudent', data),
  addEnrollment: (data: Record<string, unknown>) => postToGAS('addEnrollment', data),
  addContact: (data: Record<string, unknown>) => postToGAS('addContact', data),

  // Admin
  getStudents: () => fetchFromGAS('getStudents'),
  getEnrollments: () => fetchFromGAS('getEnrollments'),
  updateRow: (sheet: string, id: string, data: Record<string, unknown>) =>
    postToGAS('updateRow', { sheet, id, ...data }),
  deleteRow: (sheet: string, id: string) =>
    postToGAS('deleteRow', { sheet, id }),
  addRow: (sheet: string, data: Record<string, unknown>) =>
    postToGAS('addRow', { sheet, ...data }),

  // Auth
  login: (username: string, password: string) =>
    postToGAS('login', { username, password }),
};
