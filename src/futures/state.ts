import { Status } from "types";

export const defaultState: DefaultState = {
  status: 'idle',
  error: null,
  currPage: '',
  next: false,
  previous: false,
};

export type DefaultState = {
  status:Status,
  error: string | null, 
  currPage: string,
  next: boolean,
  previous: boolean,
}