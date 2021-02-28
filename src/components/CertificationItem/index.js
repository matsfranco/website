import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 100,
  },
});

const CertificationTitle = styled.div`  
    font-size: 14px;
    font-weight: bold;
`;

const CertificationDetails = styled.div`  
    font-size: 12px;
    font-weight: normal;
`;

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.expeditorIcon}      
          title="Contemplative Reptile"
        />
        <CardContent>
          <CertificationTitle>
            {props.title}
          </CertificationTitle>
          <CertificationDetails>
            Emitido por: {props.expeditor}
          </CertificationDetails>          
          <CertificationDetails>
            Emitido em: {props.expeditionDate}
          </CertificationDetails>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}