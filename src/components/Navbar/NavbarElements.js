import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { CgShoppingCart } from "react-icons/cg";


export const Nav = styled.nav`
background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`

color: #000000;
font-family: 'Lobster', cursive;
font-style: normal;
font-weight: normal;
font-size: 48px;

  cursor: pointer;
  
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #000000;
  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(CgShoppingCart)`
  font-size: 2rem;
`;

