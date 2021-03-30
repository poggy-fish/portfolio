import React from "react"

// SVGs
import {
  HTMLIcon,
  CSSIcon,
  JavaScriptIcon,
  ReactIcon,
  GatsbyIcon,
  FirebaseIcon,
  NetlifyIcon,
  GraphQLIcon,
  SassIcon,
  TailwindIcon,
  StripeIcon,
  WordpressIcon,
  ContentfulIcon,
  AirtableIcon,
} from "../svg/svg"

// Styled components image
import styledcomponents from "../images/styled.png"

export const skills = [
  {
    id: 1,
    name: "HTML5",
    svg: <HTMLIcon />,
  },
  {
    id: 2,
    name: "CSS3",
    svg: <CSSIcon />,
  },
  {
    id: 3,
    name: "JavaScript",
    svg: <JavaScriptIcon />,
  },
  {
    id: 4,
    name: "React",
    svg: <ReactIcon />,
  },
  {
    id: 5,
    name: "Gatsby",
    svg: <GatsbyIcon />,
  },
  {
    id: 6,
    name: "GraphQL",
    svg: <GraphQLIcon />,
  },
  {
    id: 7,
    name: "Firebase",
    svg: <FirebaseIcon />,
  },

  {
    id: 8,
    name: "Sass",
    svg: <SassIcon />,
  },
  {
    id: 9,
    name: "Tailwind",
    svg: <TailwindIcon />,
  },

  {
    id: 10,
    name: "Netlify",
    svg: <NetlifyIcon />,
  },
  {
    id: 11,
    name: "Stripe",
    svg: <StripeIcon />,
  },
  {
    id: 12,
    name: "Wordpress",
    svg: <WordpressIcon />,
  },
  {
    id: 13,
    name: "Contentful",
    svg: <ContentfulIcon />,
  },
  {
    id: 14,
    name: "Airtable",
    svg: <AirtableIcon />,
  },
  {
    id: 15,
    name: "Styled Components",
    svg: <img src={styledcomponents} alt="Styled Components" />,
    hidden: true,
  },
]
