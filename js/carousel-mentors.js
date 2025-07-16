class MyCarouselMentors extends HTMLElement {
  connectedCallback() {
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "../css/Mentors.css";
    document.head.appendChild(styleLink);

    this.innerHTML = `
        <section class="mentor-section-wrapper">
              <div class="time-limit-header d-flex justify-content-between align-items-center">
            <h4 class="fw-semibold">Time Limit</h4>
        </div>
            <div id="mentorProfileCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <!-- Slide 1 -->
                    <div class="carousel-item active">
                        <div class="row g-4">
                            <!-- Card 1 -->
                            <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div class="mentor-profile-card card p-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <img src="https://randomuser.me/api/portraits/men/32.jpg" class="rounded-circle mentor-profile-image me-3" alt="Abraham Lincoln">
                                            <div>
                                                <h6 class="mb-0 fw-bold">Abraham Lincoln</h6>
                                                <small class="text-muted">3D Design Expert</small>
                                            </div>
                                        </div>
                                        <button class="mentor-follow-action active border-0 bg-transparent fw-semibold">Followed</button>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mt-3 pt-2 mentor-stats-divider">
                                        <div class="d-flex align-items-center">
                                            <img src="https://cdn-icons-png.flaticon.com/512/3281/3281289.png" class="mentor-stats-icon me-2" alt="Tasks">
                                            <small class="text-muted">40 Tasks</small>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" class="mentor-stats-icon me-2" alt="Rating">
                                            <small class="text-muted">4.9 (610)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Card 3 -->
                            <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div class="mentor-profile-card card p-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <img src="https://randomuser.me/api/portraits/men/22.jpg" class="rounded-circle mentor-profile-image me-3" alt="John Doe">
                                            <div>
                                                <h6 class="mb-0 fw-bold">John Doe</h6>
                                                <small class="text-muted">Illustration Pro</small>
                                            </div>
                                        </div>
                                        <button class="mentor-follow-action active border-0 bg-transparent fw-semibold">Followed</button>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mt-3 pt-2 mentor-stats-divider">
                                        <div class="d-flex align-items-center">
                                            <img src="https://cdn-icons-png.flaticon.com/512/3281/3281289.png" class="mentor-stats-icon me-2" alt="Tasks">
                                            <small class="text-muted">30 Tasks</small>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" class="mentor-stats-icon me-2" alt="Rating">
                                            <small class="text-muted">4.8 (530)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Card 4 -->
                            <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div class="mentor-profile-card card p-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <img src="https://randomuser.me/api/portraits/women/63.jpg" class="rounded-circle mentor-profile-image me-3" alt="Emily Chen">
                                            <div>
                                                <h6 class="mb-0 fw-bold">Emily Chen</h6>
                                                <small class="text-muted">Web Developer</small>
                                            </div>
                                        </div>
                                        <button class="mentor-follow-action border-0 bg-transparent fw-semibold">Follow</button>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mt-3 pt-2 mentor-stats-divider">
                                        <div class="d-flex align-items-center">
                                            <img src="https://cdn-icons-png.flaticon.com/512/3281/3281289.png" class="mentor-stats-icon me-2" alt="Tasks">
                                            <small class="text-muted">35 Tasks</small>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" class="mentor-stats-icon me-2" alt="Rating">
                                            <small class="text-muted">4.9 (580)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2 -->
                    <div class="carousel-item">
                        <div class="row g-4">
                            <!-- Card 5 -->
                            <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div class="mentor-profile-card card p-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <img src="https://randomuser.me/api/portraits/men/41.jpg" class="rounded-circle mentor-profile-image me-3" alt="Michael Brown">
                                            <div>
                                                <h6 class="mb-0 fw-bold">Michael Brown</h6>
                                                <small class="text-muted">Graphic Designer</small>
                                            </div>
                                        </div>
                                        <button class="mentor-follow-action border-0 bg-transparent fw-semibold">Follow</button>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mt-3 pt-2 mentor-stats-divider">
                                        <div class="d-flex align-items-center">
                                            <img src="https://cdn-icons-png.flaticon.com/512/3281/3281289.png" class="mentor-stats-icon me-2" alt="Tasks">
                                            <small class="text-muted">28 Tasks</small>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" class="mentor-stats-icon me-2" alt="Rating">
                                            <small class="text-muted">4.6 (490)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Card 6 -->
                            <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div class="mentor-profile-card card p-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <img src="https://randomuser.me/api/portraits/women/33.jpg" class="rounded-circle mentor-profile-image me-3" alt="Lisa Wang">
                                            <div>
                                                <h6 class="mb-0 fw-bold">Lisa Wang</h6>
                                                <small class="text-muted">Frontend Expert</small>
                                            </div>
                                        </div>
                                        <button class="mentor-follow-action border-0 bg-transparent fw-semibold">Follow</button>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mt-3 pt-2 mentor-stats-divider">
                                        <div class="d-flex align-items-center">
                                            <img src="https://cdn-icons-png.flaticon.com/512/3281/3281289.png" class="mentor-stats-icon me-2" alt="Tasks">
                                            <small class="text-muted">32 Tasks</small>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" class="mentor-stats-icon me-2" alt="Rating">
                                            <small class="text-muted">4.8 (510)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Card 8 -->
                            <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div class="mentor-profile-card card p-3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <img src="https://randomuser.me/api/portraits/women/28.jpg" class="rounded-circle mentor-profile-image me-3" alt="Sophia Martinez">
                                            <div>
                                                <h6 class="mb-0 fw-bold">Sophia Martinez</h6>
                                                <small class="text-muted">Product Designer</small>
                                            </div>
                                        </div>
                                        <button class="mentor-follow-action border-0 bg-transparent fw-semibold">Follow</button>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mt-3 pt-2 mentor-stats-divider">
                                        <div class="d-flex align-items-center">
                                            <img src="https://cdn-icons-png.flaticon.com/512/3281/3281289.png" class="mentor-stats-icon me-2" alt="Tasks">
                                            <small class="text-muted">27 Tasks</small>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" class="mentor-stats-icon me-2" alt="Rating">
                                            <small class="text-muted">4.7 (470)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Controls -->
                <button class="mentor-carousel-nav-prev carousel-control-prev" type="button" data-bs-target="#mentorProfileCarousel" data-bs-slide="prev">
                    <span class="mentor-carousel-nav-icon carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="mentor-carousel-nav-next carousel-control-next" type="button" data-bs-target="#mentorProfileCarousel" data-bs-slide="next">
                    <span class="mentor-carousel-nav-icon carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

          
            </div>
        </div>
    </section>



    `;
  }
}

customElements.define("my-carousel-mentors", MyCarouselMentors);
