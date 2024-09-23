"use client";
import React, { createContext, ReactNode } from "react";
import FruitStore from "@/store";

export const StoreContext = createContext(FruitStore);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider value={FruitStore}>{children}</StoreContext.Provider>
  );
};

export function useStore() {
  return React.useContext(StoreContext);
}
