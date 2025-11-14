import React from 'react';
import LinkCard from './components/LinkCard';
import { StoreIcon, SalesIcon, TalentIcon, AttendanceIcon } from './constants';

const App: React.FC = () => {
  const links = [
    {
      href: "https://admin-toko-5b4f.vercel.app/",
      title: "Admin Toko",
      description: "Platform untuk mengelola administrasi toko.",
      icon: <StoreIcon />
    },
    {
      href: "https://app-penjualan-host.vercel.app/",
      title: "Data Host",
      description: "Aplikasi untuk mencatat dan mengelola penjualan.",
      icon: <SalesIcon />
    },
    {
      href: "https://kpi-talent.vercel.app/",
      title: "Data Talent",
      description: "Sistem untuk memonitor Key Performance Indicator talent.",
      icon: <TalentIcon />
    },
    {
      href: "https://bms.qthinkx.com/panel",
      title: "Data Absensi",
      description: "Sistem untuk mengelola data absensi karyawan.",
      icon: <AttendanceIcon />
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 opacity-60 z-0"></div>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

       <main className="z-10 text-center w-full max-w-5xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-indigo-400">
                PT BMS
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                Bersama Menuju Surga
            </p>
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 md:gap-8">
                {links.map((link, index) => (
                    <LinkCard
                        key={index}
                        href={link.href}
                        title={link.title}
                        description={link.description}
                        icon={link.icon}
                    />
                ))}
            </div>
       </main>
       <footer className="z-10 mt-16 text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Bersama Menuju Surga</p>
       </footer>
    </div>
  );
};

export default App;