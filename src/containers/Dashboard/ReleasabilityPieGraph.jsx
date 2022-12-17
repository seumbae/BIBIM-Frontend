import {
	Cell,
	Label,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
} from "recharts";

const ReleasabilityPieGraph = ({ passed, failed }) => {
	const data = [
		{
			name: "Passed",
			value: passed,
		},
		{
			name: "Failed",
			value: failed,
		},
	];
	const COLORS = ["#00AA00", "#FF0000"];
	return (
		<ResponsiveContainer>
			<PieChart>
				<Legend layout="vertical" verticalAlign="bottom" align="right" />
				<Pie
					data={data}
					dataKey="value"
					nameKey="name"
					cx="50%"
					cy="50%"
					outerRadius={120}
					innerRadius={80}
					fill="#8884d8"
				>
					<Label
						value={passed + failed}
						position="centerBottom"
						fontSize="2rem"
						style={{ fontSize: "3rem", fontWeight: "600", color: "#263690" }}
					/>
					<Label
						value="Total Releasability"
						position="centerTop"
						style={{
							fontSize: "0.9rem",
							fontWeight: "600",
							transform: `translateY(3%)`,
						}}
					/>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
				<Tooltip />
			</PieChart>
		</ResponsiveContainer>
	);
};

export default ReleasabilityPieGraph;
