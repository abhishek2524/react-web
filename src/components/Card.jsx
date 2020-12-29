import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  noteDesc:{
    position: "absolute",
    right: '0',
    marginBottom: '25px'
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  const deleteNote = ()=>{
    props.data.deleteItem(props.data.id);
  };
  return (
    <Card className={classes.root}>
        <div style={{position:'relative'}}>
            
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data.data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={deleteNote} color="secondary" className={classes.noteDesc}>
          <DeleteIcon/>
        </Button>
      </CardActions>
        </div>
    </Card>
  );
}
