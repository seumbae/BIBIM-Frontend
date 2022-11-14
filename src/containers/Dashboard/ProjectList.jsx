import styled from "styled-components";
import ResultCount from "./ResultCount";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SettingsIcon from '@mui/icons-material/Settings';
import Collapse from '@mui/material/Collapse';
import Branch from '../../components/Branch';
import { useState } from "react";
import { Link } from "react-router-dom";

const ListWrapper = styled.div`
  max-width: 100%;
  background-color: #FFFFFF;
  border-radius: 6.4px;
  padding: 16px;
`

const MainContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProjectInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
`

const ProjectTitle = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
`

const Result = styled.div`
  background-color: ${({result}) => (result === 'Passed' ? '#00AA00' : '#FF0000')};
  padding: 4px 12px;
  font-size: 0.8rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
`

const CountWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`
const MoreIcon = styled(ExpandMoreIcon)`
  &:hover {
    cursor: pointer;
  }
`
const LessIcon = styled(ExpandLessIcon)`
  &:hover {
    cursor: pointer;
  }
`

const SubContentWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: center;
`
const Detail = styled.div`
  display: flex;
  gap: 2rem;
  
`
const Box = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

const AlpaScore = styled.div`
  background-color:${({score})=> (score === 'D' && '#FF1900') ||
  (score === 'C' && '#F58737') ||
  (score === 'B' && '#F5C037') ||
  (score === 'A' && '#00AA00')};
  color: #FFFFFF;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  text-align: center;
  line-height: 2.1rem;
`

const SettingIcon = styled(SettingsIcon)`
  &:hover {
    cursor: pointer;
  }
`
/**
 * projectTitle = Project Name
 * BranchName = Branch Name
 * result = Passed or Failed
 * resultSort = Critical, Major, Minor, Info Count
 * securityScore = A or B or C or D
 * vulnerabilities = How many vulnerabilities are detected
 * jenkinsfile = jenkinsFile Name
 * lastScan = Last Scan Date
 */
const ProjectScanResult = ({
  projectTitle, 
  branchName, 
  result, 
  resultSort, 
  securityScore, 
  vulnerabilities, 
  jenkinsfile, 
  lastScan, 
}) => {
  const Sort ={
    Critical: 0,
    Major: 1,
    Minor: 2,
    Info: 3,
  }
  const score = ['A', 'B', 'C', 'D']
  const [open, setOpen] = useState(false);
  const onHandleIconClick = () => {
    setOpen(!open);
  }

  return (
    <ListWrapper>
      <MainContentWrapper>
        <ProjectInfoWrapper>
          <ProjectTitle to={`/dev/${projectTitle}/status`}>{projectTitle}</ProjectTitle>
          <Branch name={branchName}/>
          <Result result={result}><div style={{color: '#FFFFFF'}}>{result}</div></Result>
        </ProjectInfoWrapper>
        <CountWrapper>
          {Object.entries(Sort).map((item) => {
            return (
              <ResultCount sort={item[0]} count={item[1]} />
            )
          })}
          {open ?<MoreIcon onClick={onHandleIconClick}/> : <LessIcon onClick={onHandleIconClick}/>}
        </CountWrapper>
      </MainContentWrapper>
        <Collapse in={open}>
        <SubContentWrapper>
            <Detail>
              <Box>
                <div>Security Score</div>
                <AlpaScore score={score[1]}>B</AlpaScore>
              </Box>
              <Box>
                <div>Vulnerabilities</div>
                <div>121</div>
              </Box>
              <Box>
                <div>deploy_jenkins_1.0.2</div>
              </Box>
              <Box>
                <div>12 hours ago</div>
              </Box>
            </Detail>
            <SettingIcon />    
        </SubContentWrapper>   
        </Collapse>
    </ListWrapper>
  );
}

export default ProjectScanResult;