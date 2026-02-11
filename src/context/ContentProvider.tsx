import { useEffect, useState } from "react";
import { ContentContext } from "./ContentContext"
import { contentByLang, type Language } from "../content/resolver";

export function ContentProvider({children}: {children: React.ReactNode}) {
    const [language, setLanguage] = useState<Language>("en");

    useEffect(() => {
        const stored = localStorage.getItem("lang") as Language | null;
        if (stored && stored in contentByLang) {
            setLanguage(stored);
        }
    }, [])

    const changeLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("lang", lang);
    }

    const value = {
        language: language,
        content: contentByLang[language],
        setLanguage: changeLanguage
    }

    return (
        <ContentContext.Provider value={value}>
            {children}
        </ContentContext.Provider>

    )
}