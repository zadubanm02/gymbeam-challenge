import { Product } from "@/lib/types";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Progress } from "./ui/progress";

type ProductProps = {
  product: Product;
};

export function ProductCard({ product }: ProductProps) {
  return (
    <Card className="w-full m-2 max-h-80 border-none shadow-none items-center">
      <CardHeader>
        <Image
          className="w-auto"
          width={96}
          height={96}
          src={product.thumbnail}
          alt={product.name}
        />
      </CardHeader>
      <CardContent>
        <h3 className="text-center font-semibold text-sm">{product.name}</h3>
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-center">
        <div className="flex flex-row">
          <p className="text-xs">
            {product.rating_summary}% ({product.reviews_count})
          </p>
        </div>
        <Progress value={product.rating_summary} className="w-[60%] my-2" />

        {/* <p className="text-center font-bold text-xs">
          {product.rating_summary}
        </p> */}
        <p className="text-center font-bold text-xs">
          {product.formatted_price}
        </p>
      </CardFooter>
    </Card>
  );
}
