export interface SWFilmResponse {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  url: string;
  created: string;
  edited: string;
}

export interface SWFilm extends SWFilmResponse {
  id: number;
}
export interface SWFilmListResponse {
  count: number;
  next: string;
  previous: string;
  results: SWFilmResponse[];
}
