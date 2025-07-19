import { Code } from 'lucide-react';
import { personalData } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-6 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2">
          <Code className="w-4 h-4" />
          <p>&copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
