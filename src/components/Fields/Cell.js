import React, {useCallback, useState} from 'react'
import useStyles from "./styles"
import click from '../../assets/clickEfx.mp3'

const audio = new Audio(click)

 const Cell = ({cell }) => {
 const classes = useStyles()
     const [ live , setLive] = useState(false)
   const onClickHandler = useCallback(()=> {

       cell.isLive = true;
       console.log(cell);
       audio.play()
       setLive(!live);

   }, [live,cell])

    return (
        <>
           <div className={ cell.isLive ? classes.active : classes.default }
                onClick={onClickHandler}>{cell.value ? cell.value : `'`}
           </div>
        </>
    )
}
export default Cell
