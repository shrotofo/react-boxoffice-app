import styled from 'styled-components';
export default function AppTitle(props) {
  const { title = '', subtitle = '' } = props;
  return (
    <TitleWrapper>
      
      <img src={"/mov.jpeg"} alt="Movie Scout Logo" />
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  img {
    width: 300px; 
    height: 300px;
    margin: 0 0 10px;
  }
  p {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
  }
`;
