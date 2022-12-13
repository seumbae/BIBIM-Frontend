import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import { useEffect } from "react";

const CategoryWrapper = styled.div`
	margin-top: 1rem;
`;
const CategoryTitleWrapper = styled.div`
	display: flex;
`;
const CategoryTitle = styled.div`
	font-size: 1.2rem;
	font-weight: 500;
	margin-bottom: 0.5rem;
`;
const SubCategoryWrapper = styled.div`
	gap: 0.5rem;
`;

const SubCategoryTitleWrapper = styled.div`
	display: flex;
	margin-bottom: 0.5rem;
`;

const SubTitle = styled.div`
	font-size: 1.1rem;
`;
const Items = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-left: 1.5rem;
`;
const ItemWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Item = styled.div`
	white-space: nowrap;
	font-size: 0.9rem;
	text-overflow: ellipsis;
	overflow: hidden;
`;

const MoreIcon = styled(ExpandMoreIcon)`
	&:hover {
		cursor: pointer;
	}
`;

const LessIcon = styled(ExpandLessIcon)`
	&:hover {
		cursor: pointer;
	}
`;

const CheckBox = styled.input`
	margin: 0;
	appearance: none;
	width: 13px;
	height: 13px;
	border: 1.5px solid #000000;
	border-radius: 3px;
	margin-right: 1rem;
	cursor: pointer;
	&:checked {
		background-color: #000000;
		border: 1.5px solid #000000;
	}
`;

const Category = ({ item, index, setChecked, checkList }) => {
	const [open, setOpen] = useState(true);
	const [subOpen, setSubOpen] = useState({});
	useEffect(() => {
		if (item[1] instanceof Object) {
			const tmp = {};
			Object.keys(item[1]).forEach((key) => {
				tmp[key] = true;
			});
			setSubOpen(tmp);
		}
	}, []);

	const onHandleIconClick = () => {
		setOpen(!open);
	};

	const onHandleSubIconClick = (e, params) => {
		e.preventDefault();
		setSubOpen({ ...subOpen, [params]: !subOpen[params] });
	};

	const onHandleCheckBoxClick = (e, params) => {
		if (e.target.checked) {
			setChecked({
				...checkList,
				[params]: [...checkList[params], e.target.name],
			});
		} else {
			setChecked({
				...checkList,
				[params]: checkList[params].filter((item) => item !== e.target.name),
			});
		}
	};

	return (
		<CategoryWrapper key={index}>
			<CategoryTitleWrapper>
				{open ? (
					<MoreIcon onClick={onHandleIconClick} />
				) : (
					<LessIcon onClick={onHandleIconClick} />
				)}
				<CategoryTitle>{item[0]}</CategoryTitle>
			</CategoryTitleWrapper>
			<Collapse in={open}>
				<Items>
					{item[1] instanceof Array
						? item[1].map((data) => {
								return (
									<ItemWrapper key={data}>
										<Item>{data}</Item>
										<CheckBox
											checked={
												checkList.Languages.includes(data) ||
												checkList.Tag.includes(data)
											}
											name={data}
											type="checkbox"
											onClick={(e) => onHandleCheckBoxClick(e, item[0])}
										/>
									</ItemWrapper>
								);
						  })
						: Object.entries(item[1]).map((item) => {
								return (
									<SubCategoryWrapper key={item[0]}>
										<SubCategoryTitleWrapper>
											{subOpen[item[0]] ? (
												<MoreIcon
													name={item[0]}
													onClick={(e) => onHandleSubIconClick(e, item[0])}
												/>
											) : (
												<LessIcon
													name={item[0]}
													onClick={(e) => onHandleSubIconClick(e, item[0])}
												/>
											)}
											<SubTitle>{item[0]}</SubTitle>
										</SubCategoryTitleWrapper>
										<Collapse in={subOpen[item[0]]}>
											<Items>
												{item[1].map((data) => {
													return (
														<ItemWrapper key={data}>
															<Item>{data}</Item>
															<CheckBox
																checked={
																	checkList.SIS.includes(data) ||
																	checkList.SAST.includes(data) ||
																	checkList.DAST.includes(data) ||
																	checkList.SCA.includes(data)
																}
																name={data}
																type="checkbox"
																onClick={(e) =>
																	onHandleCheckBoxClick(e, item[0])
																}
															/>
														</ItemWrapper>
													);
												})}
											</Items>
										</Collapse>
									</SubCategoryWrapper>
								);
						  })}
				</Items>
			</Collapse>
		</CategoryWrapper>
	);
};

const Categories = ({ data, setChecked, checkList }) => {
	return (
		<>
			{Object.entries(data).map((item, index) => {
				return (
					<Category
						item={item}
						key={index}
						index={index}
						checkList={checkList}
						setChecked={setChecked}
					/>
				);
			})}
		</>
	);
};

export default Categories;
