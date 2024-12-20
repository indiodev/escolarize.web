import { API } from "@/lib/api";
import { Role } from "@/models/auth.model";
import { Store } from "@/models/store.model";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type AuthStoreProps = {
  token?: string;
  access?: Role;
  expiresAt?: string;

  append(payload: { token: string; access: Role; expiresAt?: string }): void;
  clear(): void;
};

export const AuthStore = create<AuthStoreProps>()(
  persist(
    (set) => ({
      token: undefined,
      access: undefined,
      expiresAt: undefined,
      append(payload): void {
        API.defaults.headers.common.Authorization = `Bearer ${payload.token}`;

        set(payload);
      },
      clear(): void {
        set({ token: undefined, access: undefined });
      },
    }),
    { name: Store.AUTH, storage: createJSONStorage(() => sessionStorage) }
  )
);
