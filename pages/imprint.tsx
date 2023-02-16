import * as React from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";


export default function Imprint() {
    return(
        <Box>
            <Typography variant="h1" component="h1">
                Imprint
            </Typography>
            <Typography variant="body1">
                This page currently serves a strictly private purpose and thus does not require an Imprint in accordance with § 5 TMG.
            </Typography>
        </Box>
    )
}