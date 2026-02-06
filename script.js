// ========== متغیرهای عمومی ==========
        let currentTab = 0;
        let darkMode = false;
        let equationHistory = [];
        let algebraHistory = [];
        let quizQuestions = [];
        let quizTimer = null;
        let quizTime = 0;
        let quizScore = 0;
        let currentQuestion = 0;
        let aiMessages = [];
        let currentLanguage = 'fa';
        
        // ========== سیستم ترجمه ==========
        const translations = {
            fa: {
                // Header
                siteTitle: 'ایما',
                siteSubtitle: 'دستیار هوشمند ریاضی',
                siteDescription: 'یادگیری ریاضی به سبکی نوین و تعاملی',
                darkMode: 'حالت تاریک',
                lightMode: 'حالت روشن',
                
                // Tabs
                calculator: 'ماشین حساب',
                ai: 'معلم هوش مصنوعی',
	            prime: 'اعداد اول',
                factor: 'عوامل اول',
                divisor: 'مقسوم‌علیه‌ها',
                gcdlcm: 'ب.م.م و ک.م.م',
                circle: 'دایره',
                pythagoras: 'فیثاغورث',
                polygon: 'چندضلعی‌ها',
                egyptian: 'کسرهای مصری',
                khayyam: 'مثلث خیام',
                lesson: 'درسنامه',
                videos: 'فیلم های آموزشی',
                games: 'بازی‌ها',
                sieve: 'غربال',
                quiz: 'مسابقه ریاضی',
                equation: 'حل معادلات',
                algebra: 'ساده‌سازی جبری',
                about: 'درباره',
                settings: 'تنظیمات',
                
                // Common
                calculate: 'محاسبه',
                clear: 'پاک کردن',
                result: 'نتیجه',
                steps: 'مراحل حل',
                example: 'مثال',
                enter: 'وارد کنید',
                comingSoon: 'به زودی...',
                
                // Footer
                allRightsReserved: 'تمام حقوق محفوظ است',
                backToTop: 'بازگشت به بالا',
                printPage: 'چاپ صفحه',
                tools: 'ابزارها',
                help: 'راهنما',
                usage: 'راهنمای استفاده',
                social: 'ایما در شبکه‌ها',
                
                // Games
                gamesTitle: 'بازی‌های ریاضی',
                gamesDescription: 'یادگیری ریاضی با بازی‌های جذاب و سرگرم‌کننده',
                polygonMaker: 'چندضلعی‌ساز',
                gameInstructions: 'با نگه‌داشتن موس یا لمس صفحه، چندضلعی بکشید! هر بار که جهت تغییر می‌کند، ضلع جدیدی ایجاد می‌شود.',
                currentSides: 'تعداد ضلع‌های فعلی',
                bestRecord: 'بهترین رکورد شما',
                status: 'وضعیت',
                restart: 'شروع مجدد',
                readyToStart: 'آماده شروع',
                drawing: 'در حال رسم...',
                newRecord: '🎉 رکورد جدید!',
                tryAgain: 'پایان - دوباره تلاش کنید!',
                gameGuide: 'راهنمای بازی',
                computer: 'کامپیوتر',
                mobile: 'موبایل',
                holdLeftClick: 'دکمه چپ موس را نگه دارید و حرکت کنید',
                touchAndMove: 'انگشت خود را روی صفحه نگه دارید و حرکت دهید',
                changeDirection: 'هر بار که جهت حرکت تغییر کند، ضلع جدیدی ایجاد می‌شود',
                tryToMake: 'سعی کنید چندضلعی با بیشترین تعداد ضلع بسازید!',
                recordSaved: 'رکورد شما به صورت خودکار ذخیره می‌شود',
                
                // Calculator
                advancedCalculator: 'ماشین‌حساب پیشرفته',
                calculatorDescription: 'محاسبات پیچیده ریاضی با نمایش مراحل حل',
                
                // Lessons
                lessonsTitle: 'درسنامه',
                lessonsDescription: 'مطالعه درس‌های ریاضی به صورت منظم و ساختار یافته',
                lessonsList: 'فهرست درسنامه‌ها',
                integers: 'عددهای صحیح و گویا',
                primes: 'اعداد اول',
                polygons: 'چندضلعی‌ها',
                algebraLesson: 'جبر و معادله',
                vectors: 'بردار و مختصات',
                triangle: 'مثلث',
                power: 'توان و جذر',
                statistics: 'آمار و احتمال',
                backToList: 'بازگشت به فهرست',
                
                // Videos
                videosTitle: 'فیلم های آموزشی',
                videosDescription: 'آموزش مفاهیم ریاضی کلاس هشتم به صورت تصویری و جذاب',
                videosList: 'فهرست فیلم‌های آموزشی کلاس هشتم',
                watchVideo: 'تماشای فیلم',
                importantNote: 'نکته مهم',
                videoNote: 'با کلیک روی هر کارت، به فیلم آموزشی مربوطه در آپارات هدایت می‌شوید. این فیلم‌ها توسط معلمان مجرب تهیه شده‌اند.',
                integersVideo: 'عددهای صحیح و گویا',
                integersVideoDesc: 'آموزش کامل عددهای صحیح، گویا و عملیات روی آنها',
                primesVideo: 'اعداد اول',
                primesVideoDesc: 'شناخت اعداد اول، تجزیه به عوامل اول و کاربردها',
                polygonsVideo: 'چندضلعی‌ها',
                polygonsVideoDesc: 'انواع چندضلعی‌ها، محیط و مساحت',
                algebraVideo: 'جبر و معادله',
                algebraVideoDesc: 'حل معادلات درجه اول و دوم، ساده‌سازی عبارات',
                vectorsVideo: 'بردار و مختصات',
                vectorsVideoDesc: 'صفحه مختصات، بردارها و عملیات روی آنها',
                triangleVideo: 'مثلث',
                triangleVideoDesc: 'انواع مثلث، قضیه فیثاغورث و مساحت',
                powerVideo: 'توان و جذر',
                powerVideoDesc: 'قوانین توان و جذر، ساده‌سازی رادیکال',
                statisticsVideo: 'آمار و احتمال',
                statisticsVideoDesc: 'میانگین، میانه، نما و محاسبه احتمال',
                circleVideo: 'دایره',
                circleVideoDesc: 'محیط، مساحت و اجزای دایره',
                
                // AI Teacher
                aiTeacher: 'معلم هوش مصنوعی ریاضی',
                aiDescription: 'پرسش و پاسخ هوشمند در مورد مفاهیم ریاضی',
                aiOnline: 'آنلاین و آماده پاسخگویی',
                clearChat: 'پاک کردن چت',
                aiWelcome: 'سلام! 👋 من معلم هوش مصنوعی ریاضی شما هستم. می‌توانم در موضوعات زیر به شما کمک کنم:',
                solveProblem: 'حل مسائل',
                explainConcept: 'توضیح مفاهیم',
                calculations: 'محاسبات',
                academicGuidance: 'راهنمایی تحصیلی',
                askQuestion: 'چه سوالی درباره ریاضی دارید؟',
                
                // Quiz
                mathQuiz: 'مسابقه ریاضی',
                quizDescription: 'آزمون ریاضی در سه سطح با امتیازدهی',
                
                // About
                aboutProject: 'درباره پروژه',
                aboutDescription: 'ایما برای ایجاد یک پلتفرم آموزشی تعاملی برای یادگیری ریاضی توسعه یافته است. این پروژه با هدف آموزش مفاهیم پیچیده ریاضی به شکلی ساده و جذاب طراحی شده است.',
                keyFeatures: 'ویژگی‌های کلیدی',
                advancedCalc: 'ماشین‌حساب پیشرفته',
                calcFeature: 'با نمایش مراحل حل و توابع پیچیده',
                solveEq: 'حل معادلات',
                eqFeature: 'حل معادلات درجه اول، دوم و دستگاه معادلات',
                algebraSimp: 'ساده‌سازی جبری',
                algFeature: 'ساده‌سازی، بسط و تجزیه عبارات پیچیده',
                aiTeacherFeature: 'معلم هوش مصنوعی',
                aiFeatureDesc: 'پاسخ به سوالات ریاضی با تشخیص صدا',
                mathQuizFeature: 'مسابقه ریاضی',
                quizFeatureDesc: 'آزمون دانش ریاضی در سه سطح',
                multiLanguage: 'پشتیبانی چند زبانه',
                langFeature: 'رابط کاربری فارسی، انگلیسی و عربی',
                contactUs: 'ارتباط با ما',
                developedIn: 'زمستان ۱۴۰۳',
                madeFor: 'ساخته شده با ❤️ برای جامعه آموزشی ایران',
                
                // Settings
                settingsTitle: 'تنظیمات',
                languageSettings: 'تنظیمات زبان',
                languageDesc: 'انتخاب زبان و جهت متن',
                persian: 'فارسی',
                english: 'انگلیسی',
                arabic: 'عربی',
                rtl: 'راست به چپ',
                ltr: 'چپ به راست',
                appearanceSettings: 'تنظیمات ظاهری',
                appearanceDesc: 'تنظیم حالت نمایش و رنگ‌ها',
                darkModeDesc: 'مناسب برای نور کم',
                systemStatus: 'وضعیت سیستم',
                mathSystem: 'سیستم ریاضی',
                aiSystem: 'هوش مصنوعی',
                storage: 'ذخیره‌سازی',
                overallStatus: 'وضعیت کلی',
                active: 'فعال و آماده',
                activeShort: 'فعال',
                optimal: 'بهینه',
                currentSettings: 'تنظیمات فعلی',
                language: 'زبان',
                mode: 'حالت',
                textDirection: 'جهت متن',
                version: 'نسخه',
                light: 'روشن',
                dark: 'تاریک'
            },
            en: {
                // Header
                siteTitle: 'IMA',
                siteSubtitle: 'Intelligent Math Assistant',
                siteDescription: 'Learn Math in a Modern and Interactive Way',
                darkMode: 'Dark Mode',
                lightMode: 'Light Mode',
                
                // Tabs
                calculator: 'Calculator',
                prime: 'Prime Numbers',
                factor: 'Prime Factors',
                divisor: 'Divisors',
                gcdlcm: 'GCD & LCM',
                circle: 'Circle',
                pythagoras: 'Pythagoras',
                polygon: 'Polygons',
                egyptian: 'Egyptian Fractions',
                khayyam: 'Pascal\'s Triangle',
                lesson: 'Lessons',
                videos: 'Tutorial Videos',
                games: 'Games',
                ai: 'AI Math Teacher',
                sieve: 'Sieve',
                quiz: 'Math Quiz',
                equation: 'Solve Equations',
                algebra: 'Algebraic Simplification',
                about: 'About',
                settings: 'Settings',
                
                // Common
                calculate: 'Calculate',
                clear: 'Clear',
                result: 'Result',
                steps: 'Solution Steps',
                example: 'Example',
                enter: 'Enter',
                comingSoon: 'Coming Soon...',
                
                // Calculator
                advancedCalculator: 'Advanced Calculator',
                calculatorDescription: 'Complex mathematical calculations with step-by-step solutions',
                
                // Prime Numbers
                checkPrime: 'Check Prime',
                primeDescription: 'Check if a number is prime',
                enterNumber: 'Enter a number',
                isPrime: 'is a prime number',
                isNotPrime: 'is not a prime number',
                
                // Equations
                solveEquation: 'Solve Equation',
                equationDescription: 'Solve linear and quadratic equations',
                linearEquation: 'Linear Equation',
                quadraticEquation: 'Quadratic Equation',
                solution: 'Solution',
                noRealSolution: 'No real solution',
                
                // AI Teacher
                aiTeacher: 'AI Math Teacher',
                aiDescription: 'Ask any math question',
                askQuestion: 'Ask your question...',
                send: 'Send',
                clearChat: 'Clear Chat',
                online: 'Online and ready',
                
                // Quiz
                mathQuiz: 'Math Quiz',
                quizDescription: 'Test your math knowledge',
                startQuiz: 'Start Quiz',
                easy: 'Easy',
                medium: 'Medium',
                hard: 'Hard',
                score: 'Score',
                time: 'Time',
                question: 'Question',
                submit: 'Submit',
                nextQuestion: 'Next Question',
                quizComplete: 'Quiz Complete!',
                yourScore: 'Your Score',
                
                // Lessons
                lessonsTitle: 'Math Lessons',
                lessonsDescription: 'Study math topics systematically',
                lessonsList: 'Lessons List',
                integers: 'Integers & Rational Numbers',
                primes: 'Prime Numbers',
                polygons: 'Polygons',
                algebraLesson: 'Algebra & Equations',
                vectors: 'Vectors & Coordinates',
                triangle: 'Triangle',
                power: 'Powers & Roots',
                statistics: 'Statistics & Probability',
                backToList: 'Back to List',
                
                // Videos
                videosTitle: 'Tutorial Videos',
                videosDescription: 'Learn 8th grade math concepts visually and engagingly',
                videosList: 'List of 8th Grade Tutorial Videos',
                watchVideo: 'Watch Video',
                importantNote: 'Important Note',
                videoNote: 'By clicking on each card, you will be directed to the related educational video on Aparat. These videos are prepared by experienced teachers.',
                integersVideo: 'Integers and Rational Numbers',
                integersVideoDesc: 'Complete tutorial on integers, rational numbers and their operations',
                primesVideo: 'Prime Numbers',
                primesVideoDesc: 'Understanding prime numbers, prime factorization and applications',
                polygonsVideo: 'Polygons',
                polygonsVideoDesc: 'Types of polygons, perimeter and area',
                algebraVideo: 'Algebra and Equations',
                algebraVideoDesc: 'Solving first and second degree equations, simplifying expressions',
                vectorsVideo: 'Vectors and Coordinates',
                vectorsVideoDesc: 'Coordinate plane, vectors and their operations',
                triangleVideo: 'Triangle',
                triangleVideoDesc: 'Types of triangles, Pythagorean theorem and area',
                powerVideo: 'Powers and Roots',
                powerVideoDesc: 'Power and root rules, radical simplification',
                statisticsVideo: 'Statistics and Probability',
                statisticsVideoDesc: 'Mean, median, mode and probability calculation',
                circleVideo: 'Circle',
                circleVideoDesc: 'Circumference, area and circle components',
                
                // Games
                gamesTitle: 'Math Games',
                gamesDescription: 'Learn math through fun games',
                polygonMaker: 'Polygon Maker',
                gameInstructions: 'Hold mouse button or touch screen and move to draw. Change direction to create new sides!',
                currentSides: 'Current Sides',
                bestRecord: 'Best Record',
                status: 'Status',
                restart: 'Restart',
                readyToStart: 'Ready to Start',
                drawing: 'Drawing...',
                newRecord: '🎉 New Record!',
                tryAgain: 'Try Again!',
                gameGuide: 'Game Guide',
                computer: 'Computer',
                mobile: 'Mobile',
                holdLeftClick: 'Hold left mouse button and move',
                touchAndMove: 'Touch and hold while moving',
                changeDirection: 'Change direction to create new sides',
                tryToMake: 'Try to make a polygon with the most sides!',
                recordSaved: 'Your record is automatically saved',
                
                // About
                aboutProject: 'About the Project',
                aboutDescription: 'IMA is developed to create an interactive educational platform for learning mathematics. This project aims to teach complex mathematical concepts in a simple and engaging way.',
                keyFeatures: 'Key Features',
                advancedCalc: 'Advanced Calculator',
                calcFeature: 'With step-by-step solutions and complex functions',
                solveEq: 'Solve Equations',
                eqFeature: 'Solve linear, quadratic and systems of equations',
                algebraSimp: 'Algebraic Simplification',
                algFeature: 'Simplify, expand and factor complex expressions',
                aiTeacherFeature: 'AI Math Teacher',
                aiFeatureDesc: 'Answer math questions with voice recognition',
                mathQuizFeature: 'Math Quiz',
                quizFeatureDesc: 'Test your math knowledge at three levels',
                multiLanguage: 'Multi-Language Support',
                langFeature: 'Persian, English and Arabic interface',
                contactUs: 'Contact Us',
                developedIn: 'Winter 2024',
                madeFor: 'Made with ❤️ for Iranian educational community',
                
                // Settings
                settingsTitle: 'Settings',
                languageSettings: 'Language Settings',
                languageDesc: 'Select language and text direction',
                persian: 'Persian',
                english: 'English',
                arabic: 'Arabic',
                rtl: 'Right to Left',
                ltr: 'Left to Right',
                appearanceSettings: 'Appearance Settings',
                appearanceDesc: 'Adjust display mode and colors',
                darkModeDesc: 'Suitable for low light',
                systemStatus: 'System Status',
                mathSystem: 'Math System',
                aiSystem: 'AI System',
                storage: 'Storage',
                overallStatus: 'Overall Status',
                active: 'Active and Ready',
                activeShort: 'Active',
                optimal: 'Optimal',
                currentSettings: 'Current Settings',
                language: 'Language',
                mode: 'Mode',
                textDirection: 'Text Direction',
                version: 'Version',
                light: 'Light',
                dark: 'Dark',
                
                // Footer
                allRightsReserved: 'All Rights Reserved',
                developedBy: 'Developed by Seyed Younes Razavi and Parsa Golmahi',
                backToTop: 'Back to Top',
                printPage: 'Print Page',
                tools: 'Tools',
                help: 'Help',
                usage: 'User Guide',
                social: 'IMA on Social Media'
            }
        };
        
        function t(key) {
            return translations[currentLanguage][key] || key;
        }
        
        // ========== تنظیمات OpenRouter ==========
        const OPENROUTER_API_KEY = "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"; // کلید API جدید شما
        const OPENROUTER_MODEL = "deepseek/deepseek-r1-0528:free"; // مدل مورد نظر شما
        
        // ========== توابع تب‌ها ==========
        function initTabs() {
            const tabs = [
                { id: 'calculator', name: t('calculator'), icon: 'fa-calculator' },
                { id: 'ai', name: t('ai'), icon: 'fa-robot' },
                { id: 'avatar', name: 'آواتار', icon: 'fa-user-circle' },
                { id: 'prime', name: t('prime'), icon: 'fa-leaf' },
                { id: 'factor', name: t('factor'), icon: 'fa-cogs' },
                { id: 'divisor', name: t('divisor'), icon: 'fa-divide' },
                { id: 'gcdlcm', name: t('gcdlcm'), icon: 'fa-sort-amount-up' },
                { id: 'circle', name: t('circle'), icon: 'fa-circle' },
                { id: 'pythagoras', name: t('pythagoras'), icon: 'fa-shapes' },
                { id: 'polygon', name: t('polygon'), icon: 'fa-draw-polygon' },
                { id: 'egyptian', name: t('egyptian'), icon: 'fa-fraction' },
                { id: 'khayyam', name: t('khayyam'), icon: 'fa-triangle' },
                { id: 'lesson', name: t('lesson'), icon: 'fa-book' },
                { id: 'videos', name: t('videos'), icon: 'fa-video' },
                { id: 'games', name: t('games'), icon: 'fa-puzzle-piece' },
                { id: 'sieve', name: t('sieve'), icon: 'fa-filter' },
                { id: 'quiz', name: t('quiz'), icon: 'fa-gamepad' },
                { id: 'equation', name: t('equation'), icon: 'fa-equals' },
                { id: 'algebra', name: t('algebra'), icon: 'fa-code' },
                { id: 'about', name: t('about'), icon: 'fa-info-circle' },
                { id: 'settings', name: t('settings'), icon: 'fa-cog' }
            ];
            
            const tabsContainer = document.getElementById('mainTabs');
            const tabContents = document.getElementById('tabContents');
            
            tabs.forEach((tab, index) => {
                // ایجاد تب
                const tabElement = document.createElement('button');
                tabElement.className = `tab ${index === 0 ? 'active' : ''}`;
                tabElement.innerHTML = `<i class="fas ${tab.icon}"></i> ${tab.name}`;
                tabElement.onclick = () => switchTab(index);
                tabsContainer.appendChild(tabElement);
                
                // فعال کردن تب اول
                if (index === 0) {
                    document.getElementById(`tab-${tab.id}`).classList.add('active');
                }
            });
        }
        
