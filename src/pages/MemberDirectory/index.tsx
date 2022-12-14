import React, { useEffect, useState, useContext } from 'react'
import { Box, Typography, Divider, Grid, Button } from '@mui/material'
import _ from 'lodash'
import Card from '../../components/Card'
import { people } from './Data'
import { getAllMembers } from '../../Services'
import Loader from '../../components/Loader/Index'
import ToastAlert from '../../components/Alert'
import { searchContext } from '../../context'

export default function MemberDirectory(): ReactNode {
    const { value } = useContext(searchContext)
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [copyData, setCopyData] = useState([])
    const [loader, setLoader] = useState(false)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(12)
    async function getData(): Promise<any> {
        setLoader(true)
        let response = await getAllMembers()
        if (response.name === 'AxiosError') {
            setData(null)
            setError('Network Error')
            setLoader(false)
        } else {
            response = _.orderBy(response, ['FirstName'], ['asc'])
            console.log(response, '.members')
            setData(response)
            setCopyData(response)
            setLoader(false)
            setError('')
        }
    }
    useEffect(() => {
        getData()
    }, [])
    useEffect(() => {
        if (value === '') {
            setData(copyData)
            setError('')
        } else {
            const filterData = data.filter((v, i) => {
                return v.FirstName.includes(value) || v.LastName.includes(value)
            })
            if (filterData.length < 1) {
                setError('No Data Found')
            } else {
                setError('')
            }
            setData(filterData)
        }
    }, [value])

    const handleNext = (): any => {
        if (end < data.length) {
            setStart(start + 12)
            setEnd(end + 12)
        }
    }
    const handlePrevious = (): any => {
        if (start !== 0 && start > 0) {
            setStart(start - 12)
            setEnd(end - 12)
        }
    }

    const getCompanyName = (city: string, state: string): string | null => {
        if (city && state) {
            return `${city}, ${state}`
        }
        return null
    }
    return (
        <Box>
            {/* <Typography variant="h3">Platinum Doctors</Typography>
            <Typography variant="subtitle2">
                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui. 
            </Typography> */}
            {/* <Box>
                <Divider sx={{ mt: 1, mb: 1 }} />
                <Divider />
            </Box> */}
            {!loader ? (
                <>
                    <Grid container sx={{ width: '95%', m: 'auto', mt: 2 }}>
                        {data?.slice(start, end).map((each) => (
                            <Grid
                                display="flex"
                                justifyContent="center"
                                item
                                xs={12}
                                sm={12}
                                md={6}
                                lg={3}
                                xl={2}
                            >
                                <Card
                                    img={each.img}
                                    companyName={getCompanyName(
                                        each.BusinessCity,
                                        each.BusinessState
                                    )}
                                    practiceName={each.BusinessLabelName}
                                    firstName={each.FirstName}
                                    lastName={each.LastName}
                                    id={each.MasterCustomerID}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    {data?.length > 0 && (
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                                onClick={handleNext}
                            >
                                Next
                            </Button>
                            <Button
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                                onClick={handlePrevious}
                            >
                                Previous
                            </Button>
                        </Box>
                    )}
                    {error && (
                        <Box sx={{ p: 5 }}>
                            <ToastAlert error={error} />
                        </Box>
                    )}
                </>
            ) : (
                <Loader />
            )}
        </Box>
    )
}
