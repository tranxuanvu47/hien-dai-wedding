// ===== Configuration =====
const WEDDING_DATE = new Date('2026-11-24T11:00:00+07:00'); // Nhà Gái — 24/11/2026, 11:00
const GALLERY_PATH = 'images3/';

// Google Sheets Web App URL - Paste your URL here after deployment
// Example: 'https://script.google.com/macros/s/AKfycbx.../exec'
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbyoEqZLHOvuftSKzzN9fAl_HLFp5XsjJuKqVljSZxpFkhxfV1I70bslhyACKjyJLBAClw/exec'; // TODO: Paste URL from Google Apps Script deployment

const VENUE_NHA_GAI_MAP =
    'https://www.google.com/maps/place/H%E1%BB%99i+Tr%C6%B0%E1%BB%9Dng+Th%C3%B4n+An+Ph%C3%BA/@12.8600671,108.1198206,17z/data=!3m1!4b1!4m6!3m5!1s0x3171ff00756d2057:0x4c2587c7f2665bd8!8m2!3d12.8600671!4d108.1198206!16s%2Fg%2F11ntdzz5y9!18m1!1e1?entry=ttu';
const VENUE_NHA_TRAI_MAP =
    'https://www.google.com/maps/place/Nh%C3%A0+H%C3%A0ng+Th%E1%BA%AFng+L%E1%BB%A3i+bmt/@12.696462,108.0663861,17z/data=!3m1!4b1!4m6!3m5!1s0x3171f7c0e33bf4cd:0x76ffd3b24bdd49c!8m2!3d12.696462!4d108.0689664!16s%2Fg%2F1hc1p56w4!18m1!1e1?entry=ttu';

// Wedding photo filenames (images3, excluding intro portraits)
const imageFiles = [
    '2aOboR18Xjacn6cVjmYhI0b8zrs56v1IZ2EZwvZ2.jpg',
    '2aOboR18Xjacn6cVjmYhI0oKcweuQDL0ixHH4Q08.jpg',
    '2aOboR18XjBTUR3W5gIFBxBx0SQ9DeU92HahXgau.jpg',
    '2aOboR18XjE1bqG9oB6f3rYYPrc8I5RBi1SYDYbA.jpg',
    '2aOboR18XjFpVdZaxjJRtMtx1STdphwkhWW14rFQ.jpg',
    '2aOboR18XjnePtEMqik7XunJ10H6wgSbHkEHsKno.jpg',
    '2aOboR18XjyzRLLvJjLKVKJzRe9dVdrmsHfJRnJg.jpg',
    '2aOboR18XjZRoSN8dYKxxtl08PhBBBuks5uJXHHs.jpg',
    '2aOboR18Xk3mDaEAj3ydURtjFYKzV5IXrXYiZRMO.jpg',
    '2aOboR18Xk3mDaEAj3ydURvgNN0EjVWXOaLuGZns.jpg',
    '2aOboR18Xk7Ssojo2a8aq8DMiTW6CJP0eJAv3ImW.jpg',
    '2aOboR18XkaZsTP5WegLCEec3JVszHyaPqd6cY2i.jpg',
    '2aOboR18Xkcm6U8JiHd2T6pO1uahXkDZpIRVHYYq.jpg',
    '2aOboR18Xkcm6U8JiHd2T6w6LjrFXvbSvNDPgH3Y.jpg',
    '2aOboR18XkDrOkDb5QbjR4ecrZTcmRs1s4OADeoC.jpg',
    '2aOboR18XkGPW9QEnvQ9Iz1x1OqdM78yYZPPFxDs.jpg',
    '2aOboR18XkMvKXjAMOVrQw7XvNfLuX4huMKzqIts.jpg',
    '2aOboR18XktDMkf9cHr5AL8KBfiDCY6PTCRDscfw.jpg',
    '2aOboR18XkvWtEDWJXQLyEFqeAHksY2gQKZiSxRA.jpg',
    '2aOboR18XkW47z7UdmAN7TKadqtaTu30j3X6EZpA.jpg',
    '2aOboR18Xl4JnH8R43D93jF4DPj4V9IHPuYufhzM.jpg',
    '2aOboR18Xl9IjciZzQDPGXKTyJE0G8nlY52puTPE.jpg',
    '2aOboR18XlCHc4HOFCdvQ9SttGeLY7U47Nnsm73g.jpg',
    '2aOboR18XlRER71p1Jei2ZTB7isY7x4JrucYI6ZU.jpg',
    '2aOboR18XlZ05nSsgQiXBJJWlfV1liQ12Pu5y7c0.jpg'
];
const TOTAL_IMAGES = imageFiles.length;

