import { InputMask } from "@/components/global/input-mask";
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
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { Address as AddressType, Schema } from "./schema";

export function Address(): React.ReactElement {
  const location = useLocation();
  const navigate = useNavigate();

  const form = useForm<AddressType>({
    resolver: zodResolver(Schema),
    defaultValues: {
      address: { uf: "AM", city: "Benjamin Constant", cep: "69.630-000" },
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    navigate(location.pathname?.replace("/address", "/finish"), {
      state: {
        ...location.state,
        ...data,
      },
    });
  });

  return (
    <section className="w-full h-full p-8 flex flex-col justify-center items-center ">
      <Form {...form}>
        <form
          onSubmit={onSubmit}
          className="space-y-4 container flex w-full max-w-2xl h-full flex-col "
        >
          {location.state?.continue_with_responsible === "NO" && (
            <FormField
              control={form.control}
              name="address.email"
              render={({ field }) => {
                const hasError =
                  !!form.formState.errors?.address?.email?.message;

                return (
                  <FormItem className="w-full">
                    <FormLabel>E-mail do aluno</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="joe.doe@gmail.com"
                        className={cn(
                          "w-full",
                          hasError && "border bg-red-100 border-red-500"
                        )}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          )}
          <FormField
            control={form.control}
            name="address.cep"
            render={({ field }) => {
              const hasError = !!form.formState.errors?.address?.cep?.message;

              return (
                <FormItem className="w-full">
                  <FormLabel>CEP</FormLabel>
                  <FormControl>
                    <InputMask
                      disabled
                      autoComplete="off"
                      onChange={(event) => {
                        field.onChange(event.target.value);
                      }}
                      value={field.value}
                      mask="999.999.999-99"
                      maskChar={null}
                      placeholder="000.000.000-00"
                      className={cn(
                        "w-full",
                        hasError && "border bg-red-100 border-red-500"
                      )}
                      // {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="address.city"
            render={({ field }) => {
              const hasError = !!form.formState.errors?.address?.city?.message;

              return (
                <FormItem className="w-full">
                  <FormLabel>Cidade</FormLabel>
                  <FormControl>
                    <Input
                      disabled
                      placeholder="Benjamin Constant"
                      className={cn(
                        "w-full",
                        hasError && "border bg-red-100 border-red-500"
                      )}
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="address.uf"
            render={({ field }) => {
              const hasError = !!form.formState.errors?.address?.uf?.message;

              return (
                <FormItem className="w-full">
                  <FormLabel>UF</FormLabel>
                  <FormControl>
                    <Input
                      disabled
                      placeholder="AM"
                      className={cn(
                        "w-full",
                        hasError && "border bg-red-100 border-red-500"
                      )}
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="address.neighborhood"
            render={({ field }) => {
              const hasError =
                !!form.formState.errors?.address?.neighborhood?.message;

              return (
                <FormItem className="w-full">
                  <FormLabel>Bairro</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Centro"
                      className={cn(
                        "w-full",
                        hasError && "border bg-red-100 border-red-500"
                      )}
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="address.number"
            render={({ field }) => {
              const hasError =
                !!form.formState.errors?.address?.number?.message;

              return (
                <FormItem className="w-full">
                  <FormLabel>Número</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="1234"
                      className={cn(
                        "w-full",
                        hasError && "border bg-red-100 border-red-500"
                      )}
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="address.logradouro"
            render={({ field }) => {
              const hasError =
                !!form.formState.errors?.address?.number?.message;

              return (
                <FormItem className="w-full">
                  <FormLabel>Logradouro</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Rua nossa senhora do Rosário"
                      className={cn(
                        "w-full",
                        hasError && "border bg-red-100 border-red-500"
                      )}
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="address.complement"
            render={({ field }) => {
              const hasError =
                !!form.formState.errors?.address?.number?.message;

              return (
                <FormItem className="w-full">
                  <FormLabel>Complemento</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Casa, apto, etc"
                      className={cn(
                        "w-full",
                        hasError && "border bg-red-100 border-red-500"
                      )}
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <Button
            type="submit"
            className="h-12 uppercase font-semibold text-md"
            disabled={!form.formState.isValid}
          >
            Prosseguir
          </Button>
        </form>
      </Form>
    </section>
  );
}
