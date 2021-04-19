import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() =>({

    default : {
        width : '30px',
        height : '30px',
        background : "dimgrey",
        display : "inline-flex",
        alignItems:"center",
        justifyContent : 'center',
        border : "0.5px solid black ",
        boxSizing : "border-box",
        transition : ' 0.7s ease-in-out ',
        cursor : 'pointer',
        margin : '0!important'



    },
    active : {
    width : '30px',
    height : '30px',
    background : "firebrick",
    display : "inline-flex",
        alignItems:"center",
        justifyContent : 'center',
    border : "0.5px solid firebrick",
        boxSizing : "border-box",
        color : "white",
        cursor : 'pointer'

    },
    fieldContainer: {
        width : 600,
        height : 600,
        margin : 0 ,
        padding: 0,
        lineHeight : 0,
        // fontSize : 0,
        fontWeight : 600,
        letterSpacing : 0
    }
}))


