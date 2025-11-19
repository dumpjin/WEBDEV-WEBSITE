// Just export a dummy db object so imports don’t break
import * as schema from "./schema";

// Export a fake db object with the same shape if needed
export const db = {
  posts: {
    findFirst: async () => null,
    findMany: async () => [],
    insert: async () => null,
    update: async () => null,
    delete: async () => null,
  },
};

// Export schema as usual
export * as schema from "./schema";
