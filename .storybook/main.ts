import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../docs/**/*.mdx", "../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  viteFinal: async config => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve?.alias,
        "@components": path.resolve(__dirname, "../src/components"),
        "@tokens": path.resolve(__dirname, "../src/tokens")
      };
    }
    return config;
  }
};
export default config;
