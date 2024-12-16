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
import { useEnrollmentCreateMutation } from "@/mutation/enrollment/create.mutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircleIcon } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { Address as AddressType, Schema } from "./schema";

export function Address(): React.ReactElement {
  const location = useLocation();
  const navigate = useNavigate();

  const { mutateAsync: create_enrollment, status: create_enrollment_status } =
    useEnrollmentCreateMutation({
      onError(error) {
        console.error(error);
      },
      onSuccess() {
        //TODO: deixar dinamico pelo slug da escola /:slug
        // navigate(location.pathname?.replace("/address", "/proof-of-payment"), {
        //   replace: true,
        // });

        navigate(location.pathname?.replace("/address", "/success"), {
          state: {
            ...location.state,
            address: {
              ...form.getValues("address"),
            },
          },
        });
      },
    });

  const form = useForm<AddressType>({
    resolver: zodResolver(Schema),
    defaultValues: {
      address: { uf: "AM", city: "Benjamin Constant", cep: "69.630-000" },
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    const student_birth_date = location.state?.student?.birth_date
      ?.split("/")
      .reverse()
      .join("-");

    let responsible: Record<string, unknown> | null = null;

    let student: Record<string, unknown> = {
      ...location.state?.student,
      birth_date: student_birth_date,
    };

    if (location.state?.responsible) {
      const responsible_birth_date = location.state?.responsible?.birth_date
        ?.split("/")
        .reverse()
        .join("-");

      responsible = {
        ...location.state?.responsible,
        birth_date: responsible_birth_date,
      };
      student = {
        ...location.state?.student,
        email: location.state?.responsible?.email,
        phone: location.state?.responsible?.phone,
        birth_date: student_birth_date,
      };
    }

    console.log({
      ...location.state,
      ...data,
      student,
      responsible,
    });

    create_enrollment({
      ...location.state,
      ...data,
      student,
      responsible,
    });
  });

  return (
    <section className="w-full h-full py-20 px-10 flex flex-col justify-center items-center ">
      <Form {...form}>
        <form
          onSubmit={onSubmit}
          className="space-y-4 container flex w-full max-w-2xl h-full flex-col "
        >
          <div className="text-left flex flex-col gap-1">
            <h1 className="text-3xl font-bold">Endereço</h1>
            <p className="text-xl">Quase lá! Preencha os dados de Endereço</p>
          </div>

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
                        hasError && "border border-red-500"
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
                        hasError && "border border-red-500"
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
                        hasError && "border border-red-500"
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
                        hasError && "border placeholder:border-red-500"
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
                        hasError && "border  border-red-500"
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
                        hasError && "border  border-red-500"
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
                        hasError && "border  border-red-500"
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
            {create_enrollment_status === "pending" && (
              <LoaderCircleIcon className="w-6 h-6 animate-spin" />
            )}
            {!(create_enrollment_status === "pending") && (
              <span>Reservar matricula</span>
            )}
          </Button>
        </form>
      </Form>
    </section>
  );
}
