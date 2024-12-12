import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
          className="space-y-4 container flex w-full flex-col items-center justify-center px-4"
        >
          <div className="text-center space-y-1 ">
            <Avatar className="mx-auto max-w-44 w-full md:w-3/4 lg:w-1/2 h-auto pr-4 rounded-none">
              <AvatarImage src={String(school?.user!.avatar || "")} />
              <AvatarFallback>{school?.user?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold">{school?.user?.name}</h1>
            <p className="text-xl">
              Matriculas abertas! Selecione um curso e faça já a sua inscrição.
            </p>
          </div>

          <FormField
            control={form.control}
            name="class_id"
            render={({ field }) => (
              <FormItem className="space-y-3 w-full">
                <FormLabel className="text-3xl sr-only">
                  Selecione um curso
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value?.toString()}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
                  >
                    {school?.classes?.map((item) => (
                      <FormItem key={item.id} className="w-full">
                        <FormControl>
                          <RadioGroupItem
                            value={item.id?.toString()}
                            className="peer sr-only"
                          />
                        </FormControl>
                        <FormLabel className="flex flex-col rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary w-full h-full space-y-2 select-none group cursor-pointer">
                          <h2 className="font-semibold text-xl sm:text-2xl truncate">
                            {item?.course?.title}
                          </h2>

                          <div className="flex flex-wrap gap-2 items-center">
                            <Badge variant="outline" className="text-sm">
                              {item?.code}
                            </Badge>
                            <Badge variant="outline" className="text-sm">
                              {item?.start_hour?.split(":")[0]} -{" "}
                              {item?.final_hour?.split(":")[0]} h
                            </Badge>

                            <Badge variant="outline" className="text-sm">
                              {item?.days_of_week}
                            </Badge>
                            <Badge variant="outline" className="text-sm">
                              {item?.age_group}
                            </Badge>
                            <Badge variant="outline" className="text-sm">
                              {new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              }).format(Number(item?.course?.price ?? 0))}
                            </Badge>
                            {/* <Badge variant="outline" className="text-sm">
                              {item?.capacity} vagas
                            </Badge> */}
                          </div>
                          {/*  */}

                          <div className="space-y-2 flex flex-col py-2">
                            <span className="text-sm">
                              <strong>Público: </strong> {item?.audience}
                            </span>
                            <span className="text-sm">
                              <strong>
                                {item?.capacity -
                                  item?.number_of_student_accepted}{" "}
                                vagas restantes
                              </strong>
                            </span>
                          </div>

                          <div
                            className="text-sm text-muted-foreground"
                            dangerouslySetInnerHTML={{
                              __html: item?.course?.description || "",
                            }}
                          />
                          <div className="flex justify-end mt-2">
                            <Button
                              type="submit"
                              disabled={!form.watch("class_id")}
                              className={cn(
                                "text-base p-3 sm:text-lg sm:p-4",
                                form.watch("class_id")?.toString() !==
                                  item.id?.toString() &&
                                  "bg-transparent text-transparent shadow-none hover:bg-transparent select-none pointer-events-none"
                              )}
                            >
                              {item?.capacity -
                                item?.number_of_student_accepted <=
                                0 && "Entrar pra lista de espera"}

                              {item?.capacity -
                                item?.number_of_student_accepted >
                                0 && "Prosseguir"}
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
