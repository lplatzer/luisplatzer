import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Paper, Typography, Box } from "@mui/material";
import Link from "../../src/components/Link";
import Image from "next/image";
import blogPostPic from "../../public/images/fahmi-fakhrudin-nzyzAUsbV0M-unsplash.jpg";

function MainFeaturedPost(){
    return(
        <Paper
        sx={{
            positon: 'relative',
            backgroundColor: 'grey.800',
            color: '#fff',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat',
            backgroundPosition: 'center',
            backgroundImage: blogPostPic,
        }}>
            <Grid container>
                <Grid item md={6}>
                    <Box
                    sx={{
                        positon: 'relative',
                        p: { xs: 3, md: 6},
                        pr: {md: 0}
                    }}>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            Main featured blog post title
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            main blog post description or short preview
                        </Typography> 
                        <Link variant="subtitle1" href="/blog">
                            Continue reading
                        </Link>
                    </Box>
                </Grid>
             </Grid>
        </Paper>
    )
}

// Todo: add dynamic requests and content
function FeaturedPost(){
    return(
        <Grid item xs={12} md={6}>
            <CardActionArea component={Link} href="/about">
                <Card sx={{
                    display: 'flex'
                }}>
                    <CardContent sx={{
                        flex: 1
                    }}>
                        <Typography component="h2" variant="h5">
                            Blog post title
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Blog post subtitle
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                            Continue reading..
                        </Typography>
                        <CardMedia>
                            {/* Workaround to use the Next image component as a Card Media */}
                            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                <Image
                                src={blogPostPic}
                                alt="blog post header image"
                                style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </CardMedia>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    )
};

export default function Blog(){
    return(
        <Container>
            <Grid container spacing={2} sx={{ mt: 3}}>
            <FeaturedPost/>
            <FeaturedPost/>
            <FeaturedPost/>
            <FeaturedPost/>
            </Grid>
        </Container>
    )
}