import { sanity } from "@/lib/sanity"
import logger from "@/lib/winston"
import { Post } from "@/types/post.types"

export async function getPosts(): Promise<Post[]> {
  'use server'
  const posts = await sanity.fetch(`*[_type == "post"] {
      ...,
      'authorName': author->name,
      'mainImageUrl': mainImage.asset->url,
      'categoryList': categories[]->title,
    }`)
  return posts
}


export async function getPost(slug: string): Promise<Post> {
  'use server'
  try {
    const posts = await sanity.fetch(`*[_type == "post" && slug.current == "${slug}"] {
        ...,
        'authorName': author->name,
        'mainImageUrl': mainImage.asset->url,
        'categoryList': categories[]->title,
      }`)
    return posts.at(0)
  }
  catch (e) {
    logger.error("Something went wrong in RSC getPost()")
  }
}
export async function getRelatedPosts(categoryList: string[]): Promise<Post[]> {
  'use server'
  try {
    
    
    const posts = await sanity.fetch(
      `*[_type == "post" && count((categories[]->title)[@ in ["${categoryList.join(',')}"]]) > 0] {
        ...,
        'authorName': author->name,
        'mainImageUrl': mainImage.asset->url,
        'categoryList': categories[]->title,
      }`)
      console.log(posts)
    return posts
  }
  catch (e) {
    logger.error("Something went wrong in RSC getPost()")
  }
}