// ===== Translations =====
const translations = {
    vi: {
        saveTheDate: 'Save The Date',
        coupleNames: '<span class="groom-name">Đăng Đại</span><span class="ampersand">&</span><span class="bride-name">Nguyễn Hiền</span>',
        weddingDay: 'Thứ Ba',
        weddingMonth: 'Tháng 11, 2026',
        ceremonyTitle: 'Lễ Cưới',
        venueName: 'Hội Trường Thôn An Phú',
        tabNhaGai: 'Nhà Gái',
        tabNhaTrai: 'Nhà Trai',
        venueNhaGaiName: 'Hội Trường Thôn An Phú',
        venueNhaTraiName: 'Nhà hàng Thắng Lợi',
        nhaGaiDate: '11:00, Thứ Ba, 24 Tháng 11, 2026',
        nhaTraiDate: '11:00, Thứ Bảy, 28 Tháng 11, 2026',
        nhaGaiSchedule: 'Tiệc cưới tại Nhà Gái',
        nhaTraiSchedule: 'Tiệc cưới tại Nhà Trai',
        invitationText: 'Kính mời',
        btnCountdown: 'Đếm Ngược',
        btnLocation: 'Xem Địa Điểm',
        btnRSVP: 'Xác Nhận Tham Dự',
        btnWishes: 'Gửi Lời Chúc',
        countdownTitle: '💐 Chúng mình đang đếm ngược đến ngày đặc biệt! 💐',
        countdownSubtitle: 'Khoảnh khắc mà chúng mình đã chờ đợi sắp đến rồi!',
        labelDays: 'Ngày',
        labelHours: 'Giờ',
        labelMinutes: 'Phút',
        labelSeconds: 'Giây',
        loveQuote: '💕 Today is the beginning of forever! 💕',
        introTitle: 'Giới thiệu',
        groomName: 'Đăng Đại',
        groomRole: 'Chú rể',
        groomQuote: 'Anh từng nghĩ hạnh phúc là điều phải đi tìm. Hóa ra em đã đứng đó, đủ gần để anh gọi là nhà. Anh hứa sẽ yêu em bằng sự dịu dàng mỗi ngày, và bằng lòng kiên nhẫn của cả một đời.',
        brideName: 'Nguyễn Hiền',
        brideRole: 'Cô dâu',
        brideQuote: 'Em chọn anh không phải vì một ngày đẹp, mà vì mọi ngày thường phía trước. Cảm ơn anh đã là nơi em được yên, được cười, và được bắt đầu lại.',
        introFooterQuote: 'We may not have it all together, but together, we have it all.',
        timelineTitle: 'Lịch Trình Đám Cưới',
        timelineSubtitle: 'Hành trình lịch và tháng gìa cùng chúng mình trong những khoảnh khắc đặc biệt này',
        galleryTitle: 'Ảnh Cưới Của Chúng Mình',
        locationTitle: 'Địa Điểm Tổ Chức',
        locationSubtitle: 'Hãy tham gia cùng chúng mình tại đây trong ngày đặc biệt này',
        venueSubtitle: 'Hãy tham gia cùng chúng mình tại đây trong ngày đặc biệt này',
        addressLabel: 'Địa Chỉ',
        scheduleLabel: 'Lịch Trình',
        ceremonyTime: 'Lễ Thành Hôn: 11:00 AM\nTiệc: 12:00 PM',
        btnDirection: 'Chỉ Đường',
        giftTitle: 'Hộp quà chú rể, cô dâu',
        giftModalTitle: 'Hộp Quà Yêu Thương',
        giftModalSubtitle: 'Quét QR code để gửi yêu thương trực tiếp tới:',
        btnCopyAccount: 'Sao chép số TK',
        copiedAccount: 'Đã chép',
        btnClose: 'Đóng',
        wishesTitle: 'Lời Chúc',
        wishesSubtitle: 'Chia sẻ tình cảm và những lời chúc tốt đẹp nhất cho chúng mình',
        wishesFormTitle: '💕 Chia Sẻ Lời Chúc',
        wishNamePlaceholder: 'Tên Của Bạn',
        wishMessagePlaceholder: 'Lời Chúc Của Bạn',
        btnSendWish: 'Gửi Lời Chúc',
        wishesListTitle: 'Lời Chúc Từ Mọi Người',
        thankYouTitle: 'Thank You!',
        thankYouText1: 'Điều chúng mình mong nhất trong ngày cưới không phải là một món quà, mà là có bạn ở đó.',
        thankYouText2: 'Cảm ơn bạn đã bớt chút thời gian giữa bộn bề để đến chung vui, chúc phúc, và cùng Nguyễn Hiền & Đăng Đại giữ lại những khoảnh khắc đầu tiên của một đời hạnh phúc.',
        thankYouSignature: 'Chúng mình trân trọng bạn, thật lòng 💕',
        thankYouTextEn1: 'If you can be with us, that is already the gift we hoped for.',
        thankYouTextEn2: 'We know the days are full — work, family, and a hundred small promises. Still, we would love to look up and find you there, sharing the laughter and the quiet joy of the day we become husband and wife.',
        thankYouSignatureEn: 'From our hearts, thank you 💕',
        thankYouFooter: '"The best is yet to come"',
        rsvpTitle: 'Xác Nhận Tham Dự',
        rsvpSubtitle: 'Hy vọng sẽ được đón tiếp bạn – vui lòng cho chúng tôi biết nếu bạn có thể tham dự nhé',
        labelName: 'Tên của bạn',
        labelAttendance: 'Bạn có tham dự không?',
        optionYes: '✨ Có, tôi sẽ có mặt!',
        optionNo: '💔 Xin lỗi, tôi không thể tham dự',
        labelGuests: 'Số lượng khách',
        labelPhone: 'Số điện thoại',
        labelMessage: 'Message & Wishes',
        btnSubmit: 'Gửi xác nhận',
        footerText: 'Cảm ơn bạn đã là một phần trong ngày đặc biệt của chúng tôi',
        formSuccess: 'Cảm ơn bạn đã xác nhận! Chúng tôi rất mong được gặp bạn.',
        formError: 'Đã có lỗi xảy ra. Vui lòng thử lại.',
        wishSuccess: 'Cảm ơn bạn đã gửi lời chúc! 💕',
        dateTimeRow: '24 & 28 Tháng 11, 2026 — Nhà Gái & Nhà Trai'
    },
    en: {
        saveTheDate: 'Save The Date',
        coupleNames: '<span class="bride-name">Nguyễn Hiền</span><span class="ampersand">&</span><span class="groom-name">Đăng Đại</span>',
        weddingDay: 'Tuesday',
        weddingMonth: 'November, 2026',
        ceremonyTitle: 'Wedding Ceremony',
        venueName: 'Hội Trường Thôn An Phú',
        tabNhaGai: "Bride's Home",
        tabNhaTrai: "Groom's Home",
        venueNhaGaiName: 'Hội Trường Thôn An Phú',
        venueNhaTraiName: 'Nhà hàng Thắng Lợi',
        nhaGaiDate: '11:00 AM, Tuesday, November 24, 2026',
        nhaTraiDate: '11:00 AM, Saturday, November 28, 2026',
        nhaGaiSchedule: 'Reception at Bride\'s Home',
        nhaTraiSchedule: 'Reception at Groom\'s Home',
        invitationText: 'Cordially Invites',
        btnCountdown: 'Countdown',
        btnLocation: 'View Location',
        btnRSVP: 'RSVP',
        btnWishes: 'Send Wishes',
        countdownTitle: '💐 Counting down to our Big Day! 💐',
        countdownSubtitle: 'The moment we\'ve been waiting for is almost here!',
        labelDays: 'Days',
        labelHours: 'Hours',
        labelMinutes: 'Minutes',
        labelSeconds: 'Seconds',
        loveQuote: '💕 Today is the beginning of forever! 💕',
        introTitle: 'Introduction',
        groomName: 'Đăng Đại',
        groomRole: 'Groom',
        groomQuote: 'I used to think happiness was something I had to search for. Then I found you, close enough to call home. I promise to love you gently, every ordinary day, for the whole of my life.',
        brideName: 'Nguyễn Hiền',
        brideRole: 'Bride',
        brideQuote: 'I choose you not for one beautiful day, but for all the ordinary days after. Thank you for being the place I can rest, laugh, and begin again.',
        introFooterQuote: 'We may not have it all together, but together, we have it all.',
        timelineTitle: 'Wedding Timeline',
        timelineSubtitle: 'Join us in celebrating these special moments',
        galleryTitle: 'Our Wedding Photos',
        locationTitle: 'Venue Location',
        locationSubtitle: 'Join us at this special place on our big day',
        venueSubtitle: 'Join us at this special place on our big day',
        addressLabel: 'Address',
        scheduleLabel: 'Schedule',
        ceremonyTime: 'Wedding Ceremony: 11:00 AM\nReception: 12:00 PM',
        btnDirection: 'Get Directions',
        giftTitle: 'A gift for the bride and groom',
        giftModalTitle: 'A Gift of Love',
        giftModalSubtitle: 'Scan the QR code to send your love directly to:',
        btnCopyAccount: 'Copy account number',
        copiedAccount: 'Copied',
        btnClose: 'Close',
        wishesTitle: 'Wishes',
        wishesSubtitle: 'Share your love and best wishes with us',
        wishesFormTitle: '💕 Share Your Wishes',
        wishNamePlaceholder: 'Your Name',
        wishMessagePlaceholder: 'Your Wishes',
        btnSendWish: 'Send Wishes',
        wishesListTitle: 'Wishes From Everyone',
        thankYouTitle: 'Thank You!',
        thankYouText1: 'What we hope for most on our wedding day is not a gift, but to have you there.',
        thankYouText2: 'Thank you for making a little room in a busy life to celebrate with us, bless us, and keep the first moments of a happy life with Nguyễn Hiền & Đăng Đại.',
        thankYouSignature: 'We treasure you, truly 💕',
        thankYouTextEn1: 'If you can be with us, that is already the gift we hoped for.',
        thankYouTextEn2: 'We know the days are full — work, family, and a hundred small promises. Still, we would love to look up and find you there, sharing the laughter and the quiet joy of the day we become husband and wife.',
        thankYouSignatureEn: 'From our hearts, thank you 💕',
        thankYouFooter: '"The best is yet to come"',
        rsvpTitle: 'RSVP',
        rsvpSubtitle: 'We hope to celebrate with you — please let us know if you’ll be able to join us',
        labelName: 'Your Name',
        labelAttendance: 'Will you attend?',
        optionYes: '✨ Yes, I will attend!',
        optionNo: '💔 No, I cannot attend',
        labelGuests: 'Number of Guests',
        labelPhone: 'Phone Number',
        labelMessage: 'Message & Wishes',
        btnSubmit: 'Send RSVP',
        footerText: 'Thank you for being part of our special day',
        formSuccess: 'Thank you for your RSVP! We look forward to seeing you.',
        formError: 'An error occurred. Please try again.',
        wishSuccess: 'Thank you for your wishes! 💕',
        dateTimeRow: 'Nov 24 & 28, 2026 — Bride\'s & Groom\'s Home'
    }
};

