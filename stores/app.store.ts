import { create } from "zustand";

interface AppStore {
  introFinished: boolean;
  setIntroFinished: (value: boolean) => void;

  loading: boolean;
  setLoading: (value: boolean) => void;

  moonLoaded: boolean;
  setMoonLoaded: (value: boolean) => void;

  activeSection: string;
  setActiveSection: (section: string) => void;

  musicEnabled: boolean;
  setMusicEnabled: (value: boolean) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  introFinished: false,

  setIntroFinished: (value) =>
    set({
      introFinished: value,
    }),

  loading: true,

  setLoading: (value) =>
    set({
      loading: value,
    }),

  moonLoaded: false,

  setMoonLoaded: (value) =>
    set({
      moonLoaded: value,
    }),

  activeSection: "hero",

  setActiveSection: (section) =>
    set({
      activeSection: section,
    }),

  musicEnabled: false,

  setMusicEnabled: (value) =>
    set({
      musicEnabled: value,
    }),
}));