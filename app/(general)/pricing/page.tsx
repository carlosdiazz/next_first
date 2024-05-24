import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Pricing Page',
  keywords: ["Uno","Dos"]
};

export default function PricingPage() {
  return (
    <>
      <span className="text-xl">Pricing Page</span>
    </>
  )
}