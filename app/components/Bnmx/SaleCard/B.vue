<script setup lang="ts">
import type PictureProps from "~~/types/picture"
const props = defineProps<{
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
}>()

const cardBgStyle = computed(() => ({
    "--card-bg-light": resolveTailwindColor(props.ui.light.bg),
    "--card-bg-dark": resolveTailwindColor(props.ui.dark.bg),
}))

const isOpen = ref(false)
const emit = defineEmits(["expand"])

const handleExpand = (e: Event) => {
    e.preventDefault()
    isOpen.value = !isOpen.value
    emit("expand", isOpen.value)
}
</script>

<template>
    <NuxtLink :to="cta?.link || '#'" class="flex flex-col relative group rounded-3xl overflow-hidden" :class="isOpen ? 'pr-[40px]' : ''">
        <BnmxPicture :image="image" class="hidden sm:flex w-full" />
        <div :style="cardBgStyle" class="flex flex-col gap-2 justify-center text-primary-blue p-4 sm:p-8 sm:gap-4 w-full flex-shrink-0 bg-[var(--card-bg-light)] dark:bg-[var(--card-bg-dark)] relative">
            <h2 class="text-2xl sm:text-lg">{{ title }}</h2>
            <Transition name="fade">
                <div class="flex flex-col gap-4" v-show="!isMobile || isOpen">
                    <p class="text-xl">{{ description }}</p>
                    <p class="flex items-center font-bold size-2 w-full">
                        {{ cta?.label }}
                        <UIcon name="i-heroicons-chevron-right" class="size-4 flex-shrink-0 ml-2 group-hover:translate-x-1 transition-transform" />
                    </p>
                </div>
            </Transition>
            <button class="sm:hidden ml-auto absolute bottom-2 right-2 z-10" @click="handleExpand">
                <UIcon :name="isOpen ? 'i-heroicons-minus' : 'i-heroicons-plus'" class="w-6 h-6" />
            </button>
        </div>
    </NuxtLink>
</template>

<style scoped>
.fade-enter-active {
    transition: opacity 220ms ease 140ms, transform 220ms ease 140ms;
}

.fade-leave-active {
    transition: opacity 180ms ease, transform 180ms ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
    transform: translateY(0);
}
</style>
