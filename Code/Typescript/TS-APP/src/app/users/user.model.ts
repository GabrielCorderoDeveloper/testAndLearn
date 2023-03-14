import { Basemodel } from "../base.model";

export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTUMER = 'custumer',
}

export interface User extends Basemodel {
  username: string;
  role: ROLES;
}
