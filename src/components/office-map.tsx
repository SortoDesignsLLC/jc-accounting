const KEY = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"] as
  | string
  | undefined;

export type Office = {
  label: string;
  query: string;
  lat: number;
  lng: number;
};

export const OFFICES: Office[] = [
  {
    label: "Hyattsville, MD",
    query: "3501 Hamilton St Suite 201C, Hyattsville, MD 20782",
    lat: 38.9557,
    lng: -76.9436,
  },
  {
    label: "Glen Burnie, MD",
    query: "7310 Ritchie Hwy, Glen Burnie, MD 21061",
    lat: 39.1583,
    lng: -76.6119,
  },
];

function srcFor(office: Office) {
  if (KEY) {
    return `https://www.google.com/maps/embed/v1/place?key=${KEY}&q=${encodeURIComponent(
      office.query,
    )}&zoom=15`;
  }
  const d = 0.01;
  const bbox = `${office.lng - d},${office.lat - d},${office.lng + d},${office.lat + d}`;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${office.lat},${office.lng}`;
}

export function OfficeMap({
  office,
  directionsLabel = "Get directions →",
}: {
  office: Office;
  directionsLabel?: string;
}) {
  return (
    <div>
      <iframe
        title={`Map of the JC Taxes office in ${office.label}`}
        src={srcFor(office)}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[240px] rounded-lg border border-border bg-ice"
        allowFullScreen
      />
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          office.query,
        )}`}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-block text-[12px] font-sans font-semibold text-crimson hover:text-crimson-soft transition-colors"
      >
        {directionsLabel}
      </a>
    </div>
  );
}
