import { useState } from 'react';

import close from '../../assets/header_icons/close.png';
import logo_colored from './icons/header_icons/logo_colored.svg';
import logo_white from './icons/header_icons/logo_white.svg';
import menu_black from './icons/menu_black.png';
import menu_white from './icons/menu_white.svg';

import style from './styles.module.scss';

const Header = ({ isHeaderFixed }) => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  function handleClick() {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  }

  const showElement = isHeaderFixed ? (
    <img src={menu_black} alt="menu" />
  ) : (
    <img src={menu_white} alt="menu" />
  );

  return (
    <>
      <div className={`${style.root} ${isHeaderFixed ? style.sticky : ''}`}>
        <div className={style.header}>
          <div className={style.header_icon}>
            {isHeaderFixed ? (
              <img src={logo_colored} alt="guardian" />
            ) : (
              <img src={logo_white} alt="guardian" />
            )}
          </div>
          <div className={`${style.header_menu}`}>
            <div className={`${style.header_registration}`}>
              <div
                className={`${style.sign_in} ${
                  isHeaderFixed ? style.scroll_sign_in : ''
                }`}
              >
                Sign in
              </div>
              <div
                className={`${style.register} ${
                  isHeaderFixed ? style.scroll_register : ''
                }`}
              >
                Register
              </div>
            </div>
            <button onClick={handleClick} className={style.scroll_menu}>
              {showElement}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpened && (
        <div className={`${style.mobile_menu} container_spacing`}>
          <div className={style.title}>
            <img src={logo_colored} alt="guardian" />
            <button onClick={handleClick}>
              <img src={close} alt="close" />
            </button>
          </div>
          <ul className={style.header_nav}>
            <li>Home</li>
            <li>Property Fraud</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </>
  );
};
export default Header;
