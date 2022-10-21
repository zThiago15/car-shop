import { z } from 'zod';

const vehicleZodSchema = z.object({
  model: z.string().min(3, 'at least 3 characters'),
  year: z.number().min(1900).max(2022),
  color: z.string().min(3, 'at least 3 characters'),
  status: z.boolean().optional(),
  buyValue: z.number(),
});

export type IVehicle = z.infer<typeof vehicleZodSchema>;
