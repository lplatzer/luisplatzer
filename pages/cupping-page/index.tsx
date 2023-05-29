import * as React from 'react';
import Box from "@mui/material/Box";
import {Checkbox, experimentalStyled as styled, FormControlLabel} from "@mui/material";
import {Grid, Input, MenuItem, Paper, Slider, Tab, Tabs, Typography} from "@mui/material";
import {handleClientScriptLoad} from "next/script";
import theme from "../../utils/theme";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

interface SliderProps {
    aromaScore: number,
    aromaIntensity: number,
    flavourScore: number,
    afterTasteScore: number,
    acidityScore: number,
    intensityScore: number,
    bodyScore: number,
    bodyLevelScore: number,
    uniformityScore: number,
    balanceScore: number,
    cleanCupScore: number,
    sweetnessScore: number,
    overallScore: number,
    totalScore: number,
}
function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;
    const [aromaItem, setAromaItem] = React.useState<number>(7);
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setAromaItem(newValue as number);
    }
    const marks =
        [
            {value: 6, label:'6'},
            {value: 7, label:'7'},
            {value: 8, label:'8'},
            {value: 9, label:'9'},
            {value: 10, label:'10'},

        ]
    const [state, setState] = React.useState({
        aromaValue: 0,
        flavourValue: 0,
        acidityValue: 0,
        bodyValue: 0
    })
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                    <Typography>
                        Fragrance/Aroma
                    </Typography>

                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
