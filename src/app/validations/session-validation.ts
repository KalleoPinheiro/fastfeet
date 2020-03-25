import { string, object } from 'yup';

export const sessionSchema = object().shape({
  email: string()
    .email()
    .required(),
  password: string()
    .min(8)
    .required(),
});
