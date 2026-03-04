import { MapPin } from 'lucide-react';
import { getNearbyAreas } from '@/data/nearby-areas';

interface NearbyAreasGridProps {
  cityName: string;
  serviceSlug?: string;
  serviceName?: string;
}

export function NearbyAreasGrid({ cityName, serviceSlug, serviceName }: NearbyAreasGridProps) {
  const areas = getNearbyAreas(cityName);
  if (areas.length === 0) return null;

  const heading = serviceName
    ? `${serviceName} — Areas Around ${cityName}`
    : `Areas We Cover Around ${cityName}`;

  const description = serviceName
    ? `Looking for ${serviceName.toLowerCase()} near ${cityName}? Our Platinum providers serve patients across ${cityName} and the surrounding areas listed below. Whether you're based in the city centre or a nearby suburb, we'll match you with the closest elite provider.`
    : `Our Platinum Invisalign providers in ${cityName} serve patients from across the wider area. If you live in any of the neighbourhoods, suburbs, or nearby towns listed below, you're within reach of expert Invisalign treatment. Get matched with a local specialist today.`;

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-brand-100 p-2 rounded-lg">
          <MapPin className="w-5 h-5 text-brand-600" />
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900">{heading}</h2>
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {areas.map(area => (
          <div
            key={area}
            className="flex items-center gap-2 px-3 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-700 hover:bg-brand-50 hover:border-brand-200 hover:text-brand-700 transition-colors"
          >
            <MapPin className="w-3 h-3 text-brand-400 flex-shrink-0" />
            <span className="font-medium truncate">
              {serviceName
                ? `${area}`
                : `Invisalign ${area}`
              }
            </span>
          </div>
        ))}
      </div>

      {/* SEO paragraph */}
      <div className="mt-6 prose prose-sm max-w-none text-gray-500">
        <p>
          Patients from {areas.slice(0, 5).join(', ')}, and other areas around {cityName} regularly travel to our partnered clinics for Invisalign consultations.{' '}
          {serviceName
            ? `If you need ${serviceName.toLowerCase()} and live in or near ${cityName}, our Platinum providers can accommodate your schedule with flexible appointment times including evenings and weekends.`
            : `All of our ${cityName} partner clinics are easily accessible by public transport and offer flexible appointment times to suit your schedule.`
          }
        </p>
      </div>
    </section>
  );
}
