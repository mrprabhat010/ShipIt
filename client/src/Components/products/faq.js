import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { faq } from './data';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '55vw',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 'bold',
    color:'#373737'
  },
  para:{
      color:''
  }
}));

export default function SimpleAccordion() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {faq.map((val, i)=>(
        <Accordion key={i}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          key={i}
        >
          <Typography key={i} className={classes.heading}>Q. {val.question}</Typography>
        </AccordionSummary>
        <AccordionDetails key={val}>
          <Typography className={classes.para} key={i} >
            Answer: {val.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))}
    </div>
  );
}
