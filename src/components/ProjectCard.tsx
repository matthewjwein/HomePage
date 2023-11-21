import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'

interface ProjectProps {
    id: number;
    imagePath: string;
    titleText: string;
    dateText: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ id, imagePath, titleText, dateText }) => {
    return (
        <Card sx={{ maxWidth: 345 }} className="project-card">
            <CardActionArea component={RouterLink} to={`/project/${id}`}>
                <CardMedia
                    component="img"
                    image={`./${imagePath}`}
                    alt="game screenshot"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {titleText}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {dateText}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ProjectCard;