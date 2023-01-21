import { Issue } from './issue.model';

export interface Column {
  name: string;
  issues: Issue[];
}
