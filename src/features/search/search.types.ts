export interface Card {
  'id':number;
  'name': string;
  'year':number;
  'image':null | string;
  'slug':string;
  'sport_name': string;
  'is_follow': boolean;
}

export interface Suites {
  'id': null;
  'year':number;
  'seo_suites': Card[];
}
