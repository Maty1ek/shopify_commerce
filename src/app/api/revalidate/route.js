import { revalidate } from "@/lib/shopify";

export async function POST(req) {
    return revalidate(req)
}