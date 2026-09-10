import "./globals.css";

export const metadata = {
  title: "School Result Portal",
  description: "Secure academic results portal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
