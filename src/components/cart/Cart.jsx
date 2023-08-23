import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.2rem", fontWeight: "bold" }}>{title}</h4>
      <img src={img} alt="Item" />
    </div>
    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [item1Value, setItem1Value] = useState(0);
  const [item2Value, setItem2Value] = useState(0);
  const [item3Value, setItem3Value] = useState(0);

  const increment = (item) => {
    if (item === 1) {
      setItem1Value(item1Value + 1);
    } else if (item === 2) {
      setItem2Value(item2Value + 1);
    } else if (item === 3) {
      setItem3Value(item3Value + 1);
    }
  };

  const decrement = (item) => {
    if (item === 1) {
      setItem1Value(item1Value > 0 ? item1Value - 1 : 0);
    } else if (item === 2) {
      setItem2Value(item2Value > 0 ? item2Value - 1 : 0);
    } else if (item === 3) {
      setItem3Value(item3Value > 0 ? item3Value - 1 : 0);
    }
  };

  const subTotal = 2000 * (item1Value + item2Value + item3Value);
  const tax = subTotal * 0.18;
  const shippingCharges = 200;
  const total = subTotal + tax + shippingCharges;

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={item1Value}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Double Crispy Cheese Burger"}
          img={burger2}
          value={item2Value}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Cheese Burger with French Fries"}
          img={burger3}
          value={item3Value}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCharges}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{total}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
