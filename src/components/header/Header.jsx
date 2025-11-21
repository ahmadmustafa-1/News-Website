import { useState } from "react";
import Nav from "./Nav";
export default function Header({getKeywords}){
// const onChangeHandler = (event) => {
//     const value = event.target.value === '' ? false:true;
//     setKeywords(event.target.value);
//     setActive(value)
// }
    const [active, setActive] = useState(true);
    const [keywords, setKeywords] = useState('')
    return(<>
    <header style={{background: `${active ? "#FFD5D5":"#FDAAAA"}`}}>
        <div className="logo">Awesome News</div>
        <input onChange={getKeywords}/>
        <Nav/>
    </header>
    </>)
}