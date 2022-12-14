import { ListItemText, styled, Typography } from '@mui/material'

type MaterialListItemTextProps = {
    border?: boolean
}

export const MaterialListItemText = styled(
    ListItemText
)<MaterialListItemTextProps>(({ border }) => ({
    position: 'relative',
    '&::before': border
        ? {
              content: '" "',
              width: 1,
              height: 50,
              background: '#007BBD',
              zIndex: 1,
              position: 'absolute',
              top: '50%',
              right: 0,
              transform: 'translateY(-50%)',
          }
        : 'none',
    '@media(max-width:1300px)': {
        '&::before': {
            display: 'none',
        },
    },
}))
export const SubSecondaryTitle = styled(Typography)`
    font-weight: 600;
    color: #5a5a5a;
`
