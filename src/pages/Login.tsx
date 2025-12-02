import { useNavigate } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Shield, BookOpen, Users } from 'lucide-react';

const Login = () => {
  const { setRole } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role: UserRole) => {
    setRole(role);
    navigate('/dashboard');
  };

  const roles = [
    {
      role: 'admin' as UserRole,
      title: 'Administrator',
      description: 'Full access to manage school operations',
      icon: Shield,
      color: 'bg-primary hover:bg-primary/90',
    },
    {
      role: 'teacher' as UserRole,
      title: 'Teacher',
      description: 'Manage classes, attendance, and grades',
      icon: BookOpen,
      color: 'bg-[hsl(var(--success))] hover:bg-[hsl(var(--success))]/90',
    },
    {
      role: 'student' as UserRole,
      title: 'Student',
      description: 'View grades, schedule, and announcements',
      icon: Users,
      color: 'bg-[hsl(var(--warning))] hover:bg-[hsl(var(--warning))]/90',
    },
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary rounded-xl">
              <GraduationCap className="h-10 w-10 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">EduManage</h1>
          <p className="text-muted-foreground text-lg">School Management System</p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription className="text-base">
              Select a role to simulate login and explore the dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              {roles.map(({ role, title, description, icon: Icon, color }) => (
                <Card 
                  key={role} 
                  className="border-2 border-border hover:border-primary/50 transition-all cursor-pointer group"
                  onClick={() => handleLogin(role)}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110`}>
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{description}</p>
                    <Button className={`w-full ${color} text-primary-foreground`}>
                      Login as {title}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          This is a demo application with simulated authentication
        </p>
      </div>
    </div>
  );
};

export default Login;
