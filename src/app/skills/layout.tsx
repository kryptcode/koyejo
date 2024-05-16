import { CalendarDays, Gauge, HeartPulse, Shield } from "lucide-react";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <Link href="/">Koye.</Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
