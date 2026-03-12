import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import heroVideoIcon from "./assets/ai-landing-pages-video-icon.png";
import graphicsGenIcon from "./assets/ai-landing-pages/graphics-gen.svg";
import musicGenIcon from "./assets/ai-landing-pages/music-gen.svg";

const img05SlimeCoversTheWholeHydrant1 = new URL("./assets/ai-landing-pages/img05SlimeCoversTheWholeHydrant1.jpg", import.meta.url).href;
const img04PromptDetailsBasePrompt1 = new URL("./assets/ai-landing-pages/img04PromptDetailsBasePrompt1.jpg", import.meta.url).href;
const img03PanRightVerySlowly1 = new URL("./assets/ai-landing-pages/img03PanRightVerySlowly1.jpg", import.meta.url).href;
const img01ThePlushDoesAVictoriousGrowlAndWa1 = new URL("./assets/ai-landing-pages/img01ThePlushDoesAVictoriousGrowlAndWa1.jpg", import.meta.url).href;
const img06HeSlowlyLooksUpAndDownSubtleMove1 = new URL("./assets/ai-landing-pages/img06HeSlowlyLooksUpAndDownSubtleMove1.jpg", import.meta.url).href;
const img10ASafeForWorkClipOfTheBallerinaW1 = new URL("./assets/ai-landing-pages/img10ASafeForWorkClipOfTheBallerinaW1.jpg", import.meta.url).href;
const img08KnightScansTheBaguetteOneTimeAndT1 = new URL("./assets/ai-landing-pages/img08KnightScansTheBaguetteOneTimeAndT1.jpg", import.meta.url).href;
const img141 = new URL("./assets/ai-landing-pages/img141.png", import.meta.url).href;
const imgScreenshot20260312At1212192 = new URL("./assets/ai-landing-pages/imgScreenshot20260312At1212192.png", import.meta.url).href;
const imgJob1928VideoGenLpFooterBannerDesktop1 = new URL("./assets/ai-landing-pages/imgJob1928VideoGenLpFooterBannerDesktop1.png", import.meta.url).href;
const imgLogotype = new URL("./assets/ai-landing-pages/imgLogotype.svg", import.meta.url).href;
const imgMark = new URL("./assets/ai-landing-pages/imgMark.svg", import.meta.url).href;
const imgIcon = new URL("./assets/ai-landing-pages/imgIcon.svg", import.meta.url).href;
const imgOpenAiLogo1 = new URL("./assets/ai-landing-pages/imgOpenAiLogo1.svg", import.meta.url).href;
const imgGroup27392 = new URL("./assets/ai-landing-pages/imgGroup27392.svg", import.meta.url).href;
const imgGroup27390 = new URL("./assets/ai-landing-pages/imgGroup27390.svg", import.meta.url).href;
const imgVector = new URL("./assets/ai-landing-pages/imgVector.svg", import.meta.url).href;
const imgKling = new URL("./assets/ai-landing-pages/imgKling.svg", import.meta.url).href;
const imgElevenlabsLogoBlack1 = new URL("./assets/ai-landing-pages/imgElevenlabsLogoBlack1.svg", import.meta.url).href;
const imgFlux1 = new URL("./assets/ai-landing-pages/imgFlux1.svg", import.meta.url).href;
const imgMinimax1 = new URL("./assets/ai-landing-pages/imgMinimax1.svg", import.meta.url).href;
const imgIco24GenAiImageGen = new URL("./assets/ai-landing-pages/imgIco24GenAiImageGen.svg", import.meta.url).href;
const imgIco24GenAiImageEdit = new URL("./assets/ai-landing-pages/imgIco24GenAiImageEdit.svg", import.meta.url).href;
const imgMainContent = new URL("./assets/ai-landing-pages/imgMainContent.svg", import.meta.url).href;
const imgBackgroundStroke = new URL("./assets/ai-landing-pages/imgBackgroundStroke.svg", import.meta.url).href;
const imgIco24GenAiImageEdit1 = new URL("./assets/ai-landing-pages/imgIco24GenAiImageEdit1.svg", import.meta.url).href;
const imgIco24GenAiVoiceGen = new URL("./assets/ai-landing-pages/imgIco24GenAiVoiceGen.svg", import.meta.url).href;
const imgIco24GenAiVoiceGen1 = new URL("./assets/ai-landing-pages/imgIco24GenAiVoiceGen1.svg", import.meta.url).href;
const imgIco24GenAiSoundGen = new URL("./assets/ai-landing-pages/imgIco24GenAiSoundGen.svg", import.meta.url).href;
const imgIco24GenAiSoundGen1 = new URL("./assets/ai-landing-pages/imgIco24GenAiSoundGen1.svg", import.meta.url).href;
const imgIco24GenAiImageGen1 = new URL("./assets/ai-landing-pages/imgIco24GenAiImageGen1.svg", import.meta.url).href;
const imgUiIcons = new URL("./assets/ai-landing-pages/imgUiIcons.svg", import.meta.url).href;
const imgAiVideo = new URL("./assets/ai-landing-pages/imgAiVideo.svg", import.meta.url).href;
const imgCrop = new URL("./assets/ai-landing-pages/imgCrop.svg", import.meta.url).href;
const imgMovie = new URL("./assets/ai-landing-pages/imgMovie.svg", import.meta.url).href;
const imgChevronDown = new URL("./assets/ai-landing-pages/imgChevronDown.svg", import.meta.url).href;
const imgGroup = new URL("./assets/ai-landing-pages/imgGroup.svg", import.meta.url).href;
const imgGroup1 = new URL("./assets/ai-landing-pages/imgGroup1.svg", import.meta.url).href;
const imgAiIcon = new URL("./assets/ai-landing-pages/imgAiIcon.svg", import.meta.url).href;
const imgLine104 = new URL("./assets/ai-landing-pages/imgLine104.svg", import.meta.url).href;
const imgGroup43960 = new URL("./assets/ai-landing-pages/imgGroup43960.svg", import.meta.url).href;
const imgRectangle10920Stroke = new URL("./assets/ai-landing-pages/imgRectangle10920Stroke.svg", import.meta.url).href;
const imgGroup43921 = new URL("./assets/ai-landing-pages/imgGroup43921.svg", import.meta.url).href;
const imgGroup43974 = new URL("./assets/ai-landing-pages/imgGroup43974.svg", import.meta.url).href;
const imgGroup43975 = new URL("./assets/ai-landing-pages/imgGroup43975.svg", import.meta.url).href;
const imgGroup43976 = new URL("./assets/ai-landing-pages/imgGroup43976.svg", import.meta.url).href;
const imgChevronLeft = new URL("./assets/ai-landing-pages/imgChevronLeft.svg", import.meta.url).href;
const imgChevronRight = new URL("./assets/ai-landing-pages/imgChevronRight.svg", import.meta.url).href;
const imgRectangle10926 = new URL("./assets/ai-landing-pages/imgRectangle10926.png", import.meta.url).href;
const imgRectangle10931 = new URL("./assets/ai-landing-pages/imgRectangle10931.jpg", import.meta.url).href;
const imgRectangle10935 = new URL("./assets/ai-landing-pages/imgRectangle10935.jpg", import.meta.url).href;
const imgRectangle10939 = new URL("./assets/ai-landing-pages/imgRectangle10939.png", import.meta.url).href;
const imgRectangle10942 = new URL("./assets/ai-landing-pages/imgRectangle10942.png", import.meta.url).href;
const imgRectangle10943 = new URL("./assets/ai-landing-pages/imgRectangle10943.jpg", import.meta.url).href;
const imgRectangle10956 = new URL("./assets/ai-landing-pages/imgRectangle10956.jpg", import.meta.url).href;
const imgRectangle10958 = new URL("./assets/ai-landing-pages/imgRectangle10958.png", import.meta.url).href;
const imgRectangle10959 = new URL("./assets/ai-landing-pages/imgRectangle10959.png", import.meta.url).href;
const imgRectangle10964 = new URL("./assets/ai-landing-pages/imgRectangle10964.png", import.meta.url).href;
const imgRectangle10967 = new URL("./assets/ai-landing-pages/imgRectangle10967.png", import.meta.url).href;
const optionBHeroLoopMain = new URL("./assets/ai-landing-pages/optionBHeroLoopMain.gif", import.meta.url).href;
const optionBHeroLoopLeft = new URL("./assets/ai-landing-pages/optionBHeroLoopLeft.gif", import.meta.url).href;
const optionBHeroLoopRight = new URL("./assets/ai-landing-pages/optionBHeroLoopRight.gif", import.meta.url).href;
const optionBLoopAction = new URL("./assets/ai-landing-pages/optionBLoopAction.gif", import.meta.url).href;
const optionBLoopCharacter = new URL("./assets/ai-landing-pages/optionBLoopCharacter.gif", import.meta.url).href;
const optionBLoopDrink = new URL("./assets/ai-landing-pages/optionBLoopDrink.gif", import.meta.url).href;
const optionBLoopEarbuds = new URL("./assets/ai-landing-pages/optionBLoopEarbuds.gif", import.meta.url).href;
const optionBLoopEye = new URL("./assets/ai-landing-pages/optionBLoopEye.gif", import.meta.url).href;
const optionBLoopPlane = new URL("./assets/ai-landing-pages/optionBLoopPlane.gif", import.meta.url).href;
const optionBLoopPortrait = new URL("./assets/ai-landing-pages/optionBLoopPortrait.gif", import.meta.url).href;
const optionBLoopPoster = new URL("./assets/ai-landing-pages/optionBLoopPoster.gif", import.meta.url).href;
const optionBLoopProduct = new URL("./assets/ai-landing-pages/optionBLoopProduct.gif", import.meta.url).href;
const optionBLoopWarrior = new URL("./assets/ai-landing-pages/optionBLoopWarrior.gif", import.meta.url).href;

