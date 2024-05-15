import SearchInput from "./search"
import Filter from "./filter"
import CountryList from "./country-list"


const CountryListPage = () => {


  return (
    <section className="max-w-screen-xl mx-auto mt-6">
      <div className="flex justify-between items-center">
        <SearchInput />
        <Filter />
      </div>

      <CountryList />
    </section>
  )
}

export default CountryListPage