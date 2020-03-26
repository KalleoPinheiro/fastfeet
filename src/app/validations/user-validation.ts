import { string, object, ref } from 'yup';

export const userStoreSchema = object().shape({
  name: string().required(),
  email: string()
    .email()
    .required(),
  password: string()
    .min(6)
    .required(),
});

export const userUpdateSchema = object().shape({
  name: string(),
  email: string().email(),
  oldPassword: string().min(6),
  password: string()
    .min(6)
    .when('oldPassword', (oldPassword: string, field: any) =>
      oldPassword ? field.required() : field
    ),
  confirmPassword: string().when('password', (password: string, field: any) =>
    password ? field.required().oneOf([ref('password')]) : field
  ),
});
