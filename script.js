// Translation system
let currentLanguage = 'hu';

// Music system
let isMusicPlaying = false;
let musicInitialized = false;

// GitHub data storage
const GITHUB_REPO = 'helgaszulinap/invite'; // Replace with your actual repo
const GITHUB_TOKEN = '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'; // You'll need to create a personal access token

const translations = {
    hu: {
        title: "Helga 40",
        subtitle: "szülinapi party",
        date: "2025. Október 25. (Szombat)",
        time: "18:00 órától",
        location: "Kiskőrös - Holdfényben",
        dress_code: "Dress Code: Lezser Party Dress",
        food: "Finom kajával és itallal várunk!",
        rsvp_title: "🎫 Részvétel megerősítése",
        name_label: "Teljes neved",
        name_placeholder: "Írd be a nevedet...",
        companions_label: "Kísérőkkel jössz? (opcionális)",
        companions_0: "Egyedül jövök",
        companions_1: "+1 fő",
        companions_2: "+2 fő",
        companions_3: "+3 fő",
        companions_4: "+4 fő",
        companions_5: "+5 fő",
        attendance_label: "Részvétel",
        yes_attend: "✅ Igen, ott leszek!",
        no_attend: "❌ Nem tudok jönni",
        submit_button: "✅ Válasz beküldése",
        success_message: "Köszönjük a válaszod! Jelentkezésed rögzítve!",
        attendees_title: "👥 Ki jön el a bulira?",
        confirmed_count: "Megerősített ember (kísérőkkel együtt)",
        no_attendees: "Még senki sem erősítette meg a részvételét.<br>Légy te az első! 🎉",
        footer_message: "Várunk szeretettel! 💕",
        alert_name_required: "Kérjük, töltsd ki a nevedet!",
        alert_attendance_required: "Kérjük, válaszd ki, hogy tudsz-e jönni!",
        alert_success: "🎉 Fantasztikus! Most már a vendéglistán vagy! Alig várjuk, hogy együtt ünnepelhessünk! 🎉",
        alert_declined: "😢 Sajnáljuk, hogy nem tudsz jönni. Majd legközelebb!",
        delete_button: "Törlés",
        confirm_delete: "Biztosan törölni szeretnéd ezt a jelentkezést?",
        message_wall_title: "💬 Üzenőfal Helgának",
        message_name_label: "Neved",
        message_name_placeholder: "Írd be a nevedet...",
        message_text_label: "Üzeneted Helgának",
        message_text_placeholder: "Írj egy kedves üzenetet...",
        message_submit_button: "💌 Üzenet elküldése",
        no_messages: "Még nincsenek üzenetek.<br>Légy te az első, aki üzen Helgának! 💕",
        message_delete_button: "Törlés",
        message_confirm_delete: "Biztosan törölni szeretnéd ezt az üzenetet?",
        message_alert_name_required: "Kérjük, töltsd ki a nevedet!",
        message_alert_text_required: "Kérjük, írj egy üzenetet!",
        message_alert_success: "Üzeneted elküldve! 💕"
    },
    de: {
        title: "Helga 40",
        subtitle: "birthday party",
        date: "25. Oktober 2025 (Samstag)",
        date_desc: "Ein magischer Samstagabend erwartet euch!",
        time: "Von 18:00",
        location: "Kiskőrös - Im Mondschein",
        dress_code: "Dress Code: Lässiges Party Outfit",
        food: "Wir erwarten euch mit leckerem Essen und Getränken!",
        rsvp_title: "🎫 Teilnahme bestätigen",
        name_label: "Vollständiger Name",
        name_placeholder: "Gib deinen Namen ein...",
        companions_label: "Kommst du mit Begleitung? (optional)",
        companions_0: "Ich komme allein",
        companions_1: "+1 Person",
        companions_2: "+2 Personen",
        companions_3: "+3 Personen",
        companions_4: "+4 Personen",
        companions_5: "+5 Personen",
        attendance_label: "Teilnahme",
        yes_attend: "✅ Ja, ich komme!",
        no_attend: "❌ Ich kann nicht kommen",
        submit_button: "✅ Antwort senden",
        success_message: "Vielen Dank für deine Antwort! Deine Anmeldung wurde gespeichert!",
        attendees_title: "👥 Wer kommt zur Party?",
        confirmed_count: "Bestätigte Personen (mit Begleitung)",
        no_attendees: "Noch niemand hat seine Teilnahme bestätigt.<br>Sei der Erste! 🎉",
        footer_message: "Wir erwarten euch mit Liebe! 💕",
        alert_name_required: "Bitte gib deinen Namen ein!",
        alert_attendance_required: "Bitte wähle aus, ob du kommen kannst!",
        alert_success: "Fantastisch! Du stehst jetzt auf der Gästeliste! Wir können es kaum erwarten, mit dir zu feiern!",
        alert_declined: "😢 Schade, dass du nicht kommen kannst. Beim nächsten Mal!",
        delete_button: "Löschen",
        confirm_delete: "Möchtest du diese Anmeldung wirklich löschen?",
        message_wall_title: "💬 Nachrichtenwand für Helga",
        message_name_label: "Dein Name",
        message_name_placeholder: "Gib deinen Namen ein...",
        message_text_label: "Deine Nachricht für Helga",
        message_text_placeholder: "Schreibe eine liebe Nachricht...",
        message_submit_button: "💌 Nachricht senden",
        no_messages: "Noch keine Nachrichten vorhanden.<br>Sei der Erste, der Helga schreibt! 💕",
        message_delete_button: "Löschen",
        message_confirm_delete: "Möchtest du diese Nachricht wirklich löschen?",
        message_alert_name_required: "Bitte gib deinen Namen ein!",
        message_alert_text_required: "Bitte schreibe eine Nachricht!",
        message_alert_success: "Deine Nachricht wurde gesendet! 💕"
    }
};

