import type { ReactElement } from 'react';
import { Pie, PieChart, Cell, Label, Tooltip, ResponsiveContainer } from 'recharts';
import { styled } from '@mui/system';

const data01 = [
  {
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 300
  },
  {
    "name": "Group C",
    "value": 300
  },
  {
    "name": "Group D",
    "value": 200
  },
  {
    "name": "Group E",
    "value": 278
  },
  {
    "name": "Group F",
    "value": 189
  }
];
const data02 = [
  {
    "name": "Group A",
    "value": 2400
  },
  {
    "name": "Group B",
    "value": 4567
  },
  {
    "name": "Group C",
    "value": 1398
  },
  {
    "name": "Group D",
    "value": 9800
  },
  {
    "name": "Group E",
    "value": 3908
  },
  {
    "name": "Group F",
    "value": 4800
  }
];

let sum = 0;
data01.forEach(thing => {
  if(thing.value > 200) sum += thing.value;
});

const PieThing = (): ReactElement => {
  const success = 'green';
  const error = 'red';
  return (

    <PieChart width={200} height={200}>
      <Pie dataKey="value" data={data01} innerRadius={60} outerRadius={80} fill="#82ca9d" >
        {
          data01.map((entry, index) => <Cell key={entry.name} fill={entry.value > 200 ? success : error}/>)
        }
        <Label value={sum} position="center" />
        {/*<Label value="more text" position="insideBottomRight" />*/}
      </Pie>
      <Tooltip />
    </PieChart>

    // <PieChart width={730} height={250}>
    //   <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
    //   <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
    // </PieChart>
  );
};

export default PieThing;