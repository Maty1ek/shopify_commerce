'use client'
import { createUrl } from "@/lib/utils";
import { redirect, usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {
    const searchParams = useSearchParams()
    const route = useRouter()

    function onSubmit(e) {
        e.preventDefault()

        const val = e.target
        const search = val.search
        const newParams = new URLSearchParams(searchParams.toString())

        if(search.value) {
            newParams.set('q', search.value)
        } else {
            newParams.delete('q')
        }

        route.push(createUrl('/search', newParams))
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" key={searchParams?.get('q')} name="search" placeholder="Search for products..." defaultValue={searchParams?.get('q') || ''} />
        </form>
    )
}