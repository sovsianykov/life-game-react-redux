import React, {useState} from 'react'
import useStyles from "./styles"

import {Box } from "@material-ui/core";

 const Cell = ({cell }) => {
 const classes = useStyles()
     const [ live , setLive] = useState(false)


    return (
        <>
           <div className={ live ? classes.active : classes.default }
                onClick={() => setLive(!live)}>
           </div>
        </>
    )
}
export default Cell
