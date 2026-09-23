"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { VirtueLogo } from "@/components/common/VirtueLogo";

const NAV_ITEMS = [
  {
    label: "About Us",
    href: "/about",
    subItems: [
      { label: "Our Story (Vision & Mission)", href: "/about/our-story" },
      { label: "Leadership & Board Directory", href: "/about/leadership" },
      { label: "Sustainability & CSR", href: "/about/sustainability" },
      { label: "Investor Relations & Financials", href: "/about/investors" },
      { label: "Innovation Ecosystem & Partnerships", href: "/about/innovation" },
      { label: "Alumni Network", href: "/about/alumni" },
    ]
  },
  {
    label: "Services",
    href: "/services",
    subItems: [
      { label: "Cloud Services (GCP Architecture & Hosting)", href: "/services/cloud-services" },
      { label: "Cloud Migration", href: "/services/cloud-migration" },
      { label: "AI & Generative AI (Gemini Models)", href: "/services/ai" },
      { label: "Data Analytics & MLOps", href: "/services/data" },
      { label: "Digital Product Engineering", href: "/services/digital-product" },
      { label: "Enterprise Cybersecurity", href: "/services/cybersecurity" },
      { label: "Application Modernization", href: "/services/app-modernization" },
      { label: "Enterprise Automation (RPA & Celonis)", href: "/services/automation" },
    ]
  },
  {
    label: "Industries",
    href: "/industries",
    subItems: [
      { label: "Banking & Finance", href: "/industries/banking-finance" },
      { label: "Healthcare & Life Sciences", href: "/industries/healthcare" },
      { label: "Retail & Consumer Goods", href: "/industries/retail" },
      { label: "Manufacturing & Logistics", href: "/industries/manufacturing" },
      { label: "Public Sector", href: "/industries/public-sector" },
      { label: "High Tech / Software Products", href: "/industries/high-tech" },
    ]
  },
  {
    label: "Insights",
    href: "/insights",
    subItems: [
      { label: "Tech Blog & Engineering Articles", href: "/insights/blog" },
      { label: "Case Studies Catalog", href: "/insights/case-studies" },
      { label: "Whitepapers & Research", href: "/insights/research" },
      { label: "Analyst Recognitions (Gartner/Forrester)", href: "/insights/analyst-recognitions" },
    ]
  },
  {
    label: "Careers",
    href: "/careers",
    subItems: [
      { label: "Why Work With Us (Culture)", href: "/careers/why-work-with-us" },
      { label: "Students & Graduates", href: "/careers/students" },
      { label: "Diversity & Inclusion", href: "/careers/diversity" },
      { label: "Job Search Portal", href: "/careers/jobs" },
      { label: "Hiring Process & Interview Guide", href: "/careers/hiring-process" },
      { label: "Talent Community Network", href: "/careers/talent" },
    ]
  },
  {
    label: "Trust & Security",
    href: "/trust-security",
    subItems: [
      { label: "Data Privacy Hub (GDPR, etc.)", href: "/trust-security/data-privacy" },
      { label: "Compliance Overview", href: "/trust-security/compliance" },
    ]
  },
  {
    label: "Contact",
    href: "/contact",
    subItems: [
      { label: "Sales Inquiries & Contact Form", href: "/contact/sales-inquiries" },
      { label: "Global Office Directory", href: "/contact/global-offices" },
      { label: "Legal & Privacy Policies", href: "/contact/legal" },
    ]
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [lastActiveMenu, setLastActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeMenu) {
      setLastActiveMenu(activeMenu);
    }
  }, [activeMenu]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 h-[68px] w-full">
      <div 
        ref={menuRef}
        className="absolute left-0 right-0 top-0 w-full border-b border-black/10 bg-(--color-bg)/95 backdrop-blur-md shadow-md overflow-hidden transition-all duration-500 ease-in-out"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="flex items-center justify-between px-6 py-2.5 md:py-3 max-w-7xl mx-auto w-full">
          {/* Left: Brand Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center transition opacity-90 hover:opacity-100"
              aria-label="Virtue Software Solutions"
              onClick={() => setActiveMenu(null)}
            >
              <VirtueLogo height={44} priority />
            </Link>
          </div>

            {/* Right: Icons & Navigation */}
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Desktop Navigation Links */}
              <nav className="hidden md:flex items-center gap-5 lg:gap-7">
                {NAV_ITEMS.map((item) => (
                  <div
                    key={item.href}
                    className="relative group"
                    onMouseEnter={() => setActiveMenu(item.label)}
                  >
                    <Link
                      href={item.href}
                      className={`block text-[15px] font-medium transition whitespace-nowrap py-4 ${
                        activeMenu === item.label ? 'text-zinc-900' : 'text-zinc-600 hover:text-zinc-900'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <button aria-label="Search" className="p-2 text-zinc-700 hover:text-zinc-900 focus:outline-none">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>
                <button aria-label="Language" className="p-2 text-zinc-700 hover:text-zinc-900 focus:outline-none hidden md:block">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </button>
                
                {/* Mobile Menu Button */}
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 md:hidden focus:outline-none"
                  aria-controls="mobile-menu"
                  aria-expanded={mobileMenuOpen}
                  onClick={() => {
                    setMobileMenuOpen(!mobileMenuOpen);
                    setActiveMenu(null);
                  }}
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
        </div>

        {/* Mega Menu Dropdown Integrated (Seamless Waterfall Effect) */}
        <div 
          className={`grid transition-all duration-500 ease-in-out hidden md:grid ${
            activeMenu ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0 pb-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-8 min-h-[40vh] mt-2 pt-6 max-w-7xl mx-auto w-full">
              <div className="flex items-stretch h-full">
                {/* Left Side: Title & Description */}
                <div className="w-[45%] pr-10">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3">{lastActiveMenu}</h3>
                  <p className="text-base text-zinc-500 leading-relaxed">
                    Explore our comprehensive offerings and resources for {lastActiveMenu?.toLowerCase()}.
                  </p>
                </div>

                {/* Right Side: Links with Vertical Divider */}
                <div className="w-[55%] pl-10 border-l border-black/10 grid grid-cols-2 gap-x-12 gap-y-6">
                  {NAV_ITEMS.find((item) => item.label === lastActiveMenu)?.subItems.map((subItem, index) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="group flex items-start flex-col animate-fade-in-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                      onClick={() => setActiveMenu(null)}
                    >
                      <span className="text-base font-medium text-zinc-700 group-hover:text-black transition-colors">
                        {subItem.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <nav id="mobile-menu" className="mt-4 rounded-2xl border border-black/5 bg-(--color-bg) px-6 py-4 md:hidden shadow-sm">
          <div className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-semibold text-zinc-900 mb-2"
                >
                  {item.label}
                </Link>
                <div className="flex flex-col gap-2 pl-4 border-l-2 border-zinc-100">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-medium text-zinc-500 hover:text-zinc-900"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
