import {Processor} from "https://unpkg.com/windicss@3.4.3/lib/index.mjs"
import {HTMLParser} from "https://unpkg.com/windicss@3.4.3/utils/parser/index.mjs"

/**
 * Custom CSS classes for fonts
 * @type {string}
 */
//language=CSS
const fontStyles = `
    .font-display {
        font-family: Poppins, sans-serif;
    }

    .font-body {
        font-family: IBM Plex Sans, sans-serif;
    }
`

/**
 * Use WindiCSS to generate CSS styles from HTML template
 * @param html
 * @returns {*}
 */
function generateStyles(html) {
    const processor = new Processor()
    const htmlClasses = new HTMLParser(html)
        .parseClasses()
        .map(i => i.result)
        .join(' ')

    const preflightSheet = processor.preflight(html)

    const interpretedSheet = processor.interpret(htmlClasses).styleSheet

    const APPEND = false
    const MINIFY = false
    const styles = interpretedSheet.extend(preflightSheet, APPEND).build(MINIFY)

    return styles
}

/**
 * Vue HOC
 *
 * Specify `wc` value in `component` to include classes which aren't inside `component.template`
 * This is used for components like `button` which uses dynamic classes
 * @param component
 * @returns {*&{template: *, styles: (*|string)[]}}
 */
export function wc(component) {
    if (!component.template) throw new Error("Vue component must have a template")

    let c;
    if (component.wc) {
        // Create an empty div with the required classes
        c = `<div class="${component.wc.join(" ")}"/>`;
    }

    // Color mismatch between Windi and Tailwind
    const template = component.template.replace("slate", "blue-gray")
    const styles = generateStyles(template + c)

    return {
        ...component,
        template,
        styles: [styles, fontStyles]
    }
}

