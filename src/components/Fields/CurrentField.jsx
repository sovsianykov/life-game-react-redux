import React, {useState} from "react";
import {Box, Button} from "@material-ui/core";
import { fieldSetup } from "./fieldSetup";
import useStyles from "./styles"
import Cell from "./Cell";
import { step1, step2, step3 } from "../livingprocess/living";
import {interval} from 'rxjs'
import { map, take} from "rxjs/operators";


const  CurrentField= () =>{
    const classes = useStyles()
    const [mainField, setMainField] = useState(fieldSetup)
    const [stepLog, setStepLog] = useState(' Step 0')

  const handleStep1 = () =>{
      setMainField(step1(mainField))
      setStepLog(' Step1')
  }
  const handleStep2 =()=>{
       setMainField(step2(mainField))
      setStepLog(' Step2')

  }
    const handleStep3 =()=>{
         setMainField(step3(mainField))
        setStepLog(' Step3')

    }

    const stream$ = interval(1501)
        .pipe(
           map(()=> mainField ),
           // map( handleStep2 ),
           // map( handleStep3 ),
           take(20)
        )
   // const stream$ = new Observable(observer =>{
   //     observer.next(mainField)
   // })



   const handleSubscribe = () => {
        stream$.subscribe(
            (value) => setMainField(step1(value)),
        )
       stream$.subscribe(
           (value) => setTimeout(() =>setMainField(step2(value)),500),
       )
       stream$.subscribe(
             (value) => setTimeout(() =>setMainField(step3(value)),1000)

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
