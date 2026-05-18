import "./globals.css";

export const metadata = {
  title: "ARTIWORKS — Arief's Digital Ecosystem",
  description: "Personal digital base. Coding, writing, and growth tracking.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
