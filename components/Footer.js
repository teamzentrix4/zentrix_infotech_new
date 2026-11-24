'use client';

import Link from 'next/link';
import { servicesNavConfig } from './NavServicesDropdown';

// The footer uses its own mobile light/dark surface; lg: keeps the desktop styling unchanged.
const linkClass = 'group inline-flex w-fit items-center gap-2 font-bodyfont text-sm leading-6 text-[#525252] dark:text-[#adadad] lg:text-textDescription transition-all duration-300 hover:translate-x-1 hover:text-[#8356fb] dark:hover:text-[#bca8ff]';
const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/zentrixinfotech', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/zentrixinfotech/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61572870601261', icon: 'facebook' },
];

function ContactIcon({ type }) {
  if (type === 'map') return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-5 w-5" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.7" /></svg>;
  if (type === 'email') return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-5 w-5" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-5 w-5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.99.37 1.96.72 2.9a2 2 0 0 1-.45 2.11L8.11 10a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.94.35 1.91.59 2.9.72A2 2 0 0 1 22 16.92Z" /></svg>;
}

function SocialIcon({ type }) {
  const common = { viewBox: '0 0 512 512', fill: 'currentColor', className: 'h-4 w-4', 'aria-hidden': true };
  if (type === 'linkedin') return <svg {...common} viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3C448 46.5 433.6 32 416 32zM135.4 416H69V202.2h66.5V416zM102.2 173c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.2-17.2 38.5-38.5 38.5zM384.3 416h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>;
  if (type === 'instagram') return <svg {...common} viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.7 51.1-114.7 114.7s51.1 114.7 114.7 114.7 114.7-51.1 114.7-114.7S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8s-26.8-12-26.8-26.8 12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1S3.3 127.5 1.5 163.4c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-102.7-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 102.7 9 132.1s2.7 102.7-9 132.1z" /></svg>;
  return <svg {...common}><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 123.8 90.7 226.4 209.3 245V327.7h-63V256h63v-54.6c0-62.2 37-96.5 93.7-96.5 27.1 0 55.5 4.8 55.5 4.8v61h-31.3c-30.8 0-40.4 19.1-40.4 38.7V256h68.8l-11 71.7h-57.8V501C421.3 482.4 512 379.8 512 256z" /></svg>;
}

