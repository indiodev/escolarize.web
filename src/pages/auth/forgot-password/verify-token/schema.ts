import { z } from 'zod';

export const VerifyTokenSchema = z.object({
	code: z.string().min(6, {
		message: 'Your one-time password must be 6 characters.',
	}),
});

export type VerifyToken = z.infer<typeof VerifyTokenSchema>;
