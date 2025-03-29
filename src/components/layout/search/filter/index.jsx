import { FilterItem } from "./item";
import FilterItemDropDown from "./dropdown";


function FilterItemList({ list }) {
    return (
        <>
            {list.map((item, i) => (
                <FilterItem key={i} item={item} />
            ))}
        </>
    );
}

export default function FilterList({
    list,
    title,
}) {
    return (
        <>
            <nav>
                {title ? (
                    <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400">
                        {title}
                    </h3>
                ) : null}
                <ul className="hidden md:block">
                    <FilterItemList list={list} />
                </ul>
                <ul className="md:hidden">
                    <FilterItemDropDown list={list} />
                </ul>
            </nav>
        </>
    );
}