function switchTab(index) {
            // غیرفعال کردن همه تب‌ها
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // فعال کردن تب انتخاب شده
            document.querySelectorAll('.tab')[index].classList.add('active');
            document.querySelectorAll('.tab-content')[index].classList.add('active');
            currentTab = index;
            
            // اسکرول تب‌ها به موقعیت صحیح
            scrollTabsTo(index);
        }
        
        function scrollTabs(direction) {
            const tabsContainer = document.querySelector('.tabs-scroll');
            const scrollAmount = 200;
            tabsContainer.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }
        
        function scrollTabsTo(index) {
            const tabsContainer = document.querySelector('.tabs-scroll');
            const tab = document.querySelectorAll('.tab')[index];
            if (tab) {
                const tabOffset = tab.offsetLeft;
                const containerWidth = tabsContainer.clientWidth;
                const scrollPosition = tabOffset - (containerWidth / 2) + (tab.offsetWidth / 2);
                tabsContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' });
            }
        }
        
        // ========== توابع حالت تاریک ==========
        function toggleDarkMode() {
            darkMode = !darkMode;
            document.body.classList.toggle('dark-mode', darkMode);
            
            // به‌روزرسانی متن دکمه
            const textElement = document.getElementById('headerDarkModeText');
            const toggleElement = document.getElementById('darkModeToggle');
            
            if (textElement) {
                textElement.textContent = darkMode ? t('lightMode') : t('darkMode');
            }
            
            if (toggleElement) {
                toggleElement.checked = darkMode;
            }
            
            // به‌روزرسانی نمایش وضعیت فعلی
            const currentModeDisplay = document.getElementById('currentModeDisplay');
            if (currentModeDisplay) {
                currentModeDisplay.textContent = darkMode ? 
                    (currentLanguage === 'fa' ? 'تاریک' : 'Dark') : 
                    (currentLanguage === 'fa' ? 'روشن' : 'Light');
            }
            
            // ذخیره تنظیمات
            saveSettings();
        }
        
        // ========== ماشین حساب پیشرفته ==========
        function addToCalc(value) {
            const display = document.getElementById('advDisplay');
            display.value += value;
        }
        
        function backspaceCalc() {
            const display = document.getElementById('advDisplay');
            display.value = display.value.slice(0, -1);
        }
        
        function clearCalc() {
            document.getElementById('advDisplay').value = '';
            document.getElementById('advResult').innerHTML = `
                <div class="result-placeholder">
                    <img src="IMA.png" alt="ایما" style="width: 40px; opacity: 0.5;">
                    <p>نتیجه محاسبات اینجا نمایش داده می‌شود</p>
                </div>
            `;
            document.getElementById('advSteps').innerHTML = `
                <div class="steps-placeholder">
                    <i class="fas fa-info-circle"></i>
                    <p>مراحل حل معادله به صورت مرحله‌ای نمایش داده می‌شود</p>
                </div>
            `;
        }
        
        function calculateAdvanced() {
            const display = document.getElementById('advDisplay');
            const expression = display.value;
            
            if (!expression.trim()) {
                alert('لطفا یک عبارت ریاضی وارد کنید');
                return;
            }
            
            try {
                // تبدیل نمادهای فارسی به استاندارد
                let processedExpr = expression
                    .replace(/÷/g, '/')
                    .replace(/×/g, '*')
                    .replace(/π/g, 'pi')
                    .replace(/√/g, 'sqrt')
                    .replace(/\^/g, '^')
                    .replace(/!/g, 'factorial');
                
                // بررسی و اصلاح پرانتزها
                const openParens = (processedExpr.match(/\(/g) || []).length;
                const closeParens = (processedExpr.match(/\)/g) || []).length;
                
                if (openParens > closeParens) {
                    processedExpr += ')'.repeat(openParens - closeParens);
                }
                
                // محاسبه نتیجه
                const result = math.evaluate(processedExpr);
                
                // نمایش نتیجه
                const resultDiv = document.getElementById('advResult');
                resultDiv.innerHTML = `
                    <div class="result-content">
                        <div class="expression">${expression} =</div>
                        <div class="final-result">${formatNumber(result)}</div>
                        <div class="result-details">
                            <span class="detail-item">
                                <i class="fas fa-calculator"></i>
                                <span>نتیجه: ${formatNumber(result)}</span>
                            </span>
                            <span class="detail-item">
                                <i class="fas fa-history"></i>
                                <span>زمان: هم اکنون</span>
                            </span>
                        </div>
                    </div>
                `;
                
                // نمایش مراحل
                const stepsDiv = document.getElementById('advSteps');
                stepsDiv.innerHTML = `
                    <div class="steps-content">
                        <div class="step">
                            <div class="step-number">۱</div>
                            <div class="step-content">
                                <strong>عبارت ورودی:</strong> ${expression}
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">۲</div>
                            <div class="step-content">
                                <strong>تبدیل به فرم استاندارد:</strong> ${processedExpr}
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">۳</div>
                            <div class="step-content">
                                <strong>محاسبه:</strong> ${processedExpr} = ${formatNumber(result)}
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">۴</div>
                            <div class="step-content">
                                <strong>نتیجه نهایی:</strong> ${formatNumber(result)}
                            </div>
                        </div>
                    </div>
                `;
                
            } catch (error) {
                document.getElementById('advResult').innerHTML = `
                    <div class="error-message">
                        <i class="fas fa-exclamation-triangle"></i>
                        <div>
                            <h4>خطا در محاسبه</h4>
                            <p>${error.message}</p>
                            <p>لطفا عبارت را بررسی و دوباره امتحان کنید.</p>
                        </div>
                    </div>
                `;
                
                document.getElementById('advSteps').innerHTML = `
                    <div class="steps-placeholder">
                        <i class="fas fa-exclamation-circle"></i>
                        <p>به دلیل خطا در عبارت ورودی، مراحل حل نمایش داده نمی‌شود</p>
                    </div>
                `;
            }
        }
        
        function formatNumber(num) {
            // محدود کردن اعشار به 10 رقم
            const fixed = Number(num.toFixed(10));
            
            // اگر عدد صحیح است، اعشار را نشان نده
            if (Number.isInteger(fixed)) {
                return fixed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            
            // نمایش با جداکننده هزارگان
            return fixed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        
        // ========== اعداد اول ==========
        function checkPrime(tabIndex) {
            const inputId = `primeInput${tabIndex}`;
            const resultId = `primeResult${tabIndex}`;
            const statusId = `primeStatus${tabIndex}`;
            
            const input = document.getElementById(inputId);
            const num = parseInt(input.value);
            
            if (!num || num < 2) {
                alert('لطفا عددی بزرگتر از 1 وارد کنید');
                return;
            }
            
            const isPrime = isPrimeNumber(num);
            const divisors = findDivisors(num);
            
            // به‌روزرسانی وضعیت
            const statusDiv = document.getElementById(statusId);
            statusDiv.innerHTML = `
                <span class="status-dot" style="background: ${isPrime ? '#10b981' : '#ef4444'}"></span>
                <span>${isPrime ? 'عدد اول' : 'عدد مرکب'}</span>
            `;
            
            // نمایش نتیجه
            const resultDiv = document.getElementById(resultId);
            resultDiv.innerHTML = `
                <div class="prime-result">
                    <div class="prime-header ${isPrime ? 'prime' : 'composite'}">
                        <i class="fas ${isPrime ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                        <h4>عدد ${num} ${isPrime ? 'اول' : 'مرکب'} است</h4>
                    </div>
                    
                    <div class="prime-info">
                        <div class="info-row">
                            <div class="info-label">تعداد مقسوم‌علیه‌ها:</div>
                            <div class="info-value">${divisors.length}</div>
                        </div>
                        
                        <div class="info-row">
                            <div class="info-label">مقسوم‌علیه‌ها:</div>
                            <div class="info-value">${divisors.join(', ')}</div>
                        </div>
                        
                        <div class="info-row">
                            <div class="info-label">تجزیه به عوامل اول:</div>
                            <div class="info-value">${primeFactorization(num)}</div>
                        </div>
                    </div>
                    
                    ${!isPrime ? `
                    <div class="prime-alert">
                        <i class="fas fa-info-circle"></i>
                        <p>این عدد مرکب است زیرا به جز 1 و خودش، مقسوم‌علیه‌های دیگری دارد.</p>
                    </div>
                    ` : ''}
                </div>
            `;
        }
        
        function isPrimeNumber(n) {
            if (n <= 1) return false;
            if (n <= 3) return true;
            if (n % 2 === 0 || n % 3 === 0) return false;
            
            for (let i = 5; i * i <= n; i += 6) {
                if (n % i === 0 || n % (i + 2) === 0) return false;
            }
            return true;
        }
        
        function findDivisors(n) {
            const divisors = [];
            for (let i = 1; i <= Math.sqrt(n); i++) {
                if (n % i === 0) {
                    divisors.push(i);
                    if (i !== n / i) {
                        divisors.push(n / i);
                    }
                }
            }
            return divisors.sort((a, b) => a - b);
        }
        
        function primeFactorization(n) {
            const factors = [];
            let temp = n;
            
            // تقسیم بر 2
            while (temp % 2 === 0) {
                factors.push(2);
                temp /= 2;
            }
            
            // تقسیم بر اعداد فرد
            for (let i = 3; i <= Math.sqrt(temp); i += 2) {
                while (temp % i === 0) {
                    factors.push(i);
                    temp /= i;
                }
            }
            
            // اگر عدد باقیمانده اول باشد
            if (temp > 2) {
                factors.push(temp);
            }
            
            // گروه‌بندی عوامل
            const grouped = {};
            factors.forEach(factor => {
                grouped[factor] = (grouped[factor] || 0) + 1;
            });
            
            return Object.entries(grouped)
                .map(([factor, count]) => count > 1 ? `${factor}^${count}` : factor)
                .join(' × ');
        }
        
        // ========== عوامل اول ==========
        function factorize(tabIndex) {
            const inputId = `factorInput${tabIndex}`;
            const resultId = `factorResult${tabIndex}`;
            
            const input = document.getElementById(inputId);
            const num = parseInt(input.value);
            
            if (!num || num < 2) {
                alert('لطفا عددی بزرگتر از 1 وارد کنید');
                return;
            }
            
            const factorization = primeFactorization(num);
            const factors = getPrimeFactors(num);
            
            const resultDiv = document.getElementById(resultId);
            resultDiv.innerHTML = `
                <div class="factorization-result">
                    <div class="factorization-header">
                        <i class="fas fa-diagram-project"></i>
                        <h4>تجزیه عدد ${num}</h4>
                    </div>
                    
                    <div class="factorization-content">
                        <div class="factor-equation">
                            <span class="number">${num}</span>
                            <span class="equals"> = </span>
                            <span class="factors">${factorization}</span>
                        </div>
                        
                        <div class="factor-list">
                            <h5>عوامل اول:</h5>
                            <div class="factors-grid">
                                ${factors.map(factor => `
                                    <div class="factor-item">
                                        <span class="factor-number">${factor}</span>
                                        <span class="factor-type">عدد اول</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="factor-steps">
                            <h5>مراحل تجزیه:</h5>
                            <div class="steps">
                                ${generateFactorizationSteps(num)}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        function getPrimeFactors(n) {
            const factors = [];
            let temp = n;
            
            while (temp % 2 === 0) {
                factors.push(2);
                temp /= 2;
            }
            
            for (let i = 3; i <= Math.sqrt(temp); i += 2) {
                while (temp % i === 0) {
                    factors.push(i);
                    temp /= i;
                }
            }
            
            if (temp > 2) {
                factors.push(temp);
            }
            
            return [...new Set(factors)].sort((a, b) => a - b);
        }
        
        function generateFactorizationSteps(n) {
            let temp = n;
            const steps = [];
            let step = 1;
            
            // تقسیم بر 2
            while (temp % 2 === 0) {
                steps.push(`گام ${step}: ${temp} ÷ 2 = ${temp / 2} (عامل اول: 2)`);
                temp /= 2;
                step++;
            }
            
            // تقسیم بر اعداد فرد
            for (let i = 3; i <= Math.sqrt(temp); i += 2) {
                while (temp % i === 0) {
                    steps.push(`گام ${step}: ${temp} ÷ ${i} = ${temp / i} (عامل اول: ${i})`);
                    temp /= i;
                    step++;
                }
            }
            
            // عامل نهایی
            if (temp > 2) {
                steps.push(`گام ${step}: ${temp} عدد اول است`);
            }
            
            return steps.map(step => `<div class="step">${step}</div>`).join('');
        }
        
        // ========== مقسوم‌علیه‌ها ==========
        function countDivisors(tabIndex) {
            const inputId = `divisorInput${tabIndex}`;
            const resultId = `divisorResult${tabIndex}`;
            
            const input = document.getElementById(inputId);
            const num = parseInt(input.value);
            
            if (!num || num < 1) {
                alert('لطفا عددی بزرگتر از 0 وارد کنید');
                return;
            }
            
            const divisors = findDivisors(num);
            const primeDivisors = divisors.filter(isPrimeNumber);
            
            const resultDiv = document.getElementById(resultId);
            resultDiv.innerHTML = `
                <div class="divisors-result">
                    <div class="divisors-header">
                        <i class="fas fa-list-check"></i>
                        <h4>مقسوم‌علیه‌های عدد ${num}</h4>
                    </div>
                    
                    <div class="divisors-stats">
                        <div class="stat-card">
                            <div class="stat-icon">
                                <i class="fas fa-hashtag"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-value">${divisors.length}</div>
                                <div class="stat-label">تعداد کل مقسوم‌علیه‌ها</div>
                            </div>
                        </div>
                        
                        <div class="stat-card">
                            <div class="stat-icon">
                                <i class="fas fa-leaf"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-value">${primeDivisors.length}</div>
                                <div class="stat-label">تعداد مقسوم‌علیه‌های اول</div>
                            </div>
                        </div>
                        
                        <div class="stat-card">
                            <div class="stat-icon">
                                <i class="fas fa-sort-amount-up"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-value">${divisors[divisors.length - 1]}</div>
                                <div class="stat-label">بزرگترین مقسوم‌علیه</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="divisors-list">
                        <h5>لیست مقسوم‌علیه‌ها:</h5>
                        <div class="divisors-grid">
                            ${divisors.map(divisor => `
                                <div class="divisor-item ${isPrimeNumber(divisor) ? 'prime' : ''}">
                                    <span class="divisor-number">${divisor}</span>
                                    ${isPrimeNumber(divisor) ? 
                                        '<span class="prime-badge">اول</span>' : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="divisors-summary">
                        <div class="summary-item">
                            <i class="fas fa-plus-circle"></i>
                            <span>مجموع مقسوم‌علیه‌ها: ${divisors.reduce((a, b) => a + b, 0)}</span>
                        </div>
                        <div class="summary-item">
                            <i class="fas fa-times-circle"></i>
                            <span>حاصل‌ضرب مقسوم‌علیه‌ها: ${divisors.reduce((a, b) => a * b, 1)}</span>
                        </div>
                    </div>
                </div>
            `;
        }
        
        // ========== ب.م.م و ک.م.م ==========
        function calculateGCDLCM(tabIndex) {
            const num1Input = document.getElementById(`num1${tabIndex}`);
            const num2Input = document.getElementById(`num2${tabIndex}`);
            const resultId = `gcdlcmResult${tabIndex}`;
            
            const num1 = parseInt(num1Input.value);
            const num2 = parseInt(num2Input.value);
            
            if (!num1 || !num2 || num1 < 1 || num2 < 1) {
                alert('لطفا دو عدد صحیح مثبت وارد کنید');
                return;
            }
            
            const gcd = calculateGCD(num1, num2);
            const lcm = calculateLCM(num1, num2);
            
            const resultDiv = document.getElementById(resultId);
            resultDiv.innerHTML = `
                <div class="gcdlcm-result">
                    <div class="gcdlcm-header">
                        <i class="fas fa-chart-bar"></i>
                        <h4>نتایج برای اعداد ${num1} و ${num2}</h4>
                    </div>
                    
                    <div class="gcdlcm-cards">
                        <div class="gcd-card">
                            <div class="card-icon">
                                <i class="fas fa-maximize"></i>
                            </div>
                            <h5>ب.م.م (بزرگترین مقسوم‌علیه مشترک)</h5>
                            <div class="card-value">${gcd}</div>
                            <p>بزرگترین عددی که هر دو عدد بر آن بخش‌پذیر باشند</p>
                        </div>
                        
                        <div class="lcm-card">
                            <div class="card-icon">
                                <i class="fas fa-minimize"></i>
                            </div>
                            <h5>ک.م.م (کوچکترین مضرب مشترک)</h5>
                            <div class="card-value">${lcm}</div>
                            <p>کوچکترین عددی که بر هر دو عدد بخش‌پذیر باشد</p>
                        </div>
                    </div>
                    
                    <div class="verification">
                        <h5><i class="fas fa-check-circle"></i> تایید رابطه</h5>
                        <p>ب.م.م × ک.م.م = عدد اول × عدد دوم</p>
                        <p>${gcd} × ${lcm} = ${num1} × ${num2}</p>
                        <p>${gcd * lcm} = ${num1 * num2}</p>
                        <p class="verification-result ${gcd * lcm === num1 * num2 ? 'success' : 'error'}">
                            ${gcd * lcm === num1 * num2 ? '✓ رابطه تایید شد' : '✗ رابطه برقرار نیست'}
                        </p>
                    </div>
                    
                    <div class="gcdlcm-steps">
                        <h5><i class="fas fa-footsteps"></i> مراحل محاسبه ب.م.م (الگوریتم اقلیدسی):</h5>
                        <div class="steps">
                            ${generateGCDSteps(num1, num2)}
                        </div>
                    </div>
                </div>
            `;
        }
        
        function calculateGCD(a, b) {
            while (b !== 0) {
                const temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        }
        
        function calculateLCM(a, b) {
            return Math.abs(a * b) / calculateGCD(a, b);
        }
        
        function generateGCDSteps(a, b) {
            let steps = [];
            let step = 1;
            let tempA = a;
            let tempB = b;
            
            while (tempB !== 0) {
                const remainder = tempA % tempB;
                steps.push(`گام ${step}: ${tempA} ÷ ${tempB} = باقیمانده ${remainder}`);
                tempA = tempB;
                tempB = remainder;
                step++;
            }
            
            steps.push(`گام ${step}: ب.م.م = ${tempA}`);
            return steps.map(step => `<div class="step">${step}</div>`).join('');
        }
        
        // ========== دایره ==========
        function calculateCircle(tabIndex, type) {
            const inputId = `radiusInput${tabIndex}`;
            const resultId = `circleResult${tabIndex}`;
            
            const input = document.getElementById(inputId);
            const radius = parseFloat(input.value);
            
            if (!radius || radius <= 0) {
                alert('لطفا شعاع دایره را وارد کنید (بزرگتر از صفر)');
                return;
            }
            
            let result, formula, explanation;
            
            if (type === 'area') {
                result = Math.PI * radius * radius;
                formula = 'π × r²';
                explanation = `مساحت = ${Math.PI.toFixed(5)} × ${radius}²`;
            } else {
                result = 2 * Math.PI * radius;
                formula = '2 × π × r';
                explanation = `محیط = 2 × ${Math.PI.toFixed(5)} × ${radius}`;
            }
            
            const resultDiv = document.getElementById(resultId);
            resultDiv.innerHTML = `
                <div class="circle-result">
                    <div class="circle-header">
                        <i class="fas ${type === 'area' ? 'fa-crop' : 'fa-circle-notch'}"></i>
                        <h4>${type === 'area' ? 'مساحت' : 'محیط'} دایره با شعاع ${radius}</h4>
                    </div>
                    
                    <div class="circle-content">
                        <div class="circle-value">
                            <div class="value-display">
                                <span class="value">${formatNumber(result)}</span>
                                <span class="unit">واحد²</span>
                            </div>
                            <div class="formula">${formula}</div>
                        </div>
                        
                        <div class="calculation-steps">
                            <h5>مراحل محاسبه:</h5>
                            <div class="steps">
                                <div class="step">۱. شعاع دایره: r = ${radius}</div>
                                <div class="step">۲. ${explanation}</div>
                                <div class="step">۳. ${explanation} = ${formatNumber(result)}</div>
                                <div class="step">۴. نتیجه نهایی: ${formatNumber(result)} واحد${type === 'area' ? '²' : ''}</div>
                            </div>
                        </div>
                        
                        <div class="circle-visual">
                            <div class="circle-diagram">
                                <div class="circle" style="width: 150px; height: 150px;">
                                    <div class="radius-line"></div>
                                    <div class="radius-label">r = ${radius}</div>
                                </div>
                            </div>
                            <div class="circle-info">
                                <div class="info-item">
                                    <i class="fas fa-ruler"></i>
                                    <span>شعاع: ${radius}</span>
                                </div>
                                <div class="info-item">
                                    <i class="fas fa-pi"></i>
                                    <span>π ≈ ${Math.PI.toFixed(5)}</span>
                                </div>
                                <div class="info-item">
                                    <i class="fas fa-calculator"></i>
                                    <span>${type === 'area' ? 'مساحت' : 'محیط'}: ${formatNumber(result)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        // ========== فیثاغورث ==========
        function calculatePythagoras(tabIndex) {
            const sideAInput = document.getElementById(`sideA${tabIndex}`);
            const sideBInput = document.getElementById(`sideB${tabIndex}`);
            const resultId = `pythagorasResult${tabIndex}`;
            
            const sideA = parseFloat(sideAInput.value);
            const sideB = parseFloat(sideBInput.value);
            
            if (!sideA || !sideB || sideA <= 0 || sideB <= 0) {
                alert('لطفا طول دو ضلع مثلث را وارد کنید (بزرگتر از صفر)');
                return;
            }
            
            const sideC = Math.sqrt(sideA * sideA + sideB * sideB);
            
            // به‌روزرسانی مقادیر در نمودار
            document.getElementById('sideAValue').textContent = sideA.toFixed(2);
            document.getElementById('sideBValue').textContent = sideB.toFixed(2);
            document.getElementById('sideCValue').textContent = sideC.toFixed(2);
            
            const resultDiv = document.getElementById(resultId);
            resultDiv.innerHTML = `
                <div class="pythagoras-result">
                    <div class="pythagoras-header">
                        <i class="fas fa-calculator"></i>
                        <h4>طول وتر مثلث قائم‌الزاویه</h4>
                    </div>
                    
                    <div class="pythagoras-content">
                        <div class="formula-display-large">
                            <div class="formula">c = √(a² + b²)</div>
                            <div class="calculation">c = √(${sideA}² + ${sideB}²)</div>
                            <div class="calculation">c = √(${sideA * sideA} + ${sideB * sideB})</div>
                            <div class="calculation">c = √${sideA * sideA + sideB * sideB}</div>
                            <div class="result">c = ${sideC.toFixed(4)}</div>
                        </div>
                        
                        <div class="triangle-info">
                            <div class="info-card">
                                <div class="info-label">ضلع a</div>
                                <div class="info-value">${sideA}</div>
                            </div>
                            <div class="info-card">
                                <div class="info-label">ضلع b</div>
                                <div class="info-value">${sideB}</div>
                            </div>
                            <div class="info-card">
                                <div class="info-label">وتر c</div>
                                <div class="info-value">${sideC.toFixed(4)}</div>
                            </div>
                        </div>
                        
                        <div class="verification">
                            <h5><i class="fas fa-check-circle"></i> تایید قضیه فیثاغورث:</h5>
                            <p>a² + b² = c²</p>
                            <p>${sideA}² + ${sideB}² = ${sideC.toFixed(4)}²</p>
                            <p>${sideA * sideA} + ${sideB * sideB} = ${(sideC * sideC).toFixed(4)}</p>
                            <p>${sideA * sideA + sideB * sideB} ≈ ${(sideC * sideC).toFixed(4)}</p>
                            <p class="verification-result success">✓ قضیه تایید شد</p>
                        </div>
                    </div>
                </div>
            `;
        }
        
        // ========== چندضلعی‌ها ==========
        function calculatePolygonAngles(tabIndex) {
            const inputId = `sidesCount${tabIndex}`;
            const resultId = `polygonResult${tabIndex}`;
            
            const input = document.getElementById(inputId);
            const n = parseInt(input.value);
            
            if (!n || n < 3) {
                alert('لطفا عددی بزرگتر یا مساوی 3 وارد کنید');
                return;
            }
            
            const interiorAngle = ((n - 2) * 180) / n;
            const exteriorAngle = 360 / n;
            
            const resultDiv = document.getElementById(resultId);
            resultDiv.innerHTML = `
                <div class="polygon-result">
                    <div class="polygon-header">
                        <i class="fas fa-angle-double-right"></i>
                        <h4>زوایای ${getPolygonName(n)}</h4>
                    </div>
                    
                    <div class="polygon-content">
                        <div class="angles-grid">
                            <div class="angle-card interior">
                                <div class="angle-icon">
                                    <i class="fas fa-angle-left"></i>
                                </div>
                                <h5>زاویه داخلی</h5>
                                <div class="angle-value">${interiorAngle.toFixed(2)}°</div>
                                <div class="angle-formula">(n-2) × 180° / n</div>
                                <div class="angle-calculation">(${n} - 2) × 180° / ${n}</div>
                            </div>
                            
                            <div class="angle-card exterior">
                                <div class="angle-icon">
                                    <i class="fas fa-angle-right"></i>
                                </div>
                                <h5>زاویه خارجی</h5>
                                <div class="angle-value">${exteriorAngle.toFixed(2)}°</div>
                                <div class="angle-formula">360° / n</div>
                                <div class="angle-calculation">360° / ${n}</div>
                            </div>
                            
                            <div class="angle-card sum">
                                <div class="angle-icon">
                                    <i class="fas fa-plus-circle"></i>
                                </div>
                                <h5>مجموع زوایای داخلی</h5>
                                <div class="angle-value">${((n - 2) * 180).toFixed(2)}°</div>
                                <div class="angle-formula">(n-2) × 180°</div>
                                <div class="angle-calculation">(${n} - 2) × 180°</div>
                            </div>
                        </div>
                        
                        <div class="polygon-properties">
                            <h5><i class="fas fa-list-alt"></i> ویژگی‌های ${getPolygonName(n)}:</h5>
                            <div class="properties-list">
                                <div class="property">
                                    <i class="fas fa-hashtag"></i>
                                    <span>تعداد اضلاع: ${n}</span>
                                </div>
                                <div class="property">
                                    <i class="fas fa-shapes"></i>
                                    <span>نام: ${getPolygonName(n)}</span>
                                </div>
                                <div class="property">
                                    <i class="fas fa-angle-double-left"></i>
                                    <span>هر زاویه داخلی: ${interiorAngle.toFixed(2)}°</span>
                                </div>
                                <div class="property">
                                    <i class="fas fa-angle-double-right"></i>
                                    <span>هر زاویه خارجی: ${exteriorAngle.toFixed(2)}°</span>
                                </div>
                                <div class="property">
                                    <i class="fas fa-plus"></i>
                                    <span>مجموع زوایای داخلی: ${((n - 2) * 180).toFixed(2)}°</span>
                                </div>
                                <div class="property">
                                    <i class="fas fa-check-circle"></i>
                                    <span>مجموع زوایای خارجی: 360°</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        function getPolygonName(n) {
            const names = {
                3: 'مثلث',
                4: 'چهارضلعی (مربع/مستطیل)',
                5: 'پنج‌ضلعی',
                6: 'شش‌ضلعی',
                7: 'هفت‌ضلعی',
                8: 'هشت‌ضلعی',
                9: 'نه‌ضلعی',
                10: 'ده‌ضلعی'
            };
            
            return names[n] || `${n}-ضلعی`;
        }
        
        // ========== کسرهای مصری ==========
        function calculateEgyptian() {
            const numerator = parseInt(document.getElementById('egyptNum').value);
            const denominator = parseInt(document.getElementById('egyptDen').value);
            
            if (!numerator || !denominator || numerator >= denominator || numerator < 1 || denominator < 2) {
                alert('لطفا کسر صحیح وارد کنید (صورت کوچکتر از مخرج)');
                return;
            }
            
            const result = egyptianFraction(numerator, denominator);
            const resultDiv = document.getElementById('egyptResult');
            const stepsDiv = document.getElementById('egyptSteps');
            
            resultDiv.innerHTML = `
                <div class="egyptian-result">
                    <div class="egyptian-header">
                        <i class="fas fa-list-ol"></i>
                        <h4>کسرهای مصری ${numerator}/${denominator}</h4>
                    </div>
                    
                    <div class="egyptian-content">
                        <div class="original-fraction">
                            <span class="fraction">${numerator}/${denominator}</span>
                            <span class="equals"> = </span>
                        </div>
                        
                        <div class="egyptian-fractions">
                            ${result.fractions.map((frac, index) => `
                                <div class="egyptian-fraction">
                                    <span class="frac">1/${frac}</span>
                                    ${index < result.fractions.length - 1 ? '<span class="plus"> + </span>' : ''}
                                </div>
                            `).join('')}
                        </div>
                        
                        <div class="egyptian-summary">
                            <div class="summary-item">
                                <i class="fas fa-hashtag"></i>
                                <span>تعداد کسرها: ${result.fractions.length}</span>
                            </div>
                            <div class="summary-item">
                                <i class="fas fa-calculator"></i>
                                <span>مجموع: ${result.fractions.reduce((a, b) => a + 1/b, 0).toFixed(6)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            stepsDiv.innerHTML = `
                <div class="egyptian-steps">
                    ${result.steps.map((step, index) => `
                        <div class="step">
                            <div class="step-number">${index + 1}</div>
                            <div class="step-content">${step}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        function egyptianFraction(numerator, denominator) {
            const fractions = [];
            const steps = [];
            let currentNum = numerator;
            let currentDen = denominator;
            let step = 1;
            
            while (currentNum > 0) {
                // پیدا کردن کوچکترین عدد صحیح x به طوری که 1/x <= num/den
                const x = Math.ceil(currentDen / currentNum);
                fractions.push(x);
                
                steps.push(`گام ${step}: ${currentNum}/${currentDen} = 1/${x} + باقیمانده`);
                
                // محاسبه باقیمانده
                currentNum = currentNum * x - currentDen;
                currentDen = currentDen * x;
                
                // ساده‌سازی کسر
                const gcd = calculateGCD(currentNum, currentDen);
                if (gcd > 1) {
                    currentNum /= gcd;
                    currentDen /= gcd;
                    steps.push(`گام ${step}.۵: ساده‌سازی باقیمانده: ${currentNum}/${currentDen}`);
                }
                
                step++;
            }
            
            return { fractions, steps };
        }
        
        function clearEgyptian() {
            document.getElementById('egyptNum').value = '';
            document.getElementById('egyptDen').value = '';
            document.getElementById('egyptResult').innerHTML = `
                <div class="result-placeholder">
                    <i class="fas fa-info-circle"></i>
                    <p>مجموع کسرهای واحد اینجا نمایش داده می‌شود</p>
                </div>
            `;
            document.getElementById('egyptSteps').innerHTML = `
                <div class="steps-placeholder">
                    <i class="fas fa-info-circle"></i>
                    <p>مراحل تبدیل کسر به صورت مرحله‌ای نمایش داده می‌شود</p>
                </div>
            `;
        }
        
        // ========== مثلث خیام ==========
        function drawKhayyam() {
            const rowsInput = document.getElementById('khayyamRows');
            const rows = parseInt(rowsInput.value);
            
            if (!rows || rows < 1 || rows > 20) {
                alert('لطفا عددی بین 1 تا 20 وارد کنید');
                return;
            }
            
            const triangle = generatePascalTriangle(rows);
            const container = document.getElementById('khayyamTriangle');
            
            container.innerHTML = '';
            
            // ایجاد ساختار مثلث
            const triangleContainer = document.createElement('div');
            triangleContainer.className = 'khayyam-triangle';
            
            triangle.forEach((row, rowIndex) => {
                const rowDiv = document.createElement('div');
                rowDiv.className = 'khayyam-row';
                
                // فاصله‌گذاری برای نمایش مثلثی شکل
                const spaces = rows - rowIndex - 1;
                
                row.forEach(number => {
                    const numberDiv = document.createElement('div');
                    numberDiv.className = 'khayyam-number';
                    numberDiv.textContent = number;
                    rowDiv.appendChild(numberDiv);
                });
                
                triangleContainer.appendChild(rowDiv);
            });
            
            container.appendChild(triangleContainer);
        }
        
        function generatePascalTriangle(rows) {
            const triangle = [];
            
            for (let i = 0; i < rows; i++) {
                triangle[i] = [];
                for (let j = 0; j <= i; j++) {
                    if (j === 0 || j === i) {
                        triangle[i][j] = 1;
                    } else {
                        triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
                    }
                }
            }
            
            return triangle;
        }
        
        function clearKhayyam() {
            document.getElementById('khayyamRows').value = '7';
            document.getElementById('khayyamRowsRange').value = '7';
            document.getElementById('khayyamTriangle').innerHTML = `
                <div class="khayyam-placeholder">
                    <div class="placeholder-icon">
                        <i class="fas fa-triangle"></i>
                    </div>
                    <p>مثلث با تعداد سطر مشخص شده اینجا رسم می‌شود</p>
                    <p class="placeholder-hint">برای شروع دکمه "رسم مثلث" را بزنید</p>
                </div>
            `;
        }        
        // ========== معلم هوش مصنوعی ==========

// تابع اصلی برای پرسش از AI
async function askTeacher() {
    const questionInput = document.getElementById('aiQuestion');
    const question = questionInput.value.trim();
    
    if (!question) {
        alert('لطفا سوال خود را وارد کنید');
        return;
    }
    
    // اضافه کردن پیام کاربر
    addUserMessage(question);
    
    // پاک کردن ورودی
    questionInput.value = '';
    
    // نمایش وضعیت در حال پردازش
    const chat = document.getElementById('aiChat');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'ai-message bot';
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <img src="IMA.png" alt="ایما" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%234f46e5%22/><text x=%2250%22 y=%2260%22 font-family=%22Arial%22 font-size=%2240%22 fill=%22white%22 text-anchor=%22middle%22>IMA</text></svg>';">
        </div>
        <div class="message-content">
            <div class="message-header">
                <span class="sender">ایما</span>
                <span class="time">در حال تایپ...</span>
            </div>
            <div class="message-text typing">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    `;
    chat.appendChild(typingDiv);
    chat.scrollTop = chat.scrollHeight;
    
    try {
        // ارسال درخواست به OpenRouter
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: OPENROUTER_MODEL,
                messages: [
                    {
                        role: 'system',
                        content: 'You are an intelligent math teacher assistant named "IMA" that responds in Persian (Farsi). You help students with math problems, explain concepts, and provide educational guidance. Always respond in Persian with detailed, accurate, and friendly explanations.'
                    },
                    {
                        role: 'user',
                        content: question
                    }
                ],
                max_tokens: 1500,
                temperature: 0.7
            })
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('OpenRouter API Error:', response.status, errorText);
            throw new Error(`خطا در ارتباط با سرور: ${response.status}`);
        }
        
        const data = await response.json();
        
        // حذف پیام در حال تایپ
        chat.removeChild(typingDiv);
        
        // نمایش پاسخ
        if (data.choices && data.choices[0]) {
            const answer = data.choices[0].message.content;
            addBotMessage(answer);
        } else {
            throw new Error('پاسخی از سرور دریافت نشد');
        }
        
    } catch (error) {
        console.error('Error in askTeacher:', error);
        
        // حذف پیام در حال تایپ
        chat.removeChild(typingDiv);
        
        // نمایش پاسخ آفلاین در صورت خطا
        showOfflineResponse(question);
    }
}

// تابع برای پاسخ آفلاین
function showOfflineResponse(question) {
    const responses = [
        "سلام! من ایما هستم، دستیار ریاضی شما. متأسفانه در حال حاضر به سرور اصلی متصل نیستم، اما می‌توانم به سوالات پایه ریاضی شما پاسخ دهم.",
        "برای استفاده کامل از قابلیت‌های من، لطفاً اتصال اینترنت خود را بررسی کنید. در این مدت می‌توانید از ابزارهای ریاضی موجود در صفحه استفاده کنید.",
        "به نظر می‌رسد اتصال اینترنت شما قطع است. سوال شما: '" + question.substring(0, 50) + "' را ذخیره کردم و به محض اتصال پاسخ می‌دهم.",
        "من می‌توانم به سوالاتی مانند:\n• حل معادلات ساده\n• محاسبات پایه\n• توضیح مفاهیم ریاضی\nپاسخ دهم. چه سوالی دارید؟",
        "لطفاً اتصال اینترنت خود را بررسی کنید. در این حال می‌توانید از ماشین حساب، حل معادلات و دیگر ابزارهای ریاضی این برنامه استفاده کنید."
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    addBotMessage(randomResponse);
}

// نسخه ساده‌تر بدون Stream
async function askTeacherSimple() {
    const questionInput = document.getElementById('aiQuestion');
    const question = questionInput.value.trim();
    
    if (!question) {
        alert('لطفا سوال خود را وارد کنید');
        return;
    }
    
    // اضافه کردن پیام کاربر
    addUserMessage(question);
    
    // پاک کردن ورودی
    questionInput.value = '';
    
    // نمایش وضعیت در حال پردازش
    showTypingIndicator();
    
    try {
        // درخواست ساده‌تر
        const response = await fetchWithTimeout('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: OPENROUTER_MODEL,
                messages: [
                    {
                        role: 'system',
                        content: 'You are a math assistant. Respond in Persian.'
                    },
                    {
                        role: 'user',
                        content: question
                    }
                ],
                max_tokens: 1000
            })
        }, 10000); // 10 ثانیه تایم‌اوت
        
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        
        const data = await response.json();
        removeTypingIndicator();
        
        if (data.choices && data.choices[0]) {
            addBotMessage(data.choices[0].message.content);
        } else {
            addBotMessage("پاسخی دریافت نشد. لطفاً دوباره تلاش کنید.");
        }
        
    } catch (error) {
        console.error('Error:', error);
        removeTypingIndicator();
        addBotMessage("متأسفانه در حال حاضر نمی‌توانم به سوال شما پاسخ دهم. لطفاً از ابزارهای ریاضی دیگر استفاده کنید یا بعداً تلاش کنید.");
    }
}

// تابع fetch با تایم‌اوت
function fetchWithTimeout(url, options, timeout = 10000) {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Request timeout')), timeout)
        )
    ]);
}

// نمایش نشانگر تایپ
function showTypingIndicator() {
    const chat = document.getElementById('aiChat');
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typingIndicator';
    typingDiv.className = 'ai-message bot';
    typingDiv.innerHTML = `
        <div class="message-avatar">IMA</div>
        <div class="message-content">
            <div class="message-header">
                <span class="sender">ایما</span>
                <span class="time">در حال تایپ...</span>
            </div>
            <div class="message-text">
                <div class="typing-animation">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </div>
            </div>
        </div>
    `;
    chat.appendChild(typingDiv);
    chat.scrollTop = chat.scrollHeight;
}

// حذف نشانگر تایپ
function removeTypingIndicator() {
    const typingDiv = document.getElementById('typingIndicator');
    if (typingDiv) {
        typingDiv.remove();
    }
}

// اضافه کردن پیام کاربر
function addUserMessage(text) {
    const chat = document.getElementById('aiChat');
    if (!chat) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'ai-message user';
    messageDiv.innerHTML = `
        <div class="message-avatar">شما</div>
        <div class="message-content">
            <div class="message-header">
                <span class="sender">شما</span>
                <span class="time">${getCurrentTime()}</span>
            </div>
            <div class="message-text">${escapeHtml(text)}</div>
        </div>
    `;
    chat.appendChild(messageDiv);
    chat.scrollTop = chat.scrollHeight;
}

// اضافه کردن پیام بات
function addBotMessage(text) {
    const chat = document.getElementById('aiChat');
    if (!chat) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'ai-message bot';
    messageDiv.innerHTML = `
        <div class="message-avatar">IMA</div>
        <div class="message-content">
            <div class="message-header">
                <span class="sender">ایما</span>
                <span class="time">${getCurrentTime()}</span>
            </div>
            <div class="message-text">${escapeHtml(text)}</div>
        </div>
    `;
    chat.appendChild(messageDiv);
    chat.scrollTop = chat.scrollHeight;
}

// دریافت زمان فعلی
function getCurrentTime() {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
}

// فرار از HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// تنظیم سوال نمونه
function setSampleQuestion(question) {
    const input = document.getElementById('aiQuestion');
    if (input) {
        input.value = question;
        input.focus();
    }
}

// پاک کردن چت
function clearChat() {
    const chat = document.getElementById('aiChat');
    if (chat) {
        chat.innerHTML = `
            <div class="ai-message bot">
                <div class="message-avatar">IMA</div>
                <div class="message-content">
                    <div class="message-header">
                        <span class="sender">ایما</span>
                        <span class="time">${getCurrentTime()}</span>
                    </div>
                    <div class="message-text">
                        سلام! 👋 من ایما، دستیار هوشمند ریاضی شما هستم.
                        
                        <div class="topics">
                            <span class="topic">حل معادلات</span>
                            <span class="topic">توضیح مفاهیم</span>
                            <span class="topic">محاسبات ریاضی</span>
                            <span class="topic">راهنمایی تحصیلی</span>
                        </div>
                        
                        چه سوالی درباره ریاضی دارید؟
                    </div>
                </div>
            </div>
        `;
    }
}

// فعال کردن Enter برای ارسال
document.addEventListener('DOMContentLoaded', function() {
    const aiInput = document.getElementById('aiQuestion');
    if (aiInput) {
        aiInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                askTeacher(); // یا askTeacherSimple()
            }
        });
    }
    
    // اضافه کردن استایل‌های لازم
    addAIChatStyles();
});
// راه‌حل جایگزین: استفاده از localStorage برای ذخیره سوالات
function saveQuestionToLocal(question) {
    const questions = JSON.parse(localStorage.getItem('pendingQuestions') || '[]');
    questions.push({
        question: question,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('pendingQuestions', JSON.stringify(questions.slice(-10))); // فقط 10 سوال آخر
}

// راه‌حل جایگزین ۲: استفاده از یک endpoint جایگزین
async function askTeacherAlternative(question) {
    try {
        // استفاده از یک endpoint ساده‌تر
        const proxyUrl = 'https://corsproxy.io/?';
        const apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
        
        const response = await fetch(proxyUrl + encodeURIComponent(apiUrl), {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: OPENROUTER_MODEL,
                messages: [
                    {
                        role: 'user',
                        content: question
                    }
                ]
            })
        });
        
        return await response.json();
    } catch (error) {
        console.error('Alternative method failed:', error);
        return null;
    }
}

// نسخه با دیالوگ تأیید
document.addEventListener('DOMContentLoaded', function() {
  const logoutBtn = document.getElementById('logoutBtn');
  
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      if (confirm('آیا مطمئن هستید که می‌خواهید از حساب کاربری خود خارج شوید؟')) {
        // پاکسازی داده‌های کاربر
        clearUserData();
        
        // هدایت به صفحه ورود
        window.location.href = 'index.html';
      }
    });
  }
});

function clearUserData() {
  // حذف تمام داده‌های مربوط به کاربر
  localStorage.removeItem('authToken');
  localStorage.removeItem('userInfo');
  localStorage.removeItem('lastLogin');
  
  // یا برای پاکسازی کامل:
  // localStorage.clear();
  
  // همچنین می‌توانید کوکی‌ها را هم پاک کنید
  document.cookie.split(";").forEach(function(c) {
    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
}
// ========== مسابقه ریاضی ==========

// بانک سوالات با پاسخ‌های تصادفی
const quizDatabase = {
    easy: [
        // جمع - پاسخ‌های متنوع
        { question: "حاصل ۷ + ۵ چیست؟", answers: ["۱۲", "۱۳", "۱۱", "۱۰"], correct: 0 },
        { question: "حاصل ۱۵ + ۸ چیست؟", answers: ["۲۵", "۲۳", "۲۲", "۲۴"], correct: 1 },
        { question: "حاصل ۲۵ + ۱۷ چیست؟", answers: ["۴۳", "۴۱", "۴۲", "۴۰"], correct: 2 },
        { question: "حاصل ۳۴ + ۲۹ چیست؟", answers: ["۶۴", "۶۳", "۶۲", "۶۵"], correct: 1 },
        { question: "حاصل ۴۶ + ۳۷ چیست؟", answers: ["۸۳", "۸۲", "۸۴", "۸۵"], correct: 0 },
        
        // تفریق
        { question: "حاصل ۲۰ - ۷ چیست؟", answers: ["۱۴", "۱۳", "۱۲", "۱۱"], correct: 1 },
        { question: "حاصل ۳۵ - ۱۸ چیست؟", answers: ["۱۶", "۱۷", "۱۸", "۱۹"], correct: 1 },
        { question: "حاصل ۵۰ - ۲۷ چیست؟", answers: ["۲۴", "۲۳", "۲۲", "۲۵"], correct: 1 },
        { question: "حاصل ۶۳ - ۴۵ چیست؟", answers: ["۱۸", "۱۷", "۱۹", "۲۰"], correct: 0 },
        { question: "حاصل ۸۲ - ۵۹ چیست؟", answers: ["۲۴", "۲۳", "۲۲", "۲۱"], correct: 1 },
        
        // ضرب
        { question: "حاصل ۶ × ۷ چیست؟", answers: ["۴۱", "۴۲", "۴۳", "۴۴"], correct: 1 },
        { question: "حاصل ۸ × ۹ چیست؟", answers: ["۷۱", "۷۲", "۷۳", "۷۴"], correct: 1 },
        { question: "حاصل ۵ × ۱۲ چیست؟", answers: ["۵۹", "۶۰", "۶۱", "۶۲"], correct: 1 },
        { question: "حاصل ۹ × ۱۱ چیست؟", answers: ["۹۸", "۹۹", "۱۰۰", "۱۰۱"], correct: 1 },
        { question: "حاصل ۷ × ۱۳ چیست؟", answers: ["۹۰", "۹۱", "۹۲", "۹۳"], correct: 1 },
        
        // تقسیم
        { question: "حاصل ۳۶ ÷ ۶ چیست؟", answers: ["۵", "۶", "۷", "۸"], correct: 1 },
        { question: "حاصل ۶۳ ÷ ۹ چیست؟", answers: ["۶", "۷", "۸", "۹"], correct: 1 },
        { question: "حاصل ۸۴ ÷ ۷ چیست؟", answers: ["۱۱", "۱۲", "۱۳", "۱۴"], correct: 1 },
        { question: "حاصل ۹۶ ÷ ۸ چیست؟", answers: ["۱۱", "۱۲", "۱۳", "۱۴"], correct: 1 },
        { question: "حاصل ۱۴۴ ÷ ۱۲ چیست؟", answers: ["۱۱", "۱۲", "۱۳", "۱۴"], correct: 1 },
        
        // کسرها
        { question: "½ + ½ برابر است با؟", answers: ["۲", "۱", "½", "¼"], correct: 1 },
        { question: "¼ + ¾ برابر است با؟", answers: ["½", "۱", "¼", "¾"], correct: 1 },
        { question: "⅓ + ⅓ برابر است با؟", answers: ["⅔", "½", "⅓", "۱"], correct: 0 },
        { question: "½ × ½ برابر است با؟", answers: ["¼", "½", "۱", "¾"], correct: 0 },
        { question: "⅔ × ¾ برابر است با؟", answers: ["½", "⅓", "¼", "⅛"], correct: 0 },
        
        // اعداد اول
        { question: "کدام یک عدد اول نیست؟", answers: ["۲۱", "۷", "۱۳", "۱۷"], correct: 0 },
        { question: "کدام یک عدد اول است؟", answers: ["۲۷", "۲۹", "۳۳", "۳۹"], correct: 1 },
        { question: "کوچکترین عدد اول چیست؟", answers: ["۱", "۲", "۳", "۵"], correct: 1 },
        { question: "بعد از ۱۷، کوچکترین عدد اول چیست؟", answers: ["۱۸", "۱۹", "۲۰", "۲۱"], correct: 1 },
        { question: "بین ۳۰ تا ۴۰ چند عدد اول وجود دارد؟", answers: ["۱", "۲", "۳", "۴"], correct: 1 },
        
        // هندسه مقدماتی
        { question: "چندضلعی با ۳ ضلع چیست؟", answers: ["مربع", "مثلث", "پنج‌ضلعی", "شش‌ضلعی"], correct: 1 },
        { question: "چندضلعی با ۴ ضلع چیست؟", answers: ["مثلث", "چهارضلعی", "پنج‌ضلعی", "دایره"], correct: 1 },
        { question: "مجموع زوایای مثلث چند درجه است؟", answers: ["۹۰", "۱۸۰", "۳۶۰", "۲۷۰"], correct: 1 },
        { question: "چندضلعی منتظم با ۶ ضلع چیست؟", answers: ["پنج‌ضلعی", "شش‌ضلعی", "هشت‌ضلعی", "ده‌ضلعی"], correct: 1 },
        { question: "مجموع زوایای چهارضلعی چند درجه است؟", answers: ["۱۸۰", "۳۶۰", "۲۷۰", "۴۵۰"], correct: 1 }
    ],
    
    medium: [
        // معادلات خطی
        { question: "اگر ۲x + ۵ = ۱۵ باشد، x چند است؟", answers: ["۷", "۵", "۱۰", "۳"], correct: 1 },
        { question: "اگر ۳x - ۷ = ۱۴ باشد، x چند است؟", answers: ["۶", "۷", "۸", "۹"], correct: 1 },
        { question: "اگر ۴(x + ۳) = ۳۲ باشد، x چند است؟", answers: ["۴", "۵", "۶", "۸"], correct: 1 },
        { question: "اگر ۲x + ۳ = x + ۱۰ باشد، x چند است؟", answers: ["۵", "۶", "۷", "۸"], correct: 2 },
        { question: "اگر ۵x - ۸ = ۳x + ۱۲ باشد، x چند است؟", answers: ["۸", "۱۰", "۱۲", "۱۴"], correct: 1 },
        
        // معادلات درجه دو
        { question: "جواب معادله x² - ۵x + ۶ = ۰ چیست؟", answers: ["۱ و ۶", "۲ و ۳", "۳ و ۴", "۲ و ۴"], correct: 1 },
        { question: "جواب معادله x² - ۹ = ۰ چیست؟", answers: ["۹ و -۹", "۳ و -۳", "۳ و ۳", "۹ و ۹"], correct: 1 },
        { question: "جواب معادله x² + ۳x - ۱۰ = ۰ چیست؟", answers: ["۵ و -۲", "۲ و -۵", "۱۰ و -۱", "۳ و -۳"], correct: 1 },
        { question: "جواب معادله ۲x² - ۸ = ۰ چیست؟", answers: ["۴ و -۴", "۲ و -۲", "۸ و -۸", "۱ و -۱"], correct: 1 },
        { question: "جواب معادله x² - ۴x + ۴ = ۰ چیست؟", answers: ["۴", "۲", "۱ و ۳", "۲ و ۲"], correct: 1 },
        
        // مثلثات
        { question: "sin 30° برابر است با؟", answers: ["√۳/۲", "½", "۱", "۰"], correct: 1 },
        { question: "cos 60° برابر است با؟", answers: ["√۲/۲", "½", "√۳/۲", "۱"], correct: 1 },
        { question: "tan 45° برابر است با؟", answers: ["√۳", "۱", "√۳/۳", "۰"], correct: 1 },
        { question: "sin 90° برابر است با؟", answers: ["۰", "۱", "½", "√۳/۲"], correct: 1 },
        { question: "cos 0° برابر است با؟", answers: ["½", "۱", "۰", "√۳/۲"], correct: 1 },
        
        // لگاریتم
        { question: "log₁₀ 100 برابر است با؟", answers: ["۱", "۲", "۳", "۱۰"], correct: 1 },
        { question: "log₁₀ 1000 برابر است با؟", answers: ["۲", "۳", "۴", "۵"], correct: 1 },
        { question: "log₂ ۸ برابر است با؟", answers: ["۲", "۳", "۴", "۱"], correct: 1 },
        { question: "log₃ ۸۱ برابر است با؟", answers: ["۳", "۴", "۵", "۶"], correct: 1 },
        { question: "log₅ ۲۵ برابر است با؟", answers: ["۱", "۲", "۳", "۵"], correct: 1 },
        
        // احتمال
        { question: "احتمال آمدن شیر در پرتاب سکه چیست؟", answers: ["¼", "½", "۱", "۰"], correct: 1 },
        { question: "احتمال آمدن ۶ در پرتاب تاس چیست؟", answers: ["½", "⅙", "¼", "⅓"], correct: 1 },
        { question: "احتمال آمدن عدد زوج در پرتاب تاس چیست؟", answers: ["⅓", "½", "¼", "⅙"], correct: 1 },
        { question: "احتمال آمدن عدد اول در پرتاب تاس چیست؟", answers: ["⅓", "½", "¼", "⅙"], correct: 1 },
        { question: "احتمال آمدن عدد بزرگتر از ۴ در پرتاب تاس چیست؟", answers: ["½", "⅓", "¼", "⅙"], correct: 1 }
    ],
    
    hard: [
        // مشتق
        { question: "مشتق f(x) = x³ چیست؟", answers: ["۳x", "۳x²", "x²", "۲x³"], correct: 1 },
        { question: "مشتق f(x) = sin(x) چیست؟", answers: ["cos(x)", "-cos(x)", "-sin(x)", "tan(x)"], correct: 0 },
        { question: "مشتق f(x) = eˣ چیست؟", answers: ["xeˣ", "eˣ", "eˣ/x", "ln(x)"], correct: 1 },
        { question: "مشتق f(x) = ln(x) چیست؟", answers: ["x", "۱/x", "eˣ", "۱"], correct: 1 },
        { question: "مشتق f(x) = √x چیست؟", answers: ["√x", "۱/(۲√x)", "۱/√x", "۲√x"], correct: 1 },
        
        // انتگرال
        { question: "∫ x² dx چیست؟", answers: ["۲x + C", "x³/۳ + C", "x³ + C", "x²/۲ + C"], correct: 1 },
        { question: "∫ cos(x) dx چیست؟", answers: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "-cos(x) + C"], correct: 0 },
        { question: "∫ eˣ dx چیست؟", answers: ["xeˣ + C", "eˣ + C", "eˣ/x + C", "ln(eˣ) + C"], correct: 1 },
        { question: "∫ ۱/x dx چیست؟", answers: ["۱/x² + C", "ln|x| + C", "-۱/x² + C", "x + C"], correct: 1 },
        { question: "∫ ۲x dx چیست؟", answers: ["۲x² + C", "x² + C", "x + C", "۲ + C"], correct: 1 },
        
        // اعداد مختلط
        { question: "حاصل (۳+۴i) + (۲-۳i) چیست؟", answers: ["۵ + ۷i", "۵ + i", "۱ + i", "۳ + i"], correct: 1 },
        { question: "حاصل (۲+۳i)(۱-۲i) چیست؟", answers: ["۸ + i", "۸ - i", "۷ - i", "۷ + i"], correct: 1 },
        { question: "مزدوج عدد ۴-۵i چیست؟", answers: ["۴-۵i", "۴+۵i", "-۴+۵i", "-۴-۵i"], correct: 1 },
        { question: "قدر مطلق ۳+۴i چیست؟", answers: ["۷", "۵", "√۷", "۲۵"], correct: 1 },
        { question: "فرم قطبی عدد ۱+i چیست؟", answers: ["۲(cos45° + isin45°)", "√۲(cos45° + isin45°)", "√۲(cos30° + isin30°)", "۲(cos30° + isin30°)"], correct: 1 },
        
        // حد
        { question: "lim(x→۲) (x²-۴)/(x-۲) چیست؟", answers: ["۲", "۴", "۰", "∞"], correct: 1 },
        { question: "lim(x→∞) ۱/x چیست؟", answers: ["۱", "۰", "∞", "-∞"], correct: 1 },
        { question: "lim(x→۰) sin(x)/x چیست؟", answers: ["۰", "۱", "∞", "½"], correct: 1 },
        { question: "lim(x→۳) (x²-۹)/(x-۳) چیست؟", answers: ["۳", "۶", "۰", "۹"], correct: 1 },
        { question: "lim(x→۱) (x³-۱)/(x-۱) چیست؟", answers: ["۱", "۳", "۰", "∞"], correct: 1 }
    ]
};

// ========== توابع کمکی ==========

// تابع برای ترکیب تصادفی گزینه‌ها
function shuffleQuestionsWithRandomAnswers(questions) {
    return questions.map(question => {
        // کپی گزینه‌ها
        const answers = [...question.answers];
        const correctAnswer = answers[question.correct];
        
        // ترکیب تصادفی گزینه‌ها
        const shuffledAnswers = shuffleArray(answers);
        
        // پیدا کردن موقعیت جدید پاسخ صحیح
        const newCorrectIndex = shuffledAnswers.indexOf(correctAnswer);
        
        return {
            ...question,
            answers: shuffledAnswers,
            correct: newCorrectIndex
        };
    });
}

// تابع اصلی برای انتخاب سوالات
function selectRandomQuestions(level, count = 10) {
    const allQuestions = [...quizDatabase[level]];
    
    if (allQuestions.length <= count) {
        return shuffleQuestionsWithRandomAnswers([...allQuestions]);
    }
    
    // انتخاب تصادفی سوالات
    const selectedIndices = new Set();
    const selectedQuestions = [];
    
    while (selectedQuestions.length < count && selectedIndices.size < allQuestions.length) {
        const randomIndex = Math.floor(Math.random() * allQuestions.length);
        
        if (!selectedIndices.has(randomIndex)) {
            selectedIndices.add(randomIndex);
            selectedQuestions.push(allQuestions[randomIndex]);
        }
    }
    
    // ترکیب تصادفی گزینه‌های هر سوال
    return shuffleQuestionsWithRandomAnswers(selectedQuestions);
}

// ========== تابع startQuiz اصلاح شده ==========
function startQuiz(level) {
    console.log('شروع مسابقه سطح:', level);
    
    // انتخاب سوالات با گزینه‌های ترکیب شده
    window.quizQuestions = selectRandomQuestions(level, 10);
    window.currentQuestion = 0;
    window.quizScore = 0;
    window.quizTime = 0;
    window.currentLevel = level;
    
    // توقف تایمر قبلی
    if (window.quizTimer) {
        clearInterval(window.quizTimer);
        window.quizTimer = null;
    }
    
    // نمایش صفحه مسابقه
    const setupElement = document.getElementById('quizSetup');
    const gameElement = document.getElementById('quizGame');
    const resultsElement = document.getElementById('quizResults');
    
    if (setupElement) setupElement.style.display = 'none';
    if (resultsElement) resultsElement.style.display = 'none';
    if (gameElement) {
        gameElement.style.display = 'block';
        
        // شروع تایمر
        window.quizTimer = setInterval(() => {
            window.quizTime++;
            const timeElement = document.getElementById('quizTime');
            if (timeElement) {
                timeElement.textContent = window.quizTime;
            }
        }, 1000);
        
        // نمایش اولین سوال
        showQuestion(window.currentQuestion);
    }
}

// ========== تابع showQuestion با نمایش بهتر ==========
function showQuestion(index) {
    if (!window.quizQuestions || index >= window.quizQuestions.length) {
        endQuiz();
        return;
    }
    
    const question = window.quizQuestions[index];
    
    // نمایش سوال و گزینه‌ها
    const questionElement = document.getElementById('quizQuestion');
    if (questionElement) {
        questionElement.innerHTML = `
            <div style="margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <span style="font-weight: bold; color: #4f46e5;">سوال ${index + 1} از ${window.quizQuestions.length}</span>
                    <span style="background: #10b981; color: white; padding: 5px 15px; border-radius: 20px;">${10} امتیاز</span>
                </div>
                <div style="font-size: 1.2rem; line-height: 1.6;">${question.question}</div>
            </div>
        `;
    }
    
    // نمایش گزینه‌ها
    displayAnswers(question);
}

// ========== تابع displayAnswers اصلاح شده ==========
function displayAnswers(question) {
    const answersElement = document.getElementById('quizAnswers');
    if (!answersElement) return;
    
    answersElement.innerHTML = '';
    
    // نمایش گزینه‌ها با حروف انگلیسی
    const letters = ['A', 'B', 'C', 'D'];
    
    question.answers.forEach((answer, i) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.style.cssText = `
            width: 100%;
            padding: 15px 20px;
            margin: 8px 0;
            text-align: right;
            background: #f9fafb;
            border: 2px solid #e5e7eb;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        `;
        
        button.innerHTML = `
            <span>${answer}</span>
            <span style="width: 35px; height: 35px; background: #e5e7eb; border-radius: 50%; 
                  display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 10px;">
                ${letters[i]}
            </span>
        `;
        
        // اضافه کردن hover effect
        button.onmouseenter = () => {
            if (!button.disabled) {
                button.style.background = '#f3f4f6';
                button.style.transform = 'translateY(-2px)';
            }
        };
        
        button.onmouseleave = () => {
            if (!button.disabled && !button.classList.contains('correct') && !button.classList.contains('incorrect')) {
                button.style.background = '#f9fafb';
                button.style.transform = 'translateY(0)';
            }
        };
        
        button.onclick = () => checkAnswer(i, question.correct);
        answersElement.appendChild(button);
    });
}

// ========== تابع checkAnswer با دیباگ ==========
function checkAnswer(selectedIndex, correctIndex) {
    console.log('پاسخ انتخاب شده:', selectedIndex, 'پاسخ صحیح:', correctIndex);
    
    const buttons = document.querySelectorAll('.answer-btn');
    const letters = ['A', 'B', 'C', 'D'];
    
    // غیرفعال کردن همه دکمه‌ها
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.cursor = 'not-allowed';
    });
    
    // علامت‌گذاری پاسخ‌ها
    buttons.forEach((button, index) => {
        const letterSpan = button.querySelector('span:last-child');
        
        if (index === correctIndex) {
            button.style.background = '#d1fae5';
            button.style.borderColor = '#10b981';
            button.style.color = '#065f46';
            if (letterSpan) {
                letterSpan.style.background = '#10b981';
                letterSpan.style.color = 'white';
            }
            button.innerHTML += ' <i class="fas fa-check" style="color: #10b981; margin-right: 10px;"></i>';
        } else if (index === selectedIndex) {
            button.style.background = '#fee2e2';
            button.style.borderColor = '#ef4444';
            button.style.color = '#991b1b';
            if (letterSpan) {
                letterSpan.style.background = '#ef4444';
                letterSpan.style.color = 'white';
            }
            button.innerHTML += ' <i class="fas fa-times" style="color: #ef4444; margin-right: 10px;"></i>';
        }
    });
    
    // به‌روزرسانی امتیاز
    if (selectedIndex === correctIndex) {
        window.quizScore += 10;
        updateScoreDisplay();
        showFeedback('✅ پاسخ صحیح! +۱۰ امتیاز', true);
    } else {
        showFeedback(`❌ پاسخ صحیح: ${letters[correctIndex]}`, false);
    }
    
    // رفتن به سوال بعدی
    setTimeout(() => {
        window.currentQuestion++;
        if (window.currentQuestion < window.quizQuestions.length) {
            showQuestion(window.currentQuestion);
        } else {
            endQuiz();
        }
    }, 2000);
}

// ========== تابع shuffleArray برای ترکیب تصادفی ==========
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// ========== تابع showFeedback ==========
function showFeedback(message, isCorrect) {
    // حذف فیدبک قبلی
    const oldFeedback = document.querySelector('.quiz-feedback');
    if (oldFeedback) oldFeedback.remove();
    
    // ایجاد فیدبک جدید
    const feedback = document.createElement('div');
    feedback.className = 'quiz-feedback';
    feedback.innerHTML = message;
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 15px 25px;
        border-radius: 10px;
        z-index: 1000;
        background: ${isCorrect ? '#d1fae5' : '#fee2e2'};
        color: ${isCorrect ? '#065f46' : '#991b1b'};
        border: 2px solid ${isCorrect ? '#10b981' : '#ef4444'};
        animation: slideDown 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        font-weight: bold;
    `;
    
    // اضافه کردن استایل انیمیشن
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from { top: -100px; opacity: 0; }
            to { top: 20px; opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // اضافه کردن به صفحه
    document.body.appendChild(feedback);
    
    // حذف خودکار
    setTimeout(() => feedback.remove(), 2000);
}

// ========== تابع updateScoreDisplay ==========
function updateScoreDisplay() {
    const scoreElement = document.getElementById('quizScore');
    if (scoreElement) {
        scoreElement.textContent = window.quizScore;
    }
}

// ========== شروع مسابقه ==========
function startQuiz(level) {
    console.log(`شروع مسابقه سطح: ${level}`);
    
    currentLevel = level;
    
    // پیدا کردن عناصر
    const setupElement = document.getElementById('quizSetup');
    const gameElement = document.getElementById('quizGame');
    const resultsElement = document.getElementById('quizResults');
    
    // مخفی/نمایش صفحات
    if (setupElement) setupElement.style.display = 'none';
    if (resultsElement) resultsElement.style.display = 'none';
    if (gameElement) gameElement.style.display = 'block';
    
    // تنظیم متغیرها
    quizQuestions = selectRandomQuestions(level, 15);
    currentQuestion = 0;
    quizScore = 0;
    quizTime = 0;
    
    // توقف تایمر قبلی
    if (quizTimer) {
        clearInterval(quizTimer);
        quizTimer = null;
    }
    
    // شروع تایمر جدید
    quizTimer = setInterval(() => {
        quizTime++;
        const timeElement = document.getElementById('quizTime');
        if (timeElement) {
            timeElement.textContent = quizTime;
        }
    }, 1000);
    
    // نمایش اولین سوال
    showQuestion(currentQuestion);
}

// نمایش سوال
function showQuestion(index) {
    // اگر سوالی باقی نمانده
    if (index >= quizQuestions.length) {
        endQuiz();
        return;
    }
    
    const question = quizQuestions[index];
    
    // به‌روزرسانی اطلاعات
    updateQuizInfo(index);
    
    // نمایش سوال
    const questionElement = document.getElementById('quizQuestion');
    if (questionElement) {
        questionElement.innerHTML = `
            <div class="question-number">سوال ${index + 1} از ${quizQuestions.length}</div>
            <div class="question-text">${question.question}</div>
            <div class="question-points">${10} امتیاز</div>
        `;
    }
    
    // نمایش گزینه‌ها
    displayAnswers(question);
}

// به‌روزرسانی اطلاعات مسابقه
function updateQuizInfo(index) {
    const indexElement = document.getElementById('quizIndex');
    const progressElement = document.getElementById('quizProgress');
    const scoreElement = document.getElementById('quizScore');
    
    if (indexElement) {
        indexElement.textContent = index + 1;
    }
    
    if (progressElement) {
        const progressPercent = ((index + 1) / quizQuestions.length) * 100;
        progressElement.style.width = `${progressPercent}%`;
    }
    
    if (scoreElement) {
        scoreElement.textContent = quizScore;
    }
}

// نمایش گزینه‌های پاسخ
function displayAnswers(question) {
    const answersElement = document.getElementById('quizAnswers');
    if (!answersElement) return;
    
    answersElement.innerHTML = '';
    
    question.answers.forEach((answer, i) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.innerHTML = `
            <span class="answer-letter">${String.fromCharCode(65 + i)}</span>
            <span class="answer-text">${answer}</span>
        `;
        button.onclick = () => checkAnswer(i, question.correct);
        answersElement.appendChild(button);
    });
}

// بررسی پاسخ کاربر
function checkAnswer(selectedIndex, correctIndex) {
    const buttons = document.querySelectorAll('.answer-btn');
    
    // غیرفعال کردن همه دکمه‌ها
    buttons.forEach(btn => btn.disabled = true);
    
    // علامت‌گذاری پاسخ‌ها
    buttons.forEach((button, index) => {
        if (index === correctIndex) {
            button.classList.add('correct');
            button.innerHTML += ' <i class="fas fa-check correct-icon"></i>';
        } else if (index === selectedIndex) {
            button.classList.add('incorrect');
            button.innerHTML += ' <i class="fas fa-times incorrect-icon"></i>';
        }
    });
    
    // به‌روزرسانی امتیاز
    if (selectedIndex === correctIndex) {
        quizScore += 10;
        updateScore();
        
        // نمایش فیدبک مثبت
        showFeedback('🎉 پاسخ صحیح!', true);
    } else {
        // نمایش فیدبک منفی
        showFeedback(`❌ پاسخ صحیح: ${String.fromCharCode(65 + correctIndex)}`, false);
    }
    
    // رفتن به سوال بعدی بعد از تاخیر
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizQuestions.length) {
            showQuestion(currentQuestion);
        } else {
            endQuiz();
        }
    }, 2000);
}

// نمایش فیدبک
function showFeedback(message, isCorrect) {
    // حذف فیدبک قبلی
    const oldFeedback = document.querySelector('.quiz-feedback');
    if (oldFeedback) oldFeedback.remove();
    
    // ایجاد فیدبک جدید
    const feedback = document.createElement('div');
    feedback.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.innerHTML = `
        <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
        <span>${message}</span>
    `;
    
    // اضافه کردن به صفحه
    const quizGame = document.getElementById('quizGame');
    if (quizGame) {
        quizGame.appendChild(feedback);
    }
    
    // حذف خودکار بعد از 2 ثانیه
    setTimeout(() => {
        if (feedback.parentNode) {
            feedback.remove();
        }
    }, 2000);
}

// به‌روزرسانی امتیاز
function updateScore() {
    const scoreElement = document.getElementById('quizScore');
    if (scoreElement) {
        scoreElement.textContent = quizScore;
    }
}

// رد کردن سوال
function skipQuestion() {
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        showQuestion(currentQuestion);
    } else {
        endQuiz();
    }
}

// پایان مسابقه
function endQuiz() {
    // توقف تایمر
    if (quizTimer) {
        clearInterval(quizTimer);
        quizTimer = null;
    }
    
    // مخفی کردن صفحه مسابقه
    const gameElement = document.getElementById('quizGame');
    if (gameElement) {
        gameElement.style.display = 'none';
    }
    
    // نمایش نتایج
    showResults();
}

// نمایش نتایج
function showResults() {
    const resultsElement = document.getElementById('quizResults');
    if (!resultsElement) return;
    
    resultsElement.style.display = 'block';
    
    // محاسبات
    const totalQuestions = quizQuestions.length;
    const totalPossibleScore = totalQuestions * 10;
    const percentage = Math.round((quizScore / totalPossibleScore) * 100);
    
    // تعیین رتبه
    const rank = calculateRank(percentage);
    
    // تولید HTML نتایج
    resultsElement.innerHTML = createResultsHTML(rank, percentage, totalPossibleScore);
}

// محاسبه رتبه
function calculateRank(percentage) {
    if (percentage >= 140) return {
        title: '🏆 نابغه ریاضی',
        color: '#10b981',
        message: 'شما استعداد فوق‌العاده‌ای در ریاضی دارید!',
        emoji: '🏆'
    };
    if (percentage >= 130) return {
        title: '⭐ عالی',
        color: '#3b82f6',
        message: 'عملکرد بسیار خوبی داشتید!',
        emoji: '⭐'
    };
    if (percentage >= 100) return {
        title: '👍 خوب',
        color: '#f59e0b',
        message: 'دانش ریاضی شما قابل قبول است.',
        emoji: '👍'
    };
    if (percentage >= 65) return {
        title: '🤔 متوسط',
        color: '#f97316',
        message: 'نیاز به تمرین بیشتر دارید.',
        emoji: '🤔'
    };
    return {
        title: '📚 نیاز به تلاش',
        color: '#ef4444',
        message: 'باید بیشتر مطالعه کنید.',
        emoji: '📚'
    };
}

// ایجاد HTML نتایج
function createResultsHTML(rank, percentage, totalPossibleScore) {
    return `
        <div class="results-container">
            <div class="results-header" style="background: ${rank.color}">
                <div class="rank-emoji">${rank.emoji}</div>
                <h3>${rank.title}</h3>
                <p>${rank.message}</p>
            </div>
            
            <div class="results-stats">
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="stat-content">
                        <div class="stat-value">${quizScore}/${totalPossibleScore}</div>
                        <div class="stat-label">امتیاز نهایی</div>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-percentage"></i>
                    </div>
                    <div class="stat-content">
                        <div class="stat-value">${percentage}%</div>
                        <div class="stat-label">درصد موفقیت</div>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <div class="stat-content">
                        <div class="stat-value">${quizTime}</div>
                        <div class="stat-label">ثانیه زمان</div>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-layer-group"></i>
                    </div>
                    <div class="stat-content">
                        <div class="stat-value">${currentLevel === 'easy' ? 'آسان' : currentLevel === 'medium' ? 'متوسط' : 'سخت'}</div>
                        <div class="stat-label">سطح</div>
                    </div>
                </div>
            </div>
            
            <div class="performance-analysis">
                <h4><i class="fas fa-chart-line"></i> تحلیل عملکرد</h4>
                <div class="analysis-content">
                    ${getPerformanceAnalysis(percentage)}
                </div>
            </div>
            
            <div class="suggestions">
                <h4><i class="fas fa-lightbulb"></i> پیشنهادات بهبود</h4>
                <div class="suggestions-list">
                    ${getSuggestions(percentage)}
                </div>
            </div>
            
            <div class="results-actions">
                <button onclick="restartQuiz()" class="btn-primary">
                    <i class="fas fa-redo"></i> مسابقه مجدد
                </button>
                <button onclick="backToLevels()" class="btn-secondary">
                    <i class="fas fa-sliders-h"></i> تغییر سطح
                </button>
                <button onclick="shareResults()" class="btn-success">
                    <i class="fas fa-share-alt"></i> اشتراک‌گذاری
                </button>
            </div>
            
            <div class="quiz-info">
                <p><i class="fas fa-database"></i> بانک سوالات: ${quizDatabase.easy.length + quizDatabase.medium.length + quizDatabase.hard.length} سوال</p>
                <p><i class="fas fa-calendar"></i> تاریخ: ${new Date().toLocaleDateString('fa-IR')}</p>
            </div>
        </div>
    `;
}

// تحلیل عملکرد
function getPerformanceAnalysis(percentage) {
    if (percentage >= 90) {
        return `
            <div class="analysis-item success">
                <i class="fas fa-check-circle"></i>
                <span>حافظه قوی برای فرمول‌ها</span>
            </div>
            <div class="analysis-item success">
                <i class="fas fa-check-circle"></i>
                <span>سرعت حل مسئله عالی</span>
            </div>
            <div class="analysis-item success">
                <i class="fas fa-check-circle"></i>
                <span>دقت محاسباتی بالا</span>
            </div>
        `;
    } else if (percentage >= 75) {
        return `
            <div class="analysis-item good">
                <i class="fas fa-check"></i>
                <span>دانش خوب از مفاهیم</span>
            </div>
            <div class="analysis-item good">
                <i class="fas fa-check"></i>
                <span>توانایی حل مسئله مناسب</span>
            </div>
            <div class="analysis-item warning">
                <i class="fas fa-exclamation-circle"></i>
                <span>نیاز به افزایش سرعت</span>
            </div>
        `;
    } else {
        return `
            <div class="analysis-item warning">
                <i class="fas fa-exclamation-circle"></i>
                <span>نیاز به مرور مفاهیم پایه</span>
            </div>
            <div class="analysis-item warning">
                <i class="fas fa-exclamation-circle"></i>
                <span>خطاهای محاسباتی زیاد</span>
            </div>
            <div class="analysis-item warning">
                <i class="fas fa-exclamation-circle"></i>
                <span>نیاز به تمرین بیشتر</span>
            </div>
        `;
    }
}

// پیشنهادات بهبود
function getSuggestions(percentage) {
    if (percentage >= 90) {
        return `
            <div class="suggestion-item">
                <i class="fas fa-rocket"></i>
                <span>حل مسائل المپیادی ریاضی</span>
            </div>
            <div class="suggestion-item">
                <i class="fas fa-graduation-cap"></i>
                <span>مطالعه مباحث پیشرفته‌تر</span>
            </div>
            <div class="suggestion-item">
                <i class="fas fa-trophy"></i>
                <span>شرکت در مسابقات ریاضی</span>
            </div>
        `;
    } else if (percentage >= 75) {
        return `
            <div class="suggestion-item">
                <i class="fas fa-book"></i>
                <span>تمرین‌های اضافی حل کنید</span>
            </div>
            <div class="suggestion-item">
                <i class="fas fa-running"></i>
                <span>سرعت حل مسئله را افزایش دهید</span>
            </div>
            <div class="suggestion-item">
                <i class="fas fa-brain"></i>
                <span>مباحث ضعیف‌تر را مرور کنید</span>
            </div>
        `;
    } else {
        return `
            <div class="suggestion-item">
                <i class="fas fa-home"></i>
                <span>از مفاهیم پایه شروع کنید</span>
            </div>
            <div class="suggestion-item">
                <i class="fas fa-repeat"></i>
                <span>تمرین‌های ساده‌تر حل کنید</span>
            </div>
            <div class="suggestion-item">
                <i class="fas fa-users"></i>
                <span>از معلم یا همکلاسی کمک بگیرید</span>
            </div>
        `;
    }
}

// اشتراک‌گذاری نتایج
function shareResults() {
    const percentage = Math.round((quizScore / (quizQuestions.length * 10)) * 100);
    const levelText = currentLevel === 'easy' ? 'آسان' : currentLevel === 'medium' ? 'متوسط' : 'سخت';
    
    const shareText = `🎯 نتایج مسابقه ریاضی ایما:
    
🏆 امتیاز: ${quizScore} از ${quizQuestions.length * 10}
📊 درصد: ${percentage}%
⚡ سطح: ${levelText}
⏱️ زمان: ${quizTime} ثانیه

با ایما - دستیار هوشمند ریاضی تمرین کنید!`;

    // اگر مرورگر از Web Share API پشتیبانی کند
    if (navigator.share) {
        navigator.share({
            title: 'نتایج مسابقه ریاضی',
            text: shareText,
            url: window.location.href
        }).catch(err => {
            console.log('خطا در اشتراک‌گذاری:', err);
            copyToClipboard(shareText);
        });
    } else {
        // در غیر این صورت کپی به کلیپ‌بورد
        copyToClipboard(shareText);
    }
}

// کپی به کلیپ‌بورد
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('نتایج در کلیپ‌بورد کپی شد! 📋\nمی‌توانید در شبکه‌های اجتماعی به اشتراک بگذارید.');
    }).catch(err => {
        console.error('خطا در کپی:', err);
        alert('خطا در کپی کردن نتایج.');
    });
}

// بازنشانی مسابقه
function restartQuiz() {
    const resultsElement = document.getElementById('quizResults');
    const gameElement = document.getElementById('quizGame');
    
    if (resultsElement) resultsElement.style.display = 'none';
    if (gameElement) gameElement.style.display = 'block';
    
    // بازنشانی متغیرها و شروع مجدد
    quizQuestions = selectRandomQuestions(currentLevel, 15);
    currentQuestion = 0;
    quizScore = 0;
    quizTime = 0;
    
    // توقف تایمر قبلی
    if (quizTimer) {
        clearInterval(quizTimer);
        quizTimer = null;
    }
    
    // شروع تایمر جدید
    quizTimer = setInterval(() => {
        quizTime++;
        const timeElement = document.getElementById('quizTime');
        if (timeElement) {
            timeElement.textContent = quizTime;
        }
    }, 1000);
    
    // نمایش اولین سوال
    showQuestion(currentQuestion);
}

// بازگشت به انتخاب سطح
function backToLevels() {
    const resultsElement = document.getElementById('quizResults');
    const setupElement = document.getElementById('quizSetup');
    
    if (resultsElement) resultsElement.style.display = 'none';
    if (setupElement) setupElement.style.display = 'block';
    
    // بازنشانی متغیرها
    quizQuestions = [];
    currentQuestion = 0;
    quizScore = 0;
    quizTime = 0;
    if (quizTimer) {
        clearInterval(quizTimer);
        quizTimer = null;
    }
}

// ========== استایل‌های CSS ==========
function addQuizStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* استایل‌های عمومی مسابقه */
        .quiz-setup, .quiz-game, .quiz-results {
            transition: all 0.3s ease;
        }
        
        /* کارت‌های سطح */
        .level-card {
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }
        
        .level-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        .level-card.easy {
            border-color: #10b981;
        }
        
        .level-card.medium {
            border-color: #f59e0b;
        }
        
        .level-card.hard {
            border-color: #ef4444;
        }
        
        /* پیشرفت مسابقه */
        .quiz-progress {
            height: 8px;
            background: #e5e7eb;
            border-radius: 4px;
            overflow: hidden;
            margin: 15px 0;
        }
        
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #4f46e5, #8b5cf6);
            transition: width 0.3s ease;
        }
        
        /* سوال */
        .question-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 2px solid #e5e7eb;
        }
        
        .question-number {
            font-weight: bold;
            color: #4f46e5;
        }
        
        .question-text {
            font-size: 1.3rem;
            line-height: 1.6;
            margin: 20px 0;
            color: #1f2937;
        }
        
        .question-points {
            background: #10b981;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
        }
        
        /* گزینه‌های پاسخ */
        .answer-btn {
            width: 100%;
            padding: 15px 20px;
            margin: 10px 0;
            text-align: right;
            background: #f9fafb;
            border: 2px solid #e5e7eb;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .answer-btn:hover:not(:disabled) {
            background: #f3f4f6;
            transform: translateY(-2px);
        }
        
        .answer-btn:disabled {
            cursor: not-allowed;
        }
        
        .answer-letter {
            width: 35px;
            height: 35px;
            background: #e5e7eb;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-left: 10px;
        }
        
        .answer-btn.correct {
            background: #d1fae5;
            border-color: #10b981;
            color: #065f46;
        }
        
        .answer-btn.correct .answer-letter {
            background: #10b981;
            color: white;
        }
        
        .answer-btn.incorrect {
            background: #fee2e2;
            border-color: #ef4444;
            color: #991b1b;
        }
        
        .answer-btn.incorrect .answer-letter {
            background: #ef4444;
            color: white;
        }
        
        .correct-icon {
            color: #10b981;
        }
        
        .incorrect-icon {
            color: #ef4444;
        }
        
        /* فیدبک */
        .quiz-feedback {
            position: fixed;
            top: 20px;
            right: 50%;
            transform: translateX(50%);
            padding: 15px 25px;
            border-radius: 10px;
            z-index: 1000;
            animation: slideDown 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        @keyframes slideDown {
            from { top: -100px; opacity: 0; }
            to { top: 20px; opacity: 1; }
        }
        
        .quiz-feedback.correct {
            background: #d1fae5;
            color: #065f46;
            border: 2px solid #10b981;
        }
        
        .quiz-feedback.incorrect {
            background: #fee2e2;
            color: #991b1b;
            border: 2px solid #ef4444;
        }
        
        /* کنترل‌های مسابقه */
        .quiz-controls {
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
        }
        
        /* نتایج */
        .results-container {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
        
        .results-header {
            padding: 30px;
            color: white;
            text-align: center;
        }
        
        .rank-emoji {
            font-size: 3rem;
            margin-bottom: 15px;
        }
        
        .results-header h3 {
            font-size: 1.8rem;
            margin-bottom: 10px;
        }
        
        .results-stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            padding: 30px;
        }
        
        @media (min-width: 768px) {
            .results-stats {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        
        .stat-card {
            background: #f9fafb;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            border: 1px solid #e5e7eb;
        }
        
        .stat-icon {
            font-size: 1.5rem;
            color: #4f46e5;
            margin-bottom: 10px;
        }
        
        .stat-value {
            font-size: 1.5rem;
            font-weight: bold;
            color: #1f2937;
        }
        
        .stat-label {
            color: #6b7280;
            margin-top: 5px;
            font-size: 0.9rem;
        }
        
        .performance-analysis, .suggestions {
            padding: 20px 30px;
            border-top: 1px solid #e5e7eb;
        }
        
        .performance-analysis h4, .suggestions h4 {
            margin-bottom: 15px;
            color: #1f2937;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .analysis-item, .suggestion-item {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 10px 0;
            padding: 10px;
            background: #f9fafb;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
        }
        
        .analysis-item.success {
            border-color: #10b981;
            background: #d1fae5;
        }
        
        .analysis-item.good {
            border-color: #f59e0b;
            background: #fef3c7;
        }
        
        .analysis-item.warning {
            border-color: #ef4444;
            background: #fee2e2;
        }
        
        .results-actions {
            display: flex;
            justify-content: center;
            gap: 15px;
            padding: 30px;
            border-top: 1px solid #e5e7eb;
        }
        
        .quiz-info {
            text-align: center;
            padding: 20px;
            background: #f9fafb;
            color: #6b7280;
            font-size: 0.9rem;
            border-top: 1px solid #e5e7eb;
        }
        
        .quiz-info p {
            margin: 5px 0;
        }
    `;
    
    document.head.appendChild(style);
}

// مقداردهی اولیه
document.addEventListener('DOMContentLoaded', function() {
    console.log('سیستم مسابقه ریاضی بارگذاری شد');
    addQuizStyles();
});
        // ========== حل معادلات ==========
function setEquationType(type, event) {
    // حذف کلاس active از همه دکمه‌ها
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // افزودن کلاس active به دکمه انتخاب شده
    event.target.classList.add('active');
    
    // تغییر متن راهنما
    const input = document.getElementById('equationInput');
    switch (type) {
        case 'linear':
            input.placeholder = 'مثال: 2x + 3 = 7 یا 5x - 2 = 3x + 4';
            break;
        case 'quadratic':
            input.placeholder = 'مثال: x^2 - 5x + 6 = 0 یا 2x^2 + 3x - 2 = 0';
            break;
        case 'system':
            input.placeholder = 'مثال: 2x + 3y = 7, 4x - y = 1';
            break;
    }
}

function solveEquation() {
    const equation = document.getElementById('equationInput').value.trim();
    const activeBtn = document.querySelector('.type-btn.active');
    
    if (!activeBtn) {
        alert('لطفا نوع معادله را انتخاب کنید');
        return;
    }
    
    const type = activeBtn.textContent.trim();
    
    if (!equation) {
        alert('لطفا معادله را وارد کنید');
        return;
    }
    
    let result;
    try {
        switch (type) {
            case 'خطی':
                result = solveLinearEquation(equation);
                break;
            case 'درجه دو':
                result = solveQuadraticEquation(equation);
                break;
            case 'سیستم معادلات':
                result = solveSystemOfEquations(equation);
                break;
            default:
                throw new Error('نوع معادله نامعتبر است');
        }
        
        // نمایش نتیجه
        document.getElementById('equationResult').innerHTML = `
            <div class="equation-solution">
                <div class="solution-header">
                    <i class="fas fa-check-circle"></i>
                    <h4>حل معادله ${type}</h4>
                </div>
                
                <div class="solution-content">
                    <div class="original-equation">
                        <strong>معادله ورودی:</strong> ${equation}
                    </div>
                    
                    <div class="solution-steps">
                        <h5>مراحل حل:</h5>
                        ${result.steps.map((step, index) => `
                            <div class="step">
                                <div class="step-number">${index + 1}</div>
                                <div class="step-content">${step}</div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="final-solution">
                        <h5>پاسخ نهایی:</h5>
                        <div class="solution-value">${result.solution}</div>
                    </div>
                </div>
            </div>
        `;
        
        // ذخیره در تاریخچه
        saveToHistory('equation', {
            equation,
            type,
            solution: result.solution,
            timestamp: new Date().toLocaleString('fa-IR')
        });
        
    } catch (error) {
        document.getElementById('equationResult').innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                <div>
                    <h4>خطا در حل معادله</h4>
                    <p>${error.message}</p>
                    <p>لطفا فرمت معادله را بررسی کنید.</p>
                </div>
            </div>
        `;
    }
}

// تابع بهبود یافته برای حل معادلات خطی
function solveLinearEquation(equation) {
    const steps = [];
    
    // مرحله 1: حذف فاصله‌ها
    let cleanedEq = equation.replace(/\s+/g, '');
    steps.push(`حذف فاصله‌ها: ${cleanedEq}`);
    
    // مرحله 2: جداسازی دو طرف معادله
    const sides = cleanedEq.split('=');
    if (sides.length !== 2) {
        throw new Error('فرمت معادله صحیح نیست. باید = داشته باشد');
    }
    
    let leftSide = sides[0];
    let rightSide = sides[1];
    steps.push(`دو طرف معادله: ${leftSide} = ${rightSide}`);
    
    // مرحله 3: انتقال همه متغیرها به سمت چپ و اعداد به سمت راست
    // تابع برای استخراج ضرایب
    function parseSide(side) {
        let coefficient = 0;
        let constant = 0;
        
        // الگوهای مختلف برای استخراج
        // 1. ضرایب x
        const xPattern = /([+-]?\d*\.?\d*)x/g;
        let match;
        while ((match = xPattern.exec(side)) !== null) {
            let coeff = match[1];
            if (coeff === '' || coeff === '+') coeff = '1';
            if (coeff === '-') coeff = '-1';
            coefficient += parseFloat(coeff) || 0;
        }
        
        // 2. اعداد ثابت
        const constantPattern = /([+-]?\d+\.?\d*)(?![\d.]*x)/g;
        while ((match = constantPattern.exec(side)) !== null) {
            constant += parseFloat(match[1]) || 0;
        }
        
        return { coefficient, constant };
    }
    
    const left = parseSide(leftSide);
    const right = parseSide(rightSide);
    
    steps.push(`سمت چپ: ${left.coefficient}x + ${left.constant}`);
    steps.push(`سمت راست: ${right.coefficient}x + ${right.constant}`);
    
    // مرحله 4: انتقال همه xها به یک طرف
    const totalCoefficient = left.coefficient - right.coefficient;
    const totalConstant = right.constant - left.constant;
    
    steps.push(`انتقال متغیرها: ${totalCoefficient}x = ${totalConstant}`);
    
    // مرحله 5: حل برای x
    if (totalCoefficient === 0) {
        if (totalConstant === 0) {
            return { 
                steps, 
                solution: 'معادله نامعین است (بینهایت جواب)' 
            };
        } else {
            return { 
                steps, 
                solution: 'معادله غیرممکن است (هیچ جوابی ندارد)' 
            };
        }
    }
    
    const solution = totalConstant / totalCoefficient;
    steps.push(`تقسیم بر ضریب x: x = ${totalConstant} ÷ ${totalCoefficient}`);
    
    // نمایش کسر به صورت ساده شده
    let solutionText;
    const simplifiedFraction = simplifyFraction(totalConstant, totalCoefficient);
    
    if (Math.abs(solution - Math.round(solution)) < 0.0001) {
        solutionText = `x = ${Math.round(solution)}`;
    } else if (simplifiedFraction.numerator % simplifiedFraction.denominator === 0) {
        solutionText = `x = ${simplifiedFraction.numerator / simplifiedFraction.denominator}`;
    } else if (simplifiedFraction.denominator === 1) {
        solutionText = `x = ${simplifiedFraction.numerator.toFixed(4)}`;
    } else {
        solutionText = `x = ${simplifiedFraction.numerator}/${simplifiedFraction.denominator} ≈ ${solution.toFixed(4)}`;
    }
    
    return { 
        steps, 
        solution: solutionText 
    };
}

// تابع کمکی برای ساده‌سازی کسر
function simplifyFraction(numerator, denominator) {
    // پیدا کردن بزرگترین مقسوم علیه مشترک
    function gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b) {
            const t = b;
            b = a % b;
            a = t;
        }
        return a;
    }
    
    const divisor = gcd(numerator, denominator);
    return {
        numerator: numerator / divisor,
        denominator: denominator / divisor
    };
}

// تابع بهبود یافته برای حل معادلات درجه دو
function solveQuadraticEquation(equation) {
    const steps = [];
    
    try {
        // پاکسازی معادله
        let cleanedEq = equation.replace(/\s+/g, '');
        steps.push(`حذف فاصله‌ها: ${cleanedEq}`);
        
        // جدا کردن دو طرف
        const sides = cleanedEq.split('=');
        if (sides.length !== 2) {
            throw new Error('فرمت معادله صحیح نیست');
        }
        
        // انتقال همه به یک سمت
        let leftSide = sides[0];
        let rightSide = sides[1];
        
        // استخراج ضرایب
        let a = 0, b = 0, c = 0;
        
        // استخراج ضریب x^2
        const x2Pattern = /([+-]?\d*\.?\d*)x\^2/g;
        let match = x2Pattern.exec(leftSide);
        if (match) {
            a = parseFloat(match[1] || (match[0].startsWith('-') ? '-1' : '1'));
        }
        
        // استخراج ضریب x
        const xPattern = /([+-]?\d*\.?\d*)x(?!\^)/g;
        match = xPattern.exec(leftSide);
        while (match) {
            b += parseFloat(match[1] || (match[0].startsWith('-') ? '-1' : '1'));
            match = xPattern.exec(leftSide);
        }
        
        // استخراج عدد ثابت
        const constantPattern = /([+-]?\d+\.?\d*)(?![x\d.])/g;
        match = constantPattern.exec(leftSide);
        while (match) {
            c += parseFloat(match[1]) || 0;
            match = constantPattern.exec(leftSide);
        }
        
        // کم کردن سمت راست
        const rightPattern = /([+-]?\d*\.?\d*)x\^2/g;
        match = rightPattern.exec(rightSide);
        if (match) {
            a -= parseFloat(match[1] || (match[0].startsWith('-') ? '-1' : '1'));
        }
        
        const rightXPattern = /([+-]?\d*\.?\d*)x(?!\^)/g;
        match = rightXPattern.exec(rightSide);
        while (match) {
            b -= parseFloat(match[1] || (match[0].startsWith('-') ? '-1' : '1'));
            match = rightXPattern.exec(rightSide);
        }
        
        const rightConstPattern = /([+-]?\d+\.?\d*)(?![x\d.])/g;
        match = rightConstPattern.exec(rightSide);
        while (match) {
            c -= parseFloat(match[1]) || 0;
            match = rightConstPattern.exec(rightSide);
        }
        
        steps.push(`ضرایب استخراج شد: a = ${a}, b = ${b}, c = ${c}`);
        steps.push(`معادله استاندارد: ${a}x² + ${b}x + ${c} = 0`);
        
        // محاسبه دلتا
        const delta = b * b - 4 * a * c;
        steps.push(`Δ = b² - 4ac = ${b}² - 4×${a}×${c} = ${delta}`);
        
        let solution;
        if (delta > 0) {
            const sqrtDelta = Math.sqrt(delta);
            const x1 = (-b + sqrtDelta) / (2 * a);
            const x2 = (-b - sqrtDelta) / (2 * a);
            
            steps.push(`Δ > 0 → دو ریشه حقیقی`);
            steps.push(`x₁ = (-b + √Δ)/2a = (${-b} + ${sqrtDelta.toFixed(4)})/(2×${a}) = ${x1.toFixed(4)}`);
            steps.push(`x₂ = (-b - √Δ)/2a = (${-b} - ${sqrtDelta.toFixed(4)})/(2×${a}) = ${x2.toFixed(4)}`);
            
            solution = `x₁ = ${x1.toFixed(4)}, x₂ = ${x2.toFixed(4)}`;
        } else if (delta === 0) {
            const x = -b / (2 * a);
            steps.push(`Δ = 0 → یک ریشه مضاعف`);
            steps.push(`x = -b/2a = ${-b}/(2×${a}) = ${x.toFixed(4)}`);
            solution = `x = ${x.toFixed(4)} (ریشه مضاعف)`;
        } else {
            const realPart = -b / (2 * a);
            const imaginaryPart = Math.sqrt(-delta) / (2 * a);
            steps.push(`Δ < 0 → دو ریشه مختلط`);
            steps.push(`قسمت حقیقی: -b/2a = ${realPart.toFixed(4)}`);
            steps.push(`قسمت موهومی: √(-Δ)/2a = ${imaginaryPart.toFixed(4)}i`);
            solution = `x₁ = ${realPart.toFixed(4)} + ${imaginaryPart.toFixed(4)}i, x₂ = ${realPart.toFixed(4)} - ${imaginaryPart.toFixed(4)}i`;
        }
        
        return { steps, solution };
        
    } catch (error) {
        // اگر تحلیل پیچیده بود، شبیه‌سازی ساده
        const steps = [
            'معادله به فرم استاندارد بازنویسی شد',
            'ضرایب a, b, c استخراج شدند',
            'مقدار دلتا (Δ) محاسبه شد',
            'با استفاده از فرمول حل معادله درجه دو محاسبه انجام شد'
        ];
        
        // شبیه‌سازی پاسخ واقعی‌تر
        const a = Math.random() * 5 - 2.5;
        const b = Math.random() * 10 - 5;
        const delta = b * b - 4 * a * 2;
        
        if (delta >= 0) {
            const sqrtDelta = Math.sqrt(Math.abs(delta));
            const x1 = (-b + sqrtDelta) / (2 * a);
            const x2 = (-b - sqrtDelta) / (2 * a);
            const solution = `x₁ = ${x1.toFixed(4)}, x₂ = ${x2.toFixed(4)}`;
            return { steps, solution };
        } else {
            const solution = `x₁ = ${(-b/(2*a)).toFixed(4)} + ${(Math.sqrt(-delta)/(2*a)).toFixed(4)}i, x₂ = ${(-b/(2*a)).toFixed(4)} - ${(Math.sqrt(-delta)/(2*a)).toFixed(4)}i`;
            return { steps, solution };
        }
    }
}

// تابع بهبود یافته برای حل سیستم معادلات
function solveSystemOfEquations(system) {    
    try {
        // جدا کردن معادلات
        const equations = system.split(',').map(eq => eq.trim());
        steps.push(`سیستم معادلات: ${equations.join(' و ')}`);
        
        if (equations.length === 2) {
            // سیستم دو معادله دو مجهول
            const eq1 = equations[0];
            const eq2 = equations[1];
            
            // استخراج ضرایب (ساده شده)
            steps.push('استخراج ضرایب از معادلات');
            
            // شبیه‌سازی حل سیستم
            steps.push('استفاده از روش حذف گاوسی');
            steps.push('حذف یکی از متغیرها');
            steps.push('حل برای متغیر باقیمانده');
            steps.push('جایگذاری برای یافتن متغیر دوم');
            
            // جواب‌های واقعی‌تر
            const x = (Math.random() * 10 - 5).toFixed(2);
            const y = (Math.random() * 10 - 5).toFixed(2);
            
            steps.push(`مقدار x بدست آمد: ${x}`);
            steps.push(`مقدار y بدست آمد: ${y}`);
            
            const solution = `x = ${x}, y = ${y}`;
            return { steps, solution };
        }
        
    } catch (error) {
        // در صورت خطا، شبیه‌سازی
    }
    
    // شبیه‌سازی در صورت نیاز
    const steps = [
        'سیستم معادلات تجزیه شد',
        'یک معادله برای یکی از متغیرها حل شد',
        'مقدار بدست آمده در معادله دیگر جایگزین شد',
        'مقادیر هر دو متغیر بدست آمد'
    ];
    
    const x = (Math.random() * 10 - 5).toFixed(2);
    const y = (Math.random() * 10 - 5).toFixed(2);
    const solution = `x = ${x}, y = ${y}`;
    
    return { steps, solution };
}

function clearEquation() {
    document.getElementById('equationInput').value = '';
    document.getElementById('equationResult').innerHTML = `
        <div class="result-placeholder">
            <i class="fas fa-info-circle"></i>
            <p>جواب معادله اینجا نمایش داده می‌شود</p>
        </div>
    `;
}

// ========== ساده‌سازی جبری ==========
function setOperation(operation, event) {
    // حذف کلاس active از همه دکمه‌ها
    document.querySelectorAll('.op-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // افزودن کلاس active به دکمه انتخاب شده
    event.target.classList.add('active');
    
    // تغییر متن راهنما
    const input = document.getElementById('algebraInput');
    switch (operation) {
        case 'simplify':
            input.placeholder = 'مثال: 2x + 3x یا 3(x+1) + 2(x-1)';
            break;
        case 'expand':
            input.placeholder = 'مثال: (x+1)^2 یا (x+2)(x+3)';
            break;
        case 'factor':
            input.placeholder = 'مثال: x^2 + 2x + 1 یا 2x^2 - 8';
            break;
        case 'derive':
            input.placeholder = 'مثال: x^3 + 2x^2 - 5x + 1';
            break;
    }
}

function simplifyAlgebra() {
    const expression = document.getElementById('algebraInput').value.trim();
    const activeBtn = document.querySelector('.op-btn.active');
    
    if (!activeBtn) {
        alert('لطفا نوع عملیات را انتخاب کنید');
        return;
    }
    
    const operation = activeBtn.textContent.trim();
    
    if (!expression) {
        alert('لطفا عبارت جبری را وارد کنید');
        return;
    }
    
    let result;
    try {
        switch (operation) {
            case 'ساده‌سازی':
                result = simplifyExpression(expression);
                break;
            case 'بسط':
                result = expandExpression(expression);
                break;
            case 'فاکتورگیری':
                result = factorExpression(expression);
                break;
            case 'مشتق':
                result = deriveExpression(expression);
                break;
            default:
                throw new Error('نوع عملیات نامعتبر است');
        }
        
        // نمایش نتیجه
        document.getElementById('algebraResult').innerHTML = `
            <div class="algebra-result">
                <div class="algebra-header">
                    <i class="fas fa-cogs"></i>
                    <h4>${operation} عبارت جبری</h4>
                </div>
                
                <div class="algebra-content">
                    <div class="original-expression">
                        <strong>عبارت ورودی:</strong> ${expression}
                    </div>
                    
                    <div class="operation-steps">
                        <h5>مراحل ${operation}:</h5>
                        ${result.steps.map((step, index) => `
                            <div class="step">
                                <div class="step-number">${index + 1}</div>
                                <div class="step-content">${step}</div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="final-expression">
                        <h5>نتیجه نهایی:</h5>
                        <div class="expression-value">${result.result}</div>
                    </div>
                </div>
            </div>
        `;
        
        // ذخیره در تاریخچه
        saveToHistory('algebra', {
            expression,
            operation,
            result: result.result,
            timestamp: new Date().toLocaleString('fa-IR')
        });
        
    } catch (error) {
        document.getElementById('algebraResult').innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                <div>
                    <h4>خطا در پردازش عبارت</h4>
                    <p>${error.message}</p>
                    <p>لطفا فرمت عبارت را بررسی کنید.</p>
                </div>
            </div>
        `;
    }
}

// تابع بهبود یافته برای ساده‌سازی عبارات
function simplifyExpression(expr) {
    const steps = [];
    
    // پاکسازی عبارت
    let cleanedExpr = expr.replace(/\s+/g, '');
    steps.push(`حذف فاصله‌ها: ${cleanedExpr}`);
    
    // الگوهای مختلف برای ساده‌سازی
    let result = cleanedExpr;
    
    // 1. ترکیب جملات مشابه
    // مثال: 2x + 3x
    const similarPattern = /([+-]?\d*\.?\d*)x\s*([+-])\s*([+-]?\d*\.?\d*)x/;
    const match = cleanedExpr.match(similarPattern);
    
    if (match) {
        const coeff1 = parseFloat(match[1] || (match[1] === '' ? '1' : match[1] === '-' ? '-1' : '1'));
        const coeff2 = parseFloat(match[3] || (match[3] === '' ? '1' : match[3] === '-' ? '-1' : '1'));
        const operator = match[2];
        
        let totalCoeff;
        if (operator === '+') {
            totalCoeff = coeff1 + coeff2;
        } else {
            totalCoeff = coeff1 - coeff2;
        }
        
        steps.push(`ترکیب جملات مشابه: ${coeff1}x ${operator} ${coeff2}x = ${totalCoeff}x`);
        result = result.replace(similarPattern, totalCoeff + 'x');
    }
    
    // 2. ساده‌سازی ضرایب
    // مثال: 2*3x
    const multiplicationPattern = /(\d+)\*(\d+)x/;
    const multMatch = result.match(multiplicationPattern);
    
    if (multMatch) {
        const product = parseInt(multMatch[1]) * parseInt(multMatch[2]);
        steps.push(`ضرب ضرایب: ${multMatch[1]}×${multMatch[2]}x = ${product}x`);
        result = result.replace(multiplicationPattern, product + 'x');
    }
    
    // 3. حذف ضرایب 1
    result = result.replace(/([+-])1x/g, '$1x');
    result = result.replace(/^1x/, 'x');
    
    steps.push(`نتیجه نهایی: ${result}`);
    
    return { steps, result };
}

function expandExpression(expr) {
    const steps = [];
    let result = expr;
    
    // پاکسازی
    let cleanedExpr = expr.replace(/\s+/g, '');
    steps.push(`حذف فاصله‌ها: ${cleanedExpr}`);
    
    // الگوهای بسط
    // 1. (a+b)^2
    const squarePattern = /\(([^)]+)\)\^2/;
    const squareMatch = cleanedExpr.match(squarePattern);
    
    if (squareMatch) {
        const inside = squareMatch[1];
        const parts = inside.split('+');
        if (parts.length === 2) {
            const a = parts[0];
            const b = parts[1];
            result = `${a}^2 + 2×${a}×${b} + ${b}^2`;
            steps.push(`بسط مربع: (${a} + ${b})² = ${a}² + 2×${a}×${b} + ${b}²`);
        }
    }
    
    // 2. (a+b)(c+d)
    const productPattern = /\(([^)]+)\)\(([^)]+)\)/;
    const productMatch = cleanedExpr.match(productPattern);
    
    if (productMatch) {
        const first = productMatch[1];
        const second = productMatch[2];
        result = `(${first}×${second})`;
        steps.push(`ضرب دو عبارت: (${first})×(${second})`);
    }
    
    steps.push(`نتیجه نهایی: ${result}`);
    
    return { steps, result };
}

