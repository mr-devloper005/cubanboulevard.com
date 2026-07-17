import Link from 'next/link'
import { ArrowRight, BookOpen, CheckCircle2, FileText, Search, Sparkles } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type Props = { primaryTask: TaskKey; primaryRoute: string; posts: SitePost[]; timeSections: HomeTimeSection[] }
const wrap = 'mx-auto w-full max-w-[var(--editable-container)] px-4 sm:px-6 lg:px-8'

function articlePosts({ posts }: Props) {
  return Array.from(new Map(posts.map((post) => [post.slug || post.id || post.title, post])).values())
}

function articleHref(post: SitePost) {
  return postHref('article', post, '/article')
}

function ArticleCard({ post, wide = false }: { post: SitePost; wide?: boolean }) {
  return (
    <Link href={articleHref(post)} className={`group overflow-hidden rounded-md bg-white shadow-[0_2px_8px_rgba(31,36,48,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-xl ${wide ? 'grid sm:grid-cols-[44%_1fr]' : ''}`}>
      <div className={`overflow-hidden bg-slate-200 ${wide ? 'aspect-[4/3] sm:aspect-auto' : 'aspect-[16/10]'}`}>
        <img src={getEditablePostImage(post)} alt={post.title || 'Cuban Boulevard article'} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <span className="text-[11px] font-bold uppercase tracking-[.16em] text-[var(--slot4-accent)]">{getEditableCategory(post) || 'Article'}</span>
        <h3 className="mt-2 line-clamp-2 text-lg font-extrabold leading-snug">{post.title || 'Read on Cuban Boulevard'}</h3>
        {wide ? <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--slot4-muted-text)]">{getEditableExcerpt(post, 150) || 'Discover a thoughtful article and a fresh perspective from Cuban Boulevard.'}</p> : null}
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold">Read article <ArrowRight className="h-4 w-4" /></span>
      </div>
    </Link>
  )
}

