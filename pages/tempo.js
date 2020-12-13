function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>
                {dynamicDateString} (dinâmico)
            </div>
            <div>
                {props.staticDateString} (estático)
            </div>
        </div>
    )
}

export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = dynamicDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
}

export default Tempo;