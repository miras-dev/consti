"use client";

import Link from "next/link";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCmsImage } from "@/hooks/useCmsImage";

export function Footer3() {
  const { t } = useLanguage();
  const logoSrc = useCmsImage('shared.logo', 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg');

  return (
    <footer id="relume" className="bg-black text-white px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <Link href="/">
                <img
                  src={logoSrc}
                  alt="Logo image"
                  className="inline-block"
                />
              </Link>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="mb-1 text-sm font-semibold">{t.footer.address}</p>
              <p className="mb-5 text-sm md:mb-6">
                Jean-Monnet-Straße 4, 10557 Berlin
              </p>
              <p className="mb-1 text-sm font-semibold">{t.footer.contact}</p>
              <a
                href="tel:+491727488509"
                className="block text-sm underline decoration-white underline-offset-1"
              >
                +49 172 7488509
              </a>
              <a
                href="mailto:info@relume.io"
                className="block text-sm underline decoration-white underline-offset-1"
              >
                info@relume.io
              </a>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 hover:scale-110 transform">
                <BiLogoFacebookCircle className="size-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 hover:scale-110 transform">
                <BiLogoInstagram className="size-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 hover:scale-110 transform">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 hover:scale-110 transform">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 hover:scale-110 transform">
                <BiLogoYoutube className="size-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              <li className="py-2 text-sm font-semibold">
                <Link href="/about-constantin-nixdorff">{t.footer.aboutConstantin}</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link href="/services">{t.footer.services}</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link href="/services">{t.footer.focusAreas}</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link href="/about-constantin-nixdorff">{t.footer.qualifications}</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link href="/contact">{t.footer.contactLink}</Link>
              </li>
            </ul>
            <ul>
              <li className="py-2 text-sm font-semibold">
                <Link href="/">{t.footer.home}</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link href="/services">{t.footer.consulting}</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link href="/services">{t.footer.careerGuidance}</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link href="/services">{t.footer.financialPlanning}</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link href="/services">{t.footer.investmentStrategy}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-white/20" />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0">
            {t.footer.copyright}
          </p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="#">{t.footer.privacyPolicy}</a>
            </li>
            <li className="underline">
              <a href="#">{t.footer.termsOfService}</a>
            </li>
            <li className="underline">
              <a href="#">{t.footer.cookieSettings}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
