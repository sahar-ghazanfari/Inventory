import "../style/globals.css";
import estedadFont from "@/constant/LocalFonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${estedadFont.variable} font-sans bg-background`}>{children}</body>
    </html>
  );
}
