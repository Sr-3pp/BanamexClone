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
    card2: {
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
    },
    card3: {
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
    },
    card4?: {
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
    },
    card5?: {
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
const card2Sw = ref(false)
const card4Sw = ref(false)
const card5Sw = ref(false)

const expandHandler = (card: string, isExpanded: boolean) => {
    if (card === "card1") {
        card1Sw.value = isExpanded
    }
    if (card === "card2") {
        card2Sw.value = isExpanded
    }
    if (card === "card4") {
        card4Sw.value = isExpanded
    }
    if (card === "card5") {
        card5Sw.value = isExpanded
    }
}
</script>

<template>
    <section :style="componentStyle" class="bg-[var(--desk-bg)]">
        <UContainer class="py-10 sm:py-20">
            <UPageGrid>
                <div class="col-span-4 flex sm:flex-col gap-4 overflow-hidden transition-all duration-500" :class="card2Sw ? 'justify-end' : 'justify-start'">
                    <BnmxSaleCardC
                        :title="card1.title"
                        :description="card1.description"
                        :cta="card1.cta"
                        :image="card1.image"
                        :ui="card1.ui"
                        @expand="expandHandler('card1', $event)"
                        class="sm:w-full h-full transition-width duration-500"
                        :class="card1Sw ? 'w-full flex-shrink-0' : 'w-1/2'"
                    />
                    <BnmxSaleCardD
                        :title="card2.title"
                        :description="card2.description"
                        :cta="card2.cta"
                        :image="card2.image"
                        :ui="card2.ui"
                        @expand="expandHandler('card2', $event)"
                        class="sm:w-full h-full transition-width duration-500"
                        :class="card2Sw ? 'w-full flex-shrink-0' : 'w-1/2'"
                    />
                </div>
                <div class="col-span-4">
                    <BnmxSaleCardB
                        :title="card3.title"
                        :description="card3.description"
                        :cta="card3.cta"
                        :image="card3.image"
                        :ui="card3.ui"
                        class="sm:w-full transition-width duration-500"
                    />
                </div>
                <div v-if="card4 && card5" class="col-span-4 flex sm:flex-col gap-4 overflow-hidden transition-all duration-500" :class="card5Sw ? 'justify-end' : 'justify-start'">
                    <BnmxSaleCardC
                        :title="card4.title"
                        :description="card4.description"
                        :cta="card4.cta"
                        :image="card4.image"
                        :ui="card4.ui"
                        @expand="expandHandler('card4', $event)"
                        class="sm:w-full h-full transition-width duration-500"
                        :class="card4Sw ? 'w-full flex-shrink-0' : 'w-1/2'"
                    />
                    <BnmxSaleCardE
                        :title="card5.title"
                        :description="card5.description"
                        :cta="card5.cta"
                        :image="card5.image"
                        :ui="card5.ui"
                        @expand="expandHandler('card5', $event)"
                        class="sm:w-full h-full transition-width duration-500"
                        :class="card5Sw ? 'w-full flex-shrink-0' : 'w-1/2'"
                    />
                </div>
            </UPageGrid>
        </UContainer>
    </section>
</template>