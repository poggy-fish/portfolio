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
    id: 4,
    name: "React",
    svg: <ReactIcon />,
    url: "https://reactjs.org/",
  },
  {
    id: 1,
    name: "HTML5",
    svg: <HTMLIcon />,
    url: "https://html.spec.whatwg.org/",
  },
  {
    id: 2,
    name: "CSS3",
    svg: <CSSIcon />,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: 3,
    name: "JavaScript",
    svg: <JavaScriptIcon />,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 5,
    name: "Gatsby",
    svg: <GatsbyIcon />,
    url: "https://www.gatsbyjs.com/",
  },
  {
    id: 6,
    name: "GraphQL",
    svg: <GraphQLIcon />,
    url: "https://graphql.org/",
  },
  {
    id: 7,
    name: "Firebase",
    svg: <FirebaseIcon />,
    url: "https://firebase.google.com/",
  },

  {
    id: 8,
    name: "Sass",
    svg: <SassIcon />,
    url: "https://sass-lang.com/",
  },
  {
    id: 9,
    name: "Tailwind",
    svg: <TailwindIcon />,
    url: "https://tailwindcss.com/",
  },

  {
    id: 10,
    name: "Netlify",
    svg: <NetlifyIcon />,
    url: "https://www.netlify.com/",
  },
  {
    id: 11,
    name: "Stripe",
    svg: <StripeIcon />,
    url: "https://stripe.com/",
  },
  {
    id: 12,
    name: "Wordpress",
    svg: <WordpressIcon />,
    url: "https://wordpress.org/",
  },
  {
    id: 13,
    name: "Contentful",
    svg: <ContentfulIcon />,
    url: "https://www.contentful.com/",
  },
  {
    id: 14,
    name: "Airtable",
    svg: <AirtableIcon />,
    url: "https://airtable.com/",
  },

  // hidden hides skill from skills section but still shows on project cards
  {
    id: 15,
    name: "Styled Components",
    svg: <img src={styledcomponents} alt="Styled Components" />,
    hidden: true,
    url: "https://styled-components.com/",
  },
]
