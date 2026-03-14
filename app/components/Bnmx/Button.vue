<script setup lang="ts">
defineProps<{
    color?: "primary" | "secondary" | "success" | "error" | "warning" | "info"
    size?: "sm" | "md" | "lg" | "xl"
    label: string
}>()
</script>

<template>
    <UButton :color="color" :size="size">{{ label }}</UButton>
</template>