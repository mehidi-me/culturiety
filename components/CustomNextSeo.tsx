


import { Metadata } from "next";
import { CustomImageType, MetaAttributeType, MetaTagType, OpenGraphType, SeoType } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/utils";

export const resolveImage = (image?: CustomImageType) => {
  return image?.asset?.url ?? "";
};

export const getOpenGraph = (args: OpenGraphType) => {
  if (!args) return null;
  
  const { description, image, title, siteName, url } = args;
  const getImage = image ? resolveImage(image) : null;
  
  return {
    title,
    description,
    siteName,
    url,
    images: getImage ? [{ url: getImage }] : [],
  };
};

export const getMetaObjects = (tags: MetaTagType[], allowIndexing?: boolean) => {
  return tags
    .filter((tag) => {
      if (!allowIndexing) {
        return !tag.metaAttributes?.some(
          (i) => i?.attributeValueString?.includes("noindex") || i?.attributeValueString?.includes("nofollow")
        );
      }
      return true;
    })
    .map((tag) => getMetaAttribute(tag?.metaAttributes))
    .filter(Boolean);
};

export const getMetaAttribute = (attrs?: MetaAttributeType[]) => {
  if (!attrs) return null;

  const obj: Record<string, string> = {};
  attrs.forEach((i) => {
    obj[i?.attributeKey as string] = i.attributeType === "image"
      ? resolveImage(i?.attributeValueImage)
      : i.attributeValueString || "";
  });

  return obj;
};





export function generateMetadataC({ settings, slug }): Metadata {
    const {seo,favicon} = settings;
   
  const { additionalMetaTags, metaDescription, metaTitle, twitter, nofollowAttributes, seoKeywords, openGraph } = seo || {};

  const url = `${process.env.NEXT_PUBLIC_APP_URL ?? ""}${slug.startsWith("/") ? slug : `/${slug}`}`;
  const tags = additionalMetaTags ? getMetaObjects(additionalMetaTags) : []
  return {
    title: metaTitle || "",
    description: metaDescription || "",
    alternates: {
      canonical: url || "",
    },
    robots: nofollowAttributes ? "noindex, nofollow" : "index, follow",
    // twitter: twitter
    //   ? {
    //       card: twitter.cardType && "summary_large_image",
    //       site: twitter.site,
    //       creator: twitter.creator,
    //     }
    //   :   {
    //     card: "summary_large_image",
    //     site: process.env.NEXT_PUBLIC_APP_URL ?? "",
    //     creator: process.env.NEXT_PUBLIC_APP_URL ?? "",
    //   },
    openGraph: openGraph ? getOpenGraph(openGraph) : undefined,
    keywords: seoKeywords ? seoKeywords.join(", ") : undefined,
    icons: {
        icon: favicon && urlForImage(favicon)?.url(),
      },
  };
}

