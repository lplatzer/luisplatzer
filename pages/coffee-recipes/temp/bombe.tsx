import Box from "@mui/material/Box";
import { Chip, Stack, Typography} from "@mui/material";
import * as React from "react";


export default function Bombe() {

    return(
        <Box>
            <Typography variant="h4" component="h4">
                Bombe recipe
            </Typography>
            <Typography variant="h6" component="h6">
                Brewing instructions
            </Typography>
            <Stack direction="row" spacing={1}>
                <Chip label="Brewing recipe: 16.5/40"/>
                <Chip label="Brewing ratio: 1:2.4"/>
                <Chip label="Extraction time: 29 &#8211; 30s"/>
            </Stack>
            <Typography variant="h6" component="h6">
                Taste notes
            </Typography>
            <Stack direction="row" spacing={1}>
                <Chip label="black tea"/>
                <Chip label="peach"/>
                <Chip label="orange"/>
                <Chip label="floral"/>
                <Chip label="caramel"/>
            </Stack>
        </Box>
    )
}