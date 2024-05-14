import { useContext } from "react"
import { PlayerScoreContext } from "../App"

const Header = () => {

    const { playerScore, _ } = useContext(PlayerScoreContext);

    return (
        <div className="header">
            <h1 className="header-title">
                <img src="/images/logo.svg" alt="" />
            </h1>
            <div className="header-score">
                <span>Score</span>
                <div className="">{playerScore}</div>
            </div>

        </div>
    )
}

export default Header