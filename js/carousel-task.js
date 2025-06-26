class MyCarouselCorseTask extends HTMLElement {
  connectedCallback() {
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "css/carousel-task.css";
    document.head.appendChild(styleLink);

    this.innerHTML = `
      <section class="main-card px-3">
        <div id="carouselTask" class="carousel slide carousel-fade carousel-wrapper mx-auto">
           <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row justify-content-center g-3">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card custom-card">
            <img src="images/pc.jpg" class="card-img-top" alt="profile1" />
            <div class="card-body">
              <h5 class="card-title">Creating Perfect Website</h5>
              <p class="card-text">Web Developer</p>

              <div class="mb-2 d-flex justify-content-between align-items-center">
                <small class="text-muted">Progress</small>
                <small class="text-primary fw-semibold">85%</small>
              </div>

              <div class="progress mb-3" style="height: 6px;">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 75%;" aria-valuenow="75"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center gap-1">
                  <img src="images/clock icon.png" class="icon-dark" width="20" alt="clock">
                  <small class="text-muted">4 Days Left</small>
                </div>
                <div class="avatar-group">
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card custom-card">
            <img src="images/pc1.jpg" class="card-img-top" alt="profile1" />
            <div class="card-body">
              <h5 class="card-title">Creating Mobile App Design</h5>
              <p class="card-text">UI UX Design</p>

              <div class="mb-2 d-flex justify-content-between align-items-center">
                <small class="text-muted">Progress</small>
                <small class="text-primary fw-semibold">75%</small>
              </div>

              <div class="progress mb-3" style="height: 6px;">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 75%;" aria-valuenow="75"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center gap-1">
                  <img src="images/clock icon.png" class="icon-dark" width="20" alt="clock">
                  <small class="text-muted">3 Days Left</small>
                </div>
                <div class="avatar-group">
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                </div>
              </div>

            </div>
          </div>
        </div>
         <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card custom-card">
            <img src="images/pc2.jpg" class="card-img-top" alt="profile1" />
            <div class="card-body">
              <h5 class="card-title">Creating Awesome Mobile Apps</h5>
              <p class="card-text">UI UX Design</p>

              <div class="mb-2 d-flex justify-content-between align-items-center">
                <small class="text-muted">Progress</small>
                <small class="text-primary fw-semibold">75%</small>
              </div>

              <div class="progress mb-3" style="height: 6px;">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 75%;" aria-valuenow="75"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center gap-1">
                  <img src="images/clock icon.png" class="icon-dark" width="20" alt="clock">
                  <small class="text-muted">2 Days Left</small>
                </div>
                <div class="avatar-group">
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="row justify-content-center g-3">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card custom-card">
            <img src="images/pc3.jpg" class="card-img-top" alt="profile1" />
            <div class="card-body">
              <h5 class="card-title">Creating Mobile App Design</h5>
              <p class="card-text">UI UX Design</p>

              <div class="mb-2 d-flex justify-content-between align-items-center">
                <small class="text-muted">Progress</small>
                <small class="text-primary fw-semibold">75%</small>
              </div>

              <div class="progress mb-3" style="height: 6px;">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 75%;" aria-valuenow="75"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center gap-1">
                  <img src="images/clock icon.png" class="icon-dark" width="20" alt="clock">
                  <small class="text-muted">3 Days Left</small>
                </div>
                <div class="avatar-group">
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card custom-card">
            <img src="images/pc4.jpg" class="card-img-top" alt="profile1" />
            <div class="card-body">
              <h5 class="card-title">Creating Mobile App Design</h5>
              <p class="card-text">UI UX Design</p>

              <div class="mb-2 d-flex justify-content-between align-items-center">
                <small class="text-muted">Progress</small>
                <small class="text-primary fw-semibold">75%</small>
              </div>

              <div class="progress mb-3" style="height: 6px;">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 75%;" aria-valuenow="75"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center gap-1">
                  <img src="images/clock icon.png" class="icon-dark" width="20" alt="clock">
                  <small class="text-muted">3 Days Left</small>
                </div>
                <div class="avatar-group">
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                </div>
              </div>

            </div>
          </div>
        </div>
         <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card custom-card">
            <img src="images/pc5.jpg" class="card-img-top" alt="profile1" />
            <div class="card-body">
              <h5 class="card-title">Creating Mobile App Design</h5>
              <p class="card-text">UI UX Design</p>

              <div class="mb-2 d-flex justify-content-between align-items-center">
                <small class="text-muted">Progress</small>
                <small class="text-primary fw-semibold">75%</small>
              </div>

              <div class="progress mb-3" style="height: 6px;">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 75%;" aria-valuenow="75"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center gap-1">
                  <img src="images/clock icon.png" class="icon-dark" width="20" alt="clock">
                  <small class="text-muted">3 Days Left</small>
                </div>
                <div class="avatar-group">
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

          <!-- Arrows -->
          <button class="carousel-control-prev custom-arrow" type="button" data-bs-target="#carouselTask" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next custom-arrow" type="button" data-bs-target="#carouselTask" data-bs-slide="next">
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
      <section class="main-card px-3">
        <div id="carouselTimeLimit" class="carousel slide carousel-fade carousel-wrapper mx-auto">
                     <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row justify-content-center g-3">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card custom-card">
            <img src="images/pc6.jpg" class="card-img-top" alt="profile1" />
            <div class="card-body">
              <h5 class="card-title">Creating Perfect Website</h5>
              <p class="card-text">Web Developer</p>

              <div class="mb-2 d-flex justify-content-between align-items-center">
                <small class="text-muted">Progress</small>
                <small class="text-primary fw-semibold">85%</small>
              </div>

              <div class="progress mb-3" style="height: 6px;">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 75%;" aria-valuenow="75"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center gap-1">
                  <img src="images/clock icon.png" class="icon-dark" width="20" alt="clock">
                  <small class="text-muted">4 Days Left</small>
                </div>
                <div class="avatar-group">
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card custom-card">
            <img src="images/pc7.jpg" class="card-img-top" alt="profile1" />
            <div class="card-body">
              <h5 class="card-title">Creating Mobile App Design</h5>
              <p class="card-text">UI UX Design</p>

              <div class="mb-2 d-flex justify-content-between align-items-center">
                <small class="text-muted">Progress</small>
                <small class="text-primary fw-semibold">75%</small>
              </div>

              <div class="progress mb-3" style="height: 6px;">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 75%;" aria-valuenow="75"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center gap-1">
                  <img src="images/clock icon.png" class="icon-dark" width="20" alt="clock">
                  <small class="text-muted">3 Days Left</small>
                </div>
                <div class="avatar-group">
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                </div>
              </div>

            </div>
          </div>
        </div>
         <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card custom-card">
            <img src="images/pc.jpg" class="card-img-top" alt="profile1" />
            <div class="card-body">
              <h5 class="card-title">Creating Awesome Mobile Apps</h5>
              <p class="card-text">UI UX Design</p>

              <div class="mb-2 d-flex justify-content-between align-items-center">
                <small class="text-muted">Progress</small>
                <small class="text-primary fw-semibold">75%</small>
              </div>

              <div class="progress mb-3" style="height: 6px;">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 75%;" aria-valuenow="75"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center gap-1">
                  <img src="images/clock icon.png" class="icon-dark" width="20" alt="clock">
                  <small class="text-muted">2 Days Left</small>
                </div>
                <div class="avatar-group">
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="row justify-content-center g-3">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card custom-card">
            <img src="images/pc1.jpg" class="card-img-top" alt="profile1" />
            <div class="card-body">
              <h5 class="card-title">Creating Mobile App Design</h5>
              <p class="card-text">UI UX Design</p>

              <div class="mb-2 d-flex justify-content-between align-items-center">
                <small class="text-muted">Progress</small>
                <small class="text-primary fw-semibold">75%</small>
              </div>

              <div class="progress mb-3" style="height: 6px;">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 75%;" aria-valuenow="75"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center gap-1">
                  <img src="images/clock icon.png" class="icon-dark" width="20" alt="clock">
                  <small class="text-muted">3 Days Left</small>
                </div>
                <div class="avatar-group">
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card custom-card">
            <img src="images/pc2.jpg" class="card-img-top" alt="profile1" />
            <div class="card-body">
              <h5 class="card-title">Creating Mobile App Design</h5>
              <p class="card-text">UI UX Design</p>

              <div class="mb-2 d-flex justify-content-between align-items-center">
                <small class="text-muted">Progress</small>
                <small class="text-primary fw-semibold">75%</small>
              </div>

              <div class="progress mb-3" style="height: 6px;">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 75%;" aria-valuenow="75"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center gap-1">
                  <img src="images/clock icon.png" class="icon-dark" width="20" alt="clock">
                  <small class="text-muted">3 Days Left</small>
                </div>
                <div class="avatar-group">
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                </div>
              </div>

            </div>
          </div>
        </div>
         <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card custom-card">
            <img src="images/pc3.jpg" class="card-img-top" alt="profile1" />
            <div class="card-body">
              <h5 class="card-title">Creating Mobile App Design</h5>
              <p class="card-text">UI UX Design</p>

              <div class="mb-2 d-flex justify-content-between align-items-center">
                <small class="text-muted">Progress</small>
                <small class="text-primary fw-semibold">75%</small>
              </div>

              <div class="progress mb-3" style="height: 6px;">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 75%;" aria-valuenow="75"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center gap-1">
                  <img src="images/clock icon.png" class="icon-dark" width="20" alt="clock">
                  <small class="text-muted">3 Days Left</small>
                </div>
                <div class="avatar-group">
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                  <img src="images/profile1.png" class="rounded-circle avatar-corse" />
                  <img src="images/profile2.jpg" class="rounded-circle avatar-corse" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
        
        <button class="carousel-control-prev custom-arrow" type="button" data-bs-target="#carouselTimeLimit" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next custom-arrow" type="button" data-bs-target="#carouselTimeLimit" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
            <span class="visually-hidden">Next</span>
          </button>
      </section>
    `;
  }
}

customElements.define("my-carousel-timelimit", MyCarouselTimeLimit);
