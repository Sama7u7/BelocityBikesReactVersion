import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import DetalleProducto from "../../Components/DetalleProducto";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      Home
      <div className="grid gap-4  grid-cols-2 sm:grid-cols-4 w-full max-w-screen-lg px-2">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <DetalleProducto />
    </Layout>
  );
}

export default Home;
