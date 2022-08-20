import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";
import mock6 from "../img/mock6.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Aniket",
  lastName: "Shaw",
  initials: "as", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in the Kolkata, India",
    },
    {
      emoji: "💼",
      text: "Final Year CS Student at IEM Kolkata",
    },
    {
      emoji: "📧",
      text: "aniketshaw.iembca2023@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/aniketshaw29",
      icon: "fa fa-github",
    },
    {
      link: "https://www.linkedin.com/in/aniketshaw/",
      icon: "fa fa-linkedin",
    },
    {
      link: "https://www.instagram.com/shaw.py/",
      icon: "fa fa-instagram",
    },
    {
      link: "https://www.facebook.com/aniket.shaw.71404/",
      icon: "fa fa-facebook",
    },
    {
      link: "https://twitter.com/Aniket_Shaw_",
      icon: "fa fa-twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Aniket is a final year Computer Science student having keen interest in programming. He is currently pursuing BCA from Institute of Engineering and Management (IEM). He is going to graduate in 2023. He have completed his primary and secondary education from Douglas Memorial Higher Secondary School, Barrackpore, which is affiliated to Council for Indian School Certificate (CISE).",
  skills: {
    proficientWith: ["java", "python", "sql", "spring boot"],
    exposedTo: ["Machine Learning", "Data Science", "Heroku Cloud", "Flask"],
  },
  hobbies: [
    {
      label: "Swimming",
      emoji: "🏊",
    },
    {
      label: "Geopolitics",
      emoji: "🌎",
    },
    {
      label: "Latest Technology",
      emoji: "💻",
    },
    {
      label: "Economics",
      emoji: "📈",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Student Management System",
      live: "https://studentmanagement2022.herokuapp.com/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/aniketshaw29/studentManagement", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Uber Prediction",
      live: "#",
      source: "https://github.com/aniketshaw29/UberPrediction",
      image: mock2,
    },
    {
      title: "Car Prediction",
      live: "#",
      source: "https://github.com/aniketshaw29/CarPrediction",
      image: mock3,
    },
    {
      title: "Admission Prediction",
      live: "#",
      source: "https://github.com/aniketshaw29/AdmissionPrediction",
      image: mock3,
    },
    {
      title: "Customer Management",
      live: "https://customer-management-angular13.herokuapp.com",
      source: "https://github.com/paytonjewell",
      image: mock4,
    },
    {
      title: "Crime Lab",
      live: "https://crime-in-india-2001-2012.herokuapp.com/",
      source: "https://github.com/aniketshaw29/Crime-Lab-2001-to-2012",
      image: mock5,
    },
    {
      title: "Todo List",
      live: "https://todo-list-flask-python.herokuapp.com/",
      source: "https://github.com/aniketshaw29/todo_list_flask",
      image: mock6,
    },
  ],
};
