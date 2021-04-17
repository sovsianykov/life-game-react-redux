import React, {useState} from "react";
import {Box, Button} from "@material-ui/core";
import { fieldCreator } from "./FieldGenerator";
import useStyles from "./styles"
import Cell from "./Cell";
import { step1, step2, step3 } from "../livingprocess/living";
import {interval} from 'rxjs'
import { map,take } from "rxjs/operators";

let fieldSetup = fieldCreator( 20, 20);

const  CurrentField= () =>{
    const classes = useStyles()
    const [mainField, setMainField] = useState(fieldSetup)

  const handleStep1 = () =>{
      setMainField(step1(mainField))
  }
  const handleStep2 =()=>{
      setMainField(step2(mainField))
  }
    const handleStep3 =()=>{
        setMainField(step3(mainField))
    }

    const stream$ = interval(1000)
        .pipe(
           map( handleStep1 ),
           map( handleStep2 ),
           map( handleStep3 ),
           take(20)
        )


   const handleSubscribe = () => {
        stream$.subscribe({

              complete: () => console.log("Complete")

            }
        )
   }

    return (
        <>
            <div className={classes.fieldContainer}>
                {mainField.map((cell,i) =>(
                    <Cell key={i} cell={cell} id={i}/>
                ))}
            </div>
            <Box>
                <Button variant='contained' color='primary' onClick={handleStep1} >Step1</Button>
                <Button variant='contained' color='secondary' onClick={handleStep2} >Step2</Button>
                <Button variant='contained' color='default' onClick={handleStep3} >Step3</Button>
                <Button variant='contained' color='dark' onClick={handleSubscribe} >RxjS</Button>
            </Box>

        </>
    )
}
export default CurrentField
