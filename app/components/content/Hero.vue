<script setup lang="ts">
import { resolveTailwindColor } from "@/utils/tailwindColor"
import type PictureProps from "~~/types/components/picture";

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
    image: PictureProps
}>()

const heroBgStyle = computed(() => ({
    "--hero-bg-light": resolveTailwindColor(props.bg.light),
    "--hero-bg-dark": resolveTailwindColor(props.bg.dark),
}))
</script>

<template>
    <section class="relative" landmark="hero" role="region" aria-label="Hero Section">
        <BnmxPicture :image="image" />
        <article
            :style="heroBgStyle"
            class="flex flex-col sm:rounded-tr-4xl gap-6 p-10 sm:p-20 w-full sm:w-1/2 md:w-2/5 absolute bottom-0 left-0 sm:h-[70%] [--hero-radius-color:var(--hero-bg-light)] bg-[var(--hero-bg-light)] dark:[--hero-radius-color:var(--hero-bg-dark)] dark:bg-[var(--hero-bg-dark)] after:absolute after:left-0 after:bottom-full after:w-1/2 sm:after:left-full sm:after:bottom-0 sm:after:w-2/5 after:h-1/3 after:rounded-tr-4xl after:bg-[var(--hero-bg-light)] dark:after:bg-[var(--hero-bg-dark)]"
        >
            <BnmxInvertedRadius :color="`var(--hero-radius-color)`" class="size-8 sm:size-4 absolute left-1/2 bottom-full sm:left-full sm:bottom-1/3" />
            <h1 class="text-xl font-bold">{{ title }}</h1>
            <p class="text-4xl font-banamex-display">{{ description }}</p>
            <BnmxButton v-if="cta" class="w-full sm:w-auto" :color="cta.color || 'primary'" :size="cta.size || 'lg'" :label="cta.label" :to="cta.link" />
        </article>
    </section>
</template>
