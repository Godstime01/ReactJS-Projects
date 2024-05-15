import { Search } from "lucide-react"

const SearchInput = () => {
    return (
        <div className="rounded-sm overflow-hidden flex items-center shadow-md p-2 w-auto">
            <Search className="h-10 w-10" />
            <input
                className="h-10 w-200 bg-transparent border border-transparent"
                type="text"
                placeholder="Search"
            />
        </div>
    )
}

export default SearchInput