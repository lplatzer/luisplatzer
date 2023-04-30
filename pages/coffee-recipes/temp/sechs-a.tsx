import Box from "@mui/material/Box";
import { Chip, Stack, Typography} from "@mui/material";
import * as React from "react";


export default function SechsA() {

    return(
        <Box>
            <Typography variant="h4" component="h4">
                Sechs A recipe
            </Typography>
            <Typography variant="h6" component="h6">
                Brewing instructions
            </Typography>
            <Stack direction="row" spacing={1}>
                <Chip label="Brewing recipe: 17 &#8211; 17.5/40"/>
                <Chip label="Brewing ratio: 1:2.3 &#8211; 1:3"/>
                <Chip label="Extraction time: 26 &#8211; 28s"/>
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