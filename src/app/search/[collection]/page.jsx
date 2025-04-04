import Grid from "@/components/grid"
import ProductGridItems from "@/components/layout/product-grid-item"
import { defaultSort, sorting } from "@/lib/constants"
import { getCollectionProducts } from "@/lib/shopify"

export default async function CategoryPage({ params, searchParams }) {
    const awaitedSort = await searchParams
    const { sort } = awaitedSort
    const awaitedParams = await params
    const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort
    const products = await getCollectionProducts({ collection: awaitedParams.collection, sortKey, reverse })

    return (
        <section>
            {products.length === 0 ? (
                <p className="py-3 text-lg">{`No products found in this collection`}</p>
            ) : (
                <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <ProductGridItems products={products} />
                </Grid>
            )}
        </section>
    )
}
