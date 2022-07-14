import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import Link from "../../src/components/Link";
import Image from "next/image";
import blogPostPic from "../public/vercel.svg";

function FeaturedPost(){
    return(
        <Grid>
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
                        <CardMedia
                            component={Image}
                            src="blogPostPic"
                        />
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    )
}
export default function Blog(){
    return(
        <Container>
            <Typography variant="h5" component="h1">
                Blog
            </Typography>
            <FeaturedPost/>
        </Container>
    )
}