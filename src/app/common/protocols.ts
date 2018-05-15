export interface Project {
  id: string;
  name: string;
  type: string;
  owner: string;
  members: Array<Member>;
  tasks: Array<Task>;
}

export interface Member {
  name: string;
}

export interface Task {
  id: string;
  name: string;
  type: string;
}
