'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, Shield, Sparkles, Calendar, Globe, Users } from 'lucide-react';
import { services } from '@/data/services';
import { LOCATIONS, toSlug } from '@/data/locations';
import { FAQS_HOME } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { TrustBadges } from '@/components/TrustBadges';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';

const topCities = ['London', 'Manchester', 'Birmingham', 'Leeds', 'Liverpool', 'Bristol', 'Edinburgh', 'Glasgow', 'Cardiff'];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        <Hero
          title="Find a Top-Rated Invisalign Dentist Near You"
          subtitle="We compare Platinum and Diamond Invisalign providers in your area so you don't have to. Get up to 3 free quotes from the UK's highest-rated clear aligner specialists."
          image="https://images.unsplash.com/photo-1694675236489-d73651370688?q=80&w=880&auto=format&fit=crop"
          onOpenModal={() => setIsModalOpen(true)}
        />

        <TrustBadges />

        {/* Why Invisalign */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Why Thousands of UK Adults Choose Invisalign</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Clear aligners have overtaken traditional braces as the preferred orthodontic treatment for adults. Here is why patients across the UK are making the switch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <CheckCircle className="w-7 h-7 text-brand-500" />, title: 'Virtually Invisible Aligners', desc: 'Most people will not notice you are wearing them. Ideal for professionals, students, and anyone who wants straighter teeth without the look of metal braces.' },
                { icon: <Users className="w-7 h-7 text-brand-500" />, title: 'Eat and Drink What You Like', desc: 'Unlike fixed braces, Invisalign aligners are removable. No food restrictions, no awkward brushing around wires. Just take them out and eat normally.' },
                { icon: <Shield className="w-7 h-7 text-brand-500" />, title: 'More Comfortable Than Braces', desc: 'SmartTrack material applies gentle, constant pressure with no sharp metal edges. Patients consistently report less discomfort compared to traditional orthodontics.' },
                { icon: <Sparkles className="w-7 h-7 text-brand-500" />, title: 'See Your Results Before You Start', desc: 'ClinCheck 3D software maps your entire treatment digitally. You will see exactly how your teeth will move and what your final smile looks like before day one.' },
                { icon: <Calendar className="w-7 h-7 text-brand-500" />, title: 'Treatment From Just 3 Months', desc: 'Invisalign Express handles minor corrections in 3 to 6 months. Full treatment averages 12 to 18 months. Your provider will give you a precise timeline during your free scan.' },
                { icon: <Globe className="w-7 h-7 text-brand-500" />, title: '14 Million+ Patients Worldwide', desc: 'Backed by over 25 years of clinical research and continuous innovation. Invisalign is the most trusted clear aligner brand globally and the most prescribed in the UK.' },
              ].map((item, i) => (
                <div key={i} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col p-6">
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm flex-grow">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatments We Help You Find */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Invisalign Treatments We Help You Find</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tell us what you need and we will match you with a specialist who handles your exact case type every day. All consultations are free with no obligation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map(service => (
                <article key={service.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
                  <Link href={`/services/${service.slug}/`} className="block h-48 overflow-hidden relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <Link href={`/services/${service.slug}/`}>
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{service.title}</h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">{service.description}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                      <Link href={`/services/${service.slug}/`} className="text-brand-600 font-medium text-sm flex items-center hover:underline">
                        Find providers <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <button onClick={() => setIsModalOpen(true)} className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors">
                        Get 3 Quotes
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-gray-50 border-y border-gray-100">
          <div className="container-width">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">How Our Free Matching Service Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We are not a dental clinic. We are a free referral service that connects you with the right Invisalign specialist for your case. Here is how it works.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: 1, title: "Tell Us What You Need", desc: "Complete our 60-second form with your location, treatment type, and smile goals. No sign-up required and your details are never shared without consent." },
                { step: 2, title: "We Match You With Specialists", desc: "We filter our network of 350+ Platinum and Diamond providers to find the best fit for your case, based on expertise, location, availability, and patient reviews." },
                { step: 3, title: "Get Up to 3 Free Quotes", desc: "Receive direct contact from up to 3 vetted providers within 2 hours. Every consultation includes a free 3D iTero scan and treatment plan with no strings attached." },
              ].map(item => (
                <div key={item.step} className="text-center">
                  <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                    <span className="text-3xl font-display font-bold text-brand-600">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button onClick={() => setIsModalOpen(true)} className="btn-primary text-lg !px-8 !py-4">Get Your Free Quotes</button>
              <p className="text-sm text-gray-500 mt-3">100% free · No obligation · Takes 60 seconds</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-brand-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Patients We Have Helped Find Their Specialist</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Over 12,000 patients have used our free service to find a top-tier Invisalign provider near them.
              </p>
            </div>
            <Testimonials limit={3} />
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Compare Invisalign Dentists in Your City</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We cover over 350 cities and towns across England, Scotland, Wales, and Northern Ireland. Select your location to see available providers and pricing.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {topCities.map(city => (
                <Link
                  key={city}
                  href={`/location/${toSlug(city)}/`}
                  className="group block bg-gray-50 hover:bg-brand-50 border border-gray-100 hover:border-brand-200 rounded-xl p-5 transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5 text-brand-500" />
                    </div>
                    <span className="font-display font-bold text-gray-900 group-hover:text-brand-700">Invisalign {city}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/location/" className="text-brand-600 font-semibold hover:underline">View all 350+ locations →</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-gray-50">
          <div className="container-width max-w-3xl">
            <FAQ faqs={FAQS_HOME} />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="container-width text-center relative z-10">
            <h2 className="text-4xl font-display font-bold text-white mb-6">Get Matched With a Top Invisalign Dentist Today</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Stop searching and start smiling. Our free service compares the best Platinum Invisalign providers in your area so you get expert treatment at a fair price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setIsModalOpen(true)} className="btn-primary text-xl !px-10 !py-5">Compare Providers Free</button>
              <Link href="/services/" className="btn-secondary !bg-white/10 !border-white/30 !text-white hover:!bg-white/20 text-xl !px-10 !py-5">
                Browse Treatments
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              {['Always 100% free', 'Platinum and Diamond providers only', 'Free consultation included'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400" /> {item}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
