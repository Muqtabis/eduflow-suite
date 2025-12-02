// Mock data for the School Management System

export interface Student {
  id: string;
  name: string;
  class: string;
  parentContact: string;
  email: string;
  gpa: number;
  attendance: number;
  feeStatus: 'paid' | 'pending' | 'overdue';
  feeAmount?: number;
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  email: string;
  phone: string;
  classes: string[];
}

export interface ClassSchedule {
  id: string;
  subject: string;
  class: string;
  time: string;
  room: string;
}

export interface Grade {
  subject: string;
  score: number;
  maxScore: number;
  date: string;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  class: string;
  subject: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
}

export interface FeePayment {
  id: string;
  studentName: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending';
}

export const students: Student[] = [
  { id: 'STU001', name: 'Emma Thompson', class: '10-A', parentContact: '+1 555-0101', email: 'emma.t@school.edu', gpa: 3.8, attendance: 95, feeStatus: 'paid' },
  { id: 'STU002', name: 'Liam Johnson', class: '10-A', parentContact: '+1 555-0102', email: 'liam.j@school.edu', gpa: 3.5, attendance: 92, feeStatus: 'pending', feeAmount: 1200 },
  { id: 'STU003', name: 'Olivia Williams', class: '10-B', parentContact: '+1 555-0103', email: 'olivia.w@school.edu', gpa: 3.9, attendance: 98, feeStatus: 'paid' },
  { id: 'STU004', name: 'Noah Brown', class: '10-B', parentContact: '+1 555-0104', email: 'noah.b@school.edu', gpa: 3.2, attendance: 88, feeStatus: 'overdue', feeAmount: 2400 },
  { id: 'STU005', name: 'Ava Davis', class: '11-A', parentContact: '+1 555-0105', email: 'ava.d@school.edu', gpa: 3.7, attendance: 94, feeStatus: 'paid' },
  { id: 'STU006', name: 'Ethan Miller', class: '11-A', parentContact: '+1 555-0106', email: 'ethan.m@school.edu', gpa: 3.4, attendance: 91, feeStatus: 'pending', feeAmount: 800 },
  { id: 'STU007', name: 'Sophia Wilson', class: '11-B', parentContact: '+1 555-0107', email: 'sophia.w@school.edu', gpa: 4.0, attendance: 99, feeStatus: 'paid' },
  { id: 'STU008', name: 'Mason Taylor', class: '11-B', parentContact: '+1 555-0108', email: 'mason.t@school.edu', gpa: 3.1, attendance: 85, feeStatus: 'overdue', feeAmount: 3600 },
];

export const teachers: Teacher[] = [
  { id: 'TCH001', name: 'Dr. Sarah Mitchell', subject: 'Mathematics', email: 's.mitchell@school.edu', phone: '+1 555-1001', classes: ['10-A', '10-B', '11-A'] },
  { id: 'TCH002', name: 'Mr. James Anderson', subject: 'Physics', email: 'j.anderson@school.edu', phone: '+1 555-1002', classes: ['10-A', '11-A', '11-B'] },
  { id: 'TCH003', name: 'Ms. Emily Roberts', subject: 'English', email: 'e.roberts@school.edu', phone: '+1 555-1003', classes: ['10-A', '10-B', '11-B'] },
  { id: 'TCH004', name: 'Mr. David Lee', subject: 'Chemistry', email: 'd.lee@school.edu', phone: '+1 555-1004', classes: ['10-B', '11-A', '11-B'] },
  { id: 'TCH005', name: 'Dr. Lisa Chen', subject: 'Biology', email: 'l.chen@school.edu', phone: '+1 555-1005', classes: ['10-A', '10-B', '11-A'] },
];

export const todaySchedule: ClassSchedule[] = [
  { id: '1', subject: 'Mathematics', class: '10-A', time: '08:00 - 09:00', room: 'Room 101' },
  { id: '2', subject: 'Mathematics', class: '10-B', time: '09:15 - 10:15', room: 'Room 101' },
  { id: '3', subject: 'Mathematics', class: '11-A', time: '11:00 - 12:00', room: 'Room 203' },
  { id: '4', subject: 'Mathematics', class: '10-A', time: '14:00 - 15:00', room: 'Room 101' },
];

export const studentGrades: Grade[] = [
  { subject: 'Mathematics', score: 92, maxScore: 100, date: '2024-01-15' },
  { subject: 'Physics', score: 88, maxScore: 100, date: '2024-01-18' },
  { subject: 'English', score: 95, maxScore: 100, date: '2024-01-20' },
  { subject: 'Chemistry', score: 85, maxScore: 100, date: '2024-01-22' },
  { subject: 'Biology', score: 90, maxScore: 100, date: '2024-01-25' },
];

export const weeklyTimetable = [
  { day: 'Monday', periods: ['Mathematics', 'Physics', 'English', 'Break', 'Chemistry', 'Biology'] },
  { day: 'Tuesday', periods: ['English', 'Mathematics', 'Physics', 'Break', 'Biology', 'Chemistry'] },
  { day: 'Wednesday', periods: ['Physics', 'Chemistry', 'Mathematics', 'Break', 'English', 'P.E.'] },
  { day: 'Thursday', periods: ['Biology', 'English', 'Chemistry', 'Break', 'Mathematics', 'Physics'] },
  { day: 'Friday', periods: ['Chemistry', 'Biology', 'English', 'Break', 'Physics', 'Mathematics'] },
];

export const announcements: Announcement[] = [
  { id: '1', title: 'Parent-Teacher Meeting', content: 'Annual PTM scheduled for next Friday at 3 PM. All parents are requested to attend.', date: '2024-01-28', author: 'Admin' },
  { id: '2', title: 'Science Fair 2024', content: 'Registration for the annual Science Fair is now open. Submit your projects by Feb 15.', date: '2024-01-25', author: 'Dr. Lisa Chen' },
  { id: '3', title: 'Winter Break Schedule', content: 'School will remain closed from Feb 1-5 for winter break.', date: '2024-01-20', author: 'Admin' },
];

export const recentPayments: FeePayment[] = [
  { id: '1', studentName: 'Emma Thompson', amount: 2400, date: '2024-01-25', status: 'paid' },
  { id: '2', studentName: 'Olivia Williams', amount: 2400, date: '2024-01-24', status: 'paid' },
  { id: '3', studentName: 'Ava Davis', amount: 2400, date: '2024-01-23', status: 'paid' },
  { id: '4', studentName: 'Sophia Wilson', amount: 2400, date: '2024-01-22', status: 'paid' },
];

export const studentsWithUnpaidDues = students.filter(s => s.feeStatus !== 'paid');

export const classOptions = ['10-A', '10-B', '11-A', '11-B'];

export const attendanceStudents = [
  { id: 'STU001', name: 'Emma Thompson', status: 'present' as const },
  { id: 'STU002', name: 'Liam Johnson', status: 'present' as const },
  { id: 'STU003', name: 'Olivia Williams', status: 'absent' as const },
  { id: 'STU004', name: 'Noah Brown', status: 'late' as const },
  { id: 'STU005', name: 'Ava Davis', status: 'present' as const },
];
