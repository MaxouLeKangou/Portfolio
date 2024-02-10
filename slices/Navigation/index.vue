<script setup lang="ts">
    import { type Content } from "@prismicio/client";

    // The array passed to `getSliceComponentProps` is purely optional.
    // Consider it as a visual hint for you when templating your slice.
    defineProps(
        getSliceComponentProps<Content.NavigationSlice>([
            "slice",
            "index",
            "slices",
            "context",
        ]),
    );
</script>

<template>
    <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
        <header class="fixed z-20 top-10 left-4 right-4 sm:left-12 sm:right-12 lg:left-24 lg:right-24 flex justify-between">
            <PrismicImage :field="slice.primary.logo" class="rounded-full left-4 w-9 h-9 sm:w-11 sm:h-11 lg:w-16 lg:h-16"/>
            <ul class="flex flex-col gap-3">
                <li v-for="(item, index) in slice.items" :key="index">
                    <PrismicRichText :field="item.link" class="text-white text-right font-bold text-sm sm:text-base lg:text-xl"/>
                </li>
            </ul>
        </header>
    </section>
</template>
