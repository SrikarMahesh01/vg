import Link from "next/link";
import { VirtueLogo } from "@/components/common/VirtueLogo";

const Linkedin = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const Twitter = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const Facebook = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const Instagram = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;

const FOOTER_LINKS = [
  {
    title: 'About Us',
    links: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Sustainability", href: "/about/sustainability" },
    ]
  },
  {
    title: 'Services',
    links: [
      { label: "Cloud Services", href: "/services/cloud-services" },
      { label: "AI & Generative AI", href: "/services/ai" },
      { label: "Data Analytics", href: "/services/data" },
      { label: "Cybersecurity", href: "/services/cybersecurity" },
    ]
  },
  {
    title: 'Industries',
    links: [
      { label: "Banking & Finance", href: "/industries/banking-finance" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Retail", href: "/industries/retail" },
    ]
  },
  {
    title: 'Careers',
    links: [
      { label: "Why Work With Us", href: "/careers/why-work-with-us" },
      { label: "Job Search", href: "/careers/jobs" },
      { label: "Students", href: "/careers/students" },
    ]
  },
  {
    title: 'Contact Us',
    links: [
      { label: "Sales Inquiries", href: "/contact/sales-inquiries" },
      { label: "Global Offices", href: "/contact/global-offices" },
      { label: "Legal & Privacy", href: "/contact/legal" },
    ]
  }
];

const SOCIAL_ICONS = [
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-(--color-bg-muted)">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-6">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="inline-block" aria-label="Virtue Software Solutions">
            <VirtueLogo height={32} />
          </Link>
        </div>
        {FOOTER_LINKS.map((col) => (
          <div key={col.title}>
            <h4 className="mb-3 text-sm font-semibold text-zinc-900">{col.title}</h4>
            <ul className="space-y-2 text-sm text-(--color-text-muted)">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-zinc-900">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 text-xs text-(--color-text-muted) md:flex-row border-t border-black/5">
        <span>© {new Date().getFullYear()} Virtue Software Solutions. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <div className="flex gap-4">
            {SOCIAL_ICONS.map((social, i) => {
              const Icon = social.icon;
              return (
                <Link key={i} href={social.href} className="text-zinc-500 hover:text-zinc-900 transition-colors">
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
