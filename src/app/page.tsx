
import React from 'react'


function page() {
  return (
    <div>
        {/* Video Background */}
        <video className={"videoBackground"} autoPlay loop muted>
                <source src="/about-video.mp4" type="video/mp4" />
                Your browser does not support the animation.
            </video>

            <div className={"overlay"}>
  <h1>Usama Faraz</h1>
  <h2>Full Stack Developer and Cyber Security Analyst</h2>
  <p>
    I love creating modern, responsive, and user-friendly web applications. I crafts secure code and provide efficient digital solutions.
  </p>
  
  {/* Button */}
  <a href="/about" className={"button"}>Explore My Work</a>
</div>

    </div>

  )
}

export default page