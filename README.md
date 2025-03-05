# Portfolio


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Portfolio</title>
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<style>
  .about-section {
    text-align: center;
    padding: 50px 0;
  }
  .about-section h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  .about-section img {
    width: 200px; /* Adjust the size as needed */
    height: 200px;
    border-radius: 50%; /* Makes the image round */
    margin-bottom: 20px;
  }
  .about-section p {
    color: #333;
  }

  /* Additional CSS for Projects Section */
.projects-section h2 {
  margin-bottom: 40px;
  font-size: 2.5rem;
}
.card {
  box-shadow: 0 0 10px rgba(0,0,0,0.1); /* Adds a subtle shadow around the card */
}
.card-img-top {
  max-height: 180px; /* Adjust this value to fit the image properly in the card */
  object-fit: cover; /* This makes sure the image covers the area properly */
}
.card-body {
  padding: 15px;
}
.card-title {
  font-size: 1.25rem;
}
.card-text {
  margin-bottom: 15px;
}

/* Additional CSS for Skills Section */
.skills-section h2 {
  margin-bottom: 40px;
  font-size: 2.5rem;
}

.skills-section .container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.skills-section .skills-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap; /* Prevents wrapping */
  gap: 15px; /* Adds spacing between cards */
  overflow-x: auto; /* Allows scrolling if the screen is too small */
  padding-bottom: 10px;
}

.skills-section .card {
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  flex: 1;
  min-width: 18%; /* Ensures five cards fit within a row */
  max-width: 18%;
}

.skills-section .card-img-top {
  padding: 20px;
  background-color: #f8f9fa;
  height: 180px;
  object-fit: contain;
}

.skills-section .card-body {
  padding: 15px;
}

.skills-section .card-title {
  font-size: 1.25rem;
  margin-bottom: 15px;
}

.skills-section .btn-outline-primary {
  color: #007bff;
  border-color: #007bff;
}

.skills-section .btn-outline-primary:hover {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

/* Ensure responsiveness for smaller screens */
@media (max-width: 992px) {
  .skills-section .skills-row {
    flex-wrap: wrap;
    justify-content: center;
  }

  .skills-section .card {
    min-width: 30%; /* Adjusts width for smaller screens */
    max-width: 30%;
  }
}

@media (max-width: 768px) {
  .skills-section .card {
    min-width: 45%; /* Makes two cards per row on smaller screens */
    max-width: 45%;
  }
}

@media (max-width: 576px) {
  .skills-section .card {
    min-width: 100%; /* Full width for small screens */
    max-width: 100%;
  }
}


/* Additional CSS for Contact Section */
.contact-section {
  padding: 50px 0;
}
.contact-section h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
}
.contact-section p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
.social-icon {
  width: 50px; /* Size of your icons */
  margin-bottom: 10px;
}
/* Hover effect for icons */
.social-icon:hover {
  opacity: 0.7;
}
/* Style for links in the Contact section */
.contact-section a {
  color: #fff;
  text-decoration: none; /* Removes underline from links */
  display: inline-block; /* Allows for margin on the bottom */
  margin-bottom: 10px;
}
.contact-section a:hover {
  color: #ddd; /* Color when hovering over the link */
}

/* CSS for Sticky Navbar */
.navbar {
  box-shadow: 0 2px 5px rgba(0,0,0,0.2); /* Adds a shadow for depth */
}

