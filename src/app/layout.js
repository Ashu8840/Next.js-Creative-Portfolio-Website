import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template: "Ayush Tripathi | Full Stack Developer Portfolio | %s",
    default: "Ayush Tripathi | Full Stack Developer Portfolio | MERN Stack",
  },
  description:
    "Portfolio of Ayush Tripathi, a B.Tech IT student and full-stack developer skilled in MERN stack, React.js, Node.js, and modern web technologies. Explore projects, skills, and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter",
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
