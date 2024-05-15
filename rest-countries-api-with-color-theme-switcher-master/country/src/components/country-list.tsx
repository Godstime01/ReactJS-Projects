// import data from '../../data.json'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./shadcn/ui/card"
import { useGetAllCountryQuery } from "@/features/apiSlice"

const CountryList = () => {

    const { data, error, isLoading } = useGetAllCountryQuery("")
    console.log(data, error)

    return (
        <section className="max-w-screen-xl mx-auto mt-6">

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {
                    data.map((country : any) => {
                        return <Card className='p-0 shadow-md'>
                            <CardHeader className='p-0 w-full h-[150px]'>
                                <img src={country.flag} className='h-full max-h-full !w-full object-fill' />
                            </CardHeader>
                            <CardContent className='mt-2'>
                                <CardTitle>{country.name}</CardTitle>
                                <CardDescription>{country.capital}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                <CardDescription>{country.population}</CardDescription>
                            </CardFooter>
                        </Card>
                    })
                }

            </div>
        </section>
    )
}

export default CountryList