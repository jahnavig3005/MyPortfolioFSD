import './globals.css';

export const metadata = {
  title: 'Jahnavi Gottipati | Full Stack Developer',
  description: 'Premium portfolio for a React, Next.js, TypeScript, AWS, and full-stack developer focused on scalable web platforms.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
