export interface Response {
  results: User[];
}

export interface User {
  name: Name;
}

export interface Name {
  first: string;
  last: string;
}
