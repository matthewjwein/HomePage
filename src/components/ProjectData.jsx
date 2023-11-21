import Game from './game/Game'
import GameMobile from './game_mobile/GameMobile';

export const ProjectData = {
    1: {
        dateText: 'Nov 7 - Nov 14',
        titleText: 'Game (Desktop)',
        imagePath: "./game.jpg",
        component: <Game />
    },
    2: {
        dateText: 'Nov 21 - Nov 28',
        titleText: 'Game (Mobile)',
        imagePath: "./game.jpg",
        component: <GameMobile />
    },
};