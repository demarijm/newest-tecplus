import { getRelatedPosts } from '@/app/server/posts.server'
import React from 'react'

export default async function MoreArticles({categoryList} : {categoryList: string[]}) {
    const relatedPosts = await getRelatedPosts(categoryList)
  return (
    <div>
        {relatedPosts.length > 0 && (
        //   <PageLinks
        //     className="mt-24 sm:mt-32 lg:mt-40"
        //     title="More articles"
        //     pages={relatedPosts}
        //   />
        <>
        {JSON.stringify(relatedPosts)}
        
        </>
        )}

    </div>
  )
}
