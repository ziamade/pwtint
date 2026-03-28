export interface Review {
  text: string;
  author: string;
  rating: number;
  source: string;
}

export const reviews: Review[] = [
  {
    text: 'This is without a doubt the best tint shop in town. The product they use is top quality and lasts forever. I\'ve had over a dozen cars tinted with Pacific Window Tint and never had a problem. No bubbles, no peeling, no fading, nothing. On top of that they warranty their work. This is a five-star shop.',
    author: 'Sean M.',
    rating: 5,
    source: 'Google',
  },
  {
    text: 'G wanted her windows tinted for her birthday. Dana set up an appointment same day and we didn\'t wait a minute past two p.m. He started the process at exactly 2:05, and completed the work at 2:42. No wasted time and the work is clean. Dana reinforced his commitment to honoring his warranty if something happens. All around, a marvelous experience.',
    author: 'AnG National Critics',
    rating: 5,
    source: 'Google',
  },
  {
    text: 'Took my 2017 Silverado in on a Saturday. As usual, Dana did an amazing job. This was my 3rd car he has done for me. Always a professional job. Definitely go to him if you want a professional tint job. Plus, lifetime warranty.',
    author: 'Dennis N.',
    rating: 5,
    source: 'Google',
  },
  {
    text: 'Dana was honest and very skillful. It is not easy to tint my rear window and he did a wonderful job with it.',
    author: 'Verified Customer',
    rating: 5,
    source: 'Yelp',
  },
  {
    text: 'Dana is the man to call if you\'re looking for a top notch installer of tint, paint protection, or car electronics.',
    author: 'Verified Customer',
    rating: 5,
    source: 'Yelp',
  },
  {
    text: 'Dana at Pacific Window Tint installed tint on my Mercedes S430. The job was flawless and I have been extremely happy with the tint.',
    author: 'Verified Customer',
    rating: 5,
    source: 'Yelp',
  },
];
