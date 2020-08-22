import {Meter} from './meter.model';

export interface Installation {
  id: number;
  name: string;
  type: string;
  address: string;
  zipcode: string;
  city: string;
  parentId: number;
  children: Meter[];
}
