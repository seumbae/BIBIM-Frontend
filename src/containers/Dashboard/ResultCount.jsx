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
    (val === 'Info' && '#00AA00')};
  border: 0.6px solid ${({val})=> (val === 'Critical' && '#FF1900') ||
    (val === 'Major' && '#F58737') ||
    (val === 'Minor' && '#F5C037') ||
    (val === 'Info' && '#00AA00')};
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
const ResultCount = ({sort, count}) => {
  return (
    <CountWrapper>
      <Sort val={sort}>{sort.charAt(0)}</Sort>
      <Count>{count}</Count>
    </CountWrapper>
  );
}

export default ResultCount;