
/**
 * SCRIPT.JS - Digital 19th Monthsary Gift for Iyah
 */
(function () {
  'use strict';

  const STATE = {
    currentLayer: 0,
    unlockedLayers: new Set([0]),
    currentQuizIndex: 0,
    quizScore: 0,
    addedIngredients: new Set(),
    musicPlaying: false,
    audioCtx: null
  };

  const LAYER_NAMES = [
    { id: 0, label: "Start", short: "Gift Box" },
    { id: 1, label: "Roblox", short: "Nov 2, 2024" },
    { id: 2, label: "Case File", short: "You Liked Me" },
    { id: 3, label: "Dec 7 IRL", short: "First Meeting" },
    { id: 4, label: "6 Days", short: "Cavite Visit" },
    { id: 5, label: "Funny Test", short: "Who is Funnier" },
    { id: 6, label: "Quiz", short: "Relationship Quiz" },
    { id: 7, label: "Our Story", short: "Our Journey" },
    { id: 8, label: "Letter", short: "Nash's Letter" }
  ];

  const DOM = {
    ribbonTabsContainer: document.getElementById('ribbonTabsContainer'),
    layers: document.querySelectorAll('.box-layer'),
    openGiftBtn: document.getElementById('openGiftBtn'),
    giftBoxCard: document.getElementById('giftBoxTrigger'),
    musicToggleBtn: document.getElementById('musicToggleBtn'),
    toastPopup: document.getElementById('toastPopup'),
    toastMessage: document.getElementById('toastMessage'),
    rageBaitBtn: document.getElementById('rageBaitBtn'),
    hamsterEggBtn: document.getElementById('hamsterEggBtn'),
    waxSealBtn: document.getElementById('waxSealBtn'),
    envelopeCard: document.getElementById('envelopeCard'),
    unfoldedLetterPaper: document.getElementById('unfoldedLetterPaper'),
    letterBodyText: document.getElementById('letterBodyText')
  };

  function init() {
    renderRibbonNavigation();
    bindChapter1();
    bindChapter3();
    bindChapter4Scrapbook();
    bindAdoboMission();
    bindQuiz();
    bindFunnyChallenge();
    bindChapter6RealStory();
    bindLetterSection();
    bindEasterEggs();
    bindMusicToggle();
    bindNavigationButtons();

    try {
      const saved = localStorage.getItem('iyah_19th_unlocked');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          parsed.forEach(num => STATE.unlockedLayers.add(Number(num)));
          renderRibbonNavigation();
        }
      }
    } catch (e) {
      console.warn('LocalStorage unavailable', e);
    }
  }

  function renderRibbonNavigation() {
    if (!DOM.ribbonTabsContainer) return;
    DOM.ribbonTabsContainer.innerHTML = '';

    LAYER_NAMES.forEach((layer, idx) => {
      const tab = document.createElement('button');
      const isUnlocked = STATE.unlockedLayers.has(layer.id);
      const isActive = STATE.currentLayer === layer.id;

      tab.className = 'ribbon-tab' + (isActive ? ' active' : '') + (!isUnlocked ? ' locked' : '');
      const numBadge = '<span class="tab-num">' + (idx === 0 ? 'START' : '0' + idx) + '</span>';
      tab.innerHTML = isUnlocked ? (numBadge + ' ' + layer.label) : (numBadge + ' 🔒 ' + layer.short);
      tab.setAttribute('aria-label', 'Navigate to ' + layer.short);

      if (isUnlocked) {
        tab.addEventListener('click', () => switchLayer(layer.id));
      } else {
        tab.addEventListener('click', () => {
          showToast('✨ Unfold previous chapters to unlock ' + layer.short + '!');
        });
      }

      DOM.ribbonTabsContainer.appendChild(tab);
    });
  }

  function switchLayer(targetIndex) {
    if (!STATE.unlockedLayers.has(targetIndex)) return;

    STATE.currentLayer = targetIndex;
    DOM.layers.forEach(layer => {
      const layerIdx = Number(layer.getAttribute('data-layer-index'));
      if (layerIdx === targetIndex) {
        layer.classList.remove('locked');
        layer.classList.add('active');
      } else {
        layer.classList.remove('active');
      }
    });

    renderRibbonNavigation();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function unlockAndAdvance(targetIndex) {
    STATE.unlockedLayers.add(targetIndex);
    try {
      localStorage.setItem('iyah_19th_unlocked', JSON.stringify(Array.from(STATE.unlockedLayers)));
    } catch (e) {}
    switchLayer(targetIndex);
  }

  function bindNavigationButtons() {
    if (DOM.openGiftBtn) {
      DOM.openGiftBtn.addEventListener('click', () => {
        if (DOM.giftBoxCard) {
          DOM.giftBoxCard.classList.add('opening');
        }
        playSoftChime(440, 0.2);
        setTimeout(() => {
          unlockAndAdvance(1);
        }, 550);
      });
    }

    document.querySelectorAll('.next-layer-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = Number(e.currentTarget.getAttribute('data-target-layer'));
        if (!isNaN(target)) {
          playSoftChime(440, 0.2);
          unlockAndAdvance(target);
        }
      });
    });
  }

  function bindChapter1() {
    const c1 = RELATIONSHIP_DATA.chapter1;
    if (!c1) return;

    const dateEl = document.getElementById('c1-date');
    const titleEl = document.getElementById('c1-title');
    const subtitleEl = document.getElementById('c1-subtitle');
    const photoEl = document.getElementById('c1-photo');
    const captionEl = document.getElementById('c1-caption');
    const bodyEl = document.getElementById('c1-body');
    const prevBtn = document.getElementById('c1-prev-btn');
    const nextBtn = document.getElementById('c1-next-btn');
    const dotsContainer = document.getElementById('c1-dots');
    const carouselFrame = document.getElementById('c1-carousel-frame');

    if (dateEl) dateEl.textContent = c1.date;
    if (titleEl) titleEl.textContent = c1.title;
    if (subtitleEl) subtitleEl.textContent = c1.subtitle;

    // Photos array support (fallback to single photoPath if not array)
    const photos = c1.photos && c1.photos.length > 0 ? c1.photos : [
      { path: c1.photoPath || 'assets/photos/placeholder_roblox.svg', caption: c1.photoCaption || '' }
    ];

    let currentPhotoIdx = 0;

    function renderCarouselPhoto(idx) {
      currentPhotoIdx = (idx + photos.length) % photos.length;
      const cur = photos[currentPhotoIdx];

      if (photoEl) {
        photoEl.style.opacity = '0.3';
        photoEl.src = cur.path;
        photoEl.onload = () => { photoEl.style.opacity = '1'; };
        setTimeout(() => { photoEl.style.opacity = '1'; }, 200);
      }
      if (captionEl) {
        captionEl.textContent = cur.caption;
      }

      // Update dots
      if (dotsContainer) {
        dotsContainer.innerHTML = '';
        photos.forEach((_, pIdx) => {
          const dot = document.createElement('span');
          dot.className = 'p-dot' + (pIdx === currentPhotoIdx ? ' active' : '');
          dot.addEventListener('click', () => {
            playSoftChime(500, 0.1);
            renderCarouselPhoto(pIdx);
          });
          dotsContainer.appendChild(dot);
        });
      }
    }

    renderCarouselPhoto(0);

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        playSoftChime(450, 0.1);
        renderCarouselPhoto(currentPhotoIdx - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        playSoftChime(550, 0.1);
        renderCarouselPhoto(currentPhotoIdx + 1);
      });
    }

    // Touch Swipe Gesture for Mobile
    if (carouselFrame) {
      let touchStartX = 0;
      let touchEndX = 0;

      carouselFrame.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      carouselFrame.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 40) {
          if (diff < 0) {
            // Swiped left -> next
            playSoftChime(550, 0.1);
            renderCarouselPhoto(currentPhotoIdx + 1);
          } else {
            // Swiped right -> prev
            playSoftChime(450, 0.1);
            renderCarouselPhoto(currentPhotoIdx - 1);
          }
        }
      }, { passive: true });
    }

    if (bodyEl && c1.bodyText) {
      bodyEl.innerHTML = c1.bodyText.map(p => '<p>' + p + '</p>').join('');
    }
  }

  function bindChapter3() {
    const c3 = RELATIONSHIP_DATA.chapter3;
    if (!c3) return;

    const dateEl = document.getElementById('c3-date');
    const titleEl = document.getElementById('c3-title');
    const subtitleEl = document.getElementById('c3-subtitle');
    const photoEl = document.getElementById('c3-photo');
    const captionEl = document.getElementById('c3-caption');
    const bodyEl = document.getElementById('c3-body');

    if (dateEl) dateEl.textContent = c3.date;
    if (titleEl) titleEl.textContent = c3.title;
    if (subtitleEl) subtitleEl.textContent = c3.subtitle;
    if (photoEl && c3.photoPath) photoEl.src = c3.photoPath;
    if (captionEl && c3.polaroidCaption) captionEl.textContent = c3.polaroidCaption;

    if (bodyEl && c3.thoughts) {
      bodyEl.innerHTML = c3.thoughts.map(p => '<p>' + p + '</p>').join('');
    }
  }

  function bindChapter4Scrapbook() {
    const tabs = document.querySelectorAll('.scrap-tab');
    const pages = document.querySelectorAll('.scrap-page');
    const tabsNav = document.getElementById('scrapbookTabsNav');

    // PC Mouse Drag-to-Scroll
    if (tabsNav) {
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;

      tabsNav.addEventListener('mousedown', (e) => {
        isDown = true;
        tabsNav.classList.add('dragging');
        startX = e.pageX - tabsNav.offsetLeft;
        scrollLeft = tabsNav.scrollLeft;
      });

      tabsNav.addEventListener('mouseleave', () => { isDown = false; });
      tabsNav.addEventListener('mouseup', () => { isDown = false; });
      tabsNav.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - tabsNav.offsetLeft;
        const walk = (x - startX) * 1.5;
        tabsNav.scrollLeft = scrollLeft - walk;
      });

      // Mouse Wheel Scroll
      tabsNav.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          tabsNav.scrollLeft += e.deltaY;
        }
      }, { passive: false });
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTabId = tab.getAttribute('data-tab-id');
        playSoftChime(520, 0.1);
        
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        pages.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

        const activePage = document.getElementById('scrap-page-' + targetTabId);
        if (activePage) activePage.classList.add('active');
      });
    });

    // Helper to setup Photo & Video Carousel for any Scrapbook Day
    function setupScrapbookDayCarousel(dayId) {
      const dayData = RELATIONSHIP_DATA.sixDayScrapbook?.pages?.find(p => p.id === dayId);
      const mediaBox = document.getElementById(`${dayId}-media-box`);
      const captionEl = document.getElementById(`${dayId}-caption`);
      const prevBtn = document.getElementById(`${dayId}-prev-btn`);
      const nextBtn = document.getElementById(`${dayId}-next-btn`);
      const dotsContainer = document.getElementById(`${dayId}-dots`);
      const carouselFrame = document.getElementById(`${dayId}-carousel-frame`);

      if (!dayData || !mediaBox) return;

      // Sync description text directly from data.js
      const pageContainer = document.getElementById(`scrap-page-${dayId}`);
      if (pageContainer && dayData.description) {
        const descEl = pageContainer.querySelector('.page-desc');
        if (descEl) descEl.textContent = dayData.description;
      }

      const mediaList = dayData.media && dayData.media.length > 0 ? dayData.media : [
        { type: 'image', path: dayData.photoPath || `assets/photos/${dayId}.jpg`, caption: dayData.photoCaption || '' }
      ];

      let currentMediaIdx = 0;

      function renderMedia(idx) {
        currentMediaIdx = (idx + mediaList.length) % mediaList.length;
        const cur = mediaList[currentMediaIdx];

        mediaBox.innerHTML = '';

        if (cur.type === 'video' || (cur.path && (cur.path.endsWith('.mp4') || cur.path.endsWith('.webm') || cur.path.endsWith('.mov')))) {
          mediaBox.classList.add('video-mode');
          const video = document.createElement('video');
          video.className = 'polaroid-media-video';
          video.src = cur.path;
          video.controls = true;
          video.playsInline = true;
          video.setAttribute('playsinline', '');
          video.setAttribute('webkit-playsinline', '');
          video.preload = 'metadata';
          mediaBox.appendChild(video);
        } else {
          mediaBox.classList.remove('video-mode');
          const img = document.createElement('img');
          img.id = `${dayId}-photo`;
          img.src = cur.path;
          img.alt = `${dayData.headline || dayId} Memory`;
          img.loading = 'lazy';
          img.style.opacity = '0.3';
          img.onload = () => { img.style.opacity = '1'; };
          setTimeout(() => { img.style.opacity = '1'; }, 150);
          mediaBox.appendChild(img);
        }

        if (captionEl) {
          captionEl.textContent = cur.caption;
        }

        if (dotsContainer) {
          dotsContainer.innerHTML = '';
          mediaList.forEach((_, mIdx) => {
            const dot = document.createElement('span');
            dot.className = 'p-dot' + (mIdx === currentMediaIdx ? ' active' : '');
            dot.addEventListener('click', () => {
              playSoftChime(500, 0.1);
              renderMedia(mIdx);
            });
            dotsContainer.appendChild(dot);
          });
        }
      }

      renderMedia(0);

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          playSoftChime(450, 0.1);
          renderMedia(currentMediaIdx - 1);
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          playSoftChime(550, 0.1);
          renderMedia(currentMediaIdx + 1);
        });
      }

      // Touch swipe gesture for mobile
      if (carouselFrame) {
        let touchStartX = 0;
        let touchEndX = 0;

        carouselFrame.addEventListener('touchstart', (e) => {
          touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carouselFrame.addEventListener('touchend', (e) => {
          touchEndX = e.changedTouches[0].screenX;
          const diff = touchEndX - touchStartX;
          if (Math.abs(diff) > 40) {
            if (diff < 0) {
              playSoftChime(550, 0.1);
              renderMedia(currentMediaIdx + 1);
            } else {
              playSoftChime(450, 0.1);
              renderMedia(currentMediaIdx - 1);
            }
          }
        }, { passive: true });
      }
    }

    // Initialize carousels for Day 1, Day 2, Day 3, Day 4, and Day 6
    setupScrapbookDayCarousel('day1');
    setupScrapbookDayCarousel('day2');
    setupScrapbookDayCarousel('day3');
    setupScrapbookDayCarousel('day4');
    setupScrapbookDayCarousel('day6');
  }

  function bindAdoboMission() {
    const ingredientBtns = document.querySelectorAll('.ingredient-item');
    const panContent = document.getElementById('panContent');
    const successBanner = document.getElementById('adoboSuccessBanner');
    const totalRequired = ingredientBtns.length;

    ingredientBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-ingredient');
        if (STATE.addedIngredients.has(id)) return;

        STATE.addedIngredients.add(id);
        btn.classList.add('added');

        playSoftChime(520, 0.15);

        if (panContent) {
          const placeholder = panContent.querySelector('.pan-placeholder');
          if (placeholder) placeholder.remove();

          const badge = document.createElement('span');
          badge.className = 'pan-ingredient-badge';
          badge.textContent = btn.querySelector('.ing-name').textContent;
          panContent.appendChild(badge);
        }

        if (STATE.addedIngredients.size === totalRequired) {
          setTimeout(() => {
            if (successBanner) {
              successBanner.style.display = 'block';
              playSoftChime(650, 0.3);
            }
          }, 400);
        }
      });
    });
  }

  function bindQuiz() {
    renderCurrentQuizQuestion();
  }

  function renderCurrentQuizQuestion() {
    const qData = RELATIONSHIP_DATA.quiz;
    if (!qData || !qData.questions) return;

    const currentQ = qData.questions[STATE.currentQuizIndex];
    const counterEl = document.getElementById('quizCounter');
    const questionTextEl = document.getElementById('quizQuestionText');
    const optionsListEl = document.getElementById('quizOptionsList');
    const feedbackCard = document.getElementById('quizFeedbackCard');
    const feedbackBadge = document.getElementById('feedbackBadge');
    const feedbackMsg = document.getElementById('feedbackMessage');
    const nextBtn = document.getElementById('quizNextBtn');
    const summaryCard = document.getElementById('quizSummaryCard');
    const questionCard = document.querySelector('.quiz-question-card');

    if (!currentQ) {
      if (questionCard) questionCard.style.display = 'none';
      if (feedbackCard) feedbackCard.style.display = 'none';
      if (summaryCard) {
        summaryCard.style.display = 'block';
        const totalQ = qData.questions.length;
        const passingThreshold = Math.ceil(totalQ / 2);
        const isPass = STATE.quizScore >= passingThreshold;

        const badgeContainer = document.getElementById('quizGradeBadgeContainer');
        const stickerEl = document.getElementById('quizSummarySticker');
        const titleEl = document.getElementById('quizSummaryTitle');
        const scoreText = document.getElementById('quizScoreText');
        const descEl = document.getElementById('quizSummaryDesc');
        const retakeBtn = document.getElementById('quizRetakeBtn');

        if (isPass) {
          if (badgeContainer) badgeContainer.innerHTML = '<span class="quiz-grade-badge pass">🥇 OFFICIAL MEDAL: GOOD GIRL 🥇</span>';
          if (stickerEl) stickerEl.src = 'assets/stickers/good_girl_hamster.png';
          if (titleEl) titleEl.textContent = '🎉 CONGRATULATIONS! GOOD GIRL! 🎉';
          if (scoreText) {
            scoreText.className = 'quiz-score-highlight pass';
            scoreText.textContent = `Score: ${STATE.quizScore} / ${totalQ} (Passed!)`;
          }
          if (descEl) {
            descEl.innerHTML = `Sobrang proud si Nash sayo boi! You passed our relationship exam and won the official <b>GOOD GIRL</b> Medal of Honor ♡`;
          }
          if (retakeBtn) retakeBtn.style.display = 'none';

          // Celebratory Particles & Chime
          createCelebrationParticles(summaryCard);
          playSoftChime(523, 0.15);
          setTimeout(() => playSoftChime(659, 0.25), 140);
        } else {
          if (badgeContainer) badgeContainer.innerHTML = '<span class="quiz-grade-badge fail">😈 GRADE: BAD GF 😈</span>';
          if (stickerEl) stickerEl.src = 'assets/stickers/bad_gf_hamster.png';
          if (titleEl) titleEl.textContent = '💀 AYAN NA NGA BA... BAD GF! 💀';
          if (scoreText) {
            scoreText.className = 'quiz-score-highlight fail';
            scoreText.textContent = `Score: ${STATE.quizScore} / ${totalQ} (Below Half!)`;
          }
          if (descEl) {
            descEl.innerHTML = `Lagot ka kay Nash boi HAHAHA! Bagsak ka sa relationship exam! Review mo ulit memories natin or mag-retake ka para maging Good Girl ka! 😂`;
          }
          if (retakeBtn) {
            retakeBtn.style.display = 'inline-flex';
            retakeBtn.onclick = () => {
              STATE.currentQuizIndex = 0;
              STATE.quizScore = 0;
              renderCurrentQuizQuestion();
              const qSection = document.getElementById('layer-6');
              if (qSection) qSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            };
          }

          // Gentle "oops" chime
          playSoftChime(310, 0.25);
        }
      }
      return;
    }

    if (counterEl) counterEl.textContent = 'Question ' + (STATE.currentQuizIndex + 1) + ' of ' + qData.questions.length;
    if (questionTextEl) questionTextEl.textContent = currentQ.question;
    if (feedbackCard) feedbackCard.style.display = 'none';
    if (summaryCard) summaryCard.style.display = 'none';
    if (questionCard) questionCard.style.display = 'block';

    if (optionsListEl) {
      optionsListEl.innerHTML = '';
      currentQ.options.forEach((opt, idx) => {
        const optBtn = document.createElement('button');
        optBtn.className = 'quiz-option-btn';
        optBtn.textContent = opt;
        optBtn.setAttribute('data-opt-index', idx);
        optBtn.addEventListener('click', () => {
          handleQuizAnswer(idx, currentQ, feedbackCard, feedbackBadge, feedbackMsg, optionsListEl, optBtn);
        });
        optionsListEl.appendChild(optBtn);
      });
    }

    if (nextBtn) {
      nextBtn.onclick = () => {
        STATE.currentQuizIndex++;
        renderCurrentQuizQuestion();
      };
    }
  }

  function handleQuizAnswer(selectedIndex, qObj, feedbackCard, badge, msg, optionsListEl, clickedBtn) {
    const isCorrect = selectedIndex === qObj.correctIndex;
    
    // Disable all options so they cannot be clicked multiple times
    if (optionsListEl) {
      const allBtns = optionsListEl.querySelectorAll('.quiz-option-btn');
      allBtns.forEach(btn => {
        btn.disabled = true;
        const optIdx = parseInt(btn.getAttribute('data-opt-index'), 10);
        if (!isCorrect && optIdx === qObj.correctIndex) {
          btn.classList.add('revealed-correct');
        }
      });
    }

    if (isCorrect) {
      STATE.quizScore++;
      clickedBtn.classList.add('correct-choice');
      badge.textContent = 'CORRECT 😭';
      badge.className = 'feedback-badge correct';
      msg.textContent = qObj.correctComment;
      
      // Happy double chime
      playSoftChime(523, 0.12);
      setTimeout(() => playSoftChime(659, 0.22), 120);

      // Trigger mini celebratory confetti/sparkles
      createCelebrationParticles(clickedBtn);
    } else {
      clickedBtn.classList.add('wrong-choice');
      badge.textContent = 'OOPS HAHAHA';
      badge.className = 'feedback-badge wrong';
      msg.textContent = qObj.wrongComment;
      
      // Playful gentle "oops" chime
      playSoftChime(290, 0.2);
    }

    if (feedbackCard) {
      feedbackCard.style.display = 'block';
      setTimeout(() => {
        feedbackCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 150);
    }
  }

  function createCelebrationParticles(targetEl) {
    if (!targetEl) return;
    const rect = targetEl.getBoundingClientRect();
    const particleCount = 8;
    const colors = ['#10B981', '#F43F5E', '#F59E0B', '#FB7185', '#EC4899'];

    for (let i = 0; i < particleCount; i++) {
      const spark = document.createElement('div');
      spark.style.position = 'fixed';
      spark.style.left = `${rect.left + rect.width / 2}px`;
      spark.style.top = `${rect.top + rect.height / 2}px`;
      spark.style.width = '7px';
      spark.style.height = '7px';
      spark.style.backgroundColor = colors[i % colors.length];
      spark.style.borderRadius = '50%';
      spark.style.pointerEvents = 'none';
      spark.style.zIndex = '9999';
      spark.style.transition = 'all 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
      document.body.appendChild(spark);

      const angle = (i / particleCount) * Math.PI * 2;
      const distance = 35 + Math.random() * 30;
      const destX = Math.cos(angle) * distance;
      const destY = Math.sin(angle) * distance - 20;

      requestAnimationFrame(() => {
        spark.style.transform = `translate(${destX}px, ${destY}px) scale(0)`;
        spark.style.opacity = '0';
      });

      setTimeout(() => {
        spark.remove();
      }, 700);
    }
  }

  // --------------------------------------------------------------------------
  // FUNNY RUNAWAY CHALLENGE ("WHO IS FUNNIER?")
  // --------------------------------------------------------------------------
  function bindFunnyChallenge() {
    const iyahBtn = document.getElementById('funnyIyahBtn');
    const nashBtn = document.getElementById('funnyNashBtn');
    const arena = document.getElementById('funnyArena');
    const resultBanner = document.getElementById('funnyNashResult');
    const speechBubble = document.getElementById('funnySpeechBubble');

    if (!iyahBtn || !nashBtn || !arena) return;

    const funnyRunawayMessages = [
      "Hoy bwal yan boi HAHAHA",
      "Wag mo na kasi Ipilit Mas funny talaga ako",
      "Mali SI Nash ang tamang sagot",
      "Subukan mo pa boi HAHAHA di moko mapipindot",
      "Ako nga kasi"
    ];
    let lastTop = 50;
    let lastLeft = 74;

    function dodgeIyahButton(e) {
      if (e) {
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
      }

      // Generate unpredictable random coordinates across the ENTIRE arena (all places!)
      let randTop = 50;
      let randLeft = 20;

      for (let attempt = 0; attempt < 25; attempt++) {
        randTop = Math.floor(12 + Math.random() * 74);   // 12% to 86% top
        randLeft = Math.floor(10 + Math.random() * 78);  // 10% to 88% left

        // Ensure it doesn't overlap the center where Nash sits (36%-64%)
        const overlapsNash = (randTop > 34 && randTop < 66 && randLeft > 34 && randLeft < 66);
        // Ensure it jumps visibly far from the previous spot
        const isFarEnough = (Math.abs(randTop - lastTop) > 22 || Math.abs(randLeft - lastLeft) > 25);

        if (!overlapsNash && isFarEnough) {
          break;
        }
      }

      lastTop = randTop;
      lastLeft = randLeft;

      iyahBtn.style.top = randTop + '%';
      iyahBtn.style.left = randLeft + '%';

      const currentMsg = funnyRunawayMessages[msgIdx % funnyRunawayMessages.length];
      msgIdx++;

      // Trigger floating toast notification
      showToast(currentMsg);

      // Playful Sound Chime
      playSoftChime(580, 0.12);
    }

    // Attach to all user interaction triggers
    iyahBtn.addEventListener('click', dodgeIyahButton);
    iyahBtn.addEventListener('touchstart', dodgeIyahButton, { passive: false });
    iyahBtn.addEventListener('pointerdown', dodgeIyahButton);
    iyahBtn.addEventListener('mouseenter', dodgeIyahButton);

    nashBtn.addEventListener('click', () => {
      if (resultBanner) {
        resultBanner.style.display = 'block';
        resultBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      if (speechBubble) {
        speechBubble.style.display = 'none';
      }
      showToast("HAHAHAHA mas Funny ako sayo boi wag mo na ipilit! 😎");
      playSoftChime(620, 0.3);
    });
  }

  function bindChapter6RealStory() {
    const c6 = RELATIONSHIP_DATA.chapter6;
    const container = document.getElementById('realStoryEntries');
    if (!c6 || !container) return;

    container.innerHTML = c6.sections.map(sec => 
      '<div class="journal-entry-item">' +
        '<h4 class="entry-heading">' + sec.heading + '</h4>' +
        '<p class="entry-text">' + sec.text + '</p>' +
      '</div>'
    ).join('');
  }

  function bindLetterSection() {
    const sec = RELATIONSHIP_DATA.letterSection;
    if (DOM.letterBodyText && sec) {
      DOM.letterBodyText.innerHTML = sec.letterBody
        .split('\n\n')
        .filter(p => p.trim())
        .map(p => '<p style="margin-bottom: 14px; line-height: 1.8;">' + p.replace(/\n/g, '<br>') + '</p>')
        .join('');
    }

    if (DOM.waxSealBtn) {
      DOM.waxSealBtn.addEventListener('click', openLetter);
      DOM.waxSealBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          openLetter();
        }
      });
    }
  }

  function openLetter() {
    playSoftChime(440, 0.3);
    if (DOM.envelopeCard) DOM.envelopeCard.style.display = 'none';
    if (DOM.unfoldedLetterPaper) {
      DOM.unfoldedLetterPaper.style.display = 'block';
      DOM.unfoldedLetterPaper.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function bindEasterEggs() {
    bindWhackHamsterGame();
  }

  function bindWhackHamsterGame() {
    const modal = document.getElementById('whackHamsterModal');
    const closeBtn = document.getElementById('whackCloseBtn');
    const claimBtn = document.getElementById('whackClaimMedalBtn');
    const activeStage = document.getElementById('whackActiveStage');
    const victoryStage = document.getElementById('whackVictoryStage');
    const scoreCountEl = document.getElementById('whackScoreCount');
    const gridEl = document.getElementById('whackGrid');
    const triggerBtn = DOM.rageBaitBtn;

    if (!modal || !gridEl) return;

    let score = 0;
    let spawnTimer = null;
    let activeHoles = [];
    let isGameRunning = false;

    const hamsterImages = [
      'assets/stickers/bad_gf_hamster.png',
      'assets/stickers/good_girl_hamster.png',
      'assets/stickers/hamster_evil.png',
      'assets/stickers/hamster_laugh.png',
      'assets/stickers/hamster_tongue.png'
    ];

    const hitPhrases = [
      'Aray boi! 💥',
      'Wag ako! 🐹',
      'Kulit mo talaga! 😂',
      'Bakit mo pinindot?! 😭',
      'Lagot ka kay Nash! 😈',
      'Ouch boi! 💢'
    ];

    // Build 9 holes
    gridEl.innerHTML = '';
    for (let i = 0; i < 9; i++) {
      const hole = document.createElement('div');
      hole.className = 'whack-hole';
      hole.setAttribute('data-hole-idx', i);

      const hamsterImg = document.createElement('img');
      hamsterImg.className = 'whack-hamster';
      hamsterImg.src = hamsterImages[i % hamsterImages.length];
      hamsterImg.alt = 'Hamster';

      const handleHit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!hamsterImg.classList.contains('up') || hamsterImg.classList.contains('hit')) return;

        hamsterImg.classList.add('hit');
        score++;
        if (scoreCountEl) scoreCountEl.textContent = score;

        // Sound & Floating Bubble
        playSoftChime(600 + Math.random() * 200, 0.12);
        const bubble = document.createElement('div');
        bubble.className = 'whack-hit-bubble';
        bubble.textContent = hitPhrases[Math.floor(Math.random() * hitPhrases.length)];
        hole.appendChild(bubble);
        setTimeout(() => bubble.remove(), 500);

        setTimeout(() => {
          hamsterImg.classList.remove('up', 'hit');
        }, 150);

        if (score >= 10) {
          endGameWithVictory();
        }
      };

      hamsterImg.addEventListener('click', handleHit);
      hamsterImg.addEventListener('touchstart', handleHit, { passive: false });

      hole.appendChild(hamsterImg);
      gridEl.appendChild(hole);
      activeHoles.push({ hole, img: hamsterImg });
    }

    function popRandomHamster() {
      if (!isGameRunning || score >= 10) return;

      const randomIdx = Math.floor(Math.random() * activeHoles.length);
      const target = activeHoles[randomIdx];

      if (!target.img.classList.contains('up')) {
        target.img.src = hamsterImages[Math.floor(Math.random() * hamsterImages.length)];
        target.img.classList.remove('hit');
        target.img.classList.add('up');

        const stayDuration = Math.max(650, 1100 - score * 35);
        setTimeout(() => {
          if (target.img.classList.contains('up')) {
            target.img.classList.remove('up');
          }
        }, stayDuration);
      }

      const nextPopInterval = Math.max(500, 850 - score * 25);
      spawnTimer = setTimeout(popRandomHamster, nextPopInterval);
    }

    function startGame() {
      score = 0;
      isGameRunning = true;
      if (scoreCountEl) scoreCountEl.textContent = '0';
      if (activeStage) activeStage.style.display = 'block';
      if (victoryStage) victoryStage.style.display = 'none';
      modal.style.display = 'flex';

      activeHoles.forEach(h => h.img.classList.remove('up', 'hit'));
      clearTimeout(spawnTimer);
      spawnTimer = setTimeout(popRandomHamster, 400);
      playSoftChime(523, 0.2);
    }

    function endGameWithVictory() {
      isGameRunning = false;
      clearTimeout(spawnTimer);
      activeHoles.forEach(h => h.img.classList.remove('up', 'hit'));

      if (activeStage) activeStage.style.display = 'none';
      if (victoryStage) {
        victoryStage.style.display = 'block';
        createCelebrationParticles(victoryStage);
      }
      playSoftChime(587, 0.2);
      setTimeout(() => playSoftChime(880, 0.35), 180);
    }

    function closeModal() {
      isGameRunning = false;
      clearTimeout(spawnTimer);
      activeHoles.forEach(h => h.img.classList.remove('up', 'hit'));
      modal.style.display = 'none';
    }

    if (triggerBtn) {
      triggerBtn.addEventListener('click', startGame);
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }
    if (claimBtn) {
      claimBtn.addEventListener('click', () => {
        closeModal();
        showToast("👑 Trophy Claimed: Certified Makulit Girlfriend! HAHAHA ♡");
      });
    }
  }

  let toastTimeout;
  function showToast(msg) {
    if (!DOM.toastPopup || !DOM.toastMessage) return;
    DOM.toastMessage.textContent = msg;
    DOM.toastPopup.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      DOM.toastPopup.classList.remove('show');
    }, 3800);
  }

  function playSoftChime(freq = 440, duration = 0.2) {
    try {
      if (!STATE.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) STATE.audioCtx = new AudioContext();
      }
      if (!STATE.audioCtx) return;

      if (STATE.audioCtx.state === 'suspended') {
        STATE.audioCtx.resume();
      }

      const osc = STATE.audioCtx.createOscillator();
      const gain = STATE.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, STATE.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, STATE.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, STATE.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(STATE.audioCtx.destination);

      osc.start();
      osc.stop(STATE.audioCtx.currentTime + duration);
    } catch (e) {}
  }

  function bindMusicToggle() {
    const audioEl = document.getElementById('bgAudio');
    if (!DOM.musicToggleBtn) return;

    // Apply default comfortable background volume (0.3 = 30%)
    const defaultVol = RELATIONSHIP_DATA.musicSettings?.volume ?? 0.3;
    if (audioEl) {
      audioEl.volume = Math.max(0.05, Math.min(1.0, defaultVol));
    }

    DOM.musicToggleBtn.addEventListener('click', () => {
      STATE.musicPlaying = !STATE.musicPlaying;
      const label = DOM.musicToggleBtn.querySelector('.music-label');

      if (STATE.musicPlaying) {
        if (label) label.textContent = 'Music: On';
        DOM.musicToggleBtn.classList.add('active');

        if (audioEl) {
          audioEl.volume = Math.max(0.05, Math.min(1.0, RELATIONSHIP_DATA.musicSettings?.volume ?? 0.3));
          audioEl.play().catch(() => {
            startAmbientSynth();
          });
        } else {
          startAmbientSynth();
        }
      } else {
        if (label) label.textContent = 'Music: Off';
        DOM.musicToggleBtn.classList.remove('active');
        if (audioEl) audioEl.pause();
        stopAmbientSynth();
      }
    });
  }

  let synthInterval;
  function startAmbientSynth() {
    const notes = [330, 392, 440, 523, 587, 659];
    let noteIdx = 0;
    stopAmbientSynth();
    synthInterval = setInterval(() => {
      if (!STATE.musicPlaying) return;
      playSoftChime(notes[noteIdx % notes.length], 0.35);
      noteIdx++;
    }, 1400);
  }

  function stopAmbientSynth() {
    if (synthInterval) clearInterval(synthInterval);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
