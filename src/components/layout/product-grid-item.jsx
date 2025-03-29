import Link from "next/link";
import Grid from "../grid";
import { GridTileImage } from "../grid/tile";


export default function ProductGridItems({
    products,
}) {
    return (
        <>
            {products.map((product) => (
                <Grid.Item key={product.handle} className="animate-fadeIn">
                    <Link
                        href={`/product/${product.handle}`}
                        className="relative inline-block h-full w-full"
                        prefetch={true}
                    >
                        <GridTileImage
                            alt={product.title}
                            label={{
                                title: product.title,
                                amount: product.priceRange.maxVariantPrice.amount,
                                currencyCode: product.priceRange.maxVariantPrice.currencyCode,
                            }}
                            src={product.featuredImage?.url}
                            fill
                            sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                    </Link>
                </Grid.Item>
            ))}
        </>
    );
}