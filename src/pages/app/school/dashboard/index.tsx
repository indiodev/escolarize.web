import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSchoolDashboardQuery } from "@/query/school/dashboard.query";
import {
  BookMarked,
  GraduationCap,
  LoaderCircle,
  Presentation,
  ServerOff,
  User,
  UsersRound,
} from "lucide-react";

export function Dashboard() {
  const { data: response, status: status_response } = useSchoolDashboardQuery(
    {}
  );

  if (status_response === "pending") {
    return (
      <main className="container gap-4 max-w-full w-full h-full flex flex-col">
        <h2 className="text-2xl font-semibold">Dashboard</h2>

        <div className="flex-1 flex justify-center items-center">
          <LoaderCircle className="w-12 h-12 animate-spin" />
        </div>
      </main>
    );
  }

  if (status_response === "error") {
    return (
      <main className="container gap-4 max-w-full w-full h-full flex flex-col">
        <h2 className="text-2xl font-semibold">Dashboard</h2>

        <div className="flex-1 flex justify-center items-center flex-col gap-6">
          <ServerOff className="w-12 h-12" />
          <h2 className="text-2xl font-semibold">
            Houve um erro ao buscar os dados.
          </h2>
        </div>
      </main>
    );
  }

  return (
    <main className="container gap-4 max-w-full w-full h-full flex flex-col">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card className="dark:bg-secondary">
          <CardHeader className="flex gap-2 items-start xl:items-center flex-row">
            <User className="w-10 h-10" />
            <div className="gap-1 flex flex-col">
              <CardTitle className="">Estudantes</CardTitle>
              <CardDescription>
                {response?.student?.count} estudantes cadastrados.
              </CardDescription>
            </div>
          </CardHeader>
          {/* <CardContent className="grid gap-4"></CardContent> */}
        </Card>
        <Card className="dark:bg-secondary">
          <CardHeader className="flex gap-2 items-start xl:items-center flex-row">
            <UsersRound className="w-10 h-10" />
            <div className="gap-1 flex flex-col">
              <CardTitle>Responsáveis</CardTitle>
              <CardDescription>
                {response?.responsible?.count} responsáveis cadastrados.
              </CardDescription>
            </div>
          </CardHeader>
          {/* <CardContent className="grid gap-4"></CardContent> */}
        </Card>
        <Card className="dark:bg-secondary">
          <CardHeader className="flex gap-2 items-start xl:items-center flex-row">
            <GraduationCap className="w-10 h-10" />
            <div className="gap-1 flex flex-col">
              <CardTitle>Professores</CardTitle>
              <CardDescription>5 professores cadastrados.</CardDescription>
            </div>
          </CardHeader>
          {/* <CardContent className="grid gap-4"></CardContent> */}
        </Card>
        <Card className="dark:bg-secondary">
          <CardHeader className="flex gap-2 items-start xl:items-center flex-row">
            <BookMarked className="w-10 h-10" />
            <div className="gap-1 flex flex-col">
              <CardTitle>Cursos</CardTitle>
              <CardDescription>
                {response?.course?.count} cursos cadastrados.
              </CardDescription>
            </div>
          </CardHeader>
          {/* <CardContent className="grid gap-4"></CardContent> */}
        </Card>
      </section>
    </main>
  );
}
