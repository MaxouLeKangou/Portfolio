<script setup lang="ts">
    import { type Content } from "@prismicio/client";

    // The array passed to `getSliceComponentProps` is purely optional.
    // Consider it as a visual hint for you when templating your slice.
    defineProps(
        getSliceComponentProps<Content.SocialSlice>([
            "slice",
            "index",
            "slices",
            "context",
        ]),
    );
</script>

<template>
    <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
        <div class="hidden lg:block fixed z-20 bottom-10 left-24">
            <ul class="flex flex-col gap-3">
                <li v-for="(item, index) in slice.items" :key="index" class="flex">
                    <PrismicLink :field="item.link" class="">
                        <PrismicImage :field="item.image" class="w-7 h-7 m-3"/>
                    </PrismicLink>
                </li>
            </ul>
        </div>
    </section>
</template>
