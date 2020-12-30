import product1 from '../../images/beef.jpg';
import product2 from '../../images/beens-and-bacon.jpg';
import product3 from '../../images/carrots.jpg';
import product4 from '../../images/curry-indian.jpg';
import product5 from '../../images/tomatoe.jpg';

export const productData = [
  {
    id: 0, 
    name: "Beef Soup",
    price: '139 kr',
    button: 'Add to Cart', 
    img: product1,
    quantityInCart: 0,
    inCart: false
  },
  {
    img: product2,
    alt: 'Soup',
    name: 'Beens Soup',
    price: '119 kr',
    button: 'Add to Cart'
  },
  {
    img: product3,
    alt: 'Soup',
    name: 'Carrots Soup',
    price: '139 kr',
    button: 'Add to Cart'
  },

  {
    img: product4,
    alt: 'Soup',
    name: 'Curry Indian Soup',
    price: '119 kr',
    button: 'Add to Cart'
  },
  {
    img: product5,
    alt: 'Soup',
    name: 'Tomatoes Soup',
    price: '129 kr',
    button: 'Add to Cart'
  },
];

