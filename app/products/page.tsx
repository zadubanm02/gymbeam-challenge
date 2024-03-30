import Filters from "@/components/filters";
import { ProductCard } from "@/components/product-card";
import { callApi } from "@/lib/api";
import { getFilters, getProducts } from "@/lib/queries";

export default async function ProductsPage({ searchParams }) {
  const response = await callApi(searchParams);
  const products = getProducts(response);
  const filters = getFilters(response);
  return (
    <div className="max-h-screen p-5">
      <h2 className="font-bold text-xl">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-7 ">
        <div className="w-full col-span-1 md:col-span-2">
          <h2 className="font-semibold text-sm">Sports nutrition</h2>
          <Filters params={searchParams} filters={filters} />
        </div>
        <div className="col-span-1 md:col-span-5 md:grid md:grid-cols-3 md:gap-8">
          {products.length > 1 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No Products</p>
          )}
        </div>
      </div>
    </div>
  );
}
