import * as React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {DataGrid, GridColDef, GridToolbar, GridValueGetterParams} from '@mui/x-data-grid';
import {Typography} from "@mui/material";
import Link from "../../../components/Link";



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
        width: 120,
        editable: false,
    },
    {
        field: 'brewingMethod',
        headerName: 'Brewing method',
        width: 120,
        editable: true,
    },
    {
        field: 'grindSize',
        headerName: 'Grind size',
        description: 'left: V60, right: Kalita',
        width: 120,
        editable: true,
    },
    {
        field: 'brewingRecipe',
        headerName: 'Brewing Recipe',
        description: 'the left number is the amount of coffee, the right is the amount of water',
        width: 130,
        editable: true,
    },
    {
        field: 'brewingInstructions',
        headerName: 'Brew instructions',
        width: 200,
        editable: true,
    },
    {
        field: 'coffeeShop',
        headerName: 'coffee shop',
        description: '',
        sortable: true,
        width: 160,
        // valueGetter: (params: GridValueGetterParams) =>
        //     `${params.row.recipeType || ''} ${params.row.coffee || ''}`,
    },
    {
        field: 'expectedNotes',
        headerName: 'Taste notes',
        description: 'Taste notes to look for',
        width: 200,
    }
];

const rowsSchauenburger = [
    { id: 1, coffee: 'Werka',recipeType: 'Filter', brewingMethod: 'V60', grindSize: '7.8/10.5 (Lab V60), 11.0 (Lab Kalita)', brewingRecipe: '15/250', brewingInstructions: '45-60g bloom for 45s, slow one pour until 250g at 1:20-1:30, drawdown around 2:30-2:50, TDS around 1.30-1.35%', expectedNotes: 'black tea, peach, orange, floral, caramel' },
    { id: 2, coffee: 'Denbi Uddo', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 8.0, brewingRecipe: '15.5/250', brewingInstructions: 'should be similar to Werka; TBD' },
    { id: 3, coffee: 'Kiaga AA', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 8.0, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 4, coffee: 'Kichawir', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 8.0, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 5, coffee: 'El Moreno', recipeType: 'Filter', brewingMethod: 'V60', grindSize: '10.5', brewingRecipe: '15/250', brewingInstructions: '45-60g bloom for 45s, slow one pour until 250g at 1:30, drawdown around 2:30, TDS 1.25-1.3%', expectedNotes: 'chocolate, red apple, spices (cinnamon)' },
    { id: 6, coffee: 'La Dalia', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 7.6, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 7, coffee: 'El Campo', recipeType: 'Filter', brewingMethod: 'V60/Kalita', grindSize: '10.5/10.5', brewingRecipe: '15/250', brewingInstructions: '45-60g bloom for 45s, slow one pour until 250g at 1:30,  drawdown around 2:30, TDS 1.25-1.3%, V60 for TBD, Kalita for TBD', expectedNotes: 'pear, caramel, cacao nibs, tropical, elegant notes'},
    { id: 8, coffee: 'Bella Vista', recipeType: 'Filter', brewingMethod: 'V60/Kalita', grindSize: '10.5-11.0/10.5 (Lab)', brewingRecipe: '15.5/250', brewingInstructions: '45-60g bloom for 45s, slow one pour until 250g at 1:30,  drawdown 2:30-2:45, TDS 1.25-1.3% - V60 for acidity and enzymatic flavours, Kalita for body and sweetness', expectedNotes: 'cinnamon, clove, chocolate, nougat, caramel, plum, raisin, chezzy, grape fruit' },
    { id: 9, coffee: 'Los Placeres', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 7.6, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 10, coffee: 'Las Nubes', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 7.6, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 11, coffee: 'Mischgold', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 7.6, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 12, coffee: 'Bombe Anerobic', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 8.2, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 13, coffee: 'El Pino Geisha', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 8.2, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 14, coffee: 'Las Nubes Geisha', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 8.2, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 15, coffee: 'La Pachuca', recipeType: 'Filter', brewingMethod: 'V60',grindSize: 8.2, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 16, coffee: 'Sarongge', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 8.2, brewingRecipe: '15.5/250', brewingInstructions: 'recipe should be similar to Werka due to roast profile similarities; TBD' },
    { id: 17, coffee: 'Bombe', recipeType: 'Espresso', brewingMethod: null, grindSize: null, brewingRecipe: '16.5/40', brewingInstructions: '29-30s extraction time, 1:2.4 ratio at 40g out' },
    { id: 18, coffee: 'La Maravilla', recipeType: 'Espresso', brewingMethod: null, grindSize: null, brewingRecipe: '17.5/40', brewingInstructions: '26-28s extraction time, 1:2.3 ratio at 40g out' },
    { id: 19, coffee: 'Monte Alegre', recipeType: 'Espresso', brewingMethod: null, grindSize: null, brewingRecipe: '17.5/40', brewingInstructions: '27-30s extraction time, 1:2.3 ratio at 40g out' },
    { id: 20, coffee: 'Nobile', recipeType: 'Espresso', brewingMethod: null, grindSize: null, brewingRecipe: '17.5/40', brewingInstructions: '27-30s extraction time, 1:2.3 ratio at 40g out' },
    { id: 21, coffee: 'Araku', recipeType: 'Espresso', brewingMethod: null, grindSize: null, brewingRecipe: '17.0-17.5/40', brewingInstructions: '25-27s extraction time, 1:2-1:3 ratio at 40g out' },
    { id: 22, coffee: 'Sechs A', recipeType: 'Espresso', brewingMethod: null, grindSize: null, brewingRecipe: '17.0-17.5/40', brewingInstructions: '26-28s extraction time, 1:2.3 ratio at 40g out' },
    { id: 23, coffee: 'Neunbar', recipeType: 'Espresso', brewingMethod: null, grindSize: null, brewingRecipe: '17.5/40', brewingInstructions: '27-30s extraction time, 1:2.3 ratio at 40g out' },
    { id: 24, coffee: 'Scheingold', recipeType: 'Filter/Espresso', brewingMethod: null, grindSize: null, brewingRecipe: '17.5/40', brewingInstructions: 'TBD' },
    { id: 25, coffee: 'Moccamaster', recipeType: 'Moccamaster Filter', brewingMethod: 'Moccamaster', grindSize: 8, brewingRecipe: '60/1000', brewingInstructions: 'TBD' },
];

