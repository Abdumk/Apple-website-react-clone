import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import Four04 from '../Routes/Four04/Four04';

function SingleAppleProduct() {
    const [product, setProducts] = useState([]);
  const { pid } = useParams(); //i want to get productID from URL params

  useEffect(() => {
    fetch("http://localhost:3001/iphones")
      .then((res) => res.json())
      .then((data) => {
        const productList = data.products;
        const singleProduct = productList.filter((x) => x.product_url === pid); // we need call back function to return ture or false
        //remember when it's true it give array of single product or one index
        setProducts(singleProduct); // Move this inside the same .then scope
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [pid]); 
  


//   console.log("on pageee---",singleProduct);
  if (product.length){
  return (
    <div>
    <section className="internal-page-wrapper top-100">
      <div className="container">
        {product?.map((product) => {
          let id = product.product_url;
          let title = product.product_name;
          let img = product.product_img;
          let Brief = product.product_brief_description;
          let StartPrice = product.starting_price;
          let PriceRange = product.price_range;
          let productPage = "/iphone/" + id;
          let details = product.product_description;

          let productDiv = (
            <div key={id} className="bottom-100">
              <div className="row justify-content-center text-center bottom-50">
                <div className="col-12  mt-5 pt-5">
                  <div className="title-wraper bold">{title}</div>
                  <div className="brief-description">{Brief}</div>
                </div>
              </div>

              <div className="row justify-content-center text-center product-holder h-100">
                <div className={`col-sm-12 col-md-6 my-auto`}>
                  <div className="starting-price">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="product-details">{details}</div>
                </div>

                <div className={`col-sm-12 col-md-6`}>
                  <div className="prodict-image">
                    <img src={img} />
                  </div>
                </div>
              </div>
            </div>
          );
          return productDiv;
        })}
      </div>
    </section>
  </div>
  );
}else{
  return <Four04 />
}
}

export default SingleAppleProduct