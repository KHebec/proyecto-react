import { TYPES } from "./actions";
import { createContext, useEffect, useState, useReducer } from "react";
import axios from "axios";
import { stateInitialState } from "./stateReducer";
import { stateReducer } from "./stateReducer";

export const StateContext = createContext();

const StateProvider = (props) => {
  const [state, dispatch] = useReducer(stateReducer, stateInitialState);
  const productsURL = "https://localhost:5000/products",
    cartURL = "https://localhost:5000/cart";
  const authorsURL = "https://localhost:5000/authors";
  const { products, cart, authors } = state;
  const [loading, setLoading] = useState(false);

  const updateState = async () => {
    const resProducts = await axios.get(productsURL),
      resCart = await axios.get(cartURL),
      resAuthors = await axios.get(authorsURL);
    const productList = await resProducts.data,
      cartList = await resCart.data,
      authorList = await resAuthors.data;

    dispatch({
      type: TYPES.READ_STATE,
      payload: [productList, cartList, authorList],
    });
  };
  useEffect(() => {
    setLoading(true);
    updateState();
    setLoading(false);
  }, []);

  const addToCart = async (name, data) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: name });
    if (!cart.find((e) => e.name === data.name)) {
      data.quantity = 1;

      await axios.post(cartURL, data);
    } else {
      data.quantity = data.quantity + 1;

      await axios.put(`${cartURL}/${data.id}`, data);
    }
  };

  const deleteFromCart = async (id, all, quantity, data) => {
    console.log(quantity);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
      await axios.delete(`${cartURL}/${id}`);
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: [id, quantity] });
      console.log(data.quantity);
      if (quantity > 1) {
        console.log(data.quantity);
        data.quantity = quantity - 1;
        console.log(data.quantity);
        await axios.put(`${cartURL}/${id}`, data);
      } else {
        await axios.delete(`${cartURL}/${id}`);
      }
    }
  };
  const cleanCart = (cart) => {
    dispatch({ type: TYPES.CLEAR_CART });
    cart.map(async (item) => {
      await axios.delete(`${cartURL}/${item.id}`);
    });
  };
  const data = {
    products,
    cart,
    authors,
    loading,
    updateState,
    addToCart,
    deleteFromCart,
    cleanCart,
  };
  return (
    <StateContext.Provider value={data}>{props.children}</StateContext.Provider>
  );
};

export default StateProvider;