function toggleLanguage() {
    currentLanguage = currentLanguage === 'hu' ? 'de' : 'hu';
    localStorage.setItem('preferredLanguage', currentLanguage);
    updateLanguage();
}

function updateLanguage() {
    const flag = document.getElementById('currentFlag');
    const languageText = document.getElementById('languageText');
    
    if (currentLanguage === 'hu') {
        flag.textContent = '🇩🇪';
        languageText.textContent = 'Deutsch';
    } else {
        flag.textContent = '🇭🇺';
        languageText.textContent = 'Magyar';
    }
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });
    
    // Update option elements
    document.querySelectorAll('option[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

// Load saved language preference
function loadLanguagePreference() {
    const saved = localStorage.getItem('preferredLanguage');
    if (saved && saved === 'de') {
        currentLanguage = 'de';
        updateLanguage();
    }
}

// Create floating particles
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 8 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Create confetti effect
function showConfetti() {
    const colors = ['#007AFF', '#00D4FF', '#00C896', '#34C759', '#FFD60A', '#FF9F0A'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 20);
    }
}

// GitHub data storage functions
async function saveDataToGitHub(data) {
    try {
        // For now, we'll use a simple approach with GitHub's repository dispatch
        // This requires the repository to have the workflow we created
        
        const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/dispatches`, {
            method: 'POST',
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                event_type: 'save-rsvp-data',
                client_payload: {
                    data: JSON.stringify(data),
                    timestamp: new Date().toISOString()
                }
            })
        });
        
        if (response.ok) {
            console.log('Data saved to GitHub successfully');
            return true;
        } else {
            console.error('Failed to save data to GitHub:', response.status);
            return false;
        }
    } catch (error) {
        console.error('Error saving data to GitHub:', error);
        return false;
    }
}

async function loadDataFromGitHub() {
    try {
        const response = await fetch(`https://raw.githubusercontent.com/${GITHUB_REPO}/main/data/rsvp-data.json`);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error('Error loading data from GitHub:', error);
    }
    return null;
}

// Local storage functions (fallback)
function getAttendees() {
    const stored = localStorage.getItem('birthdayAttendees');
    return stored ? JSON.parse(stored) : [];
}

async function saveAttendee(attendeeData) {
    const attendees = getAttendees();
    
    // Check if person already registered (by name only now)
    const existingIndex = attendees.findIndex(a => 
        a.name.toLowerCase() === attendeeData.name.toLowerCase()
    );
    
    if (existingIndex !== -1) {
        // Update existing entry
        attendees[existingIndex] = attendeeData;
    } else {
        // Add new entry
        attendees.push(attendeeData);
    }
    
    // Save to local storage (immediate)
    localStorage.setItem('birthdayAttendees', JSON.stringify(attendees));
    updateAttendeesDisplay();
    
    // Save to GitHub (async)
    try {
        const messages = getMessages();
        const dataToSave = {
            attendees: attendees,
            messages: messages,
            lastUpdated: new Date().toISOString(),
            totalAttendees: attendees.filter(a => a.attending).length
        };
        
        await saveDataToGitHub(dataToSave);
        console.log('Data saved to GitHub successfully');
    } catch (error) {
        console.error('Failed to save to GitHub, using local storage only:', error);
    }
}

