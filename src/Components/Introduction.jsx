import { useEffect } from "react";
import "./Introduction.css"
import Typed from "typed.js"
import { useRef, useState } from "react";
import i18n from "../i18n";
export function Introduction() {

    const el = useRef(null);

    const [messages, setMessages] = useState(null);

    useEffect(() => {
        let typed;
        i18n.getMessages().then((m) => {
            setMessages(m);
            typed = new Typed(el.current, {
                strings: m.intro.typed,
                typeSpeed: 50,
                loop: true,
                loopCount: 2,
            })
        });

        return ()=>{
            if (typed) typed.destroy();
        }
    },[])

    return <div className="container_introduction">
        <div>
            <h1 >Frank Mesa D.</h1>
            <h2><span ref={el} className="typedText" /></h2>
        </div>
        <hr />
        <p className="description_introdution">
            {messages ? (
                <>
                    {messages.intro.description_p1}
                    <br />
                    {messages.intro.description_p2}
                </>
            ) : (
                ""
            )}
        </p>
        <img className="img_introduction" src="/personal_photos/1.jpg" alt="Frank Mesa" />

    </div>
}