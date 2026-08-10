import type { Metadata } from "next";
import "./globals.css";
import BackgroundGrid from "@/components/BackgroundGrid";

export const metadata: Metadata = {
  metadataBase: new URL("https://khushijoshi.dev"),
  title: "Khushi Kalpesh Joshi | Data Scientist & Full Stack Web Developer",
  description:
    "Portfolio of Khushi Kalpesh Joshi — Computer Science student specializing in Data Science at AMC Engineering College, Bengaluru. Experienced in Python, ML, Next.js, React, FastAPI, and Data Analysis.",
  keywords: [
    "Khushi Joshi",
    "Khushi Kalpesh Joshi",
    "Data Scientist Portfolio",
    "Full Stack Developer Bengaluru",
    "AMC Engineering College",
    "Python Developer",
    "FastAPI",
    "Next.js Portfolio",
    "Machine Learning Engineer",
  ],
  authors: [{ name: "Khushi Kalpesh Joshi" }],
  openGraph: {
    title: "Khushi Kalpesh Joshi — Data Scientist & Developer Portfolio",
    description:
      "Transforming data into actionable insights and building modern digital web experiences.",
    url: "https://khushijoshi.dev",
    siteName: "Khushi Joshi Portfolio",
    images: [
      {
        url: "/khushi.jpeg",
        width: 800,
        height: 800,
        alt: "Khushi Kalpesh Joshi Profile Photo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0b0f17] text-gray-100 antialiased selection:bg-primary-500 selection:text-white">
        <BackgroundGrid />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
