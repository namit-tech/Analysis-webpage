import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import mike from "../assets/Mike.webp"
export const Content = () => {
  return (
    <div className=' min-vh-100 p-3  container'>
<section className='image-text'>
    <img src={mike} alt="" />
    <h2>Hi Mike,<br /> <span>Welcome Back</span></h2>
</section>
<section className='digits'>
  <h5 className='text-black-50'>Today</h5>
  <h1 className='text-dark'>$19,892 <br /> <span>Account Balance</span></h1>
  <h5 className='text-dark'>$4,000 <br /> <span>Year-to-Date Contributions</span></h5>
  <h5 className='text-dark'>$1,892 <br /> <span>Total Interst</span></h5>
  <button class="btn btn-primary dropdown-toggle rounded" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">I want to</button>
</section>
<section className='transaction'>
  <h5 className='text-dark'>Recent Transactions</h5>
  <h6 className='text-dark'><span>2020-08-07</span> <br /> Withdrawal Transfer to Bank-XXX11</h6>
  <hr />
  <h6 className='text-dark'><span>2020-07-21</span> <br /> Withdrawal Transfer to Bank-XXX11</h6>
  <hr />
  <h6 className='text-dark'><span>2020-08-07</span> <br /> Withdrawal Transfer to Bank-XXX11</h6>
  <hr />
</section>
    </div>
  )
}
