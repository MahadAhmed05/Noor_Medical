// pages/popular-products.tsx
import React from "react";

type Product = {
  id: string;
  name: string;
  image: string;
  type: string;
  packSize: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
};

const products: Product[] = [
  {
    id: "1",
    name: "Almond Oil 120 ml Bottle",
    image: "/assests/pp1.jpeg",
    type: "Oil",
    packSize: "120 ml",
    price: 560,
    originalPrice: 800,
    discountPercent: 30,
  },
  {
    id: "2",
    name: "Coconut Oil 120ml Bottle",
    image: "/assests/pp2.webp",
    type: "Oil",
    packSize: "120 ml",
    price: 238,
    originalPrice: 340,
    discountPercent: 30,
  },
  {
    id: "3",
    name: "KN95 Mask without filter",
    image: "/assests/pp3.webp",
    type: "Others",
    packSize: "1",
    price: 218,
    originalPrice: 229,
    discountPercent: 5,
  },
  {
    id: "4",
    name: "FreeStyle Libre Glucose Sensor",
    image: "/assests/pp4.webp",
    type: "Pcs",
    packSize: "1 Pcs.",
    price: 18026,
    originalPrice: 18975,
    discountPercent: 5,
  },
  {
    id: "5",
    name: "Cosarb Cream",
    image: "/assests/pp5.webp",
    type: "Cream",
    packSize: "35 gm",
    price: 2655,
    originalPrice: 2950,
    discountPercent: 10,
  },
];

const PopularProductsPage = () => {
  
  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Popular Products</h2>
        <div style={styles.grid}>
          {products.map((product) => (
            <div key={product.id} style={styles.card}>
              {product.discountPercent > 0 && (
                <div style={styles.badge}>{product.discountPercent}% Off</div>
              )}
              <img
                src={product.image}
                alt={product.name}
                style={styles.image}
              />
              <div style={styles.details}>
                <h3 style={styles.name}>{product.name}</h3>
                <p style={styles.meta}>{product.type}</p>
                <p style={styles.meta}>Pack Size: {product.packSize}</p>
                <div style={styles.prices}>
                  <span style={styles.price}>Rs {product.price}</span>
                  <span style={styles.original}>
                    Rs {product.originalPrice}
                  </span>
                </div>
                <button style={styles.button}>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PopularProductsPage;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
  },

  page: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f7f9fb",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    position: "relative",
    border: "1px solid #e0e0e0",
    borderRadius: "12px",
    backgroundColor: "#fff",
    padding: "16px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.2s",
  },
  badge: {
    position: "absolute",
    top: "0",
    right: "0",
    backgroundColor: "#e0f2ff",
    color: "#0077b6",
    fontSize: "12px",
    padding: "4px 8px",
    borderBottomLeftRadius: "8px",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
    marginBottom: "12px",
  },
  details: {
    width: "100%",
    textAlign: "center",
  },
  name: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "4px",
    minHeight: "38px",
  },
  meta: {
    fontSize: "12px",
    color: "#666",
    margin: "2px 0",
  },
  prices: {
    marginTop: "8px",
    marginBottom: "12px",
    fontSize: "14px",
  },
  price: {
    fontWeight: "bold",
    marginRight: "8px",
  },
  original: {
    textDecoration: "line-through",
    color: "#e63946",
    fontSize: "12px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#0077b6",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
  },
};
