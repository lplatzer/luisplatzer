import * as React from 'react';
import Box from "@mui/material/Box";
import {DataGrid, GridColDef, GridToolbar} from '@mui/x-data-grid';
import {Chip, Typography} from "@mui/material";
import Link from "../../components/Link";
import {CoffeeNames, CoffeeData} from "../../utils/coffeeData";

function GetBrewTime(params) {
    return `${params.row.extractionTime?.min} - ${params.row.extractionTime?.max}`;
}

function GetTasteNotes(params) {
    let result = [];

    for(let i in params.row.tasteNotes)
        result.push([params.row.tasteNotes [i]]);
    return (
        <div>
        {/*    could you change this so that you can click on a taste note to filter coffees by that taste note?
                could also be applied to the cwm.com coffee origin list/ roaster database, where you can find/quickly filter
                coffees according to your preferences.
                TODO: use onRowClick instead of Link component in coffee field, make entire row clickable to get to coffee page
        */}
        {result.map((text) => (
                // TODO: design differently; current design takes up too much space for multiple fields
                <Chip label={text}/>
        ))}
        </div>
    )
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'coffee',
        headerName: 'Coffee',
        width: 200,
        renderCell: (params) => (
            <Link href={`/coffee-recipes/elbgold/${params.value.replace(/\s+/g, '-').toLowerCase()}`}>{params.value}</Link>
        )
    },
    {
        field: 'recipeType',
        headerName: 'Recipe type',
        width: 150,
        editable: false,
    },
    {
        field: 'brewingRecipe',
        headerName: 'Brewing recipe',
        width: 150,
    },
    {
        // rename to extraction time for espresso only table
        field: 'extractionTime',
        headerName: 'Extraction time',
        width: 120,
        editable: false,
        valueGetter: GetBrewTime,
    },
    {
        field: 'brewingRatio',
        headerName: 'Brewing ratio',
        width: 150,
    },
    // {
    //     field: 'tasteNotes',
    //     headerName: 'Taste notes',
    //     description: 'Taste notes to look for',
    //     width: 200,
    //     renderCell: GetTasteNotes,
    // }
];
const rowsFilter = [
    { id: 1, coffee: 'Werka', brewingMethod: 'V60', grindSize: '7.8/10.5 (Lab V60), 11.0 (Lab Kalita)', brewingRecipe: '15/250', brewingInstructions: '45-60g bloom for 45s, slow one pour until 250g at 1:20-1:30, drawdown around 2:30-2:50, TDS around 1.30-1.35%', expectedNotes: 'black tea, peach, orange, floral, caramel' },
    { id: 2, coffee: 'Denbi Uddo', recipeType: 'Filter'},
    { id: 3, coffee: 'Kiaga AA', recipeType: 'Filter'},
    { id: 4, coffee: 'Kichawir', recipeType: 'Filter'},
    { id: 5, coffee: 'El Moreno', recipeType: 'Filter'},
    { id: 6, coffee: 'La Dalia', recipeType: 'Filter'},
    { id : 7, coffee: 'El Campo', recipeType: 'Filter'},
    { id: 8, coffee: 'Bella Vista', recipeType: 'Filter'},
    { id: 9, coffee: 'Los Placeres', recipeType: 'Filter'},
    { id: 10, coffee: 'Las Nubes', recipeType: 'Filter'},
    { id: 11, coffee: 'Mischgold', recipeType: 'Filter'},
    { id: 12, coffee: 'Bombe Anerobic', recipeType: 'Filter'},
    { id: 13, coffee: 'El Pino Geisha', recipeType: 'Filter'},
    { id: 14, coffee: 'Las Nubes Geisha', recipeType: 'Filter'},
    { id: 15, coffee: 'La Pachuca', recipeType: 'Filter'},
    { id: 16, coffee: 'Sarongge', recipeType: 'Filter'},
    { id: 17, coffee: 'Scheingold', recipeType: 'Filter/Espresso'},

]
const rowsEspresso = [
    { id: 17, coffee: 'Bombe', brewingRecipe: '16.5g/40g', brewingRatio: '1:2.4', extractionTime: { min: 28, max: 29}, tasteNotes: ["taste1", "taste2", "taste3"] },
    { id: 18, coffee: 'La Maravilla', brewingRecipe: '17.5g/40g', brewingRatio: '1:2.3', extractionTime: { min: 26, max: 29}},
    { id: 19, coffee: 'Monte Alegre', brewingRecipe: '17.5g/40g', brewingRatio: '1:2.3', extractionTime: { min: 26, max: 29}},
    { id: 20, coffee: 'Nobile', brewingRecipe: '17.5g/40g', brewingRatio: '1:2.3', extractionTime: { min: 26, max: 29}},
    { id: 21, coffee: 'Araku', brewingRecipe: '17.5g/40g', brewingRatio: '1:2.3', extractionTime: { min: 26, max: 29}},
    { id: 22, coffee: 'Sechs A', brewingRecipe: '17.5g/40g', brewingRatio: '1:2.3', extractionTime: { min: 26, max: 29}},
    { id: 23, coffee: 'Neunbar', brewingRecipe: '17.5g/40g', brewingRatio: '1:2.3   ', extractionTime: { min: 26, max: 29}},
];
// NOTE: TODO: evaluate whether to have two lists or just one, which is then called via the column value getters
export default function Index() {
    return (
        <Box>
            <Box>
                <Typography variant="h1" component="h1">
                    elbgold recipes
                </Typography>
                <Typography variant="body1">
                    Below you'll find a list of all coffees that we currently have. The list of espressos gives a quick overview on key information. The filter coffee list
                    links to individual pages, where the optimal recipes for each coffee and each shop can be found.
                </Typography>
                {/*TODO: list filtering is better done in the API/data request, not in the table itself; workaround for now is custom filter applied by default*/}
                {/* If formatted right this could be a decent option for list filter application, and a hidden Toolbar instead*/}
                <Typography variant="h2" component="h2">
                    Espresso recipes
                </Typography>
                <Box sx={{ height: 480, width: '100%'}}>
                    <DataGrid
                        rows={rowsEspresso}
                        columns={columns}
                        pageSizeOptions={[30]}
                        disableRowSelectionOnClick
                        columnVisibilityModel={{
                            id: false,
                        }}
                        /*replace the Toolbar by Switch or similar other external button/thing*/
                    />
                </Box>
            </Box>
            <Box>
                <Typography variant="h2" component="h2">
                    Filter recipes
                </Typography>
                <Typography variant="body1">
                    Hover over the row header for more information.
                    <br/>
                    You can use the table filter options to only show certain coffees, e.g. such that taste of chocolate, fruit, or an intense sweetness.
                    <br/>
                    eA note for Moccamaster grinding: The grind size is for the VTA 6S, NOT the EK43. (Schauenburger)
                    {/*TODO: move note to recipe list for schauenburger */}
                    <br/>
                    A note on the grind size for the bunn: The grind size indicator of the EK43 should be pointing down for the correct grind size.
                {/*    TODO: clarify grind size, not this shit*/}
                </Typography>
                <Box sx={{ height: 600, width: '100%'}}>
                    <DataGrid
                        rows={rowsFilter}
                        columns={columns}
                        pageSizeOptions={[30]}
                        disableRowSelectionOnClick
                        columnVisibilityModel={{
                            id: false,
                        }}
                        components={{ Toolbar: GridToolbar }}
                    />
                </Box>
            </Box>
        </Box>
    );

}