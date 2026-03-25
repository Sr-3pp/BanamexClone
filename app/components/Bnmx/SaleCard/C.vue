<script setup lang="ts">
import type PictureProps from "~~/types/components/picture"
import type UiTheme from "~~/types/ui";
const props = defineProps<{
    title: string
    description: string
    cta?: {
        color: string
        label: string
        link: string
    }
    image: PictureProps
    ui: UiTheme
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
    <NuxtLink :to="cta?.link || '#'" class="flex relative group" :class="isOpen ? 'pr-[40px]' : ''">
        <div :style="cardBgStyle" :class="isOpen ? '' : 'rounded-tr-3xl'" class="flex flex-col gap-2 justify-center text-primary-blue rounded-b-3xl rounded-tl-3xl sm:rounded-r-none p-4 sm:p-8 sm:gap-4 w-full sm:w-3/5 flex-shrink-0 bg-[var(--card-bg-light)] dark:bg-[var(--card-bg-dark)] relative after:hidden sm:after:flex after:absolute after:left-full after:top-0 after:rounded-br-xl after:bg-[var(--card-bg-light)] dark:after:bg-[var(--card-bg-dark)] after:flex-shrink-0 after:h-8/12 after:w-1/8">
            <h2 class="text-2xl sm:text-lg">{{ title }}</h2>
            <Transition name="fade">
                <div class="flex flex-col gap-4" v-show="!isMobile ||isOpen">
                    <p class="text-xl">{{ description }}</p>
                    <p class="flex items-center font-bold size-2 w-full">
                        {{ cta?.label }}
                        <UIcon name="i-heroicons-chevron-right" class="size-4 flex-shrink-0 ml-2 group-hover:translate-x-1 transition-transform" />
                    </p>
                </div>
            </Transition>
            <BnmxInvertedRadius color="var(--card-bg-dark)" class="top-8/12 left-full size-2 rotate-[90deg]" />
            <button class="sm:hidden ml-auto absolute z-10" :class="isOpen ? 'bottom-16 -right-6' : 'bottom-2 right-2'" @click="handleExpand">
                <UIcon :name="isOpen ? 'i-heroicons-minus' : 'i-heroicons-plus'" class="w-6 h-6" />
            </button>
        </div>
        <span :class="isOpen ? 'flex' : 'hidden'" class="w-[40px] h-2/3 rounded-r-3xl absolute top-0 right-0 sm:hidden bg-[var(--card-bg-light)] dark:bg-[var(--card-bg-dark)]" :style="cardBgStyle">
        </span>
        <BnmxPicture :image="image" class="rounded-r-3xl overflow-hidden hidden sm:flex" />
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
