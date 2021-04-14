import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() =>({

    default : {
        width : '20px',
        height : '20px',
        background : "black",
        display : "inline-block",
        border : "0.5px solid white ",
        boxSizing : "border-box",
        transition : ' 0.7s ease-in-out '


    },
    active : {
    width : '20px',
    height : '20px',
    background : "firebrick",
    display : "inline-block",
    border : "0.5px solid firebrick",
        boxSizing : "border-box"

    },
    fieldContainer: {
        width : 400,
        height : 400,
        margin : 0 ,
        padding: 0,
        lineHeight : 0,
        fontSize : 0,
        letterSpacing : 0

    }



}))


