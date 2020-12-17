import Grid from '@material-ui/core/Grid';
import SingleCard from "./SingleCard";
import "./SingleCard.scss";

const CardSet = props => (
    <Grid
    container
    spacing={6}
    direction="row"
    alignItems="center"
    justify="center"
    style={{ minHeight: '50vh' }}
    className = "root"
    item sm={12}>
        {props.cards.map(card => (
            <SingleCard
                cardName={card.cardName}
                cardText={card.cardText}
                path={card.path}
                imagePath={card.imagePath}
                imageAlt={card.imageAlt}
                title={card.imageTitle}
            />   
            ))}             
  </Grid>
);

export default CardSet;