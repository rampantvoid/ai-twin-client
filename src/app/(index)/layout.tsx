import Navbar from "../components/ Navbar";
import HomeBanner from "../components/HomeBanner";
import SubNavbar from "../components/SubNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-dvh">
      <Navbar />
      <HomeBanner />
      <SubNavbar />
      {children}
    </div>
  );
}
