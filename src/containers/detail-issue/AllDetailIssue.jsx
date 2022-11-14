import React, { useState, useEffect, useRef } from "react";
import { getSecurityList } from "../../services/axios";
import AllIssueTableList from "../../components/detail-issue/AllIssueTable";
import styled from "styled-components";

const ResultArea = styled.div`
  display: block;
  flex: 1;
`;

const AllDetailIssueContainer = () => {
  const [issueData, setIssueData] = useState([]);

  useEffect(() => {
    getSecurityList().then((res) => {
      setIssueData(JSON.parse(res.data.result))
    })
  }, []);
  
  return (
    <ResultArea>
      {
        issueData.map((oneProjectItem) => (
          <AllIssueTableList key={oneProjectItem["_id"]["$oid"]} dataList={oneProjectItem} />
        ))
      }
    </ResultArea>
  );
};

export default AllDetailIssueContainer;