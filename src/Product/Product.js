// //do't forget these is popup question with only app.js component i commented at last line 

// import React, { useState, useEffect } from "react";
// import "./Product.css"; // Import the CSS styling

// function Product() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products?limit=5") // or local JSON path
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data); // Assuming data is an array of products
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div className="product-list">
//       {products?.map((item) => (
//         <div key={item.id} className="product-card">
//           <img src={item.image} alt={item.title} className="product-image" />
//           <h2 className="product-title">{item.title}</h2>
//           {/* Why Use .toFixed(2)?Prices and other numbers in financial contexts are often shown with two decimal 
//           places for consistency (e.g., $22.30 instead of $22.3). */}
//           <p className="product-price">${item.price.toFixed(2)}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Product;

// //do't forget these is popup question with only Product component

// import React from "react";
// import Product from "./Product/Product";

// function App() {
//   return (
//     <div>
//       <h1>Product List</h1>
//       <Product />
//     </div>
//   );
// }

// export default App;
