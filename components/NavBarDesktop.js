import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import LogoNav from './LogoNav';
import NavBarDesktopStyle from './styles/NavBarDesktopStyle';

const NavBarDesktop = ({ top, isMobile }) => (
  <NavBarDesktopStyle top={top}>
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/galleries">
        <a>Gallery</a>
      </Link>
      <Link href="/testimonial">
        <a>Testimonials</a>
      </Link>
    </div>

    <LogoNav
      imgSrc={
        top
          ? 'static/logos/MainLogoWhite.svg'
          : 'static/logos/MainLogoMaroon.svg'
      }
      pad={false}
      isMobile={isMobile}
    />

    <div>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  </NavBarDesktopStyle>
);

NavBarDesktop.propTypes = {
  top: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default NavBarDesktop;
