import { create } from 'zustand';

interface SearchStore {
  results: object[];
  setResults: (data: object[]) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  results: [],
  setResults: (data) => set({ results: data }),
}));
