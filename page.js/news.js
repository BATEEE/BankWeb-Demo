function loadNewsLeft() {
  fetch("/json/newsLeft.json")
    .then((res) => res.json())
    .then((data) => {
      let h = "";
      for (p of data) {
        h += `
            <div class="news-content-block">
                <div class="news-content-image">
                    <img src="/image/news/content/${p.image}">
                </div>
                <div class="news-content">
                    <p class="date">${p.date}</p>
                    <h2>${p.title}</h2>
                    <p>${p.content}</p>
                    <div class="in-page-link">
                        <a>
                        <span>
                            <span class="read-more"><i class="bx bx-chevron-right"></i>Xem thêm</span>
                        </span>
                        </a>
                    </div>
                </div>
            </div>
        `;
      }

      let e = document.querySelector(".news-block-container :first-child");
      e.insertAdjacentHTML('afterend', h);
    });
}

function loadNewsRight() {
    fetch("/json/newsRight.json")
      .then((res) => res.json())
      .then((data) => {
        let h = "";
        for (p of data) {
          h += `
              <div class="news-content-block">
                  <div class="news-content-image">
                      <img src="/image/news/content/${p.image}">
                  </div>
                  <div class="news-content">
                      <p class="date">${p.date}</p>
                      <h2>${p.title}</h2>
                      <p>${p.content}</p>
                      <div class="in-page-link">
                          <a>
                          <span>
                              <span class="read-more"><i class="bx bx-chevron-right"></i>Xem thêm</span>
                          </span>
                          </a>
                      </div>
                  </div>
              </div>
          `;
        }
  
        let e = document.querySelector(".news-item .news-block-container:nth-child(2) :first-child");
        e.insertAdjacentHTML('afterend', h);
      });
  }

window.onload = () => {
    loadNewsLeft();
    loadNewsRight();
}
