import { createContext, useContext } from "react"
import type { contentByLang, Language } from "../content/resolver" 

type ContentContextValue = {
    language: Language,
    content: typeof contentByLang[Language],
    setLanguage: (lang: Language) => void
}

export const ContentContext = createContext<ContentContextValue | null>(null);

export function useContent() {
    const ctx = useContext(ContentContext);
    if (!ctx) {
        throw new Error("useContent must be used within ContentProvider");
    }
    return ctx;
}