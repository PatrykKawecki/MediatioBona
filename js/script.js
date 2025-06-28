// Function to change language
        function changeLanguage(lang) {
            // Update the current language display
            const langNames = {
                'pl': 'PL',
                'en': 'EN',
                'de': 'DE',
                'es': 'ES',
                'fr': 'FR',
                'it': 'IT',
                'ru': 'RU',
                'uk': 'UK'
            };
            
            document.getElementById('currentLang').textContent = langNames[lang];
            
            // Store selected language in localStorage
            localStorage.setItem('selectedLanguage', lang);
            
            // Here you can add logic to load translations from your lang/ folder
            // For now, just log the selected language
            console.log('Language changed to:', lang);
        }
        
        // Load saved language on page load
        document.addEventListener('DOMContentLoaded', function() {
            const savedLang = localStorage.getItem('selectedLanguage') || 'pl';
            changeLanguage(savedLang);
        });


        let translations = {};
        
        // Function to load translations from JSON file
        async function loadTranslations(lang) {
            try {
                const response = await fetch(`lang/${lang}.json`);
                translations = await response.json();
                updatePageText();
            } catch (error) {
                console.error('Error loading translations:', error);
            }
        }
        
        // Function to update all translatable text on the page
        function updatePageText() {
            const elements = document.querySelectorAll('[data-translate]');
            elements.forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[key]) {
                    element.textContent = translations[key];
                }
            });
        }
        
        // Function to change language
        function changeLanguage(lang) {
            // Update the current language display for both desktop and mobile
            const langNames = {
                'pl': 'PL',
                'en': 'EN',
                'de': 'DE',
                'es': 'ES',
                'fr': 'FR',
                'it': 'IT',
                'ru': 'RU',
                'uk': 'UK'
            };
            
            // Update both desktop and mobile language displays
            const currentLangDesktop = document.getElementById('currentLang');
            const currentLangMobile = document.getElementById('currentLangMobile');
            
            if (currentLangDesktop) {
                currentLangDesktop.textContent = langNames[lang];
            }
            if (currentLangMobile) {
                currentLangMobile.textContent = langNames[lang];
            }
            
            // Store selected language in localStorage
            localStorage.setItem('selectedLanguage', lang);
            
            // Load translations for the selected language
            loadTranslations(lang);
        }
        
        // Load saved language on page load
        document.addEventListener('DOMContentLoaded', function() {
            const savedLang = localStorage.getItem('selectedLanguage') || 'pl';
            changeLanguage(savedLang);
        });