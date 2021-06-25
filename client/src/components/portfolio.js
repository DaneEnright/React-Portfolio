import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Portfolio() {
    const projects = [
     {
        id: 1,
        image:"./img/NightSky-Working-Screenshot.jpg",
        title:"Night Sky",
        description:"Really cool application that shows you where the International Space Station is currently located in real time. Also can enter your personal coordinates and see how far away it is from you at that exact moment!",
        deploy:"https://cblock7.github.io/Night-Sky/",
        github:"https://github.com/Cblock7/Night-Sky",
    },
    {
        id: 2,
        image:"./img/Ford-Finder-2021-Working-Screenshot.jpg",
        title:"Ford Finder 2021",
        description:"This application is very useful for any new customer shopping for a Brand New Ford Vehicle. When a user enter search criteria for a model of car or certain specifications they are presented with all the available options for 2021!",
        deploy:"https://whispering-fortress-31426.herokuapp.com/",
        github:"https://github.com/strong-one/Ford-Finder-2021",
    },
    {
        id: 3,
        image:"./img/budget-tracker-screenshot.jpg",
        title:"Budget Tracker",
        description:"A useful application to keep track off a budget and expenses with offline capability to capture all user data.",
        deploy:"https://lit-mountain-41459.herokuapp.com/",
        github:"https://github.com/DaneEnright/Budget-Tracker-PWA",
    },
    {
        id: 4,
        image:"./img/fitness-tracker-screenshot.jpg",
        title:"Workout Tracker",
        description:"This application is very helpful for a user to enter their reps for a workout and keep track of their progress with their workouts.",
        deploy:"https://sleepy-ridge-27212.herokuapp.com/",
        github:" https://github.com/DaneEnright/Workout-Tracker-Nosql",
    },
    {
        id: 5,
        image:"./img/Workday-Scheduler-Working-Screenshot.jpg",
        title:"Work Day Planner",
        description:"A helpful application to help some schedule their day and keep track of it.",
        deploy:"https://daneenright.github.io/APIs-Work-Day-Scheduler/",
        github:"https://github.com/DaneEnright/APIs-Work-Day-Scheduler",
    }   
    ];

    const renderCard = (card) => {
        return (
            <Card className = "projectCard" key= {card.id}>
                <Card.Img variant ="top" src= {card.image} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.description}</Card.Text>
                    <Button variant = "primary">Github</Button>
                    <Button variant = "primary">Deployed URL</Button>
                </Card.Body>
            </Card>
        );
    };

    return <div className = "flex">{projects.map(renderCard)}</div>
   
}

export default Portfolio;

// import React from 'react';

// const ProfileList = ({ profiles, title }) => {
//   if (!profiles.length) {
//     return <h3>No Profiles Yet</h3>;
//   }

//   return (
//     <div>
//       <h3 className="text-primary">{title}</h3>
//       <div className="flex-row justify-space-between my-4">
//         {profiles &&
//           profiles.map((profile) => (
//             <div key={profile._id} className="col-12 col-xl-6">
//               <div className="card mb-3">
//                 <h4 className="card-header bg-dark text-light p-2 m-0">
//                   {profile.name} <br />
//                   <span className="text-white" style={{ fontSize: '1rem' }}>
//                     currently has {profile.skills ? profile.skills.length : 0}{' '}
//                     endorsed skill
//                     {profile.skills && profile.skills.length === 1 ? '' : 's'}
//                   </span>
//                 </h4>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default ProfileList;