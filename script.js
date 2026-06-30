document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // Navigation & Scroll Effects
    // ==========================================================================
    const header = document.querySelector('.header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Smooth Header Scroll
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        
        // Sticky Header State
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Active Nav Link highlight on scroll
        let currentSection = '';
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // Mobile Navigation Menu Toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
        });
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });
    }

    // ==========================================================================
    // Portfolio Filtering
    // ==========================================================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectRows = document.querySelectorAll('.flat-project-row');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            projectRows.forEach(row => {
                const category = row.getAttribute('data-category');
                
                row.style.opacity = '0';
                
                setTimeout(() => {
                    if (filterValue === 'all' || category === filterValue || (filterValue === 'research' && category.includes('research'))) {
                        row.style.display = 'grid';
                        setTimeout(() => {
                            row.style.opacity = '1';
                        }, 50);
                    } else {
                        row.style.display = 'none';
                    }
                }, 150);
            });
        });
    });

    // ==========================================================================
    // Hero Ambient Soundwave Backdrop (Single Fine Line Acoustic Wave)
    // ==========================================================================
    const heroCanvas = document.getElementById('canvas-visualizer');
    if (heroCanvas) {
        const ctx = heroCanvas.getContext('2d');
        let animationFrameId;
        
        function resizeHeroCanvas() {
            heroCanvas.width = window.innerWidth;
            heroCanvas.height = window.innerHeight;
        }
        
        window.addEventListener('resize', resizeHeroCanvas);
        resizeHeroCanvas();
        
        let phase = 0;
        
        function animateHeroVisualizer() {
            ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
            
            ctx.beginPath();
            ctx.strokeStyle = '#dfded8'; // Flat warm-gray stroke
            ctx.lineWidth = 1;           // 1px thin acoustic wave outline
            
            const centerY = heroCanvas.height * 0.55;
            
            ctx.moveTo(0, centerY);
            for (let x = 0; x <= heroCanvas.width; x += 3) {
                // Generate a complex, organic sounding wave formula
                const distFromCenter = Math.abs(x - heroCanvas.width / 2) / (heroCanvas.width / 2);
                const envelope = Math.max(0, 1 - distFromCenter * 1.5); // taper out at left/right edges
                
                const y = centerY + 
                          Math.sin(x * 0.0035 + phase) * 45 * envelope +
                          Math.cos(x * 0.007 - phase * 0.7) * 20 * envelope +
                          Math.sin(x * 0.015 + phase * 1.3) * 8 * envelope;
                ctx.lineTo(x, y);
            }
            ctx.stroke();
            
            phase += 0.007; // Slow, organic motion
            animationFrameId = requestAnimationFrame(animateHeroVisualizer);
        }
        
        animateHeroVisualizer();
    }

    // ==========================================================================
    // Interactive Restoration Showcase (Web Audio API & Spectrogram)
    // ==========================================================================
    const btnModeBefore = document.getElementById('btn-mode-before');
    const btnModeAfter = document.getElementById('btn-mode-after');
    const audioToggle = document.getElementById('audio-source-toggle'); // Hidden compat checkbox
    
    const playBtn = document.getElementById('btn-play-pause');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeIcon = document.getElementById('volume-icon');
    const progressBarWrapper = document.getElementById('progress-bar-wrapper');
    const progressBar = document.getElementById('progress-bar');
    const progressHandle = document.getElementById('progress-handle');
    const timeCurrent = document.getElementById('time-current');
    const timeTotal = document.getElementById('time-total');
    
    const specCanvas = document.getElementById('spectrogram-canvas');
    const hudStatus = document.getElementById('playback-hud-status');
    const ledActive = document.getElementById('led-active');
    const sourceIndicator = document.getElementById('source-indicator');
    
    // Core state
    let isPlaying = false;
    let duration = 0; 
    let currentTime = 0;
    let playInterval = null;
    let audioReady = false; // Tracks if active mix elements are ready
    let useWebAudioApiNodes = false;
    let activeMix = 1; // Track Mix 1 vs Mix 2
    
    // Web Audio API Variables
    let audioContext = null;
    let analyser = null;
    let masterGain = null;
    
    // Four independent media source nodes and gains
    let sourceMix1BeforeNode = null;
    let sourceMix1AfterNode = null;
    let sourceMix2BeforeNode = null;
    let sourceMix2AfterNode = null;
    let gainMix1BeforeNode = null;
    let gainMix1AfterNode = null;
    let gainMix2BeforeNode = null;
    let gainMix2AfterNode = null;
    
    // Load audio elements
    const audioMix1Before = document.getElementById('audio-mix1-before');
    const audioMix1After = document.getElementById('audio-mix1-after');
    const audioMix2Before = document.getElementById('audio-mix2-before');
    const audioMix2After = document.getElementById('audio-mix2-after');
    
    function getActiveAudioElements() {
        if (activeMix === 1) {
            return { before: audioMix1Before, after: audioMix1After };
        } else {
            return { before: audioMix2Before, after: audioMix2After };
        }
    }
    
    // Check if real files are loaded
    function handleAudioLoaded() {
        const current = getActiveAudioElements();
        if (current.before.readyState >= 1 && current.after.readyState >= 1) {
            audioReady = true;
            duration = Math.max(current.before.duration, current.after.duration) || 0;
            timeTotal.textContent = formatTime(duration);
            sourceIndicator.textContent = 'LOSSLESS WAV READY';
            sourceIndicator.style.color = '#1c1c1e';
            sourceIndicator.style.backgroundColor = 'rgba(0,0,0,0.05)';
            sourceIndicator.style.borderColor = 'rgba(0,0,0,0.1)';
        }
    }

    function handleAudioError() {
        audioReady = false;
        duration = 0;
        timeTotal.textContent = formatTime(duration);
        sourceIndicator.textContent = 'AUDIO LOAD ERROR';
        sourceIndicator.style.color = '#ff3b30';
        sourceIndicator.style.backgroundColor = 'rgba(255, 59, 48, 0.08)';
        sourceIndicator.style.borderColor = 'rgba(255, 59, 48, 0.15)';
    }

    // Attach preloading listeners once to all elements
    [audioMix1Before, audioMix1After, audioMix2Before, audioMix2After].forEach(audio => {
        audio.addEventListener('loadedmetadata', handleAudioLoaded);
        audio.addEventListener('canplay', handleAudioLoaded);
        audio.addEventListener('error', handleAudioError);
    });

    function checkAudioSources() {
        const current = getActiveAudioElements();
        if (current.before.readyState >= 1 && current.after.readyState >= 1) {
            handleAudioLoaded();
        } else {
            audioReady = false;
            // Set loading status while preloading headers
            sourceIndicator.textContent = 'BUFFERING MUSIC MIX...';
            sourceIndicator.style.color = 'var(--text-secondary)';
            sourceIndicator.style.backgroundColor = 'rgba(0,0,0,0.02)';
            sourceIndicator.style.borderColor = 'var(--border-color)';
            
            setTimeout(() => {
                const currentCheck = getActiveAudioElements();
                if (currentCheck.before.readyState < 1 || currentCheck.after.readyState < 1) {
                    if (sourceIndicator.textContent === 'BUFFERING MUSIC MIX...') {
                        handleAudioError();
                    }
                }
            }, 8000); // 8 seconds fail-safe timeout for preloading over network
        }
    }
    
    // Load a specific mix dynamically
    function loadMix(mixNumber) {
        // Pause all playing audio elements
        [audioMix1Before, audioMix1After, audioMix2Before, audioMix2After].forEach(audio => {
            audio.pause();
        });

        activeMix = mixNumber;
        
        const wasPlaying = isPlaying;
        if (isPlaying) {
            clearInterval(playInterval);
            isPlaying = false;
        }
        
        // Reset playback position
        currentTime = 0;
        progressBar.style.width = '0%';
        progressHandle.style.left = '0%';
        timeCurrent.textContent = "0:00";
        
        audioReady = false; 
        
        // Preload elements manually just in case
        const current = getActiveAudioElements();
        current.before.load();
        current.after.load();
        
        checkAudioSources();
        
        // Reset volume gains
        if (audioContext && useWebAudioApiNodes) {
            updateRealAudioGains();
        }
        
        if (wasPlaying) {
            setTimeout(() => {
                playAudio();
            }, 200);
        }
    }
    
    checkAudioSources();

    // Start / Resume Web Audio API
    function initWebAudio() {
        if (audioContext) return;
        
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContextClass();
        
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256; // Smaller fftSize for precise, hardware-like oscilloscope bars
        
        masterGain = audioContext.createGain();
        masterGain.gain.value = volumeSlider.value;
        masterGain.connect(audioContext.destination);
        
        analyser.connect(masterGain);
        
        // Connect all four elements to Web Audio context
        try {
            sourceMix1BeforeNode = audioContext.createMediaElementSource(audioMix1Before);
            sourceMix1AfterNode = audioContext.createMediaElementSource(audioMix1After);
            sourceMix2BeforeNode = audioContext.createMediaElementSource(audioMix2Before);
            sourceMix2AfterNode = audioContext.createMediaElementSource(audioMix2After);
            
            gainMix1BeforeNode = audioContext.createGain();
            gainMix1AfterNode = audioContext.createGain();
            gainMix2BeforeNode = audioContext.createGain();
            gainMix2AfterNode = audioContext.createGain();
            
            // Connect Mix 1
            sourceMix1BeforeNode.connect(gainMix1BeforeNode);
            sourceMix1AfterNode.connect(gainMix1AfterNode);
            gainMix1BeforeNode.connect(analyser);
            gainMix1AfterNode.connect(analyser);
            
            // Connect Mix 2
            sourceMix2BeforeNode.connect(gainMix2BeforeNode);
            sourceMix2AfterNode.connect(gainMix2AfterNode);
            gainMix2BeforeNode.connect(analyser);
            gainMix2AfterNode.connect(analyser);
            
            updateRealAudioGains();
            useWebAudioApiNodes = true;
        } catch (err) {
            console.warn("CORS/Local system security blocked connection. Audio elements routing to bypass visualizer.", err);
            useWebAudioApiNodes = false;
        }
        
        startSpectrogramRendering();
    }

    function updateRealAudioGains() {
        if (!gainMix1BeforeNode || !gainMix1AfterNode || !gainMix2BeforeNode || !gainMix2AfterNode) return;
        const now = audioContext.currentTime;
        
        if (activeMix === 1) {
            // Mix 1 active
            if (!audioToggle.checked) {
                gainMix1BeforeNode.gain.setTargetAtTime(1.0, now, 0.05);
                gainMix1AfterNode.gain.setTargetAtTime(0.0, now, 0.05);
            } else {
                gainMix1BeforeNode.gain.setTargetAtTime(0.0, now, 0.05);
                gainMix1AfterNode.gain.setTargetAtTime(1.0, now, 0.05);
            }
            // Mute Mix 2
            gainMix2BeforeNode.gain.setTargetAtTime(0.0, now, 0.05);
            gainMix2AfterNode.gain.setTargetAtTime(0.0, now, 0.05);
        } else {
            // Mix 2 active
            if (!audioToggle.checked) {
                gainMix2BeforeNode.gain.setTargetAtTime(1.0, now, 0.05);
                gainMix2AfterNode.gain.setTargetAtTime(0.0, now, 0.05);
            } else {
                gainMix2BeforeNode.gain.setTargetAtTime(0.0, now, 0.05);
                gainMix2AfterNode.gain.setTargetAtTime(1.0, now, 0.05);
            }
            // Mute Mix 1
            gainMix1BeforeNode.gain.setTargetAtTime(0.0, now, 0.05);
            gainMix1AfterNode.gain.setTargetAtTime(0.0, now, 0.05);
        }
    }

    // ==========================================================================
    // Monochrome Oscilloscope Level-Meter Spectrogram (Waterfall)
    // ==========================================================================
    let specFrameId = null;
    const specCtx = specCanvas ? specCanvas.getContext('2d') : null;
    
    function startSpectrogramRendering() {
        if (!specCtx || specFrameId) return;
        
        function resizeSpecCanvas() {
            const dpr = window.devicePixelRatio || 1;
            const rect = specCanvas.getBoundingClientRect();
            specCanvas.width = rect.width * dpr;
            specCanvas.height = rect.height * dpr;
            specCtx.scale(dpr, dpr);
            
            // Matte black canvas clear
            specCtx.fillStyle = '#0c0c0d';
            specCtx.fillRect(0, 0, rect.width, rect.height);
        }
        
        resizeSpecCanvas();
        
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        
        function renderWaterfall() {
            if (!isPlaying) return;
            
            analyser.getByteFrequencyData(dataArray);
            
            const w = specCanvas.width / (window.devicePixelRatio || 1);
            const h = specCanvas.height / (window.devicePixelRatio || 1);
            
            // Shift canvas left continuously (waterfall)
            const shiftAmt = 2.0;
            specCtx.drawImage(specCanvas, -shiftAmt, 0, w, h);
            
            // Redraw background cover on shifted pixels to avoid edge bleeding
            specCtx.fillStyle = '#0c0c0d';
            specCtx.fillRect(w - shiftAmt, 0, shiftAmt, h);
            
            const cellHeight = h / (bufferLength * 0.7);
            
            // Render monochrome orange/amber values representing signals
            for (let i = 0; i < bufferLength * 0.7; i++) {
                const value = dataArray[i]; 
                
                // Color scaling: pure black -> dark amber -> bright orange -> pale amber highlight
                let color;
                if (value < 20) {
                    color = '#0c0c0d'; // Screen black
                } else if (value < 90) {
                    const pct = (value - 20) / 70;
                    color = `rgb(${pct * 120}, ${pct * 30}, 0)`; // Muted dark amber
                } else if (value < 180) {
                    const pct = (value - 90) / 90;
                    color = `rgb(${120 + pct * 110}, ${30 + pct * 60}, 0)`; // Rich bright amber (#e65c00)
                } else {
                    const pct = (value - 180) / 75;
                    color = `rgb(255, ${90 + pct * 105}, ${pct * 140})`; // Pale amber peak highlight
                }
                
                specCtx.fillStyle = color;
                specCtx.fillRect(w - shiftAmt, h - (i * cellHeight), shiftAmt, cellHeight + 0.3);
            }
            
            specFrameId = requestAnimationFrame(renderWaterfall);
        }
        
        renderWaterfall();
    }
    
    function stopSpectrogramRendering() {
        if (specFrameId) {
            cancelAnimationFrame(specFrameId);
            specFrameId = null;
        }
    }

    // ==========================================================================
    // Playback Logic
    // ==========================================================================
    function togglePlayback() {
        initWebAudio();
        
        if (isPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    }
    
    function playAudio() {
        if (!audioReady) return; // Ignore if tracks failed to buffer

        isPlaying = true;
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i> PAUSE';
        
        if (hudStatus) {
            hudStatus.textContent = 'PLAYING';
            hudStatus.style.color = 'var(--accent-amber)';
        }
        if (ledActive) {
            ledActive.classList.add('active');
        }
        
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume();
        }
        
        const current = getActiveAudioElements();
        current.before.currentTime = currentTime;
        current.after.currentTime = currentTime;
        
        current.before.play();
        current.after.play();
        
        playInterval = setInterval(updateTimeline, 100);
        
        if (analyser) {
            startSpectrogramRendering();
        }
    }
    
    function pauseAudio() {
        isPlaying = false;
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i> PLAY';
        
        if (hudStatus) {
            hudStatus.textContent = 'PAUSED';
            hudStatus.style.color = 'rgba(255, 255, 255, 0.4)';
        }
        if (ledActive) {
            ledActive.classList.remove('active');
        }
        
        // Pause all elements to be safe
        [audioMix1Before, audioMix1After, audioMix2Before, audioMix2After].forEach(audio => {
            audio.pause();
        });
        
        clearInterval(playInterval);
        stopSpectrogramRendering();
    }
    
    function updateTimeline() {
        const current = getActiveAudioElements();
        currentTime = current.before.currentTime;
        duration = current.before.duration || duration;
        
        const percent = (currentTime / duration) * 100;
        progressBar.style.width = `${percent}%`;
        progressHandle.style.left = `${percent}%`;
        
        timeCurrent.textContent = formatTime(currentTime);
        timeTotal.textContent = formatTime(duration);
    }
    
    function formatTime(secs) {
        if (isNaN(secs)) return "0:00";
        const m = Math.floor(secs / 60);
        const s = Math.floor(secs % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    }
    
    // ==========================================================================
    // Hardware Buttons Toggle Control
    // ==========================================================================
    if (btnModeBefore && btnModeAfter) {
        btnModeBefore.addEventListener('click', () => {
            btnModeBefore.classList.add('active');
            btnModeAfter.classList.remove('active');
            audioToggle.checked = false; // Hidden toggle synced
            
            if (useWebAudioApiNodes) {
                updateRealAudioGains();
            } else {
                const current = getActiveAudioElements();
                current.before.muted = false;
                current.after.muted = true;
            }
        });
        
        btnModeAfter.addEventListener('click', () => {
            btnModeAfter.classList.add('active');
            btnModeBefore.classList.remove('active');
            audioToggle.checked = true; // Hidden toggle synced
            
            if (useWebAudioApiNodes) {
                updateRealAudioGains();
            } else {
                const current = getActiveAudioElements();
                current.before.muted = true;
                current.after.muted = false;
            }
        });
    }
    
    // Mix Selector buttons
    const btnMix1 = document.getElementById('btn-mix-1');
    const btnMix2 = document.getElementById('btn-mix-2');
    
    if (btnMix1 && btnMix2) {
        btnMix1.addEventListener('click', () => {
            if (activeMix !== 1) {
                btnMix1.classList.add('active');
                btnMix2.classList.remove('active');
                loadMix(1);
            }
        });
        
        btnMix2.addEventListener('click', () => {
            if (activeMix !== 2) {
                btnMix2.classList.add('active');
                btnMix1.classList.remove('active');
                loadMix(2);
            }
        });
    }
    
    // Play button click
    playBtn.addEventListener('click', togglePlayback);
    
    // Scrubber click
    progressBarWrapper.addEventListener('click', (e) => {
        if (!audioReady) return;
        const rect = progressBarWrapper.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        currentTime = percent * duration;
        
        progressBar.style.width = `${percent * 100}%`;
        progressHandle.style.left = `${percent * 100}%`;
        timeCurrent.textContent = formatTime(currentTime);
        
        const current = getActiveAudioElements();
        current.before.currentTime = currentTime;
        current.after.currentTime = currentTime;
    });
    
    // Volume Control
    volumeSlider.addEventListener('input', () => {
        const vol = volumeSlider.value;
        
        if (masterGain) {
            masterGain.gain.setValueAtTime(vol, audioContext.currentTime);
        }
        
        if (vol == 0) {
            volumeIcon.className = 'fa-solid fa-volume-xmark volume-icon';
        } else if (vol < 0.5) {
            volumeIcon.className = 'fa-solid fa-volume-low volume-icon';
        } else {
            volumeIcon.className = 'fa-solid fa-volume-high volume-icon';
        }
        
        if (!useWebAudioApiNodes) {
            [audioMix1Before, audioMix1After, audioMix2Before, audioMix2After].forEach(audio => {
                audio.volume = vol;
            });
        }
    });

    // Listen to ended events on both mixes
    audioMix1Before.addEventListener('ended', () => {
        if (activeMix === 1) handleEnded();
    });
    audioMix2Before.addEventListener('ended', () => {
        if (activeMix === 2) handleEnded();
    });

    function handleEnded() {
        pauseAudio();
        currentTime = 0;
        progressBar.style.width = '0%';
        progressHandle.style.left = '0%';
        timeCurrent.textContent = "0:00";
    }
});
