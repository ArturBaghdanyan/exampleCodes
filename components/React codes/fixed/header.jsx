import { useState } from 'react';

import close from '../../assets/header_icons/close.png';
import logo_colored from './icons/header_icons/logo_colored.svg';
import logo_white from './icons/header_icons/logo_white.svg';
import menu_black from './icons/menu_black.png';
import menu_white from './icons/menu_white.svg';

import style from './styles.module.scss';

const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  
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
    </>
  );
};
export default Header;
