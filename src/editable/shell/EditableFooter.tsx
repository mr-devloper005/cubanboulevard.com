'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerLinks = [
    ['Home', '/'],
    ['About', '/about'],
    ['Article', '/article'],
    ['Contact', '/contact'],
    ['Search', '/search'],
  ]
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="border-t border-[var(--editable-border)] bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="h-[2px] bg-[linear-gradient(90deg,transparent_0%,var(--slot4-accent)_50%,transparent_100%)]" />
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden border border-[var(--slot4-accent)]/40 bg-[var(--slot4-surface-bg)]">
              <img src="/favicon.png?v=20260413" alt={SITE_CONFIG.name} className="h-full w-full scale-[2] object-contain" />
            </span>
            <span className="editable-display text-xl font-semibold tracking-[0.01em]">{SITE_CONFIG.name}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-[var(--slot4-muted-text)]">{globalContent.footer?.description || SITE_CONFIG.description}</p>
        </div>

        <div>
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--slot4-accent)]">Explore</h3>
          <div className="mt-4 grid gap-2">
            {footerLinks.map(([label, href]) => (
              <Link key={href} href={href} className="inline-flex items-center gap-2 text-sm font-medium text-white/65 transition hover:text-[#83ea69]">
                {label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--slot4-accent)]">Site</h3>
          <div className="mt-4 grid gap-2">
            {[
              ...(session ? [['Create', '/create']] : [['Login', '/login'], ['Register', '/signup']]),
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-medium text-white/65 transition hover:text-[#83ea69]">{label}</Link>
            ))}
            {session ? <button type="button" onClick={logout} className="text-left text-sm font-medium text-white/65 transition hover:text-[#83ea69]">Logout</button> : null}
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--editable-border)] px-4 py-5 text-center text-xs font-medium tracking-[0.12em] text-[var(--slot4-muted-text)]">
        © {year} {SITE_CONFIG.name}. All rights reserved.
      </div>
    </footer>
  )
}
