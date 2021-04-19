import React, {useCallback, useState} from 'react'
import useStyles from "./styles"


 const Cell = ({cell }) => {
 const classes = useStyles()
     const [ live , setLive] = useState(false)
   const onClickHandler = useCallback(()=> {

       cell.isLive = true;
       console.log(cell);
       setLive(!live);

   }, [live,cell])

    return (
        <>
           <div className={ cell.isLive ? classes.active : classes.default }
                onClick={onClickHandler}>{cell.value}
           </div>
        </>
    )
}
export default Cell