/* Ensure padding is added to body to avoid content being hidden behind the navbar */
body { 
  padding-top: 56px; /* Adjust this value based on the height of your navbar */
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Style for navigation bar links */
.navbar-nav .nav-link {
  color: white;
}

.navbar-nav .nav-link:hover {
  color: #f8f9fa; /* Slightly lighter white when hovering over links */
}

/* Media query for responsive navbar collapsing */
@media (max-width: 992px) {
  .navbar-collapse {
    background-color: #343a40; /* Same as navbar color for seamless look */
  }
}


</style>

</head>
<body>

<section id='about' class="about-section">
  <div class="container">
    <img src="images/about/1.jpg" alt="Profile Picture" class="about-image">
    <h2>Sandeep Bandi</h2>
        <p class="about-text">I am an AI/ML Engineer with experience in machine learning, deep learning, NLP, and data science. My expertise lies in creating scalable AI solutions, predictive models, and smart systems for real-world applications. With a solid skillset in Python, SQL, MongoDB, and cloud computing technologies such as AWS, I have hands-on experience with building and deploying end-to-end machine learning pipelines. I am a passionate innovator who continually researches and investigates emerging technologies to facilitate data-driven decision-making and boost business efficiency.</p>
    
      </div>
</section>

<!-- Experience Section -->
<section id="experience" class="experience-section bg-light">
  <div class="container">
    <h2 class="text-center">Experience</h2>
    <div class="row">
      <!-- Experience 1 -->
      <div class="col-md-12 mb-4">
        <div class="card p-3">
          <div class="row no-gutters align-items-center">
            <div class="col-md-2 text-center">
              <img src="images/experience/beworld.png" alt="Beworld Web Services Logo" style="width: 100px; height: auto;">
            </div>
            <div class="col-md-10">
              <div class="card-body">
                <h5 class="card-title">Data Science Engineer</h5>
                <h6 class="card-subtitle mb-2 text-muted">Beworld Web Services, Hyderabad </h6>
                <p>Developed a customized feed algorithm and ML-driven ranking models, boosting engagement and content relevance. Enhanced sentiment classification accuracy by 20% using NLP techniques. Built automated ETL pipelines in Python and SQL, reducing data processing time by 30%. Designed scalable backend services using Flask, MongoDB, and Python, deploying ML models on AWS.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Experience 2 -->
      <div class="col-md-12 mb-4">
        <div class="card p-3">
          <div class="row no-gutters align-items-center">
            <div class="col-md-2 text-center">
              <img src="images/experience/tcs.png" alt="TCS Logo" style="width: 100px; height: auto;">
            </div>
            <div class="col-md-10">
              <div class="card-body">
                <h5 class="card-title">ML Backend Engineer</h5>
                <h6 class="card-subtitle mb-2 text-muted">Tata Consultancy Services, Kolkata </h6>
                <p>Developed ML models for risk assessment and fraud detection, enhancing underwriting accuracy. Built predictive analytics tools to optimize policy pricing. Created client segmentation models for better marketing strategies. Automated large-scale data processing using ETL pipelines and integrated AI-driven solutions into insurance operations, improving efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Projects Section -->
<section id="projects" class="projects-section bg-light">
  <div class="container">
    <h2 class="text-center mb-4">Projects</h2>

    <!-- Swiper Slider -->
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">

        <!-- Project 1 -->
        <div class="swiper-slide">
          <div class="card">
            <img src="images/projects/1.jpg" class="card-img-top" alt="Project 1">
            <div class="card-body">
              <h5 class="card-title">Network Security</h5>
              <p class="card-text">Developed an ML model for network validation using anomaly detection techniques, improving cybersecurity by identifying potential threats and unauthorized access.</p>
              <a href="https://github.com/sandeepbandi924/End_To_End_ML_Project_NetworkSecurity/blob/main/Blog/blog.md" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Blog Post</a>
              <a href="https://github.com/sandeepbandi924/End_To_End_ML_Project_NetworkSecurity" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="swiper-slide">
          <div class="card">
            <img src="images/projects/2.jpg" class="card-img-top" alt="Project 2">
            <div class="card-body">
              <h5 class="card-title">Customer Churn Prediction</h5>
              <p class="card-text">Built an ML model to predict customer churn using behavioral data and transaction history, helping businesses enhance retention strategies and reduce attrition.</p>
              <a href="https://github.com/sandeepbandi924/ANN_Churn_Prediction/blob/main/README.md" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Blog Post</a>
              <a href="https://github.com/sandeepbandi924/End_To_End_ML_Project_NetworkSecurity" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="swiper-slide">
          <div class="card">
            <img src="images/projects/3.jpg" class="card-img-top" alt="Project 3">
            <div class="card-body">
              <h5 class="card-title">Gemstone Price Prediction</h5>
              <p class="card-text">Developed a regression model to estimate diamond prices based on carat, cut, color, and clarity, ensuring accurate valuation and market insights.</p>
              <a href="https://github.com/sandeepbandi924/Gemstone_prediction_Aws1/blob/main/README.md" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Blog Post</a>
              <a href="https://github.com/sandeepbandi924/Gemstone_prediction_Aws1" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </div>
        </div>

        <!-- Project 4 -->
        <div class="swiper-slide">
          <div class="card">
            <img src="images/projects/soiltemp.avif" class="card-img-top" alt="Project 3">
            <div class="card-body">
              <h5 class="card-title">Soil Temperature Depth Prediction</h5>
              <p class="card-text">Created an ML model to predict soil temperature at various depths using soil-related features, aiding in climate modeling and agricultural planning.</p>
              <a href="https://github.com/sandeepbandi924/Teamparature_Depth_Prediction/blob/main/README.md" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Blog Post</a>
              <a href="https://github.com/sandeepbandi924/Teamparature_Depth_Prediction" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </div>
        </div>

        <!-- Project 5 -->
        <div class="swiper-slide">
          <div class="card">
            <img src="images/projects/censusincome.jpg" class="card-img-top" alt="Project 3">
            <div class="card-body">
              <h5 class="card-title">Adult Census Income Prediction</h5>
              <p class="card-text">Built a classification model to predict income levels based on census data, analyzing key factors like education, occupation, and work hours.</p>
              <a href="https://github.com/sandeepbandi924/Census_Income_Prediction/blob/main/README.md" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Blog Post</a>
              <a href="https://github.com/sandeepbandi924/Census_Income_Prediction" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </div>
        </div>

      </div>

      <!-- Navigation Buttons -->
      <!--<div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>-->
      <div class="swiper-pagination"></div>

    </div>
  </div>
</section>

<!-- Swiper.js CDN -->
 
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css">
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>

<!-- Swiper.js Initialization -->
<script>
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, /* Show 1 slide at a time */
    spaceBetween: 20, /* Space between slides */
    loop: true, /* Infinite loop */
    autoplay: {
      delay: 1000, /* Auto slide every 3 seconds */
      disableOnInteraction: false, /* Keep autoplay running even after manual interaction */
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true, /* Enables drag functionality */
    speed: 1000, /* Smooth transition speed */
    breakpoints: {
      768: { slidesPerView: 2 }, /* Show 2 slides on tablets */
      1024: { slidesPerView: 3 } /* Show 3 slides on desktops */
    }
  });

  /* Ensure re-looping */
  swiper.on('reachEnd', function () {
    setTimeout(() => {
      swiper.slideTo(0, 1000); /* Restart from the first slide smoothly */
    }, 3000); /* Wait for autoplay delay */
  });
