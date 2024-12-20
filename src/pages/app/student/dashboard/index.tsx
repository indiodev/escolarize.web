import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, Presentation, User, UsersRound } from "lucide-react";

export function Dashboard() {
  return (
    <main className="container max-w-full w-full">
      {/* <h2>Dashboard</h2> */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card className="dark:bg-secondary">
          <CardHeader className="flex space-x-3 items-start xl:items-center flex-row">
            <User className="w-10 h-10" />
            <div className="space-y-1">
              <CardTitle className="">Estudantes</CardTitle>
              <CardDescription>300 estudantes cadastrados.</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4"></CardContent>
          {/* <CardFooter>
            <Button className="w-full">
              <Check /> Mark all as read
            </Button>
          </CardFooter> */}
        </Card>
        <Card className="dark:bg-secondary">
          <CardHeader className="flex space-x-3 items-start xl:items-center flex-row">
            <UsersRound className="w-10 h-10" />
            <div className="space-y-1">
              <CardTitle>Responsáveis</CardTitle>
              <CardDescription>300 responsáveis cadastrados.</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4"></CardContent>
          {/* <CardFooter>
            <Button className="w-full">
              <Check /> Mark all as read
            </Button>
          </CardFooter> */}
        </Card>
        <Card className="dark:bg-secondary">
          <CardHeader className="flex space-x-3 items-start xl:items-center flex-row">
            <GraduationCap className="w-10 h-10" />
            <div className="space-y-1">
              <CardTitle>Professores</CardTitle>
              <CardDescription>300 professores cadastrados.</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4"></CardContent>
          {/* <CardFooter>
            <Button className="w-full">
              <Check /> Mark all as read
            </Button>
          </CardFooter> */}
        </Card>
        <Card className="dark:bg-secondary">
          <CardHeader className="flex space-x-3 items-start xl:items-center flex-row">
            <Presentation className="w-10 h-10" />
            <div className="space-y-1">
              <CardTitle>Escolas</CardTitle>
              <CardDescription>300 escolas cadastradas.</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4"></CardContent>
          {/* <CardFooter>
            <Button className="w-full">
              <Check /> Mark all as read
            </Button>
          </CardFooter> */}
        </Card>
      </section>
    </main>
  );
}
