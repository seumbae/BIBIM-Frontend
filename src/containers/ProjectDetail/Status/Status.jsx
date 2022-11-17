import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Branch from '../../../components/Branch';
import HorizonLine from '../../../components/HorizonLine';
import VulComponent from './Vulnerability';
import Tooltip from '../../../components/Tooltip';
import Condition from './Condition';
import Score from './Score';
import Graph from "./Graph";

const BodyWrapper = styled.div`
  margin-top: 3rem;
  margin-right: 9%;
  heigth: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2rem;
`
const DetatilWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
const TitleWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`
const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  margin-right: 1rem;
`
const Button = styled.div`
background-color: #EEEEF2;
padding: 4px 12px;
width: 55px;
height: 30px;
font-size: 1rem;
border-radius: 1.5rem;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

const DetailInfoWrapper = styled.div`
  font-size: 0.9rem;
  color: #555555;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
const OwnerRepoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const OwnerRepo = styled.div`
  display: flex;
  gap: 1rem;
`
const JenkinsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`
const Tools = styled.div`
  font-size: 0.8rem;
  display: flex;
  gap: 1rem;
`

const DescWrapper = styled.div`
  max-width: 70%;
`

const VulWrapper = styled.div`
  font-weight: 700;
`
const Vul = styled.div`
  display: flex;
  justify-content: space-between;
`

const ConditionWrapper = styled.div`
`
const SubTitle = styled.div`
  display: flex;
  gap: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
`
const VerticalLine = styled.div`
  border-right: 1px solid #D4D4D4;
`

const ConditionBody = styled.div`
  display: flex;
  gap: 1.5rem;
`

const SecurityScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
`
const SecurityScore = styled.div`
  display: flex;
  justify-content: space-between;
`
const Scores = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 2rem;
`
const HistoryWrapper = styled.div`
`



const Status = () => {
  const ProjectTitle = useParams().projectTitle;  
  // Get Project Detail from server
  const [branch, setBranch] = useState("main");
  const [owner, setOwner] = useState("nebulayoon");
  const [repoUrl, setRepoUrl] = useState("github.com/nebulayoon/python/tree/main/check2");
  const [jenkinsfile, setJenkinsfile] = useState("deploy_jenkins_1.0.2");
  const [tools, setTools] = useState(['GitLeaks', 'Code-QL', 'Zap', 'Dependabot']);
  const [desc, setDesc] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ...");
  const [lastScan, setLastScan] = useState("24 hours ago");
  const [vul, setVul] = useState({critical: 10, major: 16, minor: 8, info: 7});
  const [condition, setCondition] = useState("Passed");
  const [score, setScore] = useState({score:'A', reliability: 'A', Vulnerability: 'B'});
  // hisotry
  const onHandleScan = () =>{
    // need to connect server
    console.log("scan clicked");
  }
  return (
    <BodyWrapper>
      <DetatilWrapper>
        <HeaderWrapper>
          <TitleWrapper>
            <Title>{ProjectTitle}</Title>
            <Branch name={branch} />
          </TitleWrapper>
          <Button onClick={onHandleScan}>Scan</Button>
        </HeaderWrapper>
        <DetailInfoWrapper>
          <OwnerRepoWrapper>
            <OwnerRepo>
              <div>Owner: {owner}</div>
              <div>Repository URL: {repoUrl}</div>
            </OwnerRepo>
            <div>
              <div>Last analysis: {lastScan}</div>
            </div>
          </OwnerRepoWrapper>
          <JenkinsWrapper>
            <div>Jenkins File: {jenkinsfile}</div>
            <Tools>
              {tools.map((item) => {
                return <span>#{item}</span>
              })}
            </Tools>
          </JenkinsWrapper>
          <DescWrapper>
            Description: {desc}
          </DescWrapper>
        </DetailInfoWrapper>
      </DetatilWrapper>
      <HorizonLine />
      <VulWrapper>
        <SubTitle>VULNERABILITIES {vul.critical + vul.major + vul.minor + vul.info}</SubTitle>
        <Vul>
          {Object.entries(vul).map(([key, value]) => {
            return <VulComponent name={key} val={value} />
          })}
        </Vul>
      </VulWrapper>
      <HorizonLine />
      <ConditionWrapper>
        <div>
          <SubTitle><div>RECENT CONDITION</div><Tooltip/></SubTitle>
        </div>
        <ConditionBody>
          <Condition result={condition} />
          <VerticalLine />
          <SecurityScoreWrapper>
            <SecurityScore>
              <div style={{display: 'flex', gap:'1rem'}}>
                <div style={{fontWeight: 600}}>Security Score</div>
                <Tooltip />
              </div>
              <Score rank={score.score} />
            </SecurityScore>
            <Scores>
              <div>Reliability</div>
              <Score rank={score.reliability} />
            </Scores>
            <Scores>
              <div>Vulnerability</div>
              <Score rank={score.Vulnerability} />
            </Scores>
          </SecurityScoreWrapper>
        </ConditionBody>
      </ConditionWrapper>
      <HorizonLine />
      <HistoryWrapper>
        <SubTitle>HISTORY SUMMARY</SubTitle>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <Graph/>
          <Graph/>
        </div>
      </HistoryWrapper>
    </BodyWrapper>
  )
}

export default Status