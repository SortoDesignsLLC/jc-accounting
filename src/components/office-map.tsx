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
    label: "Hanover, MD",
    query: "7467 Ridge Rd, Suite 310, Hanover, MD 21076",
    lat: 39.16158,
    lng: -76.7111,
  },
];

function srcFor(office: Office) {
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
    <div className="office-map">
      <iframe
        title={`Map of the JC Taxes office in ${office.label}`}
        src={srcFor(office)}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"

        allowFullScreen
      />
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.query)}`}
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        {directionsLabel}
      </a>
    </div>
  );
}
