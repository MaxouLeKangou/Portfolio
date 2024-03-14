<script setup lang="ts">
    import { components } from "~/slices";

    const prismic = usePrismic();
    const route = useRoute();
    const { data: page } = useAsyncData(`[work-uid-${route.params.uid}]`, () =>
        prismic.client.getByUID("work", route.params.uid as string),
    );

    useHead({
        title: prismic.asText(page.value?.data.title),
    });
</script>

<template>
    <CustomCursor />
    <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components="components"/>
</template>
