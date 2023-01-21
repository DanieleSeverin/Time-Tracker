import { v4 as uuidv4 } from 'uuid';

export const Uuid = () => uuidv4();

export type Uuid = ReturnType<typeof Uuid>;
  