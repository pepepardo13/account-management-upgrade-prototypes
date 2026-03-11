import type { Decorator, StoryContext, StoryFn } from "@storybook/react-vite";

import { TranslationsProvider } from "../contexts/TranslationsContext.tsx";

export function withTranslations(
  translations: Record<string, Record<string, string>>[],
): Decorator {
  const WithTranslationsDecorator = (
    Story: StoryFn,
    context: StoryContext,
  ) => {
    const locale = context.globals["locale"] ?? "en";

    const mergedMessages = translations.reduce(
      (acc, translation) => {
        const localeMessages = translation[locale];
        if (localeMessages && typeof localeMessages === "object") {
          return { ...acc, ...localeMessages };
        }
        return acc;
      },
      {} as Record<string, string>,
    );

    return (
      <TranslationsProvider messages={mergedMessages}>
        {Story(context.args, context)}
      </TranslationsProvider>
    );
  };

  WithTranslationsDecorator.displayName = "WithTranslationsDecorator";
  return WithTranslationsDecorator;
}
