import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const Header = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));
