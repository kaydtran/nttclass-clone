'use client';

import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Clock, MapPin, User, Filter } from 'lucide-react';
import { MOCK_SCHEDULE, MOCK_TEACHERS } from '@/lib/constants';
import { SUBJECT_LABELS, DAYS_MONDAY_START_SHORT, SUBJECT_COLORS } from '@/types';
import { getWeekDates, getMonthDates, timeToMinutes, isToday, getScheduleForDay, cn } from '@/lib/utils';

export default function SchedulerPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'week' | 'month'>('week');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedTeacher, setSelectedTeacher] = useState<string>('all');

  const handlePrev = () => {
    const newDate = new Date(currentDate);
    if (viewMode === 'week') {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setMonth(newDate.getMonth() - 1);
    }
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    if (viewMode === 'week') {
      newDate.setDate(newDate.getDate() + 7);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const weekDates = useMemo(() => getWeekDates(currentDate), [currentDate]);
  const monthDates = useMemo(() => getMonthDates(currentDate.getFullYear(), currentDate.getMonth()), [currentDate]);

  const filteredSchedule = useMemo(() => {
    return MOCK_SCHEDULE.filter(item => {
      let matchSubject = true;
      let matchTeacher = true;
      if (selectedSubject !== 'all') {
        matchSubject = item.subject === selectedSubject;
      }
      if (selectedTeacher !== 'all') {
        matchTeacher = item.teacherId === selectedTeacher;
      }
      return matchSubject && matchTeacher;
    });
  }, [selectedSubject, selectedTeacher]);

  const hours = Array.from({ length: 15 }, (_, i) => i + 7);

  const getWeekHeader = () => {
    if (!weekDates || weekDates.length === 0) return '';
    const start = weekDates[0];
    const end = weekDates[weekDates.length - 1];
    return `Tuần ${start.getDate()}/${start.getMonth() + 1} - ${end.getDate()}/${end.getMonth() + 1}/${end.getFullYear()}`;
  };

  const getMonthHeader = () => {
    return `Tháng ${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8 flex flex-col items-start gap-2">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Lịch học</h1>
        <p className="text-slate-500">Xem lịch học chi tiết của các lớp.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-6 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        <div className="flex bg-slate-100 p-1 rounded-xl w-fit">
          <button
            onClick={() => setViewMode('week')}
            className={cn(
              "px-6 py-2 rounded-lg font-medium text-sm transition-all duration-200",
              viewMode === 'week' ? "bg-white text-blue-600 shadow-sm" : "text-slate-600 hover:text-slate-900"
            )}
          >
            Theo Tuần
          </button>
          <button
            onClick={() => setViewMode('month')}
            className={cn(
              "px-6 py-2 rounded-lg font-medium text-sm transition-all duration-200",
              viewMode === 'month' ? "bg-white text-blue-600 shadow-sm" : "text-slate-600 hover:text-slate-900"
            )}
          >
            Theo Tháng
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full xl:w-auto">
          <div className="relative w-full sm:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-4 w-4 text-slate-400" />
            </div>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="pl-9 pr-8 py-2.5 w-full sm:w-48 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none outline-none text-slate-700"
            >
              <option value="all">Tất cả môn học</option>
              {Object.entries(SUBJECT_LABELS).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>
          <div className="relative w-full sm:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-4 w-4 text-slate-400" />
            </div>
            <select
              value={selectedTeacher}
              onChange={(e) => setSelectedTeacher(e.target.value)}
              className="pl-9 pr-8 py-2.5 w-full sm:w-48 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none outline-none text-slate-700"
            >
              <option value="all">Tất cả giáo viên</option>
              {MOCK_TEACHERS.map(t => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <button
            onClick={handleToday}
            className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 hover:text-blue-600 transition-colors shadow-sm"
          >
            Hôm nay
          </button>
          <div className="flex items-center gap-4">
            <button onClick={handlePrev} className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold text-slate-800 min-w-[200px] text-center">
              {viewMode === 'week' ? getWeekHeader() : getMonthHeader()}
            </h2>
            <button onClick={handleNext} className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          {viewMode === 'week' ? (
            <div className="min-w-[800px] relative">
              <div className="flex border-b border-slate-100 bg-slate-50/80 sticky top-0 z-10">
                <div className="w-16 flex-shrink-0 border-r border-slate-100"></div>
                {weekDates.map((date, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex-1 text-center py-3 border-r border-slate-100 last:border-r-0",
                      isToday(date) ? "bg-blue-50 text-blue-700 font-medium" : "text-slate-600"
                    )}
                  >
                    <div className="text-xs uppercase tracking-wider mb-1">{DAYS_MONDAY_START_SHORT[index]}</div>
                    <div className={cn("text-lg font-semibold", isToday(date) ? "text-blue-700" : "text-slate-800")}>
                      {String(date.getDate()).padStart(2, '0')}/{String(date.getMonth() + 1).padStart(2, '0')}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex relative bg-slate-50/30">
                <div className="w-16 flex-shrink-0 border-r border-slate-100 bg-white z-10">
                  {hours.map(hour => (
                    <div key={hour} className="h-16 border-b border-slate-100 relative">
                      <span className="absolute -top-3 right-2 text-xs font-medium text-slate-400">
                        {String(hour).padStart(2, '0')}:00
                      </span>
                    </div>
                  ))}
                </div>

                {weekDates.map((date, dayIndex) => {
                  const daySchedule = getScheduleForDay(filteredSchedule, dayIndex + 1);
                  return (
                    <div
                      key={dayIndex}
                      className={cn(
                        "flex-1 border-r border-slate-100 relative min-h-[960px]",
                        isToday(date) ? "bg-blue-50/30" : ""
                      )}
                    >
                      {hours.map(hour => (
                        <div key={hour} className="h-16 border-b border-slate-100/50 w-full" />
                      ))}
                      {daySchedule.map((item, idx) => {
                        const startMins = timeToMinutes(item.startTime);
                        const endMins = timeToMinutes(item.endTime);
                        const top = ((startMins - 7 * 60) / 60) * 64;
                        const height = ((endMins - startMins) / 60) * 64;
                        const bgColor = item.color || '#3b82f6';
                        return (
                          <div
                            key={`${item.id}-${idx}`}
                            className="absolute w-[calc(100%-8px)] left-1 rounded-lg p-2 shadow-sm hover:shadow-md transition-all hover:scale-[1.02] cursor-pointer overflow-hidden z-20 text-white"
                            style={{ top: `${top}px`, height: `${height}px`, backgroundColor: bgColor }}
                          >
                            <div className="text-xs font-bold truncate">{item.className}</div>
                            <div className="text-[10px] opacity-90 mt-0.5 flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {item.startTime} - {item.endTime}
                            </div>
                            <div className="text-[10px] opacity-90 mt-0.5 truncate flex items-center gap-1">
                              <User className="w-3 h-3" /> {item.teacherName}
                            </div>
                            <div className="text-[10px] opacity-90 mt-0.5 flex items-center gap-1">
                              <MapPin className="w-3 h-3" /> {item.room}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="min-w-[800px]">
              <div className="grid grid-cols-7 border-b border-slate-100 bg-slate-50/80 sticky top-0 z-10">
                {DAYS_MONDAY_START_SHORT.map((day, idx) => (
                  <div key={idx} className="py-3 text-center text-sm font-medium text-slate-600 border-r border-slate-100 last:border-r-0 uppercase tracking-wider">
                    {day}
                  </div>
                ))}
              </div>
              {monthDates.map((week, weekIdx) => (
                <div key={weekIdx} className="grid grid-cols-7">
                  {week.map((date, dayIdx) => {
                    if (!date) {
                      return <div key={dayIdx} className="min-h-[120px] p-2 border-r border-b border-slate-100 bg-slate-50/50" />;
                    }
                    const isCurrentMonth = date.getMonth() === currentDate.getMonth();
                    const isDayToday = isToday(date);
                    const dow = date.getDay() === 0 ? 7 : date.getDay();
                    const daySchedule = getScheduleForDay(filteredSchedule, dow);
                    return (
                      <div
                        key={dayIdx}
                        className={cn(
                          "min-h-[120px] p-2 border-r border-b border-slate-100 transition-colors hover:bg-slate-50",
                          !isCurrentMonth ? "opacity-40 bg-slate-50/50" : "bg-white",
                          isDayToday ? "bg-blue-50/30" : ""
                        )}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={cn(
                            "w-7 h-7 flex items-center justify-center rounded-full text-sm font-medium",
                            isDayToday ? "bg-blue-600 text-white" : "text-slate-700"
                          )}>
                            {date.getDate()}
                          </span>
                          {daySchedule.length > 0 && (
                            <span className="text-xs font-medium text-slate-400">{daySchedule.length} lớp</span>
                          )}
                        </div>
                        <div className="flex flex-col gap-1">
                          {daySchedule.slice(0, 3).map((item, i) => (
                            <div
                              key={i}
                              className="text-xs px-1.5 py-0.5 rounded truncate text-white"
                              style={{ backgroundColor: item.color || '#3b82f6' }}
                              title={`${item.className} (${item.startTime} - ${item.endTime})`}
                            >
                              {item.startTime} {item.className}
                            </div>
                          ))}
                          {daySchedule.length > 3 && (
                            <div className="text-[10px] text-slate-500 font-medium pl-1">
                              +{daySchedule.length - 3} lớp khác
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
