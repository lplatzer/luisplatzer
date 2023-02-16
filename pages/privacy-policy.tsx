import * as React from 'react';
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";


export default function PrivacyPolicy() {
    return(
        <Box>
            <Typography variant="h1">
                Privacy Policy
            </Typography>
            <Typography variant="body1">
                This website does not process any user data.
            </Typography>
        </Box>
    )
}