const pageWidth = 1440;
const colors = {
  page: "#d9d9d9",
  white: "#ffffff",
  text: "#666666",
  title: "#7b7b7b",
  black: "#191919",
  border: "#666666",
  mutedBorder: "#8c8c8c",
  accent: "#87e64b",
  darkCard: "#8c8c8c",
  footer: "#fff5ed",
};

const baseFont = `"PolySans", sans-serif`;

const navItems = [
  "Gen AI",
  "Video Templates",
  "Stock Video",
  "Audio",
  "Graphics",
  "Design Templates",
  "Photos",
  "3D",
  "Fonts",
  "More",
];

const modelRows = {
  top: [
    { type: "image" as const, src: imgOpenAiLogo1, alt: "OpenAI", width: 88.5 },
    { type: "image" as const, src: imgGroup27392, alt: "Luma AI", width: 96.5 },
    { type: "mixed" as const, icon: imgVector, label: "Veo" },
    { type: "mixed" as const, icon: imgVector, label: "Nano Banana" },
    { type: "seedream" as const, src: imgGroup27390 },
  ],
  bottom: [
    { type: "image" as const, src: imgKling, alt: "Kling", width: 95.25 },
    { type: "image" as const, src: imgElevenlabsLogoBlack1, alt: "ElevenLabs", width: 115.5 },
    { type: "mixed" as const, icon: imgFlux1, label: "Flux" },
    { type: "mixed" as const, icon: imgMinimax1, label: "Minimax" },
  ],
};

const toolChips = [
  { label: "ImageGen", icon: imgIco24GenAiImageGen },
  { label: "ImageEdit", icon: imgIco24GenAiImageEdit },
  { label: "VideoGen", icon: imgMainContent, active: true, videoIcon: true },
  { label: "MusicGen", icon: musicGenIcon },
  { label: "GraphicGen", icon: graphicsGenIcon },
];

type ToolLabel = (typeof toolChips)[number]["label"];
type HeroVariant = "default" | "optionB" | "optionC";
type PageStep = {
  number: string;
  title: string;
  description: string;
  rotate: number;
  leftOffset: number;
  topOffset: number;
  background: string;
};
type VariantUspItem = {
  title: string;
  description: string;
  icon: string;
  inset: string;
};

const pageVariants: Record<
  ToolLabel,
  {
    heroTitle: string;
    heroDescription: string;
    madeWithTitle: string;
    madeWithDescription: ReactNode;
    uspItems: VariantUspItem[];
    steps: PageStep[];
    startUsingTitle: string;
    startUsingDescription: string;
    assetDescription: string;
    previewLabel: string;
  }
> = {
  ImageGen: {
    heroTitle: "ImageGen",
    heroDescription:
      "From idea to image in seconds. Write a prompt, upload a reference image, or create one with our AI tools, and generate high-quality visuals with the best generative models.",
    madeWithTitle: "Made with ImageGen",
    madeWithDescription: (
      <>
        One place. Every tool. Endless visual possibilities. Write your prompt,
        upload a reference, or refine an existing image with <strong>ImageEdit</strong>
        {" "}then generate fresh imagery.
      </>
    ),
    uspItems: [
      {
        title: "Transform text into images",
        description:
          "Turn prompts into polished visuals fast, from concept art to campaign-ready images.",
        icon: imgAiVideo,
        inset: "20% 21.67% 24% 22.33%",
      },
      {
        title: "Edit & control your images",
        description:
          "Swap details, refine compositions, and iterate without starting over every time.",
        icon: imgCrop,
        inset: "20% 21.67% 24% 22.33%",
      },
      {
        title: "Resize for every platform",
        description:
          "Export your images for socials, presentations, web, or print without losing quality.",
        icon: imgMovie,
        inset: "18% 18% 18% 18%",
      },
    ],
    steps: [
      {
        number: "1",
        title: 'Select "Reference image"',
        description: "Upload an image or start from scratch!",
        rotate: -15,
        leftOffset: 34,
        topOffset: 32,
        background: "#8c8c8c",
      },
      {
        number: "2",
        title: "Write your prompt!",
        description: "Describe the image you want",
        rotate: 4.99,
        leftOffset: 0,
        topOffset: -6,
        background: "#9b9b9b",
      },
      {
        number: "3",
        title: "Choose a style!",
        description: "Use a look or mood to guide the result",
        rotate: -7.56,
        leftOffset: -6,
        topOffset: -16,
        background: "#8c8c8c",
      },
      {
        number: "4",
        title: "Download!",
        description: "Export, refine and share your image",
        rotate: 4.11,
        leftOffset: 0,
        topOffset: -28,
        background: "#9b9b9b",
      },
    ],
    startUsingTitle: "Start Using ImageGen",
    startUsingDescription:
      "Describe your vision or upload a reference image, choose your generative model, and produce professional-quality images - no technical setup required.",
    assetDescription: "Everything you need for your images and more.",
    previewLabel: "IMAGE GENERATION PLACEHOLDER",
  },
  ImageEdit: {
    heroTitle: "ImageEdit",
    heroDescription:
      "Edit images in seconds. Upload a visual, prompt the changes you want, and refine details with powerful AI-assisted tools.",
    madeWithTitle: "Made with ImageEdit",
    madeWithDescription: (
      <>
        One place. Every tool. Endless visual control. Upload a source image, mask
        the area you want to change, and use <strong>ImageGen</strong> and editing
        tools to iterate quickly.
      </>
    ),
    uspItems: [
      {
        title: "Refine images with prompts",
        description:
          "Retouch, replace, or extend visuals with natural-language edits that keep your work moving.",
        icon: imgAiVideo,
        inset: "20% 21.67% 24% 22.33%",
      },
      {
        title: "Control every adjustment",
        description:
          "Update lighting, subjects, and composition while preserving the parts that already work.",
        icon: imgCrop,
        inset: "20% 21.67% 24% 22.33%",
      },
      {
        title: "Deliver every format",
        description:
          "Prepare edited visuals for social, digital ads, presentations, and production handoff.",
        icon: imgMovie,
        inset: "18% 18% 18% 18%",
      },
    ],
    steps: [
      {
        number: "1",
        title: "Upload your image",
        description: "Start from a source visual you want to edit",
        rotate: -15,
        leftOffset: 34,
        topOffset: 32,
        background: "#8c8c8c",
      },
      {
        number: "2",
        title: "Prompt the changes!",
        description: "Describe exactly what you want updated",
        rotate: 4.99,
        leftOffset: 0,
        topOffset: -6,
        background: "#9b9b9b",
      },
      {
        number: "3",
        title: "Refine the result!",
        description: "Iterate until the edit feels right",
        rotate: -7.56,
        leftOffset: -6,
        topOffset: -16,
        background: "#8c8c8c",
      },
      {
        number: "4",
        title: "Download!",
        description: "Export your updated image",
        rotate: 4.11,
        leftOffset: 0,
        topOffset: -28,
        background: "#9b9b9b",
      },
    ],
    startUsingTitle: "Start Using ImageEdit",
    startUsingDescription:
      "Upload your source image, describe what you want to change, choose your model, and produce polished edits - no complex setup required.",
    assetDescription: "Everything you need for your image edits and more.",
    previewLabel: "IMAGE EDIT PLACEHOLDER",
  },
  VideoGen: {
    heroTitle: "VideoGen",
    heroDescription:
      "From idea to video in seconds. Write a prompt, upload an image from your gallery or create one with our AI tools, and generate high-quality content with the best generative models.",
    madeWithTitle: "Made with VideoGen",
    madeWithDescription: (
      <>
        One place. Every tool. Endless creative possibilities. Write your script,
        upload a reference, or generate an image with <strong>ImageGen</strong>
        {" "}then turn it into video.
      </>
    ),
    uspItems: [
      {
        title: "Transform text into video",
        description:
          "Pick a preset for cinematic quality or type what you're vision-our 'Enhance prompt' tool perfects the details.",
        icon: imgAiVideo,
        inset: "20% 21.67% 24% 22.33%",
      },
      {
        title: "Edit & control your videos",
        description:
          "Tweak lighting, swap subjects, and more-no need to regenerate from scratch. Keep what's working and fix what isn't.",
        icon: imgCrop,
        inset: "20% 21.67% 24% 22.33%",
      },
      {
        title: "Resize for every platform",
        description:
          "Export your video for TikTok, YouTube, Instagram, or presentations without losing quality or starting over.",
        icon: imgMovie,
        inset: "18% 18% 18% 18%",
      },
    ],
    steps: [
      {
        number: "1",
        title: 'Select "Start frame"',
        description: "Upload an image or generate one!",
        rotate: -15,
        leftOffset: 34,
        topOffset: 32,
        background: "#8c8c8c",
      },
      {
        number: "2",
        title: "Write your prompt!",
        description: "Type a text prompt",
        rotate: 4.99,
        leftOffset: 0,
        topOffset: -6,
        background: "#9b9b9b",
      },
      {
        number: "3",
        title: "Select a preset!",
        description: "Use one our curated presets to maximize results",
        rotate: -7.56,
        leftOffset: -6,
        topOffset: -16,
        background: "#8c8c8c",
      },
      {
        number: "4",
        title: "Download!",
        description: "Download, extend and refine your project!",
        rotate: 4.11,
        leftOffset: 0,
        topOffset: -28,
        background: "#9b9b9b",
      },
    ],
    startUsingTitle: "Start Using VideoGen",
    startUsingDescription:
      "Describe your vision or upload a reference image, choose your generative model, and produce professional-quality video - no technical setup required.",
    assetDescription: "Everything you need for your videos and more.",
    previewLabel: "GIF ANIMATION PLACEHOLDER",
  },
  MusicGen: {
    heroTitle: "MusicGen",
    heroDescription:
      "From idea to soundtrack in seconds. Write a prompt, set the mood, and generate original music with powerful AI models.",
    madeWithTitle: "Made with MusicGen",
    madeWithDescription: (
      <>
        One place. Every tool. Endless audio possibilities. Describe the sound you
        want, shape the mood, and pair it with <strong>VideoGen</strong> or other
        creative tools.
      </>
    ),
    uspItems: [
      {
        title: "Transform prompts into music",
        description:
          "Generate original tracks quickly for videos, presentations, social content, and more.",
        icon: imgAiVideo,
        inset: "20% 21.67% 24% 22.33%",
      },
      {
        title: "Edit & control your sound",
        description:
          "Refine timing, mood, and direction while keeping the best parts of each generation.",
        icon: imgCrop,
        inset: "20% 21.67% 24% 22.33%",
      },
      {
        title: "Export for every channel",
        description:
          "Create audio that fits short-form content, ads, product demos, and presentations.",
        icon: imgMovie,
        inset: "18% 18% 18% 18%",
      },
    ],
    steps: [
      {
        number: "1",
        title: "Set the mood",
        description: "Choose a vibe or musical direction",
        rotate: -15,
        leftOffset: 34,
        topOffset: 32,
        background: "#8c8c8c",
      },
      {
        number: "2",
        title: "Write your prompt!",
        description: "Describe the sound you need",
        rotate: 4.99,
        leftOffset: 0,
        topOffset: -6,
        background: "#9b9b9b",
      },
      {
        number: "3",
        title: "Generate variations!",
        description: "Try different directions quickly",
        rotate: -7.56,
        leftOffset: -6,
        topOffset: -16,
        background: "#8c8c8c",
      },
      {
        number: "4",
        title: "Download!",
        description: "Export your finished track",
        rotate: 4.11,
        leftOffset: 0,
        topOffset: -28,
        background: "#9b9b9b",
      },
    ],
    startUsingTitle: "Start Using MusicGen",
    startUsingDescription:
      "Describe the kind of music you need, choose your generative model, and produce polished audio fast - no specialist setup required.",
    assetDescription: "Everything you need for your audio and more.",
    previewLabel: "AUDIO PREVIEW PLACEHOLDER",
  },
  GraphicGen: {
    heroTitle: "GraphicGen",
    heroDescription:
      "Generate standout graphics in seconds. Write a prompt, upload a reference, and create polished visual assets with AI-powered tools.",
    madeWithTitle: "Made with GraphicGen",
    madeWithDescription: (
      <>
        One place. Every tool. Endless design possibilities. Start from a concept,
        a reference, or an existing asset and build polished graphics fast.
      </>
    ),
    uspItems: [
      {
        title: "Transform prompts into graphics",
        description:
          "Generate mockups, campaign visuals, and design-ready concepts from a simple prompt.",
        icon: imgAiVideo,
        inset: "20% 21.67% 24% 22.33%",
      },
      {
        title: "Edit & control your outputs",
        description:
          "Tweak compositions and visual details without rebuilding the whole asset from scratch.",
        icon: imgCrop,
        inset: "20% 21.67% 24% 22.33%",
      },
      {
        title: "Export for every use case",
        description:
          "Prepare assets for social, web, pitches, mockups, and design presentations with ease.",
        icon: imgMovie,
        inset: "18% 18% 18% 18%",
      },
    ],
    steps: [
      {
        number: "1",
        title: "Choose a concept",
        description: "Start from a prompt or a visual reference",
        rotate: -15,
        leftOffset: 34,
        topOffset: 32,
        background: "#8c8c8c",
      },
      {
        number: "2",
        title: "Write your prompt!",
        description: "Describe the graphic you want",
        rotate: 4.99,
        leftOffset: 0,
        topOffset: -6,
        background: "#9b9b9b",
      },
      {
        number: "3",
        title: "Refine the direction!",
        description: "Adjust the style and details",
        rotate: -7.56,
        leftOffset: -6,
        topOffset: -16,
        background: "#8c8c8c",
      },
      {
        number: "4",
        title: "Download!",
        description: "Export your final graphic asset",
        rotate: 4.11,
        leftOffset: 0,
        topOffset: -28,
        background: "#9b9b9b",
      },
    ],
    startUsingTitle: "Start Using GraphicGen",
    startUsingDescription:
      "Describe what you want to create or upload a reference, choose your generative model, and produce professional-quality graphics fast.",
    assetDescription: "Everything you need for your graphics and more.",
    previewLabel: "GRAPHIC PREVIEW PLACEHOLDER",
  },
};

