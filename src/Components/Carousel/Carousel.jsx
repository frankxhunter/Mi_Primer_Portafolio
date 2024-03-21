import { useState } from "react"
import { CarouselCard } from "./CarouselCard"
import "./Carousel.css"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export function Carousel() {
    const cards = [{
        link: "https://movielec-users.vercel.app/", name: "Proyect Movielec", description: "Este es un proyecto desarrollado para una taller, que le brinda a los clientes informacion de sus ordenes de reparacion", image: "proyectoMovielec.png",
    },
    {
        link: "https://onlycalculatorbyfrank.netlify.app/", name: "Solo es una calculadora", description: "Este proyecto es un un ejemplo basico de los que se puede hacer con javascript, html y css ", image: "onlycalculator.png",
    },
    {
        link: "https://pokedexbyfrank.netlify.app/", name: "Pokedex", description: "Pokedex en javascript vanilla, conectada a la pokeapi", image: "pokedex.png",
    },
    {
        link: "https://cheery-heliotrope-1d7e7d.netlify.app/", name: "Tetris en 45 minutos", description: "Este tetris en parte de un reto de desarrollar un juego tipo tetris totalmente funcional en el menor tiempo posible, su desarrollo tardo 70 minutos ", image: "proyectTetris.png",
    },
    {
        link: "https://github.com/frankxhunter/BuscaMInas", name: "Busca Minas", description: "Juego del Busca Minas desarrollado totalmente en Java, descargar el archivo jar para probarlo", image: "buscaMinas.png",
    },
    {
        link: "https://paintbyfrank.netlify.app/", name: "Paint", description: "Pequeña herramienta de dibujo tipo Paint hecha con Javascript Vanilla", image: "paint.png",
    },
    {
        link: "https://github.com/frankxhunter/Codman/releases/tag/v1.0.0", name: "Codeman", description: "Herramienta para compresion y descompresion de ficheros de texto que utiliza un algoritmo sin perdida basado en la inion de Huffman y LZ77", image: "codeman.png",
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