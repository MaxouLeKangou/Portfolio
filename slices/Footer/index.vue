<script setup lang="ts">
    import { type Content } from "@prismicio/client";

    // The array passed to `getSliceComponentProps` is purely optional.
    // Consider it as a visual hint for you when templating your slice.
    defineProps(
        getSliceComponentProps<Content.FooterSlice>([
            "slice",
            "index",
            "slices",
            "context",
        ]),
    );
</script>

<template>
    <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
        <footer class="grid grid-cols-6 lg:grid-cols-12 pt-24 pb-5 lg:pt-36 lg:pb-10">
            <div class="flex flex-col col-span-6 lg:col-span-12 text-center">
                <div class="flex flex-col gap-5 mx-4 lg:mb-20">
                    <PrismicRichText :field="slice.primary.content" class="text-white uppercase tracking-[6px] text-sm lg:text-xl font-semibold"/>
                    <NuxtLink :to="slice.primary.email.url" class="text-blue font-anton uppercase text-xl sm:text-4xl lg:text-6xl">
                        {{ slice.primary.email.url.replace('mailto:', '') }}
                    </NuxtLink>
                </div>

                <ul class="flex justify-center gap-4 my-10 lg:hidden">
                    <li v-for="(item, index) in slice.items" :key="index" class="flex">
                        <NuxtLink :to="item.link.url" class="border-[1px] border-white/25 rounded-md">
                            <PrismicImage class="w-5 h-5 m-4" :field="item.image" />
                        </NuxtLink>
                    </li>
                </ul>
                <div class="text-white/50 text-xs sm:text-sm lg:text-base">
                    <div class="flex gap-1 justify-center uppercase"><span>©</span><PrismicRichText :field="slice.primary.mention" /></div>
                    <p>ALL RIGHTS RESERVED</p>
                </div>
            </div>
        </footer>
    </section>
</template>