import React from 'react'
import { Typography, Box } from '@mui/material'
import Image from '../../components/Image'
import CompanyIcon from '../../img/Company.svg'
import FacebookIcon from '../../img/facebook.svg'
import TwitterIcon from '../../img/twitter.svg'
import LinkedonIcon from '../../img/linkedin.svg'
import InboxxIcon from '../../img/inbox.svg'
import TelephoneIcon from '../../img/telephone.svg'
import MobileIcon from '../../img/mobile.svg'
import WebIcon from '../../img/web.svg'
import { GlbobalList, GlobalDivider } from '../../style'
import AppList from '../../components/List/AppList'

const data = [
    {
        primaryName: 'info@Domain.com',
        secondaryName: 'Sponsor Name',
        icon: InboxxIcon,
        subSecondaryName: null,
    },
    {
        primaryName: '+1 800 456 789h',
        secondaryName: 'Primary',
        icon: TelephoneIcon,
        subSecondaryName: null,
    },
    {
        primaryName: '+1 800 456 789',
        secondaryName: 'Compotate',
        icon: MobileIcon,
        subSecondaryName: null,
    },
    {
        primaryName: 'Companydomain.com',
        secondaryName: 'Website',
        icon: WebIcon,
        subSecondaryName: null,
    },
]

const SponsorDetails = (): JSX.Element => {
    return (
        <Box>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Box width="200px">
                    <Image
                        src={CompanyIcon}
                        alt="Company_Logo"
                        width="100%"
                        height="100%"
                        margin="0"
                    />
                </Box>
                <Box display="flex">
                    <Image src={FacebookIcon} alt="facebook_icon" />
                    <Image src={TwitterIcon} alt="twitter_icon" />
                    <Image src={LinkedonIcon} alt="linkedon_icon" />
                </Box>
            </Box>

            <Box marginTop="2rem">
                <Typography marginBottom="3px" variant="h4">
                    Company Name
                </Typography>
                <Typography marginBottom="3px">Contact Name</Typography>
                <Typography marginBottom="3px">City, State</Typography>
            </Box>
            <GlobalDivider variant="fullWidth" mt="1.7rem" mb="10px" />

            <GlbobalList flex justify column={false}>
                {data.map((item, index) => {
                    return (
                        <AppList
                            isBorder={index !== data.length - 1}
                            isPrimaryTitle
                            primaryTitle={item.primaryName}
                            isSecondaryTitle
                            secondaryTitle={item.secondaryName}
                            isSubSecondaryTitle={!!item.subSecondaryName}
                            subSecondaryTitle={item.subSecondaryName}
                            isIcon={!!item.icon}
                            Icon={item.icon}
                        />
                    )
                })}
            </GlbobalList>
            <GlobalDivider variant="fullWidth" mt="10px" />
        </Box>
    )
}

export default SponsorDetails
