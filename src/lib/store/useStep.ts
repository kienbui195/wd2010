// src/stores/useGiftStore.ts
import { create } from "zustand";

type StepState = {
  step: number;
  setStep: (step: number) => void;
};

export const useStep = create<StepState>((set) => ({
  step: 0,
  setStep: (step) => set({ step }),
}));
