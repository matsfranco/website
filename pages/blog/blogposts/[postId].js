import Layout from '../../../src/components/Layout/index.js';
 
export async function getStaticPaths() {

    return {
        paths: [{
            params: {
                postId: '1'
            }
        },{
           params: {
                postId: '2'
           } 
        }],
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.postId;
    return({
        props: {
            postId : id
        }
    });
}


function BlogPost(props) {
    
    return (
        <Layout>
            <div>
                Id do Post: {props.postId}
            </div>
        </Layout>

    );

}

export default BlogPost;