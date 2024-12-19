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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";

export function Responsible() {
  const navigate = useNavigate();
  const location = useLocation();
  const ResponsibleSchema = {
    email: z
      .string({
        message: "E-mail obrigatório",
      })
      .trim()
      .email({
        message: "E-mail inválido",
      }),
    birth_date: z.string().trim(),
    gender: z.enum(["MALE", "FEMALE"], {
      required_error: "Gênero obrigatório",
    }),
    name: z
      .string({
        message: "Nome obrigatório",
      })
      .trim(),
    cpf: z
      .string({
        message: "CPF obrigatório",
      })
      .trim(),
    phone: z
      .string({
        message: "Telefone obrigatório",
      })
      .trim(),
  };

  const Schema = z.object({
    responsible: z.object(ResponsibleSchema),
  });
  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
  });

  const onSubmit = (data: z.infer<typeof Schema>) => {
    navigate(location.pathname?.replace("/responsible", "/address"), {
      state: {
        ...location.state,
        ...data,
      },
    });
  };

  return (
    <section className="w-full h-full p-8 flex flex-col justify-center items-center ">
      <Form {...form}>
        <form
          className="space-y-4 container flex w-full max-w-2xl h-full flex-col "
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="text-left space-y-1">
            <h1 className="text-3xl font-bold">Dados do responsável</h1>
            <p className="text-xl">Preencha os dados do responsável</p>
          </div>

          <span className="text-base opacity-55">
            Os dados serão usados para a matricula, acompanhamento, geração de
            relatórios e gamificação da plataforma
          </span>

          <FormField
            control={form.control}
            name="responsible.name"
            render={({ field }) => {
              const hasError =
                !!form.formState.errors?.responsible?.name?.message;

              return (
                <FormItem className="w-full">
                  <FormLabel>Nome completo</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Joe Doe"
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
            name="responsible.email"
            render={({ field }) => {
              const hasError =
                !!form.formState.errors?.responsible?.name?.message;

              return (
                <FormItem className="w-full">
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="joe.doe@example.com"
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
            name="responsible.cpf"
            render={({ field }) => {
              const hasError =
                !!form.formState.errors?.responsible?.cpf?.message;

              return (
                <FormItem className="w-full">
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <InputMask
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
            name="responsible.phone"
            render={({ field }) => {
              const hasError =
                !!form.formState.errors?.responsible?.phone?.message;

              return (
                <FormItem className="w-full">
                  <FormLabel>Celular (Whatsapp)</FormLabel>
                  <FormControl>
                    <InputMask
                      autoComplete="off"
                      onChange={(event) => {
                        field.onChange(event.target.value);
                      }}
                      value={field.value}
                      mask="(99) 99999-9999"
                      maskChar={null}
                      placeholder="(99) 99999-9999"
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
            name="responsible.birth_date"
            render={({ field }) => {
              const hasError =
                !!form.formState.errors?.responsible?.phone?.message;

              return (
                <FormItem className="w-full">
                  <FormLabel>Data de nascimento</FormLabel>
                  <FormControl>
                    <InputMask
                      autoComplete="off"
                      onChange={(event) => {
                        field.onChange(event.target.value);
                      }}
                      value={field.value}
                      mask="99/99/9999"
                      maskChar={null}
                      placeholder="99/99/9999"
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
            name="responsible.gender"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Sexo</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value?.toString()}
                    className="grid grid-cols-2"
                  >
                    <FormItem>
                      <FormControl>
                        <RadioGroupItem value="MALE" className="peer sr-only" />
                      </FormControl>
                      <FormLabel className="flex justify-center items-center flex-col rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary w-full select-none">
                        Masculino
                      </FormLabel>
                    </FormItem>

                    <FormItem>
                      <FormControl>
                        <RadioGroupItem
                          value="FEMALE"
                          className="peer sr-only"
                        />
                      </FormControl>
                      <FormLabel className="flex justify-center items-center flex-col rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary w-full select-none">
                        Feminino
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
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
