import { ReactNode } from "react"
import { Weight } from "./Weight"

export const svgDictionary = (key: string) => {

    const dictionary: Record<string, ReactNode> = {
        weight: <Weight></Weight>
    }

    return(
        dictionary[key]
    )
}