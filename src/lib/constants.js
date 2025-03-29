export const TAGS = {
    collections: 'collections',
    products: 'products',
    cart: 'cart'
}


export const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2025-01/graphql.json'

export const defaultSort = {
    title: 'Relevance',
    slug: null,
    sortKey: 'RELEVANCE',
    reverse: false
}
export const sorting = [
    defaultSort,
    { title: "Trending", slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false },
    { title: "Latest arrivals", slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
    { title: "Price: Low to high", slug: 'price-asc', sortKey: 'PRICE', reverse: false },
    { title: "Price: High to low", slug: 'price-desc', sortKey: 'PRICE', reverse: true },
]

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden'
export const DEFAULT_OPTION = "Default Title";