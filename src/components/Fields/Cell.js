import React from 'react'
import useStyles from "./styles"

import {Box } from "@material-ui/core";

 const Cell = ({cell , id}) => {
 const classes = useStyles()
    return (
        <>
           <div className={ cell.value ? classes.active : classes.default }>
           </div>
        </>
    )
}
export default Cell
