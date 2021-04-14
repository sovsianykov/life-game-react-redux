import React from "react";
import {Box} from "@material-ui/core";
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
                    <Cell key={i} cell={cell} id={i} />
                ))}
            </div>

        </>
    )
}
export default CurrentField
