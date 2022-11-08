import DetailIssueComponent from "./DetailIssue";
import Header from "../common/Header";

const ProjectDetailIssue = () => {
  return (
    <>
      <Header userName={"test user"} />
      <DetailIssueComponent data={{ "message": { "text": "testmessage"}, "description": { "security-severity": 10 } }}/>
    </>
  )
};

export default ProjectDetailIssue;