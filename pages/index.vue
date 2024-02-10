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
    <!-- <Header/> -->
  
    <SliceZone class="text-light-100 flex flex-col lg:gap-48" wrapper="main" :components="components" :slices="page?.data.slices ?? []" />

    <!-- <Footer/> -->
</template>