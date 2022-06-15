import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Footer() {
    return (
        <footer>
            <Box>
                <Container maxWidth="lg"
                    sx={{ textAlign: "center", mt: 50 }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sx={{ p: 5 }}>
                            <Box borderBottom={1}>
                            </Box>
                            <Box sx={{ pt: 2 }}>
                                <img src="/images/footerLogo.png" alt="footerLogo" className="logo" width="70" height="70" />
                            </Box>
                            <Box
                                sx={{ color: 'rgb(72, 69, 69)' }}
                            >
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