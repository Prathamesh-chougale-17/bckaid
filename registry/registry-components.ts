import { Registry } from "./schema";

export const ui: Registry = [
  {
    name: "line-animation",
    type: "registry:ui",
    description: "A simple line animation",
    dependencies: ["framer-motion"],
    files: [
      {
        path: "ui/contact-line.tsx",
        type: "registry:ui",
        target: "components/svg-animations/contact-line.tsx",
      },
    ],
  },
];
