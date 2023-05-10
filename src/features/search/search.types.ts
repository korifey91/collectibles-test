export interface Card {
  id: number;
  name: string;
  year: number;
  image: null | string;
  slug: string;
  sport_name: string;
  is_follow: boolean;
}

export interface Suites {
  id: null;
  year: number;
  seo_suites: Card[];
}

export interface CardInStore extends Card {
  path: [number, number]; // path[0] - index of suite; path[1] - index of a card in suite;
}

export interface SuiteInStore extends Suites {
  seo_suites: CardInStore[];
}

export type SelectedCard = Pick<CardInStore, 'id' | 'path'>;

export interface SearchSliceState {
  isLoading: boolean;
  error: string | undefined;
  suites: SuiteInStore[];
  totalCount: number;
  searchQuery: string;
  selectedCards: SelectedCard[];
  activeTab: 'all' | 'completed';
}

export interface GetSuitesSuccessPayload {
  suites: Suites[];
  totalCount: number;
}
