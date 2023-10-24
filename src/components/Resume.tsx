import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    List,
    ListItem,
    ListItemText,
    Paper,
    IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ResumeProps {
    fullName: string;
    email: string;
    phoneNumber: string;
    address: string;
    languages: string;
    technologies: string;
    employmentHistory: {
        role: string;
        company: string;
        date: string;
        accomplishments: string[];
    }[];
    projects: {
        title: string;
        description: string;
        link: string;
    }[];
    university: string;
    degree: string;
    certifications: string[];
}

const Resume: React.FC<ResumeProps> = (props) => {
    const [showContent, setShowContent] = useState({
        "Languages & Technologies": true,
        "Employment History": true,
        "Projects": true,
        "Education": true,
        "Certifications": true,
    });

    const toggleSection = (sectionName: keyof typeof showContent) => {
        setShowContent((prevState) => ({
            ...prevState,
            [sectionName]: !prevState[sectionName],
        }));
    };

    const renderSection = (sectionName: keyof typeof showContent, content: React.ReactNode) => (
        <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography onClick={() => toggleSection(sectionName)} variant="h5" style={{ cursor: 'pointer' }}>
                    {sectionName}
                </Typography>
                <IconButton
                    onClick={() => toggleSection(sectionName)}
                    color={showContent[sectionName] ? 'primary' : 'default'}
                >
                    <ExpandMoreIcon />
                </IconButton>
            </div>
            {showContent[sectionName] && content}
        </Paper>
    );

    return (
        <Container maxWidth="sm">
            <Box padding="50px" textAlign="center">
                <Typography variant="h4">{props.fullName}</Typography>
                <Typography textAlign="center" variant="body2" align="right">{props.email}</Typography>
                <Typography textAlign="center" variant="body2" align="right">{props.phoneNumber}</Typography>
                <Typography textAlign="center" variant="body2" align="right">{props.address}</Typography>
            </Box>

            <List>
                <ListItem>
                    <ListItemText primary="Languages" secondary={props.languages} />
                    <ListItemText primary="Technologies" secondary={props.technologies} />
                </ListItem>
            </List>

            {renderSection('Employment History', (
                <List>
                    {props.employmentHistory.map((item, index) => (
                        <ListItem key={index}>
                            <List>
                                <ListItemText
                                    primary={`${item.role} at ${item.company}, ${item.date}`}
                                />
                                {item.accomplishments.map((accomplishment, i) => (
                                    <ListItem key={i}>
                                        <ListItemText secondary={" - " + accomplishment} />
                                    </ListItem>
                                ))}
                            </List>
                        </ListItem>
                    ))}
                </List>
            ))}

            {renderSection('Education', (
                <Typography variant="body1">
                    {props.university}, {props.degree}
                </Typography>
            ))}

            {renderSection('Certifications', (
                <List>
                    {props.certifications.map((certification, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={certification} />
                        </ListItem>
                    ))}
                </List>
            ))}
        </Container>
    );
};

export default Resume;