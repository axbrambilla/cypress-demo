import { login, loginSession } from "../commands/login";
import { addToCart } from "../commands/inventory/addToCart";
import { getCartItemCount } from "../commands/cart/getCartItemCount";
import { isProductAdded } from "../commands/inventory/isProductAdded";
import { removeProduct } from "../commands/inventory/removeProduct";

Cypress.Commands.addAll({
  login,
  addToCart,
  loginSession,
  removeProduct,
  isProductAdded,
  getCartItemCount,
});
