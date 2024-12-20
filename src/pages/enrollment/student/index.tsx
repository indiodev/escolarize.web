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
import { cn, isAdult } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { z } from "zod";

export function Student() {
  const navigate = useNavigate();
  const location = useLocation();

  const StudentSchema = {
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
      .trim()
      .optional(),
    email: z
      .string({
        message: "E-mail obrigatório",
      })
      .trim()
      .email({
        message: "E-mail inválido",
      })
      .optional(),
  };

  const Schema = z.object({
    student: z.object(StudentSchema),
  });

  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: {
      student: {
        ...location?.state?.student,
      },
    },
  });

  const onSubmit = (data: z.infer<typeof Schema>) => {
    const _isAdult = isAdult(data.student.birth_date);

    const state = {
      ...location.state,
      ...data,
    };

    if (!_isAdult) {
      navigate(location.pathname?.replace("/student", "/responsible"), {
        state,
      });
      return;
    }

    navigate(location.pathname?.replace("/student", "/address"), {
      state,
    });
  };

  return (
    <section className="w-full h-full py-20 px-10 flex flex-col justify-center items-center ">
      <Form {...form}>
        <form
          className="gap-4 container flex w-full max-w-2xl h-full flex-col "
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="text-left flex flex-col gap-1">
            <h1 className="text-3xl font-bold">Dados do aluno</h1>
            <p className="text-xl">Preencha os dados do aluno</p>
          </div>

          <span className="text-base opacity-55">
            Os dados serão usados para a matricula, acompanhamento, geração de
            relatórios e gamificação da plataforma
          </span>

          <FormField
            control={form.control}
            name="student.name"
            render={({ field }) => {
              const hasError = !!form.formState.errors?.student?.name?.message;

              return (
                <FormItem className="w-full">
                  <FormLabel>Nome completo</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Joe Doe"
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
            name="student.cpf"
            render={({ field }) => {
              const hasError = !!form.formState.errors?.student?.cpf?.message;

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
                        hasError && "border  border-red-500"
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
            name="student.birth_date"
            render={({ field }) => {
              const hasError = !!form.formState.errors?.student?.phone?.message;

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
                        hasError && "border  border-red-500"
                      )}
                      // {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />
          {isAdult(form.watch("student.birth_date")) && (
            <Fragment>
              <FormField
                control={form.control}
                name="student.phone"
                render={({ field }) => {
                  const hasError =
                    !!form.formState.errors?.student?.phone?.message;

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
                            hasError && "border  border-red-500"
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
                name="student.email"
                render={({ field }) => {
                  const hasError =
                    !!form.formState.errors?.student?.email?.message;

                  return (
                    <FormItem className="w-full">
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Joe Doe"
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
            </Fragment>
          )}

          <FormField
            control={form.control}
            name="student.gender"
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
