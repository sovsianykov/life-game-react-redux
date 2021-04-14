import React, {useState} from 'react'
import useStyles from "./styles"

import {Box } from "@material-ui/core";

 const Cell = ({cell, children }) => {
 const classes = useStyles()
     const [ live , setLive] = useState(false)
      console.log(cell.x)

    return (
        <>
           <div className={ live ? classes.active : classes.default }
                onClick={() => setLive(!live)}>{cell.value}

           </div>
        </>
    )
}
export default Cell
