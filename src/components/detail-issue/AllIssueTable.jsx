import styled from "styled-components";
import DetailIssueComponent from "./DetailIssue";

const AllIssueTableList = ({ dataList }) => {
  let { data } = dataList;
  return(
    <>
      {
        Array.isArray(data) ?
          data.map((row, idx) => (
            <DetailIssueComponent key={dataList["_id"]["$oid"] + "/" + idx.toString()} data={row} />
          ))
        :
          null
      }
    </>
  );
};

export default AllIssueTableList;