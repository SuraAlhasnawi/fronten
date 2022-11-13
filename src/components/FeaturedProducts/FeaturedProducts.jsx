import React, { useState } from "react";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import "./featuredproducts.css";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([
    {
      id: 1,
      img_url:
      "https://www.kawaii.se/pub_images/medium/PS-HLB40101.jpg",
      category: "category",
      title: "Modern Black Blouse",
      rating: 2,
      price: "$35.5",
    },
    {
      id: 2,
      img_url:
        "https://cdn.aboutstatic.com/file/images/6eebd86dca0cd0a6600dcfb200aee7f6.png?bg=F4F4F5&quality=75&trim=1",
      category: "category",
      title: "Modern Black Blouse",
      rating: 2,
      price: "$35.5",
    },
    {
      id: 3,
      img_url:
        "https://www.captains.se/media/catalog/product/cache/8e554e2f9be0c4beea773df9aabcb44d/d/i/didriksons_grit_set_flame.jpg",
      category: "category",
      title: "Modern Black Blouse",
      rating: 4,
      price: "$35.5",
    },
    {
      id: 4,
      img_url:
        "https://ean-images.booztcdn.com/levi-men/232x303/g/lsm7912900240_cneutrals.jpg",
      category: "category",
      title: "Modern Black Blouse",
      rating: 4,
      price: "$35.5",
    },
    {
      id: 5,
      img_url:
        "https://ean-images.booztcdn.com/gant-clothing/232x303/g/gcl7006277_cebonyblack_v19.jpg",
      category: "category",
      title: "Modern Black Blouse",
      rating: 5,
      price: "$35.5",
    },
    {
      id: 6,
      img_url:
      "https://www.gant.se/dw/image/v2/BFLN_PRD/on/demandware.static/-/Sites-gant-master/default/dw1c1547ed/pim/202203/2201/363/202203-2201-363-flat-fv-1.jpg?sw=550",
        
      category: "category",
      title: "Modern Black Blouse",
      rating: 3,
      price: "$35.5",
    },
    {
      id: 7,
      img_url:
        "https://seniorlife.se/media/catalog/category/1_sko_.jpg",
      category: "category",
      title: "Modern Black Blouse",
      rating: 5,
      price: "$35.5",
    },
    {
      id: 8,
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwmN84CofmJYoL8VRDbxP95FbuWJGN-jzPQ&usqp=CAU",
      category: "category",
      title: "Modern Black Blouse",
      rating: 5,
      price: "$35.5",
    },
  ]);
  return (
    <section className="featured-products">
      <div className="container">
        <h3 className="title text-center mb-4">Featured Products</h3>
        <div className="row">
          {featuredProducts.map((product) => (
            <FeaturedProduct item={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
