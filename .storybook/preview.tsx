import type { Decorator, Preview } from "@storybook/react-vite";
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs/blocks";
import React from "react";

import "../app/root.css";

const withDocumentColorScheme: Decorator = (Story, context) => {
  const colorScheme = (context.globals["colorScheme"] || "dark") as
    | "light"
    | "dark";

  document.documentElement.dataset.theme = colorScheme;
  document.body.dataset.theme = colorScheme;

  return (
    <>
      <style>{`.sb-story { overflow: hidden; }`}</style>
      <Story />
    </>
  );
};

const preview = {
  tags: ["autodocs"],
  globalTypes: {
    colorScheme: {
      description: "Color scheme",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    withDocumentColorScheme,
  ],
  parameters: {
    options: {
      storySort: {
        method: "alphabetical" as const,
        order: ["Docs", "Layout", "Components"],
      },
    },
    layout: "fullscreen",
    docs: {
      canvas: {
        layout: "fullscreen",
        withToolbar: false,
        previewSource: "open",
      },
      toc: {
        ignoreSelector: ".sb-story *",
        headingSelector: "h2, h3, h4",
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <h2 id="props">Props</h2>
          <Primary />
          <Controls sort="alpha" />
          <h2 id="details">Details</h2>
          <Stories includePrimary={false} title="" />
        </>
      ),
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
} satisfies Preview;

export default preview;
