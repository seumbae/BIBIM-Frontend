import DetailIssueComponent from "./DetailIssue";

const AllIssueTableList = ({ dataList }) => {
	const { data } = dataList;
	return (
		<>
			{data.length > 0
				? data.map((item, index) => (
						<DetailIssueComponent
							key={dataList._id.$oid+index}
							data={item}
							pipelineName={dataList.pipelineName}
							stage={dataList.stage}
							tool={dataList.tool}
						/>
				  ))
				: null}
		</>
	);
};

export default AllIssueTableList;
