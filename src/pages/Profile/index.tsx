import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Avatar, Typography, Box } from '@mui/material'
import { getMemberProfileById, getProfileAccess } from '../../Services'
import AvatarImage from '../../img/Avatar.png'
import FacebookIcon from '../../img/facebook.svg'
import TwitterIcon from '../../img/twitter.svg'
import LinkedonIcon from '../../img/linkedin.svg'
import Image from '../../components/Image'
import {
    SubTitle,
    GlbobalList,
    GlobalDivider,
    PrimaryTitle,
    SecondaryTitle,
} from '../../style'
import AppList from '../../components/List/AppList'
import { AvatarBox, HeadingAndIconBox, HeadingBox, MainBox } from './style'
import InboxxIcon from '../../img/inbox.svg'
import TelephoneIcon from '../../img/telephone.svg'
import MobileIcon from '../../img/mobile.svg'

import AddressIcon from '../../img/address.svg'
import HomeIcon from '../../img/home.svg'
import LocationIcon from '../../img/location.svg'
import Loader from '../../components/Loader/Index'
import ToastAlert from '../../components/Alert'

const Profile = (): ReactNode => {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(null)
    const dataSheet1 = [
        {
            primaryName: `${data?.FirstName} ${data?.LastName}`,
            secondaryName: data?.BusinessLabelName,
            icon: InboxxIcon,
            subSecondaryName: `${data?.BusinessCity},${data?.BusinessState}`,
        },
        {
            primaryName: data?.WorkPhone,
            secondaryName: 'Primary',
            icon: TelephoneIcon,
            subSecondaryName: null,
        },
        {
            primaryName: data?.MobilePhone,
            secondaryName: 'Mobile',
            icon: MobileIcon,
            subSecondaryName: null,
        },
    ]
    const dataSheet2 = [
        {
            primaryName: data?.BusinessAddress1,
            secondaryName: null,
            icon: AddressIcon,
            subSecondaryName: null,
        },
        {
            primaryName: data?.HomeAddress1,
            secondaryName: null,
            icon: HomeIcon,
            subSecondaryName: null,
        },
        {
            primaryName: `${data?.BusinessCity},${data?.BusinessState}`,
            secondaryName: 'Directions',
            icon: LocationIcon,
            subSecondaryName: null,
        },
    ]
    async function getProfileById(): Promise<any> {
        setLoader(true)
        try {
            const response = await getMemberProfileById(id)
            console.log(response, 'response')
            if (response) {
                if (response.length > 1) {
                    setData(response[0])
                } else {
                    setData(response)
                }
                setError(null)
            }

            if (response.name === 'AxiosError') {
                setError('Network Error')
            }
        } catch (err) {
            setError('Network Error')
        }
        setLoader(false)
    }
    const getProfile = (): any => {
        setLoader(true)
        const member = getProfileAccess()
        setData(member)
        setLoader(false)
    }
    useEffect(() => {
        if (id) {
            getProfileById()
        } else {
            getProfile()
        }
    }, [])
    useEffect(() => {
        if (id) getProfileById()
    }, [id])
    return (
        <Box margin="100px auto" width="90%">
            {data && !error && (
                <MainBox>
                    <AvatarBox alt="avatar" src={data?.image} />
                    <Box width="100%">
                        <HeadingAndIconBox>
                            <HeadingBox marginLeft="2rem">
                                <Typography marginBottom="3px" variant="h6">
                                    {`${data?.FirstName} ${data?.LastName}`}
                                </Typography>
                                <Typography marginBottom="3px">
                                    {data?.BusinessLabelName}
                                </Typography>
                                <SubTitle marginBottom="3px">
                                    {`${data?.HomeCity}  ,${data?.HomeState}`}
                                </SubTitle>
                            </HeadingBox>
                            {/* <Box display="flex">
                                <Image src={FacebookIcon} alt="facebook_icon" />
                                <Image src={TwitterIcon} alt="twitter_icon" />
                                <Image src={LinkedonIcon} alt="linkedon_icon" />
                            </Box> */}
                        </HeadingAndIconBox>

                        <GlobalDivider variant="middle" mt="14px" mb="5px" />
                        <GlobalDivider variant="middle" />

                        <Box borderLeft="0.1em solid black" marginTop="2rem">
                            <Box marginLeft="2rem">
                                <GlbobalList flex justify column={false}>
                                    {dataSheet1.map((item, index) => {
                                        return (
                                            <AppList
                                                isBorder={
                                                    index !==
                                                    dataSheet1.length - 1
                                                }
                                                isPrimaryTitle
                                                primaryTitle={item.primaryName}
                                                isSecondaryTitle
                                                secondaryTitle={
                                                    item.secondaryName
                                                }
                                                isSubSecondaryTitle={
                                                    !!item.subSecondaryName
                                                }
                                                subSecondaryTitle={
                                                    item.subSecondaryName
                                                }
                                                isIcon={!!item.icon}
                                                Icon={item.icon}
                                            />
                                        )
                                    })}
                                </GlbobalList>
                                <Box marginTop="2rem">
                                    <Typography variant="h6">
                                        Education
                                    </Typography>
                                    <Box
                                        marginLeft="1.7rem"
                                        marginTop="1.5rem"
                                        marginBottom="1.5rem"
                                    >
                                        <PrimaryTitle variant="h6">
                                            {data?.ODSchool}
                                        </PrimaryTitle>
                                        <SecondaryTitle variant="body2">
                                            {/* School */}
                                        </SecondaryTitle>
                                    </Box>
                                    <Typography variant="h6">
                                        Affiliations
                                    </Typography>
                                    <Box marginLeft="1.7rem" marginTop="1.5rem">
                                        <PrimaryTitle variant="h6">
                                            Denver Metro Optometric Society
                                            (DMOS)
                                        </PrimaryTitle>
                                    </Box>
                                </Box>

                                <Box marginTop="2rem">
                                    <Typography variant="h6">
                                        Location
                                    </Typography>
                                    <GlbobalList
                                        flex={false}
                                        justify={false}
                                        column
                                    >
                                        {dataSheet2.map((item, index) => {
                                            return (
                                                <AppList
                                                    isBorder={false}
                                                    isPrimaryTitle
                                                    primaryTitle={
                                                        item.primaryName
                                                    }
                                                    isSecondaryTitle
                                                    secondaryTitle={
                                                        item.secondaryName
                                                    }
                                                    isSubSecondaryTitle={
                                                        !!item.subSecondaryName
                                                    }
                                                    subSecondaryTitle={
                                                        item.subSecondaryName
                                                    }
                                                    isIcon={!!item.icon}
                                                    Icon={item.icon}
                                                />
                                            )
                                        })}
                                    </GlbobalList>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </MainBox>
            )}
            {loader && !data && <Loader />}
            {error && <ToastAlert error={error} />}
        </Box>
    )
}

export default Profile
