import React from 'react';
import './App.css';

import Jobs from './Jobs';

const JOB_API_URL = 'http://localhost:3001/jobs';

const mockJobs = [
  {title: 'SWE 1', company: 'Google'},
  {title: 'SWE 2', company: 'Facebook'}, 
  {title: 'SWE 3', company: 'Apple'},
];

async function fetchJobs(updateCb) {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();

  updateCb(json);
  console.log({json});
}


function App() {

  const [jobList, updateJobs] = React.useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    fetchJobs(updateJobs);
  }, []);


  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
