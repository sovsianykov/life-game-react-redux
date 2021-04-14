import React from "react";
import {Box, Grid} from "@material-ui/core";
import CurrentField from "../../components/Fields/CurrentField";

const Homepage = () =>{
    return (
        <Box>
         <Grid container justify='center'>
            <Grid item xs={12} md={6} sm={6} >
                <CurrentField/>
            </Grid>
            {/*<Grid item xs={12} md={5} sm={5} ></Grid>*/}
         </Grid>
        </Box>
    )
}
export default Homepage
