import React, { useState, useEffect, useRef } from "react";
import ProjectDetailIssue from "../../components/detail-issue/ProjectDetailIssue";

const ProjectDetailIssueContainer = () => {
  const [issueData, setIssueData] = useState(
    { "message": { "text": "testmessage"}, "description": { "security-severity": 10 } }
  );
  
  return (
    <ProjectDetailIssue 
      data={issueData}
    />
  );
};

export default ProjectDetailIssueContainer;