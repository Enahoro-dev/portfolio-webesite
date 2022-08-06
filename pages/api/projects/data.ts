export type Project ={
    id:number,
    title:string,
    body:string,
    image:string,
    github:string,
    live:string
}

export const projects:Project[] =[
    {
        id:1,
        title:'INDIGO',
        body:"Indigo is an electronic medical records system (EMR) desktop app built with a next/typescript frontend and a django-postgreSQL backend. It's still currently in development but you can view the source code or a live demo(desktop version) with the links below.",
        image:'/images/indigo.png',
        github:'https://github.com/Enahoro-dev/indigo-backend',
        live:'https://indigo-emr.vercel.app/'
    },
    {
        id:2,
        title:'DIABETES RISK ASSESSMENT',
        body:"This is a model which aims to predict a probable diagnosis of diabetes in women. It was created from a support vector machine trained by me with the indian PIMA diabetes dataset. An api was then created by me with the django rest framework to analyze data from a react, typescript frontend to make the prediction. Details for implementation of its API can also be found in the README file of its github repository.",
        image:'/images/diabetes.png',
        github:'https://github.com/Enahoro-dev/machine-learning-diabetes-api',
        live:'https://diabetes-assessment.netlify.app/'
    },
    {
        id:3,
        title:'DATER',
        body:"Dater, as its name suggests is an expected date of delivery and gestational age calculator made with react and tailwind. You can try it or view it's source code with the links below.",
        image:'/images/dater.png',
        github:'https://github.com/Enahoro-dev/dater',
        live:'https://reactdater.netlify.app/'
    },
    {
        id:4,
        title:'PRYOPTO',
        body:"This is a the landing page made for pryopto; a PR agency for blockchain startups made with react, typescript and tailwind css.",
        image:'/images/pryopto.png',
        github:'https://github.com/Enahoro-dev/pryopto',
        live:'https://pryopto.netlify.app/'
    },
    {
        id:5,
        title:'HEART DISEASE RISK API',
        body:"A logistic regression model for heart disease prediction with API built with fast api. It makes use of variables such as age, sex, cholesterol levels, E.C.G variables,e.t.c to make this prediction. Details for the implementation of this api can be found in the README of its github repository linked below.",
        image:'/images/heart.png',
        github:'https://github.com/Enahoro-dev/heart-disease-prediction-api',
        live:'https://github.com/Enahoro-dev/heart-disease-prediction-api'
    },
    {
        id:6,
        title:"ENA'S NOTES",
        body:"A simple CRUD django-react notes app.",
        image:'/images/notes.png',
        github:'https://github.com/Enahoro-dev/django-notesapp',
        live:'https://enas-notes.netlify.app/'
    }
    
]