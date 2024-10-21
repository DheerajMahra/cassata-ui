export type Theme = "light" | "dark";

export type EmphasisKeys =
  | "subtle"
  | "normal"
  | "bold"
  | "disabled"
  | "inverse";

export type ThemeSemantics = {
  text: Record<EmphasisKeys, string>;
};
