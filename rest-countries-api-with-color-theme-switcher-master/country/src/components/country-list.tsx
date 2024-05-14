import SearchInput from "./search"
import Filter from "./filter"

const CountryList = () => {
  return (
    <section className="max-w-screen-xl mx-auto mt-6">
        <div className="flex justify-between items-center">
        <SearchInput />
        <Filter />
        </div>
    </section>
  )
}

export default CountryList