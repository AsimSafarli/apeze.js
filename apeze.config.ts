import { createApezeApp } from "@apeze/core";

const app = await createApezeApp({
  port: 4000,
  pagesDir: "./pages",
  useReactHooks: true,  
  liveReload: true,
});