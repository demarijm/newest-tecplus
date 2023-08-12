import { sanity } from "@/lib/sanity"

export async function getPosts() {
    'use server'
    const posts = await sanity.fetch(`*[_type == "post" && ] {
      ...,
      'authorName': author->name,
      'mainImageUrl': mainImage.asset->url,
      'categoryList': categories[]->title,
    }`)
    console.log(posts)
    return posts
  }


export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug}</div>
  }