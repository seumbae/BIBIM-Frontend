import styled from "styled-components";

const Container = styled.div`
  display: block;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

`;

const InfoTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TitleMessage = styled.div`
  font-size: 12px;
  font-weight: 508;
  color: #000000;
`;

const ScoreText = styled.div`
  font-size: 10px;
  font-weight: 300;
  color: #707070;
`;

const ScoreNumber = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #DD4433;
`;

const LocationText = styled.div`
  font-size: 10px;
  font-weight: 300;
  color: #707070;
`;

const ContentsContainer = styled.div`
  display: flex;
`;

const PropertyContainer = styled.div`
  display: flex;
`;

const PropertyTitle = styled.div`
  font-size: 10px;
  font-weight: 300;
  margin-left: 14px;
`;

const ValueText = styled.div`
  font-size: 10px;
  color: ${ ({ color }) => ( color ? color : "#707070") };
`;

const VulnTypeContainer = styled.div`
  display: flex;
`;

const VulnType = styled.div`
  font-size: 8px;
`;

const DivisionLine = styled.div`
  border: 0.5px solid #D9D9D9;
`;

const PropetyValue = ( { value } ) => {
  const colorList = {
    "warning"   : "#F58737",
    "error"     : "#DD4433",
    "Very-High" : "#00AA00",
    "High"      : "#2181B8",
  }

  return <ValueText color={colorList[value]}>{value}</ValueText>;
};

const DetailIssueComponent = ( { data } ) => {
  return (
    <Container>
      <InfoTopContainer>
        {
          data.message ? <TitleMessage>{data.message.text}</TitleMessage> 
          : <TitleMessage>-</TitleMessage>
        }
        <ScoreContainer>
          <ScoreText>Score: </ScoreText>
          {
            data.description ? <ScoreNumber>{data.description.properties["security-severity"]}</ScoreNumber> 
            : <ScoreNumber>-</ScoreNumber>
          }
        </ScoreContainer>
      </InfoTopContainer>
      <InfoBottomContainer>
        <ContentsContainer>
          {
            data.locations ? <LocationText>{data.locations[0].physicalLocation.artifactLocation.uri}</LocationText>
            : <LocationText>-</LocationText>
          }
          <PropertyContainer>
            <PropertyTitle>Level: </PropertyTitle>
            {
              data.description ? <PropetyValue value={data.description.defaultConfiguration.level} />
              : <PropetyValue>-</PropetyValue>
            }
            <PropertyTitle>Precision: </PropertyTitle>
            {
              data.description ? <PropetyValue value={data.description.properties["problem.severity"]} />
              : <PropetyValue>-</PropetyValue>
            }
            <PropertyTitle>Line: </PropertyTitle>
            {
              data.locations ? <PropetyValue value={data.locations[0].physicalLocation.region.startLine} />
              : <PropetyValue>-</PropetyValue>
            }
          </PropertyContainer>
        </ContentsContainer>
        <VulnTypeContainer>
          <VulnType>cwe</VulnType>
        </VulnTypeContainer>
      </InfoBottomContainer>
      <DivisionLine></DivisionLine>
    </Container>
  );
};

export default DetailIssueComponent;