import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const DrawTable = (props) =>{
  console.log('props', props.data)
  const [open, setOpen] = React.useState(false);
/*   const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      boxShadow: 'none',
    },
    content: {
      flex: '0 0 auto',
      width:'30%',
    },
    cover: {
      width: '100%',
    },
  })); */

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      boxShadow: 'none',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
  }));

  const classes = useStyles();

  return (
    <>
      <TableRow  >
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell id={props.data.idProduct} onClick={props.open} >{props.data.title} </TableCell>
        <TableCell>{props.data.relevance}</TableCell>
        <TableCell>{props.data.price}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, width:'100%' }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit width='100%'  >
            <Box sx={{ width: '100%' }}>
              <Card className={classes.root}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography style={{ width:100 }} >
                      {props.data.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {props.data.producerName}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                    {props.data.category}
                    </Typography>
                  </CardContent>
                </div>
                <CardMedia
                  className={classes.cover}
                  image={props.data.image}
                  title="Live from space album cover"
                />
              </Card>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
export default DrawTable
