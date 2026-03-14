<script setup lang="ts">
defineProps<{
    color: string
}>()
</script>

<template>
    <span class="inverted-radius" :style="{ '--color': color}"></span>
</template>

<style>
.inverted-radius {
    position: absolute;
    background: #000000;
    background: radial-gradient(circle at top right,rgba(0, 0, 0, 0) 70%, var(--color) 50%);
}
</style>