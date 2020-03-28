import { string, object, ref } from 'yup';
import { States } from '@utils/constants/states';

export const recipientStoreSchema = object().shape({
  name: string()
    .required()
    .min(3)
    .max(150),
  street: string()
    .required()
    .max(150),
  number: string().required(),
  complement: string().max(300),
  state: string()
    .required()
    .oneOf(States.map(state => state.name))
    .required(),
  city: string().required(),
  country: string().required(),
  zip_code: string()
    .required()
    .length(8),
});

export const recipientUpdateSchema = object().shape({
  name: string()
    .min(3)
    .max(150),
  street: string().max(150),
  number: string(),
  complement: string().max(300),
  state: string().oneOf(States.map(state => state.name)),
  city: string(),
  country: string(),
  zip_code: string().length(8),
});
