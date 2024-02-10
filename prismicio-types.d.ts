// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice =
  | NavigationSlice
  | FooterSlice
  | HistorySlice
  | AboutSlice
  | HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = PageDocument;

/**
 * Primary content in *About → Primary*
 */
export interface AboutSliceDefaultPrimary {
  /**
   * Title field in *About → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Content field in *About → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Subtitle field in *About → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.RichTextField;
}

/**
 * Primary content in *About → Items*
 */
export interface AboutSliceDefaultItem {
  /**
   * Text field in *About → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.items[].text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutSliceDefaultPrimary>,
  Simplify<AboutSliceDefaultItem>
>;

/**
 * Slice variation for *About*
 */
type AboutSliceVariation = AboutSliceDefault;

/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: About
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSlice = prismic.SharedSlice<"about", AboutSliceVariation>;

/**
 * Primary content in *Footer → Primary*
 */
export interface FooterSliceDefaultPrimary {
  /**
   * Content field in *Footer → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Email field in *Footer → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.primary.email
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  email: prismic.LinkField;

  /**
   * Mention field in *Footer → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.primary.mention
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  mention: prismic.RichTextField;
}

/**
 * Primary content in *Footer → Items*
 */
export interface FooterSliceDefaultItem {
  /**
   * Link field in *Footer → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Image field in *Footer → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Footer Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FooterSliceDefaultPrimary>,
  Simplify<FooterSliceDefaultItem>
>;

/**
 * Slice variation for *Footer*
 */
type FooterSliceVariation = FooterSliceDefault;

/**
 * Footer Shared Slice
 *
 * - **API ID**: `footer`
 * - **Description**: Footer
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSlice = prismic.SharedSlice<"footer", FooterSliceVariation>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * name field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * title field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * picture field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.picture
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  picture: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceContentPrimary {
  /**
   * title field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * content field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * picture field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.picture
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  picture: prismic.ImageField<never>;
}

/**
 * Content variation for Hero Slice
 *
 * - **API ID**: `content`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceContent = prismic.SharedSliceVariation<
  "content",
  Simplify<HeroSliceContentPrimary>,
  never
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceMottoPrimary {
  /**
   * title field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * content field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * name field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * picture field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.picture
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  picture: prismic.ImageField<never>;
}

/**
 * Motto variation for Hero Slice
 *
 * - **API ID**: `motto`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceMotto = prismic.SharedSliceVariation<
  "motto",
  Simplify<HeroSliceMottoPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceContent | HeroSliceMotto;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *History → Primary*
 */
export interface HistorySliceDefaultPrimary {
  /**
   * Title field in *History → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: history.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Primary content in *History → Items*
 */
export interface HistorySliceDefaultItem {
  /**
   * Date field in *History → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: history.items[].date
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  date: prismic.RichTextField;

  /**
   * Job field in *History → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: history.items[].job
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  job: prismic.RichTextField;

  /**
   * Place field in *History → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: history.items[].place
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  place: prismic.RichTextField;
}

/**
 * Default variation for History Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HistorySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HistorySliceDefaultPrimary>,
  Simplify<HistorySliceDefaultItem>
>;

/**
 * Slice variation for *History*
 */
type HistorySliceVariation = HistorySliceDefault;

/**
 * History Shared Slice
 *
 * - **API ID**: `history`
 * - **Description**: History
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HistorySlice = prismic.SharedSlice<
  "history",
  HistorySliceVariation
>;

/**
 * Primary content in *Navigation → Primary*
 */
export interface NavigationSliceDefaultPrimary {
  /**
   * Logo field in *Navigation → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.primary.logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Primary content in *Navigation → Items*
 */
export interface NavigationSliceDefaultItem {
  /**
   * Link field in *Navigation → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for Navigation Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavigationSliceDefaultPrimary>,
  Simplify<NavigationSliceDefaultItem>
>;

/**
 * Slice variation for *Navigation*
 */
type NavigationSliceVariation = NavigationSliceDefault;

/**
 * Navigation Shared Slice
 *
 * - **API ID**: `navigation`
 * - **Description**: Navigation
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationSlice = prismic.SharedSlice<
  "navigation",
  NavigationSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      AboutSlice,
      AboutSliceDefaultPrimary,
      AboutSliceDefaultItem,
      AboutSliceVariation,
      AboutSliceDefault,
      FooterSlice,
      FooterSliceDefaultPrimary,
      FooterSliceDefaultItem,
      FooterSliceVariation,
      FooterSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceContentPrimary,
      HeroSliceMottoPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceContent,
      HeroSliceMotto,
      HistorySlice,
      HistorySliceDefaultPrimary,
      HistorySliceDefaultItem,
      HistorySliceVariation,
      HistorySliceDefault,
      NavigationSlice,
      NavigationSliceDefaultPrimary,
      NavigationSliceDefaultItem,
      NavigationSliceVariation,
      NavigationSliceDefault,
    };
  }
}
