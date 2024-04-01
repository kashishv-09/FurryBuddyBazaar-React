import React, { useState } from 'react';
import './Service.css'; // Import CSS file
import { FaShoppingCart } from 'react-icons/fa'; // Import shopping cart icon
const productsData = [
  { id: 1, name: 'Pedigree', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 3131, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/1_8_f8bdf03e-8eb3-4487-a04a-3412bd61fe6f.jpg?v=1710935989' },
  { id: 2, name: 'Pet Food', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 999, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/BOGO_10_a2d4bded-afc4-443a-8e31-bb6241f162a1.png?v=1707470556' },
  { id: 1, name: 'Dog Treat', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 184, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/products/supertails_42_1_adc76bb5-0358-4e6e-97ac-16fc5b6d9af4-507261.png?v=1696575671' },
  { id: 2, name: 'Shampoo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 395, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/GroomingShampoo_1_ba738813-5e82-445f-9e5d-124f7c224777.png?v=1696635067' },
  { id: 1, name: 'Dog Shampoo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 264, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/products/Frame1_56.png?v=1655830633' },
  { id: 2, name: 'T-shirt', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 399, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/SAKTRSCAT-8.png?v=1710582754' },
  { id: 1, name: 'Jersey', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 549, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Frame13050.png?v=1710582589' },
  { id: 2, name: 'Pet Toy', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 100, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/products/Frame_94_fb042cf4-c0a7-439d-b1fc-c6861dd733c9-326163.png?v=1696515472' },
  { id: 1, name: 'Bed', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 1079, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Frame106723080_9d1d9ee1-4a67-482c-b0cb-eabd36d534a6.png?v=1706074657' },
  { id: 2, name: 'Bed', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 749, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Frame12643.png?v=1696605229' },
  { id: 1, name: 'Bowl', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 292, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Frame1-2023-02-27T111518.185_88f2a0c5-cc97-4c01-b2d8-70b052115900.png?v=1696445120' },
  { id: 2, name: 'Bowl', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 200, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/products/Frame_44_b6b73676-66fc-492b-b456-46650fd9c5a1-318524.png?v=1696472268' },
  { id: 1, name: 'Vitamins', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 500, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Frame12677_2.jpg?v=1696847878' },
  { id: 2, name: 'Waste Disposal', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 240, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/1_6_fa141dfe-fe7a-4fc2-b2b1-b25ba62ae798.png?v=1707916367' },
  { id: 1, name: 'Whisker', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 2060, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/products/Group106.png?v=1700817567' },
  { id: 2, name: 'Cat Food', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 2014, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Frame6-2022-12-30T1636132.png?v=1708084346' },
  { id: 1, name: 'Waste Disposal', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 213, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Frame1-2022-06-15T182420.372_495832f9-9ad3-442b-a4e3-b049dcc250ef.png?v=1696621589' },
  { id: 2, name: 'Cat treat', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 116, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/products/Frame1-2022-11-03T123429.868-283782.png?v=1696425983' },
  { id: 1, name: 'Cookies', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 404, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/SALMON-_-SKIPKJACK.png?v=1700739815' },
  { id: 2, name: 'Harness', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 115, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Frame-2023-07-29T114547.823.png?v=1696620931' },
  { id: 1, name: 'Toy', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 204, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/products/Frame11865-796809.png?v=1696473625' },
  { id: 1, name: 'Shampoo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 675, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/GroomingShampoo-35.png?v=1696636130' },

];

const Services = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const productsPerPage = 6;

  // Calculate index range for products to display on current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsData.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle pagination
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Function to add item to cart
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="services-container">
      <div className="cart">
        <FaShoppingCart />
        <span>{cartCount}</span>
      </div>
      <h1 className="services-heading">Our Services</h1>
      <div className="products-grid">
        {currentProducts.map(product => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ₹{product.price}</p>
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {currentPage > 1 && <button onClick={handlePrevPage}>Previous</button>}
        {currentProducts.length === productsPerPage && (
          <button onClick={handleNextPage}>Next</button>
        )}
      </div>
    </div>
  );
};

export default Services;
