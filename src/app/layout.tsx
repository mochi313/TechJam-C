import { Header } from "../components/header";
import { MenuBar } from "../components/menubar";
import { ProgressBar, StepsPer } from "../components/progress";
import { Lv } from "../components/view";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>
          <div style={{margin:"50px 0px 80px",padding:"20px"}}>
            {children}
          </div>
          <MenuBar></MenuBar>
        </main>
      </body>
    </html>
  );
}
