export interface FocusGroupNode {
  id: number;
  name: string;
  type: string;
  children?: FocusGroupNode[];
}
