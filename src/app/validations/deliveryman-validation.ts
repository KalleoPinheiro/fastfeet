import { string, object, number } from 'yup';

export const deliverymanStoreSchema = object().shape({
  name: string()
    .required()
    .min(3)
    .max(150),
  avatar_id: number(),
  email: string()
    .email()
    .required(),
});

export const deliverymanUpdateSchema = object().shape({
  name: string()
    .min(3)
    .max(150),
  avatar_id: number(),
  email: string().email(),
});
