import React from 'react'
import Card from './Components/Card'

const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 38,
    location: "Bangalore"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "React Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 42,
    location: "Hyderabad"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 45,
    location: "Bangalore"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 50,
    location: "Hyderabad"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "Senior Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Remote"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Solutions Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 48,
    location: "Pune"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    companyName: "Tesla",
    datePosted: "1 week ago",
    post: "Software Engineer (Autopilot)",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 55,
    location: "Bangalore"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    companyName: "NVIDIA",
    datePosted: "2 weeks ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Pune"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    companyName: "IBM",
    datePosted: "3 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 36,
    location: "Gurgaon"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    companyName: "Oracle",
    datePosted: "5 days ago",
    post: "Database Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 34,
    location: "Noida"
  }
];


  console.log(jobOpenings)

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem , idx){
        return (
          <div key={idx}>
            <Card company = {elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay = {elem.pay} location={elem.location} logo={elem.brandLogo} date={elem.datePosted}/>
          </div>
        )})}
    </div>
  ) 
}

export default App;