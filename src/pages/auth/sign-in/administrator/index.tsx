import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useSignInMutation } from "@/mutation/auth/sign-in.mutation";
import { AuthStore } from "@/store/auth.store";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { type AdminSignIn, AdminSignInSchema } from "./schema";

export function Administrator(): React.ReactElement {
  const [viewPassword, setViewPassword] = React.useState(false);
  const auth = AuthStore();
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<AdminSignIn>({
    resolver: zodResolver(AdminSignInSchema),
    mode: "onSubmit",
  });

  const { status, mutateAsync: signIn } = useSignInMutation({
    onSuccess(data) {
      auth.append({
        token: data.token,
        access: "ADMINISTRATOR",
        expiresAt: data.expires_at,
      });
      navigate("/app/administrator/payment");

      toast({
        title: "Login realizado",
        description: "Seja bem-vindo(a)!",
        className: "bg-green-500 text-white",
      });
    },
    onError(error) {
      if (
        error instanceof AxiosError &&
        error.response?.data.code === "INVALID_CREDENTIAL"
      ) {
        form.setError("password", {
          message: error.response?.data.message,
        });
        return;
      }

      toast({
        title: "Erro ao fazer login",
        description: "Ops, algo deu errado. Tente novamente mais tarde.",
        className: "bg-red-500 text-white",
      });
      console.error(error);
    },
  });

  const onSignIn = form.handleSubmit((data) => {
    signIn({
      access: "ADMINISTRATOR",
      login: data.email,
      password: data.password,
    });
  });

  return (
    <section className="w-auto flex flex-col items-center">
      <h1 className="text-3xl font-bold">Indio SM</h1>
      <div className="py-5 flex flex-col gap-5 w-[32rem]">
        <h2 className="md:text-[1.25rem] lg:text-[1.4rem] text-lg text-left font-medium">
          Acesse sua conta
        </h2>

        <Separator className="w-auto" />

        <Form {...form}>
          <form onSubmit={onSignIn} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                const hasError = !!form.formState.errors?.email?.message;

                return (
                  <FormItem className="group">
                    <div className="flex justify-between">
                      <FormLabel className="text-[1rem]">Email</FormLabel>
                    </div>
                    <FormControl>
                      <Input
                        onChange={(event) => {
                          field.onChange(event.target.value);
                        }}
                        placeholder="email@exemplo.com"
                        {...(hasError && {
                          className: "h-12 w-full border",
                        })}
                        {...(!hasError && {
                          className: "h-12 w-full",
                        })}
                        // {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-right" />
                  </FormItem>
                );
              }}
            />

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => {
                  const hasError = !!form.formState.errors?.password?.message;

                  return (
                    <FormItem className="group">
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <div className="relative flex-1 w-full">
                          <Input
                            placeholder="•••••••••••"
                            {...(hasError && {
                              className: "h-12 w-full border",
                            })}
                            {...(!hasError && {
                              className: "h-12 w-full",
                            })}
                            type={viewPassword ? "text" : "password"}
                            {...field}
                          />
                          {!viewPassword && (
                            <Eye
                              onClick={() => setViewPassword((state) => !state)}
                              className={cn(
                                "cursor-pointer w-6 h-6  absolute right-3 top-1/2 -translate-y-1/2 ",
                                hasError && ""
                              )}
                              strokeWidth={1.5}
                            />
                          )}

                          {viewPassword && (
                            <EyeOff
                              onClick={() => setViewPassword((state) => !state)}
                              className={cn(
                                "cursor-pointer w-6 h-6  absolute right-3 top-1/2 -translate-y-1/2 ",
                                hasError && ""
                              )}
                              strokeWidth={1.5}
                            />
                          )}
                        </div>
                      </FormControl>
                      <FormMessage className="text-right" />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="remember_me"
                render={({ field }) => (
                  <div className="flex justify-between p-2 gap-6">
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-normal text-base">
                          Lembrar informações
                        </FormLabel>
                      </div>
                    </FormItem>

                    <NavLink
                      to="/auth/forgot-password/admin"
                      className="text-base font-semibold hover:underline"
                    >
                      Esqueceu sua senha?
                    </NavLink>
                  </div>
                )}
              />
            </div>

            <Button
              disabled={status === "pending"}
              type="submit"
              className="h-12 w-full"
            >
              {status === "pending" && (
                <LoaderCircle className="w-6 h-6 animate-spin" />
              )}
              {!(status === "pending") && <span>Entrar</span>}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
