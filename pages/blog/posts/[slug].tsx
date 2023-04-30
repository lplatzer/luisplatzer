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
    const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
    const source = fs.readFileSync(postFilePath);

    // @ts-ignore
    const { content, data } = matter(source)

    const mdxSource = await serialize(content, {
        // mdxOptions: {
        //     remarkPlugins: [],
        //     rehypePlugins: [],
        // },
        scope: data,
        parseFrontmatter: true,
    })

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    }
}

export async function getStaticPaths() {
    const paths = postFilePaths
        // Remove the file extension for page paths
        .map((path) => path.replace(/\.mdx?$/, ''))
        // Map the path into the static paths objects required by Nextjs
        .map((slug) => ({ params: { slug} }))

    return {
        paths,
        fallback: false,
    }
}

export default function BlogPost({ source, frontMatter }) {

    return(
        <Box>
            <main>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={12}>
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
                    <Divider/>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ '&.markdown': {py: 3,},}}>
                      <MDXRemote {...source} components={components}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={0}sx={{ p: 2, bgcolor: 'grey.200'}}>
                            <Typography variant='h2' gutterBottom>
                                {frontMatter.author}
                            </Typography>
                            <Typography>
                                {/*change this to some other stuff, e.g. info about author or other tidbit of information*/}
                                {frontMatter.description}
                            </Typography>
                        </Paper>
                        <Typography variant='h4' gutterBottom>
                            Other Posts
                        </Typography>
                        {/*    Implement .map function for this element, dynamic href*/}
                        {/*    add image component?*/}
                        <Typography variant='h6' gutterBottom>
                            post.title
                        </Typography>
                        <Typography>
                            post.description
                        </Typography>
                        <Link href='/blog/hello-world'>
                            Read more
                        </Link>
                    </Grid>
                </Grid>
            </main>
        </Box>
    )

}