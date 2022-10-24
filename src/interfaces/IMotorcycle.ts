import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

const motorcycleZodSchema = vehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().max(2500),
});

export type IMotorcycle = z.infer<typeof motorcycleZodSchema>;