import data from '../../data.json'
import { Button } from './shadcn/ui/button'


const CountrySingle = () => {

  console.log(data[0])
  const country = data[0]

  return (
    <div className='grid md:grid-cols-2 gap-6 items-center'>
      <div className='col-span-full'><Button className='justify-start'>Back</Button></div>

      <div>
        <img src={country.flags.png} className='w-full h-full' alt="" />
      </div>

      <div>
        <h2 className='text-3xl font-bold'>{country.name}</h2>

        <div className='grid md:grid-cols-2 my-10'>
          <ul className='flex flex-col gap-2'>
            <li>
              <span className='font-bold'>Native Name:</span>
              <span>{country.nativeName}</span>
            </li>

            <li>
              <span className='font-bold'>Population:</span>
              <span>{country.population}</span>
            </li>

            <li>
              <span className='font-bold'>Region:</span>
              <span>{country.region}</span>
            </li>

            <li>
              <span className='font-bold'>Sub Region:</span>
              <span>{country.subregion}</span>
            </li>

            <li>
              <span className='font-bold'>Capital:</span>
              <span>{country.capital}</span>
            </li>

          </ul>

          <ul className='flex flex-col gap-2'>
            <li>
              <span className='font-bold'>Top Level Domain:</span>
              <span>{country.topLevelDomain}</span>
            </li>

            <li>
              <span className='font-bold'>Currencies: </span>
              <span>{country.currencies[0].name}</span>
            </li>

            <li>
              <span className='font-bold'>Languages:</span>
              <span>{country.nativeName}</span>
            </li>
          </ul>
        </div>

        <div className='flex gap-3'>
          <span className='font-bold'>Border Countries: </span>

          {/* TODO: implement logic to fetch border countries */}
          <div className='flex gap-5 items-center'>
            {
              country?.borders.map((border) => {
                return <div className='shadow-md py-1 px-2 rounded-md'>
                  {border}
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountrySingle