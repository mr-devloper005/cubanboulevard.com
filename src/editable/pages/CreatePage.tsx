'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, CheckCircle2, Lock, Send, Sparkles } from 'lucide-react'
import type { TaskKey } from '@/lib/site-config'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

type DraftPost = {
  id: string
  task: TaskKey
  title: string
  category: string
  summary: string
  url: string
  image: string
  body: string
  createdAt: string
}

const STORE_KEY = 'slot4:created-posts'

const fieldClass = 'rounded-md border border-[var(--editable-border)] bg-white px-4 py-3.5 text-sm font-semibold text-[var(--editable-page-text)] outline-none transition placeholder:text-slate-400 focus:border-[#62ad3f] focus:ring-2 focus:ring-[#62ad3f]/10'

const saveDraft = (draft: DraftPost) => {
  try {
    const existing = JSON.parse(window.localStorage.getItem(STORE_KEY) || '[]')
    const list = Array.isArray(existing) ? existing : []
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft, ...list].slice(0, 50)))
  } catch {
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft]))
  }
}

export default function CreatePage() {
  const { session } = useEditableLocalAuthSession()
  const task: TaskKey = 'article'
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [summary, setSummary] = useState('')
  const [url, setUrl] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [created, setCreated] = useState<DraftPost | null>(null)

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const draft: DraftPost = {
      id: `draft-${Date.now()}`,
      task,
      title: title.trim(),
      category: category.trim() || 'uncategorized',
      summary: summary.trim(),
      url: url.trim(),
      image: image.trim(),
      body: body.trim(),
      createdAt: new Date().toISOString(),
    }
    saveDraft(draft)
    setCreated(draft)
    setTitle('')
    setCategory('')
    setSummary('')
    setUrl('')
    setImage('')
    setBody('')
  }

  if (!session) {
    return (
      <EditableSiteShell>
        <main className="min-h-screen bg-[#eef1f8] px-4 py-16 text-[var(--editable-page-text)] sm:px-6 lg:px-8">
          <section className="mx-auto grid max-w-5xl gap-8 overflow-hidden rounded-md border border-[var(--editable-border)] bg-white p-7 shadow-[0_22px_60px_rgba(31,36,48,.10)] md:grid-cols-[0.8fr_1.2fr] md:p-10">
            <div className="flex h-full min-h-72 items-center justify-center rounded-md bg-[#202121] text-[#83ea69]">
              <Lock className="h-20 w-20 opacity-80" />
            </div>
            <div className="self-center">
              <p className="text-xs font-black uppercase tracking-[0.28em] opacity-55">{pagesContent.create.locked.badge}</p>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-5xl">{pagesContent.create.locked.title}</h1>
              <p className="mt-6 max-w-xl text-base font-semibold leading-8 opacity-70">{pagesContent.create.locked.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/login" className="inline-flex items-center gap-2 rounded-md bg-[#62ad3f] px-6 py-3 text-sm font-bold text-white">Login <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/signup" className="inline-flex items-center gap-2 rounded-md border border-[var(--editable-border)] bg-white px-6 py-3 text-sm font-bold">Register</Link>
              </div>
            </div>
          </section>
        </main>
      </EditableSiteShell>
    )
  }

  return (
    <EditableSiteShell>
      <main className="min-h-screen bg-[#eef1f8] text-[var(--editable-page-text)]">
        <section className="mx-auto max-w-[var(--editable-container)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#4f8f33]"><Sparkles className="h-4 w-4" /> Article publishing workspace</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-5xl">Share a story with Cuban Boulevard.</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">Write a useful guide, cultural essay, or original perspective for readers across the boulevard.</p>
          </div>
          <div className="grid overflow-hidden rounded-md border border-[var(--editable-border)] bg-white shadow-[0_22px_60px_rgba(31,36,48,.10)] lg:grid-cols-[0.7fr_1.3fr]">
            <aside className="bg-[#202121] p-7 text-white sm:p-10">
              <BookOpen className="h-10 w-10 text-[#83ea69]" />
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#83ea69]">Before publishing</p>
              <h2 className="mt-3 text-2xl font-extrabold">Make every article useful and memorable.</h2>
              <div className="mt-7 grid gap-5 text-sm leading-6 text-white/65">
                <p><strong className="block text-white">Start with a clear title</strong>Help readers understand the subject immediately.</p>
                <p><strong className="block text-white">Add a concise summary</strong>Give readers a helpful preview of the article.</p>
                <p><strong className="block text-white">Use a relevant image</strong>Choose imagery that supports the story.</p>
              </div>
            </aside>

            <form onSubmit={submit} className="bg-[#f4f6fb] p-6 sm:p-9">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#4f8f33]">Create article</p>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.035em]">Article details</h2>
                </div>
                <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em]">{session.name}</span>
              </div>

              <div className="mt-6 grid gap-4">
                <input className={fieldClass} value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Post title" required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className={fieldClass} value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Category" />
                  <input className={fieldClass} value={url} onChange={(event) => setUrl(event.target.value)} placeholder="Source URL (optional)" />
                </div>
                <input className={fieldClass} value={image} onChange={(event) => setImage(event.target.value)} placeholder="Featured image URL" />
                <textarea className={`${fieldClass} min-h-24`} value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="Short summary" required />
                <textarea className={`${fieldClass} min-h-56`} value={body} onChange={(event) => setBody(event.target.value)} placeholder="Write the full article" required />
              </div>

              {created ? (
                <div className="mt-5 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
                  <p className="flex items-center gap-2 text-sm font-black"><CheckCircle2 className="h-5 w-5" /> {pagesContent.create.successTitle}</p>
                  <p className="mt-1 text-sm font-semibold opacity-80">{created.title}</p>
                </div>
              ) : null}

              <button type="submit" className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#62ad3f] px-6 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#4f9233]">
                <Send className="h-4 w-4" /> {pagesContent.create.submitLabel}
              </button>
            </form>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
