<script setup lang="ts">
import type PictureProps from '~~/types/components/picture'

interface SlideTheme {
    light: {
        bg: string
        color: string
    }
    dark: {
        bg: string
        color: string
    }
}

interface SlideInput {
    image: PictureProps
    title: string
    description: string
    cta?: {
        color: 'primary' | 'secondary'
        label: string
        link: string
    }
    ui?: Partial<SlideTheme>
    theme?: Partial<SlideTheme>
}

interface Slide {
    image: PictureProps
    title: string
    description: string
    cta?: {
        color: 'primary' | 'secondary'
        label: string
        link: string
    }
    theme: SlideTheme
}

const props = defineProps<{
    items?: SlideInput[]
    slides?: SlideInput[]
    ui?: {
        dark?: {
            bg: string
            color: string
        },
        light?: {
            bg: string
            color: string
        }
    }
}>()

const DEFAULT_THEME: SlideTheme = {
    light: {
        bg: 'white',
        color: 'black',
    },
    dark: {
        bg: 'black',
        color: 'white',
    },
}

const sourceSlides = computed(() => props.items ?? props.slides ?? [])

const carouselItems = computed<Slide[]>(() => sourceSlides.value.map((slide) => ({
    image: slide.image,
    title: slide.title,
    description: slide.description,
    cta: slide.cta,
    theme: {
        light: {
            bg: slide.ui?.light?.bg ?? slide.theme?.light?.bg ?? DEFAULT_THEME.light.bg,
            color: slide.ui?.light?.color ?? slide.theme?.light?.color ?? DEFAULT_THEME.light.color,
        },
        dark: {
            bg: slide.ui?.dark?.bg ?? slide.theme?.dark?.bg ?? DEFAULT_THEME.dark.bg,
            color: slide.ui?.dark?.color ?? slide.theme?.dark?.color ?? DEFAULT_THEME.dark.color,
        },
    },
})))

const carouselStyle = computed(() => ({
    '--carousel-bg-light': props.ui?.light?.bg,
    '--carousel-color-light': props.ui?.light?.color,
    '--carousel-bg-dark': props.ui?.dark?.bg,
    '--carousel-color-dark': props.ui?.dark?.color,
}))
</script>

<template>
    <section class="sm:pl-10 md:pl-30 py-10 sm:py-20 bg-[var(--carousel-bg-light)] dark:bg-[var(--carousel-bg-dark)] text-[var(--carousel-color-light)] dark:text-[var(--carousel-color-dark)]" :style="carouselStyle">
        <UCarousel 
            :items="carouselItems"
            arrows
            :ui="{
                root: 'flex flex-row-reverse gap-8',
                container: 'gap-2',
                item: 'basis-[calc(100%_-_2rem)] sm:basis-[calc(100%_-_10rem)] lg:basis-[calc(50%_-_10rem)] flex-shrink-0',
                arrows: 'static flex flex-col h-full justify-center gap-4',
                prev: 'static translate-none',
                next: 'static translate-none',
                controls: 'static flex'
            }"
        >
            <template #default="{ item }">
                <BnmxHighlightCard
                    :image="item.image"
                    :title="item.title"
                    :description="item.description"
                    :cta="item.cta"
                    :ui="item.theme"
                />
            </template>
        </UCarousel>
    </section>
</template>