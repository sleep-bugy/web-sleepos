// script.js

const translations = {
    en: {
        "page.home_title": "SleepOS - Homepage",
        "page.devices_title": "Devices - SleepOS",
        "page.team_title": "Our Team - SleepOS",
        "nav.features": "Features",
        "nav.devices": "Devices",
        "nav.team": "Team",
        "hero.title": "The OS That Puts You at <span>Ease</span>",
        "hero.description": "SleepOS is designed to deliver a clean, smooth, and distraction-free Android experience.",
        "hero.cta": "Download Now",
        "features.title": "Why Choose <span>SleepOS</span>?",
        "features.subtitle": "Experience a clean, fast, and stable Android experience.",
        "feature1.title": "Optimal Performance",
        "feature1.description": "Designed for speed and efficiency, ensuring a smooth, lag-free experience.",
        "feature2.title": "Clean Interface",
        "feature2.description": "Enjoy a minimalist and intuitive UI, free from unnecessary bloatware.",
        "feature3.title": "Leading Privacy",
        "feature3.description": "Full control over your data with enhanced and transparent privacy features.",
        "feature4.title": "Battery Efficiency",
        "feature4.description": "Smart optimizations to extend your device's battery life.",
        "feature5.title": "Flexible Customization",
        "feature5.description": "Customize the look and feel of the OS to your liking with various options.",
        "feature6.title": "Regular Updates",
        "feature6.description": "Get the latest security and feature updates regularly.",
        "news.title": "Latest News & Updates",
        "news.subtitle": "Follow the latest developments from the SleepOS Project.",
        "news1.title": "SleepOS v1.0 \"Lullaby\" Released!",
        "news1.description": "We are proud to announce the first stable release of SleepOS, focusing on stability and performance.",
        "news1.image_alt": "SleepOS Update News Image",
        "news.read_more": "Read More &rarr;",
        "news2.title": "New Device Support Added",
        "news2.description": "Support for POCO F6, Xiaomi 13, and OnePlus 11 is now available on our devices page.",
        "news3.title": "Join the SleepOS Community",
        "news3.description": "We invite you to join our community on Telegram and Forums.",
        "footer.copyright": "&copy; 2025 SleepOS Project.",
        "devices.title": "Download SleepOS for Your Device",
        "devices.subtitle": "Find your device from the list below to get the latest build.",
        "devices.search_placeholder": "Search device (e.g., POCO F6, peridot)...",
        "devices.download_button": "Download",
        "device.poco_f6_alt": "POCO F6 Image",
        "device.poco_f5_alt": "POCO F5 Image",
        "team.title": "The Core <span>SleepOS</span> Team",
        "team.subtitle": "The people behind this project who make SleepOS a reality.",
        "team.role.lead_dev": "Lead Developer & Founder",
        "team.role.ui_ux": "UI/UX Designer",
        "team.role.maintainer": "Core Maintainer",
        "team.role.community": "Community Manager",
        "team.role.docs": "Documentation Lead",
        "team.join_us": "Interested in joining? <a href=\"#\" style=\"color: var(--light-blue); text-decoration: none;\">Contact us!</a>",
        "team.member1_alt": "Team Member Aditya Dwi",
        "team.member2_alt": "Team Member Jane Doe",
        "team.member3_alt": "Team Member Satoshi Nakamoto",
        "team.member4_alt": "Team Member Alice Wonderland",
        "team.member5_alt": "Team Member Bob Builder"
    },
    id: {
        "page.home_title": "SleepOS - Beranda",
        "page.devices_title": "Perangkat - SleepOS",
        "page.team_title": "Tim Kami - SleepOS",
        "nav.features": "Fitur",
        "nav.devices": "Perangkat",
        "nav.team": "Tim",
        "hero.title": "OS yang Membuat Anda <span>Nyaman</span>",
        "hero.description": "SleepOS dirancang untuk memberikan pengalaman Android yang bersih, mulus, dan bebas gangguan.",
        "hero.cta": "Unduh Sekarang",
        "features.title": "Mengapa Memilih <span>SleepOS</span>?",
        "features.subtitle": "Rasakan pengalaman Android yang bersih, cepat, dan stabil.",
        "feature1.title": "Performa Optimal",
        "feature1.description": "Didesain untuk kecepatan dan efisiensi, memastikan pengalaman yang mulus tanpa lag.",
        "feature2.title": "Antarmuka Bersih",
        "feature2.description": "Nikmati UI yang minimalis dan intuitif, bebas dari bloatware yang tidak perlu.",
        "feature3.title": "Privasi Terdepan",
        "feature3.description": "Kontrol penuh atas data Anda dengan fitur privasi yang ditingkatkan dan transparan.",
        "feature4.title": "Efisiensi Baterai",
        "feature4.description": "Optimalisasi cerdas untuk memperpanjang masa pakai baterai perangkat Anda.",
        "feature5.title": "Kustomisasi Fleksibel",
        "feature5.description": "Sesuaikan tampilan dan nuansa OS sesuai keinginan Anda dengan berbagai opsi.",
        "feature6.title": "Pembaruan Teratur",
        "feature6.description": "Dapatkan pembaruan keamanan dan fitur terbaru secara berkala.",
        "news.title": "Berita & Pembaruan Terbaru",
        "news.subtitle": "Ikuti perkembangan terbaru dari SleepOS Project.",
        "news1.title": "SleepOS v1.0 \"Lullaby\" Dirilis!",
        "news1.description": "Kami dengan bangga mengumumkan rilis stabil pertama SleepOS, dengan fokus pada stabilitas dan performa.",
        "news1.image_alt": "Gambar Berita Pembaruan SleepOS",
        "news.read_more": "Baca Selengkapnya &rarr;",
        "news2.title": "Dukungan Perangkat Baru Ditambahkan",
        "news2.description": "Dukungan untuk POCO F6, Xiaomi 13, dan OnePlus 11 kini tersedia di halaman perangkat kami.",
        "news3.title": "Bergabunglah dengan Komunitas SleepOS",
        "news3.description": "Kami mengundang Anda untuk bergabung dengan komunitas kami di Telegram dan Forum.",
        "footer.copyright": "&copy; 2025 Proyek SleepOS.",
        "devices.title": "Unduh SleepOS untuk Perangkat Anda",
        "devices.subtitle": "Temukan perangkat Anda dari daftar di bawah ini untuk mendapatkan build terbaru.",
        "devices.search_placeholder": "Cari perangkat (mis. POCO F6, peridot)...",
        "devices.download_button": "Unduh",
        "device.poco_f6_alt": "Gambar POCO F6",
        "device.poco_f5_alt": "Gambar POCO F5",
        "team.title": "Tim Inti <span>SleepOS</span>",
        "team.subtitle": "Orang-orang di balik proyek ini yang mewujudkan SleepOS.",
        "team.role.lead_dev": "Pengembang Utama & Pendiri",
        "team.role.ui_ux": "Desainer UI/UX",
        "team.role.maintainer": "Maintainer Inti",
        "team.role.community": "Manajer Komunitas",
        "team.role.docs": "Pemimpin Dokumentasi",
        "team.join_us": "Tertarik untuk bergabung? <a href=\"#\" style=\"color: var(--light-blue); text-decoration: none;\">Hubungi kami!</a>",
        "team.member1_alt": "Anggota Tim Aditya Dwi",
        "team.member2_alt": "Anggota Tim Jane Doe",
        "team.member3_alt": "Anggota Tim Satoshi Nakamoto",
        "team.member4_alt": "Anggota Tim Alice Wonderland",
        "team.member5_alt": "Anggota Tim Bob Builder"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // --- Hamburger Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // --- Language Switcher ---
    const languageSelect = document.getElementById('language-select');

    function setLanguage(lang) {
        const currentTranslations = translations[lang];
        if (!currentTranslations) {
            console.warn(`No translations found for language: ${lang}`);
            return;
        }

        // Update text content
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (currentTranslations[key]) {
                element.innerHTML = currentTranslations[key];
            }
        });

        // Update placeholder attributes
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (currentTranslations[key]) {
                element.setAttribute('placeholder', currentTranslations[key]);
            }
        });

        // Update alt attributes
        document.querySelectorAll('[data-i18n-alt]').forEach(element => {
            const key = element.getAttribute('data-i18n-alt');
            if (currentTranslations[key]) {
                element.setAttribute('alt', currentTranslations[key]);
            }
        });

        // Update page title
        document.title = currentTranslations[document.querySelector('title').getAttribute('data-i18n')] || document.title;
        localStorage.setItem('selectedLanguage', lang);
    }

    // --- Active Nav Link Highlighting ---
    const currentPath = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop().split('#')[0];
        if (currentPath === linkPath || (currentPath === 'index.html' && linkPath === '')) {
            link.classList.add('active');
        } else if (currentPath === '' && link.getAttribute('href') === 'index.html') {
            // Handle root path for index.html
            link.classList.add('active');
        }
    });

    // Initialize language
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Default to English
    if (languageSelect) {
        languageSelect.value = savedLanguage;
        setLanguage(savedLanguage);
        languageSelect.addEventListener('change', (event) => {
            setLanguage(event.target.value);
        });
    });

    // --- Scroll Reveal Animation ---
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    scrollRevealElements.forEach(el => {
        observer.observe(el);
    });

    // --- Device Search/Filter (for perangkat.html) ---
    const deviceSearchInput = document.getElementById('deviceSearch');
    if (deviceSearchInput) {
        deviceSearchInput.addEventListener('keyup', (event) => {
            const searchTerm = event.target.value.toLowerCase();
            const deviceCards = document.querySelectorAll('.device-card');

            deviceCards.forEach(card => {
                const deviceName = card.querySelector('h2').textContent.toLowerCase();
                const codename = card.querySelector('.codename').textContent.toLowerCase();
                card.style.display = (deviceName.includes(searchTerm) || codename.includes(searchTerm)) ? 'block' : 'none';
            });
        });
    }
});