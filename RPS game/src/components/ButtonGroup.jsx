import { useContext } from "react"
import { PlayerMoveContext } from "../App"
import Button from "./Button"
import SelectedOption from "./SelectedOption"
import { AnimatePresence } from 'framer-motion'

export const buttonData = [
    {
        'id': 1,
        "text": "Paper",
        "image_url": "/images/icon-paper.svg",
        "color": "linear-gradient(to right, hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
        "position": {
            "top": "0",
            "left": "0"
        }
    },
    {
        'id': 2,
        "text": "Scissors",
        "image_url": "/images/icon-scissors.svg",
        "color": "linear-gradient(to right, hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
        "position": {
            "top": "0",
            "left": "100%"
        }
    },
    {
        'id': 3,
        "text": "Rock",
        "image_url": "/images/icon-rock.svg",
        "color": "linear-gradient(to right, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
        "position": {
            "top": "100%",
            "left": "50%"
        }
    }
]

const ButtonGroup = () => {
    const { PlayerMove, _ } = useContext(PlayerMoveContext);

    return (
        <AnimatePresence mode="wait">
            {
                !PlayerMove && (<section className='button-group'>
                    {
                        buttonData.map((button) => (
                            <Button key={button.id} {...button} />
                        ))
                    }
                </section>)
            }

            {PlayerMove && <SelectedOption />}
        </AnimatePresence>
    )
}

export default ButtonGroup