// ===== State =====
let currentLang = localStorage.getItem('language') || 'vi';
let currentImageIndex = 0;

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initGuestName();
    initCountdown();
    init3PhotoGallery();
    initLightbox();
    initWishesForm();
    initRSVPForm();
    initScrollReveal();
    // initFallingHearts();
    //initFloatingChibi();
    initFAB();
    initVenueDirections();
    initGiftBox();
    initMusic();
});

function initVenueDirections() {
    const nhaGaiBtn = document.getElementById('directionNhaGai');
    const nhaTraiBtn = document.getElementById('directionNhaTrai');
    if (nhaGaiBtn) {
        nhaGaiBtn.addEventListener('click', () => window.open(VENUE_NHA_GAI_MAP, '_blank', 'noopener'));
    }
    if (nhaTraiBtn) {
        nhaTraiBtn.addEventListener('click', () => window.open(VENUE_NHA_TRAI_MAP, '_blank', 'noopener'));
    }
}

function initGiftBox() {
    const trigger = document.getElementById('giftTrigger');
    const modal = document.getElementById('giftModal');
    if (!trigger || !modal) return;

    const openModal = () => {
        modal.hidden = false;
        document.body.classList.add('gift-open');
        const closeBtn = modal.querySelector('.gift-modal-x');
        if (closeBtn) closeBtn.focus({ preventScroll: true });
    };

    const closeModal = () => {
        modal.hidden = true;
        document.body.classList.remove('gift-open');
        trigger.focus();
    };

    trigger.addEventListener('click', openModal);
    modal.querySelectorAll('[data-gift-close]').forEach((el) => {
        el.addEventListener('click', closeModal);
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.hidden) closeModal();
    });

    modal.querySelectorAll('.gift-copy').forEach((button) => {
        button.addEventListener('click', async () => {
            const accountNumber = button.dataset.copy;
            try {
                await navigator.clipboard.writeText(accountNumber);
                button.textContent = translations[currentLang].copiedAccount;
                window.setTimeout(() => {
                    button.textContent = translations[currentLang].btnCopyAccount;
                }, 1600);
            } catch (error) {
                button.textContent = accountNumber;
            }
        });
    });
}