const heroCards = [
  {
    image: img03PanRightVerySlowly1,
    width: 237.205,
    height: 133.808,
    wrapperWidth: 269.599,
    wrapperHeight: 210.79,
    rotate: -21.29,
    left: -34,
    top: 124.44,
  },
  {
    image: img05SlimeCoversTheWholeHydrant1,
    width: 133.808,
    height: 237.205,
    wrapperWidth: 245.845,
    wrapperHeight: 271.016,
    rotate: -35.09,
    left: -323,
    top: 249.44,
  },
  {
    image: img01ThePlushDoesAVictoriousGrowlAndWa1,
    width: 133.808,
    height: 237.205,
    wrapperWidth: 177.095,
    wrapperHeight: 258.58,
    rotate: -11.13,
    left: 305.84,
    top: 7.58,
  },
  {
    image: img06HeSlowlyLooksUpAndDownSubtleMove1,
    width: 243.288,
    height: 136.849,
    wrapperWidth: 243.288,
    wrapperHeight: 136.849,
    rotate: 0,
    left: 600,
    top: 38.44,
    active: true,
  },
  {
    image: img04PromptDetailsBasePrompt1,
    width: 137.76,
    height: 247.968,
    wrapperWidth: 188.477,
    wrapperHeight: 272.026,
    rotate: 12.58,
    left: 948,
    top: 0,
  },
  {
    image: img10ASafeForWorkClipOfTheBallerinaW1,
    width: 136.849,
    height: 243.288,
    wrapperWidth: 220.112,
    wrapperHeight: 277.249,
    rotate: 22.69,
    left: 1244,
    top: 92.44,
  },
  {
    image: img08KnightScansTheBaguetteOneTimeAndT1,
    width: 243.288,
    height: 136.849,
    wrapperWidth: 278.024,
    wrapperHeight: 250.522,
    rotate: 34.47,
    left: 1485,
    top: 286.44,
  },
];

const activeHeroCard = heroCards.find((card) => card.active) ?? heroCards[3];
const heroModelsGap = 126;
const heroCollageHeight = 540;
const modelLogosOffsetTop =
  activeHeroCard.top + activeHeroCard.height + heroModelsGap - heroCollageHeight;

const optionBModelRows = [
  [
    { type: "image" as const, src: imgOpenAiLogo1, alt: "OpenAI", width: 88.5, height: 24 },
    { type: "image" as const, src: imgGroup27392, alt: "Luma AI", width: 96.5, height: 24 },
    { type: "glyph" as const, src: imgVector, alt: "Google" },
    { type: "text" as const, label: "Veo" },
    { type: "glyph" as const, src: imgVector, alt: "Google" },
    { type: "text" as const, label: "Nano Banana" },
    { type: "seedream" as const, src: imgGroup27390, label: "Seedream" },
  ],
  [
    { type: "image" as const, src: imgKling, alt: "Kling", width: 95.25, height: 24 },
    { type: "image" as const, src: imgElevenlabsLogoBlack1, alt: "ElevenLabs", width: 115.5, height: 24 },
    { type: "mixed" as const, icon: imgFlux1, label: "Flux" },
    { type: "mixed" as const, icon: imgMinimax1, label: "Minimax" },
  ],
] as const;

