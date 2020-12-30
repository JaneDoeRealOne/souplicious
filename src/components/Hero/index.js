import React, { useState } from 'react';
import Navbar from '../Navbar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroBtn>Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;