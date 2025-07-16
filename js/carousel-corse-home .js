class MyCarouselCorseHome extends HTMLElement {
  connectedCallback() {
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "css/carousel-corse.css";
    document.head.appendChild(styleLink);
    this.innerHTML = `
<section class="project-portfolio">
  <div id="portfolioCarousel" class="portfolio-slider carousel slide carousel-fade">
    <div class="carousel-inner">

      <!-- Slide 1 -->
      <div class="carousel-item active">
        <div class="portfolio-grid">
          <!-- Card 1 -->
          <div class="portfolio-card__container">
            <div class="portfolio-item">
              <img src="images/pc.jpg" class="portfolio-item__thumbnail" alt="Web Design Project" />
              <div class="portfolio-item__details">
                <h3 class="portfolio-item__heading">Creating Perfect Website</h3>
                <p class="portfolio-item__tag">Web Developer</p>
                
                <div class="portfolio-item__status">
                  <div class="status-info">
                    <span class="status-label">Progress</span>
                    <span class="status-percentage text-primary">85%</span>
                  </div>
                  <div class="status-bar ">
                    <div class="status-progress bg-primary" style="width: 85%;"></div>
                  </div>
                </div>
                
                <div class="portfolio-item__meta">
                  <div class="deadline-indicator">
                    <img src="images/clock icon.png" class="deadline-icon" alt="Deadline" width="20">
                    <span class="deadline-text">4 Days Left</span>
                  </div>
                  <div class="team-members">
                    <img src="images/profile1.png" class="team-avatar" alt="Team Member" />
                    <img src="images/profile2.jpg" class="team-avatar" alt="Team Member" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="portfolio-card__container">
            <div class="portfolio-item">
              <img src="images/pc1.jpg" class="portfolio-item__thumbnail" alt="Mobile App Design" />
              <div class="portfolio-item__details">
                <h3 class="portfolio-item__heading">Creating Mobile App Design</h3>
                <p class="portfolio-item__tag">UI UX Design</p>
                
                <div class="portfolio-item__status">
                  <div class="status-info">
                    <span class="status-label">Progress</span>
                    <span class="status-percentage text-primary">75%</span>
                  </div>
                  <div class="status-bar">
                    <div class="status-progress bg-primary" style="width: 75%;"></div>
                  </div>
                </div>
                
                <div class="portfolio-item__meta">
                  <div class="deadline-indicator">
                    <img src="images/clock icon.png" class="deadline-icon" alt="Deadline" width="20">
                    <span class="deadline-text">3 Days Left</span>
                  </div>
                  <div class="team-members">
                    <img src="images/profile1.png" class="team-avatar" alt="Team Member" />
                    <img src="images/profile2.jpg" class="team-avatar" alt="Team Member" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 2 -->
      <div class="carousel-item">
        <div class="portfolio-grid">
          <!-- Card 3 -->
          <div class="portfolio-card__container">
            <div class="portfolio-item">
              <img src="images/pc2.jpg" class="portfolio-item__thumbnail" alt="Mobile App Design" />
              <div class="portfolio-item__details">
                <h3 class="portfolio-item__heading">Creating Mobile App Design</h3>
                <p class="portfolio-item__tag">UI UX Design</p>
                
                <div class="portfolio-item__status">
                  <div class="status-info">
                    <span class="status-label">Progress</span>
                    <span class="status-percentage text-primary ">75%</span>
                  </div>
                  <div class="status-bar">
                    <div class="status-progress bg-primary" style="width: 75%;"></div>
                  </div>
                </div>
                
                <div class="portfolio-item__meta">
                  <div class="deadline-indicator">
                    <img src="images/clock icon.png" class="deadline-icon" alt="Deadline" width="20">
                    <span class="deadline-text">2 Days Left</span>
                  </div>
                  <div class="team-members">
                    <img src="images/profile1.png" class="team-avatar" alt="Team Member" />
                    <img src="images/profile2.jpg" class="team-avatar" alt="Team Member" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="portfolio-card__container">
            <div class="portfolio-item">
              <img src="images/pc3.jpg" class="portfolio-item__thumbnail" alt="Mobile App Development" />
              <div class="portfolio-item__details">
                <h3 class="portfolio-item__heading">Creating Awesome Mobile Apps</h3>
                <p class="portfolio-item__tag">UI UX Design</p>
                
                <div class="portfolio-item__status">
                  <div class="status-info">
                    <span class="status-label">Progress</span>
                    <span class="status-percentage text-primary">75%</span>
                  </div>
                  <div class="status-bar">
                    <div class="status-progress bg-primary" style="width: 75%;"></div>
                  </div>
                </div>
                
                <div class="portfolio-item__meta">
                  <div class="deadline-indicator">
                    <img src="images/clock icon.png" class="deadline-icon" alt="Deadline" width="20">
                    <span class="deadline-text">1 Day Left</span>
                  </div>
                  <div class="team-members">
                    <img src="images/profile1.png" class="team-avatar" alt="Team Member" />
                    <img src="images/profile2.jpg" class="team-avatar" alt="Team Member" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Controls -->
    <button class="slider-nav slider-nav--prev" type="button" data-bs-target="#portfolioCarousel" data-bs-slide="prev">
      <span class="nav-arrow"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="slider-nav slider-nav--next" type="button" data-bs-target="#portfolioCarousel" data-bs-slide="next">
      <span class="nav-arrow"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</section>
`;
  }
}

customElements.define("my-carousel-corse-home", MyCarouselCorseHome);
