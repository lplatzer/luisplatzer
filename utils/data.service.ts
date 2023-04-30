export{}
// const SurrealInstance = new AwaitedSurreal({
//     endpoint: 'http://localhost:8000',
//     namespace: 'test',
//     database: 'test',
// });


// const Surreal = require("surrealdb.js");
//
// const db = new Surreal.default('http://127.0.0.1:8000/rpc');
// function transformReturnObject(params) {
//     return (
//         {
//             params,
//         }
//     )
// }
//
//
// export async function getCoffeeNames() {
//     try {
//         await db.signin({
//             user: 'root',
//             pass: 'root',
//         });
//
//         await db.use('test,', 'test');
//         let getAllCoffees = await db.query('SELECT id FROM type::table($tb)', {
//             tb: 'coffees',
//             query: 'id',
//         });
//         return getAllCoffees[0].result;
//
//     } catch (e) {
//         console.log('ERROR', e);
//     }
// }
// export const getAllCoffees = db.query('SELECT * FROM type::table($tb)', {
//     tb: 'coffees',
// });
// export const getAllNames = db.query('SELECT id FROM type::table($tb)', {
//     tb: 'coffees',
// });
// export async function getCoffeeData(id) {
//     try {
//         await db.signin({
//             user: 'root',
//             pass: 'root',
//         });
//
//         await db.use('test', 'test');
//         let coffeeData = await db.query('SELECT id FROM type::table($tb)', {
//             tb: 'coffees',
//             id: id,
//         });
//         return coffeeData[0].result;
//     } catch (e) {
//         console.log('ERROR', e);
//     }
// }
// export async function getElbgoldCoffees() {
//     // IF other coffees were to exist, e.g. for cwm.com, this should create pages for all coffees, not only elbgold; or alternatively, one for each? would increase
//     // the request amount by quite a bit though
//     try {
//         await db.signin({
//             user: 'root',
//             pass: 'root',
//         });
//
//         await db.use('test', 'test');
//
//         let getAllCoffees = await db.select('coffees');
//         let testArray = [];
//         testArray.push(...getAllCoffees);
//         // add params: { getAllCoffees[i] to each array element}
//         testArray.forEach(transformReturnObject);
//         return testArray;
//
//     } catch (e) {
//         console.log('ERROR', e);
//     }
// }
// export async function getElbgoldFilter() {
//     try {
//         await db.signin({
//             user: 'root',
//             pass: 'root',
//         });
//
//         await db.use('test', 'test');
//
//         let getElbgoldFilter = await db.query('SELECT * FROM type::table($tb) WHERE type = $type', {
//             tb: 'coffees',
//             type: 'Filter',
//         });
//         return getElbgoldFilter[0].result.map(params => transformReturnObject(params));
//     } catch (e) {
//         console.log('ERROR', e);
//     }
// }
//
// export async function getElbgoldEspresso(name) {
//
//     try {
//         await db.signin({
//             user: 'root',
//             pass: 'root',
//         });
//
//         await db.use('test', 'test');
//
//         let getElbgoldEspresso = await db.query("SELECT * FROM type::table($tb) WHERE type = $type", {
//             tb: 'coffees',
//             type: 'Espresso',
//         });
//
//         return {
//             params: {
//                 name: getElbgoldEspresso[0].result,
//                 ...getElbgoldEspresso[0].result,
//             }
//         }
//     } catch (e) {
//         console.log('ERROR', e);
//     }
// }