/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__search">
        <input className="header__searc--input" type="text" />
        {/* search logo */}
        <SearchIcon />
      </div>
      <div className="header__nav">
        <div className="header__nav--link">
          <span className="header__nav--link-name">Code47</span>
          <span className="header__nav--link-signin">Sign In</span>
        </div>
        <div className="header__nav--link">
          <span className="header__nav--link-return">Returns</span>
          <span className="header__nav--link-order">& Orders</span>
        </div>
        <div className="header__nav--link">
          <span className="header__nav--link-your">Your</span>
          <span className="header__nav--link-prime">Prime</span>
        </div>
        <div className="header__nav--link">
          <span className="header__nav--link-shop">
            <ShoppingCartOutlinedIcon />
          </span>
          <span className="header__nav--link-cart">cart</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
