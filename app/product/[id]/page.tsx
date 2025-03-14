'use client'
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Products } from "@/components/Products";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = Products.find((p) => p.id === Number(id));

  const [selectedSize, setSelectedSize] = useState("Select a size");
  const [selectedColor, setSelectedColor] = useState("Select a color");
  const [mainImage, setMainImage] = useState<string | StaticImageData>(
    product?.images[0] ?? "/placeholder.jpg"
  );
  if (!product) return <div className="text-white text-center">Product not found</div>;

  return (
    <div className="pt-10">
      <div className="min-h-screen pt-20 bg-gray-900 text-white p-8 flex flex-col md:flex-row gap-10">
        
        {/* Left Section - Images */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
        {mainImage && (
  <Image 
    src={mainImage} 
    alt={product.name} 
    width={500} 
    height={600} 
    className="rounded-lg transition-all duration-300"
  />
)}
          {/* Thumbnails */}
          <div className="flex gap-2 mt-4">
            {product.images.map((img, index) => (
              <Image 
                key={index} 
                src={img} 
                alt={product.name} 
                width={80} 
                height={80} 
                className={`rounded-lg cursor-pointer border-2 
                  ${mainImage === img ? "border-blue-500" : "border-transparent"}`}
                onClick={() => setMainImage(img)} // Update main image on click
              />
            ))}
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-400 text-sm mt-1">Tech Jersey</p>
          <p className="text-gray-500 line-through text-lg mt-2">{product.oldPrice}</p>
          <p className="text-green-400 text-2xl">{product.price}</p>

          {/* Colors */}
          <p className="mt-6">Color: {selectedColor}</p>
          <div className="flex gap-2 mt-2 pt-3 pb-3">
            {Object.keys(product.colors).map((color) => (
              <div 
                key={color} 
                onClick={() => setSelectedColor(product.colors[color as keyof typeof product.colors])} 
                className={`w-8 h-8 rounded-full border-2 cursor-pointer 
                  ${selectedColor === product.colors[color as keyof typeof product.colors] ? "border-blue-500" : "border-white"} 
                  ${color === 'Black' ? 'bg-black' : 'bg-gray-500'}`}
              />
            ))}
          </div>

          {/* Sizes */}
          <div className="gap-x-3 mt-2">
            {product.sizes &&
              Object.keys(product.sizes).map((size) => (
                <button 
                  key={size} 
                  onClick={() => setSelectedSize(size)} 
                  className={`border px-4 py-2 rounded-lg hover:bg-gray-700 
                    ${selectedSize === size ? "bg-blue-600 text-white" : "text-white"}`}
                >
                  {size}
                </button>
              ))
            }
          </div>

          <p className="mt-6 text-gray-300">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