</script>

<!-- Skills Section -->
<section id="skills" class="skills-section bg-white">
  <div class="container">
    <h2 class="text-center">Skills</h2>
    <div class="skills-row">
      <!-- Skill 1: Python -->
      <div class="card">
        <img src="images/skills/python.png" class="card-img-top" alt="Python">
        <div class="card-body">
          <h5 class="card-title">Python</h5>
          <p class="card-text">Skilled in Python for data science, automation, and AI-driven solutions.</p>
          <a href="https://www.python.org/" class="btn btn-outline-primary">Learn More</a>
        </div>
      </div>
      <!-- Skill 2: SQL & MongoDB -->
      <div class="card">
        <img src="images/skills/sql_mongo.jpeg" class="card-img-top" alt="SQL & MongoDB">
        <div class="card-body">
          <h5 class="card-title">SQL & MongoDB</h5>
          <p class="card-text">Proficient in relational (SQL) and NoSQL (MongoDB) databases for data management.</p>
          <a href="https://www.geeksforgeeks.org/sql-tutorial/" class="btn btn-outline-primary">Learn More</a>
        </div>
      </div>
      <!-- Skill 3: Data Analysis -->
      <div class="card">
        <img src="images/skills/data_analysis.png" class="card-img-top" alt="Data Analysis">
        <div class="card-body">
          <h5 class="card-title">Data Analysis</h5>
          <p class="card-text">Experienced in EDA, visualization, and statistical methods for insights.</p>
          <a href="https://www.geeksforgeeks.org/what-is-data-analysis/" class="btn btn-outline-primary">Learn More</a>
        </div>
      </div>
      <!-- Skill 4: Machine Learning, Deep Learning, NLP -->
      <div class="card">
        <img src="images/skills/ml_dl_nlp.png" class="card-img-top" alt="ML, DL, NLP">
        <div class="card-body">
          <h5 class="card-title">ML, DL, NLP</h5>
          <p class="card-text">Hands-on expertise in machine learning, deep learning, and NLP applications.</p>
          <a href="https://blog.biostrand.ai/ai-ml-dl-and-nlp-an-overview" class="btn btn-outline-primary">Learn More</a>
        </div>
      </div>
      <!-- Skill 4: Machine Learning, Deep Learning, NLP -->
      <div class="card">
        <img src="images/skills/genai.jpeg" class="card-img-top" alt="ML, DL, NLP">
        <div class="card-body">
          <h5 class="card-title">GenAI</h5>
          <p class="card-text">Practical experience in generative AI, LLMs, and model fine-tuning.</p>
          <a href="https://generativeai.net/" class="btn btn-outline-primary">Learn More</a>
        </div>
      </div>
      <!-- Skill 5: Cloud AWS -->
      <div class="card">
        <img src="images/skills/aws.png" class="card-img-top" alt="AWS Cloud">
        <div class="card-body">
          <h5 class="card-title"> AWS </h5>
          <p class="card-text">Proficient in AWS services for AI/ML deployment, storage, and scalability.</p>
          <a href="https://aws.amazon.com/" class="btn btn-outline-primary">Learn More</a>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- Contact Me Section -->
