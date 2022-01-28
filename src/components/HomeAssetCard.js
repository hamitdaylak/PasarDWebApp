import { styled } from '@mui/material/styles';
import { Paper, Box, Stack, Typography, Button } from '@mui/material';
import Jazzicon from './Jazzicon';

const PaperStyle = styled(Paper)(({ theme }) => ({
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(35px)',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 0 80px rgb(0 0 0 / 25%)',
    padding: theme.spacing(2)
}));
const HomeAssetCard = (props)=>(
    <PaperStyle>
        <Box draggable = {false} component="img" src="https://ipfs0.trinity-feeds.app/ipfs/QmZrk4QRPM36LWpLiLXWv2a5Ypk7WbUEKGARBhReCVNDJz" sx={{ width: '100%', borderRadius: 1 }} />
        <Stack spacing={1} direction="row" sx={{py: 2}}>
            <Jazzicon address='0x123' sx={{mr: 0}}/>
            <Box sx={{ minWidth: 0, flexGrow: 1 }}>
                <Typography color="inherit" variant="subtitle2" noWrap>
                    Ph-1157
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                    0x651...000
                </Typography>
            </Box>
            <Box component="div" sx={{m:'auto !important', minWidth: '120px', textAlign: 'right'}}>
                <Button variant="contained" href="#">
                    Get featured
                </Button>
            </Box>
        </Stack>
    </PaperStyle>
)
export default HomeAssetCard;