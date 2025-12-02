import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import StatsCard from '@/components/dashboard/StatsCard';
import { 
  User, 
  Award, 
  Clock, 
  DollarSign,
  BookOpen,
  Bell,
} from 'lucide-react';
import { studentGrades, weeklyTimetable, announcements } from '@/lib/mockData';
import { cn } from '@/lib/utils';

const StudentDashboard = () => {
  const studentInfo = {
    name: 'Emma Thompson',
    class: '10-A',
    id: 'STU001',
    gpa: 3.8,
    attendance: 95,
    feeStatus: 'paid' as const,
  };

  const periods = ['8:00-9:00', '9:15-10:15', '10:30-11:30', 'Break', '12:30-1:30', '2:00-3:00'];

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <CardContent className="p-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <User className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{studentInfo.name}</h1>
              <div className="flex flex-wrap gap-2 mt-1">
                <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
                  Class {studentInfo.class}
                </Badge>
                <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
                  ID: {studentInfo.id}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatsCard 
          title="Overall GPA" 
          value={studentInfo.gpa.toFixed(1)} 
          icon={Award} 
        />
        <StatsCard 
          title="Attendance" 
          value={`${studentInfo.attendance}%`} 
          icon={Clock} 
          variant="success"
        />
        <Card className={cn(
          "border-2",
          studentInfo.feeStatus === 'paid' 
            ? "border-[hsl(var(--success))]/30 bg-[hsl(var(--success))]/5" 
            : "border-destructive/30 bg-destructive/5"
        )}>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Fee Status</p>
                <p className="text-3xl font-bold text-foreground mt-1 capitalize">{studentInfo.feeStatus}</p>
              </div>
              <div className={cn(
                "p-3 rounded-xl",
                studentInfo.feeStatus === 'paid' 
                  ? "bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]" 
                  : "bg-destructive/10 text-destructive"
              )}>
                <DollarSign className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Grades */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Recent Grades
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {studentGrades.map((grade, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">{grade.subject}</span>
                  <span className="text-sm font-bold">{grade.score}/{grade.maxScore}</span>
                </div>
                <Progress 
                  value={(grade.score / grade.maxScore) * 100} 
                  className="h-2"
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Announcements */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Announcements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="p-4 rounded-lg bg-muted/50">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-semibold text-sm">{announcement.title}</h4>
                  <Badge variant="secondary" className="text-xs shrink-0">{announcement.date}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{announcement.content}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Weekly Timetable */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Weekly Timetable</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Day</th>
                  {periods.map((period, i) => (
                    <th key={i} className="text-center py-3 px-2 font-medium text-muted-foreground text-xs">
                      {period}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {weeklyTimetable.map((day) => (
                  <tr key={day.day} className="border-b border-border/50">
                    <td className="py-3 px-2 font-medium">{day.day}</td>
                    {day.periods.map((subject, i) => (
                      <td key={i} className="py-3 px-2 text-center">
                        {subject === 'Break' ? (
                          <Badge variant="secondary" className="text-xs">Break</Badge>
                        ) : (
                          <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                            {subject}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDashboard;