function updateAttendeesDisplay() {
    const attendees = getAttendees().filter(a => a.attending);
    const attendeesList = document.getElementById('attendeesList');
    const attendeeCount = document.getElementById('attendeeCount');
    
    // Calculate total including companions
    let totalParticipants = 0;
    attendees.forEach(attendee => {
        totalParticipants += 1; // The person themselves
        if (attendee.companions && attendee.companions !== '0') {
            // Add companions count from dropdown value
            totalParticipants += parseInt(attendee.companions) || 0;
        }
    });
    
    // Update counter (now shows total including companions)
    attendeeCount.textContent = totalParticipants;
    
    // Update list
    if (attendees.length === 0) {
        attendeesList.innerHTML = `
            <div class="no-attendees">
                Még senki sem erősítette meg a részvételét. 
                <br>Légy te az első! 🎉
            </div>
        `;
    } else {
        attendeesList.innerHTML = attendees.map((attendee, index) => {
            let companionText = '';
            if (attendee.companions && attendee.companions !== '0') {
                const count = parseInt(attendee.companions);
                companionText = `<div class="attendee-companions">+${count} fő</div>`;
            }
            
            return `
                <div class="attendee-item">
                    <div>
                        <div class="attendee-name">${attendee.name}</div>
                        ${companionText}
                    </div>
                    <div class="attendee-actions">
                        <div class="attendee-time">${new Date(attendee.timestamp).toLocaleDateString('hu-HU', {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        })}</div>
                        <button class="delete-button" onclick="deleteAttendee('${attendee.name}')" data-translate="delete_button">
                            Törlés
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// Delete attendee function
function deleteAttendee(attendeeName) {
    // Show confirmation dialog
    const confirmMessage = translations[currentLanguage].confirm_delete;
    if (!confirm(confirmMessage)) {
        return; // User cancelled
    }
    
    // Get current attendees
    const attendees = getAttendees();
    
    // Find the attendee to get their companion count
    const attendeeToDelete = attendees.find(attendee => attendee.name === attendeeName);
    let totalDeleted = 1; // The person themselves
    
    if (attendeeToDelete && attendeeToDelete.companions && attendeeToDelete.companions !== '0') {
        totalDeleted += parseInt(attendeeToDelete.companions) || 0;
    }
    
    // Filter out the attendee to delete
    const updatedAttendees = attendees.filter(attendee => attendee.name !== attendeeName);
    
    // Save updated list
    localStorage.setItem('birthdayAttendees', JSON.stringify(updatedAttendees));
    
    // Update display
    updateAttendeesDisplay();
    
    // Show deletion notification
    showDeletionNotification(attendeeName, totalDeleted);
}

function getDeletionNotifications() {
    const stored = localStorage.getItem('birthdayDeletions');
    return stored ? JSON.parse(stored) : [];
}

function saveDeletionNotification(name, count) {
    const deletions = getDeletionNotifications();
    const newDeletion = {
        id: Date.now().toString(),
        name: name,
        count: count,
        timestamp: new Date().toISOString()
    };
    deletions.push(newDeletion);
    localStorage.setItem('birthdayDeletions', JSON.stringify(deletions));
    updateDeletionNotifications();
}

function updateDeletionNotifications() {
    const deletions = getDeletionNotifications();
    const notificationsContainer = document.getElementById('deletionNotifications');
    
    if (deletions.length === 0) {
        notificationsContainer.innerHTML = '';
        return;
    }
    
    notificationsContainer.innerHTML = deletions.map(deletion => {
        const countText = deletion.count === 1 ? '1 főt' : `${deletion.count} főt`;
        return `
            <div class="deletion-notification">
                🗑️ Törölve: <span class="deleted-name">${deletion.name}</span> - 
                <span class="deleted-count">${countText}</span>
                <span class="deletion-time">(${new Date(deletion.timestamp).toLocaleDateString('hu-HU', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })})</span>
            </div>
        `;
    }).join('');
}

function showDeletionNotification(name, count) {
    console.log('Saving deletion notification:', name, count); // Debug
    saveDeletionNotification(name, count);
    console.log('Current deletions:', getDeletionNotifications()); // Debug
}

// Message wall functions
function getMessages() {
    const stored = localStorage.getItem('birthdayMessages');
    return stored ? JSON.parse(stored) : [];
}

async function saveMessage(messageData) {
    const messages = getMessages();
    messages.unshift(messageData); // Add to beginning of array
    localStorage.setItem('birthdayMessages', JSON.stringify(messages));
    updateMessagesDisplay();
    
    // Save to GitHub (async)
    try {
        const attendees = getAttendees();
        const dataToSave = {
            attendees: attendees,
            messages: messages,
            lastUpdated: new Date().toISOString(),
            totalAttendees: attendees.filter(a => a.attending).length
        };
        
        await saveDataToGitHub(dataToSave);
        console.log('Message saved to GitHub successfully');
    } catch (error) {
        console.error('Failed to save message to GitHub, using local storage only:', error);
    }
}

function updateMessagesDisplay() {
    const messages = getMessages();
    const messagesContainer = document.getElementById('messagesContainer');
    
    if (messages.length === 0) {
        messagesContainer.innerHTML = `
            <div class="no-messages" data-translate="no_messages">
                Még nincsenek üzenetek.<br>Légy te az első, aki üzen Helgának! 💕
            </div>
        `;
    } else {
        messagesContainer.innerHTML = messages.map(message => `
            <div class="message-item">
                <div class="message-header">
                    <span class="message-author">${message.name}</span>
                    <span class="message-time">${new Date(message.timestamp).toLocaleDateString('hu-HU', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}</span>
                </div>
                <div class="message-text">${message.text}</div>
            </div>
        `).join('');
    }
}

function submitMessage() {
    const name = document.getElementById('messageName').value.trim();
    const text = document.getElementById('messageText').value.trim();
    
    if (!name) {
        alert(translations[currentLanguage].message_alert_name_required);
        return;
    }
    
    if (!text) {
        alert(translations[currentLanguage].message_alert_text_required);
        return;
    }
    
    const messageData = {
        id: Date.now().toString(),
        name: name,
        text: text,
        timestamp: new Date().toISOString()
    };
    
    saveMessage(messageData);
    
    // Reset form
    document.getElementById('messageForm').reset();
    
    // Show success message
    alert(translations[currentLanguage].message_alert_success);
}

// Handle RSVP submission
function submitRSVP() {
    const name = document.getElementById('guestName').value.trim();
    const companions = document.getElementById('companions').value;
    const attendingYes = document.getElementById('attendingYes').checked;
    const attendingNo = document.getElementById('attendingNo').checked;
    
    if (!name) {
        alert(translations[currentLanguage].alert_name_required);
        return;
    }
    
    if (!attendingYes && !attendingNo) {
        alert(translations[currentLanguage].alert_attendance_required);
        return;
    }
    
    const attending = attendingYes;
    
    // Create attendee data
    const attendeeData = {
        name: name,
        companions: companions,
        attending: attending,
        timestamp: new Date().toISOString()
    };
    
    // Save to local storage (only if attending)
    if (attending) {
        saveAttendee(attendeeData);
        showConfetti();
        setTimeout(() => {
            alert(translations[currentLanguage].alert_success);
        }, 500);
    } else {
        setTimeout(() => {
            alert(translations[currentLanguage].alert_declined);
        }, 500);
    }
    
    // Show success message
    document.getElementById('successMessage').style.display = 'block';
    
    // Reset form after 3 seconds
    setTimeout(() => {
        document.getElementById('rsvpForm').reset();
        document.getElementById('successMessage').style.display = 'none';
    }, 3000);
}

// Initialize particles when page loads
window.addEventListener('load', () => {
    createParticles();
    updateAttendeesDisplay(); // Load existing attendees
    updateMessagesDisplay(); // Load existing messages
    updateDeletionNotifications(); // Load deletion notifications
    loadLanguagePreference(); // Load saved language
});

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', () => {
    const detailItems = document.querySelectorAll('.detail-item');
    
    detailItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.02) translateY(-2px)';
            item.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1) translateY(0)';
        });
    });
    
    // Add form input animations
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'scale(1.02)';
            input.parentElement.style.transition = 'all 0.3s ease';
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'scale(1)';
        });
    });
});

// Music functions
function initializeMusic() {
    const audio = document.getElementById('backgroundMusic');
    const musicButton = document.getElementById('musicButton');
    const musicIcon = document.getElementById('musicIcon');
    
    if (!audio) return;
    
    // Set volume to 30% for background music
    audio.volume = 0.3;
    
    // Try to play music automatically (may be blocked by browser)
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            // Music started successfully
            audio.muted = false; // Unmute the audio
            isMusicPlaying = true;
            musicButton.classList.remove('muted');
            musicIcon.textContent = '🎵';
            console.log('Background music started automatically');
        }).catch((error) => {
            // Autoplay was prevented by browser
            console.log('Autoplay prevented by browser:', error);
            isMusicPlaying = false;
            musicButton.classList.add('muted');
            musicIcon.textContent = '🔇';
            
            // Show a subtle notification to user
            showMusicNotification();
        });
    }
    
    musicInitialized = true;
}

function showMusicNotification() {
    // Create a subtle notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: #00ffff;
        padding: 10px 20px;
        border-radius: 20px;
        border: 1px solid #00ffff;
        font-size: 0.9rem;
        z-index: 1000;
        animation: fadeInOut 4s ease-in-out;
    `;
    notification.textContent = '🎵 Kattints bárhova a zene elindításához!';
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
            20% { opacity: 1; transform: translateX(-50%) translateY(0); }
            80% { opacity: 1; transform: translateX(-50%) translateY(0); }
            100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 4 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
        if (style.parentNode) {
            style.parentNode.removeChild(style);
        }
    }, 4000);
}

function toggleMusic() {
    const audio = document.getElementById('backgroundMusic');
    const musicButton = document.getElementById('musicButton');
    const musicIcon = document.getElementById('musicIcon');
    
    if (!audio) return;
    
    if (isMusicPlaying) {
        // Pause music
        audio.pause();
        isMusicPlaying = false;
        musicButton.classList.add('muted');
        musicIcon.textContent = '🔇';
    } else {
        // Play music
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                isMusicPlaying = true;
                musicButton.classList.remove('muted');
                musicIcon.textContent = '🎵';
            }).catch((error) => {
                console.log('Could not play music:', error);
                // Show user-friendly message
                alert('A zene lejátszásához kattints bárhova az oldalon, majd próbáld újra!');
            });
        }
    }
}

