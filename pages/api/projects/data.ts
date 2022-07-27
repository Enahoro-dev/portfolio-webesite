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
        body:"Indigo is an electronic medical records system (EMR) built with a next/typescript frontend and its backend with the django rest framework and postgreSQL. It provides aims to provide easier access to patient files for doctors through its simple UI and search features.",
        image:'/images/dater.png',
        github:'https://github.com/Enahoro-dev/heart-disease-prediction-api',
        live:'https://heart-ml-api.herokuapp.com/heart_prediction'
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
        body:"Dater, as its name suggests is an expected date of delivery and gestational age calculator made with react and tailwind. It's a simple calculator which uses the last menstrual period to get these values. It was designed and built by me in a few days to improve my understanding of react.js.",
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
        live:'https://heart-ml-api.herokuapp.com/heart_prediction'
    },
    {
        id:6,
        title:'NOTES',
        body:"A simple CRUD notes app with its frontend built with react and typescript and linked to an SQL lite database.",
        image:'/images/notes.png',
        github:'https://github.com/Enahoro-dev/django-notesapp',
        live:'https://enas-notes.netlify.app/'
    }
    
]