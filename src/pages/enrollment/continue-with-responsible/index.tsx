import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";

export function ContinueWithResponsible() {
  const navigate = useNavigate();
  const location = useLocation();

  const Schema = z.object({
    continue_with_responsible: z.enum(["YES", "NO"], {
      required_error: "Resposta obrigatória",
    }),
  });
  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
  });

  const onSubmit = (data: z.infer<typeof Schema>) => {
    if (data.continue_with_responsible === "YES") {
      navigate(
        location.pathname?.replace(
          "/continue-with-responsible",
          "/responsible"
        ),
        {
          state: {
            ...location.state,
            continue_with_responsible: "YES",
          },
        }
      );
      return;
    }

    navigate(
      location.pathname?.replace("/continue-with-responsible", "/address"),
      {
        state: {
          ...location.state,
          continue_with_responsible: "NO",
        },
      }
    );
  };

  return (
    <section className="w-full h-full p-8 flex flex-col justify-center items-center ">
      <Form {...form}>
        <form
          className="space-y-4 container flex w-full max-w-2xl h-full flex-col "
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="text-left space-y-1">
            <h1 className="text-3xl font-bold">
              Deseja continuar com responsável?
            </h1>
            <p className="text-xl">Continue com sua matricula</p>
          </div>

          <span className="text-base opacity-55">
            Caso o estudante seja menor de 18 anos, continue com o responsável
          </span>

          <FormField
            control={form.control}
            name="continue_with_responsible"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-base sr-only">Resposta</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value?.toString()}
                    className="grid grid-cols-2"
                  >
                    <FormItem>
                      <FormControl>
                        <RadioGroupItem value="YES" className="peer sr-only" />
                      </FormControl>
                      <FormLabel className="flex justify-center items-center flex-col rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary w-full select-none">
                        Sim, continuar.
                      </FormLabel>
                    </FormItem>

                    <FormItem>
                      <FormControl>
                        <RadioGroupItem value="NO" className="peer sr-only" />
                      </FormControl>
                      <FormLabel className="flex justify-center items-center flex-col rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary w-full select-none">
                        Não
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
