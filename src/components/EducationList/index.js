import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EducationItem from '../EducationItem/index.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function List({...props})  {
    const classes = useStyles();
    let listTitle = 'Formação Acadêmica'
    return(
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                    {listTitle}
                </Typography>
            </Grid>
            {props.experiences.map(experience => (
                <Grid item xs={12} key = {experience.attributes.fields.title} >
                    <EducationItem 
                        title={experience.attributes.fields.title}
                        institutionName={experience.attributes.fields.institutioncompany[0].title}
                        location={experience.attributes.fields.location}
                        startDate={experience.attributes.fields.startdate}
                        endDate={experience.attributes.fields.enddate}
                    />
                </Grid>
            ))}
        </Grid> 
    );
}