import { handleScrollIntoView } from "@/utils/handleScrollIntoView"

interface NavLinkProps {
    children: React.ReactNode,
    url: string,
    styles?: string
}
const NavLink = ({children, url, styles}: NavLinkProps) => {

  const insetStyle = "before:absolute before:inset-1 before:rounded-full before:bg-accent/80 before:opacity-0 before:transition-all hover:before:opacity-100 hover:before:scale-135 duration-100"

  return (
    <a onClick={(e) => handleScrollIntoView(e, url)} className={`${styles} ${insetStyle} relative`} href={url}>
        <span className="relative text-lg px-1 py-2 flex gap-2 items-center justify-center">
          {children}
        </span>
    </a>
  )
}

export default NavLink