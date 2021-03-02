
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItem from '../ListItem/index.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function List({...props})  {
    const classes = useStyles();
    let listTitle = 'Certificações'
    return(
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                    {listTitle}
                </Typography>
            </Grid>
            {props.certifications.map(certification => (
                <Grid item xs={12} key = {certification.attributes.fields.title} >
                    <ListItem 
                        title={certification.attributes.fields.title}
                        expeditor={certification.attributes.fields.expeditor}
                        expeditionDate={certification.attributes.fields.expeditiondate}
                        expeditorIcon={certification.attributes.fields.expeditorIcon}
                    />
                </Grid>
            ))}
        </Grid> 
    );
}