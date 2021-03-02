import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));


const Image = styled.img`
    width: 80px;
    padding-right: 10px;   
`;

const Box = styled.div`
    width: 40%;
    min-width: 180px;
    min-height: 85px;
    margin: 10px;
    padding: 10px;
    border: 1px solid #bbb;
    background-color: #ffffff;
    border-radius: 5px;

    .imageColumn {
        float: left;
        width: 20%;
    }

    .textColumn {
        float: left;
        width: 80%;
    }

    .row::after {
        content: "";
        clear: both;
        display: table; 
    }

`;

const CardTitle = styled.div` 
    width: 100%;
    min-width: 50%; 
    font-size: 16px;
    font-weight: bold;
    color:  ${({ theme }) => theme.colors.secondary};
`;

const CardDetail = styled.div`  
    min-width: 50%; 
    font-size: 12px;
    font-weight: normal;
    color:  ${({ theme }) => theme.colors.secondary};
`;

export default function ListItem(props) {
    const classes = useStyles();
  
  return (
    <Box variant="outlined" elevation={3}>
        <div class="row">
            <div class="imageColumn">
                <Image src = {props.institutionIcon}/> 
            </div>      
            <div class="textColumn">
                <CardTitle>{props.title}</CardTitle>
                <CardDetail><b>Instituição:</b> {props.institutionName}</CardDetail>
                <CardDetail><b>Local:</b> {props.location}</CardDetail>
                <CardDetail><b>Data de Início:</b> {props.startDate}</CardDetail>
                <CardDetail><b>Data de Término: </b>{props.endDate}</CardDetail>
            </div>          
        </div>    
    </Box>
  );
}