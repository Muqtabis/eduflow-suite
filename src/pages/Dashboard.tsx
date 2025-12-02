import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';
import AdminDashboard from './dashboard/AdminDashboard';
import TeacherDashboard from './dashboard/TeacherDashboard';
import StudentDashboard from './dashboard/StudentDashboard';

const Dashboard = () => {
  const { role } = useAuth();

  if (!role) {
    return <Navigate to="/" replace />;
  }

  const renderDashboard = () => {
    switch (role) {
      case 'admin':
        return <AdminDashboard />;
      case 'teacher':
        return <TeacherDashboard />;
      case 'student':
        return <StudentDashboard />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      {renderDashboard()}
    </DashboardLayout>
  );
};

export default Dashboard;
