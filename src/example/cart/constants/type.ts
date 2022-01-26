export type ITEM_ID =
  | 100_001
  | 100_002
  | 100_003
  | 100_004
  | 100_005
  | 100_006
  | 100_007
  | 100_008
  | 100_009;
export type RECOMMENDATION_ID = 300_001 | 300_002;

export interface Item {
  itemID: ITEM_ID;
  name: string;
  price: number;
  recommendationID?: RECOMMENDATION_ID;
  options: string[];
  isVisible: boolean;
}
