import { ProductsMain } from "@/sections";
import { productMainProps } from "@/data";

export default function Home() {
  return (
    <main>
      <ProductsMain {...productMainProps} />
    </main>
  );
}
