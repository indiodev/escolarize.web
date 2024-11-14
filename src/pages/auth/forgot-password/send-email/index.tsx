import { zodResolver } from "@hookform/resolvers/zod";
// import { LoaderCircle } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
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
import { useForm } from "react-hook-form";
import { type SendEmail, SendEmailSchema } from "./schema";
import { useNavigate } from "react-router-dom";

export function SendEmail(): React.ReactElement {
  const navigate = useNavigate();

  const form = useForm<SendEmail>({
    resolver: zodResolver(SendEmailSchema),
    mode: "onSubmit",
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <section className="w-full flex flex-col items-center">
      <h1 className="text-3xl font-bold">Escolarize</h1>
      <div className="py-5 flex flex-col gap-5 w-full sm:max-w-lg">
        <div className="space-y-1">
          <h2 className="text-lg text-left font-medium">Esqueceu a senha?</h2>
          <p className="text-left">
            Não se preocupe! Digite o seu email abaixo, e nós enviaremos um código para ajudar você a recuperar o acesso à sua conta.
          </p>
        </div>

        <Separator className="w-auto" />

        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-8">
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
                      />
                    </FormControl>
                    <FormMessage className="text-right" />
                  </FormItem>
                );
              }}
            />

            <Button
              // disabled={status === "pending"}
              type="button"
              className="h-12 w-full"
              onClick={() => navigate('/auth/forgot-password/verify-token')} // trocar para o onSuccess
            >
              {/* {status === "pending" && (
                <LoaderCircle className="w-6 h-6 animate-spin" />
              )} */}
              {/* {!(status === "pending") && <span>Continue </span>} */}
              <span>Continue </span>
            </Button>
          </form>
        </Form>
      </div>
</section>

  );
}
