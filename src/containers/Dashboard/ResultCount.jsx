import styled from "styled-components";

const CountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Sort = styled.div`
  background-color: ${({val})=> (val === 'Critical' && '#FF1900') ||
    (val === 'Major' && '#F58737') ||
    (val === 'Minor' && '#F5C037') ||
    (val === 'Info' && '#00AA00') ||
    (val === 'None' && '#EEEEF2')
  };
  border: 0.6px solid ${({val})=> (val === 'Critical' && '#FF1900') ||
    (val === 'Major' && '#F58737') ||
    (val === 'Minor' && '#F5C037') ||
    (val === 'Info' && '#00AA00') ||
    (val === 'None' && '#EEEEF2')};
  color: #FFFFFF;
  padding: 4px 12px;
  font-weight: 500;
`
const Count = styled.div`
  padding: 4px 12px;
  border-top: 0.6px solid #EEEEF2;
  border-right: 0.6px solid #EEEEF2;
  border-bottom: 0.6px solid #EEEEF2;
`
const ResultCount = ({data}) => {
  return (
    <CountWrapper>
      <Sort val={data[0]}>{data[0].charAt(0)}</Sort>
      <Count>{data[1]}</Count>
    </CountWrapper>
  );
}

export default ResultCount;