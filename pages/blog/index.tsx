import * as React from "react";
import {Avatar, AvatarGroup, Card, CardActions, CardContent, Divider, Grid, Paper, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "../../components/Link";
<<<<<<< Updated upstream
import Image from "next/legacy/image";
=======
import Container from "@mui/material/Container";
import {getSortedPostsData} from "../../utils/services/postData.service";
import { DateTime } from "luxon";
import {BlogPostPreview} from "../../components/BlogPostPreview";
>>>>>>> Stashed changes

export const getStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

// props will need to be from getStaticProps in the future
function FeaturedPost(props: BlogPost) {
    const [handlePostAction, setHandlePostAction] = React.useState(false);
    return(
        <Paper
            key={props.slug}
            component="li"
            variant="outlined"
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'space-between',
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
            <BlogPostPreview {...props}/>
        </Paper>
    )
}

function OtherPosts(props: BlogPost) {
    return(
        <Paper
            key={props.slug}
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
            <BlogPostPreview {...props}/>
        </Paper>
    )
}

export default function BlogHome( { allPostsData }) {
    // console.log(allPostsData);
    const [firstPost, ...otherPostData] = allPostsData;
    return(
        <Container maxWidth="lg">
            <Typography variant="h2" component="h1" gutterBottom>
                Blog posts
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} key={`griditem-${firstPost.slug}`}>
                    <FeaturedPost {...firstPost} key={firstPost.slug}/>
                </Grid>
                {otherPostData.map((post) => (
                    <Grid item xs={6} key={`griditem-${post.slug}`}>
                    <OtherPosts {...post} key={post.slug}/>
                    </Grid>
                ))}
            </Grid>
            {/*<RecentPost/>*/}
        </Container>
    )
}


// import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Paper, Typography, Box } from "@mui/material";
// import Link from "../../components/Link";
// import Image from "next/image";
// import path from "path";
// import {POSTS_PATH} from "../../utils/mdxUtils";
// import fs from "fs";
// import matter from "gray-matter";
// import {serialize} from "next-mdx-remote/serialize";
// import {getSortedPostsData} from "../../utils/services/postData.service";
//
//
// // TODO: sort posts by date, newest date will be mainfeaturedpost
// // TODO: Omit first post (= most recent) from post mapping, put into mainfeaturedpost
// // TODO: Add all post data to getStaticProps
// export const getStaticProps = async () => {
//     // why am I doing this here instead of the utils files? seems as if it doesn't belong here
//     // should just fetch data that is ready-to-use and return that data so the main component can use it
//     // const source = fs.readFileSync(postFilePath);
//     // const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
//     const allPostsData = getSortedPostsData;
//     // @ts-ignore
//     const { content, data } = matter(source)
//     return {
//         props: {
//             allPostsData,
//         },
//     }
// }
//
// function MainFeaturedPost({allPostsData}){
//     return(
//         <Paper
//         sx={{
//             positon: 'relative',
//             backgroundColor: 'grey.800',
//             color: '#fff',
//             mb: 4,
//             backgroundSize: 'cover',
//             backgroundRepeat: 'noRepeat',
//             backgroundPosition: 'center',
//             // backgroundImage: blogPostPic,
//         }}>
//             <Grid container>
//                 <Grid item md={6}>
//                     <Box
//                     sx={{
//                         positon: 'relative',
//                         p: { xs: 3, md: 6},
//                         pr: {md: 0}
//                     }}>
//                         <Typography component="h1" variant="h3" color="inherit" gutterBottom>
//                             Main featured blog post title
//                         </Typography>
//                         <Typography variant="h5" color="inherit" paragraph>
//                             main blog post description or short preview
//                         </Typography>
//                         <Link variant="subtitle1" href={`/blog/posts/${frontmatter.title}`}>
//                             Continue reading
//                         </Link>
//                     </Box>
//                 </Grid>
//              </Grid>
//         </Paper>
//     )
// }
//
// // Todo: add dynamic requests and content
// function FeaturedPost(allPostsData){
//     return(
//         <Grid item xs={12} md={6}>
//             <CardActionArea component={Link} href="/about">
//                 <Card sx={{
//                     display: 'flex'
//                 }}>
//                     <CardContent sx={{
//                         flex: 1
//                     }}>
//                         <Typography component="h2" variant="h5">
//                             {frontmatter.title}
//                         </Typography>
//                         <Typography variant="subtitle1" color="text.secondary">
//                             Blog post subtitle
//                         </Typography>
//                         <Typography variant="subtitle1" color="primary">
//                             Continue reading..
//                         </Typography>
//                         {/*<CardMedia>*/}
//                         {/*    /!* Workaround to use the Next image component as a Card Media *!/*/}
//                         {/*    <div style={{ position: 'relative', width: '100%', height: '100%' }}>*/}
//                         {/*        <Image*/}
//                         {/*        utils={blogPostPic}*/}
//                         {/*        alt="blog post header image"*/}
//                         {/*        style={{ objectFit: 'cover' }}*/}
//                         {/*        />*/}
//                         {/*    </div>*/}
//                         {/*</CardMedia>*/}
//                     </CardContent>
//                 </Card>
//             </CardActionArea>
//         </Grid>
//     )
// }
//
// export default function Blog( { blogPosts }){
//     return(
//         <Container>
//             <MainFeaturedPost frontmatter={blogPosts.frontmatter} />
//             <Grid container spacing={2} sx={{ mt: 3}}>
//                 {blogPosts.map((post) => (
//                     <FeaturedPost key={post.slug} post={post}/>
//                 ))}
//             </Grid>
//         </Container>
//     )
// }