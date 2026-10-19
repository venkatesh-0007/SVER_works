/**
 * Sri Venkateswara Electrical & Rewinding Works
 * Interactive JavaScript Engine
 * 
 * Features:
 * - Dynamic config hydration from business-config.js
 * - vCard (.vcf) generator & downloader
 * - Touch & swipe responsive image carousel
 * - Visiting card accessible modal/lightbox
 * - Mobile drawer navigation & active scroll spy
 * - Graceful image error fallbacks
 */

(function () {
  'use strict';

  // Fallback config if business-config.js is loaded asynchronously or missing
  const config = window.BUSINESS_CONFIG || {
    name: "Sri Venkateswara Electrical & Rewinding Works",
    shortName: "Sri Venkateswara Electrical",
    teluguName: "శ్రీ వెంకటేశ్వర రీ-వైండింగ్ వర్క్స్",
    owner: "Kamesh",
    phone: "+919866394687",
    phoneDisplay: "+91 9866394687",
    secondaryPhone: "+918499909666",
    secondaryPhoneDisplay: "+91 8499909666",
    whatsappNumber: "919866394687",
    mapsUrl: "https://maps.app.goo.gl/VTHYkzrRNHAbTTAW9"
  };

  // --- DOM Elements ---
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const cardModal = document.getElementById('cardModal');
  const openModalBtns = document.querySelectorAll('.js-open-card-modal');
  const closeModalBtns = document.querySelectorAll('.js-close-card-modal');
  const downloadVcfBtns = document.querySelectorAll('.js-download-vcf');
  const toastNotice = document.getElementById('toastNotice');

  // Carousel Elements
  const carouselTrack = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const indicatorsContainer = document.getElementById('carouselIndicators');
  const counterCurrent = document.getElementById('carouselCounterCurrent');
  const counterTotal = document.getElementById('carouselCounterTotal');

  // --- 1. Dynamic Contact & Link Binding ---
  function hydrateDynamicLinks() {
    const waUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
      config.whatsappDefaultMessage || "Hello Kamesh garu, I found your website for Sri Venkateswara Electrical and would like to inquire about your service."
    )}`;
    const telUrl = `tel:${config.phone.replace(/\s+/g, '')}`;
    const mapsUrl = config.mapsUrl;

    // Apply to elements with data-action
    document.querySelectorAll('[data-action="phone"]').forEach(el => {
      el.setAttribute('href', telUrl);
      if (el.hasAttribute('data-text-display')) {
        el.textContent = config.phoneDisplay;
      }
    });

    document.querySelectorAll('[data-action="whatsapp"]').forEach(el => {
      el.setAttribute('href', waUrl);
    });

    document.querySelectorAll('[data-action="directions"]').forEach(el => {
      el.setAttribute('href', mapsUrl);
    });
  }

  // --- 2. vCard (.vcf) Generator ---
  function generateAndDownloadVcard() {
    const vcardLines = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${config.vcard?.formattedName || 'Kamesh - Sri Venkateswara Electrical'}`,
      `N:${config.owner};;;;`,
      `ORG:${config.name}`,
      `TITLE:${config.vcard?.title || 'Proprietor & Master Technician'}`,
      `TEL;TYPE=CELL,VOICE,PREF:${config.phone}`,
      config.secondaryPhone ? `TEL;TYPE=CELL,VOICE:${config.secondaryPhone}` : '',
      `ADR;TYPE=WORK:;;${config.address?.formatted || 'Innespeta, Opposite State Bank'};Rajahmundry;Andhra Pradesh;;India`,
      `URL:${config.mapsUrl}`,
      `NOTE:${config.vcard?.note || 'Electrical Appliance Services & Motor Rewinding in Rajahmundry'}`,
      'END:VCARD'
    ].filter(Boolean).join('\r\n');

    const blob = new Blob([vcardLines], { type: 'text/vcard;charset=utf-8;' });
    const filename = config.vcard?.filename || 'Sri-Venkateswara-Electrical-Kamesh.vcf';

    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob, filename);
    } else {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    }

    showToast('Contact Card (.vcf) Downloaded');
  }

  // Simple, accessible toast notification
  let toastTimer = null;
  function showToast(message) {
    if (!toastNotice) return;
    toastNotice.querySelector('.toast-msg').textContent = message;
    toastNotice.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 3200);
  }

  // --- 3. Carousel Component ---
  function initCarousel() {
    if (!carouselTrack) return;

    const slides = carouselTrack.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    if (totalSlides === 0) return;

    if (counterTotal) counterTotal.textContent = totalSlides;

    // Build indicator dots dynamically
    if (indicatorsContainer) {
      indicatorsContainer.innerHTML = '';
      slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `indicator-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
        dot.addEventListener('click', () => goToSlide(idx));
        indicatorsContainer.appendChild(dot);
      });
    }

    let currentIndex = 0;

    function updateCarouselState(index) {
      currentIndex = Math.max(0, Math.min(index, totalSlides - 1));

      // Update counter
      if (counterCurrent) counterCurrent.textContent = currentIndex + 1;

      // Update indicator dots
      if (indicatorsContainer) {
        const dots = indicatorsContainer.querySelectorAll('.indicator-dot');
        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === currentIndex);
          dot.setAttribute('aria-selected', idx === currentIndex ? 'true' : 'false');
        });
      }
    }

    function goToSlide(index) {
      const targetSlide = slides[index];
      if (targetSlide) {
        carouselTrack.scrollTo({
          left: targetSlide.offsetLeft,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
        });
        updateCarouselState(index);
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
        goToSlide(newIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const newIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
        goToSlide(newIndex);
      });
    }

    // Scroll listener to update dots on touch scroll
    let scrollTimeout;
    carouselTrack.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollLeft = carouselTrack.scrollLeft;
        const slideWidth = carouselTrack.clientWidth;
        const newIdx = Math.round(scrollLeft / slideWidth);
        updateCarouselState(newIdx);
      }, 50);
    }, { passive: true });

    // Touch swipe gesture support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carouselTrack.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carouselTrack.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const threshold = 45;
      if (touchStartX - touchEndX > threshold) {
        // Swiped left -> next
        if (currentIndex < totalSlides - 1) {
          goToSlide(currentIndex + 1);
        }
      } else if (touchEndX - touchStartX > threshold) {
        // Swiped right -> prev
        if (currentIndex > 0) {
          goToSlide(currentIndex - 1);
        }
      }
    }

    // Keyboard navigation within carousel
    carouselTrack.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        goToSlide(Math.max(0, currentIndex - 1));
      } else if (e.key === 'ArrowRight') {
        goToSlide(Math.min(totalSlides - 1, currentIndex + 1));
      }
    });
  }

  // --- 4. Visiting Card Modal / Lightbox ---
  function openCardModal() {
    if (!cardModal) return;
    cardModal.classList.add('open');
    cardModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button for keyboard a11y
    const closeBtn = cardModal.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.focus();
  }

  function closeCardModal() {
    if (!cardModal) return;
    cardModal.classList.remove('open');
    cardModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // --- 5. Mobile Navigation Drawer ---
  function toggleMobileMenu() {
    if (!mobileDrawer || !mobileToggle) return;
    const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
    mobileToggle.setAttribute('aria-expanded', !isExpanded);
    mobileDrawer.classList.toggle('open', !isExpanded);
  }

  function closeMobileMenu() {
    if (!mobileDrawer || !mobileToggle) return;
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('open');
  }

  // --- 6. Active Scroll Spy ---
  function initScrollSpy() {
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link, .mobile-nav-link');
    const sections = document.querySelectorAll('section[id]');

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              const href = link.getAttribute('href');
              if (href === `#${currentId}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px'
      }
    );

    sections.forEach((sec) => observer.observe(sec));
  }

  // --- 7. Missing Image Graceful Fallback ---
  function setupImageFallbacks() {
    document.querySelectorAll('img').forEach((img) => {
      img.addEventListener('error', function () {
        // Prevent infinite loop
        if (this.dataset.fallbackApplied) return;
        this.dataset.fallbackApplied = 'true';

        // Check if a data-fallback attribute exists
        if (this.dataset.fallback) {
          this.src = this.dataset.fallback;
        } else {
          // Fallback to SVG placeholder
          this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22400%22 height%3D%22300%22 viewBox%3D%220 0 400 300%22%3E%3Crect fill%3D%22%2314243A%22 width%3D%22400%22 height%3D%22300%22%2F%3E%3Ctext fill%3D%22%23F5A623%22 font-family%3D%22sans-serif%22 font-size%3D%2218%22 font-weight%3D%22bold%22 x%3D%2250%25%22 y%3D%2250%25%22 text-anchor%3D%22middle%22%3ESri Venkateswara Electrical%3C%2Ftext%3E%3C%2Fsvg%3E';
        }
      });
    });
  }

  // --- 8. Event Listeners Initialization ---
  // --- 8. Scroll-Linked Owner Photo Morph to Navbar Circle ---
  function initOwnerPhotoMorph() {
    const morphEl = document.getElementById('scrollMorphAvatar');
    const navbarEmblem = document.getElementById('navbarEmblem');
    const heroCanvas = document.querySelector('.hero-owner-canvas');

    if (!morphEl || !navbarEmblem || !heroCanvas) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let ticking = false;

    function onScrollOrTouch() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      // Distance over which the morph completes (approx height of initial viewport header/hero gap)
      const maxScroll = Math.min(window.innerHeight * 0.42, 300);
      const rawProgress = scrollY / Math.max(maxScroll, 120);
      const progress = Math.min(Math.max(rawProgress, 0), 1);

      if (isReducedMotion) {
        if (progress >= 0.8) {
          navbarEmblem.classList.add('has-docked-avatar');
        } else {
          navbarEmblem.classList.remove('has-docked-avatar');
        }
        ticking = false;
        return;
      }

      if (progress <= 0.02) {
        // At top: Hero is 100% full, navbar shows initial spark, morph hidden
        morphEl.style.opacity = '0';
        morphEl.style.visibility = 'hidden';
        morphEl.style.transform = 'translate3d(-9999px, -9999px, 0)';
        navbarEmblem.classList.remove('has-docked-avatar');
        heroCanvas.style.transform = 'scale(1)';
        heroCanvas.style.opacity = '1';
      } else if (progress >= 0.96) {
        // Scrolled past hero: Docked into navbar circle!
        morphEl.style.opacity = '0';
        morphEl.style.visibility = 'hidden';
        morphEl.style.transform = 'translate3d(-9999px, -9999px, 0)';
        navbarEmblem.classList.add('has-docked-avatar');
        heroCanvas.style.transform = 'scale(0.92)';
        heroCanvas.style.opacity = '0.25';
      } else {
        // Swiping / scrolling: Smoothly interpolate coordinates and scale!
        navbarEmblem.classList.remove('has-docked-avatar');
        morphEl.style.visibility = 'visible';

        const heroRect = heroCanvas.getBoundingClientRect();
        const navRect = navbarEmblem.getBoundingClientRect();

        // Ease-in-out quadratic curve for fluid momentum
        const ease = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        // Start coordinates: Center of the owner's head/face in hero
        const startCenterX = heroRect.left + heroRect.width / 2;
        const startCenterY = heroRect.top + heroRect.height * 0.35;

        // Target coordinates: Center of the navbar circle
        const targetCenterX = navRect.left + navRect.width / 2;
        const targetCenterY = navRect.top + navRect.height / 2;

        const currentCenterX = startCenterX + (targetCenterX - startCenterX) * ease;
        const currentCenterY = startCenterY + (targetCenterY - startCenterY) * ease;

        // Start scale based on base 140px morph circle size
        const startScale = Math.min(heroRect.width * 0.65, 200) / 140;
        const endScale = 44 / 140; // scales precisely to 44px navbar circle
        const currentScale = startScale + (endScale - startScale) * ease;

        // Opacity smoothly increases and stays solid
        const opacity = Math.min(progress * 5, 1);

        morphEl.style.opacity = opacity.toString();
        morphEl.style.transform = `translate3d(${currentCenterX - 70}px, ${currentCenterY - 70}px, 0) scale(${currentScale})`;

        // Hero canvas gently recedes and dims
        heroCanvas.style.transform = `scale(${1 - ease * 0.08})`;
        heroCanvas.style.opacity = `${Math.max(1 - ease * 0.75, 0.25)}`;
      }

      ticking = false;
    }

    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(onScrollOrTouch);
        ticking = true;
      }
    }

    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('touchmove', requestTick, { passive: true });
    window.addEventListener('resize', requestTick, { passive: true });

    // Initial check
    onScrollOrTouch();
  }

  // --- 9. Event Listeners Initialization ---
  function initEventListeners() {
    // Mobile Drawer
    if (mobileToggle) {
      mobileToggle.addEventListener('click', toggleMobileMenu);
    }

    // Close drawer when link clicked
    document.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Modal Triggers
    openModalBtns.forEach((btn) => btn.addEventListener('click', openCardModal));
    closeModalBtns.forEach((btn) => btn.addEventListener('click', closeCardModal));

    if (cardModal) {
      cardModal.addEventListener('click', (e) => {
        if (e.target === cardModal) closeCardModal();
      });
    }

    // Keyboard ESC closes modal and menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCardModal();
        closeMobileMenu();
      }
    });

    // vCard downloads
    downloadVcfBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        generateAndDownloadVcard();
      });
    });
  }

  // --- Initialize when DOM is Ready ---
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }

  function onReady() {
    hydrateDynamicLinks();
    initCarousel();
    initScrollSpy();
    setupImageFallbacks();
    initOwnerPhotoMorph();
    initEventListeners();
  }
})();