const rowsSchanze = [
    { id: 1, coffee: 'Werka',recipeType: 'Filter', brewingMethod: 'V60', grindSize: 14, brewingRecipe: '15.5/250', brewingInstructions: '45-60g bloom for 45s, slow one pour until 250g at 1.20-1.30, TDS around 1.32' },
    { id: 2, coffee: 'Denbi Uddo', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 14, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 3, coffee: 'Kiaga AA', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 14, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 4, coffee: 'Kichawir', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 14, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 5, coffee: 'El Moreno', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 14, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 6, coffee: 'La Dalia', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 14, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 7, coffee: 'Bella Vista', recipeType: 'Filter', brewingMethod: 'V60/Kalita', grindSize: 14, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 8, coffee: 'Los Placeres', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 14, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 10, coffee: 'Las Nubes', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 14, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 11, coffee: 'Mischgold', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 14, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 12, coffee: 'Bombe Anerobic', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 14, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 13, coffee: 'El Pino Geisha', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 14, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 14, coffee: 'Las Nubes Geisha CoE', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 14, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 15, coffee: 'La Pachuca', recipeType: 'Filter', brewingMethod: 'V60',grindSize: 14, brewingRecipe: '15.5/250', brewingInstructions: 'TBD' },
    { id: 16, coffee: 'Sarongge CoE', recipeType: 'Filter', brewingMethod: 'V60', grindSize: 14, brewingRecipe: '15.5/250', brewingInstructions: 'recipe should be similar to Werka due to roast profile similarities; TBD' },
    { id: 17, coffee: 'Bombe', recipeType: 'Espresso', brewingMethod: null, grindSize: null, brewingRecipe: '16.5/40', brewingInstructions: '29-30s extraction time, 1:2.4 ratio at 40g out' },
    { id: 18, coffee: 'La Maravilla', recipeType: 'Espresso', brewingMethod: null, grindSize: null, brewingRecipe: '17.5/40', brewingInstructions: '27-30s extraction time, 1:2.3 ratio at 40g out' },
    { id: 19, coffee: 'Monte Alegre', recipeType: 'Espresso', brewingMethod: null, grindSize: null, brewingRecipe: '17.5/40', brewingInstructions: '27-30s extraction time, 1:2.3 ratio at 40g out' },
    { id: 20, coffee: 'Nobile', recipeType: 'Espresso', brewingMethod: null, grindSize: null, brewingRecipe: '17.5/40', brewingInstructions: '27-30s extraction time, 1:2.3 ratio at 40g out' },
    { id: 21, coffee: 'Araku', recipeType: 'Espresso', brewingMethod: null, grindSize: null, brewingRecipe: '17.5/40', brewingInstructions: '27-30s extraction time, 1:2.3 ratio at 40g out' },
    { id: 22, coffee: 'Sechs A', recipeType: 'Espresso', brewingMethod: null, grindSize: null, brewingRecipe: '17.5/40', brewingInstructions: '27-30s extraction time, 1:2.3 ratio at 40g out' },
    { id: 23, coffee: 'Neunbar', recipeType: 'Espresso', brewingMethod: null, grindSize: null, brewingRecipe: '17.5/40', brewingInstructions: '27-30s extraction time, 1:2.3 ratio at 40g out' },
    { id: 24, coffee: 'Scheingold', recipeType: 'Filter/Espresso', brewingMethod: null, grindSize: null, brewingRecipe: '17.5/40', brewingInstructions: 'TBD' },
    { id: 25, coffee: 'Bunn Filter', recipeType: 'Bunn Filter', brewingMethod: 'Half, C', grindSize: 14.5, brewingRecipe: '17.5/40', brewingInstructions: 'TBD' },

];

