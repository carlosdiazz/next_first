import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"

interface items {
  path: string
  text:string
}

const navItems:items[] = [
  { path: '/about', text: "About" },
  { path: '/pricing', text: "Pricing" },
  { path: '/contact', text:"Contact"}
]


export const NavBar = async () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={'/'} className="flex items-center">
        <HomeIcon className="mr-2"/>
        Home
      </Link>
      <div className="flex flex-1" />
      {navItems.map(navItem => (
        <ActiveLink key={navItem.path} path={navItem.path} text={navItem.text} />
      ))}
    </nav>
  )
}
