import React, { useContext, useState, useEffect } from 'react';
import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API_KEY,
});

export const ShopContext = React.createContext();

export const useShopContext = () => {
  return useContext(ShopContext);
};

const ShopProvider = ({ children }) => {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [checkout, setCheckout] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const createCheckout = async () => {
    const checkoutResp = await client.checkout.create();
    localStorage.setItem('checkoutId', checkoutResp.id);
    setCheckout(checkoutResp);
  };

  const fetchCheckout = async (checkoutId) => {
    const checkout = await client.checkout.fetch(checkoutId);
    setCheckout(checkout);
  };

  const addItemtoCheckout = async (variantId, Qty) => {
    const lineItemIdToAdd = [
      {
        variantId,
        quantity: parseInt(Qty),
      },
    ];
    client.checkout
      .addLineItems(checkout.id, lineItemIdToAdd)
      .then((checkout) => {
        // Do something with the updated checkout
        setCheckout(checkout);
      });

    openCart();
  };

  const removeLineItem = async (lineItemIdToRemove) => {
    // Remove an item from the checkout
    const removeItem = await client.checkout.removeLineItems(
      checkout.id,
      lineItemIdToRemove
    );
    setCheckout(removeItem);
  };

  const fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    setProducts(products);
  };

  const fetchProductWithHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    setProduct(product);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  useEffect(() => {
    if (localStorage.checkoutId) {
      fetchCheckout(localStorage.checkoutId);
    } else {
      createCheckout();
    }
  }, []);

  return (
    <ShopContext.Provider
      value={{
        products,
        product,
        fetchAllProducts,
        fetchProductWithHandle,
        openCart,
        closeCart,
        isCartOpen,
        addItemtoCheckout,
        checkout,
        removeLineItem,
        closeMenu,
        openMenu,
        isMenuOpen,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
