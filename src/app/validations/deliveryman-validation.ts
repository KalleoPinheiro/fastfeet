import { string, object } from 'yup';

export const deliverymanStoreSchema = object().shape({
  name: string()
    .required()
    .min(3)
    .max(150),
  avatar_id: string().max(150),
  email: string()
    .email()
    .required(),
});
