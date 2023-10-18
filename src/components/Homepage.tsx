import React from 'react';
import Card from 'react-bootstrap/Card';
import Resume from './Resume';

const resumeData = {
    fullName: "Matthew Wein",
    email: "matthewjwein@gmail.com",
    phoneNumber: "(919) 903-3620",
    address: "Durham, NC 27713",
    languages: "Go, JavaScript/TypeScript, Java, C#, C++, HTML, CSS",
    technologies: "Docker, React, Node.js, Git/Github/Gitlab, Microservices, gRPC, AWS",
    employmentHistory: [
        {
            role: "Senior Software Engineer",
            company: "Karakuri",
            date: "Feb 2020 - July 2022",
            accomplishments: [
                "Developed the frontend interface for Karakuri's meal assembly robot (Node.js, React, Typescript)",
                "Designed and developed the cloud-native microservices for Karakuri's food ordering and machine management platform (Docker, Golang, Microservices, gRPC, Websockets, protobufs)",
                "Mentored, coached, and onboarded new team members; interviewed candidates and helped make hiring decisions",
            ],
        },
        {
            role: "SDE II",
            company: "Amazon",
            date: "Sep 2017 - Jan 2020",
            accomplishments: [
                "Developed and maintained high-traffic, business-critical microservices for managing the Prime Video subscription pipeline for millions of users",
                "Led several multi-quarter projects, including real-time payment verification and integrating user-interaction logging, while helping to migrate to a configurable template-driven architecture",
                "Collaborated with teammates, PMs, UX and QA to expand Prime into new marketplaces, creating technical design proposals from Business Requirement Documents, providing delivery estimates and weekly updates to PMs, leading incremental project launches, creating dashboards for metrics, setting up automated alerts, and maintaining features post-release",
                "Led daily stand-ups with the team and mentored new and existing team members",
            ],
        },
        {
            role: "Software Engineer",
            company: "Mozilla",
            date: "Jan 2016 - July 2017",
            accomplishments: [
                "Implemented APIs for Firefox WebExtensions, an open-source, cross-browser API for add-on developers to extend the browser's capabilities",
                "Helped Mozilla reach feature parity with the existing Chrome Extensions API by implementing the Omnibox, PageActions, and Commands APIs",
                "Enabled WebExtensions to run on Firefox for Android by resolving numerous bugs and working with the UX team in Taiwan to add support for missing features",
            ],
        },
        {
            role: "Software Engineering Resident",
            company: "Google",
            date: "Sep 2014 - Sep 2015",
            accomplishments: [
                "Participated in a 12-month residency program for computer scientists with two 4.5 month engineering rotations on Google Inbox (focus on accessibility) and ChromeOS WiFi",
            ],
        },
    ],
    projects: [
        {
            title: "Coming Soon",
            description: "Description",
            link: "https://example.com/coming-soon",
        },
    ],
    university: "Michigan State University",
    degree: "Bachelor of Science in Computer Science",
    certifications: [
        "Advanced React - Meta - Coursera",
        "Neural Networks and Deep Learning - DeepLearning.AI - Coursera",
    ],
};

const Post: React.FC = () => {
    return (
        <div>
            <div className="introduction">
                <Card>
                    <Resume {...resumeData} />
                </Card>
            </div>
        </div >
    );
};

export default Post;