import styled from "styled-components";
import DetailIssueComponent from "./DetailIssue";


const AllIssueTableList = ({ dataList }) => {

  // console.log("AllIssueTableList=====")
  // console.log(typeof(dataList.data));
  // console.log(dataList._id)
  // console.log(Object.keys(dataList))

  return(
    <>
      {
        [dataList.data].map((row, idx) => (
          <DetailIssueComponent key={dataList["_id"]["$oid"] + idx.toString()} data={row} />
        ))
      }
    </>
  );
};

export default AllIssueTableList;