import React from 'react'
import { XYPlot,XAxis, YAxis,LineSeries, VerticalGridLines,HorizontalGridLines } from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';

export default function Graph() {

    const data = [
        {x: 0, y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9},
        {x: 4, y: 1},
       ];


  return (
    <XYPlot height={400} width={400}>
 <LineSeries data={data} />
 <VerticalGridLines />
 <HorizontalGridLines />
 <XAxis title='time ' />
 <YAxis title='stock price'/>
</XYPlot>
  )
}
