<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
    const { data: page } = useAsyncData('index', () =>
        prismic.client.getByUID('page', 'home')
    )

    useHead({
        title: prismic.asText(page.value?.data.title)
    })

const showIntro = ref(true)

function handleAnimationDone() {
    showIntro.value = false
}
</script>

<template>
    <!-- <intro v-if="showIntro" @animationDone="handleAnimationDone" /> -->
    <CustomCursor />
    <SliceZone :components="components" :slices="page?.data.slices ?? []" />
    <main v-show="!showIntro">
        
    </main>
</template>
