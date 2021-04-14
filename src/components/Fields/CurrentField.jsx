import React from "react";
import {Box, Button} from "@material-ui/core";
import { fieldCreator } from "./FieldGenerator";
import useStyles from "./styles"
import Cell from "./Cell";



let fieldCurrent = fieldCreator( 20, 20);

const  CurrentField= () =>{
    const classes = useStyles()
    fieldCurrent[19].value = 1
    console.log(fieldCurrent)
    return (
        <>
            <div className={classes.fieldContainer}>
                {fieldCurrent.map((cell,i) =>(
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
export default CurrentField
