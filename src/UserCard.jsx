import {PropTypes} from "prop-types";

const userData = [
    {
        name : "Smiley1", 
        city : "New York",
        title : "Full Stack Developer",
        skills : ["Python", "Django", "Kubernetes", "Microservices"],
        online : true,
        image : "images/image1.png",
    },
    {
        name : "Smiley2", 
        city : "San Franciscoo",
        title : "Backend Developer",
        skills : ["C#.NET", "MVC", "Web-API"],
        online : true,
        image : "images/image2.png",
    },
    {
        name : "Smiley3", 
        city : "Dallas",
        title : "Frontend Developer",
        skills : ["React", "Node.JS", "TypeScript"],
        online : false,
        image : "images/image3.png",
    },
];

function User(props) {
    return <div className="card-container">
        <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img src={props.image} className="img" alt="image1"></img>
        <h1>{props.name}</h1>
        <h1>{props.city}</h1>
        <p>{props.title}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    </div>
}

export const Usercard = () => {
//   return (
//         <User name = "Smiley1" city = "New York" title="Full Stack Developer" 
//         skills={["Python", "Django", "Kubernetes", "Microservices"]} online={false}
//         image = "images/image1.png"/> )
    return (<>
    {
        userData.map((user, index)=>(
            <User key={index} name={user.name} city={user.city}
            title={user.title} skills={user.skills} image={user.image}  online={user.online}/>
        ))
    }
    </>)
  
}

User.propTypes ={
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    online: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
}
