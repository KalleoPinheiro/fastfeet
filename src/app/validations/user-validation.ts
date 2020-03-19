import { string, object } from 'yup';

export const userSchema = object().shape({
  name: string().required(),
  email: string()
    .email()
    .required(),
  password: string()
    .min(6)
    .required(),
});
