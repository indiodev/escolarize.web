import { AuthSignIn, AuthTokenResponse } from "@/models/auth.model";
import { Service } from "@/services";
import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

async function mutator(data: AuthSignIn): Promise<AuthTokenResponse> {
  return Service.auth.signIn(data);
}

interface Props {
  onSuccess: (data: AuthTokenResponse) => void;
  onError: (error: Error | AxiosError) => void;
}

export function useSignInMutation({
  onSuccess,
  onError,
}: Props): UseMutationResult<
  AuthTokenResponse,
  Error | AxiosError,
  AuthSignIn
> {
  return useMutation({
    mutationFn: mutator,
    onSuccess,
    onError,
  });
}
