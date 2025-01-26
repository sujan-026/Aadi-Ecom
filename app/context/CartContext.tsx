// import React, { createContext, useState, useContext } from "react";

// interface CartItem {
//   id: string; // Use a string to store unique ids (tab + product id)
//   title: string;
//   price: string;
//   quantity: number;
// }

// interface CartContextType {
//   cart: CartItem[];
//   addToCart: (product: Omit<CartItem, "quantity">, tabName: string) => void;
//   removeFromCart: (id: string) => void;
//   clearCart: () => void;
//   updateCartQuantity: (id: string, quantity: number) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const addToCart = (product: Omit<CartItem, "quantity">, tabName: string) => {
//     // Combine tabName and product id to create a unique identifier
//     const uniqueId = `${tabName}-${product.id}`;
//     const existingProduct = cart.find((item) => item.id === uniqueId);
//     if (existingProduct) {
//       updateCartQuantity(uniqueId, existingProduct.quantity + 1);
//     } else {
//       setCart((prev) => [...prev, { ...product, id: uniqueId, quantity: 1 }]);
//     }
//     alert("Item added to cart!");
//   };

//   const removeFromCart = (id: string) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   const updateCartQuantity = (id: string, quantity: number) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         clearCart,
//         updateCartQuantity,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };





import React, { createContext, useState, useContext } from "react";

interface CartItem {
  id: string; // Unique ID combining tabName and product ID
  title: string;
  price: string;
  quantity: number;
}

interface WishlistItem {
  id: string;
  title: string;
  price: string;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  wishlist: WishlistItem[];
  addToCart: (product: Omit<CartItem, "quantity">, tabName: string) => void;
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  updateCartQuantity: (id: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const addToCart = (product: Omit<CartItem, "quantity">, tabName: string) => {
    const uniqueId = `${tabName}-${product.id}`;
    const existingProduct = cart.find((item) => item.id === uniqueId);
    if (existingProduct) {
      updateCartQuantity(uniqueId, existingProduct.quantity + 1);
    } else {
      setCart((prev) => [...prev, { ...product, id: uniqueId, quantity: 1 }]);
    }
    alert("Item added to cart!");
  };

  const addToWishlist = (item: WishlistItem) => {
    if (!wishlist.some((wishlistItem) => wishlistItem.id === item.id)) {
      setWishlist((prev) => [...prev, item]);
      alert("Item added to wishlist!");
    }
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        addToWishlist,
        removeFromWishlist,
        removeFromCart,
        clearCart,
        updateCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
