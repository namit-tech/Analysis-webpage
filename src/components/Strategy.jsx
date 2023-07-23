import React from 'react'

export const Strategy = () => {
    return (
        <div className='  p-2  strategy'>
            <div className='strategy-head'>
                <h4>Retirement Strategy</h4>
                <br />
                <h6>Employee Contribution</h6>
                <section className='range'>
                    <input type="range" min="0" max="20" value="12" />
                    <p className='m-1'>12%</p>
                </section>
                <h6>Retirement Age</h6>
                <section className='range'>
                    <input type="range" min="0" max="80" value="65" />
                    <p className='m-2'> 65</p>
                </section>
                <hr className='strat-line w-100' />
            </div>
            <div className='strategy-rate mx-3'>
                <div className='percentage'>
                    <p >Employer Contribution</p>
                    <p >8.4%</p>
                </div>
                <div className='percentage'>
                    <p className='me-5'>Interest Rate</p>
                    <p>5%</p>
                </div>
                <button class="btn btn-primary w-100   rounded" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Update</button>
                <p className='text-primary m-3 px-5 mx-5 docs' >   View Help Docs &#62;   </p>
            </div>
            <div className="footer mx-3">

                <div className='offer'>
                    <hr className='vertical bg-primary' />
                    <div>
                        <p className='pt-3 px-3'> Are you considering a </p>
                        <h5 className='mx-3 mb-5 housing'>Housing Advance?</h5>
                        <span className='mx-3 mb-5 '>Limited time reduced Interest</span>
                        <p className='mx-3 text-primary'>Learn More &#62;  </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
