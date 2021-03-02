import styled from 'styled-components';

const Image = styled.img`
    width: 80px;
    float: left;
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
  return (
    <Box variant="outlined" elevation={3}>
      <Image src = {props.expeditorIcon}/> 
      <CardTitle>{props.title}</CardTitle>
      <CardDetail>{props.expeditor}</CardDetail>
    </Box>
  );
}