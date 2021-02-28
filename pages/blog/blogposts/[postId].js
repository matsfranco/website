import Layout from '../../../src/components/Layout/index.js';
 
export async function getServerSideProps(context) {
    const postId = context.query.postId;

    // The only thing to be sent to front-end
    return {
        props: {
            id: postId
        }
    }
}


function BlogPost(props) {
    
    return (
        <Layout>
            <div>
                Id do Post: {props.id}
            </div>
        </Layout>

    );

}

export default BlogPost;