import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

function Iphone() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // i can use or fetch json file found in folder public...datafetched...Iphone.json it work with out MAMP (databese) the draw back is i can't add or update so use these syntax fetch("../../../../public/datafetched/iphone.json")

    fetch("http://localhost:3001/iphones")
      .then((response) => response.json()) // these path give json file and convert to js object using of JSON string metho
      .then((data) => {
        const productsData = data.products;
        setProduct(productsData);  // after i get data i pass to updater function
      })
   
  }, []);

  console.log(`products are-----`, product);
  let order = 1;
  
  return (
    <div>
    <section className="internal-page-wrapper">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 mt-5 pt-5">
            <h1 className="font-weight-bold">Iphones</h1>
            <div className="brief-description mb">
              The best for the brightest.
            </div>
          </div>
        </div>
        {product?.map((product) => {
          let id = product.product_url;
          let title = product.product_name;
          let img = product.product_img;
          let Brief = product.product_brief_description;
          let StartPrice = product.starting_price;
          let PriceRange = product.price_range;
          let productPage = "/iphone/" + id;

          let order1 = 1;
          let order2 = 2;
          if (order !== 1) {
            order1 = 2;
            order2 = 1;
            order--;
          } else {
            order++;
          }

          let productDiv = (
            <div
              key={id}
              className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
            >
              <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                <div className="product-title">{title}</div>
                <div className="product-brief">{Brief}</div>
                <div className="starting-price">
                  {`Starting at ${StartPrice}`}
                </div>
                <div className="monthly-price">{PriceRange}</div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <Link to={productPage}>Learn more</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={`col-sm-12 col-md-6 order-${order2}`}>
                <div className="prodict-image">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          );
          return productDiv;
        })}
      </div>
    </section>
  </div>



  )
}

export default Iphone