import styled from 'styled-components';

const Component = styled.div`
background-color: ${({rank})=> {
  if (rank === "A") {return "#00AA00";}
  if (rank === "B") {return "#F5C037";}
  if (rank === "C") {return "#F58737";}
  if (rank === "D") {return "#FF0000";}
  if (rank === "E") {return "#4A4A4A";}
}};
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  font-size: 1.3rem;
  color: #FFFFFF;
  text-align: center;
  line-height: 1.80rem;
`
const Score = ({rank}) => {
  return( 
    <Component rank={rank}>{rank}</Component>
  );
}

export default Score;