"use server";

import { signIn } from "@/auth/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/auth/routes";

export const thirdPartyLogin = async (provider: string) => {
  await signIn(provider, {
    callbackUrl: DEFAULT_LOGIN_REDIRECT,
  });
};
