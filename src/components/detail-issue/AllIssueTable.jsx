import styled from "styled-components";
import DetailIssueComponent from "./DetailIssue";

const AllIssueTableList = ({ dataList }) => {
  return(
    <>
      {
        [dataList.data].map((row, idx) => (
          <DetailIssueComponent key={dataList["_id"]["$oid"] + "/" + idx.toString()} data={row} />
        ))
      }
    </>
  );
};

export default AllIssueTableList;