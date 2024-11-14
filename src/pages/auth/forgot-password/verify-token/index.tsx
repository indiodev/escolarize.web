import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { type VerifyToken, VerifyTokenSchema } from "./schema";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export function VerifyToken(): React.ReactElement {
  const navigate = useNavigate();

  const form = useForm<VerifyToken>({
		resolver: zodResolver(VerifyTokenSchema),
		defaultValues: {
			code: '',
		},
	});

  const onSubmit = form.handleSubmit((data) => {
		console.log(data);
	});

  return (
    <section className="w-full flex flex-col items-center">
      <h1 className="text-3xl font-bold">Escolarize</h1>
      <div className="py-5 flex flex-col gap-5 w-full sm:max-w-lg">
        <div className="space-y-1">
          <h2 className="text-lg text-left font-medium">Verificação de token</h2>
          <p className="text-left">
            Digite o token enviado para seu e-mail abaixo, e nós enviaremos um
            código para ajudar você a recuperar o acesso à sua conta.
          </p>
        </div>

        <Separator className="w-auto" />

        <Form {...form}>
					<form
						onSubmit={onSubmit}
						className="w-full"
					>
						<FormField
							control={form.control}
							name="code"
							render={({ field }) => (
								<FormItem className="flex flex-col items-center">
									<FormLabel className="text-[18px] text-center">
										Insira o token
									</FormLabel>
									<FormControl>
										<InputOTP
											maxLength={6}
											{...field}
										>
											<InputOTPGroup>
												<InputOTPSlot
													index={0}
													placeholder="0"
													className="text-[2rem]"
												/>
												<InputOTPSlot
													index={1}
													placeholder="0"
													className="text-[2rem]"
												/>
												<InputOTPSlot
													index={2}
													placeholder="0"
													className="text-[2rem]"
												/>
												<InputOTPSlot
													index={3}
													placeholder="0"
													className="text-[2rem]"
												/>
												<InputOTPSlot
													index={4}
													placeholder="0"
													className="text-[2rem]"
												/>
												<InputOTPSlot
													index={5}
													placeholder="0"
													className="text-[2rem]"
												/>
											</InputOTPGroup>
										</InputOTP>
									</FormControl>
								</FormItem>
							)}
						/>
						<div className=" flex flex-col justify-center items-center gap-3 mt-[4rem]">
							<Button
								type="submit"
								// disabled={
								// 	!form.formState.isValid || verifyCodeStatus === 'pending'
								// }
								className="w-[75%] h-12"
							>
								{/* {verifyCodeStatus === 'pending' && (
									<LoaderCircle className="w-6 h-6 animate-spin" />
								)} */}
								{/* {!(verifyCodeStatus === 'pending') && (
									<span>Validar token</span>
								)} */}
                <span>Validar token</span>
							</Button>
							<Button
								type="button"
								className="w-[75%] h-12"
								onClick={() => navigate(-1)}
							>
								Voltar
							</Button>
						</div>
					</form>
				</Form>
      </div>
    </section>
  );
}