function valuetext(value: number) {
    return `${value}°C`;
}
export default function CuppingPage() {
    const [itemAmount, setItemAmount] = React.useState<number>(6);
    const [value, setValue] = React.useState<number>(0);
    const [aromaItem, setAromaItem] = React.useState<number>(7);

    const [state, setState] = React.useState<SliderProps>({
        aromaScore: 6,
        aromaIntensity: 6,
        flavourScore: 6,
        afterTasteScore: 6,
        acidityScore: 6,
        intensityScore: 6,
        bodyScore: 6,
        bodyLevelScore: 6,
        balanceScore: 6,
        uniformityScore: 10,
        cleanCupScore: 10,
        sweetnessScore: 10,
        overallScore: 6,
        totalScore: 60,
    })
    // function changeState(newValue) {
    //     setState({
    //         ...state,
    //         []
    //     })
    // }
    const handleChange = (event: Event, newValue: number | number[]) => {
        const {target} = event;
        // Ignore the TS errors thrown; target.value exists, even though TS is throwing an error
        setState({
            ...state,
            // @ts-ignore
            [target.name]: newValue,
        })
    }
    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, newValue: number | number[]) => {
    //     const { target} = event;
    //     setState({
    //         ...state,
    //     //     @ts-ignore
    //         [target.name]: newValue
    //     })
    // }
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }
    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };
    const marks =
        [
            {value: 6, label:'6'},
            {value: 6.25, label:''},
            {value: 6.5, label:''},
            {value: 6.75, label:''},
            {value: 7, label:'7'},
            {value: 7.25, label:''},
            {value: 7.5, label:''},
            {value: 7.75, label:''},
            {value: 8, label:'8'},
            {value: 8.25, label:''},
            {value: 8.5, label:''},
            {value: 8.75, label:''},
            {value: 9, label:'9'},
            {value: 9.25, label:''},
            {value: 9.5, label:''},
            {value: 9.75, label:''},
            {value: 10, label:'10'},

        ]
    const verticalMarks =
        [
            {value: 6, label:'6'},
            {value: 7, label:''},
            {value: 8, label:''},
            {value: 9, label: ''},
            {value: 10, label:'10'},
        ]
    // const Item = styled(Paper)(( {} ) = ({
    //     textAlign: 'center',
    //     padding: 2,
    // }));

    // TODO: there must be a way to do this programatically
    const totalScore = state.aromaScore + state.flavourScore + state.afterTasteScore + state.acidityScore + state.bodyScore + state.uniformityScore + state.balanceScore + state.cleanCupScore + state.sweetnessScore + state.overallScore;
    // Group sliders/values in layout similar to sca sheet
    return(
        <Box>
            {/*<Box sx={{ height: 50}}>*/}
            {/*/!*    TODO: reconsider integration for intensity, slider doesnt work properly*!/*/}
            {/*<Slider*/}
            {/*    sx={{*/}
            {/*        '& input[type="range"]': {*/}
            {/*            WebkitAppearance: 'slider-vertical',*/}
            {/*        },*/}
            {/*    }}*/}
            {/*    orientation="vertical"*/}
            {/*    step={1}*/}
            {/*    valueLabelDisplay="auto"*/}
            {/*    marks={verticalMarks}*/}
            {/*    min={6}*/}
            {/*    max={10}*/}
            {/*/>*/}
            {/*</Box>*/}
            <Grid container spacing={2}>
                {/*add commonly used descriptors for qualities etc. as quick select items*/}
                <Grid container item spacing={2} alignItems="center">
                    <Grid item xs={2} >
                        <Paper>
                            <Grid container direction="row" columnSpacing={2} justifyContent="space-between">
                                <Grid item>
                        <Typography variant='h6' component='h6'>
                                Fragrance/Aroma
                            </Typography>
                                </Grid>
                                <Grid item sx={{ }}>
                                    <Paper elevation={1}>
                                    <Typography>
                                        {state.aromaScore}
                                    </Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                            {/*TODO: refactor ...Value to ...Score*/}
                            <Slider
                                name="aromaScore"
                                value={state.aromaScore}
                                onChange={handleChange}
                                getAriaValueText={valuetext}
                                min={6}
                                max={10}
                                step={0.25}
                                marks={marks}
                                valueLabelDisplay="auto"
                            />
                            <Slider
                                sx={{
                                    '& input[type="range"]': {
                                        WebkitAppearance: 'slider-vertical',
                                    },
                                }}
                                name="aromaIntensity"
                                value={state.aromaIntensity}
                                onChange={handleChange}
                                />
                            <FormControlLabel control={<Checkbox/>} label="Lock Score"/>
                        </Paper>
                    </Grid>
                    {/*TODO: implement number input field, create handleInputChange accordingly*/}
                    {/*<Grid item >*/}
                    {/*    <Input*/}
                    {/*        value={state.aromaValue}*/}
                    {/*        size="small"*/}
                    {/*        onChange={handleInputChange}*/}
                    {/*        onBlur={handleBlur}*/}
                    {/*        inputProps={{*/}
                    {/*            steps: 10,*/}
                    {/*            min: 0,*/}
                    {/*            max: 100,*/}
                    {/*            type: 'number'*/}
                    {/*        }}*/}
                    {/*    />*/}
                    {/*</Grid>*/}
                    <Grid item xs={2}>
                        <Paper>
                            <Typography variant='h6' component='h6'>
                                Flavour
                            </Typography>
                            <Slider
                                name="flavourScore"
                                value={state.flavourScore}
                                onChange={handleChange}
                                getAriaValueText={valuetext}
                                min={6}
                                max={10}
                                step={0.25}
                                marks={marks}
                                valueLabelDisplay="auto"
                            />
                            <Typography variant='h6' component='h6'>
                                Aftertaste
                            </Typography>
                            <Slider
                                name="afterTasteScore"
                                value={state.afterTasteScore}
                                onChange={handleChange}
                                getAriaValueText={valuetext}
                                min={6}
                                max={10}
                                step={0.25}
                                marks={marks}
                                valueLabelDisplay="auto"
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper>
                            <Typography variant='h6' component='h6'>
                                Acidity
                            </Typography>
                            <Slider
                                name="acidityScore"
                                value={state.acidityScore}
                                onChange={handleChange}
                                getAriaValueText={valuetext}
                                min={6}
                                max={10}
                                step={0.25}
                                marks={marks}
                                valueLabelDisplay="auto"
                            />
                            <Typography variant='h6' component='h6'>
                                Intensity
                            </Typography>
                            <Slider
                                name="intensityScore"
                                value={state.intensityScore}
                                onChange={handleChange}
                                getAriaValueText={valuetext}
                                min={6}
                                max={10}
                                step={0.25}
                                marks={marks}
                                valueLabelDisplay="auto"
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper>
                            <Typography variant='h6' component='h6'>
                                Body
                            </Typography>
                            <Slider
                                name="bodyScore"
                                value={state.bodyScore}
                                onChange={handleChange}
                                getAriaValueText={valuetext}
                                min={6}
                                max={10}
                                step={0.25}
                                marks={marks}
                                valueLabelDisplay="auto"
                            />
                            <Typography variant='h6' component='h6'>
                                Level
                            </Typography>
                            <Slider
                                name="bodyLevelScore"
                                value={state.bodyLevelScore}
                                onChange={handleChange}
                                getAriaValueText={valuetext}
                                min={6}
                                max={10}
                                step={0.25}
                                marks={marks}
                                valueLabelDisplay="auto"
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper>
                            <Typography variant='h6' component='h6'>
                                Uniformity
                            </Typography>
                            <Slider
                                name="uniformityScore"
                                value={state.uniformityScore}
                                onChange={handleChange}
                                getAriaValueText={valuetext}
                                min={6}
                                max={10}
                                step={0.25}
                                marks={marks}
                                valueLabelDisplay="auto"
                            />
                            <Typography variant='h6' component='h6'>
                                Balance
                            </Typography>
                            <Slider
                                name="balanceScore"
                                value={state.balanceScore}
                                onChange={handleChange}
                                getAriaValueText={valuetext}
                                min={6}
                                max={10}
                                step={0.25}
                                marks={marks}
                                valueLabelDisplay="auto"
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper>
                            <Typography variant='h6' component='h6'>
                                Clean Cup
                            </Typography>
                            <Slider
                                name="cleanCupScore"
                                value={state.cleanCupScore}
                                onChange={handleChange}
                                getAriaValueText={valuetext}
                                min={6}
                                max={10}
                                step={0.25}
                                marks={marks}
                                valueLabelDisplay="auto"
                            />
                            <Typography variant='h6' component='h6'>
                                Sweetness
                            </Typography>
                            <Slider
                                name="sweetnessScore"
                                value={state.sweetnessScore}
                                onChange={handleChange}
                                getAriaValueText={valuetext}
                                min={6}
                                max={10}
                                step={0.25}
                                marks={marks}
                                valueLabelDisplay="auto"
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper>
                            <Typography variant='h6' component='h6'>
                                Overall
                            </Typography>
                            <Slider
                                name="overallScore"
                                value={state.overallScore}
                                onChange={handleChange}
                                getAriaValueText={valuetext}
                                min={6}
                                max={10}
                                step={0.25}
                                marks={marks}
                                valueLabelDisplay="auto"
                            />
                            <Typography>
                                {/*TODO: add defect scoring*/}
                                defects stuff
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                {/*<Typography variant='h1' component='h1'>*/}
                {/*    Cupping page*/}
                {/*</Typography>*/}
                {/*<Slider*/}
                {/*    value={itemAmount}*/}
                {/*    onChange={handleSliderChange}*/}
                {/*    min={1}*/}
                {/*    max={10}*/}
                {/*/>*/}
                {/*todo: map slider/cup selection to amount of tabs*/}
                <Typography>
                    Total score: {totalScore}
                </Typography>
                <Tabs value={value} onChange={handleTabChange}>
                    <Tab label="Item 1" {...a11yProps} />
                    <Tab label="Aroma" {...a11yProps}/>
                </Tabs>
            </Grid>
            <Box>
                <TabPanel value={value} index={0}>

                </TabPanel>
            </Box>
        {/*    TODO: add automatic total score calculation*/}
        </Box>
    )
}