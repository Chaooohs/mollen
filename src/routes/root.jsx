import { Outlet, useLocation } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import { useSelector } from "react-redux";
import { Transition } from "react-transition-group";

import { Aside, BurgerMenu, ClearCart, Footer, Header, LimitGoodsModal, RemoveCartItem } from "../components";

export const Root = () => {
  const location = useLocation()
  const isLaptop = useMediaQuery({ maxWidth: 1025 })
  const { cartModalOpen, cartItemModalOpen, limitGoodsModal } = useSelector(state => state.modal)
  const { sidebar, burger } = useSelector(state => state.open)
  return (
    <div className="page">
      <Header />
      <Outlet />
      {
        location.pathname !== "/cart" || !isLaptop ?
          < Footer /> : null
      }
      {
        cartModalOpen &&
        <ClearCart />
      }
      {
        cartItemModalOpen &&
        <RemoveCartItem />
      }
      {
        sidebar &&
        <Aside />
      }
      {
        limitGoodsModal &&
        <LimitGoodsModal />
      }

      <Transition in={burger} timeout={300} unmountOnExit>
        {state => (
          <BurgerMenu state={state}/>
        )}
      </Transition>
    </div>
  );
};
