import Link from "../../components/Link";
import Box from "@mui/material/Box";
import {Chip, Typography} from "@mui/material";
import {DataGrid, GridColDef, GridToolbar} from "@mui/x-data-grid";
import * as React from "react";
import {CoffeeData, CoffeeRecipes} from "../../utils/coffeeData";

// function GetTasteNotes(params) {
//     let result = [];
//
//     for(let i in params.row.tasteNotes)
//         result.push([params.row.tasteNotes[i]]);
//     return (
//         <div>
//             {/*    could you change this so that you can click on a taste note to filter coffees by that taste note?
//                 could also be applied to the cwm.com coffee origin list/ roaster database, where you can find/quickly filter
//                 coffees according to your preferences.
//                 TODO: use onRowClick instead of Link component in coffee field, make entire row clickable to get to coffee page
//         */}
//             {result.map((text) => (
//                 // TODO: design differently; current design takes up too much space for multiple fields
//                 <Chip label={text}/>
//             ))}
//         </div>
//     )
// }

const rows = CoffeeData;

// TODO: add implementation for origin country, region etc.
const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Coffee',
        width: 200,
        renderCell: (params) => (
            <Link href={`/coffee-recipes/elbgold/${params.value.split(":").pop().replace(' ', '-').toLowerCase()}`}>{params.value}</Link>
        )
    },
    {
        field: 'type',
        headerName: 'Roast',
        width: 150,
        editable: false,
    },
    {
        field: 'origin.country',
        headerName: 'Origin',
        width: 150,
    },
    {
        field: 'process',
        headerName: 'Process',
        width: 250,
    },
    {
        field: 'producer',
        headerName: 'Producer',
        width: 300,
    },
    {
        field: 'roaster',
        headerName: 'Roaster',
        width: 150,
    },
    // {
        // rename to extraction time for espresso only table
    //     field: 'extractionTime',
    //     headerName: 'Extraction time',
    //     width: 120,
    //     editable: false,
    //     valueGetter: GetBrewTime,
    // },
    // {
    //     field: 'brewingRatio',
    //     headerName: 'Brewing ratio',
    //     width: 150,
    // },
    // {
    //     field: 'tasteNotes',
    //     headerName: 'Taste notes',
    //     description: 'Taste notes to look for',
    //     width: 200,
    //     renderCell: GetTasteNotes,
    // }
];

const espRows = CoffeeRecipes;
// TODO: add name field to coffeeData for easier rendering
const espColumns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'Coffee',
        width: 200,
        renderCell: (params) => (
            <Link href={`/coffee-recipes/elbgold/${params.value.split(":").pop().replace(' ', '-').toLowerCase()}`}>{params.value}</Link>
        ),
        // Once the database integration is complete, this should work by using the name instead of the ID without the need of a value getter.
        valueGetter: (params) => {
            return `${params.row.id.split(":").pop().replace('_', ' ')}`;
        }
    },
    {
        field: 'type',
        headerName: 'Roast',
        width: 150,
        editable: false,
    },
    {
        field: 'coffee_in',
        headerName: 'Dose',
        width: 120,
        valueGetter: (params) => {
            return Object.hasOwn(params.row.coffee_in, 'min') && Object.hasOwn(params.row.coffee_in, 'max') ? `${params.row.coffee_in.min} - ${params.row.coffee_in.max}g` : `${params.row.coffee_in}g` ;
        }
    },
    {
        field: 'coffee_out',
        headerName: 'Yield',
        width: 120,
        valueGetter: (params) => {
            return `${params.row.coffee_out}g`
        }
    },
    {
        field: 'extraction_time',
        headerName: 'Extraction time',
        width: 120,
        valueGetter: (params) => {
            return `${params.row.extraction_time.min} - ${params.row.extraction_time.max}s`
        }
    },
    {
        field: 'brewing_ratio',
        headerName: 'Brewing Ratio',
        width: 120,
    },
    {
        field: 'origin.country',
        headerName: 'Origin',
        width: 150,
    },
    {
        field: 'process',
        headerName: 'Process',
        width: 250,
    },
    {
        field: 'producer',
        headerName: 'Producer',
        width: 300,
    },
    {
        field: 'roaster',
        headerName: 'Roaster',
        width: 150,
    },
];

export default function coffeeRecipes() {
    return(
        <Box>
            <Box>
                <Typography variant="h1" component="h1">
                    Recipes
                </Typography>
                <Typography variant="body1">
                    Below you'll find a list of all coffees that elbgold currently offers.
                </Typography>
                {/*TODO: list filtering is better done in the API/data request, not in the table itself; workaround for now is custom filter applied by default*/}
                {/* If formatted right this could be a decent option for list filter application, and a hidden Toolbar instead*/}
                <Typography variant="h2" component="h2">
                    elbgold recipes
                </Typography>
                {/*TODO: make this responsive; only show coffee name and roast on mobile
                */}
                <Box sx={{ height: 800, width: '100%'}}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSizeOptions={[30]}
                        disableRowSelectionOnClick
                        /*replace the Toolbar by Switch or similar other external button/thing*/
                    />
                </Box>
                <Typography variant="h2" component="h2">
                    Espresso recipes at a glance
                </Typography>
                <Box sx={{height: 800, width: '100%', pt: 1}}>
                    <DataGrid
                        rows={espRows}
                        columns={espColumns}
                        pageSizeOptions={[30]}
                        disableRowSelectionOnClick
                        /*replace the Toolbar by Switch or similar other external button/thing*/
                    />
                </Box>
            </Box>
        </Box>
    )
}