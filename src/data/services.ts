export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 'automotive',
    name: 'Automotive Tinting',
    description:
      'Computer-cut window film for cars, trucks, and SUVs. Precision patterns that fit your vehicle exactly. No cutting on your glass, no risk of scratches. California-legal options available.',
    image: 'img_autotint',
  },
  {
    id: 'residential',
    name: 'Residential Tinting',
    description:
      'Cut your cooling costs and block 99% of UV rays without losing your view. Home window tinting keeps your furniture from fading and your house comfortable year-round.',
    image: 'img_houseting',
  },
  {
    id: 'commercial',
    name: 'Commercial Tinting',
    description:
      'Professional window film for offices and storefronts. Reduce glare, lower energy bills, and give your building a clean, finished look.',
    image: 'img_commercialtint',
  },
  {
    id: 'mobile',
    name: 'Mobile Service',
    description:
      'We bring the shop to you. Fleet tinting at your dealership, your warehouse, your parking lot. Same professional install, zero downtime for your business.',
    image: 'img_trailer',
  },
  {
    id: 'specialty',
    name: 'Specialty Vehicles',
    description:
      'RVs, tractors, boats, heavy equipment. Custom solutions for windows that other shops won\'t touch.',
    image: 'img_specialtytint',
  },
  {
    id: 'removal',
    name: 'Tint Removal',
    description:
      'Old tint bubbling, peeling, or turning purple? We strip it clean without damaging your glass and prep it for a fresh install.',
    image: 'img_removaltint',
  },
];