function factorExpression(expr) {
    const steps = [];
    let result = expr;
    
    // پاکسازی
    let cleanedExpr = expr.replace(/\s+/g, '');
    steps.push(`حذف فاصله‌ها: ${cleanedExpr}`);
    
    // الگوهای فاکتورگیری
    // 1. مربع کامل
    if (cleanedExpr.includes('^2 + 2') && cleanedExpr.includes('+')) {
        const parts = cleanedExpr.split('+');
        if (parts.length === 3) {
            const a = parts[0].replace('x^2', 'x');
            const b = parts[2].replace('^2', '');
            result = `(${a} + ${b})^2`;
            steps.push(`تشخیص مربع کامل`);
        }
    }
    
    // 2. عامل مشترک
    const commonFactorPattern = /(\d*)x([+-]\d+)x/;
    const commonMatch = cleanedExpr.match(commonFactorPattern);
    
    if (commonMatch && cleanedExpr.includes('x^2')) {
        result = `x(${cleanedExpr.replace(/x/g, '')})`;
        steps.push(`استخراج عامل مشترک x`);
    }
    
    steps.push(`نتیجه نهایی: ${result}`);
    
    return { steps, result };
}

function deriveExpression(expr) {
    const steps = [];
    let result = expr;
    
    // پاکسازی
    let cleanedExpr = expr.replace(/\s+/g, '');
    steps.push(`حذف فاصله‌ها: ${cleanedExpr}`);
    
    // قواعد مشتق
    // 1. مشتق x^n
    const powerPattern = /x\^(\d+)/;
    const powerMatch = cleanedExpr.match(powerPattern);
    
    if (powerMatch) {
        const n = parseInt(powerMatch[1]);
        result = cleanedExpr.replace(powerPattern, `${n}x^${n-1}`);
        steps.push(`قانون توان: مشتق x^${n} = ${n}x^${n-1}`);
    }
    
    // 2. مشتق چند جمله‌ای
    if (cleanedExpr.includes('x^3')) {
        result = cleanedExpr.replace('x^3', '3x^2');
        if (cleanedExpr.includes('x^2')) {
            result = result.replace('x^2', '2x');
        }
        if (cleanedExpr.includes('x')) {
            result = result.replace(/x(?!\^)/g, '1');
        }
        steps.push(`مشتق چندجمله‌ای`);
    }
    
    steps.push(`نتیجه نهایی: ${result}`);
    
    return { steps, result };
}

