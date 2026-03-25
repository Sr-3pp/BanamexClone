<script lang="ts" setup>
import type PictureProps from '~~/types/components/picture'
import type UiTheme from '~~/types/ui'


const props = defineProps<{
    image?: Partial<PictureProps>
    title: string
    description: string
    cta?: {
        color: 'primary' | 'secondary' 
        label: string
        link: string
    }
    ui?: UiTheme
}>()

const cardImage = computed<PictureProps>(() => ({
    src: {
        desktop: props.image?.src?.desktop || '',
        portrait: props.image?.src?.portrait || '',
        mobile: props.image?.src?.mobile || '',
    },
    alt: props.image?.alt || '',
}))

const theme = computed<UiTheme>(() => ({
    light: {
        bg: props.ui?.light?.bg || '',
        color: props.ui?.light?.color || '',
    },
    dark: {
        bg: props.ui?.dark?.bg || '',
        color: props.ui?.dark?.color || '',
    },
}))

const cardStyle = computed(() => ({
    '--card-bg-light': resolveTailwindColor(theme.value.light.bg),
    '--card-color-light': resolveTailwindColor(theme.value.light.color),
    '--card-bg-dark': resolveTailwindColor(theme.value.dark.bg),
    '--card-color-dark': resolveTailwindColor(theme.value.dark.color),
}))

const sash = {
    'before:absolute': true,
    'before:top-0': true,
    'before:left-full': true,
    'before:w-1/5': true,
    'before:h-2/3': true,
    'before:rounded-br-4xl': true,
    'before:bg-[var(--card-bg-light)]': true,
    'dark:before:bg-[var(--card-bg-dark)]': true,
}
</script>

<template>
    <article class="flex" :style="cardStyle">
        <div 
            class="relative w-1/2 rounded-l-4xl flex-shrink-0 bg-[var(--card-bg-light)] dark:bg-[var(--card-bg-dark)] text-[var(--card-color-light)] dark:text-[var(--card-color-dark)] p-4 sm:p-8 flex flex-col justify-between gap-4"
            :class="{...sash}"
        >
            <BnmxInvertedRadius color="var(--card-bg-dark)" class="size-6 rotate-[90deg] top-2/3 left-full" />
            <h4 class="font-banamex-display text-4xl">{{ title }}</h4>
            <p>{{ description }}</p>
            <UButton v-if="cta" :color="cta.color" :to="cta.link" class="self-start">
                {{ cta.label }}
            </UButton>
        </div>
        <BnmxPicture :image="cardImage" class="rounded-r-4xl overflow-hidden" />
    </article>
</template>