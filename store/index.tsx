import { ChartConfig } from "@/components/ui/chart";
import { TFruit, TGroupBy, TView } from "@/types";
import { makeAutoObservable, reaction } from "mobx";

class FruitStore {
  constructor() {
    makeAutoObservable(this);

    reaction(() => this.jar.length, () => {
      if (!this.jar.length) {
        this.chartsOpen = false;
      }
    })
  }

  view: TView = "list";
  fruits: TFruit[] = [];
  jar: TFruit[] = [];
  groupBy: TGroupBy = "none";
  chartsOpen = false;

  get totalCalories() {
    return this.jar.reduce((acc, fruit) => acc + fruit.nutritions.calories, 0);
  }

  get groupedFruits() {
    if (this.groupBy === "none") {
      return this.fruits;
    }

    return this.fruits.reduce((acc, fruit) => {
      const key =
        fruit[this.groupBy as keyof Pick<TFruit, "family" | "genus" | "order">];
      if (!acc[key]) {
        acc[key] = [];
      }

      acc[key].push(fruit);

      return acc;
    }, {} as Record<string, TFruit[]>);
  }

  get chartData() {
    const reduced = this.jar.reduce((acc, curr, index) => {
      if (acc[curr.name]) {
        acc[curr.name].calories += curr.nutritions.calories;
      } else {
        acc[curr.name] = {
          calories: curr.nutritions.calories,
          color: index % 2 ? "hsl(var(--accent))" : "hsl(var(--muted))",
        };
      }

      return acc;
    }, {} as Record<string, any>);

    return Object.entries(reduced).map(([key, value]) => ({
      ...value,
      name: key,
      fill: value.color,
    }));
  }

  get chartConfig() {
    return this.jar.reduce((acc, curr, index) => {
      acc[curr.name] = {
        label: curr.name,
        color: index % 2 ? "hsl(var(--accent))" : "hsl(var(--muted))",
      };
      return acc;
    }, {} as ChartConfig);
  }

  setView = (view: TView) => {
    this.view = view;
  };

  setGroupBy = (groupBy: TGroupBy) => {
    this.groupBy = groupBy;
  };

  setFruits = (fruits: TFruit[]) => {
    this.fruits = fruits;
  };

  addToJar = (fruit: TFruit | TFruit[]) => {
    if (Array.isArray(fruit)) {
      this.jar = [...this.jar, ...fruit];
    } else {
      this.jar.push(fruit);
    }
  };

  removeFromJar = (index: number) => {
    const updated = [...this.jar];
    updated.splice(index, 1);

    this.jar = updated;
  };

  clearJar = () => {
    this.jar = [];
  };

  toggleCharts = () => {
    this.chartsOpen = !this.chartsOpen;
  };
}

export default new FruitStore();
