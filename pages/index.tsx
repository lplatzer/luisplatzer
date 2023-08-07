<<<<<<< Updated upstream
import { Card, Typography, Box } from "@mui/material";
import Image from "next/legacy/image";
import Link from "../components/Link";
import personalPic from "../public/images/platzer_luis_cropped.jpg";
import Blog from "./blog";
=======
import {Card, Typography, Box, Grid, Paper} from "@mui/material";
import {getSortedPostsData} from "../utils/services/postData.service";
import * as React from "react";
import {BlogPostPreview} from "../components/BlogPostPreview";
import {getCoffeeDataApi} from "../utils/services/coffeeData";
import {createDbUser} from "../utils/services/defaults";
import Button from "@mui/material/Button";
>>>>>>> Stashed changes

export const getStaticProps = async () => {
    const allPostsData = getSortedPostsData(4);
    return {
        props: {
            allPostsData,
        },
    };
}
export default function Home( { allPostsData }){
    const [hasBeenCalled, setHasBeenCalled] = React.useState(false);
    const createUser = () => {
        if(!hasBeenCalled) {
            const temp = createDbUser();
            console.log(temp);
        } else {
            alert('ERROR: User has already been created!');
            setHasBeenCalled(true);
            return 0;
        }
    }
    console.log()
    return(
    <Box
        component="main"
        sx={{
        flexDirection: 'column',
        display: 'flex'
    }}>
        {/*could be exchanged for grid container for more granular control of sizing*/}
        <Box
            sx={{
                m: 2,
            }}>
            <Typography variant="h1" component="h1">
                Hi. I'm Luis Platzer.
            </Typography>
            <Typography variant="h6">
                I'm a Computer Science student, Barista & coffee enthusiast.
                <br/>
                I occasionally write about my experience and findings in both coffee and computer science and develop coffee related apps in my free time.
            </Typography>
            <Button onClick={createUser}>
                Create db user
            </Button>
        </Box>
        <Typography variant="h2" component="h2">
            Recent blog posts
        </Typography>
        <Grid container spacing={2}>
            {allPostsData?.map((post) => (
                <Grid item xs={6} key={`griditem-${post.slug}`}>
                    <Paper
                        key={post.slug}
                        component="li"
                        variant="outlined"
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            transition: 'all ease 120ms',
                            height: 280,
                            '&:hover, &:focus-within': {
                                borderColor: 'grey.500',
                                boxShadow: 8
                            },
                            '&:focus-within': {
                                '& a': {
                                    outline: 0,
                                }
                            }
                        }}
                    >
                        <BlogPostPreview {...post}/>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    </Box>
    )
}