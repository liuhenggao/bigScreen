import React from "react";
import './main.scss'
import Chart1 from "../Echarts/Chart1";
export default function Main(){
    return (
        <main className="main">
            <section className="section1">
                <div className="bordered count">
                    <h2 className="title">案发派出所管辖统计</h2>
                    <Chart1 className="chart"></Chart1>
                </div>
            </section>
            <section className="section2 bordered"></section>
            <section className="section3 bordered"></section>
            <section className="section4 bordered"></section>
            <section className="section5 bordered"></section>
        </main>
    )
}