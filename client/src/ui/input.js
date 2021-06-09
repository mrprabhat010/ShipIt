import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    input:{
        height:10
    },
    error:{
        position:'absolute'
    }
    // MuiInputBase-input:{

    // }
  }));
function Input(props) {
    const classes = useStyles();
    const showError = () => {
        let errorMessage = <div className={classes.error}>
                {
                    props.formdata.validation && !props.formdata.valid ?
                        props.formdata.validationMessage
                    :null
                }
        </div>
        return errorMessage
    }
    return (
        <div>
            <TextField 
            style={{width:`${props.width}px`,marginTop:'1.5em', position: 'relative'}}
            size="small"
            value={props.formdata.value} 
            {...props} 
            required
            onChange={(event)=> props.change({event,id:props.id})}
            variant="outlined"
            InputLabelProps={{
                shrink: true
              }}
            />
            { showError()}
        </div>
    );
}

export default Input;