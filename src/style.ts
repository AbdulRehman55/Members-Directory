import { Divider, List, styled, Typography } from '@mui/material'

interface DividerProps {
    mt?: string
    mb?: string
}
interface ListProps {
    flex: boolean
    justify: boolean
    column: boolean
}

export const GlobalDivider = styled(Divider)<DividerProps>`
    margin-bottom: ${(props) => props?.mb && props.mb};
    margin-top: ${(props) => props?.mt && props.mt};
`

export const GlbobalList = styled(List)<ListProps>`
    width: 100%;
    background-color: transparent;
    display: ${(props) => (props?.flex ? 'flex' : '')};
    justify-content: ${(props) => (props?.justify ? 'space-between' : '')};
    flex-direction: ${(props) => (props?.column ? 'column' : 'row')};
    @media only screen and (max-width: 1300px) {
        flex-wrap: wrap;
    }
`
export const PrimaryTitle = styled(Typography)`
    font-weight: 700;
    color: #003b5c;
`
export const SecondaryTitle = styled(Typography)`
    font-weight: 700;
    color: #007bbd;
`
export const SubTitle = styled(Typography)`
    font-weight: 700;
    color: #5a5a5a;
`
