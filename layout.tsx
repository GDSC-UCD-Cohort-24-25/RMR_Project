import './globals.css'; // Optional: If you have global styles
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children} {/* This is where your page content will be injected */}
      </body>
    </html>
  );
}