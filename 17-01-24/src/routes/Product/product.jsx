import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../Product/index.module.scss";

export default function Product() {
  const { productId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className={styles.product}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1>{product.title}</h1>
          <h3>{product.brand}</h3>
        </div>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
      </div>
      <section className={styles.body}>
        <img src={product.thumbnail} alt={product.title} />
        <div className={styles.textWrapper}>
          <strong>Price: {product.price} $</strong>
          <strong>Discount:{product.discountPercentage} %</strong>
          <p>{product.category}</p>
        </div>
      </section>
      <div className={styles.gallery}>
        {product.images &&
          product.images.map((image) => (
            <img
              className={styles.productImg}
              src={image}
              alt={image}
              key={image}
            />
          ))}
      </div>
    </div>
  );
}
