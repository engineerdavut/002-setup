import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

export default function NavigationSource(){
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#44b700',
          color: '#44b700',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
          },
        },
      }));
    return(
        <div>
            <h1>Source</h1>
            <Link to="/target">ereğe git</Link><br/>
            <Link to="/target/321">ereğe değiştirgenle git</Link><br/>
            <Link to="/products">products</Link><br/>
            <Button variant="contained">Hello World</Button>
            <Avatar alt="Remy Sharp" src="/static/images/man.png" />
            <br/>
            <Stack direction="row" spacing={2}>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src="/static/images/man.png" />
                </StyledBadge>
                <Avatar alt="Travis Howard" src="/static/images/hacker.png" />
                <Avatar alt="woman" src="/static/images/woman.png" sx={{ width: 56, height: 56 }}/>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
            </Stack>
        </div>
    )
}