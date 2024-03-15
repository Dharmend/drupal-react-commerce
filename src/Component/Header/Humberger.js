import React from 'react';

function Humberger(){
    return(
        <>
        <div className="humberger__menu__overlay"></div>
        <div className="humberger__menu__wrapper">
        <div className="humberger__menu__logo">
            <a href="https://github.com"><img src="./images/logo.png" alt=""/></a>
        </div>
        <div className="humberger__menu__cart">
            <ul>
                <li><a href="https://github.com"><i className="fa fa-heart"></i> <span>1</span></a></li>
                <li><a href="https://github.com"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
            </ul>
            <div className="header__cart__price">item: <span>$150.00</span></div>
        </div>
        <div className="humberger__menu__widget">
            <div className="header__top__right__language">
                <img src="img/language.png" alt=""/>
                <div>English</div>
                <span className="arrow_carrot-down"></span>
                <ul>
                    <li><a href="https://github.com">Spanis</a></li>
                    <li><a href="https://github.com">English</a></li>
                </ul>
            </div>
            <div className="header__top__right__auth">
                <a href="https://github.com"><i className="fa fa-user"></i> Login</a>
            </div>
        </div>
        <nav className="humberger__menu__nav mobile-menu">
            <ul>
                <li className="active"><a href="https://github.com">Home</a></li>
                <li><a href="https://github.com">Shop</a></li>
                <li><a href="https://github.com">Pages</a>
                    <ul className="header__menu__dropdown">
                        <li><a href="https://github.com">Shop Details</a></li>
                        <li><a href="https://github.com">Shoping Cart</a></li>
                        <li><a href="https://github.com">Check Out</a></li>
                        <li><a href="https://github.com">Blog Details</a></li>
                    </ul>
                </li>
                <li><a href="https://github.com">Blog</a></li>
                <li><a href="https://github.com">Contact</a></li>
            </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div className="header__top__right__social">
            <a href="https://github.com"><i className="fa fa-facebook"></i></a>
            <a href="https://github.com"><i className="fa fa-twitter"></i></a>
            <a href="https://github.com"><i className="fa fa-linkedin"></i></a>
            <a href="https://github.com"><i className="fa fa-pinterest-p"></i></a>
        </div>
        <div className="humberger__menu__contact">
            <ul>
                <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                <li>Free Shipping for all Order of $99</li>
            </ul>
        </div>
    </div>
        </>
    )
}

export default Humberger;