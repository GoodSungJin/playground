import { Item, ITEM_ID, RECOMMENDATION_ID } from "./type";

export const ITEMS: Item[] = [
  {
    itemID: 100_001,
    name: "상의",
    price: 1000,
    options: ["red", "orange", "yellow", "green"],
    isVisible: true,
  },
  {
    itemID: 100_002,
    name: "하의",
    price: 2000,
    options: ["red", "orange", "yellow", "green"],
    recommendationID: 300_001,
    isVisible: true,
  },
  {
    itemID: 100_003,
    name: "신발",
    price: 4000,
    options: ["red", "orange", "yellow", "green"],
    recommendationID: 300_002,
    isVisible: true,
  },
  {
    itemID: 100_004,
    name: "사각팬티",
    price: 990,
    options: ["red", "orange", "yellow", "green"],
    isVisible: false,
  },
  {
    itemID: 100_005,
    name: "삼각팬티",
    price: 790,
    options: ["red", "orange", "yellow", "green"],
    isVisible: false,
  },
  {
    itemID: 100_006,
    name: "T팬티",
    price: 690,
    options: ["red", "orange", "yellow", "green"],
    isVisible: false,
  },
  {
    itemID: 100_007,
    name: "발목양말",
    price: 300,
    options: ["red", "orange", "yellow", "green"],
    isVisible: false,
  },
  {
    itemID: 100_008,
    name: "털양말",
    price: 600,
    options: ["red", "orange", "yellow", "green"],
    isVisible: false,
  },
  {
    itemID: 100_009,
    name: "스키양말",
    price: 800,
    options: ["red", "orange", "yellow", "green"],
    isVisible: false,
  },
];

export const RECOMMENDATIONS: { [k in RECOMMENDATION_ID]: ITEM_ID[] } = {
  300_001: [100_004, 100_005, 100_006],
  300_002: [100_007, 100_008, 100_009],
};
