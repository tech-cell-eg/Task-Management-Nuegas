class MyCarouselCorseTask extends HTMLElement {
  connectedCallback() {
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "css/carousel-task.css";
    document.head.appendChild(styleLink);

    this.innerHTML = `
<section class="task-carousel-container px-3">
        <!-- Carousel -->
        <div id="taskCarousel" class="carousel slide carousel-fade task-carousel-wrapper">
            <div class="carousel-inner">
                <!-- Slide 1 -->
                <div class="carousel-item active">
                    <div class="row justify-content-center g-3">
                        <!-- Card 1 -->
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="card task-carousel-card">
                                <img src="images/pc.jpg" class="task-carousel-card-img" alt="Web Design">
                                <div class="task-carousel-card-body">
                                    <h5 class="task-carousel-card-title">Creating Perfect Website</h5>
                                    <p class="task-carousel-card-text">Web Developer</p>

                                    <div class="task-carousel-progress-container">
                                        <div class="task-carousel-progress-label">
                                            <small class="text-muted">Progress</small>
                                            <small class="text-primary fw-semibold">85%</small>
                                        </div>
                                        <div class="progress task-carousel-progress-bar">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                    <div class="task-carousel-footer">
                                        <div class="task-carousel-time">
                                            <i class="fa-solid fa-clock task-carousel-time-icon" alt="clock"></i>
                                            <small class="text-muted">4 Days Left</small>
                                        </div>
                                          <div class="task-carousel-avatar-group">
                                            <img src="images/Photo 1.png" class="task-carousel-avatar" />
                                            <img src="images/Photo 2.png" class="task-carousel-avatar" />
                                            <img src="images/Photo 3.png" class="task-carousel-avatar" />
                                            <img src="images/Photo 4.png" class="task-carousel-avatar" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Card 2 -->
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="card task-carousel-card">
                                <img src="images/pc2.jpg" class="task-carousel-card-img" alt="App Design">
                                <div class="task-carousel-card-body">
                                    <h5 class="task-carousel-card-title">Creating Mobile App Design</h5>
                                    <p class="task-carousel-card-text">UI UX Design</p>

                                    <div class="task-carousel-progress-container">
                                        <div class="task-carousel-progress-label">
                                            <small class="text-muted">Progress</small>
                                            <small class="text-primary fw-semibold">75%</small>
                                        </div>
                                        <div class="progress task-carousel-progress-bar">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                    <div class="task-carousel-footer">
                                        <div class="task-carousel-time">
                                            <i class="fa-solid fa-clock task-carousel-time-icon" alt="clock"></i>
                                            <small class="text-muted">3 Days Left</small>
                                        </div>
                                          <div class="task-carousel-avatar-group">
                                            <img src="images/Photo 1.png" class="task-carousel-avatar" />
                                            <img src="images/Photo 2.png" class="task-carousel-avatar" />
                                            <img src="images/Photo 3.png" class="task-carousel-avatar" />
                                            <img src="images/Photo 4.png" class="task-carousel-avatar" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Card 3 -->
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="card task-carousel-card">
                                <img src="images/pc3.jpg" class="task-carousel-card-img" alt="Mobile App">
                                <div class="task-carousel-card-body">
                                    <h5 class="task-carousel-card-title">Creating Awesome Mobile Apps</h5>
                                    <p class="task-carousel-card-text">UI UX Design</p>

                                    <div class="task-carousel-progress-container">
                                        <div class="task-carousel-progress-label">
                                            <small class="text-muted">Progress</small>
                                            <small class="text-primary fw-semibold">75%</small>
                                        </div>
                                        <div class="progress task-carousel-progress-bar">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                    <div class="task-carousel-footer">
                                        <div class="task-carousel-time">
                                            <i class="fa-solid fa-clock task-carousel-time-icon" alt="clock"></i>
                                            <small class="text-muted">2 Days Left</small>
                                        </div>
                                          <div class="task-carousel-avatar-group">
                                            <img src="images/Photo 1.png" class="task-carousel-avatar" />
                                            <img src="images/Photo 2.png" class="task-carousel-avatar" />
                                            <img src="images/Photo 3.png" class="task-carousel-avatar" />
                                            <img src="images/Photo 4.png" class="task-carousel-avatar" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Slide 2 -->
                <div class="carousel-item">
                    <div class="row justify-content-center g-3">
                        <!-- Card 4 -->
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="card task-carousel-card">
                                <img src="images/pc.jpg" class="task-carousel-card-img" alt="Design">
                                <div class="task-carousel-card-body">
                                    <h5 class="task-carousel-card-title">Creating Mobile App Design</h5>
                                    <p class="task-carousel-card-text">UI UX Design</p>

                                    <div class="task-carousel-progress-container">
                                        <div class="task-carousel-progress-label">
                                            <small class="text-muted">Progress</small>
                                            <small class="text-primary fw-semibold">75%</small>
                                        </div>
                                        <div class="progress task-carousel-progress-bar">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                    <div class="task-carousel-footer">
                                        <div class="task-carousel-time">
                                            <i class="fa-solid fa-clock task-carousel-time-icon" alt="clock"></i>
                                            <small class="text-muted">3 Days Left</small>
                                        </div>
                                          <div class="task-carousel-avatar-group">
                                            <img src="images/Photo 1.png" class="task-carousel-avatar" />
                                            <img src="images/Photo 2.png" class="task-carousel-avatar" />
                                            <img src="images/Photo 3.png" class="task-carousel-avatar" />
                                            <img src="images/Photo 4.png" class="task-carousel-avatar" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Card 5 -->
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="card task-carousel-card">
                                <img src="images/pc5.jpg" class="task-carousel-card-img" alt="UX Design">
                                <div class="task-carousel-card-body">
                                    <h5 class="task-carousel-card-title">Creating Mobile App Design</h5>
                                    <p class="task-carousel-card-text">UI UX Design</p>

                                    <div class="task-carousel-progress-container">
                                        <div class="task-carousel-progress-label">
                                            <small class="text-muted">Progress</small>
                                            <small class="text-primary fw-semibold">75%</small>
                                        </div>
                                        <div class="progress task-carousel-progress-bar">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                    <div class="task-carousel-footer">
                                        <div class="task-carousel-time">
                                            <i class="fa-solid fa-clock task-carousel-time-icon" alt="clock"></i>
                                            <small class="text-muted">3 Days Left</small>
                                        </div>
                                          <div class="task-carousel-avatar-group">
                                            <img src="images/Photo 1.png" class="task-carousel-avatar" />
                                            <img src="images/Photo 2.png" class="task-carousel-avatar" />
                                            <img src="images/Photo 3.png" class="task-carousel-avatar" />
                                            <img src="images/Photo 4.png" class="task-carousel-avatar" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Card 6 -->
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="card task-carousel-card">
                                <img src="images/pc6.jpg" class="task-carousel-card-img" alt="Interface">
                                <div class="task-carousel-card-body">
                                    <h5 class="task-carousel-card-title">Creating Mobile App Design</h5>
                                    <p class="task-carousel-card-text">UI UX Design</p>

                                    <div class="task-carousel-progress-container">
                                        <div class="task-carousel-progress-label">
                                            <small class="text-muted">Progress</small>
                                            <small class="text-primary fw-semibold">75%</small>
                                        </div>
                                        <div class="progress task-carousel-progress-bar">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                    <div class="task-carousel-footer">
                                        <div class="task-carousel-time">
                                            <i class="fa-solid fa-clock task-carousel-time-icon" alt="clock"></i>
                                            <small class="text-muted">3 Days Left</small>
                                        </div>
                                          <div class="task-carousel-avatar-group">
                                            <img src="images/Photo 1.png" class="task-carousel-avatar" />
                                            <img src="images/Photo 2.png" class="task-carousel-avatar" />
                                            <img src="images/Photo 3.png" class="task-carousel-avatar" />
                                            <img src="images/Photo 4.png" class="task-carousel-avatar" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Navigation Arrows -->
            <button class="task-carousel-nav-arrow task-carousel-nav-prev carousel-control-prev" type="button" data-bs-target="#taskCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="task-carousel-nav-arrow task-carousel-nav-next carousel-control-next" type="button" data-bs-target="#taskCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>
    `;
  }
}

