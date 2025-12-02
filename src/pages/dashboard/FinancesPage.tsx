import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import StatsCard from '@/components/dashboard/StatsCard';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DollarSign, TrendingUp, TrendingDown, Send } from 'lucide-react';
import { recentPayments, studentsWithUnpaidDues, students } from '@/lib/mockData';
import { cn } from '@/lib/utils';

const FinancesPage = () => {
  const totalCollected = recentPayments.reduce((acc, p) => acc + p.amount, 0);
  const totalPending = studentsWithUnpaidDues.reduce((acc, s) => acc + (s.feeAmount || 0), 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Financial Overview</h1>
        <p className="text-muted-foreground">Track fee payments and outstanding dues</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard 
          title="Total Collected" 
          value={`$${totalCollected.toLocaleString()}`} 
          icon={TrendingUp} 
          variant="success"
        />
        <StatsCard 
          title="Pending Dues" 
          value={`$${totalPending.toLocaleString()}`} 
          icon={TrendingDown} 
          variant="destructive"
        />
        <StatsCard 
          title="Paid Students" 
          value={students.filter(s => s.feeStatus === 'paid').length} 
          icon={DollarSign}
        />
        <StatsCard 
          title="Overdue Accounts" 
          value={students.filter(s => s.feeStatus === 'overdue').length} 
          icon={DollarSign} 
          variant="warning"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Payments */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentPayments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">{payment.studentName}</TableCell>
                    <TableCell>${payment.amount.toLocaleString()}</TableCell>
                    <TableCell className="text-muted-foreground">{payment.date}</TableCell>
                    <TableCell>
                      <Badge className="bg-[hsl(var(--success))]/10 text-[hsl(var(--success))] border-[hsl(var(--success))]/30">
                        Paid
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Unpaid Dues */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Outstanding Dues</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {studentsWithUnpaidDues.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-xs text-muted-foreground">{student.class}</p>
                      </div>
                    </TableCell>
                    <TableCell className="font-semibold">${student.feeAmount?.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline"
                        className={cn(
                          "capitalize",
                          student.feeStatus === 'overdue' 
                            ? "bg-destructive/10 text-destructive border-destructive/30" 
                            : "bg-[hsl(var(--warning))]/10 text-[hsl(var(--warning))] border-[hsl(var(--warning))]/30"
                        )}
                      >
                        {student.feeStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Send className="h-4 w-4 mr-1" />
                        Remind
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FinancesPage;
