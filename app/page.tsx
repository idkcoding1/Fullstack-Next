import CategoriesPage from "@/components/categories";
import HeroHome from "@/components/hero";
import PageIllustration from "@/components/page-illustration";
import ProductsPage from "@/components/Products";
export default function Home() {
  return (
    <div>
      <PageIllustration/>
    <HeroHome/>
    
   <div className="pt-24">
    
   <CategoriesPage/>
   <ProductsPage/>
   
   </div>
    </div>
  );
}
