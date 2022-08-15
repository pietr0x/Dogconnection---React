import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <Hero />
            <Splide options= {{
perPage: 3,
arrows: false,
pagination: false,
drag: "free",
            }}>
            <SplideSlide>
            <section className="cards-list">
                {cards}
            </section>
            <SplideSlide />
            <Splide />

        </div>
    )
}