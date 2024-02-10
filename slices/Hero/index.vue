<script setup lang="ts">
    import { type Content } from "@prismicio/client";
        // The array passed to `getSliceComponentProps` is purely optional.
        // Consider it as a visual hint for you when templating your slice.
    defineProps(
        getSliceComponentProps<Content.HeroSlice>([
            "slice",
            "index",
            "slices",
            "context",
        ]),
    );
</script>

<template>
    <section class="text-white/75" :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
      <section v-if="slice.variation === 'default'">
        <div class="relative flex items-center justify-center h-screen">
          <div class="absolute w-full h-full top-0 right-0 bottom-0 lg:w-[50%]">
            <PrismicImage :field="slice.primary.picture" class="w-full h-full object-cover grayscale"/>
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/75 to-black/75 lg:from-black lg:to-black/50"></div>
          </div>
          <!-- Conteneur du texte -->
          <div class="absolute z-10 w-full h-full place-items-center grid grid-cols-6 gap-3 mx-4 lg:grid-cols-12 lg:gap-5 lg:mx-24">
            <div class="text-center flex flex-col col-span-2 col-start-3 lg:col-span-4 lg:col-start-5 gap-5 lg:gap-10">
                <PrismicRichText :field="slice.primary.name" class="tracking-[6px] text-sm lg:text-xl font-semibold"/>
                <PrismicRichText :field="slice.primary.title" class="text-[70px] font-bold leading-[90%] lg:text-[120px]"/>
            </div>
          </div>
        </div>
      </section>
    </section>
  </template>