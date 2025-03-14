import Link from "next/link";
import Image from "next/image";
import product1 from '../../public/images/product1.jpg';
import product2 from '../../public/images/product2.jpeg';
import product3 from '../../public/images/product3.jpeg';
import product4 from '../../public/images/product4.jpeg';
import product5 from '../../public/images/product5.jpeg';
import { Key } from "lucide-react";
import PageIllustration from "./page-illustration";

export const Products = [
  {
     id: 1, name: "Wave Tee",
     price: "$59.00",
     oldPrice: "$79.00",
     images: [product1, product2, product3], 
     description: "Our fan favorite, this asymmetrical T-shirt silhouette is designed in our soft and functional Tech Tee fabric to be an elevated version of your favorite basic. The feminine style drapes in all the right places. The only question is how many colors do you need?",
     sizes: { XS: "32in Chest", S: "34in Chest", M: "36in Chest", L: "38in Chest", XL: "40in Chest" },
     colors: { Black: "Sleek Black", Gray: "Classic Gray" }
  },
  {
    id: 2, name: "Wave Tee",
    price: "$59.00",
    oldPrice: "$79.00",
    images: [product1, product2, product3], 
    description: "Our fan favorite, this asymmetrical T-shirt silhouette is designed in our soft and functional Tech Tee fabric to be an elevated version of your favorite basic. The feminine style drapes in all the right places. The only question is how many colors do you need?",
    sizes: { XS: "32in Chest", S: "34in Chest", M: "36in Chest", L: "38in Chest", XL: "40in Chest" },
    colors: { Black: "Sleek Black", Gray: "Classic Gray" }
 },
 {
    id: 3, name: "Wave Tee",
    price: "$59.00",
    oldPrice: "$79.00",
    images: [product1, product2, product3], 
    description: "Our fan favorite, this asymmetrical T-shirt silhouette is designed in our soft and functional Tech Tee fabric to be an elevated version of your favorite basic. The feminine style drapes in all the right places. The only question is how many colors do you need?",
    sizes: { XS: "32in Chest", S: "34in Chest", M: "36in Chest", L: "38in Chest", XL: "40in Chest" },
    colors: { Black: "Sleek Black", Gray: "Classic Gray" }
 },
];

export default function ProductsPage() {
  return (
    <div>
      <PageIllustration/>
      
    <div className="bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="bg-gray-800 rounded-xl p-4 shadow-lg hover:scale-105 transition-transform cursor-pointer">
              <Image src={product.images[0]} alt={product.name} width={300} height={200} className="rounded-lg" />
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