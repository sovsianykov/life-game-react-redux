
import React from "react";
import {Box, Button} from "@material-ui/core";
import { fieldCreator } from "./fieldSetup";
import useStyles from "./styles"
import Cell from "./Cell";



let fieldNext = fieldCreator( 20, 20);

const  NextField= () =>{
    const classes = useStyles()

    return (
        <>
            <div className={classes.fieldContainer}>
                {fieldNext.map((cell,i) =>(
                    <Cell key={i} cell={cell} id={i} ></Cell>
                ))}
            </div>
            <Box>
                <Button variant='contained' color='primary' >Go</Button>
                <Button variant='contained' color='secondary' >Stop</Button>
                <Button variant='contained' color='default' >Reset</Button>
            </Box>

        </>
    )
}
export default NextField;
