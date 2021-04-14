import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() =>({

    default : {
        width : '10px',
        height : '10px',
        background : "green",
        display : "inline-block",
        // border : "0.5px solid white",
        margin: 0,
        lineHeight : '5px',
        letterSpacing : 0
    },
    active : {
    width : '10px',
    height : '10px',
    background : "firebrick",
    display : "inline-block",
    border : "0.5px solid firebrick"
},
    fieldContainer: {
        width :1000,
        height : 1000,

    }



}))


