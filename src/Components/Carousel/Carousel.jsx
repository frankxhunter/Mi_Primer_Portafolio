import { useState } from "react"
import "./Carousel.css"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import data from "./DataProyects.json"
import CardCarrousel from "./CardCarrousel";


export function Carousel() {
    const cards = data;
    const [direction, setDirection] = useState(null)
    const [iterator, setIterator] = useState(parseInt(cards.length / 2))
    const preIterator = iterator - 1 < 0 ? cards.length - 1 : iterator - 1;
    const posIterator = iterator + 1 > cards.length - 1 ? 0 : iterator + 1

    function increaseIterator() {

        if (iterator == cards.length - 1) {
            setIterator(0)
        }
        else {
            setIterator(iterator + 1)
        }
        setDirection("right")
    }
    function decreaseIterator() {

        if (iterator == 0) {
            setIterator(cards.length - 1)
        }
        else {
            setIterator(iterator - 1)
        }
        setDirection("left")

    }

    return <div className="container_carousel">
        <div className="first_layer center_layer_layout">
            <button onClick={decreaseIterator} className="move_btn left_btn">
                <FaArrowLeft></FaArrowLeft>
            </button>
            <div className={"center_card container_card" + " move_to_center_from_" + direction}  key={cards[iterator].key}>
                <CardCarrousel {...cards[iterator]}></CardCarrousel>
            </div>

            <button onClick={increaseIterator} className="move_btn right_btn" >
                <FaArrowRight></FaArrowRight>
            </button>
        </div>
        <div className="second_layer center_layer_layout">
            <div className={"background_card container_card left_card" + " move_left_card_from_" + direction}  key={cards[iterator].key}>
                <CardCarrousel {...cards[preIterator]}  ></CardCarrousel>
            </div>
        </div>
        <div className="third_layer center_layer_layout">
            <div className={"background_card container_card right_card move_rigth_card_from_" + direction} key={cards[iterator].key} >
                <CardCarrousel {...cards[posIterator]} ></CardCarrousel>
            </div>
        </div>

    </div>
}