function ContactLink({ href, children, type = 'phone' }) {
  const style = type === 'phone' ? 'bg-emerald-500/10 text-emerald-500' : type === 'email' ? 'bg-[#8356fb]/10 text-[#8356fb]' : 'bg-[#8356fb]/10 text-[#8356fb]';
  return <a href={href} className="group flex items-center gap-3 transition-colors duration-300 hover:text-textHeading"><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ring-1 ring-inset ring-white/5 transition duration-300 group-hover:scale-105 ${style}`}><ContactIcon type={type} /></span><span>{children}</span></a>;
}
export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-border bg-white text-[#212121] dark:bg-[#0b0b0d] dark:text-white lg:bg-white lg:text-textHeading dark:lg:bg-[#0b0b0d] dark:lg:text-textHeading">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8356fb]/80 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#8356fb]/15 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="relative mx-auto w-11/12 max-w-[1440px] py-12 sm:w-10/12 lg:py-16">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b1530] via-[#121218] to-[#0d2427] px-6 py-8 text-white shadow-2xl shadow-black/20 [&>div>p:last-child]:text-white sm:px-9 lg:flex lg:items-center lg:justify-between lg:px-12 lg:py-9 lg:text-white lg:[&>div>p:last-child]:text-white">
          <div aria-hidden="true" className="absolute -right-12 -top-20 h-56 w-56 rounded-full bg-[#8356fb]/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="font-bodyfont text-xs font-bold uppercase tracking-[0.24em] text-[#bca8ff]">Let’s create what’s next</p>
            <h2 className="mt-2 font-headingfont text-3xl font-bold leading-none sm:text-4xl">Have an idea worth building?</h2>
            <p className="mt-2 font-bodyfont text-sm text-textDescription sm:text-base">Bring us your challenge. We’ll turn it into a clear, high-impact digital experience.</p>
          </div>
          <Link href="/contact" className="relative mt-6 inline-flex items-center justify-center gap-3 rounded-xl bg-[#8356fb] px-6 py-3 font-bodyfont text-sm font-bold text-white shadow-lg shadow-[#8356fb]/25 transition duration-300 hover:-translate-y-1 hover:bg-[#9674ff] lg:mt-0">Start a conversation <span aria-hidden="true" className="text-lg leading-none">↗</span></Link>
        </section>
        <div className="mt-14 grid grid-cols-2 gap-x-3 gap-y-12 border-b border-white/10 pb-6 [&>section:last-child]:col-span-2 lg:grid-cols-[1.35fr_1fr_.8fr_.8fr] lg:gap-10 lg:pb-12 lg:[&>section:last-child]:col-auto">
          <section className="col-span-2 max-w-md lg:col-auto">
            <Link href="/" aria-label="Zentrix Infotech home" className="inline-flex transition-transform hover:-translate-y-1">
              <img className="hidden h-9 w-auto dark:block" src="/images/zentrix-logo-white.png" width="232" height="56" alt="Zentrix Infotech" />
              <img className="h-9 w-auto dark:hidden" src="/images/zentrix-logo.png" width="232" height="56" alt="Zentrix Infotech" />
            </Link>
            <div className="mt-6 flex items-center gap-3"><span className="h-px w-8 bg-[#8356fb]" /><p className="font-bodyfont text-xs font-bold uppercase tracking-[0.2em] text-[#bca8ff]">Digital growth partner</p></div>
            <h2 className="mt-3 font-headingfont text-3xl font-bold tracking-tight sm:text-4xl">Zentrix Infotech</h2>
            <p className="mt-3 font-bodyfont text-base leading-7 text-[#525252] dark:text-[#adadad] lg:text-textDescription">Transforming ideas into useful digital products, memorable experiences, and sustainable growth.</p>
            <div className="mt-7 space-y-4 font-bodyfont text-sm leading-6 text-[#525252] dark:text-[#adadad] lg:text-textDescription">
              <ContactLink type="map" href="https://maps.google.com/?q=12/11+Buddhi+Vihar+Phase+2+Moradabad+Uttar+Pradesh+244001">12/11, Buddhi Vihar Phase 2, Moradabad, Uttar Pradesh 244001</ContactLink>
              <span className="hidden"><ContactLink href="tel:+917248800839">+91 72488 00839</ContactLink></span>
              <span className="hidden"><ContactLink href="tel:+916397036898">+91 63970 36898</ContactLink></span>
              <span className="hidden md:contents"><ContactLink type="email" href="mailto:info@zentrixinfotech.com">info@zentrixinfotech.com</ContactLink></span>
            </div>
          </section>
          <section>
            <p className="font-bodyfont text-xs font-bold uppercase tracking-[0.2em] text-[#bca8ff]">Explore</p>
            <h2 className="mt-2 font-headingfont text-xl font-bold">Services</h2>
            <nav aria-label="Services links" className="mt-5 flex flex-col gap-3">{servicesNavConfig.map((service) => <Link key={service.href} className={linkClass} href={service.href}><span className="h-1 w-1 rounded-full bg-[#8356fb] opacity-0 transition group-hover:opacity-100" />{service.name}</Link>)}</nav>
            <Link href="/services" className="mt-6 inline-flex items-center gap-2 font-bodyfont text-sm font-bold text-[#bca8ff] transition hover:gap-3">View all services <span aria-hidden="true">→</span></Link>
          </section>
          <section className="justify-self-end lg:justify-self-auto">
            <p className="font-bodyfont text-xs font-bold uppercase tracking-[0.2em] text-[#bca8ff]">Discover</p>
            <h2 className="mt-2 font-headingfont text-xl font-bold">Company</h2>
            <nav aria-label="Company links" className="mt-5 flex flex-col gap-3"><Link className={linkClass} href="/about">About us</Link><Link className={linkClass} href="/projects">Our work</Link><Link className={linkClass} href="/products">Products</Link><Link className={linkClass} href="/blog">Blog</Link><Link className={linkClass} href="/contact">Contact us</Link></nav>
          </section>
          <section>
            <p className="font-bodyfont text-xs font-bold uppercase tracking-[0.2em] text-[#bca8ff]">Stay connected</p>
            <h3 className="mt-2 font-headingfont text-xl font-bold">Follow our journey</h3>
            <p className="mt-3 max-w-[190px] font-bodyfont text-sm leading-6 text-textDescription">Insights, ideas, and work we’re proud to share.</p>
            <div className="mt-5 flex gap-3">{socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Follow Zentrix Infotech on ${social.label}`} className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-textDescription transition duration-300 hover:-translate-y-1 hover:border-[#8356fb]/50 hover:bg-[#8356fb]/10 hover:text-[#bca8ff]"><SocialIcon type={social.icon} /></a>)}</div>
          </section>
        </div>
        <div className="flex flex-col gap-3 pt-3 font-bodyfont text-xs text-textDescription sm:flex-row sm:items-center sm:justify-between lg:pt-6"><p>&copy; {new Date().getFullYear()} Zentrix Infotech LLP. All rights reserved.</p><p className="flex items-center gap-2">Built with <span className="text-[#bca8ff]">clarity, creativity, and care.</span></p></div>
      </div>
    </footer>
  );
}
