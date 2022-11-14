import DetailIssueComponent from "./DetailIssue";
import Header from "../common/Header";
import { TableView } from "@mui/icons-material";

const ProjectDetailIssue = ( {data} ) => {
  return (
    <>
      <Header userName={"test user"} />
      { data.map( (rowData) => (
        <DetailIssueComponent data={rowData}/>
      ))}
    </>
  )
};

export default ProjectDetailIssue;