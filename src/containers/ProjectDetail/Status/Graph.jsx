import styled from "styled-components";
import { useEffect, useState } from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
const GraphTitle = styled.div`
  font-size: 1rem;
  margin-left: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 400;
`

const Graph = ({Data}) => {
  const data = [
    {
      "name": "0",
      "rank" : "C",
    },
    {
      "name": "1",
      "rank" : "A",
    },
    {
      "name": "2",
      "rank" : "B",
    },
    {
      "name": "3",
      "rank" : "A",
    },
    {
      "name": "4",
      "rank" : "D",
    },
    {
      "name": "5",
      "rank" : "C",
    },
    {
      "name": "6",
      "rank" : "A",
    },
    {
      "name": "7",
      "rank" : "A",
    }, 
    {
      "name": "8",
      "rank" : "A",
    },
    {
      "name": "9",
      "rank" : "B",
    },
  ];
    // const [data, setData] = useState(Data);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // setData(Data);
      setLoading(false);
    }, [Data]);
  
    return (
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <GraphTitle>Security score</GraphTitle>
            <LineChart width={600} height={250} data={data}
              margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
              >
              <XAxis dataKey="name" />
              <YAxis type="category" domain={['D','C','B','A']}/>
              <Tooltip />
              <Line type="monotone" dataKey="rank" stroke="#293EFD" />
            </LineChart>
          </>
        )}
      </div>
    );
}

export default Graph;