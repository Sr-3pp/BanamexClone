<script setup lang="ts">
const props = defineProps<{
    deskBg: string
    bg: string
    color: string
    productColor: string
    product: string
    cta: {
        color: "primary" | "secondary" | "success" | "error" | "warning" | "info"
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

const componentStyle = computed(() => ({
    "--component-bg": resolveTailwindColor(props.bg),
    "--desk-bg": resolveTailwindColor(props.deskBg),
    "--product-color": resolveTailwindColor(props.productColor),
    "--color": resolveTailwindColor(props.color),
}))

</script>

<template>
    <section :style="componentStyle" class="bg-[var(--desk-bg)]">
        <UContainer class="relative py-10 sm:py-20 max-w-4xl">
            <div class="absolute bg-[var(--desk-bg)] px-6 py-2 rounded-tl-2xl rounded-br-xl">
                <span class="text-[var(--product-color)] font-bold">
                    {{ product }}
                </span>
                <BnmxInvertedRadius color="var(--desk-bg)" class="rotate-90 left-full top-0 w-4 h-4" />
                <BnmxInvertedRadius color="var(--desk-bg)" class="rotate-90 left-0 top-full w-4 h-4" />
            </div>
            <article class="bg-[var(--component-bg)] pb-0 sm:pb-8 p-8 rounded-4xl">
                <div class="flex items-center flex-col sm:flex-row gap-8 sm:gap-6">
                    <div class="w-full sm:w-1/2 text-[var(--color)] text-xl pt-8 sm:pt-0">
                        <slot />
                        <BnmxButton :color="cta.color" :label="cta.label" :to="cta.link" class="w-full sm:w-auto" />
                    </div>
                    <BnmxPicture class="w-2/3 sm:w-1/3 flex-shrink-0 mx-auto sm:mr-0 -mb-4 sm:mb-0 sm:-mt-16" :image="image" />
                </div>
            </article>
        </UContainer>
    </section>
</template>