<section id="contact" class="contact-section text-center text-white bg-dark">
  <div class="container">
    <h2>Contact Me</h2>
    <div class="row">
      <div class="col-lg-6">
        <p><i class="fas fa-envelope"></i> bandisandeep1423@gmail.com</p>
      </div>
      <div class="col-lg-6">
        <p><i class="fas fa-phone"></i>+91-9494420777</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-2 col-md-4 mb-4">
        <a href="https://linkedin.com/in/sandeepbandi" target="_blank">
          <img src="icons/linkedin.png" alt="LinkedIn" class="social-icon">
          LinkedIn
        </a>
      </div>
      <div class="col-lg-2 col-md-4 mb-4">
        <a href="https://twitter.com/SANDEEPBAND1374" target="_blank">
          <img src="icons/twitter.png" alt="Twitter" class="social-icon">
          Twitter
        </a>
      </div>
      <div class="col-lg-2 col-md-4 mb-4">
        <a href="https://github.com/sandeepbandi924" target="_blank">
          <img src="icons/github.png" alt="GitHub" class="social-icon">
          GitHub
        </a>
      </div>
      <div class="col-lg-2 col-md-4 mb-4">
        <a href="https://leetcode.com/u/sandeepbandi924/" target="_blank">
          <img src="icons/leetcode.png" alt="Leetcode" class="social-icon">
          Leetcode
        </a>
      </div>
      <div class="col-lg-2 col-md-4 mb-4">
        <a href="https://www.youtube.com/@sandeepbandi924" target="_blank">
          <img src="icons/youtube.png" alt="YouTube" class="social-icon">
          YouTube
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Sticky Navigation Bar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#home">Portfolio</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#experience">Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


<!-- Bootstrap JS and dependencies (jQuery and Popper) -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.9.5/dist/umd/popper.min.js"></script>
<!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script> -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>