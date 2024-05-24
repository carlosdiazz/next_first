import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About Page',
  keywords: ["Uno","Dos"]
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-7xl">About Page</span>
    </main>
  )
}