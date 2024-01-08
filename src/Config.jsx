import survey_feed_picture from "./images/survey_feed-pic.png";
import discipline_counter_picture from "./images/discipline_counter-pic.png";
import math_app_picture from "./images/math_app-pic.png";
import starDash_picture from "./images/starDash-pic.jpg";
import kids_games_picture from "./images/kids_games-pic.png";
import portfolio_site_picture from "./images/portfolio_site-pic.png";

import home_pic from "./images/pc_pic.jpg";

export const homePic = home_pic;

export const aboutMe = {
  description:
    "Hi, I am Wihmott Valentine. I am a Web Developer. I am passionate about problem solving, and developing myself in whichever tasks I find to do. I have a National Diploma in Mathematics; my major subjects are mathematics and statistics – and while studying I found my love for programming. Currently I am working as a Mathematics Educator, teaching grades 8-12, and freelancing as a webapps developer. See some of my projects on the projects page.",
  interests: "The Bible, Karate, Table Tennis",
  skills: [
    "I am a hard worker, driven, and determined to complete a goal once I've set my mind to it.",
    "I am competitive, always trying to achieve the best in the role that I find myself in.",
    "I enjoy a challenge, anything that requires me to learn something new entices me. ",
  ],
  tools: [
    "Javascript",
    "HTML",
    "CSS",
    "ReactJS",
    "MaterialUI",
    "Firebase",
    "EmailJS",
    "Python for ML",
    "Pandas",
    "Mathplotlib",
    "Sklearn",
  ],
  personalInformation: {
    name: "Wihlmott Valentine",
    age: new Date().getFullYear() - 1991,
    residence: "Kraaifontein, Cape Town",
    marital_status: "Married",
  },
};

export const data = [
  {
    title: "Portfolio Website",
    description: "The website you are looking at.",
    website: "",
    code: "https://github.com/wihlmott/portfolio-site",
    picture: portfolio_site_picture,
  },
  {
    title: "StarDash",
    description:
      "StarDash was created to move a current ‘paper system’ to an electronic one. Currently a school in Qatar uses paper checklists to inform on certain classroom checks. StarDash moved the checklist to an electronic version of the list, where the user can check or add a comment per question. After the checklist has been completed, the webapp sents an email to both the recipient and the supervisor doing the check. The checkform is then also saved in the database and can be recovered at anytime by the user. The main user is the supervisor which will have many educators under him/her. Then there is also an option for an administrator, who will have the ability to view the work of all supervisors under him/her.",
    website: "stardash-v1.web.app",
    code: "https://github.com/wihlmott/portfolio-v1",
    picture: starDash_picture,
  },
  {
    title: "Kids Games",
    description: "A match the cards game for kids.",
    website: "vl-kidsgames.web.app",
    code: "https://github.com/wihlmott/kids_games",
    picture: kids_games_picture,
  },
  {
    title: "Survey Feed",
    description:
      "Made for mobile. A survey to monitor choices made by recipients as well as allow them to comment on said choices. As well as enabling interaction between users' comments.",
    website: "survey-feed.web.app",
    code: "https://github.com/wihlmott/survey-feed",
    picture: survey_feed_picture,
  },
  {
    title: "Discipline Counter",
    description:
      "In order to automate the discipline points system that a high school uses, Discipline Counter allows its user to select items which each have a point value and add it to the current class. Then also provides a summary of history per class.",
    website: "discipline-counter.web.app",
    code: "https://github.com/wihlmott/discipline-counter",
    picture: discipline_counter_picture,
  },
  {
    title: "Math App",
    description:
      "A math program, set on the topic of factorization. For school learners to use to polish their skills in said topic. It has a ‘Who Want’s to Be a Millionaire’ style, as the learners can choose between four options, ask for a clue or get a 50/50. If the user signs in, their progress will be tracked.",
    website: "mathapp-v1-ff340.web.app",
    code: "",
    picture: math_app_picture,
  },
];
