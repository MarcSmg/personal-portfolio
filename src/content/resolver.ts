import * as en from "./en"
import * as fr from "./fr"

export const contentByLang = {
    en,
    fr
}

export type Language = keyof typeof contentByLang;