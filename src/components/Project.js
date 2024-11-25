import React from "react";

const productsData = [
  {
    image: require('../image/nike.jpg'),
    title: "Product 1",
    price: "₹999.99",
    description: "This is a short description of Product 1.",
  },
  {
   image: require('../image/shoe.png'),
    title: "Product 2",
    price: "₹999.99",
    description: "This is a short description of Product 2.",
  },
  {
    image: require('../image/nike3.jpg'),
    title: "Product 3",
    price: "₹999.99",
    description: "This is a short description of Product 3.",
  },
  {
    image: require('../image/nike2.jpg'),
    title: "Product 4",
    price: "₹999.99",
    description: "This is a short description of Product 4.",
  },
];


const Project = () => {
  return (
    <div id="products" className="py-8 bg-gray-100 flex flex-wrap justify-center gap-6 px-4">
      {productsData.map((product, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-60 md:w-72 hover:scale-105 transition-transform"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 sm:h-48 md:h-64 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold">{product.title}</h3>
            <p className="text-red-600 font-bold">{product.price}</p>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <button className="mt-4 px-4 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-800">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
