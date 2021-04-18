import React, {useState} from "react";
import {Box, Button} from "@material-ui/core";
import { fieldCreator } from "./FieldGenerator";
import useStyles from "./styles"
import Cell from "./Cell";
import { step1, step2, step3 } from "../livingprocess/living";
import {interval} from 'rxjs'
import { map, take, mapTo} from "rxjs/operators";

let fieldSetup = fieldCreator( 20, 20);

const  CurrentField= () =>{
    const classes = useStyles()
    const [mainField, setMainField] = useState(fieldSetup)
    const [stepLog, setStepLog] = useState(' Step 0')

  const handleStep1 = () =>{
     setTimeout(()=> setMainField(step1(mainField)),10)
      setStepLog('Step1')
  }
  const handleStep2 =()=>{
      setTimeout(()=> setMainField(step2(mainField)),500)
      setStepLog('Step2')

  }
    const handleStep3 =()=>{
        setTimeout(()=> setMainField(step3(mainField)),800)
        setStepLog('Step3')

    }

    const stream$ = interval(1600)
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
                <Button variant='contained' color='primary' onClick={handleStep2} >Step2</Button>
                <Button variant='contained' color='primary' onClick={handleStep3} >Step3</Button>
                <Button variant='contained' color='secondary' onClick={handleSubscribe} >RxjS</Button>
                {stepLog}
            </Box>
        </>
    )
}
export default CurrentField;
