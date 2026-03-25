<script setup lang="ts">
import type PictureProps from '~~/types/components/picture';
import type UiTheme from '~~/types/ui';

const props = defineProps<{
    productColor: string
    product: string
    cta: {
        color: "primary" | "secondary" | "success" | "error" | "warning" | "info"
        label: string
        link: string
    }
    image: PictureProps,
    ui: UiTheme
}>()

const componentStyle = computed(() => ({
    "--bg-light": resolveTailwindColor(props.ui.light.bg),
    "--bg-dark": resolveTailwindColor(props.ui.dark.bg),
    "--desk-bg-light": resolveTailwindColor(props.ui.light.deskBg),
    "--desk-bg-dark": resolveTailwindColor(props.ui.dark.deskBg),
    "--product-color-light": resolveTailwindColor(props.ui.light.productColor || props.ui.light.bg),
    "--product-color-dark": resolveTailwindColor(props.ui.dark.productColor || props.ui.dark.bg),
    "--color-light": resolveTailwindColor(props.ui.light.color),
    "--color-dark": resolveTailwindColor(props.ui.dark.color),
}))

</script>

<template>
    <section :style="componentStyle" class="bg-[var(--desk-bg-light)] dark:bg-[var(--desk-bg-dark)]">
        <UContainer class="relative py-10 sm:py-20 max-w-4xl">
            <div class="absolute bg-[var(--desk-bg-light)] dark:bg-[var(--desk-bg-dark)] px-6 py-2 rounded-tl-2xl rounded-br-xl">
                <span class="text-[var(--product-color-light)] dark:text-[var(--product-color-dark)] font-bold">
                    {{ product }}
                </span>
                <BnmxInvertedRadius color="var(--desk-bg-light)" class="rotate-90 left-full top-0 w-4 h-4" />
                <BnmxInvertedRadius color="var(--desk-bg-light)" class="rotate-90 left-0 top-full w-4 h-4" />
            </div>
            <article class="bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] pb-0 sm:pb-8 p-8 rounded-4xl">
                <div class="flex items-center flex-col sm:flex-row gap-8 sm:gap-6">
                    <div class="w-full sm:w-1/2 text-[var(--color-light)] dark:text-[var(--color-dark)] text-xl pt-8 sm:pt-0">
                        <slot />
                        <BnmxButton :color="cta.color" :label="cta.label" :to="cta.link" class="w-full sm:w-auto" />
                    </div>
                    <BnmxPicture class="w-2/3 sm:w-1/3 flex-shrink-0 mx-auto sm:mr-0 -mb-4 sm:mb-0 sm:-mt-16" :image="image" />
                </div>
            </article>
        </UContainer>
    </section>
</template>