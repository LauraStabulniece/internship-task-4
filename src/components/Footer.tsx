import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Footer = () => {
    return (
        <footer>
            <Box>
                <Container maxWidth="lg">
                    <img src="/images/footerLogo.png" alt="footerLogo" className="logo" width="70" height="70" />
                </Container>
            </Box>
        </footer>
    )
}
export default Footer;