<script setup lang="ts">
import type PictureProps from '~~/types/picture';

const props = defineProps<{
    deskBg: string
    card1: {
        title: string
        description: string
        cta?: {
            color: string
            label: string
            link: string
        }
        image: PictureProps
        ui: {
            light: {
                bg: string
                color: string
            }
            dark: {
                bg: string
                color: string
            }
        }
    }
}>()

const componentStyle = computed(() => ({
    "--desk-bg": resolveTailwindColor(props.deskBg),
}))

const card1Sw = ref(false)

const expandHandler = (card: string, isExpanded: boolean) => {
    if (card === "card1") {
        card1Sw.value = isExpanded
    }
}
</script>

<template>
    <section :style="componentStyle" class="bg-[var(--desk-bg)]">
        <UContainer class="py-10 sm:py-20">
            <UPageGrid>
                <div class="col-span-5 flex sm:flex-col gap-4 overflow-hidden">
                    <BnmxSaleCardC
                        :title="card1.title"
                        :description="card1.description"
                        :cta="card1.cta"
                        :image="card1.image"
                        :ui="card1.ui"
                        @expand="expandHandler('card1', $event)"
                        class="flex-shrink-0 sm:w-full transition-width duration-500"
                        :class="card1Sw ? 'w-full' : 'w-1/2'"
                    />
                    <article class="w-1/2 sm:w-full">
                        card 2
                    </article>
                </div>
                <div>
                    <article>
                        Card 3
                    </article>
                </div>
                <div>
                    <article>
                        Card 4
                    </article>
                    <article>
                        Card 5
                    </article>
                </div>
            </UPageGrid>
        </UContainer>
    </section>
</template>