'use client'
import Image from "next/image";
import second from '../../public/images/office.jpg';
import { link } from "fs";
import Link from "next/link";

const categories = [
  { id: 1,name: "Stationery", image: second },
  {id: 2, name: "Office Stationery", image: second },
  {id: 3, name: "Jewellery", image: second },
  { id: 4,name: "Bags", image: second },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
         <Link key={category.id} href={`/categories/${category.id}`}>
         <div 
            key={index} 
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer"
          >
            <Image 
              src={category.image} 
              alt={category.name} 
              width={300} 
              height={200} 
              className="w-full h-48 object-cover" 
            />
            <h2 className="text-xl font-semibold text-center py-4">{category.name}</h2>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
