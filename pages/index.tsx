import { Card, Typography, Box } from "@mui/material";
import Image from "next/image";
import Layout from "../src/components/Layout";
import personalPic from "../public/vercel.svg";
import Link from "../src/components/Link";

export default function Home({Layout}){
    return(
            <Box sx={{
                flexDirection: 'row'
            }}>
                <Image
                    src={personalPic}
                />
                {/* TODO: add image of me on the left. */}
                <Box>
                    <Typography variant="h1" component="h1">
                        Hi. I'm Luis Platzer.
                    </Typography>
                    <Typography variant="subtitle2">
                        I'm a Computer Science student, Barista & coffee enthusiast.
                    </Typography>
                    <Typography variant="body1">
                        What will you be able to find on this page?
                        I aim to occasionally write about my exprience and findings in both coffee and computer science. You can also find a link to all my socials
                        and my CV, in addition to Projects I am working on and have worked on.
                        <br/>
                        Want to get in touch or just have a chat? You can shoot me a message <Link href="/contact">here.</Link>
                    </Typography>
                </Box>
            </Box>
    )
}