import Link from 'next/link'
import Layout from "../../components/Layout"

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    card: {
      maxWidth: 300,
    },
    media: {
      height: 230,
    },
    paper: {
        textAlign: 'center',
        height: 230,
    },
  });

function Portfolio() {
    const classes = useStyles();
    return (
    <Layout>
        <Typography variant="h3">Portfolio</Typography> 
        <Box
            display="flex"
            flexWrap="wrap"
            p={1}
            m={1}
            css={{ maxWidth: 1100 }}>
            <Box p={1}>
            <Link href="/portfolio/professional"> 
            <Card className={classes.card}>
                    <CardActionArea>
                        
                        <CardMedia
                            component="img"
                            alt="Boneco de pelúcia do Astro, mascote da Salesforce, junto a uma garrafa térmica da Localiza"
                            className={classes.media}
                            image="/static/images/professional_card_cover.png"
                            title="Dia de integração na Localiza"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Profissional
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Projetos em que participei nas empresas em que tive oportunidade de trabalhar
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card> 
                </Link>
            </Box>
            <Box p={1}>
                <Link href="/portfolio/academic">  
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Robô do tipo seguidor de linha com duas rodas com um monitor ao fundo"
                            className={classes.media}
                            image="/static/images/academic_card_cover.png"
                            title="Adaptative Line Follower"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Acadêmico
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Projetos de graduação, pesquisa e extensão ao longo da minha formação na Universidade Federal de São Paulo
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Link>  
            </Box>
        </Box>
    </Layout>
    )  
}

export default Portfolio