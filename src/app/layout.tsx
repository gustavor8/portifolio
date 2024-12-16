import "./globals.css";
import Header from "./components/header/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <div className="min-h-screen flex w-full">
          <Header />
          <main className="flex-grow w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
