import React from "react";
import './Header.scss'
import headerBg from '../../assets/header.png'

export default function Header(){
    return (
        <header className="header" style={{backgroundImage: `url(${headerBg})`}}></header>
    )
}