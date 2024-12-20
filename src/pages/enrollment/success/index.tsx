import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Success(): React.ReactElement {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <section className="w-full h-full py-20 px-10 flex flex-col justify-center items-center ">
      <section className="gap-4 container flex w-full max-w-2xl h-full flex-col ">
        <div className="text-left flex flex-col gap-1">
          <h1 className="text-3xl font-bold">Matricula reservada</h1>
          <p className="text-xl">Sua matricula foi reservada com sucesso!</p>
        </div>

        <Card className="max-w-2xl w-full">
          <CardHeader>
            <CardTitle className="text-lg">Detalhes do curso</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <span>Turma: {location?.state?._class?.code}</span>{" "}
              <span>
                <strong>{location?.state?._class?.course?.title}</strong>
              </span>
            </p>
            <p>
              <span>
                Preço: R${" "}
                <strong>{location?.state?._class?.course?.price}</strong>
              </span>{" "}
            </p>
            <p>
              <span>
                Horário:{" "}
                <strong>
                  {location?.state?._class?.start_hour?.split(":")[0]} -{" "}
                  {location?.state?._class?.final_hour?.split(":")[0]} h
                </strong>
              </span>
            </p>
          </CardContent>
        </Card>

        <Card className="max-w-2xl w-full">
          <CardHeader>
            <CardTitle className="text-lg">Detalhes do Estudante</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-1">
            <span>
              Nome: <strong>{location?.state?.student?.name}</strong>
            </span>{" "}
            <span>
              CPF: <strong>{location?.state?.student?.cpf}</strong>
            </span>{" "}
            {!location?.state?.responsible && (
              <React.Fragment>
                <span>
                  E-mail: <strong>{location?.state?.student?.email}</strong>
                </span>{" "}
                <span>
                  Celular: <strong>{location?.state?.student?.phone}</strong>
                </span>{" "}
              </React.Fragment>
            )}
          </CardContent>
        </Card>

        {location?.state?.responsible && (
          <Card className="max-w-2xl w-full">
            <CardHeader>
              <CardTitle className="text-lg">Detalhes do Responsável</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
              <span>
                Nome: <strong>{location?.state?.responsible?.name}</strong>
              </span>{" "}
              <span>
                CPF: <strong>{location?.state?.responsible?.cpf}</strong>
              </span>{" "}
              <span>
                E-mail: <strong>{location?.state?.responsible?.email}</strong>
              </span>{" "}
              <span>
                Celular: <strong>{location?.state?.responsible?.phone}</strong>
              </span>{" "}
            </CardContent>
          </Card>
        )}

        <Card className="max-w-2xl w-full">
          <CardHeader>
            <CardTitle className="text-lg">Detalhes do Endereço</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-1">
            <span>
              CEP: <strong>{location?.state?.address?.cep}</strong>
            </span>{" "}
            <span>
              Cidade: <strong>{location?.state?.address?.city}</strong>
            </span>{" "}
            <span>
              Estado: <strong>{location?.state?.address?.uf}</strong>
            </span>{" "}
            <span>
              Logradouro:{" "}
              <strong>{location?.state?.address?.logradouro}</strong>
            </span>{" "}
            <span>
              Numero: <strong>{location?.state?.address?.number}</strong>
            </span>{" "}
            <span>
              Bairro: <strong>{location?.state?.address?.neighborhood}</strong>
            </span>{" "}
            {location?.state?.address?.complement && (
              <span>
                Complemento:{" "}
                <strong>{location?.state?.address?.complement}</strong>
              </span>
            )}
          </CardContent>
        </Card>

        <Button
          className="h-12 uppercase font-semibold text-md"
          onClick={() =>
            navigate(location.pathname?.replace("/success", ""), {
              replace: true,
            })
          }
        >
          Ir para página inicial
        </Button>
      </section>
    </section>
  );
}
