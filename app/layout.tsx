import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: "Connor's Heating - Professional HVAC Services",
    description: 'Premier heating and HVAC services in your area. Emergency repairs, installations, and maintenance.',
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
            <body className="bg-white text-gray-900 antialiased">
                {children}
            </body>
        </html>
    );
}