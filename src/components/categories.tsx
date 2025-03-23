'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Square, PlusCircle } from "lucide-react";

export default function ProductCategoriesSection() {
  const [categories, setCategories] = useState([]);

  // Fetch categories data from the API on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('/api/categories');
      const data = await response.json();
      setCategories(data);
    };
    
    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16">Our Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category: any) => (
            <div key={category.id} className="bg-[#f8f3ea] rounded-lg p-8 text-black">
              <div className="mb-4 text-black">
                <ChevronDown size={24} />
              </div>
              <h2 className="text-3xl font-light italic text-[#121717] mb-4">{category.name}</h2>
              <p className="text-gray-700">
                {category.description || 'No description available.'}
              </p>
            </div>
          ))}
          
          {/* CTA Card */}
          <div className="bg-blue-950 rounded-lg p-8 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore Our Collection?</h2>
            <p className="mb-8">Shop Premium Products Today</p>
            <Link href="/product">
              <div className="bg-yellow-400 text-black py-3 px-6 rounded-md text-center w-32 font-medium hover:bg-yellow-300 transition-colors">
                Shop Now
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
