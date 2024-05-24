import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Contact Page',
  keywords: ["Uno","Dos"]
};

export default function ContactPage() {
  return (
    <>
      <span className="text-xl">Contact Page</span>
    </>
  )
}