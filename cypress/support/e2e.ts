import { login } from "../commands/login/login";
import { addToCart } from "../commands/inventory/addToCart";
import { removeProduct } from "../commands/inventory/removeProduct";
import { getCartItemCount } from "../commands/cart/getCartItemCount";
import { isErrorDisplayed } from "../commands/login/isErrorDisplayed";
import { isProductAdded } from "../commands/inventory/isProductAdded";

Cypress.Commands.addAll({
  login,
  addToCart,
  removeProduct,
  isProductAdded,
  isErrorDisplayed,
  getCartItemCount,
});
