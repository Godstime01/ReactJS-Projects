import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./shadcn/ui/card"
import { useGetAllCountryQuery } from "@/store/apiSlice"
import { getPagedData } from '@/lib/utils'
import { Link } from 'react-router-dom'

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components//shadcn/ui/pagination"



const CountryList = () => {


    const [data, setData] = useState([]); // Store fetched data
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);

    const { data: allData, error, isLoading, isError, isSuccess } = useGetAllCountryQuery()

    useEffect(() => {
        if (isSuccess) {
            setData(allData);
        }
    }, [allData, isSuccess]);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const pageData = getPagedData(data, currentPage, itemsPerPage)


    if (isLoading) {
        return <div>loading...</div>;
    }

    if (isError) {

        return <div>{error?.status}</div>;
    }

    return (
        <section className="max-w-screen-xl mx-auto mt-6">

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14">

                {
                    pageData.map((country: any) => {
                        return <Link to={``}>
                            <Card className='p-0 shadow-md'>
                                <CardHeader className='p-0 w-full h-[150px]'>
                                    <img src={country.flags.png} className='h-full max-h-full w-full object-fill' alt={country.flags.alt} />
                                </CardHeader>
                                <CardContent className='mt-2'>
                                    <CardTitle className='my-4'>{country.name.common}</CardTitle>
                                    <CardDescription className='grid gap-2'>
                                        <p><span className='font-bold'>Population: </span>{country.population}</p>
                                        <p><span className='font-bold'>Region: </span>{country.region}</p>
                                        <p><span className='font-bold'>Capital: </span>{country.capital}</p>
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </Link>
                    })
                }

            </div>

            <Pagination className="mt-3">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

        </section>
    )
}

export default CountryList