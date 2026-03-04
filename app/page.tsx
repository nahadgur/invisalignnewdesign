'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, Shield, Sparkles, Calendar, Globe, Users, CreditCard } from 'lucide-react';
import { services } from '@/data/services';
import { toSlug } from '@/data/locations';
import { pricingTiers, financeInfo, treatmentIncludes } from '@/data/pricing';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { TrustBadges } from '@/components/TrustBadges';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';

const topCities = ['London', 'Manchester', 'Birmingham', 'Leeds', 'Liverpool', 'Bristol', 'Edinburgh', 'Glasgow', 'Cardiff', 'Sheffield', 'Nottingham', 'Newcastle upon Tyne'];

const homepageFaqs = [
  { question: "How much does Invisalign cost in the UK?", answer: "Invisalign prices in the UK typically range from £1,500 for minor cosmetic cases up to £5,500 for complex full treatment. The exact cost depends on which Invisalign product your provider recommends (Express, Lite, or Comprehensive), the severity of your misalignment, and the experience tier of your dentist. Platinum and Diamond providers may charge slightly more than general dentists, but their higher case volume translates to better outcomes and fewer refinement rounds. Most providers in our network offer 0% interest finance starting from £50 per month spread over 12 to 60 months." },
  { question: "How long does Invisalign treatment take?", answer: "Treatment duration depends on the complexity of your case. Invisalign Express handles minor cosmetic corrections such as slight crowding or small gaps in 3 to 6 months using up to 7 aligner sets. Invisalign Lite is designed for moderate cases and typically takes 6 to 12 months with up to 14 aligner sets. Full Invisalign Comprehensive treats complex cases including bite correction and severe crowding in 12 to 18 months with unlimited aligner sets and refinements. Your provider will map out a precise digital timeline using ClinCheck 3D software during your free initial consultation so you know exactly what to expect before you commit." },
  { question: "Is Invisalign as effective as traditional braces?", answer: "For the vast majority of adult orthodontic cases, Invisalign delivers results that are equal to or better than traditional braces. Clinical studies show equivalent outcomes for mild to moderate crowding, spacing, and bite issues. Platinum providers also have access to advanced Invisalign features like Precision Wings for bite correction and SmartForce attachments for complex tooth movements that were previously only achievable with fixed braces. The cases where braces may still be preferable are severe skeletal jaw discrepancies requiring surgical intervention, which account for a small percentage of adult cases." },
  { question: "Does Invisalign hurt?", answer: "Most patients experience mild pressure and tightness when switching to a new set of aligners, typically lasting 2 to 3 days. This is a normal sign that the aligners are actively moving your teeth. The discomfort is consistently rated as significantly less than traditional braces tightening. Invisalign uses patented SmartTrack material that is engineered to apply gentle, constant force rather than the sharp intermittent pressure of wire adjustments. Over-the-counter pain relief is rarely needed but can be used if the pressure feels uncomfortable during the first day of a new tray." },
  { question: "What is a Platinum Invisalign provider and why does it matter?", answer: "Invisalign manufacturer Align Technology ranks dentists and orthodontists into tiers based on how many Invisalign cases they complete each year. Bronze providers complete 10 or more cases, Gold providers complete 20 or more, Platinum providers complete 80 or more, and Diamond providers complete 150 or more per year. Higher-tier providers have substantially more clinical experience, access to advanced Invisalign features, better refinement rates, and statistically superior patient outcomes. Our network exclusively features Platinum and Diamond providers because the difference in quality between a provider who does 10 cases a year and one who does 150 is enormous." },
  { question: "How does your free matching service work?", answer: "We are not a dental clinic. We are a free, independent referral service. You fill in a 60-second form with your location, treatment needs, and contact details. We then search our network of over 350 Platinum and Diamond Invisalign providers across the UK and shortlist the best matches for your specific case. Up to 3 matched providers will contact you directly within 2 hours to arrange a free consultation. Each consultation includes a complimentary iTero 3D scan and personalised treatment plan. There is no cost to use our service and no obligation to proceed with any provider." },
  { question: "Can I eat and drink normally with Invisalign?", answer: "Yes. You remove your aligners every time you eat or drink anything other than water. This means there are zero dietary restrictions, unlike traditional braces where hard foods, sticky sweets, popcorn, and chewy items are off limits for the entire treatment. The recommendation is to wear your aligners for 20 to 22 hours per day, which gives you around 2 to 4 hours for meals and snacking. You should brush your teeth before reinserting your aligners to prevent staining and maintain hygiene." },
  { question: "Can I see what my teeth will look like before I start treatment?", answer: "Yes. Every Invisalign consultation with our providers includes a 3D iTero digital scan of your mouth. Your dentist then uses ClinCheck software to create a complete digital treatment plan showing exactly how each tooth will move, week by week, from your current position to your final result. You can watch an animated preview of your entire smile transformation before you agree to anything. This is one of the biggest advantages of Invisalign over braces, where the final result is largely predicted by your orthodontist rather than visualised in advance." },
  { question: "Is Invisalign available on the NHS?", answer: "Invisalign is not typically available on the NHS. NHS orthodontic treatment is generally limited to children and young people under 18 with severe orthodontic issues, and even then the treatment is usually fixed metal braces rather than clear aligners. Adult Invisalign treatment is almost always private. However, the cost is often more accessible than people expect, especially with 0% finance options. Through our network, full treatment starts from around £3,500 with monthly payments from as low as £50." },
  { question: "How often do I need to visit the dentist during Invisalign treatment?", answer: "Most Invisalign patients visit their provider every 6 to 8 weeks for progress checks. These appointments are typically short, around 15 to 20 minutes, because there are no wires to adjust. Your provider will check that your teeth are tracking correctly, provide your next sets of aligners, and make any adjustments to attachments if needed. This is significantly fewer visits than traditional braces, which usually require monthly appointments for wire tightening." },
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        <Hero
          title="Find a Top-Rated Invisalign Dentist Near You"
          subtitle="Compare Platinum and Diamond Invisalign providers in your area. Get up to 3 free quotes from the UK's highest-rated clear aligner specialists. Our service is 100% free."
          image="https://images.unsplash.com/photo-1694675236489-d73651370688?q=80&w=880&auto=format&fit=crop"
          onOpenModal={() => setIsModalOpen(true)}
        />

        <TrustBadges />

        {/* What Is Invisalign */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">What Is Invisalign and How Does It Work?</h2>
                <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                  <p>
                    Invisalign is a clear aligner system that straightens teeth without metal braces. Instead of brackets and wires, you wear a series of custom-made, nearly invisible plastic trays that gradually shift your teeth into the correct position. Each set of aligners is worn for 1 to 2 weeks before moving to the next set in the sequence.
                  </p>
                  <p>
                    The treatment process starts with a 3D digital scan of your mouth using an iTero scanner. Your dentist then uses Invisalign's proprietary ClinCheck software to map out every single tooth movement from your current position to your final result. You can watch a digital animation of your projected outcome before you agree to anything or pay a penny. This level of precision planning is what separates Invisalign from cheaper direct-to-consumer alternatives that skip the in-person clinical assessment.
                  </p>
                  <p>
                    Invisalign is manufactured by Align Technology, a US medical device company that has treated over 14 million patients globally since launching in 1997. The system holds over 900 patents covering its SmartTrack aligner material, SmartForce attachment designs, and Precision Wings for bite correction. It is the most clinically researched clear aligner system in the world and the most widely prescribed by UK orthodontists.
                  </p>
                  <p>
                    However, not all dentists are equally experienced with Invisalign. Align Technology ranks providers into tiers based on how many cases they complete each year. A provider who does 10 cases a year will not deliver the same results as one who does 150. <strong>Our network only includes Platinum providers (80+ cases per year) and Diamond providers (150+ cases per year)</strong> because the clinical difference between tiers is significant and well documented.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display font-bold text-gray-900 mb-4">Why Provider Tier Matters</h3>
                  <div className="space-y-4">
                    {[
                      { tier: 'Diamond Provider', cases: '150+ cases/year', desc: 'The highest tier. These providers treat multiple Invisalign patients every single day and have access to every advanced feature Invisalign offers including Precision Wings, mandibular advancement, and multi-arch treatment planning.', listed: true },
                      { tier: 'Platinum Provider', cases: '80+ cases/year', desc: 'Highly experienced providers with strong clinical outcomes across all case types. They routinely handle complex cases including deep bites, open bites, severe crowding, and full arch treatment.', listed: true },
                      { tier: 'Gold Provider', cases: '20+ cases/year', desc: 'Competent with straightforward cases but limited experience with complex movements. Not included in our network due to lower case volume and less predictable outcomes on moderate to severe cases.', listed: false },
                    ].map((item, i) => (
                      <div key={i} className={`p-4 rounded-xl border ${item.listed ? 'bg-brand-50 border-brand-100' : 'bg-gray-100 border-gray-200 opacity-60'}`}>
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-bold text-gray-900">{item.tier}</span>
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.listed ? 'bg-brand-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                            {item.listed ? 'In Our Network' : 'Not Listed'}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 mb-1">{item.cases}</div>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Invisalign */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="max-w-3xl mb-14">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Why Thousands of UK Adults Are Choosing Invisalign Over Braces</h2>
              <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                <p>
                  Over the past decade, clear aligners have overtaken traditional metal braces as the most popular orthodontic treatment for adults in the UK. According to the British Orthodontic Society, demand for adult orthodontics has increased by over 80% since 2010, and Invisalign accounts for the majority of that growth. The reasons go beyond aesthetics. Adults are choosing Invisalign because it fits around their existing lifestyle in a way that fixed braces simply cannot.
                </p>
                <p>
                  You can remove the aligners to eat, so there are no food restrictions. You brush and floss normally, so your oral hygiene does not suffer during treatment. You change aligners at home, so you need fewer dental appointments. And because the treatment is planned digitally from the start, you know exactly what your result will look like and how long it will take before you commit. Below are the six most common reasons our patients cite when they choose Invisalign.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <CheckCircle className="w-7 h-7 text-brand-500" />, title: 'Virtually Invisible Aligners', desc: 'Invisalign trays are made from patented SmartTrack material that is clear and nearly undetectable. Most people will not notice you are wearing them during conversation, meetings, or photographs. This makes them the go-to choice for working professionals, teachers, and anyone in a client-facing role.' },
                { icon: <Users className="w-7 h-7 text-brand-500" />, title: 'No Food Restrictions At All', desc: 'Because you remove the aligners to eat, there are zero dietary restrictions throughout your entire treatment. With fixed braces you cannot eat hard foods, sticky sweets, popcorn, corn on the cob, or anything chewy for 12 to 24 months. With Invisalign you eat whatever you want and simply brush before reinserting.' },
                { icon: <Shield className="w-7 h-7 text-brand-500" />, title: 'Significantly More Comfortable', desc: 'No metal brackets cutting the inside of your cheeks, no wires poking your gums, no emergency appointments for broken brackets. SmartTrack material applies gentle, calibrated pressure that patients consistently rate as far more comfortable than the monthly wire-tightening process with braces.' },
                { icon: <Sparkles className="w-7 h-7 text-brand-500" />, title: 'Preview Your Final Smile First', desc: 'Before committing to treatment or paying anything, your provider uses ClinCheck 3D software to show you a digital simulation of your entire treatment. You see exactly how each tooth will move, week by week, and what your final smile looks like. No other orthodontic system offers this level of certainty before you start.' },
                { icon: <Calendar className="w-7 h-7 text-brand-500" />, title: 'Treatment From Just 3 Months', desc: 'Invisalign Express handles minor cosmetic corrections such as slight crowding or small gaps in 3 to 6 months. Invisalign Lite treats moderate cases in 6 to 12 months. Full Comprehensive treatment averages 12 to 18 months for complex cases. Many adults are surprised at how quickly their teeth begin to shift visibly.' },
                { icon: <Globe className="w-7 h-7 text-brand-500" />, title: 'Better Oral Hygiene During Treatment', desc: 'With fixed braces, food gets trapped around brackets and thorough cleaning is difficult, which is why brace wearers often develop white spots or cavities during treatment. With Invisalign you remove the trays to brush and floss normally, significantly reducing the risk of tooth decay and gum disease throughout your treatment.' },
              ].map((item, i) => (
                <div key={i} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col p-6">
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm flex-grow">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-3xl mb-14">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">How Much Does Invisalign Cost in the UK in 2025?</h2>
              <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                <p>
                  Invisalign pricing in the UK depends on three factors: the complexity of your case, which Invisalign product your dentist recommends, and your provider's experience tier. Simple cosmetic adjustments to front teeth may only require Invisalign Express with up to 7 aligner sets, while correcting a deep overbite with severe crowding requires Comprehensive treatment with unlimited aligners and refinement rounds.
                </p>
                <p>
                  Below are the current typical costs from Platinum and Diamond providers across the UK. These figures are based on standard private pricing and include the full treatment package. Costs in London and the South East tend to sit at the higher end of each range, while providers in the Midlands, North, Scotland, and Wales are typically at the lower to mid range.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-brand-50 text-left">
                    <th className="px-5 py-3 font-bold text-gray-900">Treatment Type</th>
                    <th className="px-5 py-3 font-bold text-gray-900">Price Range (GBP)</th>
                    <th className="px-5 py-3 font-bold text-gray-900 hidden md:table-cell">Typical Duration</th>
                    <th className="px-5 py-3 font-bold text-gray-900 hidden lg:table-cell">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTiers.map((tier, i) => (
                    <tr key={tier.slug} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-5 py-4 font-bold text-gray-900">{tier.treatment}</td>
                      <td className="px-5 py-4"><span className="font-bold text-brand-600 text-base">£{tier.priceFrom.toLocaleString()} to £{tier.priceTo.toLocaleString()}</span></td>
                      <td className="px-5 py-4 text-gray-700 hidden md:table-cell">{tier.typicalDuration}</td>
                      <td className="px-5 py-4 text-gray-600 text-xs hidden lg:table-cell">{tier.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
                <h3 className="font-display font-bold text-gray-900 mb-4">What Is Included in the Price</h3>
                <ul className="space-y-2.5">
                  {treatmentIncludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard className="w-5 h-5 text-brand-600" />
                  <h3 className="font-display font-bold text-gray-900">0% Finance Available at Most Clinics</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{financeInfo.description}</p>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <div className="text-2xl font-display font-bold text-brand-600">From £{financeInfo.monthlyFrom}/month</div>
                  <span className="text-xs text-gray-500">Spread over {financeInfo.spreadOver} at 0% APR representative</span>
                </div>
              </div>
            </div>

            <div className="prose prose-gray max-w-none text-gray-600">
              <p>
                Platinum and Diamond providers may charge slightly higher fees than general dentists offering Invisalign, but their experience means fewer complications, more accurate initial treatment plans, fewer refinement rounds, and better final results. Most patients find the slightly higher upfront cost pays for itself through reduced total treatment time and fewer follow-up appointments. Our free service lets you compare quotes from multiple top-tier providers in your area so you can make an informed decision based on both cost and clinical credentials.
              </p>
            </div>
          </div>
        </section>

        {/* Conditions We Treat */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="max-w-3xl mb-14">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Conditions Invisalign Can Treat</h2>
              <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                <p>
                  Invisalign handles far more than simple cosmetic straightening. Platinum and Diamond providers routinely use the system to treat complex bite and alignment issues that previously required fixed metal braces. The key is provider experience: a high-tier provider with hundreds of cases under their belt can achieve results with Invisalign that a less experienced dentist simply cannot, because they understand how to use advanced features like SmartForce attachments, Precision Cuts for elastics, and mandibular advancement for bite correction.
                </p>
                <p>
                  Below are the most common conditions our patients seek treatment for. Select any condition to see Platinum providers in your area who specialise in that case type.
                </p>
              </div>
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
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">{service.description}</p>
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
        <section className="section-padding bg-white border-y border-gray-100">
          <div className="container-width">
            <div className="max-w-3xl mb-14">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">How Our Free Invisalign Matching Service Works</h2>
              <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                <p>
                  We are not a dental clinic and we do not provide Invisalign treatment ourselves. We are a free, independent referral service that helps you find and compare the best Invisalign providers in your area. Our network includes over 350 Platinum and Diamond tier clinics across England, Scotland, Wales, and Northern Ireland. You pay nothing to use our service. There is no catch and no obligation to proceed with any provider we match you with.
                </p>
                <p>
                  We built this service because finding a genuinely experienced Invisalign provider is harder than it should be. Any general dentist can offer Invisalign after a short training course, but the quality of your result depends heavily on your provider's case experience. Our vetting process ensures you only see providers with a proven track record of successful outcomes across hundreds of cases.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: 1, title: "Submit Your Details", desc: "Fill in our 60-second form with your location, the type of treatment you are interested in, and your contact details. No account creation required. Your information is only shared with providers you are matched with and never sold to third parties." },
                { step: 2, title: "We Find Your Best Matches", desc: "We search our network of Platinum and Diamond providers and shortlist the best matches for your specific case type, location, schedule preferences, and budget. We consider provider experience, patient reviews, available appointment times, and proximity to your postcode." },
                { step: 3, title: "Receive Up to 3 Free Quotes", desc: "Your matched providers contact you directly, usually within 2 hours during business days. Each provider offers a free consultation that includes a complimentary iTero 3D scan (worth £150 to £300), a ClinCheck treatment simulation, and a personalised quote with payment options." },
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

        {/* Invisalign vs Braces */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Invisalign vs Braces: Which Is Better for Adults in the UK?</h2>
              <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                <p>
                  This is the most common question we hear from new patients. The short answer: for most adult cases, Invisalign delivers comparable or better results with significantly less disruption to your daily life. The longer answer depends on the specifics of your case, which is why the free consultation and 3D scan from our providers is so valuable. Below is a factual comparison based on clinical evidence and real patient feedback.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-display font-bold text-brand-600 text-xl mb-4">Invisalign Clear Aligners</h3>
                <ul className="space-y-3">
                  {[
                    'Virtually invisible during wear',
                    'Removable for eating, brushing, and flossing',
                    'No metal brackets or wires in your mouth',
                    'Fewer dental visits (every 6 to 8 weeks)',
                    'Digital preview of final results before starting',
                    'Average treatment time 6 to 18 months',
                    'Smooth plastic with no sharp edges',
                    'Cost: £1,500 to £5,500 depending on case',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-display font-bold text-gray-500 text-xl mb-4">Traditional Metal Braces</h3>
                <ul className="space-y-3">
                  {[
                    'Clearly visible metal on your teeth',
                    'Fixed and cannot be removed by you',
                    'Strict food restrictions for entire treatment',
                    'Monthly adjustment appointments needed',
                    'No preview of final result available',
                    'Average treatment time 18 to 36 months',
                    'Can cause mouth sores and cheek irritation',
                    'Cost: £1,500 to £6,000 depending on case',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                      <div className="w-4 h-4 border-2 border-gray-300 rounded-full flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="prose prose-gray max-w-none text-gray-600">
              <p>
                The most important factor in achieving a good outcome with either system is the skill and experience of your provider. A Platinum Invisalign specialist who has treated hundreds of similar cases will consistently outperform a less experienced dentist regardless of which system is used. That is exactly why our matching service focuses on provider quality above everything else. The few cases where fixed braces remain clearly superior are severe skeletal discrepancies that require surgical jaw repositioning, which affects a small minority of adult patients.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">What Our Patients Say About the Service</h2>
              <p className="text-lg text-gray-600">
                Over 12,000 patients across the UK have used our free matching service to find and compare top-tier Invisalign providers near them. Here is what some of them had to say about their experience.
              </p>
            </div>
            <Testimonials limit={5} />
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Compare Invisalign Dentists in Your City</h2>
              <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                <p>
                  Our provider network covers over 350 cities and towns across England, Scotland, Wales, and Northern Ireland. Each location page shows you which Platinum and Diamond providers are available in that area, the treatments they specialise in, local pricing information, and patient reviews. Select your nearest city below to get started, or use our matching form to let us find the best providers for you automatically.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {topCities.map(city => (
                <Link
                  key={city}
                  href={`/location/${toSlug(city)}/`}
                  className="group block bg-white hover:bg-brand-50 border border-gray-100 hover:border-brand-200 rounded-xl p-5 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5 text-brand-500" />
                    </div>
                    <div>
                      <span className="font-display font-bold text-gray-900 group-hover:text-brand-700 block">Invisalign {city}</span>
                      <span className="text-xs text-gray-500">View providers and prices</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/location/" className="text-brand-600 font-semibold hover:underline">View all 350+ locations across the UK →</Link>
            </div>
          </div>
        </section>

        {/* FAQ - 10 questions */}
        <section className="section-padding bg-white">
          <div className="container-width max-w-3xl">
            <FAQ faqs={homepageFaqs} title="Invisalign FAQs: Everything You Need to Know" />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="container-width text-center relative z-10">
            <h2 className="text-4xl font-display font-bold text-white mb-6">Ready to Find Your Invisalign Dentist?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Our free matching service takes 60 seconds. We compare the best Platinum and Diamond Invisalign providers near you so you get expert treatment at a competitive price with zero obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setIsModalOpen(true)} className="btn-primary text-xl !px-10 !py-5">Compare Providers Free</button>
              <Link href="/services/" className="btn-secondary !bg-white/10 !border-white/30 !text-white hover:!bg-white/20 text-xl !px-10 !py-5">
                Browse Treatments
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              {['Always 100% free to use', 'Platinum and Diamond providers only', 'Free consultation and 3D scan included'].map(item => (
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
