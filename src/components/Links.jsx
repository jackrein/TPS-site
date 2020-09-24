import React from 'react';

function Links() {
  return (
    <div className="App-main">
      <h2 className='title'>Campus Resources</h2>
        <p className='mainP'>
          <a className='link' href='https://www.colorado.edu/cisc/'>Center for Inclusion and Social Change</a><br/>
          <a className='link' href='https://www.colorado.edu/cisc/resources/trans-queer'>CU Trans and Queer Resources</a><br/>
        </p>
      <h2 className='title'>Other Links</h2>
        <p className='mainP'>
          <a className='link' href='https://translifeline.org/hotline'>Trans Lifeline</a><br/>
        </p>
      <h2 className='title'>Sibling Chapters</h2>
        <p className='mainP'>
          <a className='link' href='http://www.thetapisigma.org/'>Alpha Chapter - University of California Santa Cruz</a><br/>
          <a className='link' href='https://neiu.campuslabs.com/engage/organization/ThetaPiSigma'>Beta Chapter - Northeastern University of Illinois</a><br/>
          <a className='link' href='https://uothetapisigma.wixsite.com/home'>Gamma Chapter - University of Oregon</a><br/>
          <a className='link' href='https://case.edu/lgbt/groups/theta-pi-sigma'>Eta Chapter - Case Western Reserve University</a>
        </p>
    </div>
  );
}

export default Links;