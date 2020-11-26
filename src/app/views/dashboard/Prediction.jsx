import React ,{useState} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Icon from '@material-ui/core/Icon';



const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      maxWidth: 400,
    },
    button: {
        margin: theme.spacing(1),
      },
  }));

export default function Prediction() {
  const classes = useStyles();
  const [ticker, setTicker] = React.useState('e.g. AAPL')
  const [open, setOpen] = React.useState('e.g. 120');
  const [high, setHigh] = React.useState('e.g. 120');
  const [low, setLow] = React.useState('e.g. 120');
  const [compound, setCompound] = React.useState('e.g. -5');
  const [price, setPrice] = React.useState('');

  const predict = e => {
      e.preventDefault()
      axios.post(`http://localhost:8080/nasdaq/prediction`, {high, low, open, compound, ticker})
          .then(res => {
              const data = JSON.parse(res.data)
              setPrice(data.price)
              
          })
          .catch(error => {
              alert("Please check the right number");
          })

  }

  

  return (
    <Card className={classes.root} >
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            Stock Psychic for Closing Price
          </Typography>
          <form className={classes.root} noValidate autoComplete="off">
      <div>
            <TextField
          id="filled-name"
          label="Ticker"
          value={ticker}
          onChange={e => setTicker(`${e.target.value}`)}
          variant="filled"
        />
        <TextField
          id="filled-name"
          label="Open"
          value={open}
          onChange={e => setOpen(`${e.target.value}`)}
          variant="filled"
        />
        <TextField
          id="filled-name"
          label="High"
          value={high}
          onChange={e => setHigh(`${e.target.value}`)}
          variant="filled"
        />
        <TextField
          id="filled-name"
          label="Low"
          value={low}
          onChange={e => setLow(`${e.target.value}`)}
          variant="filled"
        />
        <TextField
          id="filled-name"
          label="New's Score"
          value={compound}
          onChange={e => setCompound(`${e.target.value}`)}
          variant="filled"
        />
      </div>
      </form>
      {price == "" ? 
      <Button onClick={predict}
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>money</Icon>}
      >
        Check Price!
      </Button>
      : <h6>Predicted Adjusted close price : $ {price}</h6>}
      
        </CardContent>
    </Card>
  );
}