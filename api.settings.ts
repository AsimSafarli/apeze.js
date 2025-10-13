import type { ApezeSettings } from "@apeze/core";

export const settings: ApezeSettings = {
  api: {
    static: {
      root: "./public",
      prefix: "/",
      maxAge: 100,
      index: ["index.html", "index.htm"],
      extensions: [".html", ".htm"],
      dotfiles: "ignore",
    },
    cors: {
      origin: ["http://localhost:4000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    },

    rateLimit: {
      max: 100,
      window: "1m",
      keyGenerator: (req) => {
        const token = req.headers.get("Authorization");
        return token || req.headers.get("x-forwarded-for") || "anonymous";
      },
    },

    logger: {
      format: "detailed",
      colors: true,
    },

    middlewares: [
      // Custom middlewares here
    ],
  },

  connections: {
    database: {
      type: "sqlite",
      url: "./dev.db",
    },
  },
};

export default settings;
