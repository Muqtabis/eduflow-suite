import { useAuth } from '@/contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StudentsPage from './StudentsPage';
import TeachersPage from './TeachersPage';
import FinancesPage from './FinancesPage';
import AnnouncementsPage from './AnnouncementsPage';

const AdminSubPages = () => {
  const { role } = useAuth();
  const location = useLocation();

  if (!role) {
    return <Navigate to="/" replace />;
  }

  const path = location.pathname;

  const renderPage = () => {
    if (path.includes('/students')) return <StudentsPage />;
    if (path.includes('/teachers')) return <TeachersPage />;
    if (path.includes('/finances')) return <FinancesPage />;
    if (path.includes('/announcements')) return <AnnouncementsPage />;
    return null;
  };

  return (
    <DashboardLayout>
      {renderPage()}
    </DashboardLayout>
  );
};

export default AdminSubPages;