const optionBHeroRows = [
  [
    { src: optionBHeroLoopLeft, alt: "Autoplay edge preview", width: 42, objectPosition: "18% center", bleedLeft: 18 },
    { src: optionBLoopCharacter, alt: "Autoplay character preview", width: 89, objectPosition: "center center" },
    { src: optionBLoopEye, alt: "Autoplay eye preview", width: 176, objectPosition: "center center" },
    { src: optionBLoopProduct, alt: "Autoplay product preview", width: 281, objectPosition: "center 42%" },
    { src: optionBLoopDrink, alt: "Autoplay drink preview", width: 96, objectPosition: "center center" },
    { src: optionBLoopEarbuds, alt: "Autoplay earbuds preview", width: 173, objectPosition: "center center" },
    { src: optionBHeroLoopRight, alt: "Autoplay edge preview", width: 46, objectPosition: "84% center", bleedRight: 18 },
  ],
  [
    { src: optionBLoopPoster, alt: "Autoplay poster preview", width: 84, objectPosition: "center center" },
    { src: optionBLoopPlane, alt: "Autoplay aircraft preview", width: 193, objectPosition: "center center" },
    { src: optionBLoopWarrior, alt: "Autoplay warrior preview", width: 197, objectPosition: "center center" },
    { src: optionBHeroLoopMain, alt: "Autoplay portrait preview", width: 96, objectPosition: "44% center" },
    { src: optionBLoopPortrait, alt: "Autoplay face preview", width: 172, objectPosition: "center center" },
    { src: optionBLoopAction, alt: "Autoplay action preview", width: 177, objectPosition: "center center" },
  ],
] as const;

const optionCHeroCards = [
  { src: optionBLoopPlane, alt: "Autoplay aircraft preview", left: 40, top: 164, width: 206, height: 118, rotate: -1.2, objectPosition: "center center" },
  { src: optionBLoopDrink, alt: "Autoplay abstract preview", left: 52, top: 286, width: 92, height: 126, rotate: -0.8, objectPosition: "center center" },
  { src: optionBHeroLoopLeft, alt: "Autoplay space preview", left: 104, top: 396, width: 108, height: 62, rotate: 0.5, objectPosition: "center center" },
  { src: optionBLoopAction, alt: "Autoplay cinematic preview", left: 154, top: 76, width: 210, height: 110, rotate: -0.6, objectPosition: "center center" },
  { src: optionBLoopWarrior, alt: "Autoplay warrior preview", left: 1018, top: 80, width: 82, height: 102, rotate: 0.8, objectPosition: "center center" },
  { src: optionBLoopCharacter, alt: "Autoplay plush preview", left: 1146, top: 92, width: 124, height: 168, rotate: 0.3, objectPosition: "center center" },
  { src: optionBLoopPoster, alt: "Autoplay waterfront preview", left: 1170, top: 250, width: 88, height: 112, rotate: -0.4, objectPosition: "center center" },
  { src: optionBLoopEye, alt: "Autoplay neon preview", left: 1024, top: 304, width: 162, height: 156, rotate: -0.8, objectPosition: "center center" },
] as const;

const uspItems = [
  {
    title: "Transform text into video",
    description:
      "Pick a preset for cinematic quality or type what you're vision-our 'Enhance prompt' tool perfects the details.",
    icon: imgAiVideo,
    inset: "20% 21.67% 24% 22.33%",
  },
  {
    title: "Edit & control your videos",
    description:
      "Tweak lighting, swap subjects, and more-no need to regenerate from scratch. Keep what's working and fix what isn't.",
    icon: imgCrop,
    inset: "20% 21.67% 24% 22.33%",
  },
  {
    title: "Resize for every platform",
    description:
      "Export your video for TikTok, YouTube, Instagram, or presentations without losing quality or starting over.",
    icon: imgMovie,
    inset: "18% 18% 18% 18%",
  },
];

const steps = [
  {
    number: "1",
    title: 'Select "Start frame"',
    description: "Upload an image or generate one!",
    rotate: -15,
    leftOffset: 34,
    topOffset: 32,
    background: "#8c8c8c",
  },
  {
    number: "2",
    title: "Write your prompt!",
    description: "Type a text prompt",
    rotate: 4.99,
    leftOffset: 0,
    topOffset: -6,
    background: "#9b9b9b",
  },
  {
    number: "3",
    title: "Select a preset!",
    description: "Use one our curated presets to maximize results",
    rotate: -7.56,
    leftOffset: -6,
    topOffset: -16,
    background: "#8c8c8c",
  },
  {
    number: "4",
    title: "Download!",
    description: "Download, extend and refine your project!",
    rotate: 4.11,
    leftOffset: 0,
    topOffset: -28,
    background: "#9b9b9b",
  },
];

const categories = [
  { label: "Photos", image: imgRectangle10926 },
  { label: "Videos", image: imgRectangle10931 },
  { label: "Video templates", image: imgRectangle10935 },
  { label: "Music", image: imgRectangle10939, waveform: true },
  { label: "Graphics", image: imgRectangle10942 },
  { label: "Sound effects", image: imgRectangle10943, waveform: true },
  { label: "Graphics Templates", image: imgRectangle10931 },
  { label: "Fonts", image: imgRectangle10956 },
  { label: "3D", image: imgRectangle10958 },
  { label: "Presentation Templates", image: imgRectangle10959 },
  { label: "Add-ons", image: imgRectangle10964 },
  { label: "Web Templates", image: imgRectangle10967 },
];

const faqs = [
  "What is Envato",
  "Does Envato Elements have the same items as Envato Market?",
  "How does licensing on Envato Elements work?",
  "Do any limits apply to downloads?",
  "Can I get support for items on Envato Elements?",
  "Can I cancel or upgrade any time?",
];

const footerLinks = [
  "About Envato",
  "Plans & Pricing",
  "License Terms",
  "Terms & Conditions",
  "Privacy Policy",
  "Cookies",
  "Help",
  "Do not sell or share my personal information",
];

const pricingPlans = [
  {
    name: "Core",
    price: "$16.50",
    cadence: "/month",
    billing: ["billed annually,", "or monthly for $39"],
    features: [
      {
        icon: "check" as const,
        title: "Unlimited downloads of 26+ million creative assets:",
        bullets: [
          "Stock Video & Photos",
          "Video Templates",
          "Music & Sound Effects",
          "Design Templates",
          "Graphics & 3D",
          "Fonts & add-ons",
          "& more",
        ],
      },
      {
        icon: "ai" as const,
        title: "10 AI generations per month across",
        subtitle: "our AI toolkit",
      },
      {
        icon: "check" as const,
        title: "Lifetime commercial license",
        subtitle: "for all creative assets and AI generations",
      },
    ],
  },
  {
    name: "Plus",
    price: "$39",
    cadence: "/month",
    billing: ["billed annually,", "or monthly for $59"],
    features: [
      {
        icon: "check" as const,
        title: "Everything in Core",
      },
      {
        icon: "ai" as const,
        title: "100 AI generations per month",
        subtitle: "across our AI toolkit:",
        bullets: [
          "AI image generation & editing",
          "AI video generation & editing",
          "AI voice over",
          "AI music & sound effects generation",
          "AI graphics & mockup generation",
          "& more",
        ],
      },
    ],
  },
  {
    name: "Ultimate",
    price: "$109",
    cadence: "/month",
    billing: ["billed annually,", "or monthly for $169"],
    features: [
      {
        icon: "check" as const,
        title: "Everything in Plus",
      },
      {
        icon: "ai" as const,
        badge: "Unlimited",
        title: "AI generations per month",
        subtitle: "across our AI toolkit",
      },
    ],
  },
] as const;

function textStyle(size: number, weight: 400 | 500 | 600 | 700, color: string): CSSProperties {
  return {
    color,
    fontFamily: baseFont,
    fontSize: size,
    fontStyle: "normal",
    fontWeight: weight,
    lineHeight: size >= 30 ? 1 : 1.5,
    margin: 0,
  };
}

function CTAButton({
  label,
  pill = false,
  width,
  darkText = true,
  height = 48,
}: {
  label: string;
  pill?: boolean;
  width?: number;
  darkText?: boolean;
  height?: number;
}) {
  return (
    <button
      type="button"
      style={{
        alignItems: "center",
        background: colors.accent,
        border: "none",
        borderRadius: pill ? 48 : 4,
        color: darkText ? colors.black : colors.white,
        cursor: "pointer",
        display: "inline-flex",
        fontFamily: baseFont,
        fontSize: height >= 48 ? 16 : 14,
        fontWeight: 600,
        height,
        justifyContent: "center",
        letterSpacing: height >= 48 ? 0 : 0.28,
        minWidth: width,
        padding: height >= 48 ? "8px 16px" : "14px 16px",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  );
}

function HeaderLink({ label }: { label: string }) {
  return <button type="button" style={{ ...textStyle(14, 400, "#8c8c8c"), background: "transparent", border: "none", cursor: "pointer", padding: 0 }}>{label}</button>;
}

function ToolChip({
  label,
  icon,
  active = false,
  videoIcon = false,
  onClick,
}: {
  label: string;
  icon: string;
  active?: boolean;
  videoIcon?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        alignItems: "center",
        backdropFilter: "blur(10px)",
        background: active ? "rgba(102,102,102,0.2)" : "transparent",
        border: `${active ? 2 : 1}px solid ${colors.border}`,
        borderRadius: 48,
        color: active ? colors.black : colors.text,
        cursor: "pointer",
        display: "inline-flex",
        gap: 4,
        height: 32,
        padding: "8px 12px",
      }}
    >
      <span
        style={{
          display: "inline-flex",
          height: 16,
          alignItems: "center",
          justifyContent: "center",
          width: videoIcon ? 24 : 16,
        }}
      >
        <img
          alt=""
          src={videoIcon ? heroVideoIcon : icon}
          style={{
            display: "block",
            height: videoIcon ? "auto" : "100%",
            maxHeight: videoIcon ? "100%" : undefined,
            objectFit: "contain",
            maxWidth: "100%",
            width: videoIcon ? "100%" : "100%",
          }}
        />
      </span>
      <span style={textStyle(14, 400, active ? colors.black : colors.text)}>{label}</span>
    </button>
  );
}

