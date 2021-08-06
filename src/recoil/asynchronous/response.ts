export interface Response {
  results: User[];
}

export interface User {
  name: Name;
  id: {
    name: string;
    value: string;
  };
}

export interface Name {
  first: string;
  last: string;
}
