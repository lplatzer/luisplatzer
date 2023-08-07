import { Card, Typography, Box } from "@mui/material";
import Image from "next/legacy/image";
import Link from "../components/Link";
import personalPic from "../public/images/platzer_luis_cropped.jpg";
import Blog from "./blog";

export default function Home(){
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
            <Typography variant="subtitle2">
                I'm a Computer Science student, Barista & coffee enthusiast.
            </Typography>
            <Typography variant="body1">
                I aim to occasionally write about my experience and findings in both coffee and computer science.
                <br/>
            </Typography>
        </Box>
    </Box>
    )
}