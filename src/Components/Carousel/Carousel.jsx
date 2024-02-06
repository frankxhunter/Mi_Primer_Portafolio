import { useState } from "react"
import { CarouselCard } from "./CarouselCard"
import "./Carousel.css"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export function Carousel() {
    const cards = [{
        link: "https://movielec-users.vercel.app/", name: "Orden 0", description: "Esta pagina es un proyecto desarrollado para un taller de repaciones que permite a sus clientes saber en que momento estara listo su producto", image: "example_1.png",
    }, {
        link: "https://movielec-users.vercel.app/", name: "Orden 1", description: "Esta pagina es un proyecto desarrollado para un taller de repaciones que permite a sus clientes saber en que momento estara listo su producto", image: "example_2.png",
    }, {
        link: "https://movielec-users.vercel.app/", name: "Orden 2", description: "Esta pagina es un proyecto desarrollado para un taller de repaciones que permite a sus clientes saber en que momento estara listo su producto", image: "proyectoMovielec.png",
    }, {
        link: "https://movielec-users.vercel.app/", name: "Orden 3", description: "Esta pagina es un proyecto desarrollado para un taller de repaciones que permite a sus clientes saber en que momento estara listo su producto", image: "proyectoMovielec.png",
    }, {
        link: "https://movielec-users.vercel.app/", name: "Orden 4", description: "Esta pagina es un proyecto desarrollado para un taller de repaciones que permite a sus clientes saber en que momento estara listo su producto", image: "proyectoMovielec.png",
    },

    ]
    const [direction, setDirection] = useState(null)
    const [iterator, setIterator] = useState(parseInt(cards.length / 2))
    const preIterator = iterator - 1 < 0 ? cards.length - 1 : iterator - 1;
    const posIterator = iterator + 1 > cards.length - 1 ? 0 : iterator + 1

    function increaseIterator() {

        setTimeout(() => { setDirection("left") }, 50)
        setDirection(null)
        if (iterator == cards.length - 1) {
            setIterator(0)
        }
        else {
            setIterator(iterator + 1)
        }
    }
    function decreaseIterator() {

        setDirection("right")
        if (iterator == 0) {
            setIterator(cards.length - 1)
        }
        else {
            setIterator(iterator - 1)
        }

    }
   

    return <div className="container_carousel">
        <div className="second_layer">
            <div className={"background_card container_card left_card" + " move_left_" + direction}>
                <CarouselCard {...cards[preIterator]} ></CarouselCard>
            </div>
            <div className="background_card container_card rigth_card">
                <CarouselCard {...cards[posIterator]} ></CarouselCard>
            </div>
        </div>
        <div className="first_layer">
            <button onClick={decreaseIterator} className="move_btn left_btn">
                <FaArrowLeft></FaArrowLeft>
            </button>
            <div className={"center_card container_card" + " move_center_" + direction}>
                <CarouselCard {...cards[iterator]} ></CarouselCard>
            </div>
            <button onClick={increaseIterator} className="move_btn rigth_btn" >
                <FaArrowRight></FaArrowRight>
            </button>
        </div>
    </div>
}