function initMusic() {
    const audio = document.getElementById('bgMusic');
    const toggle = document.getElementById('musicToggle');
    if (!audio || !toggle) return;

    let userPaused = false;

    const setPlaying = (isPlaying) => {
        toggle.classList.toggle('is-playing', isPlaying);
        toggle.setAttribute('aria-pressed', isPlaying ? 'true' : 'false');
        const label = currentLang === 'vi'
            ? (isPlaying ? 'Tắt nhạc nền' : 'Bật nhạc nền')
            : (isPlaying ? 'Pause music' : 'Play music');
        toggle.setAttribute('aria-label', label);
    };

    const tryPlay = () => {
        if (userPaused || !audio.paused) return;
        audio.muted = false;
        const playPromise = audio.play();
        if (!playPromise) return;
        playPromise.then(() => setPlaying(true)).catch(() => setPlaying(!audio.paused));
    };

    toggle.addEventListener('click', (event) => {
        event.stopPropagation();
        if (audio.paused) {
            userPaused = false;
            tryPlay();
        } else {
            userPaused = true;
            audio.pause();
            setPlaying(false);
        }
    });

    ['pointerdown', 'touchstart', 'keydown', 'scroll'].forEach((eventName) => {
        window.addEventListener(eventName, tryPlay, { capture: true, passive: true });
    });
    window.addEventListener('load', tryPlay);
    window.addEventListener('pageshow', tryPlay);
    document.addEventListener('WeixinJSBridgeReady', () => {
        if (window.WeixinJSBridge) {
            window.WeixinJSBridge.invoke('getNetworkType', {}, tryPlay);
            return;
        }
        tryPlay();
    }, false);

    tryPlay();
    let attempts = 0;
    const retryTimer = window.setInterval(() => {
        if (!audio.paused || userPaused || attempts >= 8) {
            window.clearInterval(retryTimer);
            if (!audio.paused) setPlaying(true);
            return;
        }
        attempts += 1;
        tryPlay();
    }, 500);
}

function initFAB() {
    const fabPhone = document.getElementById('fabPhone');
    const fabSubmenu = document.getElementById('fabSubmenu');
    if (!fabPhone || !fabSubmenu) return;

    fabPhone.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = fabSubmenu.classList.contains('open');
        if (isOpen) {
            fabSubmenu.classList.remove('open');
            fabPhone.classList.remove('active');
        } else {
            fabSubmenu.classList.add('open');
            fabPhone.classList.add('active');
        }
    });

    // Close submenu when clicking outside
    document.addEventListener('click', () => {
        fabSubmenu.classList.remove('open');
        fabPhone.classList.remove('active');
    });
}

