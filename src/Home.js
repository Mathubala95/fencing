import React from 'react';

function Home() {  
  return (
    <div id="home" class="intro route bg-image">
    <div class="overlay-itro"></div>
    <div class="intro-content display-table">
      <div class="table-cell">
        <div class="container">
            

        <p class="intro-subtitle1  " ><h3><span>Our Website is</span></h3><strong class="text-slider"></strong></p>

          <p class="intro-subtitle " ><h1><span><b>Site is Under Construction</b></span></h1><strong class="text-slider"></strong></p>
          <p class="intro-subtitle1  " style={{color:'white'}}><h3>Our website is under construction, but we are ready to go!Want to know more about us, tell us about your project or just
            to say hello?Drop us a line and we will get back as soon as possible.</h3><strong class="text-slider"></strong></p>
            <div class="row">
            <div class="col mt-3">
  

  </div>
  <div class="col ml-3 mt-3">
    <input type="text" class="form-control" placeholder="Enter your Name" aria-label="First name"/>
  </div>
  <div class="col mt-3">
    <input type="text" class="form-control" placeholder="Enter a valid email address" aria-label="Last name"/>
  </div>
  <div class="col mt-3">
  <button type="button" class="btn btn-primary">Submit</button>

  </div>
  <div class="col mt-3">
  

  </div>
</div>
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home