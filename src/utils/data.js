export const SKILLs = [
    {
        title: "Frontend",
        icon: "./public/images/frontend.png",
        skills: [
            { skill: "HTML5", percentage: "80%" },
            { skill: "CSS", percentage: "90%" },
            { skill: "JavaScript", percentage: "80%" },
            { skill: "React.js", percentage: "85%" }
        ]
    },
    {
        title: "Backend",
        icon: "./public/images/backend.png",
        skills: [
            { skill: "Node.js", percentage: "75%" },
            { skill: "PHP", percentage: "80%" },
            { skill: "Laravel", percentage: "70%" },
            { skill: "MySQL DataBase", percentage: "80%" },
        ]
    },
    {
        title: "Tools",
        icon: "./public/images/Tools.png",
        skills: [
            { skill: "Git & GitHub", percentage: "75%" },
            { skill: "Visual Studio Code", percentage: "90%" },
            { skill: "Responsive Design", percentage: "70%" }
        ]
    },
    {
        title: "Soft Skills",
        icon: "./public/images/Skill.png",
        skills: [
            { skill: "Problem Solving", percentage: "90%" },
            { skill: "Collaboration", percentage: "100%" },
            { skill: "Communication", percentage: "85%" },
            { skill: "Attention to Details", percentage: "80%" }
        ]
    },
]

export const Projects = [
    {
        title: "Realtime Chat App",
        GitHub: "",
        about: [
            "This ChatApp is created by using PHP,MySQL,AJAX as a backend and CSS as frontend.",
            "When User is Logged in AJAX will carry data to PHP and PHP will create unique-id for user and set it to MySQL database.",
            "When User send message to other User, AJAX will carry data that came from textarea and send back to PHP and PHP create message-id.",
            "PHP checked the message-id and if correct,insert as message-incomming-id or message-outgoing-id in Database."
        ]
    },
    {
        title: "Ecommerce Website",
        GitHub: "",
        about: [
            "This Ecommerce Webiste is created by using Laravel and MySQL database",
            "Admin dashboard is copied from other template code",
            ""
        ]
    },
    {
        title: "Blog Webiste",
        GitHub: "",
        about: [
            
        ]
    },
]