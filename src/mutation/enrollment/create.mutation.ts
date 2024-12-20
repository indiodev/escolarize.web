import { Service } from "@/services";
import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

async function mutator(data: unknown): Promise<void> {
  await Service.enrollment.create(data);
}

interface Props {
  onSuccess: () => void;
  onError: (error: Error | AxiosError) => void;
}

export function useEnrollmentCreateMutation({
  onSuccess,
  onError,
}: Props): UseMutationResult<void, Error | AxiosError, unknown> {
  return useMutation({
    mutationFn: mutator,
    onSuccess,
    onError,
  });
}
