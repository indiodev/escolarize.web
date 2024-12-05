import { Badge } from "@/components/ui/badge";
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
import { cn } from "@/lib/utils";
import { useEnrollmentFindQuery } from "@/query/enrollment/school/find.query";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

export function School(): React.ReactElement {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { data: school, status: school_status } = useEnrollmentFindQuery(
    params.slug!
  );

  const schema = z.object({
    class_id: z.coerce.number(),
  });

  type _Form = z.infer<typeof schema>;

  const form = useForm<_Form>({
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  function onSubmit(data: _Form) {
    navigate(location.pathname?.concat("/student"), {
      state: {
        ...location.state,
        ...data,
        school_id: school?.id,
      },
    });
  }

  if (school_status === "pending") {
    return (
      <section className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold">Carregando</h1>
      </section>
    );
  }

  if (school_status === "error") {
    return (
      <section className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold">Houve um erro</h1>
      </section>
    );
  }

  return (
    <section className="w-full h-auto p-8 flex flex-col justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 container flex w-full flex-col items-center justify-center"
        >
          <div className="text-center space-y-1">
            <h1 className="text-3xl font-bold">{school?.user?.name}</h1>
            <p className="text-xl">
              Matriculas abertas! Selecione um curso e faça já a sua inscrição.
            </p>
          </div>

          <FormField
            control={form.control}
            name="class_id"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-3xl sr-only">
                  Selecione um curso
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value?.toString()}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {school?.classes?.map((item) => (
                      <FormItem key={item.id}>
                        <FormControl>
                          <RadioGroupItem
                            value={item.id?.toString()}
                            className="peer sr-only"
                          />
                        </FormControl>
                        <FormLabel className="flex flex-col rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary w-full h-full space-y-2 select-none group">
                          <h2 className="font-semibold text-2xl">
                            {item?.course?.title}
                          </h2>

                          <div className="inline-flex space-x-3">
                            <Badge variant="outline" className="text-md">
                              {item?.code}
                            </Badge>
                            <Badge variant="outline" className="text-md">
                              {item?.start_hour?.split(":")[0]} -{" "}
                              {item?.final_hour?.split(":")[0]} h
                            </Badge>

                            <Badge variant="outline" className="text-md">
                              {item?.days_of_week}
                            </Badge>
                            <Badge variant="outline" className="text-md">
                              {item?.capacity} vagas
                            </Badge>
                          </div>

                          <div className="space-y-2 flex flex-col py-4">
                            <span className="text-md">
                              <strong>Público: </strong> {item?.audience}
                            </span>
                            <span className="text-md ">
                              <strong>
                                {item?.capacity -
                                  item?.number_of_student_accepted}{" "}
                                vagas restantes
                              </strong>
                            </span>
                          </div>

                          <div
                            className="space-y-2"
                            dangerouslySetInnerHTML={{
                              __html: item?.course?.description || "",
                            }}
                          />
                          <div className="flex justify-end">
                            <Button
                              type="submit"
                              // variant="secondary"
                              disabled={!form.watch("class_id")}
                              className={cn(
                                "text-lg p-4 right-0",
                                form.watch("class_id")?.toString() !==
                                  item.id?.toString() &&
                                  "bg-transparent text-transparent shadow-none hover:bg-transparent select-none pointer-events-none"
                              )}
                            >
                              Prosseguir
                            </Button>
                          </div>
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </section>
  );
}
