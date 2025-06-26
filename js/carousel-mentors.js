class MyCarouselMentors extends HTMLElement {
  connectedCallback() {
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "../css/Mentors.css";
    document.head.appendChild(styleLink);

    this.innerHTML = `
        <section class="container py-4">
  <div id="mentorCarousel" class="carousel slide">
    <div class="carousel-inner">
      
      <!-- Slide 1 -->
      <div class="carousel-item active">
        <div class="row justify-content-center g-4">
          <!-- Card 1 -->
          <div class="col-12 col-md-4 col-lg-4 col-sm-6">
            <div class="card p-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <img src="images/profile1.png" class="rounded-circle me-2" width="45" height="45" />
                  <div>
                    <h6 class="mb-0">Abraham Lincoln</h6>
                    <small class="text-muted">3D Design</small>
                  </div>
                </div>
                <span class="text-primary fw-semibold">Followed</span>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-3">
                <div class="d-flex align-items-center">
                  <img src="images/note.png" width="20" class="me-1" />
                  <small class="me-3">40 Task</small>
                </div>
                <div class="d-flex align-items-center">
                  <img src="images/star.png" width="18" class="me-1" />
                  <small>4.9 (610 Reviews)</small>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="col-12 col-md-4 col-lg-4 col-sm-6">
            <div class="card p-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <img src="images/profile1.png" class="rounded-circle me-2" width="45" height="45" />
                  <div>
                    <h6 class="mb-0">Sarah Johnson</h6>
                    <small class="text-muted">UI Designer</small>
                  </div>
                </div>
                <span class="text-primary fw-semibold">Followed</span>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-3">
                <div class="d-flex align-items-center">
                  <img src="images/note.png" width="20" class="me-1" />
                  <small class="me-3">25 Task</small>
                </div>
                <div class="d-flex align-items-center">
                  <img src="images/star.png" width="18" class="me-1" />
                  <small>4.7 (420 Reviews)</small>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="col-12 col-md-4 col-lg-4 col-sm-6">
            <div class="card p-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <img src="images/profile2.jpg" class="rounded-circle me-2" width="45" height="45" />
                  <div>
                    <h6 class="mb-0">John Doe</h6>
                    <small class="text-muted">Illustrator</small>
                  </div>
                </div>
                <span class="text-primary fw-semibold">Followed</span>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-3">
                <div class="d-flex align-items-center">
                  <img src="images/note.png" width="20" class="me-1" />
                  <small class="me-3">30 Task</small>
                </div>
                <div class="d-flex align-items-center">
                  <img src="images/star.png" width="18" class="me-1" />
                  <small>4.8 (530 Reviews)</small>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Slide 2 -->
      <div class="carousel-item">
        <div class="row justify-content-center g-4">
        <div class="col-12 col-md-4 col-lg-4 col-sm-6">
            <div class="card p-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <img src="images/profile1.png" class="rounded-circle me-2" width="45" height="45" />
                  <div>
                    <h6 class="mb-0">Abraham Lincoln</h6>
                    <small class="text-muted">3D Design</small>
                  </div>
                </div>
                <span class="text-primary fw-semibold">Followed</span>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-3">
                <div class="d-flex align-items-center">
                  <img src="images/note.png" width="20" class="me-1" />
                  <small class="me-3">40 Task</small>
                </div>
                <div class="d-flex align-items-center">
                  <img src="images/star.png" width="18" class="me-1" />
                  <small>4.9 (610 Reviews)</small>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-12 col-md-4 col-lg-4 col-sm-6">
            <div class="card p-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <img src="images/profile1.png" class="rounded-circle me-2" width="45" height="45" />
                  <div>
                    <h6 class="mb-0">Abraham Lincoln</h6>
                    <small class="text-muted">3D Design</small>
                  </div>
                </div>
                <span class="text-primary fw-semibold">Followed</span>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-3">
                <div class="d-flex align-items-center">
                  <img src="images/note.png" width="20" class="me-1" />
                  <small class="me-3">40 Task</small>
                </div>
                <div class="d-flex align-items-center">
                  <img src="images/star.png" width="18" class="me-1" />
                  <small>4.9 (610 Reviews)</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-4 col-sm-6">
            <div class="card p-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <img src="images/profile1.png" class="rounded-circle me-2" width="45" height="45" />
                  <div>
                    <h6 class="mb-0">Abraham Lincoln</h6>
                    <small class="text-muted">3D Design</small>
                  </div>
                </div>
                <span class="text-primary fw-semibold">Followed</span>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-3">
                <div class="d-flex align-items-center">
                  <img src="images/note.png" width="20" class="me-1" />
                  <small class="me-3">40 Task</small>
                </div>
                <div class="d-flex align-items-center">
                  <img src="images/star.png" width="18" class="me-1" />
                  <small>4.9 (610 Reviews)</small>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Controls -->
    <button class="carousel-control-prev" type="button" data-bs-target="#mentorCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon bg-dark rounded-circle p-3"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#mentorCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon bg-dark rounded-circle p-3"></span>
    </button>
  </div>
</section>



    `;
  }
}

customElements.define("my-carousel-mentors", MyCarouselMentors);
