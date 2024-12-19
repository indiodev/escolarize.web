import { Button } from "@/components/ui/button";
import { useEnrollmentCreateMutation } from "@/mutation/enrollment/create.mutation";
import { LoaderCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export function Finish() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state);

  const { mutateAsync: create_enrollment, status: create_enrollment_status } =
    useEnrollmentCreateMutation({
      onError(error) {
        console.error(error);
      },
      onSuccess() {
        navigate("/enrollment/school/escola-jedais-tec", {
          replace: true,
        });
      },
    });

  return (
    <section className="w-full h-full p-8 flex flex-col justify-center items-center ">
      <div className="space-y-4 container flex w-full max-w-2xl h-full flex-col ">
        <div className="text-left space-y-1">
          <h1 className="text-3xl font-bold">
            Quase lá, finalize sua matricula.
          </h1>
          {/* <p className="text-xl">Continue com sua matricula</p> */}
        </div>

        <span className="text-base opacity-55">
          Ao finalizar, sua matricula será enviada.
        </span>

        <Button
          disabled={create_enrollment_status === "pending"}
          className="h-12 uppercase font-semibold text-md"
          onClick={() => {
            let responsible: Record<string, unknown> | null = null;

            if (location.state?.responsible) {
              responsible = {
                ...location.state?.responsible,
                birth_date: location.state?.responsible?.birth_date
                  ?.split("/")
                  .reverse()
                  .join("-"),
              };
            }

            create_enrollment({
              ...location.state,
              student: {
                ...location.state?.student,
                email:
                  location.state?.responsible?.email ||
                  location?.state?.address?.email,
                birth_date: location.state?.student?.birth_date
                  ?.split("/")
                  .reverse()
                  .join("-"),
              },
              responsible,
            });
          }}
        >
          {create_enrollment_status === "pending" && (
            <LoaderCircle className="w-6 h-6 animate-spin" />
          )}
          {!(create_enrollment_status === "pending") && (
            <span>Enviar e finalizar</span>
          )}
        </Button>
      </div>
    </section>
  );
}
