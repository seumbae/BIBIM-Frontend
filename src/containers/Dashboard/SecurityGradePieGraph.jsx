import {
	Cell,
	Label,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
} from "recharts";

const SecurityGradePieGraph = () => {
	const data = [
		{
			name: "A",
			value: 2,
		},
		{
			name: "B",
			value: 5,
		},
		{
			name: "C",
			value: 3,
		},
		{
			name: "D",
			value: 2,
		},
	];

	let totalValue = 0;
	data.forEach((item) => {
		totalValue += item.value;
	});

	const COLORS = ["#00AA00", "#F5C037", "#F58737", "#FF0000"];
	return (
		<ResponsiveContainer >
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
						value={totalValue}
						position="centerBottom"
						fontSize="2rem"
						style={{ fontSize: "3rem", fontWeight: "600", color: "#263690" }}
					/>
					<Label
						value="Total Seucurity Score"
						position="centerTop"
						style={{
							fontSize: "0.9rem",
							fontWeight: "600",
							transform: `translateY(3%)`,
						}}
					/>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index]} />
					))}
				</Pie>
				<Tooltip />
			</PieChart>
		</ResponsiveContainer>
	);
};

export default SecurityGradePieGraph;
