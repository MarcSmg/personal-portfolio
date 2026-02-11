import ReactIcon from "./react.svg";
import DjangoIcon from "./django.svg";
import GitIcon from "./git.svg";
import GitHubIcon from "./github.svg";
import VSCodeIcon from "./vscode.svg";
import LinkedInIcon from "./linkedin.svg"
import WhatsappIcon from "./whatsapp.svg"
import VueIcon from "./vue.svg"
import PostManIcon from "./postman.svg"
import PythonIcon from "./python.svg"
import CIcon from "./c.svg"
import CPPIcon from "./c++.svg"
import HTMLIcon from "./html.svg"
import CSSIcon from "./css.svg"
import JSIcon from "./javascript.svg"
import ExpressIcon from ".//express.svg"
import RESTIcon from "./restapi.svg"
import FlaskIcon from "./flask.svg"
import TSIcon from "./typescript.svg"
import JavaIcon from "./java.svg"
import GMailIcon from "./gmail.svg"


export const iconMap: Record<string, string> = {
    /* 
    Helps match a technology or tool with an svg icon
    Ex : React: ReactIcon with ReactIcon the import from ./react.svg

    Why: Skills and technologies are listed in the Skills.ts file in 
    */
    react: ReactIcon,
    django: DjangoIcon,
    flask: FlaskIcon,
    express: ExpressIcon,
    c: CIcon,
    "c++": CPPIcon,
    html: HTMLIcon,
    css: CSSIcon,
    javascript: JSIcon,
    typescript: TSIcon,
    java: JavaIcon, 
    python: PythonIcon,
    restapi: RESTIcon, 
    git: GitIcon,
    postman: PostManIcon,
    vue: VueIcon,
    github: GitHubIcon,
    vscode: VSCodeIcon,
    linkedin: LinkedInIcon,
    whatsapp: WhatsappIcon,
    gmail: GMailIcon,
}