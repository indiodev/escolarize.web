import { Button } from "@/components/ui/button";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/ui/file-upload";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CloudUploadIcon, PaperclipIcon } from "lucide-react";
import { DropzoneOptions } from "react-dropzone";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";

export function ProofOfPayment() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location, navigate);

  const dropzone = {
    multiple: true,
    maxFiles: 1,
    maxSize: 4 * 1024 * 1024,
  } satisfies DropzoneOptions;

  const Schema = z.object({
    files: z
      .array(
        z
          .instanceof(File)
          .refine(
            (file) => file.size < 4 * 1024 * 1024,
            "File size must be less than 4MB"
          )
      )
      .max(1, {
        message: "Maximum of 1 file allowed",
      })
      .nullable(),
  });

  type _Form = z.infer<typeof Schema>;

  const form = useForm<_Form>({
    resolver: zodResolver(Schema),
    defaultValues: {
      files: null,
    },
  });

  const onSubmit = async (data: _Form) => {
    console.log(data);
  };

  return (
    <section className="w-full h-full py-20 px-10 flex flex-col justify-center items-center ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 container flex w-full max-w-2xl h-full flex-col"
        >
          <h2 className="text-3xl font-bold">
            Faça o envio da comprovante de pagamento
          </h2>

          <span className="text-base opacity-55">
            Para efetivação da matricula, precisamos de um comprovante de
            pagamento.
          </span>
          <div className="flex flex-col gap-1 w-full bg-secondary/80 p-2 rounded-lg">
            <span className="text-base opacity-55 font-semibold">
              10% de desconto aplicado na primeira matricula
            </span>
            <span className="text-base opacity-55">
              Mensalidade: <strong>R$ 200,00</strong> Total:{" "}
              <strong>R$ 180,00</strong>
            </span>
          </div>

          <FormField
            control={form.control}
            name="files"
            render={({ field }) => (
              <FormItem>
                <FileUploader
                  value={field.value}
                  onValueChange={field.onChange}
                  dropzoneOptions={dropzone}
                  reSelect={true}
                  className="relative bg-background rounded-lg p-2 border border-dashed border-gray-500"
                >
                  <FileInput className="outline-dashed outline-1 outline-white ">
                    <div className="flex items-center justify-center flex-col pt-3 pb-4 w-full ">
                      <CloudUploadIcon className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" />
                      <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                        <span>
                          <strong>Clique para fazer upload</strong> ou arraste e
                          solte.
                        </span>
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Arquivo de PDF ou de imagem (jpg ou png)
                      </p>
                    </div>
                  </FileInput>
                  {field.value && field.value.length > 0 && (
                    <FileUploaderContent>
                      {field.value.map((file, i) => (
                        <FileUploaderItem key={i} index={i}>
                          <PaperclipIcon className="h-4 w-4 stroke-current" />
                          <span>{file.name}</span>
                        </FileUploaderItem>
                      ))}
                    </FileUploaderContent>
                  )}
                </FileUploader>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            // disabled={!form.formState.}
            className="h-12 uppercase font-semibold text-md"
          >
            {/* {create_enrollment_status === "pending" && (
              <LoaderCircle className="w-6 h-6 animate-spin" />
            )} */}
            {/* {!(create_enrollment_status === "pending") && <span>Enviar</span>} */}
          </Button>
        </form>
      </Form>
    </section>
  );
}
