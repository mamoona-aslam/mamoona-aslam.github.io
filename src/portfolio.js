/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/cat"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mamoona Aslam",
  title: "Hi all, I'm Mamoona",
  subTitle: emoji(
    "A passionate Cloud Architect 🚀 with a flair for turning complex challenges into seamless, scalable solutions. From DevSecOps to MLOps, I make tech work smarter, not harder.😼"
  ),
  //resumeLink: "", // Set to empty to hide the button
  resumeLink: "https://drive.google.com/file/d/1jtKVybdTB8YLoEFXo5AYPJVTgXcZMMBx/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mamoona-aslam",
  linkedin: "https://www.linkedin.com/in/mamoona-aslam/",
  //gmail: "engr.mamoona.aslam@gmail.com",
  gitlab: "https://gitlab.com/Mamoona_Aslam",
  medium: "https://medium.com/@mamoonaaslam",
  //Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Innovative Cloud Architect with 4+ years of expertise in designing and managing scalable cloud infrastructures, DevOps, and MLOps solutions across diverse platforms.",
  skills: [
    emoji(
      "⚡ Proficient in AWS, Azure, GCP, and container orchestration with Docker, Kubernetes, and VMware."
    ),
    emoji("⚡ Utilizes Terraform, Pulumi, Ansible, and Jenkins to streamline and automate infrastructure deployment and management."),
    emoji(
      "⚡ Experienced with Python, JavaScript, Golang and frameworks/libraries like Flask, Django, and TensorFlow."
    ),
    emoji(
      "⚡ Implements robust IT security measures and leverages tools like ELK, Grafana, and Prometheus for effective logging and monitoring."
    ), 
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Azure",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Automation",
      fontAwesomeClassname: "fas fa-magic"
    },
    {
      skillName: "IT Security",
      fontAwesomeClassname: "fas fa-shield-alt"
    },
    {
      skillName: "IaC",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Secret Management",
      fontAwesomeClassname: "fas fa-key"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Javacript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Windows",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "Databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Technische Hochschule Köln",
      logo: require("./assets/images/thkoelnLogo.png"),
      subHeader: "Master of Science in Communication Systems and Network ",
      duration: "September 2017 - September 2020",
      desc: "Thesis: Analysis and Development of a security solution for VANET using Blockchain technology in a simulated environment.",
      descBullets: [
        "Major Courses: Cryptography, Information Security, Next Generation Networks, Advanced Multimedia Communication, Audio/Video coding"
      ]
    },
    {
      schoolName: "NED University of Engineering and Technology",
      logo: require("./assets/images/nedLogo.png"),
      subHeader: "Bachelor of Engineering in Electronic",
      duration: "December 2009 - December 2013",
      desc: "Ranked top 10% in the program. Thesis: Monocular Human Detection & Height Determination using Image Processing ",
      descBullets: [
        "Major Courses: Communication Systems, Computer Architecture and Organization, Programming Languages, Computer Networks."
      ]
    }
  ]
};

// Your top proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud Architecture", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "IT Security & Compliance",
      progressPercentage: "80%"
    },
    {
      Stack: "DevOps / Automation",
      progressPercentage: "85%"
    },
    {
      Stack: "Software Development",
      progressPercentage: "75%"
    },
    {
      Stack: "Web Technologies",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cloud Architect",
      company: "ndaal Gmbh Co & K.G",
      companylogo: require("./assets/images/ndaal_logo.png"),
      date: "July 2021 – Present",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Design and build secure cloud platforms for IaaS and PaaS, optimized for Big Data analytics and AI.",
        "Utilize Infrastructure as Code (IaC) for efficient and scalable resource management.", 
        "Develop and deploy high-performance web services in a cloud environment.",
        "Implement and manage CI/CD pipelines to enhance automation and deployment speed.",
        "Lead cloud migration projects, ensuring seamless transition of applications and data.",
        "Ensure robust security compliance and data protection across cloud infrastructure."
      ]
    },
    {
      role: "Research Intern",
      company: "AKKA Technologies",
      companylogo: require("./assets/images/akkalogo.png"),
      date: "Nov 2019 – Oct 2020",
      //desc: "um dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Master's Thesis: Analysis and Development of a Security Solution for VANET Using Blockchain Technology in a Simulated Environment.",
        "Designed and developed a prototype for autonomous vehicle communication, integrating Blockchain technology to ensure robust security features."
      ]
    },
    {
      role: "Student Researcher",
      company: "Fraunhofer FIT",
      companylogo: require("./assets/images/Fraunhoferlogo.png"),
      date: "Feb 2019 – Sep 2019",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Worked in Blockchain Lab on an Industry 4.0 project focused on analyzing product quality and compliance from IoT sensor data.",
        "Utilized Blockchain technologies (Ethereum, Quorum) and Smart Contracts to ensure data integrity and transparency.",
        "Developed a Web UI interface for user interaction with the application, enhancing accessibility and usability."
      ]
    },
    {
      role: "Design Engineer ",
      company: "R&D Altanova",
      companylogo: require("./assets/images/altanova.png"),
      date: "Feb 2015 – Feb 2017",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Designed high-frequency and controlled impedance load boards for various applications.",
        "Developed high-performance test, evaluation, and load boards, including SMT and BGA components.",
        "Created component symbols and footprints; prepared schematics with ORCAD.",
        "Managed PCB layout, including placement, routing, and trace adjustments.",
        "Conducted Gerber generation, evaluation, and error detection; performed IPC checking with CAM 350."
      ]   
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Hashicorp Vault Associate",
      subtitle:
        "Earned Associate certification in HashiCorp Vault with distinction, showcasing expertise in managing and securing sensitive data.",
      image: require("./assets/images/vault.webp"),
      imageAlt: "Hashicorp Vault Associate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/baed6d61-9a51-492e-aadc-f9652fb9e9b8/"
        }
      ]
    },
    {
      title: "Hashicorp Terraform Associate",
      subtitle:
        "Achieved Associate certification in HashiCorp Terraform with distinction, highlighting advanced skills in infrastructure as code and automated provisioning.",
      image: require("./assets/images/terraform.webp"),
      imageAlt: "Hashicorp Terraform Associate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/eaca8f9a-4a55-4dc6-a0b3-b52ab95417ec/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: emoji("Talks 📢"),
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Integrating Data-Privacy Through Pipelines",
      subtitle: "Data2day Karlsruhe, Germany, October 2023",
      slides_url: "https://gitlab.com/ndaal_open_source/ndaal_public_presentation_data2day.de",
      event_url: "https://www.data2day.de/veranstaltung-21132-0-integrating-data-privacy-through-pipelines.html"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach Out to me! 🤙 "),
  subtitle:
    "Discuss a  new Opportunity, a project or just want to say hi? Connect with me on LinkedIn, GitHub or Gitlab.",
    location: emoji("📍Cologne, Germany")
  //number: "0000000000",
  //email_address: "mamoona.aslam.91@hotmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
