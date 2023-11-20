import { createClient } from "@supabase/supabase-js";
import camelcaseKeys from "camelcase-keys";
import type { Database } from "./types";

console.log(import.meta.env)

export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_API_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const TABLE_NAMES = {
  TODO: 'todo'
} as const;

export type Todo = {
  id: string;
  title: string | null;
  isDone: boolean;
  createdAt: string;
}

export const apiTodo = {
  create: async ({ title }: { title: Todo['title'] }) => {
    const { data, error } = await supabase.from(TABLE_NAMES.TODO).insert({ title }).select('*');
    
    if (!data) {
      return { todo: undefined, error };
    }

    return { todo: camelcaseKeys(data, { deep: true }), error };
  },
  read: async () => {
    const { data, error } = await supabase.from(TABLE_NAMES.TODO).select('*');

    if (!data) {
      return { todo: undefined, error };
    }

    return { todo: camelcaseKeys(data, { deep: true }), error };
  },
  update: async ({ id, title, isDone }: { id: Todo['id']; title: Todo['title']; isDone: Todo['isDone'] }) => {
    const { data, error } = await supabase.from(TABLE_NAMES.TODO).update({ title, is_done: isDone }).eq('id', id).select('*');

    if (!data) {
      return { todo: undefined, error };
    }

    return { todo: camelcaseKeys(data, { deep: true }), error };

  },
  delete: async ({ id }: { id: Todo['id'] }) => {
    const {data, error} = await supabase.from(TABLE_NAMES.TODO).delete().eq('id', id).select();

    if (!data) {
      return { todo: undefined, error };
    }

    return { todo: camelcaseKeys(data, { deep: true }), error };
  }
};
