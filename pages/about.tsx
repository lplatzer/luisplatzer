import * as React from 'react';
import {Card, Typography, Box, Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
import Image from "next/legacy/image";
import Link from "../components/Link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import personalPic from "../public/images/platzer_luis_cropped.jpg";

export default function About(){

    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    let arrItemList = {
        "publications": [
            {
            title: "latest_publication",
            subtitle: "get_latest_publication",
            detailedText: "list_of_publications"
            }
        ],
        "university": [
            {
                name: "get_university_list",
                subtitle: "get_recent_university",
                detailedText: "list_of_attended_universities",
            }
        ],
        "projects": [
            {
                name: "get_recent_project",
                subtilte: "get_recent_project_short_desc",
                detailedText: "list_of_projects"
            }
        ]
    };



    return(
        <Box
            component="main"
            sx={{
                flexDirection: 'row',
                display: 'flex'
            }}>
            {/*could be exchanged for grid container for more granular control of sizing*/}

            {/* TODO: add image of me on the left. */}
            <Box
                sx={{
                    m: 2,
                }}>
                <Typography variant="h1" component="h1">
                    Some generic hello text!
                </Typography>
                <Typography variant="subtitle2">
                    I'm a Computer Science student, Barista & coffee enthusiast.
                </Typography>
                <Typography variant="body1">
                    {/*TODO: CV x*/}
                    <br/>
                    Want to get in touch or just have a chat? You can shoot me a message <Link href="/contact">here.</Link>
                </Typography>
                {/*TODO: render content dynamically, use map function for each accordion */}
                <Accordion expanded={expanded ==="panel1"} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header">
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Publications
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                                first item
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1">
                            Lorem ipsum solo dolo ad med.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === "panel2"} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header">
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Accordion title
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Accordion text summary.
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1">
                            Lorem ipsum solo dolo ad med.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === "panel3"} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header">
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Accordion title
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Accordion text summary.
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1">
                            Lorem ipsum solo dolo ad med.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    )
}