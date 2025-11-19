// Fake in-memory database just to satisfy tRPC + TypeScript.
// NO real database. NO Drizzle. NO Postgres. Zero errors.

import * as schema from "./schema";

export const db = {
  posts: {
    _data: [] as Array<{ id: number; name: string; createdAt: Date; updatedAt: Date }>,

    async findMany() {
      return this._data;
    },

    async findFirst() {
      return this._data[0] ?? null;
    },

    async insert(values: { name: string }) {
      const newPost = {
        id: this._data.length + 1,
        name: values.name,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      this._data.push(newPost);
      return newPost;
    },

    async update(id: number, values: Partial<{ name: string }>) {
      const post = this._data.find((p) => p.id === id);
      if (!post) return null;
      Object.assign(post, values);
      post.updatedAt = new Date();
      return post;
    },

    async delete(id: number) {
      const index = this._data.findIndex((p) => p.id === id);
      if (index === -1) return null;
      const removed = this._data[index];
      this._data.splice(index, 1);
      return removed;
    },
  },
};

export * as schema from "./schema";
