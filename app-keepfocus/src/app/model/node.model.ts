export interface Node {
  id: number;
  name: string;
  type: string;
  meterType?: string;
  children?: Node[];
}
