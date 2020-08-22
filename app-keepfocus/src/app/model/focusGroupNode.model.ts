export interface FocusGroupNode {
  id: number;
  name: string;
  type: string;
  meterType?: string;
  children?: FocusGroupNode[];
}
