import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';
import { contactData } from '../data';
import { formatDate } from './Table';

// Transform contactData to match the required format for the chart
const data = contactData.map(item => ({
  date: formatDate(item.startDate),
  Assigned: item.Vechile.length,
  NotReachedOnLocation: item.Vechile.length - item.preference,
  Name: item.name
}));

// const data = [
//   { date: 1, a: 5, b: 1 },
//   { date: 2, a: 3, b: 6 },
//   { date: 3, a: 2, b: 7 },
//   { date: 4, a: 1, b: 3 },
//   { date: 5, a: 6, b: 4 },
//   { date: 6, a: 7, b: 5 },
//   { date: 7, a: 3, b: 3 },
//   { date: 8, a: 4, b: 6 },
// ];

const MyAreaChart = ({ width = "100%", height = 300 }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Contact Data Over Time
        </Typography>
        <ResponsiveContainer width={width} height={height}>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="red" stopOpacity={0.8} />
                <stop offset="95%" stopColor="red" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="blue" stopOpacity={0.8} />
                <stop offset="95%" stopColor="blue" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" label={{ value: 'Date', position: 'insideBottomRight', offset: 0 }} />
            <YAxis label={{ value: 'Value', angle: -90, position: 'insideLeft' }} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="Name" stroke="brown" fillOpacity={1} fill="url(#colorB)" />
            <Area type="monotone" dataKey="Assigned" stroke="blue" fillOpacity={1} fill="url(#colorA)" />
            <Area type="monotone" dataKey="NotReachedOnLocation" stroke="red" fillOpacity={1} fill="url(#colorB)" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default MyAreaChart;
