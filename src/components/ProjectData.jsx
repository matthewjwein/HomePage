import Game from './game/Game'
import Resume from './resume/Resume';

export const ProjectData = [
    {
        id: 1,
        dateText: 'Nov 1 - Nov 7',
        titleText: 'Resume',
        imagePath: '/resume.jpg',
        component: <Resume />
    },
    {
        id: 2,
        dateText: 'Nov 7 - Nov 14',
        titleText: 'Game',
        imagePath: "./game.jpg",
        component: <Game />
    },
];