// Load data from GitHub on page load
async function loadDataFromGitHubOnStart() {
    try {
        const githubData = await loadDataFromGitHub();
        if (githubData && githubData.attendees) {
            // Update local storage with GitHub data
            localStorage.setItem('birthdayAttendees', JSON.stringify(githubData.attendees));
            localStorage.setItem('birthdayMessages', JSON.stringify(githubData.messages || []));
            
            console.log('Data loaded from GitHub successfully');
            console.log('Total attendees from GitHub:', githubData.totalAttendees);
        }
    } catch (error) {
        console.log('Using local storage data (GitHub data not available):', error);
    }
}

// Initialize music when page loads
window.addEventListener('load', async () => {
    createParticles();
    
    // Load data from GitHub first
    await loadDataFromGitHubOnStart();
    
    updateAttendeesDisplay();
    updateMessagesDisplay();
    updateDeletionNotifications();
    loadLanguagePreference();
    
    // Initialize music after a short delay
    setTimeout(() => {
        initializeMusic();
    }, 1000);
});

// Try to start music on first user interaction
function tryStartMusicOnInteraction() {
    if (!musicInitialized || !isMusicPlaying) {
        const audio = document.getElementById('backgroundMusic');
        const musicButton = document.getElementById('musicButton');
        const musicIcon = document.getElementById('musicIcon');
        
        if (audio && !isMusicPlaying) {
            const playPromise = audio.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    audio.muted = false; // Unmute the audio
                    isMusicPlaying = true;
                    musicButton.classList.remove('muted');
                    musicIcon.textContent = '🎵';
                    console.log('Music started on user interaction');
                }).catch((error) => {
                    console.log('Still cannot play music:', error);
                });
            }
        }
    }
}

// Multiple event listeners for better compatibility
document.addEventListener('click', tryStartMusicOnInteraction, { once: true });
document.addEventListener('touchstart', tryStartMusicOnInteraction, { once: true });
document.addEventListener('keydown', tryStartMusicOnInteraction, { once: true });
document.addEventListener('mousemove', tryStartMusicOnInteraction, { once: true });
document.addEventListener('scroll', tryStartMusicOnInteraction, { once: true });
