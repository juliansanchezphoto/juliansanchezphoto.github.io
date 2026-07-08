(function () {
  "use strict";

  const headerTarget = document.getElementById("site-header");
  const footerTarget = document.getElementById("site-footer");
  const page = document.body.dataset.page || "documentary";
  const year = new Date().getFullYear();

  if (!document.getElementById("bootstrap-bundle-script")) {
    const bootstrapScript = document.createElement("script");
    bootstrapScript.id = "bootstrap-bundle-script";
    bootstrapScript.src = "assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
    bootstrapScript.defer = true;
    document.body.appendChild(bootstrapScript);
  }

  if (headerTarget) {
    headerTarget.innerHTML = `
      <header class="site-header">
        <div class="header-inner">
          <a href="index.html" class="logo" aria-label="Home">
            <img src="assets/img/logo.png" alt="Julián Sánchez Photography logo">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#site-nav-menu" aria-controls="site-nav-menu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="site-nav-menu">
            <nav class="site-nav" aria-label="Primary navigation">
              <a href="index.html" data-nav="documentary" class="${page === "documentary" ? "active" : ""}">Documentary</a>
              <a href="gallery.html" data-nav="portraits" class="${page === "portraits" ? "active" : ""}">Portraits</a>
              <a href="contact.html" data-nav="contact" class="${page === "contact" ? "active" : ""}">Contact</a>
            </nav>
          </div>
        </div>
      </header>`;
  }

  if (footerTarget) {
    footerTarget.innerHTML = `
      <footer class="site-footer">
        <div class="footer-inner">
          <div class="footer-links" aria-label="Social links">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
          </div>
          <p>© ${year} Julián Sánchez Photography</p>
        </div>
      </footer>`;
  }

  if (typeof GLightbox === "function") {
    GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      closeButton: true,
      keyboardNavigation: true
    });
  }
})();