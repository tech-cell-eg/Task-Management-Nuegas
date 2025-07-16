class MyCarouselAccHome extends HTMLElement {
  connectedCallback() {
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "css/carousel-acc.css";
    document.head.appendChild(styleLink);

    this.innerHTML = `
        <section class="mentor-section">
  <div id="mentorCarousel" class="mentor-carousel carousel slide">
    <div class="carousel-inner">
      
      <!-- Slide 1 -->
      <div class="carousel-item active">
        <div class="mentor-carousel__row row justify-content-center g-4">
          <!-- Mentor Card 1 -->
          <div class="col-12 col-md-6 col-lg-5">
            <div class="mentor-card card p-3">
              <div class="mentor-card__header">
                <div class="mentor-card__profile">
                  <img src="images/profile1.png" class="mentor-card__avatar rounded-circle" alt="Abraham Lincoln">
                  <div class="mentor-card__info">
                    <h6 class="mentor-card__name mb-0">Abraham Lincoln</h6>
                    <small class="mentor-card__specialty">3D Design</small>
                  </div>
                </div>
                <span class="mentor-card__status">Followed</span>
              </div>
              
              <div class="mentor-card__footer">
                <div class="mentor-card__stats">
                  <div class="mentor-card__stat">
                    <img src="images/note.png" class="mentor-card__icon" alt="Tasks">
                    <small>40 Task</small>
                  </div>
                  <div class="mentor-card__stat">
                    <img src="images/star.png" class="mentor-card__icon" alt="Rating">
                    <small>4.9 (610 Reviews)</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mentor Card 2 -->
          <div class="col-12 col-md-6 col-lg-5">
            <div class="mentor-card card p-3">
              <div class="mentor-card__header">
                <div class="mentor-card__profile">
                  <img src="images/profile1.png" class="mentor-card__avatar rounded-circle" alt="Abraham Lincoln">
                  <div class="mentor-card__info">
                    <h6 class="mentor-card__name mb-0">Abraham Lincoln</h6>
                    <small class="mentor-card__specialty">3D Design</small>
                  </div>
                </div>
                <span class="mentor-card__status">Followed</span>
              </div>
              
              <div class="mentor-card__footer">
                <div class="mentor-card__stats">
                  <div class="mentor-card__stat">
                    <img src="images/note.png" class="mentor-card__icon" alt="Tasks">
                    <small>40 Task</small>
                  </div>
                  <div class="mentor-card__stat">
                    <img src="images/star.png" class="mentor-card__icon" alt="Rating">
                    <small>4.9 (610 Reviews)</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 2 -->
      <div class="carousel-item">
        <div class="mentor-carousel__row row justify-content-center g-4">
          <!-- Mentor Card 3 -->
          <div class="col-12 col-md-6 col-lg-5">
            <div class="mentor-card card p-3">
              <div class="mentor-card__header">
                <div class="mentor-card__profile">
                  <img src="images/profile1.png" class="mentor-card__avatar rounded-circle" alt="John Smith">
                  <div class="mentor-card__info">
                    <h6 class="mentor-card__name mb-0">John Smith</h6>
                    <small class="mentor-card__specialty">Graphic Designer</small>
                  </div>
                </div>
                <span class="mentor-card__status">Followed</span>
              </div>
              
              <div class="mentor-card__footer">
                <div class="mentor-card__stats">
                  <div class="mentor-card__stat">
                    <img src="images/note.png" class="mentor-card__icon" alt="Tasks">
                    <small>40 Task</small>
                  </div>
                  <div class="mentor-card__stat">
                    <img src="images/star.png" class="mentor-card__icon" alt="Rating">
                    <small>4.9 (610 Reviews)</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mentor Card 4 -->
          <div class="col-12 col-md-6 col-lg-5">
            <div class="mentor-card card p-3">
              <div class="mentor-card__header">
                <div class="mentor-card__profile">
                  <img src="images/profile2.jpg" class="mentor-card__avatar rounded-circle" alt="Emily Rose">
                  <div class="mentor-card__info">
                    <h6 class="mentor-card__name mb-0">Emily Rose</h6>
                    <small class="mentor-card__specialty">Motion Design</small>
                  </div>
                </div>
                <span class="mentor-card__status">Followed</span>
              </div>
              
              <div class="mentor-card__footer">
                <div class="mentor-card__stats">
                  <div class="mentor-card__stat">
                    <img src="images/note.png" class="mentor-card__icon" alt="Tasks">
                    <small>40 Task</small>
                  </div>
                  <div class="mentor-card__stat">
                    <img src="images/star.png" class="mentor-card__icon" alt="Rating">
                    <small>4.9 (610 Reviews)</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <button class="mentor-carousel__control carousel-control-prev" type="button" data-bs-target="#mentorCarousel" data-bs-slide="prev">
      <span class="mentor-carousel__icon carousel-control-prev-icon"></span>
    </button>
    <button class="mentor-carousel__control carousel-control-next" type="button" data-bs-target="#mentorCarousel" data-bs-slide="next">
      <span class="mentor-carousel__icon carousel-control-next-icon"></span>
    </button>
  </div>
</section>


    `;
  }
}

customElements.define("my-carousel-corse-acc-home", MyCarouselAccHome);
