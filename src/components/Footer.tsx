import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Footer() {
    return (
        <footer>
            <Box>
                <Container maxWidth="lg"
                    sx={{ textAlign: "center", mt: 30 }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sx={{ p: 3, color: 'rgba(68, 68, 63, 0.804)' }}>
                            <Box borderBottom={0.5}>
                            </Box>
                            <Box sx={{ pt: 1 }}>
                                <img src="/images/footerLogo.png" alt="footerLogo" className="logo" width="70" height="70" />
                            </Box>
                            <Box>
                                &copy; 2022 Copyright: Laura Stabulniece
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}
export default Footer;