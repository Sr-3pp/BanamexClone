import tailwindColors from "tailwindcss/colors"

const SPECIAL_TOKENS = new Set(["transparent", "current", "inherit", "white", "black"])
const THEME_TOKEN_PREFIX = "color-"
const THEME_COLOR_PREFIX = "--color-"

export const DEFAULT_TAILWIND_COLOR_FALLBACK = "#ffffff"

export function resolveTailwindColor(
    token?: string,
    fallback = DEFAULT_TAILWIND_COLOR_FALLBACK,
) {
    if (!token) {
        return fallback
    }

    if (SPECIAL_TOKENS.has(token)) {
        return token
    }

    if (token.startsWith("var(")) {
        return token
    }

    if (token.startsWith(THEME_TOKEN_PREFIX)) {
        return `var(--${token})`
    }

    if (token.startsWith(THEME_COLOR_PREFIX)) {
        return `var(${token})`
    }

    const [paletteName, shade] = token.split("-")

    if (!paletteName || !shade) {
        return token
    }

    const palette = tailwindColors[paletteName as keyof typeof tailwindColors]

    if (!palette || typeof palette !== "object" || !(shade in palette)) {
        return `var(${THEME_COLOR_PREFIX}${token})`
    }

    return palette[shade as keyof typeof palette]
}
