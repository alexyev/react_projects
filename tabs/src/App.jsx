import { useState, useEffect } from 'react'
import './App.css'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

function App() {

  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs();
  }, [])

  if (loading) {
    return (
      <section className='loading'>
        <h1>Loading...</h1>
      </section>
    )
  }

  const { company, dates, duties, title } = jobs[value]

  return (
    <div className="app--container">
      <div className='app-title'>
        <h1>Experience.</h1>
        <div className='underline'></div>
      </div>
      <div className='app--main'>
        <div className='app--btn'>
          {
            jobs.map((job, index) => {
              return (
                <button key={job.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && "active-btn"}`}>
                  {job.company}
                </button>
              )
            })
          }
        </div>

        <div className='job--info'>
          <h2>{title}</h2>
          <h3>{company}</h3>
          <h4>{dates}</h4>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='duty'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
