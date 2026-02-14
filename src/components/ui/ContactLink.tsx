import Button from "./Button"

interface ContactProps {
    children: React.ReactNode,
    url: string,
    styles?:string,
    variant?: "primary" | "secondary"
}
const ContactLink = ({children, url, styles, variant}: ContactProps) => {
  return (
    <a target="_blank" href={url}>
        <Button styles={styles} variant={variant}>{children}</Button>
    </a>
  )
}

export default ContactLink