export function EditableHomeHero(props: Props) {
  const images = articlePosts(props).slice(0, 3)
  return (
    <section className="overflow-hidden bg-[#f4f6fb]">
      <div className={`${wrap} grid min-h-[570px] items-center gap-12 py-16 lg:grid-cols-[.95fr_1.05fr]`}>
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.2em] text-[#4f8f33]"><Sparkles className="h-4 w-4" /> The Cuban Boulevard journal</span>
          <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.04] tracking-[-.045em] sm:text-5xl lg:text-6xl">Stories that bring Cuban culture and everyday life closer.</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--slot4-muted-text)]">Explore thoughtful articles about culture, food, travel, creativity, community, and the ideas connecting Cubans around the world.</p>
          <form action="/search" className="mt-8 flex max-w-2xl rounded-lg bg-white p-2 shadow-[0_12px_35px_rgba(35,42,60,.14)]">
            <Search className="ml-3 h-5 w-5 self-center text-[#5da43d]" />
            <input name="q" aria-label="Search articles" placeholder="Search articles by topic or title" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none" />
            <button className="rounded-md bg-[#62ad3f] px-6 font-bold text-white hover:bg-[#4f9233]">Search</button>
          </form>
          <Link href="/article" className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#d8dde7] bg-white px-5 py-2.5 text-sm font-bold hover:border-[#62ad3f]">Browse all articles <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="relative hidden h-[410px] lg:block">
          {images.map((post, index) => <Link key={post.id || post.slug || index} href={articleHref(post)} className={`boulevard-float absolute overflow-hidden rounded-md border-[8px] border-white shadow-2xl ${index === 0 ? 'left-0 top-16 z-20 h-64 w-[72%]' : index === 1 ? 'right-0 top-0 h-52 w-[58%]' : 'bottom-0 right-8 h-48 w-[52%]'}`}><img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover" /></Link>)}
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail(props: Props) {
  const articles = articlePosts(props).slice(0, 10)
  if (!articles.length) return null
  return <section className="overflow-hidden bg-[#202121] py-12 text-white"><div className={`${wrap} mb-7 flex items-end justify-between`}><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#87ec6c]">Latest articles</p><h2 className="mt-2 text-3xl font-extrabold">Fresh perspectives from Cuban Boulevard</h2></div><Link href="/article" className="hidden items-center gap-2 text-sm font-bold sm:flex">Browse all articles <ArrowRight className="h-4 w-4" /></Link></div><div className="boulevard-marquee flex gap-5 px-5">{[...articles, ...articles].map((post, index) => <Link key={`${post.id || post.slug}-${index}`} href={articleHref(post)} className="group relative block h-64 w-80 shrink-0 overflow-hidden rounded-md"><img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10" /><div className="absolute inset-x-0 bottom-0 p-5"><span className="text-[10px] font-bold uppercase tracking-widest text-[#90f276]">{getEditableCategory(post) || 'Article'}</span><h3 className="mt-2 line-clamp-2 text-lg font-bold">{post.title}</h3></div></Link>)}</div></section>
}

export function EditableMagazineSplit(props: Props) {
  const articles = articlePosts(props).slice(0, 4)
  if (!articles.length) return null
  return <section className="py-20"><div className={`${wrap} grid gap-8 lg:grid-cols-[.72fr_1.28fr]`}><div className="rounded-md bg-white p-8 sm:p-12 lg:flex lg:flex-col lg:justify-center"><span className="text-xs font-bold uppercase tracking-[.2em] text-[#5b9d3d]">Editor’s selection</span><h2 className="mt-4 text-3xl font-extrabold">Articles worth making time for</h2><p className="mt-4 leading-7 text-[var(--slot4-muted-text)]">Handpicked guides, cultural essays, reporting, and personal perspectives selected for curious readers.</p><Link href="/article" className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-[#62ad3f] px-5 py-3 text-sm font-bold text-white">View all articles <ArrowRight className="h-4 w-4" /></Link></div><div className="grid gap-5 sm:grid-cols-2">{articles.map((post) => <ArticleCard key={post.id || post.slug} post={post} />)}</div></div></section>
}

export function EditableTimeCollections(props: Props) {
  const articles = articlePosts(props).slice(4, 8)
  if (!articles.length) return null
  return <section className="bg-white py-20"><div className={wrap}><div className="grid items-end gap-5 sm:grid-cols-[1fr_auto]"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#5b9d3d]">Keep reading</p><h2 className="mt-2 text-3xl font-extrabold">More ideas, voices, and Cuban stories</h2></div><Link href="/article" className="font-bold text-[#4c8d31]">See every article →</Link></div><div className="mt-9 grid gap-6 lg:grid-cols-2">{articles.map((post) => <ArticleCard wide key={post.id || post.slug} post={post} />)}</div><div className="mt-14 grid gap-4 sm:grid-cols-3"><div className="rounded-lg bg-[#f3f5fa] p-6"><FileText className="h-7 w-7 text-[#62ad3f]" /><h3 className="mt-4 font-extrabold">Practical guides</h3><p className="mt-2 text-sm leading-6 text-slate-600">Clear articles that turn useful knowledge into everyday action.</p></div><div className="rounded-lg bg-[#f3f5fa] p-6"><BookOpen className="h-7 w-7 text-[#62ad3f]" /><h3 className="mt-4 font-extrabold">Culture and perspective</h3><p className="mt-2 text-sm leading-6 text-slate-600">Essays exploring heritage, creativity, food, and modern Cuban life.</p></div><div className="rounded-lg bg-[#f3f5fa] p-6"><CheckCircle2 className="h-7 w-7 text-[#62ad3f]" /><h3 className="mt-4 font-extrabold">Easy to read</h3><p className="mt-2 text-sm leading-6 text-slate-600">Focused summaries and thoughtful long-form reading without distractions.</p></div></div></div></section>
}

export function EditableHomeCta() {
  return <section className="bg-[#fff6ef] py-20"><div className={`${wrap} grid items-center gap-8 lg:grid-cols-[1fr_auto]`}><div><span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-[#5a9a3d]"><BookOpen className="h-4 w-4" /> Share your perspective</span><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Have an article worth sharing?</h2><p className="mt-3 max-w-2xl text-lg text-slate-600">Contribute a useful guide, thoughtful essay, or original Cuban story for readers across the boulevard.</p></div><div className="flex gap-3"><Link href="/create" className="rounded-md bg-[#62ad3f] px-6 py-3 font-bold text-white">Create an article</Link><Link href="/contact" className="rounded-md border border-slate-300 bg-white px-6 py-3 font-bold">Contact</Link></div></div></section>
}