customElements.define("my-carousel-task", MyCarouselCorseTask);

class MyCarouselTimeLimit extends HTMLElement {
  connectedCallback() {
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "css/carousel-task.css";
    document.head.appendChild(styleLink);

    this.innerHTML = `
      <section class="project-carousel">
    <!-- Carousel -->
    <div id="projectCarousel" class="carousel slide carousel-fade project-carousel__wrapper">
        <div class="carousel-inner">
            <!-- Slide 1 -->
            <div class="carousel-item active">
                <div class="row justify-content-center g-3">
                    <!-- Card 1 -->
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="card project-card">
                            <img src="images/pc.jpg" class="project-card__image" alt="Web Design">
                            <div class="project-card__content">
                                <h5 class="project-card__title">Creating Perfect Website</h5>
                                <p class="project-card__category">Web Developer</p>

                                <div class="project-card__progress">
                                    <div class="project-card__progress-info">
                                        <small class="project-card__progress-label">Progress</small>
                                        <small class="project-card__progress-value text-primary ">85%</small>
                                    </div>
                                    <div class="progress project-card__progress-bar">
                                        <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div class="project-card__footer">
                                    <div class="project-card__deadline">
                                        <i class="fa-solid fa-clock project-card__deadline-icon"></i>
                                        <small class="project-card__deadline-text">4 Days Left</small>
                                    </div>
                                    <div class="project-card__team">
                                        <img src="images/Photo 1.png" class="project-card__team-avatar" alt="Team member" />
                                        <img src="images/Photo 2.png" class="project-card__team-avatar" alt="Team member" />
                                        <img src="images/Photo 3.png" class="project-card__team-avatar" alt="Team member" />
                                        <img src="images/Photo 4.png" class="project-card__team-avatar" alt="Team member" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="card project-card">
                            <img src="images/pc2.jpg" class="project-card__image" alt="App Design">
                            <div class="project-card__content">
                                <h5 class="project-card__title">Creating Mobile App Design</h5>
                                <p class="project-card__category">UI UX Design</p>

                                <div class="project-card__progress">
                                    <div class="project-card__progress-info">
                                        <small class="project-card__progress-label">Progress</small>
                                        <small class="project-card__progress-value text-primary">75%</small>
                                    </div>
                                    <div class="progress project-card__progress-bar">
                                        <div class="progress-bar " role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div class="project-card__footer">
                                    <div class="project-card__deadline">
                                        <i class="fa-solid fa-clock project-card__deadline-icon"></i>
                                        <small class="project-card__deadline-text ">3 Days Left</small>
                                    </div>
                                    <div class="project-card__team">
                                        <img src="images/Photo 1.png" class="project-card__team-avatar" alt="Team member" />
                                        <img src="images/Photo 2.png" class="project-card__team-avatar" alt="Team member" />
                                        <img src="images/Photo 3.png" class="project-card__team-avatar" alt="Team member" />
                                        <img src="images/Photo 4.png" class="project-card__team-avatar" alt="Team member" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="card project-card">
                            <img src="images/pc3.jpg" class="project-card__image" alt="Mobile App">
                            <div class="project-card__content">
                                <h5 class="project-card__title">Creating Awesome Mobile Apps</h5>
                                <p class="project-card__category">UI UX Design</p>

                                <div class="project-card__progress">
                                    <div class="project-card__progress-info">
                                        <small class="project-card__progress-label">Progress</small>
                                        <small class="project-card__progress-value text-primary">75%</small>
                                    </div>
                                    <div class="progress project-card__progress-bar">
                                        <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div class="project-card__footer">
                                    <div class="project-card__deadline">
                                        <i class="fa-solid fa-clock project-card__deadline-icon"></i>
                                        <small class="project-card__deadline-text">2 Days Left</small>
                                    </div>
                                    <div class="project-card__team">
                                        <img src="images/Photo 1.png" class="project-card__team-avatar" alt="Team member" />
                                        <img src="images/Photo 2.png" class="project-card__team-avatar" alt="Team member" />
                                        <img src="images/Photo 3.png" class="project-card__team-avatar" alt="Team member" />
                                        <img src="images/Photo 4.png" class="project-card__team-avatar" alt="Team member" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slide 2 -->
            <div class="carousel-item">
                <div class="row justify-content-center g-3">
                    <!-- Card 4 -->
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="card project-card">
                            <img src="images/pc4.jpg" class="project-card__image" alt="Design">
                            <div class="project-card__content">
                                <h5 class="project-card__title">Creating Mobile App Design</h5>
                                <p class="project-card__category">UI UX Design</p>

                                <div class="project-card__progress">
                                    <div class="project-card__progress-info">
                                        <small class="project-card__progress-label">Progress</small>
                                        <small class="project-card__progress-value text-primary">75%</small>
                                    </div>
                                    <div class="progress project-card__progress-bar">
                                        <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div class="project-card__footer">
                                    <div class="project-card__deadline">
                                        <i class="fa-solid fa-clock project-card__deadline-icon"></i>
                                        <small class="project-card__deadline-text">3 Days Left</small>
                                    </div>
                                    <div class="project-card__team">
                                        <img src="images/Photo 1.png" class="project-card__team-avatar" alt="Team member" />
                                        <img src="images/Photo 2.png" class="project-card__team-avatar" alt="Team member" />
                                        <img src="images/Photo 3.png" class="project-card__team-avatar" alt="Team member" />
                                        <img src="images/Photo 4.png" class="project-card__team-avatar" alt="Team member" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Card 5 -->
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="card project-card">
                            <img src="images/pc5.jpg" class="project-card__image" alt="UX Design">
                            <div class="project-card__content">
                                <h5 class="project-card__title">Creating Mobile App Design</h5>
                                <p class="project-card__category">UI UX Design</p>

                                <div class="project-card__progress">
                                    <div class="project-card__progress-info">
                                        <small class="project-card__progress-label">Progress</small>
                                        <small class="project-card__progress-value text-primary">75%</small>
                                    </div>
                                    <div class="progress project-card__progress-bar">
                                        <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div class="project-card__footer">
                                    <div class="project-card__deadline">
                                        <i class="fa-solid fa-clock project-card__deadline-icon"></i>
                                        <small class="project-card__deadline-text">3 Days Left</small>
                                    </div>
                                    <div class="project-card__team">
                                        <img src="images/Photo 1.png" class="project-card__team-avatar" alt="Team member" />
                                        <img src="images/Photo 2.png" class="project-card__team-avatar" alt="Team member" />
                                        <img src="images/Photo 3.png" class="project-card__team-avatar" alt="Team member" />
                                        <img src="images/Photo 4.png" class="project-card__team-avatar" alt="Team member" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Card 6 -->
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="card project-card">
                            <img src="images/pc6.jpg" class="project-card__image" alt="Interface">
                            <div class="project-card__content">
                                <h5 class="project-card__title">Creating Mobile App Design</h5>
                                <p class="project-card__category">UI UX Design</p>

                                <div class="project-card__progress">
                                    <div class="project-card__progress-info">
                                        <small class="project-card__progress-label">Progress</small>
                                        <small class="project-card__progress-value text-primary">75%</small>
                                    </div>
                                    <div class="progress project-card__progress-bar">
                                        <div class="progress-bar" role="progressbar text-primary" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div class="project-card__footer">
                                    <div class="project-card__deadline">
                                        <i class="fa-solid fa-clock project-card__deadline-icon"></i>
                                        <small class="project-card__deadline-text">3 Days Left</small>
                                    </div>
                                    <div class="project-card__team">
                                        <img src="images/Photo 1.png" class="project-card__team-avatar" alt="Team member" />
                                        <img src="images/Photo 2.png" class="project-card__team-avatar" alt="Team member" />
                                        <img src="images/Photo 3.png" class="project-card__team-avatar" alt="Team member" />
                                        <img src="images/Photo 4.png" class="project-card__team-avatar" alt="Team member" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Arrows -->
        <button class="carousel-control-prev project-carousel__control" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next project-carousel__control" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</section>
    `;
  }
}

customElements.define("my-carousel-timelimit", MyCarouselTimeLimit);
