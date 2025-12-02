import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import StatsCard from '@/components/dashboard/StatsCard';
import { 
  Users, 
  UserCog, 
  BookOpen, 
  DollarSign, 
  Bell,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { students, teachers, announcements, recentPayments, studentsWithUnpaidDues } from '@/lib/mockData';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const totalFeesPending = studentsWithUnpaidDues.reduce((acc, s) => acc + (s.feeAmount || 0), 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening at your school.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard 
          title="Total Students" 
          value={students.length * 50} 
          icon={Users} 
          trend="+12% from last month"
          trendUp
        />
        <StatsCard 
          title="Total Teachers" 
          value={teachers.length * 4} 
          icon={UserCog} 
          variant="success"
        />
        <StatsCard 
          title="Total Classes" 
          value={16} 
          icon={BookOpen} 
          variant="warning"
        />
        <StatsCard 
          title="Fees Pending" 
          value={`$${totalFeesPending.toLocaleString()}`} 
          icon={DollarSign} 
          variant="destructive"
          trend={`${studentsWithUnpaidDues.length} students`}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Announcements */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">Recent Announcements</CardTitle>
            <Button variant="ghost" size="sm" onClick={() => navigate('/dashboard/announcements')}>
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {announcements.slice(0, 3).map((announcement) => (
              <div key={announcement.id} className="flex gap-3 p-3 rounded-lg bg-muted/50">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Bell className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{announcement.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{announcement.date}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Fee Overview */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">Students with Unpaid Dues</CardTitle>
            <Button variant="ghost" size="sm" onClick={() => navigate('/dashboard/finances')}>
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {studentsWithUnpaidDues.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium text-sm">{student.name}</p>
                    <p className="text-xs text-muted-foreground">{student.class}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm">${student.feeAmount?.toLocaleString()}</p>
                    <Badge variant={student.feeStatus === 'overdue' ? 'destructive' : 'secondary'} className="text-xs">
                      {student.feeStatus}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Payments */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-semibold">Recent Fee Payments</CardTitle>
          <div className="flex items-center text-sm text-[hsl(var(--success))]">
            <TrendingUp className="h-4 w-4 mr-1" />
            +15% this month
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentPayments.map((payment) => (
              <div key={payment.id} className="p-4 rounded-lg border border-border bg-card">
                <p className="font-medium text-sm">{payment.studentName}</p>
                <p className="text-2xl font-bold text-[hsl(var(--success))] mt-1">${payment.amount}</p>
                <p className="text-xs text-muted-foreground mt-1">{payment.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
