import React, {useState} from 'react'
import useStyles from "./styles"


 const Cell = ({cell, }) => {
 const classes = useStyles()
     const [ live , setLive] = useState(false)


    return (
        <>
           <div className={ cell.isLive ? classes.active : classes.default }
                onClick={() => {
                    cell.isLive = true
                    console.log(cell)
                    setLive(!live)
                }}>{cell.value}
           </div>
        </>
    )
}
export default Cell
