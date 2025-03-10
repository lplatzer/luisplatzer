import Box from "@mui/material/Box";
import {Accordion, AccordionDetails, AccordionSummary, Chip, Stack, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as React from "react";
import {getCoffeeData} from "../../../utils/services/coffeeData.service";
import {getPagePaths} from "../../../utils/services/pathData.service";


export async function getStaticProps({ params }) {
    const coffeeData = await getCoffeeData(params.id);
    return {
        props: {
            coffeeData
        }
    }
}
// todo: clean up conversion into url-encoded data types, as well as conversion to find items in raw data; either convert data at retrieval and then find by resulting string or the other way around,
// currently doing both multiple times in:coffee-recipes/index, coffeeData.tsx, elbgold/[slug].tsx
export async function getStaticPaths() {
    const req = await getPagePaths("coffeePaths");
    const paths = req?.map((item) => ({
        params: { id: item.id.split(":")?.pop()?.replace('_', '-')},
    }));
    return {
        paths,
        fallback: false,
    };
}

export default function CoffeePage({ coffeeData }) {
    console.log(coffeeData.dose.min);
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };
    const blendData = [];
    const filterPage = (
        <Box>
            <Typography variant="h5" component="h5">
                Schanze
            </Typography>
            <Accordion expanded={expanded ==="panel1"} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header">
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        V60
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        light and balanced
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h6" component="h6">
                        At a glance
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip label="Grind size: 10.5-11.0"/>
                        <Chip label="Brewing recipe: 15/250"/>
                        <Chip label="Bloom: 45s"/>
                        <Chip label="Total brew time: 2:40"/>
                        <Chip label="Brewing temperature: 95&#8451;"/>
                        <Chip label="TDS: 1.25 &#8211; 1.3%"/>
                    </Stack>
                    <Typography variant="h6" component="h6">
                        Brewing instructions
                    </Typography>
                    <Typography variant="body1">
                        1. Preheat the brewer and wet the paper filter.
                        <br/>
                        2. Put in the ground coffee and flatten the bed.
                        <br/>
                        3. Pour 45-60g of water in a slow, circular motion to wet the entire grounds. Let it bloom for 45s.
                        <br/>
                        4.Pour water in a slow, circular motion until you reach 250g of water at around 1:30.
                        <br/>
                        5. The brew should finish at around 2:30 with a TDS of 1.25 &#8211; 1.3%.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel2"} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header">
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Kalita
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        for body and sweetness
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h6" component="h6">
                        At a glance
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip label="Grind size: 10.5"/>
                        <Chip label="Brewing recipe: 15/250"/>
                        <Chip label="Bloom: 45s"/>
                        <Chip label="Total brew time: 2:30"/>
                        <Chip label="Brewing temperature: 93&#8451;"/>
                        <Chip label="TDS: 1.25 &#8211; 1.3%"/>
                    </Stack>
                    <Typography variant="h6" component="h6">
                        Brewing instructions
                    </Typography>
                    <Typography variant="body1">
                        1. Preheat the brewer and wet the paper filter.
                        <br/>
                        2. Put in the ground coffee and flatten the bed.
                        <br/>
                        3. Pour 45-60g of water in a slow, circular motion to wet the entire grounds. Let it bloom for 45s.
                        <br/>
                        4.Pour water in a slow, circular motion until you reach 250g of water at around 1:30.
                        <br/>
                        5. The brew should finish at around 2:30 with a TDS of 1.25 &#8211; 1.3%.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel3"} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header">
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Bunn
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        batch brew
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h6" component="h6">
                        At a glance
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip label="Grind size: 14"/>
                        <Chip label="Brewing recipe: 120/2000"/>
                        <Chip label="Setting: Half"/>
                        <Chip label="Brew C"/>
                    </Stack>
                    <Typography variant="h6" component="h6">
                        Brewing instructions
                    </Typography>
                    <Typography variant="body1">
                        1. Grind with the grind size indicator of the EK43 pointing straight down.
                        <br/>
                        2. Put in the paper filter & the ground coffee and flatten the bed.
                        <br/>
                        3. Hit "Brew C".
                        <br/>
                        4. Make sure the server is set to close.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Typography variant="h5" component="h5">
                Schauenburger
            </Typography>
            <Accordion expanded={expanded ==="panel4"} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header">
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        V60
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        light and balanced
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h6" component="h6">
                        At a glance
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip label="Grind size: 8.3"/>
                        <Chip label="Brewing recipe: 15/250"/>
                        <Chip label="Bloom: 45s"/>
                        <Chip label="Total brew time: 2:40"/>
                        <Chip label="Brewing temperature: 95&#8451;"/>
                        <Chip label="TDS: 1.25 &#8211; 1.3%"/>
                    </Stack>
                    <Typography variant="h6" component="h6">
                        Brewing instructions
                    </Typography>
                    <Typography variant="body1">
                        1. Preheat the brewer and wet the paper filter.
                        <br/>
                        2. Put in the ground coffee and flatten the bed.
                        <br/>
                        3. Pour 45-60g of water in a slow, circular motion to wet the entire grounds. Let it bloom for 45s.
                        <br/>
                        4.Pour water in a slow, circular motion until you reach 250g of water at around 1:30.
                        <br/>
                        5. The brew should finish at around 2:30 with a TDS of 1.25 &#8211;	1.3%.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel5"} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header">
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Kalita
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        for body and sweetness
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h6" component="h6">
                        At a glance
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip label="Grind size: 10.5-11.0"/>
                        <Chip label="Brewing recipe: 15/250"/>
                        <Chip label="Bloom: 45s"/>
                        <Chip label="Total brew time: 2:40"/>
                        <Chip label="Brewing temperature: 95&#8451;"/>
                        <Chip label="TDS: 1.25 &#8211; 1.3%"/>
                    </Stack>
                    <Typography variant="h6" component="h6">
                        Brewing instructions
                    </Typography>
                    <Typography variant="body1">
                        1. Wet the paper filter and place it in the brewer.
                        <br/>
                        2. Weigh out 60g of coffee, grind the coffee with the VTA 6s on setting 8, put the grounds into the bean hopper and flatten the bed.
                        <br/>
                        3. Turn on Moccamaster and let it run.
                        <br/>
                        4. Transfer the coffee into the servers & start a timer.
                        <br/>
                        5. Throw away the coffee grounds and rinse the Moccamaster server with water.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel6"} onChange={handleChange('panel6')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel6bh-content"
                    id="panel6bh-header">
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Aeropress
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        heavy body & complexity
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h6" component="h6">
                        At a glance
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip label="Grind size: 8 (VTA 6S)"/>
                        <Chip label="Brewing recipe: 60/1000"/>
                        <Chip label="TDS: 1.25 &#8211; 1.3%"/>
                    </Stack>
                    <Typography variant="h6" component="h6">
                        Brewing instructions
                    </Typography>
                    <Typography variant="body1">
                        TBD
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel7"} onChange={handleChange('panel7')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel7bh-content"
                    id="panel6bh-header">
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Moccamaster
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        batch brew
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h6" component="h6">
                        At a glance
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip label="Grind size: 8 (VTA 6S)"/>
                        <Chip label="Brewing recipe: 60/1000"/>
                        <Chip label="TDS: 1.25 &#8211; 1.3%"/>
                    </Stack>
                    <Typography variant="h6" component="h6">
                        Brewing instructions
                    </Typography>
                    <Typography variant="body1">
                        1. Preheat the brewer and wet the paper filter.
                        <br/>
                        2. Put in the ground coffee and flatten the bed.
                        <br/>
                        3. Pour 45-60g of water in a slow, circular motion to wet the entire grounds. Let it bloom for 45s.
                        <br/>
                        4.Pour water in a slow, circular motion until you reach 250g of water at around 1:30.
                        <br/>
                        5. The brew should finish at around 2:30 with a TDS of 1.25 &#8211; 1.3%.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Typography variant="h5" component="h5">
                Lab
            </Typography>
            <Accordion expanded={expanded ==="panel8"} onChange={handleChange('panel8')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel8bh-content"
                    id="panel8bh-header">
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        V60
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        light and balanced
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h6" component="h6">
                        At a glance
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip label="Grind size: 10.5"/>
                        <Chip label="Brewing recipe: 15/250"/>
                        <Chip label="Bloom: 45s"/>
                        <Chip label="Total brew time: 2:45"/>
                        <Chip label="Brewing temperature: 96&#8451;"/>
                        <Chip label="TDS: 1.35%"/>
                    </Stack>
                    <Typography variant="h6" component="h6">
                        Brewing instructions
                    </Typography>
                    <Typography variant="body1">
                        1. Preheat the brewer and wet the paper filter.
                        <br/>
                        2. Put in the ground coffee and flatten the bed.
                        <br/>
                        3. Pour 45-60g of water in a slow, circular motion to wet the entire grounds. Let it bloom for 45s.
                        <br/>
                        4.Pour water in a slow, circular motion until you reach 250g of water at around 1:30.
                        <br/>
                        5. The brew should finish at around 2:30 with a TDS of 1.25 &#8211;	1.3%.
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip label="black tea"/>
                        <Chip label="peach"/>
                        <Chip label="orange"/>
                        <Chip label="floral"/>
                        <Chip label="caramel"/>
                    </Stack>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel9"} onChange={handleChange('panel9')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel9bh-content"
                    id="panel9bh-header">
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Kalita
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        for body and sweetness
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h6" component="h6">
                        At a glance
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip label="Grind size: 11.0"/>
                        <Chip label="Brewing recipe: 15/250"/>
                        <Chip label="Bloom: 45s"/>
                        <Chip label="Total brew time: 2:40"/>
                        <Chip label="Brewing temperature: 93&#8451;"/>
                        <Chip label="TDS: 1.35%"/>
                    </Stack>
                    <Typography variant="h6" component="h6">
                        Brewing instructions
                    </Typography>
                    <Typography variant="body1">
                        1. Wet the paper filter and place it in the brewer.
                        <br/>
                        2. Weigh out 60g of coffee, grind the coffee with the VTA 6s on setting 8, put the grounds into the bean hopper and flatten the bed.
                        <br/>
                        3. Turn on Moccamaster and let it run.
                        <br/>
                        4. Transfer the coffee into the servers & start a timer.
                        <br/>
                        5. Throw away the coffee grounds and rinse the Moccamaster server with water.
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip label="black tea"/>
                        <Chip label="peach"/>
                        <Chip label="orange"/>
                        <Chip label="floral"/>
                        <Chip label="caramel"/>
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
    const espressoPage = (
        <Box>
            <Stack direction="row" spacing={1}>
                {/*TODO: map array items with proper formatting*/}
                {/*TODO: join origin country and region, add spacer between each combo*/}
                {Array.isArray(coffeeData.origin.country) ? <Chip label={`Origin: ${coffeeData.origin.country.join(', ')}, ${coffeeData.origin.detail.join(', ')}`}/> : <Chip label={`Origin: ${coffeeData.origin.country}, ${coffeeData.origin.detail}`}/>}
                {Array.isArray(coffeeData.origin.country) ? <Chip label={`Origin: ${blendData.join(', ')}`}/> : <Chip label={`Origin: ${coffeeData.origin.country}, ${coffeeData.origin.detail}`}/>}
                <Chip label={`Washing station: ${coffeeData.origin.station}`}/>
                {Array.isArray(coffeeData.producer) ? <Chip label={`Producer: ${coffeeData.producer.join(', ')}`}/> : <Chip label={`Producer: ${coffeeData.producer}`}/>}
                {Array.isArray(coffeeData.variety) ? <Chip label={`Variety: ${coffeeData.variety.join(', ')}`}/> : <Chip label={`Variety: ${coffeeData.variety}`}/>}
                <Chip label={`Process: ${coffeeData.process}`}/>
                <Chip label={`Taste Notes: ${coffeeData.taste_notes}`}/>
                <Chip label={`Roaster: ${coffeeData.roaster}`}/>
            </Stack>
            <Typography variant="h5" component="h5">
                Recipe
            </Typography>
            <Stack direction="row" spacing={1}>
                { typeof coffeeData.dose === "object" ? <Chip label={`Coffee in: ${coffeeData.dose.min} - ${coffeeData.dose?.max}g`}/> : <Chip label={`Coffee in: ${coffeeData.dose}g`}/>}
                <Chip label={`Coffee out: ${coffeeData.yield}g`}/>
                <Chip label={`Extraction time: ${coffeeData.extraction_time?.min} - ${coffeeData.extraction_time?.max}s`}/>
            </Stack>
        </Box>
    )

    return (
        <Box>
            <Typography variant="h4" component="h4">
                {coffeeData.name} recipe
            </Typography>
            {coffeeData.type === "Espresso" ? espressoPage : filterPage}
        </Box>
    )
}
