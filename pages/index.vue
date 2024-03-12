<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
    const { data: page } = useAsyncData('index', () =>
        prismic.client.getByUID('page', 'home')
    )

    useHead({
        title: prismic.asText(page.value?.data.title)
    })

</script>

<template>
    <intro />
    <CustomCursor />
    <SliceZone :components="components" :slices="page?.data.slices ?? []" />
</template>
