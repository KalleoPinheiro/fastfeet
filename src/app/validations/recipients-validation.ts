import { string, object } from 'yup';
import { States } from '@utils/constants/states';

export const recipientSchema = object().shape({
  name: string().required(),
  street: string().required(),
  number: string().required(),
  complement: string(),
  state: string()
    .required()
    .oneOf(States.map(state => state.name)),
  city: string().required(),
  country: string().required(),
  zip_code: string()
    .required()
    .length(8),
});
