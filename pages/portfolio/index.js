import Link from 'next/link'
import Layout from "../../components/Layout"

import Typography from '@material-ui/core/Typography';

import CardSet from "../../components/CardSet"
import portfolioCards from "../../config/portfolio-cards";
   
  
function Portfolio(props) {
    return (
    <Layout>
        <Typography variant="h3">Portfolio</Typography>
        <CardSet cards={portfolioCards} />
    </Layout>
    )  
}

export default Portfolio