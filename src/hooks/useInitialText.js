import { useState, useEffect } from "react";

const INITIAL_TEXT = "                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n" +
    "                when an unknown printer took a galley of type and scrambled it to make a type\n" +
    "                specimen book. It has survived not only five centuries, but also the leap into\n" +
    "                electronic typesetting, remaining essentially unchanged."

export const useInitialText = (_initialText = INITIAL_TEXT) => {
    const [initialText, setInitialText] = useState("");

    useEffect(() => {
        setInitialText(_initialText)
    }, [])

    return initialText;
}