function initLanguage() {
    updateLanguage(currentLang);

    const desktopToggle = document.getElementById('languageToggle');
    const mobileToggle = document.getElementById('languageToggleMobile');

    if (desktopToggle) desktopToggle.addEventListener('click', toggleLanguage);
    if (mobileToggle) mobileToggle.addEventListener('click', toggleLanguage);

    // Close Bootstrap navbar when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });
}

function toggleLanguage() {
    currentLang = currentLang === 'vi' ? 'en' : 'vi';
    localStorage.setItem('language', currentLang);
    updateLanguage(currentLang);
}

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (key === 'coupleNames') {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    const toggleBtn = document.getElementById('currentLang');
    toggleBtn.textContent = lang === 'vi' ? 'English' : 'Tiếng Việt';
    document.documentElement.lang = lang;

    // Update wishes count
    updateWishesCount();
}

// ===== Guest Name from URL =====
function initGuestName() {
    const urlParams = new URLSearchParams(window.location.search);
    const guest = urlParams.get('guest');

    const guestNameDisplay = document.getElementById('guestNameDisplay');
    const rsvpNameInput = document.getElementById('guestName');

    if (guest) {
        const decoded = decodeURIComponent(guest).trim();
        if (guestNameDisplay) {
            guestNameDisplay.textContent = decoded;
        }
        if (rsvpNameInput) {
            rsvpNameInput.value = decoded;
        }
    } else {
        if (guestNameDisplay) {
            guestNameDisplay.textContent = currentLang === 'vi' ? 'Quý khách' : 'Dear Guest';
        }
    }
}

// ===== Countdown Timer =====
function initCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = WEDDING_DATE.getTime() - now;

    if (distance < 0) {
        // Wedding day has passed
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// ===== 3-Photo Gallery =====
function init3PhotoGallery() {
    updateGallery3Photos();

    let autoplayInterval;

    function startAutoplay() {
        stopAutoplay();
        autoplayInterval = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % TOTAL_IMAGES;
            updateGallery3Photos();
        }, 3000);
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }

    document.getElementById('prevBtn').addEventListener('click', () => {
        stopAutoplay();
        currentImageIndex = (currentImageIndex - 1 + TOTAL_IMAGES) % TOTAL_IMAGES;
        updateGallery3Photos();
        startAutoplay();
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        stopAutoplay();
        currentImageIndex = (currentImageIndex + 1) % TOTAL_IMAGES;
        updateGallery3Photos();
        startAutoplay();
    });

    // Click to open lightbox
    document.getElementById('leftPhoto').addEventListener('click', () => {
        stopAutoplay(); // Stop when viewing lightbox
        const leftIndex = (currentImageIndex - 1 + TOTAL_IMAGES) % TOTAL_IMAGES;
        openLightbox(leftIndex);
    });

    document.getElementById('centerPhoto').addEventListener('click', () => {
        stopAutoplay(); // Stop when viewing lightbox
        openLightbox(currentImageIndex);
    });

    document.getElementById('rightPhoto').addEventListener('click', () => {
        stopAutoplay(); // Stop when viewing lightbox
        const rightIndex = (currentImageIndex + 1) % TOTAL_IMAGES;
        openLightbox(rightIndex);
    });

    // Start auto-play
    startAutoplay();
}

function updateGallery3Photos() {
    const images = document.querySelectorAll('.gallery-3photos img');

    // Add fade-out class to start transition
    images.forEach(img => img.classList.add('fade-out'));

    // Wait for opacity transition (300ms) then swap source
    setTimeout(() => {
        const leftIndex = (currentImageIndex - 1 + TOTAL_IMAGES) % TOTAL_IMAGES;
        const rightIndex = (currentImageIndex + 1) % TOTAL_IMAGES;

        const leftImg = document.querySelector('#leftPhoto img');
        const centerImg = document.querySelector('#centerPhoto img');
        const rightImg = document.querySelector('#rightPhoto img');

        if (leftImg) leftImg.src = `${GALLERY_PATH}${imageFiles[leftIndex]}`;
        if (centerImg) centerImg.src = `${GALLERY_PATH}${imageFiles[currentImageIndex]}`;
        if (rightImg) rightImg.src = `${GALLERY_PATH}${imageFiles[rightIndex]}`;

        // Remove fade-out class to fade back in
        images.forEach(img => img.classList.remove('fade-out'));
    }, 300);
}

