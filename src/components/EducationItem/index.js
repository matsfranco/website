import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));


const Image = styled.img`
    width: 100%;   
`;

const Box = styled.div`
    width: 50%;
    min-width: 50%;
    min-height: 85px;
    margin: 10px;
    padding: 10px;
    border: 1px solid #bbb;
    background-color: #ffffff;
    border-radius: 5px;
`;

const CardTitle = styled.div` 
    width: 100%;
    min-width: 50%; 
    font-size: 16px;
    font-weight: bold;
    color:  ${({ theme }) => theme.colors.secondary};
`;

const CardDetail = styled.div`  
    min-width: 100%; 
    font-size: 12px;
    font-weight: normal;
    color:  ${({ theme }) => theme.colors.secondary};
`;

export default function ListItem(props) {
    const classes = useStyles();
  
  return (
    <Box variant="outlined" elevation={3}>
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
            <Grid item xs={6} sm={2}>
                <Image src = {props.institutionIcon}/> 
            </Grid>      
            <Grid item xs={6} sm={10}>
                <CardTitle>{props.title}</CardTitle>
                <CardDetail><b>Instituição:</b> {props.institutionName}</CardDetail>
                <CardDetail><b>Local:</b> {props.location}</CardDetail>
                <CardDetail><b>Data de Início:</b> {props.startDate}</CardDetail>
                <CardDetail><b>Data de Término: </b>{props.endDate}</CardDetail>
            </Grid>          
        </Grid>    
    </Box>
  );
}