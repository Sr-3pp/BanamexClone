<script setup lang="ts">
import { resolveTailwindColor } from "@/utils/tailwindColor"

const props = defineProps<{
    title: string
    description: string
    bg: {
        light: string
        dark: string
    }
    cta: {
        color: "primary" | "secondary" | "success" | "error" | "warning" | "info"
        size: "sm" | "md" | "lg" | "xl"
        label: string
        link: string
    }
    image: {
        src: {
            desktop: string
            portrait: string
            mobile: string
        }
        alt: string
    }
}>()

const heroBgStyle = computed(() => ({
    "--hero-bg-light": resolveTailwindColor(props.bg.light),
    "--hero-bg-dark": resolveTailwindColor(props.bg.dark),
}))
</script>

<template>
    <section class="relative" landmark="hero" role="region" aria-label="Hero Section">
        <picture>
            <source :srcset="image.src.desktop" media="(min-width: 1024px)" />
            <source :srcset="image.src.portrait" media="(min-width: 768px)" />
            <source :srcset="image.src.mobile" media="(min-width: 320px)" />
            <NuxtImg :src="image.src.desktop" :alt="image.alt" />
        </picture>
        <article
            :style="heroBgStyle"
            class="flex flex-col rounded-tr-4xl gap-4 p-20 sm:p-40 w-full sm:w-1/2 md:w-2/5 absolute bottom-0 left-0 h-[70%] [--hero-radius-color:var(--hero-bg-light)] bg-[var(--hero-bg-light)] dark:[--hero-radius-color:var(--hero-bg-dark)] dark:bg-[var(--hero-bg-dark)] after:absolute after:left-full after:bottom-0 after:w-2/5 after:h-1/3 after:rounded-tr-4xl after:bg-[var(--hero-bg-light)] dark:after:bg-[var(--hero-bg-dark)]"
        >
            <BnmxInvertedRadius :color="`var(--hero-radius-color)`" class="w-4 h-4 absolute left-full bottom-1/3" />
            <h1 class="font-bold">{{ title }}</h1>
            <p class="text-4xl">{{ description }}</p>
            <BnmxButton v-if="cta" :color="cta.color || 'primary'" :size="cta.size || 'lg'" :label="cta.label" :to="cta.link" />
        </article>
    </section>
</template>
