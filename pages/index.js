import Link from 'next/link'
import Layout from "../components/Layout"
import Typography from "@material-ui/core/Typography";
import CmsService from '../src/shared/cms-service';

function Home() {
    let test = new CmsService();
    return (
        <Layout>
            <Typography variant="h3">Home Page</Typography>
            <Typography variant="subtitle1">Seja bem-vindo(a) ao meu site!</Typography>
            <Typography variant="subtitle1">Ainda em construção!</Typography>
        </Layout>
        
    )
        
}

export default Home