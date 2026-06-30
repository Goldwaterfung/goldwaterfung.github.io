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
    let duration = 24; 
    let currentTime = 0;
    let playInterval = null;
    let isFallback = true; 
    let useWebAudioApiNodes = false;
    let activeMix = 1; // Track Mix 1 vs Mix 2
    
    // Web Audio API Variables
    let audioContext = null;
    let analyser = null;
    let sourceBeforeNode = null;
    let sourceAfterNode = null;
    let gainBeforeNode = null;
    let gainAfterNode = null;
    let masterGain = null;
    
    // Fallback Synth Nodes
    let synthOsc1 = null;
    let synthOsc2 = null;
    let noiseNode = null;
    let lowpassFilter = null;
    let reverbNode = null;
    
    // Load audio files
    const audioBefore = document.getElementById('audio-before');
    const audioAfter = document.getElementById('audio-after');
    
    // Check if real files are loaded
    function checkAudioSources() {
        let loadedCount = 0;
        
        function checkDone() {
            loadedCount++;
            if (loadedCount === 2) {
                isFallback = false;
                duration = Math.max(audioBefore.duration, audioAfter.duration) || 24;
                timeTotal.textContent = formatTime(duration);
                sourceIndicator.textContent = 'REAL AUDIO FILES ACTIVE';
                sourceIndicator.style.color = '#1c1c1e';
                sourceIndicator.style.backgroundColor = 'rgba(0,0,0,0.05)';
                sourceIndicator.style.borderColor = 'rgba(0,0,0,0.1)';
            }
        }
        
        // Remove existing listener to prevent stacking on reload
        audioBefore.removeEventListener('loadedmetadata', checkDone);
        audioAfter.removeEventListener('loadedmetadata', checkDone);
        audioBefore.addEventListener('loadedmetadata', checkDone);
        audioAfter.addEventListener('loadedmetadata', checkDone);
        
        // Timeout to check if files actually loaded
        setTimeout(() => {
            if (audioBefore.readyState >= 1 && audioAfter.readyState >= 1) {
                isFallback = false;
                duration = Math.max(audioBefore.duration, audioAfter.duration) || 24;
                timeTotal.textContent = formatTime(duration);
                sourceIndicator.textContent = 'REAL AUDIO FILES ACTIVE';
                sourceIndicator.style.color = '#1c1c1e';
                sourceIndicator.style.backgroundColor = 'rgba(0,0,0,0.05)';
                sourceIndicator.style.borderColor = 'rgba(0,0,0,0.1)';
            } else {
                isFallback = true;
                duration = 24; // Mock duration
                timeTotal.textContent = formatTime(duration);
                sourceIndicator.textContent = 'SYNTH FALLBACK ACTIVE';
                sourceIndicator.style.color = 'var(--accent-amber)';
                sourceIndicator.style.backgroundColor = 'rgba(230, 92, 0, 0.08)';
                sourceIndicator.style.borderColor = 'var(--accent-amber-dim)';
            }
        }, 800);
    }
    
    // Load a specific mix dynamically
    function loadMix(mixNumber) {
        activeMix = mixNumber;
        
        const wasPlaying = isPlaying;
        if (isPlaying) {
            pauseAudio();
        }
        
        // Reset playback position
        currentTime = 0;
        progressBar.style.width = '0%';
        progressHandle.style.left = '0%';
        timeCurrent.textContent = "0:00";
        
        // Update elements
        audioBefore.src = `audio/Mix ${mixNumber}/mix_${mixNumber}_before.wav`;
        audioAfter.src = `audio/Mix ${mixNumber}/mix_${mixNumber}_after.wav`;
        
        audioBefore.load();
        audioAfter.load();
        
        checkAudioSources();
        
        if (wasPlaying) {
            setTimeout(() => {
                playAudio();
            }, 150);
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
        
        if (!isFallback) {
            try {
                sourceBeforeNode = audioContext.createMediaElementSource(audioBefore);
                sourceAfterNode = audioContext.createMediaElementSource(audioAfter);
                
                gainBeforeNode = audioContext.createGain();
                gainAfterNode = audioContext.createGain();
                
                sourceBeforeNode.connect(gainBeforeNode);
                sourceAfterNode.connect(gainAfterNode);
                
                gainBeforeNode.connect(analyser);
                gainAfterNode.connect(analyser);
                
                updateRealAudioGains();
                useWebAudioApiNodes = true;
            } catch (err) {
                console.warn("CORS/Local system security blocked connection. Audio elements routing to bypass visualizer.", err);
                useWebAudioApiNodes = false;
            }
        } else {
            setupSynthGraph();
        }
        
        startSpectrogramRendering();
    }
    
    // ==========================================================================
    // Web Audio Synthesizer Graph
    // ==========================================================================
    function setupSynthGraph() {
        synthOsc1 = audioContext.createOscillator();
        synthOsc2 = audioContext.createOscillator();
        
        synthOsc1.type = 'sawtooth';
        synthOsc1.frequency.setValueAtTime(130, audioContext.currentTime); 
        
        synthOsc2.type = 'triangle';
        synthOsc2.frequency.setValueAtTime(260, audioContext.currentTime);
        
        const oscGain1 = audioContext.createGain();
        const oscGain2 = audioContext.createGain();
        oscGain1.gain.value = 0.15;
        oscGain2.gain.value = 0.2;
        
        synthOsc1.connect(oscGain1);
        synthOsc2.connect(oscGain2);
        
        const voiceGain = audioContext.createGain();
        voiceGain.gain.value = 0.0;
        oscGain1.connect(voiceGain);
        oscGain2.connect(voiceGain);
        
        // Noise buffer
        const bufferSize = audioContext.sampleRate * 2;
        const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }
        noiseNode = audioContext.createBufferSource();
        noiseNode.buffer = noiseBuffer;
        noiseNode.loop = true;
        
        const noiseFilter = audioContext.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.value = 800;
        noiseFilter.Q.value = 0.5;
        
        const noiseGain = audioContext.createGain();
        noiseGain.gain.value = 0.0;
        
        noiseNode.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        
        // Signal cleanup filter
        lowpassFilter = audioContext.createBiquadFilter();
        lowpassFilter.type = 'bandpass';
        lowpassFilter.frequency.value = 1100;
        lowpassFilter.Q.value = 1.2;
        
        // Hardware echo/reverb feedback delay
        reverbNode = audioContext.createDelay(1.0);
        reverbNode.delayTime.value = 0.2;
        
        const reverbFeedback = audioContext.createGain();
        reverbFeedback.gain.value = 0.5; 
        
        const reverbMix = audioContext.createGain();
        reverbMix.gain.value = 0.0;
        
        voiceGain.connect(lowpassFilter);
        
        // Connect Reverb loop
        lowpassFilter.connect(reverbNode);
        reverbNode.connect(reverbFeedback);
        reverbFeedback.connect(reverbNode);
        reverbNode.connect(reverbMix);
        
        const dryGain = audioContext.createGain();
        dryGain.gain.value = 0.8;
        lowpassFilter.connect(dryGain);
        
        dryGain.connect(analyser);
        reverbMix.connect(analyser);
        noiseGain.connect(analyser);
        
        synthOsc1.start();
        synthOsc2.start();
        noiseNode.start();
        
        audioContext.synth = {
            voiceGain: voiceGain,
            noiseGain: noiseGain,
            reverbMix: reverbMix,
            dryGain: dryGain,
            osc1: synthOsc1,
            osc2: synthOsc2,
            filter: lowpassFilter
        };
        
        updateSynthParameters();
    }
    
    function updateSynthParameters() {
        if (!audioContext || !audioContext.synth) return;
        
        const s = audioContext.synth;
        const now = audioContext.currentTime;
        
        if (!audioToggle.checked) {
            // ORIGINAL (NOISY / TAPE HISS / ECHO)
            s.noiseGain.gain.setTargetAtTime(0.06, now, 0.08);
            s.reverbMix.gain.setTargetAtTime(0.5, now, 0.1);
            s.dryGain.gain.setTargetAtTime(0.35, now, 0.08);
            
            s.filter.type = 'bandpass';
            s.filter.frequency.setTargetAtTime(900, now, 0.15);
            s.filter.Q.setTargetAtTime(2.0, now, 0.15);
        } else {
            // RESTORED (CLEAN VOICE FORMANT)
            s.noiseGain.gain.setTargetAtTime(0.0, now, 0.05);
            s.reverbMix.gain.setTargetAtTime(0.0, now, 0.05);
            s.dryGain.gain.setTargetAtTime(0.85, now, 0.08);
            
            s.filter.type = 'peaking';
            s.filter.frequency.setTargetAtTime(1800, now, 0.15);
            s.filter.Q.setTargetAtTime(0.6, now, 0.15);
        }
    }
    
    function runSynthVocalSequence() {
        if (!isPlaying || !audioContext || !audioContext.synth) return;
        
        const s = audioContext.synth;
        const now = audioContext.currentTime;
        
        s.voiceGain.gain.setTargetAtTime(0.6, now, 0.05);
        
        // Modulate vocal sweep
        if (activeMix === 1) {
            // Mix 1: Low-mid vocal pitch simulation
            const targetFreq = 120 + Math.sin(currentTime * 2) * 12;
            s.osc1.frequency.setValueAtTime(targetFreq, now);
            s.osc2.frequency.setValueAtTime(targetFreq * 2, now);
            
            const filterSweep = 1100 + Math.sin(currentTime * 3) * 450;
            s.filter.frequency.setValueAtTime(filterSweep, now);
        } else {
            // Mix 2: Higher pitch synth sequence with fifth interval harmony
            const targetFreq = 220 + Math.sin(currentTime * 4) * 30;
            s.osc1.frequency.setValueAtTime(targetFreq, now);
            s.osc2.frequency.setValueAtTime(targetFreq * 1.5, now); // Fifth interval harmony
            
            const filterSweep = 1500 + Math.cos(currentTime * 4) * 600;
            s.filter.frequency.setValueAtTime(filterSweep, now);
        }
    }
    
    function stopSynthVocalSequence() {
        if (audioContext && audioContext.synth) {
            audioContext.synth.voiceGain.gain.setTargetAtTime(0.0, audioContext.currentTime, 0.1);
            audioContext.synth.noiseGain.gain.setTargetAtTime(0.0, audioContext.currentTime, 0.1);
        }
    }

    function updateRealAudioGains() {
        if (!gainBeforeNode || !gainAfterNode) return;
        const now = audioContext.currentTime;
        if (!audioToggle.checked) {
            gainBeforeNode.gain.setTargetAtTime(1.0, now, 0.05);
            gainAfterNode.gain.setTargetAtTime(0.0, now, 0.05);
        } else {
            gainBeforeNode.gain.setTargetAtTime(0.0, now, 0.05);
            gainAfterNode.gain.setTargetAtTime(1.0, now, 0.05);
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
        
        if (!isFallback) {
            audioBefore.currentTime = currentTime;
            audioAfter.currentTime = currentTime;
            
            audioBefore.play();
            audioAfter.play();
        } else {
            runSynthVocalSequence();
        }
        
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
        
        if (!isFallback) {
            audioBefore.pause();
            audioAfter.pause();
        } else {
            stopSynthVocalSequence();
        }
        
        clearInterval(playInterval);
        stopSpectrogramRendering();
    }
    
    function updateTimeline() {
        if (!isFallback) {
            currentTime = audioBefore.currentTime;
            duration = audioBefore.duration || duration;
        } else {
            currentTime += 0.1;
            
            if (currentTime >= duration) {
                currentTime = 0;
            }
            runSynthVocalSequence();
        }
        
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
            
            if (!isFallback) {
                if (useWebAudioApiNodes) {
                    updateRealAudioGains();
                } else {
                    audioBefore.muted = false;
                    audioAfter.muted = true;
                }
            } else {
                updateSynthParameters();
            }
        });
        
        btnModeAfter.addEventListener('click', () => {
            btnModeAfter.classList.add('active');
            btnModeBefore.classList.remove('active');
            audioToggle.checked = true; // Hidden toggle synced
            
            if (!isFallback) {
                if (useWebAudioApiNodes) {
                    updateRealAudioGains();
                } else {
                    audioBefore.muted = true;
                    audioAfter.muted = false;
                }
            } else {
                updateSynthParameters();
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
        const rect = progressBarWrapper.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        currentTime = percent * duration;
        
        progressBar.style.width = `${percent * 100}%`;
        progressHandle.style.left = `${percent * 100}%`;
        timeCurrent.textContent = formatTime(currentTime);
        
        if (!isFallback) {
            audioBefore.currentTime = currentTime;
            audioAfter.currentTime = currentTime;
        }
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
        
        if (!isFallback && !useWebAudioApiNodes) {
            audioBefore.volume = vol;
            audioAfter.volume = vol;
        }
    });

    audioBefore.addEventListener('ended', () => {
        pauseAudio();
        currentTime = 0;
        progressBar.style.width = '0%';
        progressHandle.style.left = '0%';
        timeCurrent.textContent = "0:00";
    });
});
