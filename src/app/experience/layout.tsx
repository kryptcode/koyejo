import { CalendarDays, Gauge, HeartPulse, Shield } from "lucide-react";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="flex justify-between items-center h-[10vh] border-b">
        <Link className="font-medium font-grotesk text-2xl" href="/">Koye.</Link>

        <div className="flex space-x-4 font-medium">
            <Link href="/">Experience</Link>
            <Link href="/">Projects</Link>
            <Link href="/">Skills</Link>
        </div>

        <div></div>
      </div>

      <div className="h-full">{children}</div>
    </div>
  );
}
