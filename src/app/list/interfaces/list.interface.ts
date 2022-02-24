export interface SWPeopleRespose {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: String[];
  species: String[];
  starships: String[];
  vehicles: String[];
  url: string;
  created: string;
  edited: string;
}

export interface SWPeople extends SWPeopleRespose {
  id: number;
}

export interface SWPaginator {
  count: number;
  next: string;
  previous: any;
}
export interface SWListRespose extends SWPaginator {
  results: SWPeopleRespose[];
}

export interface SWList extends SWPaginator {
  results: SWPeople[];
}
