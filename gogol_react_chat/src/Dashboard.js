import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      height: theme.spacing(16),
    },
  },
}));

export default function Dashboard() {

	const classes = useStyles();

  return(
    <div>
      <div className={classes.root}>
        <Paper elevation={3} />
      </div>
    </div>
  )
}