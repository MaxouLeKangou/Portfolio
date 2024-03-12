<script setup lang="ts">

    useHead({
        title: 'WORKS - Maxime Legrand'
    })

    const prismic = usePrismic();
    const { data: documents } = await useAsyncData('works', () => 
        prismic.client.getAllByType('work')
    );
</script>

<template>
    <CustomCursor />
    <h1 class="text-white text-center font-bold text-7xl lg:text-[120px] py-16 lg:py-28">WORKS</h1>
    <div class="text-white grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-5 px-4 sm:px-12">
      <section v-for="work in documents" :key="work.uid" class="relative h-[26vh] sm:h-[46vh]">
        <NuxtLink :to="`/work/${work.uid}`" class="block w-full h-full">
          <div class="absolute bottom-4 left-6 flex flex-col gap-2 sm:gap-4">
            <PrismicRichText :field="work.data.name" class="uppercase font-anton text-3xl sm:text-5xl"/>
            <div class="flex gap-2 text-xs sm:text-sm">
              <PrismicRichText :field="work.data.tag_1" class="py-[6px] px-3 sm:py-2 sm:px-5 bg-gray/30 rounded-full"/>
              <PrismicRichText :field="work.data.tag_2" class="py-[6px] px-3 sm:py-2 sm:px-5 bg-gray/30 rounded-full"/>
            </div>
          </div>
          <PrismicImage :field="work.data.image" class="w-full h-full rounded-3xl object-cover"/>
        </NuxtLink>
      </section>
    </div>
  </template>
  
