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
    <a @pointerdown="goBack()" class="fixed z-20 top-10 left-4 sm:left-12 lg:left-24 text-white/50 underline">go back</a>
    <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components="components"/>
</template>

<script lang="ts">
  export default {
    methods: {
      goBack() {
        this.$router.back();
        setTimeout(() => {
          if (this.$route.path !== '/' && this.$route.path !== '/works') {
            this.$router.push('/');
          }
        }, 200);
      }
    }
  }
</script>