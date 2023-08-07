import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from './Link';
import theme from "../utils/theme";

export default function Layout({children}) {
    //TODO: add dark mode
    return (
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}>
            <Container maxWidth='xl' component="main">
                <Toolbar component='nav' variant="regular" sx={{borderBottom: 1, borderColor: 'divider', alignItems: "right" }} >
                    <Box sx={{flex: 1}}>
                        <Button sx={{
                            flex: 1,
                            alignSelf: 'left',
                            underline: "none",
                            color: 'black',
                            "&.MuiButtonBase-root:hover": {
                                bgcolor: "transparent"
                            }
                        }}
                        variant="text"
                        disableElevation
                        disableRipple={true}
                        component={Link}
                        href="/">
                            <Typography>
                                luisplatzer.de
                            </Typography>
                        </Button>
                    </Box>
                    {/*<Typography variant="h6" align="left" sx={{flex: 1}}>*/}
                    {/*luisplatzer.de*/}
                    {/*</Typography>*/}
                    <Button sx={{margin: '1em'}} variant="text" disableElevation component={Link} href="/">
                    Home
                    </Button>
                    {/*<Button sx={{margin: '1em'}} variant="text" disableElevation component={Link} href="/about">*/}
                    {/*About Me*/}
                    {/*</Button>*/}
                    <Button sx={{margin: '1em'}} variant="text" disableElevation component={Link} href="/blog">
                    Blog
                    </Button>
                    <Button sx={{margin: '1em'}} variant="text" disableElevation component={Link} href="/coffee-recipes">
                    Coffee Recipes
                    </Button>
                    {/*<Button sx={{margin: '1em'}} variant="text" disableElevation component={Link} href="/contact">*/}
                    {/*Contact*/}
                    {/*</Button>*/}
                    <IconButton href="https://github.com/lplatzer">
                    <GitHubIcon/>
                    </IconButton>
                </Toolbar>
                <Box padding="2em" sx={{ my: 4 }}>
                    {children}
                </Box>
            </Container>
            <Box
            component="footer"
            sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            }}
            >
                <Container maxWidth="xl">
                    <Toolbar variant="regular" sx={{borderTop: 1, borderColor: 'divider'}}>
                        <Typography variant="body2" color="text.secondary" align="left">
                            <Link href="/pages/imprint">
                            Imprint
                            </Link>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align="center" sx={{flex: 1}}>
                            {'Copyright © '}
                            <Link href="/">
                            luisplatzer.de
                            </Link>{' '}
                            {new Date().getFullYear()}.
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align="right">
                            <Link href="/pages/privacy-policy">
                            Privacy Policy
                            </Link>
                        </Typography>
                    </Toolbar>
                </Container>
            </Box>
        </Box>
    );
}