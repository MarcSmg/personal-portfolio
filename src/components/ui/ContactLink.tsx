import Button from "./Button"

interface ContactProps {
    children: React.ReactNode,
    url: string,
    styles?:string
}
const ContactLink = ({children, url, styles}: ContactProps) => {
  return (
    <a target="_blank" href={url}>
        <Button styles={styles}>{children}</Button>
    </a>
  )
}

export default ContactLink