function HeroGlyph() {
  return <HeroGlyphContent title="VideoGen" description="From idea to video in seconds. Write a prompt, upload an image from your gallery or create one with our AI tools, and generate high-quality content with the best generative models." />;
}

function HeroGlyphContent({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          height: 90,
          justifyContent: "center",
          width: 138,
        }}
      >
        <img
          alt=""
          src={heroVideoIcon}
          style={{
            display: "block",
            height: "auto",
            maxWidth: "100%",
            width: 136,
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, textAlign: "center", width: 690 }}>
        <p style={{ ...textStyle(72, 700, colors.title), lineHeight: 1 }}>{title}</p>
        <p style={{ ...textStyle(18, 400, colors.text), lineHeight: 1.5 }}>{description}</p>
      </div>
    </div>
  );
}

function ModelLogos() {
  return (
    <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: 18 }}>
      <p style={{ ...textStyle(18, 500, colors.text) }}>Powered by leading AI models</p>
      <div style={{ alignItems: "center", display: "flex", gap: 24 }}>
        {modelRows.top.map((item, index) => (
          <div key={index} style={{ alignItems: "center", display: "flex", gap: 24 }}>
            {item.type === "image" && (
              <img alt={item.alt} src={item.src} style={{ display: "block", height: 24, width: item.width }} />
            )}
            {item.type === "text" && (
              <span style={{ ...textStyle(18, 500, colors.text), whiteSpace: "nowrap" }}>{item.label}</span>
            )}
            {item.type === "mixed" && (
              <>
                <img alt="" src={item.icon} style={{ display: "block", height: 18, width: 18 }} />
                <span style={{ ...textStyle(18, 500, colors.text), whiteSpace: "nowrap" }}>{item.label}</span>
              </>
            )}
            {item.type === "seedream" && (
              <div style={{ alignItems: "center", display: "flex", gap: 8 }}>
                <img alt="" src={item.src} style={{ display: "block", height: 18, width: 18 }} />
                <span style={{ ...textStyle(14, 500, colors.text) }}>Seedream</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{ alignItems: "center", display: "flex", gap: 24 }}>
        {modelRows.bottom.map((item, index) => (
          <div key={index} style={{ alignItems: "center", display: "flex", gap: 8 }}>
            {item.type === "image" && (
              <img alt={item.alt} src={item.src} style={{ display: "block", height: 24, width: item.width }} />
            )}
            {item.type === "mixed" && (
              <>
                <img alt="" src={item.icon} style={{ display: "block", height: 24, width: 24 }} />
                <span style={{ ...textStyle(18, 500, colors.text), whiteSpace: "nowrap" }}>{item.label}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function OptionBModelStrip() {
  const renderItem = (item: (typeof optionBModelRows)[number][number], index: number) => {
    if (item.type === "image") {
      return (
        <img
          key={`${item.alt}-${index}`}
          alt={item.alt}
          src={item.src}
          style={{ display: "block", height: item.height, width: item.width }}
        />
      );
    }

    if (item.type === "glyph") {
      return (
        <img
          key={`${item.alt}-${index}`}
          alt=""
          src={item.src}
          style={{ display: "block", height: 18, width: 18 }}
        />
      );
    }

    if (item.type === "text") {
      return (
        <span key={`${item.label}-${index}`} style={{ ...textStyle(18, 500, colors.text), lineHeight: 1, whiteSpace: "nowrap" }}>
          {item.label}
        </span>
      );
    }

    if (item.type === "seedream") {
      return (
        <div key={`${item.label}-${index}`} style={{ alignItems: "center", display: "inline-flex", gap: 8 }}>
          <img alt="" src={item.src} style={{ display: "block", height: 18, width: 18 }} />
          <span style={{ ...textStyle(14, 500, colors.text), lineHeight: 1, whiteSpace: "nowrap" }}>{item.label}</span>
        </div>
      );
    }

    return (
      <div key={`${item.label}-${index}`} style={{ alignItems: "center", display: "inline-flex", gap: 8 }}>
        <img alt="" src={item.icon} style={{ display: "block", height: 24, width: 24 }} />
        <span style={{ ...textStyle(18, 500, colors.text), lineHeight: 1, whiteSpace: "nowrap" }}>{item.label}</span>
      </div>
    );
  };

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        margin: "0 auto",
        width: "fit-content",
      }}
    >
      <div style={{ alignItems: "center", display: "flex", gap: 34, justifyContent: "center" }}>
        {optionBModelRows[0].map((item, index) => renderItem(item, index))}
      </div>
      <div style={{ alignItems: "center", display: "flex", gap: 42, justifyContent: "center" }}>
        {optionBModelRows[1].map((item, index) => renderItem(item, optionBModelRows[0].length + index))}
      </div>
    </div>
  );
}

function OptionBHeroMedia() {
  const renderTile = (
    tile: (typeof optionBHeroRows)[number][number],
    key: string,
  ) => (
    <div
      key={key}
      style={{
        borderRadius: 14,
        flexBasis: 0,
        flexGrow: tile.width,
        height: 130,
        marginLeft: "bleedLeft" in tile ? -tile.bleedLeft : 0,
        marginRight: "bleedRight" in tile ? -tile.bleedRight : 0,
        minWidth: 0,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        alt={tile.alt}
        src={tile.src}
        style={{
          display: "block",
          height: "100%",
          objectFit: "cover",
          objectPosition: tile.objectPosition,
          width: "100%",
        }}
      />
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        margin: "0 auto",
        padding: "0 10px",
        width: pageWidth,
      }}
    >
      <div style={{ display: "flex", gap: 12, overflow: "hidden", width: "100%" }}>
        {optionBHeroRows[0].map((tile, index) => renderTile(tile, `top-${index}`))}
      </div>
      <div style={{ display: "flex", gap: 12, overflow: "hidden", paddingLeft: 28, width: "100%" }}>
        {optionBHeroRows[1].map((tile, index) => renderTile(tile, `bottom-${index}`))}
      </div>
    </div>
  );
}

function OptionBHero({
  title,
  description,
  selectedTool,
}: {
  title: string;
  description: string;
  selectedTool: ToolLabel;
}) {
  const activeChip = toolChips.find((chip) => chip.label === selectedTool) ?? toolChips[2];
  const activeIcon = activeChip.videoIcon ? heroVideoIcon : activeChip.icon;

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        width: pageWidth,
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          height: 88,
          justifyContent: "center",
          width: 88,
        }}
      >
        <img alt="" src={activeIcon} style={{ display: "block", height: "auto", maxHeight: 88, maxWidth: "100%", width: "100%" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 12, textAlign: "center" }}>
        <p style={{ ...textStyle(80, 700, colors.black), lineHeight: 0.94, maxWidth: 980 }}>
          {`Reinvent the way you create with ${title}`}
        </p>
        <p style={{ ...textStyle(18, 400, colors.text), lineHeight: 1.5, margin: "0 auto", maxWidth: 760 }}>
          {description}
        </p>
      </div>
      <div style={{ marginTop: 28 }}>
        <OptionBModelStrip />
      </div>
      <div style={{ alignItems: "center", display: "flex", gap: 16, marginTop: 28 }}>
        <CTAButton label="Start creating" pill={true} width={172} />
        <button
          type="button"
          style={{
            alignItems: "center",
            background: "rgba(255,255,255,0.72)",
            border: "1px solid #cfcfcf",
            borderRadius: 999,
            color: colors.black,
            cursor: "pointer",
            display: "inline-flex",
            fontFamily: baseFont,
            fontSize: 16,
            fontWeight: 500,
            height: 48,
            justifyContent: "center",
            padding: "8px 20px",
            whiteSpace: "nowrap",
          }}
        >
          Explore plans
        </button>
      </div>
      <div style={{ marginTop: 44, width: "100%" }}>
        <OptionBHeroMedia />
      </div>
    </div>
  );
}

function OptionCHeroStage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        borderRadius: 18,
        height: 540,
        margin: "0 auto",
        overflow: "hidden",
        position: "relative",
        width: 1360,
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          left: "50%",
          position: "absolute",
          textAlign: "center",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 620,
          zIndex: 2,
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            height: 72,
            justifyContent: "center",
            width: 108,
          }}
        >
          <img
            alt=""
            src={heroVideoIcon}
            style={{
              display: "block",
              height: "auto",
              maxWidth: "100%",
              width: 108,
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 10 }}>
          <p style={{ ...textStyle(72, 700, colors.title), lineHeight: 1 }}>{title}</p>
          <p style={{ ...textStyle(18, 400, colors.text), lineHeight: 1.5 }}>{description}</p>
        </div>
      </div>
      {optionCHeroCards.map((card) => (
        <div
          key={`${card.src}-${card.left}-${card.top}`}
          style={{
            borderRadius: 10,
            boxShadow: "0 12px 28px rgba(0,0,0,0.26)",
            height: card.height,
            left: card.left,
            overflow: "hidden",
            position: "absolute",
            top: card.top,
            transform: `rotate(${card.rotate}deg)`,
            width: card.width,
            zIndex: 1,
          }}
        >
          <img
            alt={card.alt}
            src={card.src}
            style={{
              display: "block",
              height: "100%",
              objectFit: "cover",
              objectPosition: card.objectPosition,
              width: "100%",
            }}
          />
        </div>
      ))}
    </div>
  );
}

