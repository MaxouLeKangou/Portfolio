<script setup lang="ts">
    import { type Content } from "@prismicio/client";

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

</script>

<template>
    <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
      <div class="text-white bg-gray py-24 lg:py-60 flex flex-col gap-14 lg:gap-24">
          <div class="grid grid-cols-6 lg:grid-cols-12 gap-3 lg:gap-5">
            <PrismicRichText :field="slice.primary.title" class="uppercase sticky top-10 lg:top-20 tracking-[6px] mb-5 lg:mb-10 flex col-span-6 lg:col-span-12 justify-center text-sm text-center sm:text-lg lg:text-xl font-semibold whitespace-nowrap"/>
            <div class="flex flex-col gap-40 mx-4 sm:mx-12 col-span-6 lg:col-span-8 lg:col-start-3 lg:mx-0">
              <section id="work" v-for="work in documents" :key="work.uid" class="sticky top-24 lg:top-36">
                <NuxtLink :to="`/work/${work.uid}`" class="block h-[70vh]">
                  <div class="absolute z-10 flex flex-col gap-3 bottom-10 left-5 sm:left-10 lg:gap-0 lg:justify-between lg:flex-row lg:items-end lg:right-10 2xl:left-20 2xl:bottom-20 2xl:right-20">
                    <PrismicRichText :field="work.data.name" class="uppercase font-anton text-5xl sm:text-6xl 2xl:text-8xl"/>
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
            <NuxtLink to="works" class="link-container bg-black rounded-full uppercase text-sm flex items-center py-4 px-6 gap-3 lg:gap-5 lg:py-5 lg:px-8 lg:text-xl">
              <div class="circle w-5 h-5 lg:w-8 lg:h-8 bg-[#A76BCF] rounded-full"></div>
              <p class="text-transparent hover:text-white transition-colors duration-300">VIEW ALL PROJECTS</p>
            </NuxtLink>
          </div>


      </div>
    </section>
</template>

<style>
.link-container {
  position: relative;
  overflow: hidden;
  transition: color 0.3s;
  cursor: pointer;
}

.link-container p {
  position: relative;
  transition: color 0.3s;
  z-index: 2;
}

.circle {
  transition: transform 0.5s ease-in-out, background-color 0.3s;
  z-index: 1;
  border-radius: 50%;
}

.link-container:hover .circle {
  transform: translateY(-50%) scale(20);
  background-color: #A76BCF;
}

.link-container:hover p {
  color: #000000; /* Couleur du texte au survol */
}
</style>

