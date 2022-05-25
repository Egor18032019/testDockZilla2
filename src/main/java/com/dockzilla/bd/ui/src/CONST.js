const Active = {
    REALIZATION: "REALIZATION",
    TECHTASK : `TECHTASK`,
    TESTCASE: `TESTCASE`,
} 

const AppRoute = {
    ROOT: `/`,
    ADD: `/add`,
    DELETE: `/delete`,
    LIST: `/students`,
    TECHTASK : `/task`,
 };

const ReducerActionRouter = {
    SWITCHPAGE : `SWITCHPAGE`,
    SENDCELLS: `SENDCELLS`, 
    ERROR: `ERROR`, 
    GETALLCELLS: `GETALLCELLS`, 
}

export {
    ReducerActionRouter,
    AppRoute,
    Active

};