function HeroCollage() {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const featuredCardIndex = hoveredCardIndex ?? heroCards.findIndex((card) => card.active);

  return (
    <div
      style={{
        height: 540,
        margin: "0 auto",
        overflow: "hidden",
        position: "relative",
        width: pageWidth,
      }}
      onMouseLeave={() => setHoveredCardIndex(null)}
    >
      {heroCards.map((card, index) => {
        const isFeatured = index === featuredCardIndex;

        return (
        <div
          key={`${card.image}-${card.left}`}
          onMouseEnter={() => setHoveredCardIndex(index)}
          style={{
            alignItems: "center",
            cursor: "pointer",
            display: "flex",
            height: card.wrapperHeight,
            justifyContent: "center",
            left: card.left,
            position: "absolute",
            top: card.top,
            width: card.wrapperWidth,
            zIndex: isFeatured ? 2 : 1,
          }}
        >
          <div
            style={{
              border: isFeatured ? `1px solid ${colors.accent}` : "none",
              borderRadius: 12,
              boxShadow: isFeatured ? "0 8px 18px rgba(0,0,0,0.12)" : "none",
              height: card.height,
              overflow: "hidden",
              position: "relative",
              transform: `translateY(${isFeatured ? -2 : 0}px) rotate(${card.rotate}deg)`,
              transformOrigin: "center center",
              transition:
                "transform 320ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 320ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 220ms ease",
              width: card.width,
            }}
          >
            <img
              alt=""
              src={card.image}
              style={{
                display: "block",
                height: "100%",
                objectFit: "cover",
                width: "100%",
              }}
            />
            {isFeatured && (
              <div
                style={{
                  background: "rgba(0,0,0,0.2)",
                  inset: 0,
                  position: "absolute",
                  transition: "opacity 220ms ease",
                }}
              />
            )}
            <div
              style={{
                left: "50%",
                opacity: isFeatured ? 1 : 0,
                pointerEvents: "none",
                position: "absolute",
                top: "50%",
                transform: `translate(-50%, -50%) scale(${isFeatured ? 1 : 0.92})`,
                transition:
                  "opacity 220ms ease, transform 320ms cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
            >
              <div
                style={{
                  backdropFilter: "blur(10px)",
                  background: "rgba(25,25,25,0.5)",
                  borderRadius: 50,
                  boxShadow: isFeatured ? "0 8px 18px rgba(0,0,0,0.14)" : "none",
                  color: colors.white,
                  padding: "6px 16px",
                  whiteSpace: "nowrap",
                  ...textStyle(13, 400, colors.white),
                }}
              >
                Recreate
              </div>
            </div>
          </div>
        </div>
      )})}
    </div>
  );
}

function USPIcon({ icon, inset }: { icon: string; inset: string }) {
  return (
    <div style={{ height: 50, position: "relative", width: 50 }}>
      <img alt="" src={imgUiIcons} style={{ display: "block", height: "100%", width: "100%" }} />
      <div style={{ inset, overflow: "hidden", position: "absolute" }}>
        <img alt="" src={icon} style={{ display: "block", height: "100%", width: "100%" }} />
      </div>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
  rotate,
  leftOffset,
  topOffset,
  background,
  isActive,
  onMouseEnter,
}: (typeof steps)[number] & { isActive: boolean; onMouseEnter: () => void }) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      style={{
        alignItems: "flex-start",
        background,
        border: isActive ? `1px solid ${colors.accent}` : "1px solid transparent",
        borderRadius: 12,
        boxShadow: isActive ? "0 8px 18px rgba(0,0,0,0.12)" : "none",
        color: colors.white,
        cursor: "pointer",
        display: "flex",
        gap: 16,
        height: 164,
        left: leftOffset + (isActive ? 32 : 0),
        padding: "18px 18px 18px 12px",
        position: "relative",
        top: topOffset,
        transform: `rotate(${rotate}deg)`,
        transition:
          "left 360ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 260ms ease, box-shadow 360ms cubic-bezier(0.2, 0.8, 0.2, 1)",
        width: 290,
        zIndex: isActive ? 2 : 1,
      }}
    >
      <div
        style={{
          ...textStyle(104, 700, colors.white),
          fontFamily: baseFont,
          lineHeight: 1,
          width: 64,
        }}
      >
        {number}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 26 }}>
        <p style={{ ...textStyle(18, 500, colors.white) }}>{title}</p>
        <p style={{ ...textStyle(16, 400, colors.white), maxWidth: 178 }}>{description}</p>
      </div>
    </div>
  );
}

function StepsStack({ items }: { items: PageStep[] }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div
      style={{ position: "relative", width: 368 }}
      onMouseLeave={() => setActiveStep(0)}
    >
      {items.map((step, index) => (
        <StepCard
          key={step.number}
          {...step}
          isActive={index === activeStep}
          onMouseEnter={() => setActiveStep(index)}
        />
      ))}
    </div>
  );
}

function Waveform() {
  return (
    <div
      aria-hidden="true"
      style={{
        alignItems: "end",
        display: "flex",
        gap: 2,
        height: 24,
        left: "50%",
        position: "absolute",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: 64,
      }}
    >
      {[10, 16, 14, 10, 8, 16, 24, 18, 10, 12, 16, 18, 22, 17, 18, 14, 18, 19, 12].map(
        (height, index) => (
          <span
            key={index}
            style={{
              background: colors.white,
              borderRadius: 2,
              display: "block",
              height,
              width: 1.8,
            }}
          />
        ),
      )}
    </div>
  );
}

function CategoryCard({
  label,
  image,
  waveform = false,
}: {
  label: string;
  image: string;
  waveform?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: 216,
      }}
    >
      <div
        style={{
          borderRadius: 12,
          height: 216,
          overflow: "hidden",
          position: "relative",
          width: 216,
        }}
      >
        <img
          alt=""
          src={image}
          style={{
            display: "block",
            height: "100%",
            objectFit: "cover",
            width: "100%",
          }}
        />
        {waveform && <Waveform />}
      </div>
      <p
        style={{
          ...textStyle(16, 500, colors.black),
        }}
      >
        {label}
      </p>
    </div>
  );
}

