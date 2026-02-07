document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. SIDEBAR TOGGLE
       ========================================= */
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle');

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    /* =========================================
       2. NOTEBOOK LOGIC (Rant & Release)
       ========================================= */
    const rantBtn = document.getElementById('btn-rant');
    const notebookOverlay = document.getElementById('notebook-overlay');
    const submitBtn = document.getElementById('submit-rant');
    
    // Elements to manipulate inside the notebook
    const userRantTextarea = document.getElementById('user-rant');
    const verseCard = document.getElementById('verse-card');
    const notebookTitle = document.querySelector('.notebook-title');
    const footer = document.querySelector('.notebook-footer');

    // The Array of Verses (God speaking to You)
    const loveVerses = [
        { text: "I have loved you with an everlasting love; I have drawn you with unfailing kindness.", ref: "Jeremiah 31:3" },
        { text: "Come to me, all you who are weary and burdened, and I will give you rest.", ref: "Matthew 11:28" },
        { text: "So do not fear, for I am with you; do not be dismayed, for I am your God.", ref: "Isaiah 41:10" },
        { text: "I will strengthen you and help you; I will uphold you with my righteous right hand.", ref: "Isaiah 41:10" },
        { text: "For I am the Lord your God who takes hold of your right hand and says to you, Do not fear; I will help you.", ref: "Isaiah 41:13" },
        { text: "When you pass through the waters, I will be with you.", ref: "Isaiah 43:2" },
        { text: "Do not fear, for I have redeemed you; I have summoned you by name; you are mine.", ref: "Isaiah 43:1" },
        { text: "Since you are precious and honored in my sight, and because I love you.", ref: "Isaiah 43:4" },
        { text: "For I know the plans I have for you, plans to prosper you and not to harm you, plans to give you hope and a future.", ref: "Jeremiah 29:11" },
        { text: "You will seek me and find me when you seek me with all your heart.", ref: "Jeremiah 29:13" },
        { text: "Call to me and I will answer you and tell you great and unsearchable things you do not know.", ref: "Jeremiah 33:3" },
        { text: "Peace I leave with you; my peace I give you.", ref: "John 14:27" },
        { text: "Do not let your hearts be troubled and do not be afraid.", ref: "John 14:27" },
        { text: "I will not leave you as orphans; I will come to you.", ref: "John 14:18" },
        { text: "In this world you will have trouble. But take heart! I have overcome the world.", ref: "John 16:33" },
        { text: "Take courage! It is I. Don’t be afraid.", ref: "Matthew 14:27" },
        { text: "My grace is sufficient for you, for my power is made perfect in weakness.", ref: "2 Corinthians 12:9" },
        { text: "Never will I leave you; never will I forsake you.", ref: "Hebrews 13:5" },
        { text: "Be still, and know that I am God.", ref: "Psalm 46:10" },
        { text: "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.", ref: "Psalm 32:8" },
        { text: "Call on me in the day of trouble; I will deliver you, and you will honor me.", ref: "Psalm 50:15" },
        { text: "Can a mother forget the baby at her breast? Though she may forget, I will not forget you!", ref: "Isaiah 49:15" },
        { text: "See, I have engraved you on the palms of my hands.", ref: "Isaiah 49:16" },
        { text: "Though the mountains be shaken and the hills be removed, yet my unfailing love for you will not be shaken.", ref: "Isaiah 54:10" },
        { text: "I, even I, am he who comforts you.", ref: "Isaiah 51:12" },
        { text: "As a mother comforts her child, so will I comfort you.", ref: "Isaiah 66:13" },
        { text: "My Presence will go with you, and I will give you rest.", ref: "Exodus 33:14" },
        { text: "Do not grieve, for the joy of the Lord is your strength.", ref: "Nehemiah 8:10" },
        { text: "I have made you and I will carry you; I will sustain you and I will rescue you.", ref: "Isaiah 46:4" },
        { text: "I am the Lord, the God of all mankind. Is anything too hard for me?", ref: "Jeremiah 32:27" },
        { text: "I will restore you to health and heal your wounds.", ref: "Jeremiah 30:17" },
        { text: "I will lead them beside streams of water on a level path where they will not stumble.", ref: "Jeremiah 31:9" },
        { text: "Do not be afraid, little flock, for your Father has been pleased to give you the kingdom.", ref: "Luke 12:32" },
        { text: "I have come that they may have life, and have it to the full.", ref: "John 10:10" },
        { text: "I give them eternal life, and they shall never perish; no one will snatch them out of my hand.", ref: "John 10:28" },
        { text: "I am the way and the truth and the life.", ref: "John 14:6" },
        { text: "Look! I stand at the door and knock. If you hear my voice and open the door, I will come in.", ref: "Revelation 3:20" },
        { text: "Do not be afraid of them, for I am with you and will rescue you.", ref: "Jeremiah 1:8" },
        { text: "Take heart, daughter... your faith has healed you.", ref: "Matthew 9:22" },
        { text: "Everything is possible for one who believes.", ref: "Mark 9:23" },
        { text: "I am the light of the world. Whoever follows me will never walk in darkness.", ref: "John 8:12" },
        { text: "Father, I want those you have given me to be with me where I am.", ref: "John 17:24" },
        { text: "The Lord your God goes with you; he will never leave you nor forsake you.", ref: "Deuteronomy 31:6" },
        { text: "The Lord will fight for you; you need only to be still.", ref: "Exodus 14:14" },
        { text: "I am the Lord, who heals you.", ref: "Exodus 15:26" },
        { text: "See, I send an angel before you to guard you on the way.", ref: "Exodus 23:20" },
        { text: "The Lord bless you and keep you.", ref: "Numbers 6:24" },
        { text: "The Lord turn his face toward you and give you peace.", ref: "Numbers 6:26" },
        { text: "Do not be afraid of them; the Lord your God himself will fight for you.", ref: "Deuteronomy 3:22" }
    ];

    /* --- OPEN NOTEBOOK BUTTON --- */
    if (rantBtn && notebookOverlay) {
        rantBtn.addEventListener('click', () => {
            // 1. Reset the notebook state
            if (userRantTextarea) {
                userRantTextarea.value = '';             
                userRantTextarea.style.display = 'block'; 
                userRantTextarea.classList.remove('burden-lifted');
            }
            
            if (footer) {
                footer.style.display = 'flex';
                footer.classList.remove('burden-lifted');
            }

            if (notebookTitle) notebookTitle.textContent = "How's your heart today—light, heavy, or somewhere in between?";
            
            if (verseCard) {
                verseCard.classList.add('hidden');
                verseCard.style.display = 'none';
                verseCard.classList.remove('divine-reveal');
            }

            // 2. Open the overlay
            notebookOverlay.classList.add('active');
        });
    }

    /* --- CLOSE NOTEBOOK OVERLAY --- */
    if (notebookOverlay) {
        notebookOverlay.addEventListener('click', (e) => {
            if (e.target === notebookOverlay) {
                notebookOverlay.classList.remove('active');
            }
        });
    }

    /* --- RELEASE BUTTON LOGIC --- */
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            
            // 1. ANIMATE THE RELEASE
            if (userRantTextarea) userRantTextarea.classList.add('burden-lifted');
            if (footer) footer.classList.add('burden-lifted');

            // 2. WAIT... (Dramatic Pause)
            setTimeout(() => {
                // A. Hide old inputs
                if (userRantTextarea) {
                    userRantTextarea.style.display = 'none';
                    userRantTextarea.classList.remove('burden-lifted'); 
                }
                if (footer) {
                    footer.style.display = 'none';
                    footer.classList.remove('burden-lifted'); 
                }

                // B. Change the Title
                if (notebookTitle) notebookTitle.textContent = "God says...";

                // C. Get Random Verse
                const randomVerse = loveVerses[Math.floor(Math.random() * loveVerses.length)];

                // D. Inject Verse
                if (verseCard) {
                    verseCard.innerHTML = `
                        <p class="verse-text">"${randomVerse.text}"</p>
                        <p class="verse-ref">- ${randomVerse.ref}</p>
                    `;
                    
                    // Force flex display
                    verseCard.style.display = 'flex'; 
                    verseCard.classList.remove('hidden');
                    
                    // Trigger animation
                    verseCard.classList.remove('divine-reveal');
                    void verseCard.offsetWidth; // Magic trigger
                    verseCard.classList.add('divine-reveal');
                }

            }, 1200); 
        });
    }

    /* =========================================
       3. MUSEUM / GALLERY LOGIC
       ========================================= */
    const galleryBtn = document.getElementById('btn-gallery');
    const museumOverlay = document.getElementById('museum-overlay');
    const closeMuseumBtn = document.getElementById('close-museum');
    
    // Elements for the Modal
    const photoModal = document.getElementById('photo-modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.querySelector('.modal-caption');

    // NEW: Verses about Fellowship & Love
    const fellowshipVerses = [
        { text: "Two are better than one, because they have a good return for their labor.", ref: "Ecclesiastes 4:9" },
        { text: "If either of them falls down, one can help the other up.", ref: "Ecclesiastes 4:10" },
        { text: "As iron sharpens iron, so one person sharpens another.", ref: "Proverbs 27:17" },
        { text: "Therefore encourage one another and build each other up.", ref: "1 Thessalonians 5:11" },
        { text: "How good and pleasant it is when God's people live together in unity!", ref: "Psalm 133:1" },
        { text: "By this everyone will know that you are my disciples, if you love one another.", ref: "John 13:35" },
        { text: "And over all these virtues put on love, which binds them all together in perfect unity.", ref: "Colossians 3:14" },
        { text: "Be devoted to one another in love. Honor one another above yourselves.", ref: "Romans 12:10" },
        { text: "A friend loves at all times, and a brother is born for a time of adversity.", ref: "Proverbs 17:17" },
        { text: "Let us not give up meeting together... but let us encourage one another.", ref: "Hebrews 10:25" },
        { text: "Above all, love each other deeply, because love covers over a multitude of sins.", ref: "1 Peter 4:8" },
        { text: "Carry each other's burdens, and in this way you will fulfill the law of Christ.", ref: "Galatians 6:2" },
        { text: "But if we walk in the light, as he is in the light, we have fellowship with one another.", ref: "1 John 1:7" },
        { text: "I thank my God every time I remember you.", ref: "Philippians 1:3" },
        { text: "Greater love has no one than this: to lay down one’s life for one’s friends.", ref: "John 15:13" }
    ];

    if (galleryBtn && museumOverlay) {
        
        // --- ANIMATION OBSERVER ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view'); 
                }
            });
        }, { root: museumOverlay, threshold: 0.4 });

        // 1. OPEN GALLERY
        galleryBtn.addEventListener('click', () => {
            museumOverlay.classList.add('active');
            if (typeof sidebar !== 'undefined') sidebar.classList.remove('active');

            // Start Watching Elements
            const items = document.querySelectorAll('.img-container, .museum-outro');
            items.forEach(el => observer.observe(el));
        });

        // 2. CLICKING A PHOTO (Open Lightbox with Verse)
        const photos = document.querySelectorAll('.img-container img');
        photos.forEach(photo => {
            photo.addEventListener('click', (e) => {
                e.stopPropagation(); 
                const src = photo.getAttribute('src'); 
                
                if (modalImg && photoModal) {
                    // A. Set Image
                    modalImg.src = src; 
                    
                    // B. Set Random Fellowship Verse
                    const randomVerse = fellowshipVerses[Math.floor(Math.random() * fellowshipVerses.length)];
                    
                    if (modalCaption) {
                        modalCaption.innerHTML = `
                            "${randomVerse.text}"<br>
                            <span style="font-size: 0.6em; color: var(--night-bordeaux); display:block; margin-top:10px;">
                                — ${randomVerse.ref} —
                            </span>
                        `;
                    }

                    // C. Show Modal
                    photoModal.classList.add('active'); 
                }
            });
        });

        // 3. CLOSE PHOTO MODAL
        if (photoModal) {
            photoModal.addEventListener('click', () => {
                photoModal.classList.remove('active');
            });
        }

        // 4. CLOSE MUSEUM
        if (closeMuseumBtn) {
            closeMuseumBtn.addEventListener('click', () => {
                museumOverlay.classList.remove('active');
            });
        }

        museumOverlay.addEventListener('click', (e) => {
            if (e.target === museumOverlay) {
                museumOverlay.classList.remove('active');
            }
        });
        
        // 5. HORIZONTAL SCROLL
        museumOverlay.addEventListener('wheel', (evt) => {
            evt.preventDefault();
            museumOverlay.scrollLeft += evt.deltaY;
        });
    }

    /* =========================================
       4. TIMER & LOCATION LOGIC (Two Timers)
       ========================================= */
    const timerBtn = document.getElementById('btn-timer');
    const timerOverlay = document.getElementById('timer-overlay');
    const closeTimerBtn = document.getElementById('close-timer');

    // 1. Set the Target Dates (Added GMT+0800 for Philippines Standard Time)
    const date1 = new Date("February 13, 2026 18:00:00 GMT+0800").getTime();
    const date2 = new Date("February 27, 2026 18:00:00 GMT+0800").getTime();

    // Helper function to update a specific set of IDs
    function calculateTime(targetDate, idSuffix) {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            document.getElementById("days" + idSuffix).innerText = "00";
            document.getElementById("hours" + idSuffix).innerText = "00";
            document.getElementById("mins" + idSuffix).innerText = "00";
            document.getElementById("secs" + idSuffix).innerText = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days" + idSuffix).innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours" + idSuffix).innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("mins" + idSuffix).innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("secs" + idSuffix).innerText = seconds < 10 ? "0" + seconds : seconds;
    }

    function startTimers() {
        calculateTime(date1, "1"); // Update IDs: days1, hours1...
        calculateTime(date2, "2"); // Update IDs: days2, hours2...
    }

    if (timerBtn && timerOverlay) {
        let timerInterval; // Store interval ID

        timerBtn.addEventListener('click', () => {
            timerOverlay.classList.add('active');
            if (typeof sidebar !== 'undefined') sidebar.classList.remove('active');
            
            // Run immediately then every second
            startTimers();
            timerInterval = setInterval(startTimers, 1000);
        });

        // Close functions
        const closeTimer = () => {
            timerOverlay.classList.remove('active');
            if (timerInterval) clearInterval(timerInterval); // Stop math when closed
        };

        if (closeTimerBtn) closeTimerBtn.addEventListener('click', closeTimer);
        
        timerOverlay.addEventListener('click', (e) => {
            if (e.target === timerOverlay || e.target.classList.contains('timer-scroll-wrapper')) {
                closeTimer();
            }
        });
    }

    /* =========================================
       5. INVISIBLE BACKGROUND MUSIC
       ========================================= */
    const bgMusic = document.getElementById('bg-music');

    if (bgMusic) {
        bgMusic.volume = 0.4; // Set volume (0.1 to 1.0)

        // Try to play immediately (might fail due to browser rules)
        bgMusic.play().catch(() => {
            // If blocked, wait for the FIRST interaction anywhere on the page
            document.addEventListener('click', () => {
                bgMusic.play();
            }, { once: true }); // 'once: true' means it runs only one time
        });
    }

    /* =========================================
   6. SMART VIEWPORT SCALER (The "Shrink to Fit" Fix)
   ========================================= */
    function updateViewport() {
        const viewport = document.getElementById('viewport-meta');
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        
        // Check if we are in Landscape Mode
        // (We check if width > height, standard for landscape)
        const isLandscape = screenWidth > screenHeight;

        if (isLandscape && screenWidth < 1024) {
            // WE ARE ON A PHONE IN LANDSCAPE!
            // Force the browser to think it is 1200px wide.
            // This makes the site zoom out to fit your original design.
            viewport.setAttribute('content', 'width=1450, user-scalable=no');
        } else {
            // WE ARE IN PORTRAIT OR ON DESKTOP
            // Use standard mobile sizing (so the "Rotate" warning looks normal)
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    }

    // Run on load
    window.addEventListener('load', updateViewport);

    // Run whenever the user rotates their phone
    window.addEventListener('orientationchange', () => {
        // Small delay to let the screen finish rotating
        setTimeout(updateViewport, 100);
    });
    window.addEventListener('resize', updateViewport);

}); // END OF DOM CONTENT LOADED