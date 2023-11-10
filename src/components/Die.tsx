// 3. faire 3 dés différents, 3 états différents, 3 handlers différents.


// Composant enfant.

import { useCallback, useEffect, useState } from "react";

export default function Die(props: { onRoll: (newValue: number) => void }) {
    
    const [value, setValue] = useState(Math.floor(Math.random()*6))

    // Permet de communiquer l'info au parent à la création du composant (voir le "cycle de vie d'un composant")
    useEffect(() => {
        props.onRoll(value)
    }, [])

    const roll = useCallback(() => {
        const rand = Math.ceil(Math.random()*6)
        props.onRoll(rand); // Pour faire remonter la nouvelle valeur au parent "App".
        setValue(rand) // Toujours modifier la valeur en dernier dans la fonction !
    }, [props.onRoll])

    return (
        <div className="die" onClick={roll}>
            <p>
                {value}
            </p>
        </div>
    )
}