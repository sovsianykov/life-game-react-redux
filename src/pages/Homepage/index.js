import React from "react";
import {Box, Grid} from "@material-ui/core";
import './styles.scss'
import CurrentField from "../../components/Fields/CurrentField";
import NextField from "../../components/Fields/NextField";

const Homepage = () =>{
    return (
        <Box>
         <Grid container justify='center' className='main'>
            <Grid item xs={12} md={5} sm={5} >
                <CurrentField/>
            </Grid>
            {/*<Grid item xs={12} md={5} sm={5} >*/}
            {/*    <NextField/>*/}
            {/*</Grid>*/}
         </Grid>
        </Box>
    )
}
export default Homepage
