import Link from "next/link";
import { withRouter } from "next/router";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import "./SingleCard.scss";

const SingleCard = props => (
  
  <Grid item sm={5}>
    <Link href={props.path}> 
    <Card className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.imageAlt}
          className="media"
          image={props.imagePath}
          title={props.title}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{props.cardName}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">{props.cardText}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Link>
  </Grid>
);

export default withRouter(SingleCard);