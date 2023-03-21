import { Basemodel } from '../base.model';
import { Product } from '../products/product.model';
import { User } from '../users/user.model';

export interface Order extends Basemodel {
  product: Product[];
  user: User;
}
