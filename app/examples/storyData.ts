import type { SidebarGroup } from "../components/foundation/SidebarNavigation.tsx";

export const foundationSidebarGroups: SidebarGroup[] = [
  {
    label: "Foundation",
    items: [
      { label: "Overview", active: true },
      { label: "Layouts" },
      { label: "Components" },
    ],
  },
  {
    label: "Design Intake",
    items: [
      { label: "Figma Review" },
      { label: "Tokens" },
      { label: "Acceptance Notes" },
    ],
  },
];