function MiniToolCard({
  icon,
  label,
  rotate,
  size,
  zIndex = 1,
}: {
  icon: string;
  label: string;
  rotate: number;
  size: number;
  zIndex?: number;
}) {
  const borderRadius = Math.round(size * 0.079);
  const artworkInsets =
    label === "VoiceGen"
      ? { bottom: "8.33%", left: "20.83%", right: "21.42%", top: "8.33%" }
      : label === "ImageEdit"
        ? { bottom: "12.15%", left: "8.33%", right: "8.33%", top: "8.33%" }
        : label === "ImageGen"
          ? { bottom: "11.38%", left: "8.33%", right: "8.33%", top: "16.67%" }
          : { bottom: "20.24%", left: "8.33%", right: "8.33%", top: "16.67%" };

  return (
    <div
      style={{
        alignItems: "center",
        border: `1px solid ${colors.border}`,
        borderRadius,
        height: size,
        overflow: "hidden",
        position: "relative",
        transform: `rotate(${rotate}deg)`,
        width: size,
        zIndex,
      }}
    >
      <div
        style={{
          bottom: artworkInsets.bottom,
          left: artworkInsets.left,
          position: "absolute",
          right: artworkInsets.right,
          top: artworkInsets.top,
        }}
      >
        <img
          alt={label}
          src={icon}
          style={{
            display: "block",
            height: "100%",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}

function FAQRow({ label }: { label: string }) {
  return (
    <div style={{ borderBottom: "1px solid #383838", padding: "16px 0" }}>
      <div style={{ alignItems: "center", display: "flex", gap: 8 }}>
        <p style={{ ...textStyle(16, 500, colors.black), flex: 1 }}>{label}</p>
        <img alt="" src={imgChevronDown} style={{ display: "block", height: 24, width: 24 }} />
      </div>
    </div>
  );
}

function Divider() {
  return (
    <span
      style={{
        alignItems: "center",
        display: "inline-flex",
        height: 16,
        justifyContent: "center",
        width: 16,
      }}
    >
      <img
        alt=""
        src={imgLine104}
        style={{
          display: "block",
          height: 1,
          transform: "rotate(90deg)",
          transformOrigin: "center",
          width: 16,
        }}
      />
    </span>
  );
}

function IndividualTabIcon() {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 24 24" width="16">
      <circle cx="12" cy="8" fill="currentColor" r="4" />
      <path d="M4 21c0-4.42 3.58-7 8-7s8 2.58 8 7" fill="currentColor" />
    </svg>
  );
}

function TeamsTabIcon() {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 24 24" width="16">
      <circle cx="9" cy="8" fill="currentColor" r="3.5" />
      <circle cx="16.5" cy="9" fill="currentColor" opacity="0.8" r="2.75" />
      <path d="M3 20c0-3.5 2.9-5.5 6-5.5s6 2 6 5.5" fill="currentColor" />
      <path d="M13 20c0-2.6 2.1-4.2 4.5-4.2 1.44 0 2.77.48 3.5 1.49V20" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

function CheckFeatureIcon() {
  return (
    <svg aria-hidden="true" height="18" viewBox="0 0 20 20" width="18">
      <circle cx="10" cy="10" fill="none" r="8.5" stroke={colors.black} strokeWidth="1.5" />
      <path d="M6.4 10.2 8.9 12.7 13.7 7.8" fill="none" stroke={colors.black} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function AiFeatureIcon() {
  return (
    <svg aria-hidden="true" height="18" viewBox="0 0 20 20" width="18">
      <path d="M10 1.5 11.55 7 17 8.5 11.55 10 10 15.5 8.45 10 3 8.5 8.45 7 10 1.5Z" fill={colors.black} />
      <path d="M15.4 11.8 16 13.9 18.1 14.5 16 15.1 15.4 17.2 14.8 15.1 12.7 14.5 14.8 13.9 15.4 11.8Z" fill={colors.black} />
    </svg>
  );
}

function PricingFeature({
  feature,
}: {
  feature: (typeof pricingPlans)[number]["features"][number];
}) {
  return (
    <div style={{ alignItems: "flex-start", display: "flex", gap: 8 }}>
      <div style={{ flexShrink: 0, paddingTop: 2 }}>
        {feature.icon === "check" ? <CheckFeatureIcon /> : <AiFeatureIcon />}
      </div>
      <div style={{ minWidth: 0 }}>
        <p style={{ ...textStyle(16, 600, colors.black) }}>
          {feature.badge ? (
            <span
              style={{
                background: "#ececec",
                borderRadius: 999,
                display: "inline-block",
                marginRight: 6,
                padding: "1px 8px",
              }}
            >
              {feature.badge}
            </span>
          ) : null}
          {feature.title}
        </p>
        {feature.subtitle ? (
          <p style={{ ...textStyle(16, 400, colors.black) }}>{feature.subtitle}</p>
        ) : null}
        {feature.bullets ? (
          <div style={{ marginTop: 2 }}>
            {feature.bullets.map((bullet) => (
              <p key={bullet} style={{ ...textStyle(16, 400, colors.black) }}>
                • {bullet}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function PricingCard({ plan }: { plan: (typeof pricingPlans)[number] }) {
  return (
    <div
      style={{
        background: colors.white,
        border: `1px solid ${colors.mutedBorder}`,
        borderRadius: 4,
        minHeight: 470,
        padding: "18px 18px 22px",
        width: 286,
      }}
    >
      <p style={{ ...textStyle(18, 600, colors.black) }}>{plan.name}</p>
      <div style={{ alignItems: "baseline", display: "flex", gap: 4, marginTop: 10 }}>
        <p style={{ ...textStyle(24, 700, colors.black) }}>{plan.price}</p>
        <p style={{ ...textStyle(16, 400, colors.black) }}>{plan.cadence}</p>
      </div>
      <p style={{ ...textStyle(14, 400, colors.text), marginTop: 4 }}>
        {plan.billing[0]}
        <br />
        {plan.billing[1]}
      </p>
      <div style={{ marginTop: 16 }}>
        <CTAButton label="Select" width={250} />
      </div>
      <p style={{ ...textStyle(16, 400, colors.black), marginTop: 18 }}>Includes:</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 12 }}>
        {plan.features.map((feature, index) => (
          <PricingFeature key={`${plan.name}-${index}`} feature={feature} />
        ))}
      </div>
    </div>
  );
}

function PricingModelLogos() {
  return (
    <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: 24 }}>
      <p style={{ ...textStyle(24, 600, colors.black), textAlign: "center" }}>
        Powered by leading AI models
      </p>
      <div style={{ alignItems: "center", display: "flex", gap: 28, justifyContent: "center" }}>
        {modelRows.top.map((item, index) => (
          <div key={index} style={{ alignItems: "center", display: "flex", gap: 8 }}>
            {item.type === "image" ? (
              <img alt={item.alt} src={item.src} style={{ display: "block", height: 24, width: item.width }} />
            ) : null}
            {item.type === "mixed" ? (
              <>
                <img alt="" src={item.icon} style={{ display: "block", height: 18, width: 18 }} />
                <span style={{ ...textStyle(16, 600, colors.black), lineHeight: 1, whiteSpace: "nowrap" }}>{item.label}</span>
              </>
            ) : null}
            {item.type === "seedream" ? (
              <>
                <img alt="" src={item.src} style={{ display: "block", height: 18, width: 18 }} />
                <span style={{ ...textStyle(16, 600, colors.black), lineHeight: 1, whiteSpace: "nowrap" }}>Seedream</span>
              </>
            ) : null}
          </div>
        ))}
      </div>
      <div style={{ alignItems: "center", display: "flex", gap: 28, justifyContent: "center" }}>
        {modelRows.bottom.map((item, index) => (
          <div key={index} style={{ alignItems: "center", display: "flex", gap: 8 }}>
            {item.type === "image" ? (
              <img alt={item.alt} src={item.src} style={{ display: "block", height: 24, width: item.width }} />
            ) : null}
            {item.type === "mixed" ? (
              <>
                <img alt="" src={item.icon} style={{ display: "block", height: 22, width: 22 }} />
                <span style={{ ...textStyle(16, 600, colors.black), lineHeight: 1, whiteSpace: "nowrap" }}>{item.label}</span>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function PricingSection() {
  return (
    <section style={{ fontFamily: baseFont, padding: "72px 0 84px" }}>
      <div style={{ margin: "0 auto", width: 920 }}>
        <p style={{ ...textStyle(24, 700, colors.black), textAlign: "center" }}>
          Unlimited creativity, all in one place
        </p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
          <div
            style={{
              alignItems: "center",
              border: `1px solid ${colors.border}`,
              borderRadius: 999,
              display: "inline-flex",
              gap: 4,
              padding: 4,
            }}
          >
            <button
              type="button"
              style={{
                alignItems: "center",
                background: colors.black,
                border: "none",
                borderRadius: 999,
                color: colors.white,
                cursor: "pointer",
                display: "inline-flex",
                gap: 8,
                height: 40,
                padding: "0 16px",
                ...textStyle(16, 600, colors.white),
              }}
            >
              <IndividualTabIcon />
              <span>Individual</span>
            </button>
            <button
              type="button"
              style={{
                alignItems: "center",
                background: "transparent",
                border: "none",
                borderRadius: 999,
                color: colors.text,
                cursor: "pointer",
                display: "inline-flex",
                gap: 8,
                height: 40,
                padding: "0 16px",
                ...textStyle(16, 600, colors.text),
              }}
            >
              <TeamsTabIcon />
              <span>Teams & Enterprise</span>
            </button>
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: 48 }}>
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <p style={{ ...textStyle(14, 400, colors.text), marginTop: 18, textAlign: "center" }}>
          Price in US Dollars, excludes local tax. Subject to{" "}
          <a href="/" style={{ color: "inherit", textDecoration: "underline" }}>
            Envato&apos;s User Terms
          </a>
          ; including our{" "}
          <a href="/" style={{ color: "inherit", textDecoration: "underline" }}>
            Fair Use Policy
          </a>
          .
        </p>

        <div style={{ marginTop: 28 }}>
          <PricingModelLogos />
        </div>

        <div
          style={{
            alignItems: "center",
            border: `1px solid ${colors.mutedBorder}`,
            borderRadius: 4,
            display: "flex",
            gap: 16,
            height: 64,
            justifyContent: "center",
            margin: "32px auto 0",
            width: 430,
          }}
        >
          <p style={{ ...textStyle(16, 600, colors.black) }}>Students save 30% on the Core Plan.</p>
          <a href="/" style={{ ...textStyle(16, 600, colors.black), textDecoration: "underline" }}>
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  title,
  description,
  titleSize = 36,
  maxWidth = 632,
  trailing,
}: {
  title: string;
  description: ReactNode;
  titleSize?: number;
  maxWidth?: number;
  trailing?: ReactNode;
}) {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        textAlign: "center",
      }}
    >
      <p style={{ ...textStyle(titleSize, 500, colors.title), maxWidth: 620 }}>{title}</p>
      <div style={{ maxWidth }}>
        <p style={{ ...textStyle(16, 400, colors.text) }}>{description}</p>
      </div>
      {trailing}
    </div>
  );
}

function AILandingPagesPage({ heroVariant = "default" }: { heroVariant?: HeroVariant }) {
  const [selectedTool, setSelectedTool] = useState<ToolLabel>("VideoGen");
  const activePage = pageVariants[selectedTool];

  return (
    <div
      style={{
        background: colors.page,
        color: colors.black,
        fontFamily: baseFont,
        margin: "0 auto",
        overflow: "hidden",
        width: pageWidth,
      }}
    >
      <header
        style={{
          alignItems: "center",
          borderBottom: "1px solid #cccccc",
          display: "flex",
          gap: 24,
          height: 56,
          justifyContent: "space-between",
          padding: "0 24px 0 32px",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", gap: 24, minWidth: 0 }}>
          <div style={{ height: 24, position: "relative", width: 105 }}>
            <img alt="" src={imgMark} style={{ display: "block", height: 24, left: 0, position: "absolute", top: 0, width: 21 }} />
            <img alt="Envato" src={imgLogotype} style={{ display: "block", height: 18, left: 21, position: "absolute", top: 2, width: 84 }} />
          </div>
          <nav style={{ alignItems: "center", display: "flex", gap: 24 }}>
            {navItems.map((item) => (
              <HeaderLink key={item} label={item} />
            ))}
          </nav>
        </div>
        <div style={{ alignItems: "center", display: "flex", gap: 16 }}>
          <HeaderLink label="License" />
          <HeaderLink label="Pricing" />
          <CTAButton label="Get unlimited downloads" height={40} />
          <button
            type="button"
            style={{
              alignItems: "center",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "inline-flex",
              height: 40,
              justifyContent: "center",
              padding: 0,
              width: 40,
            }}
          >
            <img alt="" src={imgIcon} style={{ display: "block", height: 24, width: 24 }} />
          </button>
        </div>
      </header>

      <section style={{ padding: heroVariant === "optionB" ? "16px 0 72px" : heroVariant === "optionC" ? "16px 0 64px" : "16px 0 56px", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              alignItems: "center",
              backdropFilter: "blur(10px)",
              display: "inline-flex",
              gap: 8,
              padding: 8,
            }}
          >
            {toolChips.map((chip) => (
              <ToolChip
                key={chip.label}
                {...chip}
                active={chip.label === selectedTool}
                onClick={() => setSelectedTool(chip.label)}
              />
            ))}
          </div>
        </div>
        {heroVariant === "optionB" ? (
          <div style={{ marginTop: 24 }}>
            <OptionBHero
              title={activePage.heroTitle}
              description={activePage.heroDescription}
              selectedTool={selectedTool}
            />
          </div>
        ) : heroVariant === "optionC" ? (
          <>
            <div style={{ marginTop: 24 }}>
              <OptionCHeroStage
                title={activePage.heroTitle}
                description={activePage.heroDescription}
              />
            </div>
            <div style={{ marginTop: 56 }}>
              <ModelLogos />
            </div>
          </>
        ) : (
          <>
            <div style={{ marginTop: 18 }}>
              <HeroGlyphContent
                title={activePage.heroTitle}
                description={activePage.heroDescription}
              />
            </div>
            <div style={{ marginTop: 10 }}>
              <HeroCollage />
            </div>
            <div style={{ marginTop: modelLogosOffsetTop }}>
              <ModelLogos />
            </div>
          </>
        )}
      </section>

      <section style={{ padding: "124px 0 0" }}>
        <SectionHeading
          title={activePage.madeWithTitle}
          titleSize={48}
          description={activePage.madeWithDescription}
        />
        <div
          style={{
            borderRadius: 12,
            height: 586,
            margin: "24px auto 0",
            overflow: "hidden",
            position: "relative",
            width: 1036,
          }}
        >
          <img alt="" src={imgScreenshot20260312At1212192} style={{ display: "block", height: "100%", objectFit: "cover", width: "100%" }} />
          <div
            style={{
              alignItems: "center",
              backdropFilter: "blur(10px)",
              background: "rgba(25,25,25,0.5)",
              borderRadius: 62,
              color: colors.white,
              display: "inline-flex",
              fontFamily: baseFont,
              fontSize: 16,
              fontWeight: 400,
              left: "50%",
              padding: "10px 20px",
              position: "absolute",
              top: "50%",
              transform: "translate(-50%, -50%) rotate(0.66deg)",
            }}
          >
            GIF ANIMATION PLACEHOLDER
          </div>
        </div>
      </section>

      <section style={{ padding: "64px 48px" }}>
        <div style={{ padding: "0 40px" }}>
          <p style={{ ...textStyle(30, 500, colors.text), textAlign: "center" }}>
            Get your ideas moving, fast
          </p>
          <div
            style={{
              display: "grid",
              gap: 40,
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              marginTop: 40,
            }}
          >
            {activePage.uspItems.map((item) => (
              <div key={item.title} style={{ alignItems: "flex-start", display: "flex", gap: 16 }}>
                <USPIcon icon={item.icon} inset={item.inset} />
                <div style={{ display: "flex", flex: 1, flexDirection: "column", gap: 8, minWidth: 0 }}>
                  <p style={{ ...textStyle(24, 500, colors.text) }}>{item.title}</p>
                  <p style={{ ...textStyle(16, 400, colors.text) }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "84px 48px 74px" }}>
        <SectionHeading
          title={activePage.startUsingTitle}
          description={activePage.startUsingDescription}
          trailing={<CTAButton label="Start Creating" pill={true} width={182} />}
        />
        <div style={{ alignItems: "flex-start", display: "flex", gap: 28, marginTop: 48 }}>
          <StepsStack items={activePage.steps} />
          <div
            style={{
              borderRadius: 15,
              height: 590,
              overflow: "hidden",
              position: "relative",
              width: 944,
            }}
          >
            <img alt="" src={img141} style={{ display: "block", height: "100%", objectFit: "cover", width: "100%" }} />
            <div
              style={{
                alignItems: "center",
                backdropFilter: "blur(10px)",
                background: "rgba(25,25,25,0.5)",
                borderRadius: 62,
                color: colors.white,
                display: "inline-flex",
                fontFamily: baseFont,
                fontSize: 16,
                fontWeight: 400,
                left: "50%",
                padding: "12px 20px",
                position: "absolute",
                top: "50%",
                transform: "translate(-50%, -50%) rotate(0.66deg)",
              }}
            >
              {activePage.previewLabel}
            </div>
          </div>
        </div>
      </section>


      <section style={{ padding: "0 52px 60px" }}>
        <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: colors.text }}>
            <p style={{ ...textStyle(30, 500, colors.text), maxWidth: 854 }}>
              Plus get unlimited downloads on 25+ million creative assets.
            </p>
            <p style={{ ...textStyle(16, 400, colors.text), marginTop: 6 }}>
              {activePage.assetDescription}
            </p>
          </div>
          <CTAButton label="Explore now" pill={true} width={160} height={40} />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 28 }}>
          {categories.map((category) => (
            <CategoryCard key={category.label} {...category} />
          ))}
        </div>
      </section>

      <PricingSection />

      <section style={{ padding: "64px 320px", position: "relative" }}>
        <div style={{ display: "grid", gap: 56, gridTemplateColumns: "160px 1fr" }}>
          <p style={{ ...textStyle(30, 500, colors.black), whiteSpace: "nowrap" }}>
            Still have Qs
          </p>
          <div>
            {faqs.map((faq) => (
              <FAQRow key={faq} label={faq} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "18px 32px 0" }}>
        <div
          style={{
            background: colors.footer,
            borderRadius: 16,
            height: 422,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            alt=""
            src={imgJob1928VideoGenLpFooterBannerDesktop1}
            style={{ display: "block", height: "100%", inset: 0, objectFit: "cover", position: "absolute", width: "100%" }}
          />
          <div style={{ left: 64, position: "absolute", top: 72, width: 778 }}>
            <div style={{ height: 63, position: "relative", width: 206 }}>
              <img alt="" src={imgGroup1} style={{ display: "block", height: 48, left: 0, position: "absolute", top: 8, width: 33 }} />
              <img alt="Envato" src={imgGroup} style={{ display: "block", height: 36, left: 40, position: "absolute", top: 12, width: 166 }} />
            </div>
            <div style={{ marginTop: 10 }}>
              <p style={{ ...textStyle(36, 500, colors.white), lineHeight: 1, maxWidth: 778 }}>
                One subscription.
                <br />
                Unlimited downloads of creative assets.
                <br />
                Access to AI{" "}
                <img
                  alt=""
                  src={imgAiIcon}
                  style={{
                    display: "inline-block",
                    height: 18,
                    marginInline: "4px 1px",
                    transform: "rotate(90deg)",
                    verticalAlign: "middle",
                    width: 18,
                  }}
                />
                tools.
              </p>
              <p style={{ ...textStyle(16, 400, colors.white), marginTop: 18 }}>
                Find everything from photos to fonts, and templates to so much more.
              </p>
              <div style={{ marginTop: 28 }}>
                <CTAButton label="Start now" pill={true} width={152} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: "40px 32px", width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
          <div style={{ alignItems: "center", display: "flex", gap: 16, width: "100%" }}>
            {footerLinks.map((link, index) => (
              <div key={link} style={{ alignItems: "center", display: "flex", flexShrink: 0, gap: 16 }}>
                <a href="/" style={{ ...textStyle(16, 400, colors.black), textDecoration: "none", whiteSpace: "nowrap" }}>
                  {link}
                </a>
                {index < footerLinks.length - 1 && <Divider />}
              </div>
            ))}
          </div>
          <p style={{ ...textStyle(14, 400, colors.text), whiteSpace: "nowrap" }}>
            ©️ 2026 Envato Elements Pty Ltd. Trademarks and brands are the property
            of their respective owners.
          </p>
        </div>
      </footer>
    </div>
  );
}

const meta = {
  title: "Prototypes / AI landing pages",
  component: AILandingPagesPage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof AILandingPagesPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heroVariant: "default",
  },
};

export const OptionB: Story = {
  args: {
    heroVariant: "optionB",
  },
};

export const OptionC: Story = {
  args: {
    heroVariant: "optionC",
  },
};
