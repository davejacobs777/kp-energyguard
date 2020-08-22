import {Installation} from './installation.model';

export interface Group {
  id: number;
  name: string;
  type: string;
  installations: number;
  meters: number;
  parentId: number;
  children: Group[] | Installation[];
}
