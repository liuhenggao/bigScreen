import React, { useEffect, useRef } from "react";
import * as echarts from 'echarts'

const px = (n)=>{
  return n / 2420 * window.pageWidth
}
const option = {
    grid: {
      x: px(40),
      x2: px(40),
      y: px(40),
      y2: px(40)
    },
    textStyle:{
      fontSize:px(12),
      color: "#79839E"
    },
    title:{show: false},
    legend:{show: false},
    xAxis: {
      type: 'category',
      data: ['松江区', '徐汇区', '闵行区', '宝山区', '嘉定区', '浦东区', '青浦区','黄浦区', '静安区'],
      axisTick: {show: false},
      axisLabel:{
        interval:0,
        fontSize: px(12),
        formatter(val){
          if(val.length > 2){
            const array = val.split('')
            array.splice(2, 0, '\n')
            return array.join('')
          }else{
            return val
          }
        }
      }
    },
    yAxis: {
      splitLine: {show: false},
      axisLine:{
        lineStyle: {
          color: "#083b70"
        }
      },
      axisLabel:{
        fontSize: px(12)
      }
    },
    series: [
      {
        data: [121, 223, 155, 81, 70, 117, 133,100,209],
        type: 'bar'
      }
    ]
  };

export default function Chart1(){
    const divRef = useRef(null)
    useEffect(()=>{
      var myChart = echarts.init(divRef.current);
      myChart.setOption(option);
    },[])
    return (
        <div ref={divRef} style={{flex: 1,width: "100%"}}>
        </div>
    )
}