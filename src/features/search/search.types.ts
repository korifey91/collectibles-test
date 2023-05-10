export interface Card {
  'id':number;
  'name': string;
  'year': number;
  'image': null | string;
  'slug': string;
  'sport_name': string;
  'is_follow': boolean;
}

export interface Suites {
  'id': null;
  'year':number;
  'seo_suites': Card[];
}

export interface SelectedCard {
  id: number;
  path: [number, number]; // path[0] - index of suite; path[1] - index of a card in suite
}

export interface SearchSliceState {
  isLoading: boolean;
  error: string | undefined;
  suites: Suites[];
  totalCount: number;
  searchQuery: string;
  selectedCards: SelectedCard[];
  activeTab: 'all' | 'completed';
}
