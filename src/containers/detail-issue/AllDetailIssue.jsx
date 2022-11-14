import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/common/Header";
import ProjectDetailIssue from "../../components/detail-issue/ProjectDetailIssue";
import { getSecurityList } from "../../services/axios";
import DetailIssueComponent from "../../components/detail-issue/DetailIssue";
import AllIssueTableList from "../../components/detail-issue/AllIssueTable";

const AllDetailIssueContainer = () => {
  const [issueData, setIssueData] = useState([]);

  useEffect(() => {
    getSecurityList().then((res) => {
      console.log(JSON.parse(res.data.result))
      setIssueData(JSON.parse(res.data.result))
    })
  }, []);
  
  return (
    <>
      {
        issueData.map((oneProjectItem) => (
          <AllIssueTableList key={oneProjectItem["_id"]["$oid"]} dataList={oneProjectItem} />
        ))
      }
    </>
  );
};

export default AllDetailIssueContainer;