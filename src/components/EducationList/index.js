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
            {props.educations.map(education => (
                <Grid item xs={12} key = {education.attributes.fields.title} >
                    <EducationItem 
                        title={education.attributes.fields.title}
                        institutionIcon={education.attributes.fields.institutionicon}
                        institutionName={education.attributes.fields.institutionname}
                        location={education.attributes.fields.location}
                        startDate={education.attributes.fields.startdate}
                        endDate={education.attributes.fields.enddate}
                    />
                </Grid>
            ))}
        </Grid> 
    );
}