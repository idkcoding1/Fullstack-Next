'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PageIllustration from "./page-illustration";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  // Fetch products data from the API on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <PageIllustration />
      
      <div className="bg-gray-900 text-white p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="bg-gray-800 rounded-xl p-4 shadow-lg hover:scale-105 transition-transform cursor-pointer">
                <Image src={product.images[0]?.url || '/images/bags.jpg'} alt={product.name} width={300} height={200} className="rounded-lg" />
                <h2 className="text-xl mt-2 font-semibold">{product.name}</h2>
                <p className="text-lg text-green-400">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
