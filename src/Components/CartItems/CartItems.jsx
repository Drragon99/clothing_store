import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount , all_product, cartItems, removeCart } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main ">
        <p>Товары</p>
        <p>Название</p>
        <p>Цены</p>
        <p>Колличество </p>
        <p>Итого</p>
        <p>Удалить</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems && cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeCart(e.id);
                  }}
                  alt="remove_icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Итоговая цена</h1>
          <div>
            <div className="cartitems-total-item">
              <p>общая итог</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Платная доставка</p>
              <p>беслатная доставка</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Итого</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Оформить заказ</button>
        </div>
        <div className="cartitems-promocode">
          <p>если у вас есть промокод, введите его здесь</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="промокод " />
            <button>отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
