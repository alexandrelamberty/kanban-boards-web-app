import { Column } from './column.model';

export interface Board {
  id?: string;
  name: string;
  description: string;
  issues?: number;
  columns?: Column[];
}
