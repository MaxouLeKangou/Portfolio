<script setup lang="ts">
    import { type Content } from "@prismicio/client";
    import { asText } from '@prismicio/helpers';

    // The array passed to `getSliceComponentProps` is purely optional.
    // Consider it as a visual hint for you when templating your slice.
    defineProps(
        getSliceComponentProps<Content.WorksSlice>([
            "slice",
            "index",
            "slices",
            "context",
        ]),
    );

    const prismic = usePrismic();
    const { data: documents } = await useAsyncData('works', () => 
        prismic.client.getAllByType('work', {
            pageSize: 10,
        })
    );

    console.log(documents);

</script>

<template>
    <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
      <div class="text-white bg-gray py-24 lg:py-60 flex flex-col gap-14 lg:gap-24">
          <div class="grid grid-cols-6 lg:grid-cols-12 gap-3 lg:gap-5">
            <PrismicRichText :field="slice.primary.title" class="uppercase tracking-[6px] mb-5 lg:mb-0 flex col-span-6 lg:col-span-1 lg:col-start-2 lg:items-center lg:rotate-[270deg] justify-center text-sm text-center sm:text-lg lg:text-xl font-semibold whitespace-nowrap"/>
            <div class="flex flex-col gap-5 mx-4 sm:mx-12 col-span-6 lg:col-span-8 lg:col-start-3 lg:mx-0">
              <section v-for="work in documents" :key="work.uid" class="relative">
                <NuxtLink :to="`/work/${work.uid}`" class="block h-[70vh]">
                  <div class="absolute z-10 flex flex-col gap-3 bottom-10 left-5 sm:left-10 sm:gap-4 lg:flex-row lg:items-end lg:justify-between lg:right-10 2xl:left-20 2xl:bottom-20 2xl:right-20">
                    <PrismicRichText :field="work.data.name" class="font-anton text-5xl sm:text-6xl 2xl:text-8xl"/>
                    <div class="flex text-xs gap-2 sm:text-sm lg:items-center">
                      <PrismicRichText :field="work.data.tag_1" class="py-2 px-5 lg:py-3 lg:px-10 bg-gray/30 rounded-full"/>
                      <PrismicRichText :field="work.data.tag_2" class="py-2 px-5 lg:py-3 lg:px-10 bg-gray/30 rounded-full"/>
                    </div>
                  </div>
                  <PrismicImage :field="work.data.image" class="w-full h-full rounded-3xl object-cover"/>
                </NuxtLink>
              </section>
          
            </div>
          
          </div>
          <div class="flex justify-center">
            <NuxtLink to="/works" class="max-w-max bg-black rounded-full uppercase text-sm flex gap-3 py-4 px-6 lg:gap-5 lg:py-5 lg:px-8 lg:text-xl lg:items-center">
                <div class="w-5 h-5 lg:w-8 lg:h-8 bg-blue rounded-full"></div><p>VIEW ALL PROJECTS</p>
            </NuxtLink>
          </div>
      </div>
    </section>
</template>