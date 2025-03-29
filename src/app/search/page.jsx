import Grid from "@/components/grid"
import ProductGridItems from "@/components/layout/product-grid-item"
import { defaultSort, sorting } from "@/lib/constants"
import { getProducts } from "@/lib/shopify"

export default async function CollectionsPage({searchParams}) {

    const {sort, q: searchValue} = await searchParams
    const {sortKey, reverse} = sorting.find((item) => item.slug === sort) || defaultSort
    const products = await getProducts({sortKey, reverse, query: searchValue})
    const resultsText = products.length > 1 ? 'results' : 'result' 

    return (
        <div>
            {searchValue ? (
                <p className="mb-4">
                    {
                        products.length === 0 ? "There are no products that match" : `Showing ${products.length} ${resultsText} for `
                    }
                    <span>&quot;{searchValue}&quot;</span>
                </p>
            ) : null}

            {products.length > 0 ? (
                <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <ProductGridItems products={products} />
                </Grid>
            ) : null}
        </div>
    )
}