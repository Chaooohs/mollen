import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import { Root, ErrorPage, HomePage, CatalogPage, SingleGoodPage, CartPage, SearchPage, PaymentPage, GuaranteePage, ReturnPage, ContactPage } from "./routes";
import "./index.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="catalog" element={<CatalogPage />} />
      <Route path=":id" element={<SingleGoodPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="products" element={<SearchPage />} />
      <Route path="payment" element={<PaymentPage />} />
      <Route path="guarantee" element={<GuaranteePage />} />
      <Route path="return" element={<ReturnPage />} />
      <Route path="contacts" element={<ContactPage />} />
      <Route path="error" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
