import { useRef } from "react";

export default function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus();
    };
    return (
        <>
        <input ref={inputEl} type="text"    />
        <button onClick={onButtonClick} >focus</button>
        </>
    )
}