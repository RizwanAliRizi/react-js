import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 
{ 
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 400,
    margin: 'auto'
  },
  title: {
    fontSize: 15,
  },
  img: {
    width: 300,
    height: 300,
    objectFit: 'contain'
  },
  button: {
    background: '#ccc',
  }
});

function Home(props) {
  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <CardContent>
        <CardHeader title="Home Component" className={classes.title} />
        <div className='cart-wrapper'>
          <div className="img-wrapper item">
            <img src="https://www.esquireme.com/public/styles/full_img/public/images/2019/09/19/iPhone-11-Pro-Max-Dubai-Review-(2).jpg?itok=vo6NFfyV" alt="" className={classes.img} />
          </div>
          <div className="text-wrapper item">
            <span> I phone </span>
            <span>$500</span>
          </div>
        </div>
        <CardActions>
          <Button
           size="small"
           className={classes.button}
           onClick={() => props.addToCartHandler({price: 1000, name: 'iphoneX'})}
          >Add to Cart</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default Home;