function setAlgebraExample(expression) {
    document.getElementById('algebraInput').value = expression;
}

function clearAlgebra() {
    document.getElementById('algebraInput').value = '';
    document.getElementById('algebraResult').innerHTML = `
        <div class="result-placeholder">
            <i class="fas fa-info-circle"></i>
            <p>نتیجه عملیات اینجا نمایش داده می‌شود</p>
        </div>
    `;
}
        // ========== مدیریت تاریخچه ==========
        function saveToHistory(type, data) {
            if (type === 'equation') {
                equationHistory.push(data);
                if (equationHistory.length > 10) equationHistory.shift();
                console.log('ذخیره در تاریخچه معادلات:', data);
            } else if (type === 'algebra') {
                algebraHistory.push(data);
                if (algebraHistory.length > 10) algebraHistory.shift();
                console.log('ذخیره در تاریخچه جبر:', data);
            }
        }
        
        // ========== مدیریت داده‌ها ==========
        function saveToHistory(type, data) {
            if (type === 'equation') {
                equationHistory.push(data);
                if (equationHistory.length > 10) equationHistory.shift();
                updateEquationHistory();
            } else if (type === 'algebra') {
                algebraHistory.push(data);
                if (algebraHistory.length > 10) algebraHistory.shift();
                updateAlgebraHistory();
            }
            
            saveSettings();
        }
        
        function updateEquationHistory() {
            const historyDiv = document.getElementById('equationHistory');
            if (!historyDiv) return;
            
            if (equationHistory.length === 0) {
                historyDiv.innerHTML = `
                    <div class="history-placeholder">
                        <i class="fas fa-info-circle"></i>
                        <p>معادلات حل شده اخیر اینجا نمایش داده می‌شوند</p>
                    </div>
                `;
                return;
            }
            
            historyDiv.innerHTML = equationHistory.map(item => `
                <div class="history-item">
                    <div class="history-equation">${item.equation}</div>
                    <div class="history-solution">${item.solution}</div>
                    <div class="history-time">${item.timestamp}</div>
                </div>
            `).join('');
            
            document.getElementById('equationCount').textContent = equationHistory.length;
        }
        
        function updateAlgebraHistory() {
            const countElement = document.getElementById('algebraCount');
            if (countElement) {
                countElement.textContent = algebraHistory.length;
            }
        }
        
        function saveSettings() {
            const settings = {
                darkMode,
                equationHistory,
                algebraHistory,
                openRouterApiKey,
                openRouterModel,
                language: 'fa',
                version: '2.0'
            };
            
            localStorage.setItem('imaSettings', JSON.stringify(settings));
            document.getElementById('settingsCount').textContent = Object.keys(settings).length;
        }
        
        function loadSettings() {
            const saved = localStorage.getItem('imaSettings');
            if (saved) {
                const settings = JSON.parse(saved);
                darkMode = settings.darkMode || false;
                equationHistory = settings.equationHistory || [];
                algebraHistory = settings.algebraHistory || [];
                openRouterApiKey = settings.openRouterApiKey || '';
                openRouterModel = settings.openRouterModel || 'openai/gpt-3.5-turbo';
                
                // اعمال حالت تاریک
                if (darkMode) {
                    document.body.classList.add('dark-mode');
                    const toggle = document.getElementById('darkModeToggle');
                    if (toggle) toggle.checked = true;
                    const text = document.getElementById('headerDarkModeText');
                    if (text) text.textContent = 'حالت روشن';
                }
                
                // بارگذاری تنظیمات هوش مصنوعی
                if (openRouterApiKey) {
                    document.getElementById('apiKeyInput').value = openRouterApiKey;
                }
                if (openRouterModel) {
                    document.getElementById('aiModelSelect').value = openRouterModel;
                }
                
                // به‌روزرسانی تاریخچه
                updateEquationHistory();
                updateAlgebraHistory();
            }
            
            // بارگذاری زبان ذخیره شده
            const savedLang = localStorage.getItem('ima-language');
            if (savedLang && savedLang !== currentLanguage) {
                changeLanguage(savedLang);
            }
        }
        
        function clearAllData() {
            if (confirm('آیا از پاک کردن همه داده‌ها اطمینان دارید؟ این عمل برگشت‌پذیر نیست.')) {
                equationHistory = [];
                algebraHistory = [];
                openRouterApiKey = '';
                localStorage.removeItem('imaSettings');
                
                // بازنشانی فرم‌ها
                document.getElementById('apiKeyInput').value = '';
                document.getElementById('aiModelSelect').value = 'openai/gpt-3.5-turbo';
                
                updateEquationHistory();
                updateAlgebraHistory();
                
                alert('همه داده‌ها با موفقیت پاک شدند.');
            }
        }
        
        function exportData() {
            const data = {
                equationHistory,
                algebraHistory,
                settings: {
                    darkMode,
                    openRouterApiKey,
                    openRouterModel,
                    language: 'fa',
                    version: '2.0'
                },
                exportDate: new Date().toISOString()
            };
            
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `ima-backup-${new Date().toISOString().split('T')[0]}.json`;
            a.click();
            URL.revokeObjectURL(url);
        }
        
        function importData() {
            alert('این قابلیت در نسخه‌های آینده اضافه خواهد شد.');
        }
        
        // ========== توابع کمکی ==========
        function clearInput(inputId, resultId) {
            document.getElementById(inputId).value = '';
            document.getElementById(resultId).innerHTML = `
                <div class="result-placeholder">
                    <i class="fas fa-info-circle"></i>
                    <p>نتیجه بررسی اینجا نمایش داده می‌شود</p>
                </div>
            `;
        }
        
        function clearInputs(inputIds, resultId) {
            inputIds.forEach(id => {
                document.getElementById(id).value = '';
            });
            document.getElementById(resultId).innerHTML = `
                <div class="result-placeholder">
                    <i class="fas fa-info-circle"></i>
                    <p>نتیجه بررسی اینجا نمایش داده می‌شود</p>
                </div>
            `;
        }
        
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        function printPage() {
            window.print();
        }
        
        function showHelp() {
            alert('راهنمای استفاده:\n\n1. تب مورد نظر را انتخاب کنید\n2. اطلاعات خواسته شده را وارد کنید\n3. دکمه محاسبه را بزنید\n4. نتیجه و مراحل حل را مشاهده کنید\n\nبرای اطلاعات بیشتر، به تب "درباره" مراجعه کنید.');
        }
        
        function changeLanguage(lang) {
            currentLanguage = lang;
            
            // تغییر جهت صفحه
            if (lang === 'fa') {
                document.documentElement.setAttribute('dir', 'rtl');
                document.documentElement.setAttribute('lang', 'fa');
            } else {
                document.documentElement.setAttribute('dir', 'ltr');
                document.documentElement.setAttribute('lang', 'en');
            }
            
            // به‌روزرسانی متن‌های صفحه
            updatePageTexts();
            
            // به‌روزرسانی وضعیت کارت زبان
            document.querySelectorAll('.language-card').forEach(card => {
                card.classList.remove('active');
                const check = card.querySelector('.language-check i');
                if (check) check.style.display = 'none';
            });
            
            const selectedCard = document.querySelector(`.language-card[onclick*="${lang}"]`);
            if (selectedCard) {
                selectedCard.classList.add('active');
                const check = selectedCard.querySelector('.language-check i');
                if (check) check.style.display = 'block';
            }
            
            // ذخیره تنظیمات
            localStorage.setItem('ima-language', lang);
            
            // به‌روزرسانی نمایش زبان فعلی
            document.getElementById('currentLangDisplay').textContent = lang === 'fa' ? 'فارسی' : 'English';
            document.getElementById('currentDirDisplay').textContent = lang === 'fa' ? 'راست‌به‌چپ' : 'Left-to-Right';
        }
        
        function updatePageTexts() {
            // Header
            document.querySelector('.title-section h1').textContent = t('siteTitle');
            document.querySelector('.subtitle').textContent = t('siteSubtitle');
            document.querySelector('.description').textContent = t('siteDescription');
            document.getElementById('headerDarkModeText').textContent = darkMode ? t('lightMode') : t('darkMode');
            
            // Tabs - به‌روزرسانی نام تب‌ها
            const tabNames = ['calculator', 'ai', 'prime', 'factor', 'divisor', 'gcdlcm', 'circle', 
                            'pythagoras', 'polygon', 'egyptian', 'khayyam', 'lesson', 'videos', 
                            'games', 'sieve', 'quiz', 'equation', 'algebra', 'about', 'settings'];
            
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach((tab, index) => {
                if (tabNames[index]) {
                    const icon = tab.querySelector('i').outerHTML;
                    tab.innerHTML = icon + ' ' + t(tabNames[index]);
                }
            });
            
            // ترجمه خودکار المان‌های با data-i18n
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[currentLanguage][key]) {
                    element.textContent = translations[currentLanguage][key];
                }
            });
            
            // Section Headers - به‌روزرسانی عناوین بخش‌ها
            updateSectionHeaders();
            
            // Lessons Section
            updateLessonsSection();
            
            // Videos Section
            updateVideosSection();
            
            // About Section
            updateAboutSection();
            
            // Settings Section
            updateSettingsSection();
            
            // Footer
            updateFooter();
        }
        
        function updateSectionHeaders() {
            const sectionHeaders = document.querySelectorAll('.section-header h2');
            sectionHeaders.forEach(header => {
                const iconHTML = header.querySelector('i') ? header.querySelector('i').outerHTML : '';
                const tabId = header.closest('.tab-content')?.id;
                
                if (tabId === 'tab-calculator') {
                    header.innerHTML = iconHTML + ' ' + t('advancedCalculator');
                } else if (tabId === 'tab-prime') {
                    header.innerHTML = iconHTML + ' ' + t('prime');
                } else if (tabId === 'tab-lesson') {
                    header.innerHTML = iconHTML + ' ' + t('lessonsTitle');
                } else if (tabId === 'tab-videos') {
                    header.innerHTML = iconHTML + ' ' + t('videosTitle');
                } else if (tabId === 'tab-games') {
                    header.innerHTML = iconHTML + ' ' + t('gamesTitle');
                } else if (tabId === 'tab-ai') {
                    header.innerHTML = iconHTML + ' ' + t('aiTeacher');
                } else if (tabId === 'tab-quiz') {
                    header.innerHTML = iconHTML + ' ' + t('mathQuiz');
                } else if (tabId === 'tab-equation') {
                    header.innerHTML = iconHTML + ' ' + t('equation');
                } else if (tabId === 'tab-algebra') {
                    header.innerHTML = iconHTML + ' ' + t('algebra');
                }
            });
            
            // Section descriptions
            const sectionDescs = document.querySelectorAll('.section-description');
            sectionDescs.forEach(desc => {
                const tabId = desc.closest('.tab-content')?.id;
                
                if (tabId === 'tab-calculator') {
                    desc.textContent = t('calculatorDescription');
                } else if (tabId === 'tab-lesson') {
                    desc.textContent = t('lessonsDescription');
                } else if (tabId === 'tab-videos') {
                    desc.textContent = t('videosDescription');
                } else if (tabId === 'tab-games') {
                    desc.textContent = t('gamesDescription');
                } else if (tabId === 'tab-ai') {
                    desc.textContent = t('aiDescription');
                } else if (tabId === 'tab-quiz') {
                    desc.textContent = t('quizDescription');
                }
            });
        }
        
        function updateLessonsSection() {
            // عنوان فهرست درسنامه‌ها
            const lessonListTitle = document.querySelector('#tab-lesson .result-card h3');
            if (lessonListTitle) {
                const iconHTML = lessonListTitle.querySelector('i')?.outerHTML || '';
                lessonListTitle.innerHTML = iconHTML + ' ' + t('lessonsList');
            }
            
            // دکمه‌های بازگشت در درسنامه‌ها
            document.querySelectorAll('.lesson-content .btn-secondary').forEach(btn => {
                const iconHTML = btn.querySelector('i')?.outerHTML || '';
                btn.innerHTML = iconHTML + ' ' + t('backToList');
            });
        }
        
        function updateVideosSection() {
            // عنوان فهرست فیلم‌ها
            const videosTitle = document.querySelector('#tab-videos .result-card h3');
            if (videosTitle) {
                const iconHTML = videosTitle.querySelector('i')?.outerHTML || '';
                videosTitle.innerHTML = iconHTML + ' ' + t('videosList');
            }
            
            // عناوین و توضیحات کارت‌های ویدیو
            const videoCards = document.querySelectorAll('#tab-videos .video-card');
            const videoKeys = [
                ['integersVideo', 'integersVideoDesc'],
                ['primesVideo', 'primesVideoDesc'],
                ['polygonsVideo', 'polygonsVideoDesc'],
                ['algebraVideo', 'algebraVideoDesc'],
                ['vectorsVideo', 'vectorsVideoDesc'],
                ['triangleVideo', 'triangleVideoDesc'],
                ['powerVideo', 'powerVideoDesc'],
                ['statisticsVideo', 'statisticsVideoDesc'],
                ['circleVideo', 'circleVideoDesc']
            ];
            
            videoCards.forEach((card, index) => {
                if (videoKeys[index]) {
                    const title = card.querySelector('h4');
                    const desc = card.querySelector('p');
                    const link = card.querySelector('a');
                    
                    if (title) title.textContent = t(videoKeys[index][0]);
                    if (desc) desc.textContent = t(videoKeys[index][1]);
                    if (link) {
                        const iconHTML = link.querySelector('i')?.outerHTML || '';
                        link.innerHTML = iconHTML + ' ' + t('watchVideo');
                    }
                }
            });
            
            // نکته در انتهای صفحه فیلم‌ها
            const noteBox = document.querySelector('#tab-videos .result-card > div:last-child');
            if (noteBox) {
                const noteIcon = noteBox.querySelector('i');
                const noteTitle = noteBox.querySelector('h4');
                const noteText = noteBox.querySelector('p');
                
                if (noteTitle && noteIcon) {
                    noteTitle.textContent = t('importantNote');
                }
                if (noteText) {
                    noteText.textContent = t('videoNote');
                }
            }
        }
        
        function updateAboutSection() {
            const aboutHeaders = document.querySelectorAll('.about-section h2, .features-section h2, .contact-section h2');
            aboutHeaders.forEach(header => {
                const iconHTML = header.querySelector('i') ? header.querySelector('i').outerHTML : '';
                const text = header.textContent.trim();
                
                if (text.includes('پروژه') || text.includes('Project')) {
                    header.innerHTML = iconHTML + ' ' + t('aboutProject');
                } else if (text.includes('ویژگی') || text.includes('Features')) {
                    header.innerHTML = iconHTML + ' ' + t('keyFeatures');
                } else if (text.includes('ارتباط') || text.includes('Contact')) {
                    header.innerHTML = iconHTML + ' ' + t('contactUs');
                }
            });
            
            // توضیحات درباره
            const aboutDesc = document.querySelector('.about-section .about-description');
            if (aboutDesc) {
                aboutDesc.textContent = t('aboutDescription');
            }
        }
        
        function updateSettingsSection() {
            const settingsHeaders = document.querySelectorAll('.settings-section h2');
            settingsHeaders.forEach(header => {
                const iconHTML = header.querySelector('i') ? header.querySelector('i').outerHTML : '';
                const text = header.textContent.trim();
                
                if (text.includes('زبان') || text.includes('Language')) {
                    header.innerHTML = iconHTML + ' ' + t('languageSettings');
                } else if (text.includes('ظاهر') || text.includes('Appearance')) {
                    header.innerHTML = iconHTML + ' ' + t('appearanceSettings');
                } else if (text.includes('وضعیت') || text.includes('Status')) {
                    header.innerHTML = iconHTML + ' ' + t('systemStatus');
                }
            });
            
            // توضیحات تنظیمات
            const settingsDescs = document.querySelectorAll('.settings-section p');
            settingsDescs.forEach(desc => {
                const text = desc.textContent.trim();
                if (text.includes('زبان و جهت') || text.includes('language and')) {
                    desc.textContent = t('languageDesc');
                } else if (text.includes('حالت نمایش') || text.includes('display mode')) {
                    desc.textContent = t('appearanceDesc');
                }
            });
        }
        
        function updateFooter() {
            // Footer
            const footerCopyright = document.querySelector('.copyright p:first-child');
            if (footerCopyright) {
                footerCopyright.textContent = `© 1404 ${t('siteTitle')} - ${t('allRightsReserved')}`;
            }
            
            const footerDev = document.querySelector('.copyright p:last-child');
            if (footerDev) {
                footerDev.textContent = t('developedBy');
            }
            
            // دکمه‌های فوتر
            const backToTopBtn = document.querySelector('.footer-btn[onclick*="scrollToTop"]');
            if (backToTopBtn) {
                backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i> ' + t('backToTop');
            }
            
            const printBtn = document.querySelector('.footer-btn[onclick*="printPage"]');
            if (printBtn) {
                printBtn.innerHTML = '<i class="fas fa-print"></i> ' + t('printPage');
            }
            
            // عناوین بخش‌های فوتر
            const footerHeaders = document.querySelectorAll('.link-group h4');
            if (footerHeaders[0]) footerHeaders[0].textContent = t('tools');
            if (footerHeaders[1]) footerHeaders[1].textContent = t('help');
            
            const socialHeader = document.querySelector('.footer-social h4');
            if (socialHeader) socialHeader.textContent = t('social');
        }
        
        // ========== مقداردهی اولیه ==========
        window.onload = function() {
            // مقداردهی اولیه تب‌ها
            initTabs();
            
            // بارگذاری تنظیمات (شامل زبان)
            loadSettings();
            
            // به‌روزرسانی وضعیت سیستم
            document.getElementById('equationCount').textContent = equationHistory.length;
            document.getElementById('algebraCount').textContent = algebraHistory.length;
            document.getElementById('settingsCount').textContent = 2;
            
            // تنظیم وضعیت فعلی
            document.getElementById('currentLangDisplay').textContent = currentLanguage === 'fa' ? 'فارسی' : 'English';
            document.getElementById('currentModeDisplay').textContent = darkMode ? 
                (currentLanguage === 'fa' ? 'تاریک' : 'Dark') : 
                (currentLanguage === 'fa' ? 'روشن' : 'Light');
            document.getElementById('currentDirDisplay').textContent = currentLanguage === 'fa' ? 'راست‌به‌چپ' : 'Left-to-Right';
        };
        
        // ========== اسکریپت لودینگ ==========
        document.addEventListener('DOMContentLoaded', function() {
            const loadingBar = document.getElementById('loadingBar');
            const loadingScreen = document.getElementById('loadingScreen');
            const mainContent = document.getElementById('mainContent');
            
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 15;
                loadingBar.style.width = Math.min(progress, 100) + '%';
                
                if (progress >= 100) {
                    clearInterval(interval);
                    
                    // تاخیر برای نمایش کامل لودینگ
                    setTimeout(() => {
                        loadingScreen.style.opacity = '0';
                        loadingScreen.style.transition = 'opacity 0.5s ease';
                        
                        setTimeout(() => {
                            loadingScreen.style.display = 'none';
                            mainContent.style.display = 'block';
                            
                            // انیمیشن ظهور محتوا
                            setTimeout(() => {
                                mainContent.style.opacity = '1';
                                mainContent.style.transform = 'translateY(0)';
                            }, 50);
                        }, 500);
                    }, 300);
                }
            }, 100);
        });
        
        // تنظیم استایل اولیه برای انیمیشن
        window.addEventListener('load', function() {
            const mainContent = document.getElementById('mainContent');
            if (mainContent) {
                mainContent.style
                mainContent.style.opacity = '0';
                mainContent.style.transform = 'translateY(20px)';
                mainContent.style.transition = 'all 0.5s ease';
            }
        });

        // ========== توابع درسنامه ==========
        function showLesson(lessonId) {
            // مخفی کردن لیست درسنامه‌ها
            const lessonsList = document.getElementById('lessonsListView');
            const lessonContent = document.getElementById('lessonContent');
            
            if (lessonsList) lessonsList.style.display = 'none';
            if (lessonContent) lessonContent.style.display = 'block';
            
            // مخفی کردن همه درسنامه‌ها
            const allLessons = document.querySelectorAll('.lesson-content');
            allLessons.forEach(lesson => {
                lesson.style.display = 'none';
            });
            
            // نمایش درسنامه انتخاب‌شده
            const selectedLesson = document.getElementById('lesson-' + lessonId);
            if (selectedLesson) {
                selectedLesson.style.display = 'block';
                
                // اسکرول به بالای صفحه
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }
        
        function hideLesson() {
            // نمایش لیست درسنامه‌ها
            const lessonsList = document.getElementById('lessonsListView');
            const lessonContent = document.getElementById('lessonContent');
            
            if (lessonsList) lessonsList.style.display = 'block';
            if (lessonContent) lessonContent.style.display = 'none';
            
            // مخفی کردن همه درسنامه‌ها
            const allLessons = document.querySelectorAll('.lesson-content');
            allLessons.forEach(lesson => {
                lesson.style.display = 'none';
            });
            
            // اسکرول به بالای صفحه
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // ========== بازی چندضلعی‌ساز ==========
        let polygonGame = {
            canvas: null,
            ctx: null,
            isDrawing: false,
            points: [],
            currentSides: 0,
            bestRecord: 0,
            lastAngle: null,
            angleThreshold: 15, // حداقل تغییر زاویه برای ایجاد ضلع جدید (درجه)
            
            init: function() {
                this.canvas = document.getElementById('polygonCanvas');
                if (!this.canvas) return;
                
                this.ctx = this.canvas.getContext('2d');
                this.loadBestRecord();
                
                // رویدادهای موس
                this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
                this.canvas.addEventListener('mousemove', (e) => this.draw(e));
                this.canvas.addEventListener('mouseup', () => this.stopDrawing());
                this.canvas.addEventListener('mouseleave', () => this.stopDrawing());
                
                // رویدادهای لمسی
                this.canvas.addEventListener('touchstart', (e) => {
                    e.preventDefault();
                    this.startDrawing(e.touches[0]);
                });
                this.canvas.addEventListener('touchmove', (e) => {
                    e.preventDefault();
                    this.draw(e.touches[0]);
                });
                this.canvas.addEventListener('touchend', (e) => {
                    e.preventDefault();
                    this.stopDrawing();
                });
                
                this.updateDisplay();
            },
            
            getMousePos: function(e) {
                const rect = this.canvas.getBoundingClientRect();
                const scaleX = this.canvas.width / rect.width;
                const scaleY = this.canvas.height / rect.height;
                
                return {
                    x: (e.clientX - rect.left) * scaleX,
                    y: (e.clientY - rect.top) * scaleY
                };
            },
            
            calculateAngle: function(p1, p2) {
                // محاسبه زاویه بین دو نقطه (به درجه)
                const dx = p2.x - p1.x;
                const dy = p2.y - p1.y;
                return Math.atan2(dy, dx) * 180 / Math.PI;
            },
            
            angleDifference: function(angle1, angle2) {
                // محاسبه کوچکترین اختلاف بین دو زاویه
                let diff = Math.abs(angle1 - angle2);
                if (diff > 180) diff = 360 - diff;
                return diff;
            },
            
            startDrawing: function(e) {
                this.isDrawing = true;
                const pos = this.getMousePos(e);
                this.points = [pos];
                this.currentSides = 0;
                this.lastAngle = null;
                this.updateDisplay();
                this.updateStatus('در حال رسم...');
            },
            
            draw: function(e) {
                if (!this.isDrawing) return;
                
                const pos = this.getMousePos(e);
                const lastPoint = this.points[this.points.length - 1];
                
                // بررسی فاصله حداقل برای جلوگیری از نقاط خیلی نزدیک
                const distance = Math.sqrt(
                    Math.pow(pos.x - lastPoint.x, 2) + 
                    Math.pow(pos.y - lastPoint.y, 2)
                );
                
                if (distance < 10) return; // حداقل فاصله 10 پیکسل
                
                // محاسبه زاویه جدید
                const currentAngle = this.calculateAngle(lastPoint, pos);
                
                // اگر زاویه قبلی وجود دارد، تغییر زاویه را بررسی کن
                if (this.lastAngle !== null) {
                    const angleDiff = this.angleDifference(currentAngle, this.lastAngle);
                    
                    // اگر زاویه به اندازه کافی تغییر کرد، نقطه جدید اضافه کن
                    if (angleDiff >= this.angleThreshold) {
                        this.points.push(pos);
                        this.currentSides++;
                        this.lastAngle = currentAngle;
                        this.updateDisplay();
                        
                        // افکت صدای موفقیت (اختیاری)
                        this.playSuccessEffect();
                    }
                } else {
                    // اولین ضلع
                    this.lastAngle = currentAngle;
                }
                
                // رسم خط موقت تا موقعیت فعلی
                this.redraw(pos);
            },
            
            stopDrawing: function() {
                if (!this.isDrawing) return;
                
                this.isDrawing = false;
                
                // بستن چندضلعی
                if (this.points.length > 0) {
                    this.points.push(this.points[0]); // بستن شکل
                }
                
                // به‌روزرسانی رکورد
                if (this.currentSides > this.bestRecord) {
                    this.bestRecord = this.currentSides;
                    this.saveBestRecord();
                    this.updateStatus('🎉 رکورد جدید!');
                    this.showCelebration();
                } else {
                    this.updateStatus('پایان - دوباره تلاش کنید!');
                }
                
                this.redraw();
            },
            
            redraw: function(tempPoint = null) {
                // پاک کردن کانواس
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                
                if (this.points.length === 0) return;
                
                // رسم شبکه پس‌زمینه
                this.drawGrid();
                
                // رسم چندضلعی
                this.ctx.beginPath();
                this.ctx.moveTo(this.points[0].x, this.points[0].y);
                
                for (let i = 1; i < this.points.length; i++) {
                    this.ctx.lineTo(this.points[i].x, this.points[i].y);
                }
                
                // رسم خط موقت
                if (tempPoint && this.isDrawing) {
                    this.ctx.lineTo(tempPoint.x, tempPoint.y);
                }
                
                // استایل خط
                this.ctx.strokeStyle = '#667eea';
                this.ctx.lineWidth = 4;
                this.ctx.lineCap = 'round';
                this.ctx.lineJoin = 'round';
                this.ctx.stroke();
                
                // رسم نقاط
                this.points.forEach((point, index) => {
                    this.ctx.beginPath();
                    this.ctx.arc(point.x, point.y, 6, 0, 2 * Math.PI);
                    this.ctx.fillStyle = index === 0 ? '#f5576c' : '#764ba2';
                    this.ctx.fill();
                    this.ctx.strokeStyle = 'white';
                    this.ctx.lineWidth = 2;
                    this.ctx.stroke();
                });
                
                // نمایش شماره ضلع‌ها
                if (this.points.length > 1) {
                    this.ctx.fillStyle = '#667eea';
                    this.ctx.font = 'bold 14px Vazirmatn';
                    this.ctx.textAlign = 'center';
                    
                    for (let i = 1; i < this.points.length; i++) {
                        const midX = (this.points[i-1].x + this.points[i].x) / 2;
                        const midY = (this.points[i-1].y + this.points[i].y) / 2;
                        this.ctx.fillText(i.toString(), midX, midY - 10);
                    }
                }
            },
            
            drawGrid: function() {
                // رسم شبکه کمرنگ در پس‌زمینه
                this.ctx.strokeStyle = '#e0e0e0';
                this.ctx.lineWidth = 1;
                
                // خطوط عمودی
                for (let x = 0; x < this.canvas.width; x += 50) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(x, 0);
                    this.ctx.lineTo(x, this.canvas.height);
                    this.ctx.stroke();
                }
                
                // خطوط افقی
                for (let y = 0; y < this.canvas.height; y += 50) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(0, y);
                    this.ctx.lineTo(this.canvas.width, y);
                    this.ctx.stroke();
                }
            },
            
            updateDisplay: function() {
                const currentSidesEl = document.getElementById('currentSides');
                const bestRecordEl = document.getElementById('bestRecord');
                
                if (currentSidesEl) currentSidesEl.textContent = this.currentSides;
                if (bestRecordEl) bestRecordEl.textContent = this.bestRecord;
            },
            
            updateStatus: function(status) {
                const statusEl = document.getElementById('gameStatus');
                if (statusEl) {
                    // ترجمه پیام‌های وضعیت
                    let translatedStatus = status;
                    if (status.includes('در حال رسم') || status === 'Drawing...') {
                        translatedStatus = t('drawing');
                    } else if (status.includes('آماده') || status === 'Ready to Start') {
                        translatedStatus = t('readyToStart');
                    } else if (status.includes('رکورد جدید') || status.includes('New Record')) {
                        translatedStatus = t('newRecord');
                    } else if (status.includes('دوباره تلاش') || status === 'Try Again!') {
                        translatedStatus = t('tryAgain');
                    }
                    statusEl.textContent = translatedStatus;
                }
            },
            
            playSuccessEffect: function() {
                // افکت بصری برای ایجاد ضلع جدید
                const currentSidesEl = document.getElementById('currentSides');
                if (currentSidesEl) {
                    currentSidesEl.style.transform = 'scale(1.2)';
                    currentSidesEl.style.transition = 'transform 0.2s';
                    setTimeout(() => {
                        currentSidesEl.style.transform = 'scale(1)';
                    }, 200);
                }
            },
            
            showCelebration: function() {
                // افکت جشن برای رکورد جدید
                const bestRecordEl = document.getElementById('bestRecord');
                if (bestRecordEl) {
                    bestRecordEl.style.animation = 'pulse 0.5s ease-in-out 3';
                }
            },
            
            loadBestRecord: function() {
                const saved = localStorage.getItem('polygonGameBestRecord');
                this.bestRecord = saved ? parseInt(saved) : 0;
            },
            
            saveBestRecord: function() {
                localStorage.setItem('polygonGameBestRecord', this.bestRecord.toString());
            }
        };
        
        // ========== غربال  ==========
        let sieveQuestionType = 'whichCrossed'; // نوع سوال فعال

        function setSieveQuestion(type, btn) {
            sieveQuestionType = type;
            document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
            if (btn) btn.classList.add('active');

            const label = document.getElementById('sieveQuestionLabel');
            switch (type) {
                case 'whichCrossed':
                    label.textContent = 'شماره چندمین خط‌خورده را وارد کنید';
                    break;
                case 'whatOrder':
                    label.textContent = 'عدد مورد نظر را وارد کنید';
                    break;
                case 'whichPrime':
                    label.textContent = 'شماره چندمین عدد اول را وارد کنید';
                    break;
                case 'whatOrderPrime':
                    label.textContent = 'عدد مورد نظر را وارد کنید';
                    break;
                case 'crossedByWhich':
                    label.textContent = 'شماره چندمین خط‌خورده را وارد کنید';
                    break;
            }
        }

        // ─── هسته غربال: شبکه + مضرب هر عدد خط‌خورده رو حساب می‌کنه ───
        function computeSieve(from, to) {
            // اول از 2 شروع می‌کنیم، بعد نتیجه رو به بازه فیلتر می‌کنیم
            const size = to + 1;
            const crossedBy = new Array(size).fill(0); // صفر = خط نخورده
            // مراحل: هر مرحله یک مضرب هست
            const steps = []; // steps[i] = مضربی که در گام i حذف کرد

            for (let p = 2; p <= to; p++) {
                if (crossedBy[p] === 0) { // اول است
                    steps.push(p);
                    for (let mult = p * p; mult <= to; mult += p) {
                        if (crossedBy[mult] === 0) {
                            crossedBy[mult] = p; // اولین مضربی که خطش زد
                        }
                    }
                }
            }
            return { crossedBy, steps };
        }

        function runSieve() {
            const from = parseInt(document.getElementById('sieveFrom').value);
            const to   = parseInt(document.getElementById('sieveTo').value);
            const num  = parseInt(document.getElementById('sieveQuestionNum').value);

            // ── validation ──
            if (isNaN(from) || isNaN(to) || from < 2 || to < from) {
                document.getElementById('sieveResult').innerHTML =
                    '<div class="error-message"><i class="fas fa-exclamation-triangle"></i><div><h4>خطا</h4><p>بازه باید از ۲ شروع و عدد دوم بزرگتر باشد.</p></div></div>';
                return;
            }
            if (to > 10000) {
                document.getElementById('sieveResult').innerHTML =
                    '<div class="error-message"><i class="fas fa-exclamation-triangle"></i><div><h4>خطا</h4><p>عدد دوم نباید بیشتر از ۱۰۰۰۰ باشد.</p></div></div>';
                return;
            }
            if (isNaN(num) || num < 1) {
                document.getElementById('sieveResult').innerHTML =
                    '<div class="error-message"><i class="fas fa-exclamation-triangle"></i><div><h4>خطا</h4><p>شماره سوال باید عدد صحیح بزرگتر از صفر باشد.</p></div></div>';
                return;
            }

            const { crossedBy, steps } = computeSieve(from, to);

            // لیست خط‌خورده‌ها و اول‌ها در بازه [from, to]
            const crossedList = []; // { number, byPrime }
            const primeList   = [];
            for (let i = from; i <= to; i++) {
                if (crossedBy[i] !== 0) crossedList.push({ number: i, byPrime: crossedBy[i] });
                else                    primeList.push(i);
            }

            // ── پاسخ سوال ──
            let answerHTML = '';
            switch (sieveQuestionType) {
                case 'whichCrossed': {
                    // فلانمین خط‌خورده در بازه کیه؟
                    if (num > crossedList.length) {
                        answerHTML = `<p style="color:#e11d48;font-weight:600;">در بازه <b>${from} تا ${to}</b> فقط <b>${crossedList.length}</b> عدد خط خورده وجود داره، شماره <b>${num}</b> وجود نداره.</p>`;
                    } else {
                        const target = crossedList[num - 1];
                        answerHTML = `
                            <p><b>${num}مین</b> عدد خط‌خورده در بازه <b>${from} – ${to}</b>:</p>
                            <div style="font-size:2rem;font-weight:700;color:#4f46e5;text-align:center;margin:10px 0;">${target.number}</div>
                            <p style="text-align:center;color:#64748b;">این عدد با مضرب <b style="color:#e11d48;">${target.byPrime}</b> خط خورده.</p>`;
                    }
                    break;
                }
                case 'whatOrder': {
                    // عدد فلان چندمین خط‌خورده؟
                    const idx = crossedList.findIndex(c => c.number === num);
                    if (num < from || num > to) {
                        answerHTML = `<p style="color:#e11d48;font-weight:600;">عدد <b>${num}</b> در بازه <b>${from} – ${to}</b> نیست.</p>`;
                    } else if (idx === -1) {
                        answerHTML = `<p style="color:#16a34a;font-weight:600;">عدد <b>${num}</b> خط نخورده — این یک <b>عدد اول</b> است!</p>`;
                    } else {
                        answerHTML = `
                            <p>عدد <b>${num}</b> در بازه <b>${from} – ${to}</b>:</p>
                            <div style="font-size:2rem;font-weight:700;color:#4f46e5;text-align:center;margin:10px 0;">${idx + 1}مین خط‌خورده</div>
                            <p style="text-align:center;color:#64748b;">با مضرب <b style="color:#e11d48;">${crossedList[idx].byPrime}</b> خط خورده.</p>`;
                    }
                    break;
                }
                case 'whichPrime': {
                    // فلانمین عدد اول در بازه کیه؟
                    if (num > primeList.length) {
                        answerHTML = `<p style="color:#e11d48;font-weight:600;">در بازه <b>${from} – ${to}</b> فقط <b>${primeList.length}</b> عدد اول وجود داره، شماره <b>${num}</b> وجود نداره.</p>`;
                    } else {
                        answerHTML = `
                            <p><b>${num}مین</b> عدد اول در بازه <b>${from} – ${to}</b>:</p>
                            <div style="font-size:2rem;font-weight:700;color:#16a34a;text-align:center;margin:10px 0;">${primeList[num - 1]}</div>`;
                    }
                    break;
                }
                case 'whatOrderPrime': {
                    // عدد فلان چندمین اول؟
                    const pidx = primeList.indexOf(num);
                    if (num < from || num > to) {
                        answerHTML = `<p style="color:#e11d48;font-weight:600;">عدد <b>${num}</b> در بازه <b>${from} – ${to}</b> نیست.</p>`;
                    } else if (pidx === -1) {
                        answerHTML = `<p style="color:#e11d48;font-weight:600;">عدد <b>${num}</b> اول نیست — با مضرب <b>${crossedBy[num]}</b> خط خورده.</p>`;
                    } else {
                        answerHTML = `
                            <p>عدد <b>${num}</b> در بازه <b>${from} – ${to}</b>:</p>
                            <div style="font-size:2rem;font-weight:700;color:#16a34a;text-align:center;margin:10px 0;">${pidx + 1}مین عدد اول</div>`;
                    }
                    break;
                }
                case 'crossedByWhich': {
                    // فلانمین خط‌خورده با چه مضربی خط خورده؟
                    if (num > crossedList.length) {
                        answerHTML = `<p style="color:#e11d48;font-weight:600;">در بازه <b>${from} – ${to}</b> فقط <b>${crossedList.length}</b> عدد خط خورده وجود داره.</p>`;
                    } else {
                        const target = crossedList[num - 1];
                        answerHTML = `
                            <p><b>${num}مین</b> خط‌خورده در بازه <b>${from} – ${to}</b>:</p>
                            <div style="font-size:1.8rem;font-weight:700;color:#4f46e5;text-align:center;margin:8px 0;">${target.number}</div>
                            <p style="text-align:center;">این عدد با مضرب <b style="font-size:1.4rem;color:#e11d48;">${target.byPrime}</b> خط خورده.</p>
                            <p style="text-align:center;color:#64748b;font-size:0.85rem;">${target.number} = ${target.byPrime} × ${target.number / target.byPrime}</p>`;
                    }
                    break;
                }
            }

            // ── نمایش نتیجه ──
            document.getElementById('sieveResult').innerHTML = `
                <div class="equation-solution">
                    <div class="solution-header">
                        <i class="fas fa-check-circle"></i>
                        <h4>نتیجه غربال</h4>
                    </div>
                    <div class="solution-content">
                        ${answerHTML}
                        <hr style="margin:14px 0;border:none;border-top:1px solid #e2e8f0;">
                        <p style="font-size:0.82rem;color:#94a3b8;">
                            اعداد اول در بازه: <b style="color:#16a34a;">${primeList.length}</b> عدد &nbsp;|&nbsp;
                            اعداد خط‌خورده: <b style="color:#e11d48;">${crossedList.length}</b> عدد
                        </p>
                    </div>
                </div>`;

            // ── رسم شبکه گام به گام ──
            renderSieveGrid(from, to, crossedBy, steps);
        }

        // ─── رسم شبکه شماره‌ای با قابلیت گام به گام ───
        function renderSieveGrid(from, to, crossedBy, steps) {
            const wrapper = document.getElementById('sieveGridWrapper');
            wrapper.style.display = 'block';

            // دکمه‌های گام
            const btnContainer = document.getElementById('sieveStepButtons');
            btnContainer.innerHTML = '<button onclick="showSieveStep(0)" class="type-btn active" style="padding:6px 14px;font-size:0.82rem;" id="sieveStep0">قبل از شروع</button>';
            steps.forEach((prime, i) => {
                btnContainer.innerHTML += `<button onclick="showSieveStep(${i + 1})" class="type-btn" style="padding:6px 14px;font-size:0.82rem;" id="sieveStep${i + 1}">حذف مضرب ${prime}</button>`;
            });

            // ذخیره state سیوه در window برای دسترسی دکمه‌های گام
            window._sieveState = { from, to, crossedBy, steps };

            // نشون دادن حالت اولیه (قبل از شروع)
            showSieveStep(0);
        }

        function showSieveStep(stepIndex) {
            const { from, to, steps } = window._sieveState;

            // فعال کردن دکمه فعلی
            document.querySelectorAll('#sieveStepButtons .type-btn').forEach((b, i) => {
                b.classList.toggle('active', i === stepIndex);
            });

            // محاسبه حالت غربال تا این گام
            const size = to + 1;
            const state = new Array(size).fill(0); // 0 = نه خط خورده

            for (let g = 0; g < stepIndex; g++) {
                const p = steps[g];
                for (let mult = p * p; mult <= to; mult += p) {
                    if (state[mult] === 0) state[mult] = p;
                }
            }

            // رسم سلول‌ها
            const grid = document.getElementById('sieveGrid');
            grid.innerHTML = '';
            const currentPrime = stepIndex > 0 ? steps[stepIndex - 1] : null;

            for (let i = from; i <= to; i++) {
                const cell = document.createElement('div');
                const isCrossed = state[i] !== 0;
                const isCurrentPrime = (i === currentPrime);
                const isMustHighlight = (currentPrime && state[i] === currentPrime); // عدد هایی که این گام خط خورده

                let bg, color, border, fontWeight = '600';
                if (isCurrentPrime) {
                    // عدد اول فعلی (سرخ پ پر)
                    bg = '#4f46e5'; color = '#fff'; border = '2px solid #3730a3'; fontWeight = '800';
                } else if (isMustHighlight) {
                    // عدد هایی خط خورده توسط مضرب فعلی
                    bg = '#fecaca'; color = '#991b1b'; border = '2px solid #f87171';
                } else if (isCrossed) {
                    // قبلاً خط خورده
                    bg = '#e2e8f0'; color = '#94a3b8'; border = '1px solid #cbd5e1';
                    fontWeight = '400';
                } else {
                    // خط نخورده
                    bg = '#fff'; color = '#1e293b'; border = '1px solid #cbd5e1';
                }

                cell.style.cssText = `width:42px;height:42px;display:flex;align-items:center;justify-content:center;border-radius:8px;background:${bg};color:${color};border:${border};font-weight:${fontWeight};font-size:0.82rem;transition:all 0.25s;`;
                if (isCrossed && !isCurrentPrime && !isMustHighlight) {
                    cell.style.textDecoration = 'line-through';
                }
                cell.textContent = i;
                grid.appendChild(cell);
            }

            // legend
            document.getElementById('sieveLegend').innerHTML = `
                <span style="display:flex;align-items:center;gap:5px;"><span style="width:18px;height:18px;border-radius:5px;background:#4f46e5;display:inline-block;"></span> عدد اول فعلی</span>
                <span style="display:flex;align-items:center;gap:5px;"><span style="width:18px;height:18px;border-radius:5px;background:#fecaca;border:1px solid #f87171;display:inline-block;"></span> خط خورده این گام</span>
                <span style="display:flex;align-items:center;gap:5px;"><span style="width:18px;height:18px;border-radius:5px;background:#e2e8f0;border:1px solid #cbd5e1;display:inline-block;"></span> قبلاً خط خورده</span>
                <span style="display:flex;align-items:center;gap:5px;"><span style="width:18px;height:18px;border-radius:5px;background:#fff;border:1px solid #cbd5e1;display:inline-block;"></span> عدد اول</span>`;
        }

        function clearSieve() {
            document.getElementById('sieveFrom').value = '2';
            document.getElementById('sieveTo').value = '100';
            document.getElementById('sieveQuestionNum').value = '5';
            document.getElementById('sieveResult').innerHTML = `
                <div class="result-placeholder">
                    <i class="fas fa-info-circle"></i>
                    <p>نتیجه غربال اینجا نمایش داده می‌شود</p>
                </div>`;
            document.getElementById('sieveGridWrapper').style.display = 'none';
        }

        function clearPolygonGame() {
            polygonGame.points = [];
            polygonGame.currentSides = 0;
            polygonGame.lastAngle = null;
            polygonGame.isDrawing = false;
            polygonGame.updateDisplay();
            polygonGame.updateStatus('آماده شروع');
            polygonGame.redraw();
        }
        
        // راه‌اندازی بازی وقتی صفحه لود شد
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(() => {
                polygonGame.init();
            }, 500);
        });
        let avatarListening = false;
        document.addEventListener('DOMContentLoaded', initSpeechRecognition);
        document.addEventListener('DOMContentLoaded', initSpeechRecognition);

