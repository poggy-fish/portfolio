// Framer-motion animation variants

// Header
export const headerVariants = {
  initialTitle: {
    x: -25,
    opacity: 0,
  },

  animateTitle: {
    x: 0,
    opacity: 1,
    transition: { ease: "linear", duration: 0.4 },
  },

  initialNav: {
    x: 25,
    opacity: 0,
  },

  animateNav: {
    x: 0,
    opacity: 1,
    transition: { ease: "linear", duration: 0.4 },
  },
}

// Nav
export const navVariants = {
  underlineInitial: {
    width: "0%",
  },

  underlineAnimate: {
    width: "100%",
    transition: {
      duration: 0.5,
      delay: 0.25,
    },
  },
}

// About section
export const aboutVariants = {
  // Whole section
  initialSection: {
    y: 25,
    opacity: 0,
  },

  animateSection: {
    y: 0,
    opacity: 1,
    transition: { ease: "linear", delay: 0.4, duration: 0.4 },
  },

  // Profile pic
  initialPic: {
    y: 0,
    x: 0,
  },

  animatePic: {
    y: 12,
    x: -12,

    transition: {
      delay: 0.4,
      duration: 0.4,
      ease: "linear",
    },
  },

  initialPicBG: {
    y: 0,
    x: 0,
    opacity: 0,
  },

  animatePicBG: {
    y: -24,
    x: 24,
    opacity: 1,

    transition: {
      delay: 0.4,
      duration: 0.4,
      ease: "linear",
    },
  },
}

// Skills section
export const skillsVariants = {
  // Skill icons container
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },

  // Title
  initialTitle: {
    y: 25,
    opacity: 0,
  },

  animateTitle: {
    y: 0,
    opacity: 1,
    transition: { ease: "linear", duration: 0.25 },
  },
}

// Skill icons
export const skillIconVariants = {
  hidden: {
    x: -10,
    opacity: 0,
    scale: 0.3,
  },
  show: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
}

// Projects section
export const projectVariants = {
  // Projects container
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },

  // Title
  initialTitle: {
    y: 25,
    opacity: 0,
  },

  animateTitle: {
    y: 0,
    opacity: 1,
    transition: { ease: "linear", duration: 0.15 },
  },
}

// Project cards
export const projectCardVariants = {
  hidden: {
    y: 25,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { ease: "linear", duration: 0.3 },
  },

  // Skill icons on project cards
  initial: {
    scale: 1,
    backgroundColor: "rgb(55, 65, 81)",
  },
  hover: {
    scale: 1.15,
    backgroundColor: "rgb(64, 76, 94)",
  },
}
