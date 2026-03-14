import tailwindColors from "tailwindcss/colors"

const SPECIAL_TOKENS = new Set(["transparent", "current", "inherit", "white", "black"])

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

    const [paletteName, shade] = token.split("-")

    if (!paletteName || !shade) {
        return token
    }

    const palette = tailwindColors[paletteName as keyof typeof tailwindColors]

    if (!palette || typeof palette !== "object" || !(shade in palette)) {
        return token
    }

    return palette[shade as keyof typeof palette]
}
