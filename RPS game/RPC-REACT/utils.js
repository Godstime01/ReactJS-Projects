export const make_computer_move = () => {
    //  1 = paper, 2 = scissors, 3 = rock
    return Math.floor(Math.random() * 2) + 1;
}

export const check_winner = (player_choice, computer_choice) => {
    // Paper beats Rock 1, 3
    // Rock beats Scissors 3, 2
    // Scissors beats Paper 2, 1

    if (player_choice === computer_choice) {
        return 0;
    } else if (player_choice === 1 && computer_choice === 3) {
        return 1;
    } else if (player_choice === 2 && computer_choice === 1) {
        return 1;
    } else if (player_choice === 3 && computer_choice === 2) {
        return 1;
    } else {
        return 2;
    }
}