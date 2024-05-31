import html5 from "../assets/icons/html5.svg";
import css3 from "../assets/icons/css3.svg";
import js from "../assets/icons/js.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import tailwindcss from "../assets/icons/tailwindcss.svg";
import React from "../assets/icons/react.svg";
import material from "../assets/icons/material.svg";
import node from "../assets/icons/node.svg";
import postgresql from "../assets/icons/postgresql.svg";
import docker from "../assets/icons/docker.svg";
import figma from "../assets/icons/figma.svg";
import linux from "../assets/icons/linux.svg";
import postman from "../assets/icons/postman.svg";
import vitejs from "../assets/icons/vitejs.svg";
import vscode from "../assets/icons/vscode.svg";
import python from "../assets/icons/python.svg";
import git from "../assets/icons/git.svg";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import udemy from "../assets/images/udemy.png";
import leetcode from "../assets/icons/leetcode.png";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.png";
import github from "../assets/icons/github.svg";


export const tech = [
    { name: html5,
        tip:"HTML5",
     },
    { name: css3 ,
        tip:"CSS3",
    },
    { name: js ,
        tip:"JavaScript",
    },
    { name: bootstrap ,
        tip:"Bootstrap",
    },
    { name: tailwindcss ,
        tip:"Tailwind CSS",
    },
    { name: React ,
        tip:"React",
    },
    { name: material ,
        tip:"Material UI",
    },
    { name: node ,
        tip:"Node.js",
    },
    { name: postgresql ,
        tip:"PostgreSQL",
    },
    { name: docker ,
        tip:"Docker",
    },
    { name: figma ,
        tip:"Figma",
    },
    { name: linux ,
        tip:"Linux",
    },
    { name: postman ,
        tip:"Postman",
    },
    { name: vitejs ,
        tip:"Vite js",
    },
    { name: vscode ,
        tip:"VS Code",
    },
    { name: python ,
        tip:"Python",
    },
    { name: git ,
        tip:"Git",
    },
  
];

export const projects = [
    {
        img: project1,
        id: 1,
        title: "Nike Landing Page",
        description:
            "This project is a Nike Landing Page built using React and Tailwind CSS. It showcases the latest Nike products and provides a seamless user experience with responsive design.",
        link: "https://github.com/ullaslgd/Nike-landing-page.git",
    },
    {
        img: project2,
        id: 2,
        title: "Personal Portfolio",
        description:
            "This project is a personal portfolio website built using React and Tailwind CSS. It showcases my skills and projects in a visually appealing and user-friendly manner.",
        link: "https://github.com/ullaslgd",
    },
    {
        img: project3,
        id: 3,
        title: "100 Python Projects",
        description:
            "This project is a collection of 100 Python projects created as part of the London Brewery Bootcamp on Udemy. It covers a wide range of topics and helps in learning Python.",
        link: "https://github.com/ullaslgd/100-python-projects.git",
    },
];

export const certificates=[
    {
        src:udemy,
        name:"Web Development Bootcamp",
        from:"udemy",
        source:"https://www.udemy.com/certificate/UC-3b54c456-699c-4bbe-b273-9b0fd91d8d9c/",
    },

];

export const socials = [
    {
        name: github,
        link: "https://github.com/ullaslgd",
    },
    {
        name: leetcode,
        link: "https://leetcode.com/u/clubullas/",
    },
    {
        name: twitter,
        link: "https://x.com/ullas__07",
    },
    {
        name: instagram,
        link: "https://www.instagram.com/u7vsq/",
    },


];

export const navLinks = [
    {
        name: "Skills",
        href: "#skills",
    },
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "About",
        href: "#about",
    },
    {
        name: "Certificate",
        href: "#certificate",
    },
    {
        name: "Contact",
        href: "#contact",
    },
];