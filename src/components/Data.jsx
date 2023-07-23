import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import bar from "../assets/My Project 2.png"
import Average from "../assets/average.png"
import top from "../assets/top.png"
import me from "../assets/me.jpeg"
export const Data = () => {
  return (
    <div className='min-vh-100 w-25 p-3 data'>
      <section className='heading'>
        <h6 className='text-primary'>Retirement Income</h6>
        <h5>Starting Year 2056</h5>
      </section>
      <div className='data-2'>
        <section className='goal'>
          <h1 className=''>$300,000</h1>
          <br />
          <span>My Goal</span>
          <div className="progress bg-primary"></div>
        </section>
        <section className='acheive'>
          <h1>59%</h1>
          <br />
          <span>Goal Acheived</span>
          <div className="progress bg-primary"></div>
        </section>
        <section className='income'>
          <h1>$300</h1>
          <br />
          <span>Est. Monthly Income</span>
          <div className="progress bg-primary"></div>
        </section>
      </div>
      <div className="data-3">
        <h4>Contributions Overtime</h4>
        <img src={bar} alt="" />
      </div>
      <div className="data-4">
        <h2>How do I compare to my peers?</h2>
        <span>These numbers represent current goal acheivement</span>
      </div>
      <div className="data-5">
        <section className='age'>
          <p>Age:</p>
          <button className='btn btn-light dropdown-toggle btn-sm'>Under 30</button>
        </section>
          <hr />
        <section className='salary'>
          <p>Salary:</p>
          <button className='btn btn-light dropdown-toggle btn-sm'>K20 - K30</button>
        </section>
          <hr />
        <section className='gender'>
          <p>Gender:</p>
          <button className='btn btn-light dropdown-toggle btn-sm'>Male</button>
        </section>
          <hr />
      </div>
      <div className="img">
      <img src={Average} alt="" />
          <img src={top}alt="" />
          <img src={me} alt="" />
      </div>
      
    </div>
  )
}
