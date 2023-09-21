import { getRelatedPosts } from '@/app/server/posts.server'
import { PageLinks } from '@/components/PageLinks'
import React from 'react'

export default async function MoreArticles({categoryList} : {categoryList: string[]}) {
    const relatedPosts = await getRelatedPosts(categoryList)
  return (
    <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        {relatedPosts.length > 0 && (
          <PageLinks
            className="mt-24 sm:mt-32 lg:mt-40"
            title="More articles"
            pages={relatedPosts}
            
            
          />
        )}
    </div>
  )
}
