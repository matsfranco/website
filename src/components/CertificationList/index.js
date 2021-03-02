
import ListItem from '../ListItem/index.js';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
/*
const List = styled.li`
    display: flex;
    flex-direction: row;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-right: 10px;

    .h5 {
        width: 100%;
        padding: 50px;
    }
`;

const Section = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width:100%

`;

const SectionCardList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    z-index: 1;
`;
*/
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
                <Grid item xs={12}>
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