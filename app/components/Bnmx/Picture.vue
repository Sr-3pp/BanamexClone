<script setup lang="ts">
defineProps<{
    image: {
        src: {
            desktop: string
            portrait: string
            mobile: string
        }
        alt: string
    }
}>()
</script>

<template>
<picture class="flex">
    <source v-if="image.src.desktop" :srcset="image.src.desktop" media="(min-width: 1024px)" />
    <source v-if="image.src.portrait" :srcset="image.src.portrait" media="(min-width: 768px)" />
    <source v-if="image.src.mobile" :srcset="image.src.mobile" media="(min-width: 320px)" />
    <NuxtImg :src="image.src.desktop" :alt="image.alt" class="object-cover w-full h-full" />
</picture>

</template>