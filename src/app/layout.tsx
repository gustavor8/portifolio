import "./globals.css";
import Header from "./components/header/header";

export const metadata = {
  title: "Gustavo Rodrigues",
  description: "Portifólio de Gustavo Rodrigues",
  icons: {
    icon: "../Assets/img/iconPage.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" style={{ scrollBehavior: "smooth" }}>
      <body>
        <div className="min-h-screen flex w-full">
          <Header />
          <main className="flex-grow w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
