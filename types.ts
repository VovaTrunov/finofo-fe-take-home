export type TFruit = {
  name: string;
  id: number;
  family: string;
  genus: string;
  order: string;
  nutritions: TNutrition;
};

export type TNutrition = {
  carbohydrates: number;
  protein: number;
  fat: number;
  calories: number;
  sugar: number;
};

export type TView = "list" | "table";

export type TGroupBy = "none" | "family" | "order" | "genus";