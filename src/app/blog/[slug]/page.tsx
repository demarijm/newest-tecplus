import { getPost } from "@/app/server/posts.server"
import { ContactSection } from "@/components/ContactSection"
import { Container } from "@/components/Container"
import { FadeIn } from "@/components/FadeIn"
import { PortableText } from '@portabletext/react'
import { formatDate } from "@/lib/formatDate"
import ProseableText from "@/components/ProseText"
import MoreArticles from "./MoreArticles"

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await getPost(params.slug)
  return (
    <>

      <article className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              {article.title}
            </h1>
            <time
              dateTime={article._updatedAt}
              className="order-first text-sm text-neutral-950"
            >
              {formatDate(article._updatedAt)}
            </time>
            <p className="mt-6 text-sm font-semibold text-neutral-950">
              by {article.authorName}
            </p>
          </header>
        </FadeIn>
        <FadeIn>
          <div className="prose mx-auto mt-6 max-w-4xl sm:px-6 lg:px-8">
            <PortableText
              value={article.body} />
          </div>
        </FadeIn>
      </article>
      <MoreArticles categoryList={article.categoryList} />
      <ContactSection />
    </>
  )
}