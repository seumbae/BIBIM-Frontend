import { useState, useEffect } from "react";
import { getSecurityCheckList } from "../services/axios";
import styled from "styled-components";

const SecurityCheckArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  line-height: 1rem;
  margin-left:1.35rem;
  margin-bottom: 0.8rem;
`
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.4rem
`

const Subtitle = styled.div`
  font-size: 0.9em;
  font-weight: 600;
`

const Lists = styled.div`
  display: flex;
  gap: 8px;
`

const List = styled.div`
  display: flex;
  // align-items: flex-start;
  gap: 8px;
`

const CheckBox = styled.input`
  margin: 0;
  appearance: none;
  width: 15px;
  height: 15px;
  border: 1.5px solid #D4D4D4;
  border-radius: 0.3rem;
  cursor: pointer;
  &:checked{
    background-color: #000000;
    border: 2px solid #000000;
  }
`

const Tool = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
`

const SecurityCheck = () => {
  const [step, setStep] = useState({});

  const onHandleItemClick = (event) => {
    const {name, value, checked} = event.target;
    setStep((prev) => {
      return {...prev, [name]: {...prev[name], [value]: checked}}
    });
  }

  const loadToolList = async () => {
    const response = getSecurityCheckList().then((res) => {
    });
    let result = response.data.result;
    let stepDict = {};

    for(let i = 0; i < result.length; i++){
      if(Object.keys(stepDict).includes(result[i].stage)){ // stage가 있는 경우
        stepDict[result[i].stage][result[i].name] = false;
      }else{ // 새롭게 추가된 stage인 경우
        let row = {};
        row[result[i].name] = false;
        stepDict[result[i].stage] = row;
      }
    }
    setStep(stepDict);
    console.log(step);
  };

  useEffect(() => {
    loadToolList();
  },[]);

  return(
    <SecurityCheckArea>
      <ListWrapper>
        <Subtitle>Check Sensitive Information Scan (SIS)</Subtitle>
        <Lists>
          <List>
            <CheckBox type="checkbox" name="sis" value="gitleaks" onClick={onHandleItemClick}/>
            <Tool>Gitleaks</Tool>
          </List>
          <List>
            <CheckBox type="checkbox" name="sis" value="ggshield" onClick={onHandleItemClick}/>
            <Tool>GitGuardian Shield</Tool>
          </List>
        </Lists>
      </ListWrapper>
      <ListWrapper>
        <Subtitle>Check Static Application Security Testing (SAST)</Subtitle>
        <List>
          <CheckBox type="checkbox" name="sast" value="code-ql" onClick={onHandleItemClick}/>
          <Tool>Code-QL</Tool>
        </List>
      </ListWrapper>
      <ListWrapper>
        <Subtitle>Check Dynamic Application Security Testing (DAST)</Subtitle>
        <Lists>
          <List>
            <CheckBox type="checkbox" name="dast" value="zap" onClick={onHandleItemClick}/>
            <Tool>ZAP</Tool>
          </List>
          <List>
            <CheckBox type="checkbox" name="dast" value="arachni" onClick={onHandleItemClick}/>
            <Tool>Arachni</Tool>
          </List>
          <List>
            <CheckBox type="checkbox" name="dast" value="nikto" onClick={onHandleItemClick}/>
            <Tool>Nikto</Tool>
          </List>
        </Lists>
      </ListWrapper>
      <ListWrapper>
        <Subtitle>Check Software Composition Analysis (SCA)</Subtitle>
        <Lists>
          <List>
            <CheckBox type="checkbox" name="sca" value="owasp-dependencycheck" onClick={onHandleItemClick}/>
            <Tool>OWASP-dependencycheck</Tool>
          </List>
          <List>
            <CheckBox type="checkbox" name="sca" value="dependabot" onClick={onHandleItemClick}/>
            <Tool>Dependabot</Tool>
          </List>
        </Lists>
      </ListWrapper>
    </SecurityCheckArea>
  );
}

export default SecurityCheck;