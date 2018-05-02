export interface Project {
  name: string;
  type: string;
  owner: string;
  members: Array<Member>;
}

export interface Member {
  name: string;
}