// ===== Lightbox =====
function initLightbox() {
    document.getElementById('lightboxPrev').addEventListener('click', (e) => {
        e.stopPropagation();
        changeLightboxImage(-1);
    });

    document.getElementById('lightboxNext').addEventListener('click', (e) => {
        e.stopPropagation();
        changeLightboxImage(1);
    });

    document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('lightbox');
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') changeLightboxImage(-1);
        if (e.key === 'ArrowRight') changeLightboxImage(1);
    });
}

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImage');

    img.src = `${GALLERY_PATH}${imageFiles[index]}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function changeLightboxImage(direction) {
    currentImageIndex = (currentImageIndex + direction + TOTAL_IMAGES) % TOTAL_IMAGES;

    const img = document.getElementById('lightboxImage');
    img.src = `${GALLERY_PATH}${imageFiles[currentImageIndex]}`;

    // Update gallery too
    updateGallery3Photos();
}

// ===== Wishes Form =====
function initWishesForm() {
    const form = document.getElementById('wishesForm');
    if (form) {
        form.addEventListener('submit', handleWishSubmit);
    }
    loadWishes();
}

function handleWishSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('wishName').value.trim();
    const message = document.getElementById('wishMessage').value.trim();

    if (!name || !message) return;

    const wish = {
        type: 'wish',
        name: name,
        message: message,
        timestamp: new Date().toISOString()
    };

    // Show loading
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span style="opacity: 0.7">⏳ Đang gửi...</span>';

    // Save to localStorage (fallback)
    const wishes = JSON.parse(localStorage.getItem('wishes') || '[]');
    wishes.unshift(wish);
    localStorage.setItem('wishes', JSON.stringify(wishes));

    // Send to Google Sheets
    if (GOOGLE_SHEETS_URL) {
        fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(wish)
        }).then(() => {
            console.log('Wish sent to Google Sheets');
            showWishMessage('success', translations[currentLang].wishSuccess || 'Cảm ơn bạn đã gửi lời chúc! 💕');
        }).catch(error => {
            console.error('Error sending to Google Sheets:', error);
            showWishMessage('success', translations[currentLang].wishSuccess || 'Lời chúc đã được lưu! 💕');
        }).finally(() => {
            // Reset button
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        });
    } else {
        // No Google Sheets URL, just show success
        showWishMessage('success', translations[currentLang].wishSuccess || 'Lời chúc đã được lưu! 💕');
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }

    // Reset form
    e.target.reset();

    // Reload wishes from Sheets after a short delay (POST is no-cors, give Sheets time to save)
    setTimeout(() => loadWishes(), 2000);
}

function showWishMessage(type, text) {
    // Create or get message element
    let messageEl = document.getElementById('wishFormMessage');
    if (!messageEl) {
        messageEl = document.createElement('div');
        messageEl.id = 'wishFormMessage';
        messageEl.style.cssText = 'margin-top: 15px; padding: 15px; border-radius: 8px; text-align: center; font-weight: 500;';
        document.querySelector('.wishes-form').appendChild(messageEl);
    }

    if (type === 'success') {
        messageEl.style.background = '#d4edda';
        messageEl.style.color = '#155724';
        messageEl.textContent = text;
    } else {
        messageEl.style.background = '#f8d7da';
        messageEl.style.color = '#721c24';
        messageEl.textContent = text;
    }

    messageEl.style.display = 'block';

    // Hide after 5 seconds
    setTimeout(() => {
        messageEl.style.display = 'none';
    }, 5000);
}

function loadWishes() {
    const wishesItems = document.getElementById('wishesItems');
    if (!wishesItems) return;

    // Show loading state
    wishesItems.innerHTML = '<p style="text-align:center;color:var(--text-light);padding:40px;">⏳ Đang tải lời chúc...</p>';

    if (GOOGLE_SHEETS_URL) {
        fetch(`${GOOGLE_SHEETS_URL}?type=wishes`)
            .then(res => res.json())
            .then(data => {
                const wishes = Array.isArray(data) ? data : (data.wishes || []);
                renderWishes(wishes);
                updateWishesCount(wishes.length);
            })
            .catch(() => {
                // Fallback to localStorage
                const wishes = JSON.parse(localStorage.getItem('wishes') || '[]');
                renderWishes(wishes);
                updateWishesCount(wishes.length);
            });
    } else {
        const wishes = JSON.parse(localStorage.getItem('wishes') || '[]');
        renderWishes(wishes);
        updateWishesCount(wishes.length);
    }
}

function renderWishes(wishes) {
    const wishesItems = document.getElementById('wishesItems');
    if (!wishesItems) return;

    if (wishes.length === 0) {
        wishesItems.innerHTML = '<p style="text-align:center;color:var(--text-light);padding:40px;">Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời chúc!</p>';
        return;
    }

    wishesItems.innerHTML = wishes.map(wish => {
        const date = new Date(wish.timestamp);
        const dateStr = isNaN(date) ? '' : date.toLocaleDateString(currentLang === 'vi' ? 'vi-VN' : 'en-US', {
            month: 'short', day: 'numeric', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
        return `
            <div class="wish-item">
                <div class="wish-header">
                    <span class="wish-icon">💕</span>
                    <span class="wish-name">${escapeHtml(wish.name)}</span>
                    <span class="wish-date">${dateStr}</span>
                </div>
                <p class="wish-message">${escapeHtml(wish.message)}</p>
            </div>
        `;
    }).join('');
}

function updateWishesCount(count) {
    const titleEl = document.querySelector('[data-translate="wishesListTitle"]');
    if (titleEl) {
        const baseText = translations[currentLang].wishesListTitle;
        if (count === undefined) {
            // fallback: read from localStorage length
            count = JSON.parse(localStorage.getItem('wishes') || '[]').length;
        }
        titleEl.textContent = `${baseText} (${count})`;
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== RSVP Form =====
function initRSVPForm() {
    const form = document.getElementById('rsvpForm');
    if (form) {
        form.addEventListener('submit', handleRSVPSubmit);
    }
}

function handleRSVPSubmit(e) {
    e.preventDefault();

    const formData = {
        type: 'rsvp',
        name: document.getElementById('guestName').value,
        attendance: document.querySelector('input[name="attendance"]:checked').value,
        guestCount: document.getElementById('guestCount')?.value ?? '',
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };

    // Show loading
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span style="opacity: 0.7">⏳ Đang gửi...</span>';

    // Store in localStorage (fallback)
    const rsvps = JSON.parse(localStorage.getItem('rsvps') || '[]');
    rsvps.push(formData);
    localStorage.setItem('rsvps', JSON.stringify(rsvps));

    // Send to Google Sheets
    if (GOOGLE_SHEETS_URL) {
        fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(() => {
            console.log('RSVP sent to Google Sheets');
            showRSVPMessage('success', translations[currentLang].formSuccess);
        }).catch(error => {
            console.error('Error sending to Google Sheets:', error);
            showRSVPMessage('success', translations[currentLang].formSuccess);
        }).finally(() => {
            // Reset button
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;

            // Reset form
            e.target.reset();
        });
    } else {
        // No Google Sheets URL, just show success
        showRSVPMessage('success', translations[currentLang].formSuccess);
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        e.target.reset();
    }

    console.log('RSVP Submitted:', formData);
}

function showRSVPMessage(type, text) {
    const messageEl = document.getElementById('formMessage');
    messageEl.textContent = text;
    messageEl.className = `form-message ${type}`;

    // Hide after 5 seconds
    setTimeout(() => {
        messageEl.className = 'form-message';
    }, 5000);
}

// ===== Falling Hearts Animation =====
// ===== Falling Hearts & Fireworks Animation =====
function initFallingHearts() {
    const canvas = document.getElementById('heartsCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    const hearts = [];
    const heartCount = 15;
    const fireworks = [];

    class Heart {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = -20;
            this.size = Math.random() * 15 + 10;
            this.speed = Math.random() * 1 + 0.5;
            this.opacity = Math.random() * 0.5 + 0.3;
            this.swing = Math.random() * 2 - 1;
        }

        update() {
            this.y += this.speed;
            this.x += Math.sin(this.y / 50) * this.swing;

            if (this.y > canvas.height + 20) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = '#FFC1CC';
            ctx.font = `${this.size}px Arial`;
            ctx.fillText('💕', this.x, this.y);
            ctx.restore();
        }
    }

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            // Increased size for bigger particles
            this.size = Math.random() * 5 + 4;
            // Increased speed for wider spread
            this.speedX = Math.random() * 10 - 5;
            this.speedY = Math.random() * 10 - 5;
            this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
            this.life = 100;
            this.opacity = 1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= 1; // Decay
            this.opacity = this.life / 100;
            this.size *= 0.95; // Shrink
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    // Expose function to create fireworks
    window.createFirework = function (x, y) {
        for (let i = 0; i < 30; i++) {
            fireworks.push(new Particle(x, y));
        }
    };

    // Create hearts
    for (let i = 0; i < heartCount; i++) {
        hearts.push(new Heart());
        hearts[i].y = Math.random() * canvas.height;
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw hearts
        hearts.forEach(heart => {
            heart.update();
            heart.draw();
        });

        // Draw fireworks
        for (let i = fireworks.length - 1; i >= 0; i--) {
            const fw = fireworks[i];
            fw.update();
            fw.draw();
            if (fw.life <= 0) {
                fireworks.splice(i, 1);
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}

// ===== Scroll Reveal =====
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
}

// ===== Utility Functions =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== Floating Chibi Animation =====
function initFloatingChibi() {
    const chibiImages = [
        'sao_roi_1.png',
        'sao_roi_2.png',
        'sao_roi_3.png',
        'sao_roi_4.png',
        'sao_roi_5.png',
        'sao_roi_6.png',
        'sao_roi_7.png'
    ];

    const container = document.createElement('div');
    container.className = 'chibi-container';
    document.body.appendChild(container);

    function createChibi() {
        const img = document.createElement('img');
        const randomImage = chibiImages[Math.floor(Math.random() * chibiImages.length)];

        img.src = `images/${randomImage}`;
        img.className = 'chibi-item';

        // Random start position (10% to 90%)
        img.style.left = Math.random() * 80 + 10 + '%';
        img.style.top = Math.random() * 80 + 10 + '%';

        // Random size (between 80px and 150px width)
        const size = Math.random() * 70 + 80;
        img.style.width = size + 'px';
        img.style.height = 'auto'; // Maintain aspect ratio

        // Random movement vector (-200px to +200px)
        const tx = (Math.random() - 0.5) * 400;
        const ty = (Math.random() - 0.5) * 400;

        // Set custom properties for the animation
        img.style.setProperty('--tx', `${tx}px`);
        img.style.setProperty('--ty', `${ty}px`);

        // Duration 10 seconds (User requested)
        const duration = 10;
        img.style.animationDuration = duration + 's';

        // --- Interaction Logic (Drag & Firework) ---
        let isDragging = false;
        let startX, startY, initialLeft, initialTop;
        let animationStopped = false;
        let driftRafId = null;
        let driftSpeedX = (Math.random() - 0.5) * 1; // Random horizontal drift
        let driftSpeedY = (Math.random() * 0.5) + 0.5; // Slow downward drift

        function stopAnimation() {
            if (!animationStopped) {
                const style = window.getComputedStyle(img);

                // Get current 'left' and 'top'
                const rect = img.getBoundingClientRect();

                // Remove animation class/style to stop it moving
                img.style.animation = 'none';
                img.style.transform = 'none';
                img.style.transition = 'none';

                // Position it absolutely where it visibly was
                // Assuming the container is relative to viewport or body. 
                // Since 'chibi-container' is appended to body, likely fixed/absolute. 
                // We'll use viewport coordinates + scroll if needed, but likely fixed.
                // Let's assume fixed or absolute to document.
                img.style.position = 'fixed';
                img.style.left = rect.left + 'px';
                img.style.top = rect.top + 'px';

                // CRITICAL FIX: Ensure opacity is 1, otherwise it inherits 0 from CSS
                img.style.opacity = '1';

                animationStopped = true;
            }
            if (driftRafId) {
                cancelAnimationFrame(driftRafId);
                driftRafId = null;
            }
        }

        function startDrift() {
            if (isDragging) return;

            let currentLeft = parseFloat(img.style.left);
            let currentTop = parseFloat(img.style.top);

            if (!isNaN(currentLeft) && !isNaN(currentTop)) {
                img.style.left = (currentLeft + driftSpeedX) + 'px';
                img.style.top = (currentTop + driftSpeedY) + 'px';

                // Remove if out of bounds (optional cleanup)
                if (currentTop > window.innerHeight + 100) {
                    if (driftRafId) {
                        cancelAnimationFrame(driftRafId);
                        driftRafId = null;
                    }
                    img.remove();
                    return;
                }
            }

            driftRafId = requestAnimationFrame(startDrift);
        }

        function onStart(e) {
            e.preventDefault(); // Prevent default touch/click behavior
            isDragging = true;

            // Trigger Firework
            const clientX = e.clientX || e.touches[0].clientX;
            const clientY = e.clientY || e.touches[0].clientY;

            if (window.createFirework) {
                window.createFirework(clientX, clientY);
            }

            stopAnimation();

            startX = clientX;
            startY = clientY;
            initialLeft = parseFloat(img.style.left) || 0;
            initialTop = parseFloat(img.style.top) || 0;

            img.style.cursor = 'grabbing';

            // Clear the 10s removal timer if interacted, or keep it running?
            // "khoảng 10s rồi mới biến mất" -> Let's respect the 10s total life, or extend it?
            // If user is playing with it, let's extend life or remove the timer?
            // Let's remove the timer so they can play with it indefinitely until it drifts off screen.
            clearTimeout(removalTimer);
        }

        function onMove(e) {
            if (!isDragging) return;

            const clientX = e.clientX || (e.touches ? e.touches[0].clientX : 0);
            const clientY = e.clientY || (e.touches ? e.touches[0].clientY : 0);

            const dx = clientX - startX;
            const dy = clientY - startY;

            img.style.left = `${initialLeft + dx}px`;
            img.style.top = `${initialTop + dy}px`;
        }

        function onEnd() {
            if (isDragging) {
                isDragging = false;
                img.style.cursor = 'grab';
                startDrift();
            }
        }

        // Add events
        img.addEventListener('mousedown', onStart);
        img.addEventListener('touchstart', onStart, { passive: false });

        window.addEventListener('mousemove', onMove);
        window.addEventListener('touchmove', onMove, { passive: false });

        window.addEventListener('mouseup', onEnd);
        window.addEventListener('touchend', onEnd);

        container.appendChild(img);

        // Remove after animation completes (only if not interacted)
        // If user drags it, extend life slightly or remove? 
        // Let's just remove based on original timer to keep performance in check, 
        // but since 10s is long, maybe clear timeout if dragged? 
        // Requirement: "khoảng 10s rồi mới biến mất" (about 10s then disappear).
        // I will stick to 10s timer.

        let removalTimer = setTimeout(() => {
            // If currently dragging, wait a bit? No, just poof.
            if (!isDragging && !animationStopped) {
                if (driftRafId) {
                    cancelAnimationFrame(driftRafId);
                    driftRafId = null;
                }
                img.remove();
                window.removeEventListener('mousemove', onMove);
                window.removeEventListener('touchmove', onMove);
                window.removeEventListener('mouseup', onEnd);
                window.removeEventListener('touchend', onEnd);
            }
        }, duration * 1000);
    }

    // Create a new chibi every 15 seconds
    setInterval(createChibi, 15000);

    // Create one immediately
    createChibi();
}



