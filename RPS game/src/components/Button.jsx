import { useContext } from "react"
import { PlayerMoveContext } from "../App"


const Button = (props) => {

    const { PlayerMove, setPlayerMove } = useContext(PlayerMoveContext);

    const handleClick = () => {
        setPlayerMove(props.text)
    }


    return (
        <button onClick={handleClick} className="btn" style={{
            backgroundImage: props.color,
            top: props?.position.top,
            left: props?.position.left,
            display: "block",
            padding: '1em'
        }}>
            <div style={{
                borderRadius: "inherit",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <img src={props.image_url} alt="" />
            </div>
        </button>
    )
}

export default Button