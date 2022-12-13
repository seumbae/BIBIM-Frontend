import { useState, useEffect } from "react";
import styled from "styled-components";
import { getToolList } from "../services/axios";

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
  padding: 0.4rem;
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

const SecurityCheck = ({ setStep }) => {
  const [tools, setTools] = useState([]);

  const onHandleItemClick = (event) => {
    const {name, value, checked} = event.target;
    setStep((prev) => {
      return {...prev, [name]: {...prev[name], [value]: checked}}
    });
  }

  useEffect( () => {
    getToolList().then((res) =>{
      setTools(res.data.result);
    })
  }, []);

  return(
    <SecurityCheckArea>
      <ListWrapper>
        <Subtitle>Check Sensitive Information Scan (SIS)</Subtitle>
        <Lists>
          {
            tools.map((item, idx) => {
              if(item.stage == "SIS"){
                return (
                  <List key={idx}>
                    <CheckBox type="checkbox" name={item.stage} value={item.name} onClick={onHandleItemClick}/>
                    <Tool>{item.name}</Tool>
                  </List>
                )
              }
            })
          }
        </Lists>
      </ListWrapper>
      <ListWrapper>
        <Subtitle>Check Static Application Security Testing (SAST)</Subtitle>
        <Lists>
          {
            tools.map((item, idx) => {
              if(item.stage == "SAST"){
                return (
                  <List key={idx}>
                    <CheckBox type="checkbox" name={item.stage} value={item.name} onClick={onHandleItemClick}/>
                    <Tool>{item.name}</Tool>
                  </List>
                )
              }
            })
          }
        </Lists>
      </ListWrapper>
      <ListWrapper>
        <Subtitle>Check Dynamic Application Security Testing (DAST)</Subtitle>
        <Lists>
          {
            tools.map((item, idx) => {
              if(item.stage == "DAST"){
                return (
                  <List key={idx}>
                    <CheckBox type="checkbox" name={item.stage} value={item.name} onClick={onHandleItemClick}/>
                    <Tool>{item.name}</Tool>
                  </List>
                )
              }
            })
          }
        </Lists>
      </ListWrapper>
      <ListWrapper>
        <Subtitle>Check Software Composition Analysis (SCA)</Subtitle>
        <Lists>
          {
            tools.map((item, idx) => {
              if(item.stage == "SCA"){
                return (
                  <List key={idx}>
                    <CheckBox type="checkbox" name={item.stage} value={item.name} onClick={onHandleItemClick}/>
                    <Tool>{item.name}</Tool>
                  </List>
                )
              }
            })
          }
        </Lists>
      </ListWrapper>
    </SecurityCheckArea>
  );
}

export default SecurityCheck;