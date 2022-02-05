import {Processor} from "https://unpkg.com/windicss@3.4.3/lib/index.mjs"
import {HTMLParser} from "https://unpkg.com/windicss@3.4.3/utils/parser/index.mjs"

//language=CSS
const fontStyles = `
    .font-display {
        font-family: Poppins, sans-serif;
    }

    .font-body {
        font-family: IBM Plex Sans, sans-serif;
    }
`

function generateStyles(html) {
    const processor = new Processor()
    const htmlClasses = new HTMLParser(html)
        .parseClasses()
        .map(i => i.result)
        .join(' ')

    const preflightSheet = processor.preflight(html)

    const interpretedSheet = processor.interpret(htmlClasses).styleSheet

    const APPEND = true
    const MINIFY = true
    const styles = interpretedSheet.extend(preflightSheet, APPEND).build(MINIFY)

    return styles
}

export function wc(component) {
    if (!component.template) throw new Error("Vue component must have a template")

    const template = component.template.replace("slate", "blue-gray")
    const styles = generateStyles(template)

    return {
        ...component,
        template,
        styles: [styles, fontStyles]
    }
}

