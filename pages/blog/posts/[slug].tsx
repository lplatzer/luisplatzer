import matter from 'gray-matter';
import {Divider, Grid, Paper, Typography} from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Link from "../../../components/Link";
import dynamic from "next/dynamic";
import Head from "next/head";
import {postFilePaths, POSTS_PATH} from "../../../utils/mdxUtils";
import fs from "fs";
import path from "path";
import {serialize} from "next-mdx-remote/serialize";
import {MDXRemote} from "next-mdx-remote";
import {BlogPostPreview} from "../../../components/BlogPostPreview";
import {getSortedPostsData} from "../../../utils/services/postData.service";
import { DateTime } from 'luxon';

function MarkdownListItem(props: any) {
    return <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />;
}
const components = {
    h1: (props) => <Typography variant='h1' component='h1' {...props} gutterBottom ={true}/>,
    h2: (props) => <Typography variant='h2' component='h2' {...props} gutterBottom={true}/>,
    h3: (props) => <Typography variant='subtitle1'  {...props} gutterBottom={true}/>,
    h4: (props) => <Typography variant='caption'  {...props} paragraph={true} gutterBottom={true}/>,
    p: (props) => <Typography  {...props} paragraph={true}/>,
    a: (props) => <Link {...props}/>,
    li: (props) => <MarkdownListItem />,
    TestComponent: dynamic(() => import('../../../components/TestComponent')),
    Head,
}

export const getStaticProps = async ({ params }) => {
    const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
    const source = fs.readFileSync(postFilePath)
    const allPostsData = getSortedPostsData();
    const { content, data } = matter(source);
    const formattedDate = DateTime.fromISO(data.date).toLocaleString();
    const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
        scope: data,
    })

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
            date: formattedDate,
            allPostsData,
        },
    }
}

export async function getStaticPaths() {
    const paths = postFilePaths
        // Remove the file extension for page paths
        .map((path) => path.replace(/\.mdx?$/, ''))
        // Map the path into the static paths objects required by NextJS
        .map((slug) => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    }
}

export default function BlogPost({ source, frontMatter, allPostsData }) {
    console.log(allPostsData);
    console.log(frontMatter);
    return(
        <Box>
            <main>
                <Typography variant="h1" component="h2">
                    {frontMatter.title}
                </Typography>
                <Typography variant="body1">
                    {frontMatter.description}
                </Typography>
                    <Typography variant="subtitle1">
                        {frontMatter.date}
                    </Typography>
                {/*    TODO: add more key information like reading time, metadata etc.*/}
                <Paper elevation={0}sx={{ p: 2, bgcolor: 'grey.200'}}>
                    <Typography variant='h2' gutterBottom>
                        {frontMatter.author}
                    </Typography>
                    <Typography>
                        {/* make this sticky to the top when scrolling down?*/}
                        {/*change this to some other stuff, e.g. info about author or other tidbit of information*/}
                        {frontMatter.description}
                    </Typography>
                </Paper>
                <Divider/>
                <Box sx={{ '&.markdown': {py: 3,},}}>
                  <MDXRemote {...source} components={components}/>
                </Box>
                {/*This should show 4 other, related posts*/}
                <Typography variant='h4' gutterBottom>
                    Other Posts
                </Typography>
                <Grid container direction="row" spacing={2}>
                {allPostsData.map((post) => (
                    <Grid item xs={6} key={`griditem-${allPostsData.slug}`}>
                        <Paper
                            key={frontMatter.slug}
                            component="li"
                            variant="outlined"
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                transition: 'all ease 120ms',
                                height: 200,
                                alignItems: 'space-between',
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
            </main>
        </Box>
    )

}