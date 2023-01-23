import { Issue } from './issue.model';

export interface Column {
  id?: string;
  name: string;
  issues?: Issue[];
}
