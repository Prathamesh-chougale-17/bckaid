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
  {
    name: "next-auth-config",
    type: "registry:block",
    description: "Next Auth configuration",
    dependencies: ["next-auth@beta"],
    files: [
      {
        path: "block/next-auth/next-auth-config/auth.ts",
        type: "registry:hook",
        target: "auth.ts",
      },
      {
        path: "block/next-auth/next-auth-config/middleware.ts",
        type: "registry:hook",
        target: "middleware.ts",
      },
      {
        path: "block/next-auth/next-auth-config/app/api/auth/[...nextauth]/route.ts",
        type: "registry:hook",
        target: "app/api/auth/[...nextauth]/route.ts",
      },
    ],
  },
];
