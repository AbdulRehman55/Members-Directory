import { ListItem, ListItemAvatar } from '@mui/material'
import React from 'react'
import Image from '../Image'
import { PrimaryTitle, SecondaryTitle } from '../../style'
import { MaterialListItemText, SubSecondaryTitle } from './style'

interface ListProps {
    isBorder: boolean
    isPrimaryTitle: boolean
    primaryTitle: string
    isSecondaryTitle: boolean
    secondaryTitle: string
    isSubSecondaryTitle: boolean
    subSecondaryTitle: string
    isIcon: boolean
    Icon: string
}

const AppList: React.FC<ListProps> = ({
    isBorder,
    isPrimaryTitle,
    primaryTitle,
    isSecondaryTitle,
    secondaryTitle,
    isSubSecondaryTitle,
    subSecondaryTitle,
    isIcon,
    Icon,
}): JSX.Element => {
    return (
        <ListItem>
            <ListItemAvatar>
                {isIcon && <Image src={Icon} alt="facebook_icon" />}
            </ListItemAvatar>
            <MaterialListItemText
                border={isBorder}
                primary={
                    isPrimaryTitle && (
                        <PrimaryTitle>{primaryTitle}</PrimaryTitle>
                    )
                }
                secondary={
                    <>
                        {isSecondaryTitle && (
                            <SecondaryTitle variant="body2">
                                {secondaryTitle}
                            </SecondaryTitle>
                        )}
                        {isSubSecondaryTitle && (
                            <SubSecondaryTitle variant="subtitle2">
                                {subSecondaryTitle}
                            </SubSecondaryTitle>
                        )}
                    </>
                }
            />
        </ListItem>
    )
}

export default AppList