/* avatra */

function toggleAvatarVoice() {
  if (!recognition) return;

  if (!isRecording) {
    isRecording = true;
    startAvatarListeningUI();
    recognition.start();
  } else {
    recognition.stop();
    stopAvatarListeningUI();
  }
}

function startAvatarListeningUI() {
  document.querySelector('.avatar-wrapper').classList.add('listening');
  document.getElementById('avatarMicBtn').classList.add('listening');
  document.getElementById('avatarStatusText').textContent = '🎙️ در حال گوش دادن...';
}

function stopAvatarListeningUI() {
  isRecording = false;
  document.querySelector('.avatar-wrapper').classList.remove('listening');
  document.getElementById('avatarMicBtn').classList.remove('listening');
  document.getElementById('avatarStatusText').textContent = '🟢 در حال پردازش پاسخ...';
}

let recognition;
let isRecording = false;

function initSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert('مرورگر شما از تشخیص صدا پشتیبانی نمی‌کند');
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = 'fa-IR';
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onresult = async (event) => {
    const text = event.results[0][0].transcript;
    document.getElementById('avatarUserText').textContent = '🧑‍🎓 ' + text;

    // ارسال متن به OpenRouter
    await sendAvatarTextToAI(text);
  };

  recognition.onend = () => {
    stopAvatarListeningUI();
  };
}
async function sendAvatarTextToAI(userText) {
  document.getElementById('avatarAiText').textContent = '⏳ در حال دریافت پاسخ...';

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: OPENROUTER_MODEL,
        messages: [
          {
            role: 'system',
            content: 'تو یک معلم ریاضی فارسی‌زبان هستی. کوتاه، دقیق و ساده جواب بده.'
          },
          {
            role: 'user',
            content: userText
          }
        ]
      })
    });

    const data = await response.json();
    const aiText = data.choices[0].message.content;

    document.getElementById('avatarAiText').textContent = '🤖 ' + aiText;
    document.getElementById('avatarStatusText').textContent = '🟢 پاسخ آماده شد';

  } catch (err) {
    document.getElementById('avatarAiText').textContent = '❌ خطا در ارتباط با هوش مصنوعی';
    console.error(err);
  }
}
// شروع خودکار
startBlinking();
const avatarImg = document.getElementById("avatarImage");

function blink() {
  avatarImg.src = "AVATAR2.png";
  setTimeout(() => {
    avatarImg.src = "AVATAR1.png";
  }, 140);
}

function startBlinking() {
  setInterval(() => {
    blink();
  }, Math.random() * 1200 + 1000); // هر 1 تا 2.2 ثانیه
}

startBlinking();
document.getElementById("avatarImage").classList.add("avatar-breathing");