export default function Index() {
    return (
        <Grid container spacing={16}>
            <Grid item sx={{ height: 1000, width: '100%' }}>
                <Typography variant="h2" component="h2">
                    Recipes Schauenburger
                </Typography>
                <Typography variant="body1">
                    Hover over the row header for more information.
                    <br/>
                    A note for Moccamaster grinding: The grind size is for the VTA 6S, NOT the EK43.
                </Typography>
                <DataGrid
                    rows={rowsSchauenburger}
                    columns={columns}
                    // pageSize={30}
                    pageSizeOptions={[30]}
                    disableRowSelectionOnClick
                    columnVisibilityModel={{
                        id: false,
                        coffeeShop: false,
                    }}
                    getRowHeight={() => 'auto'}
                    components={{ Toolbar: GridToolbar }}

                />
            </Grid>
            <Grid item sx={{ height: 1000, width: '100%' }}>
                <Typography variant="h2" component="h2">
                    Recipes Schanze
                </Typography>
                <Typography variant="body1">
                    Hover over the row header for more information.
                    <br/>
                    A note on the grind size for the bunn: The grind size indicator of the EK43 should be pointing down for the correct grind size.
                </Typography>
                <DataGrid
                    rows={rowsSchanze}
                    columns={columns}
                    // pageSize={30}
                    pageSizeOptions={[30]}
                    disableRowSelectionOnClick
                    columnVisibilityModel={{
                        id: false,
                        coffeeShop: false,
                    }}
                    getRowHeight={() => 'auto'}
                    components={{ Toolbar: GridToolbar }}
                />
            </Grid>
        </Grid>
    );

}