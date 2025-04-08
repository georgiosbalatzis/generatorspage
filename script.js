document.addEventListener('DOMContentLoaded', function() {
    // Navbar Toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.getElementById('navbar');
    const navLinksItems = document.querySelectorAll('.nav-link');

    // Toggle mobile navigation
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a navigation link is clicked
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    // Add navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });

    // Product category tabs
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all tabs
            tabBtns.forEach(tab => tab.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');

            // Hide all product categories
            const categories = document.querySelectorAll('.product-category');
            categories.forEach(category => category.classList.remove('active'));

            // Show selected category
            const category = this.getAttribute('data-category');
            document.querySelector(`.product-category[data-category="${category}"]`).classList.add('active');
        });
    });

    // Translations for the website
    const translations = {
        en: {
            // Navigation
            'nav-home': 'Home',
            'nav-about': 'About Us',
            'nav-products': 'Products',
            'nav-contact': 'Contact',
            'nav-quote': 'Get a Quote',

            // Hero section
            'hero-title': 'Reliable Generator Solutions for Greece',
            'hero-subtitle': 'Sales & Rentals Available Nationwide',
            'hero-description': 'Powering businesses and events across the Greek mainland and islands with reliable energy solutions.',
            'hero-explore': 'Explore Our Generators',
            'hero-contact': 'Contact Us',

            // About section
            'about-title': 'About Us',
            'about-subtitle': 'Your Trusted Power Partner in Greece',
            'about-p1': 'Since 2005, Pourtsidis Generators has been providing high-quality generator solutions to businesses, construction sites, events, and homeowners throughout Greece. Based in Athens with service centers across major islands, we pride ourselves on our technical expertise and commitment to customer satisfaction.',
            'about-highlight-1': '34+ years of experience in the Greek market',
            'about-highlight-3': '24/7 technical support',


            // Products section
            'products-title': 'Our Generator Products',
            'tab-residential': 'Residential',
            'tab-commercial': 'Commercial',
            'tab-industrial': 'Industrial',


            // Residential products
            'residential-title': 'Home Standby Generators',
            'residential-p1': 'Perfect for small to medium homes, providing essential power during outages. Our residential generators ensure your home stays powered when you need it most.',
            'residential-p2': 'With automatic transfer switches and reliable power output, you\'ll never have to worry about power interruptions again.',
            'residential-highlight-1': '8kW to 15kW Power Output',
            'residential-highlight-2': 'LPG/Natural Gas Compatibility',
            'residential-highlight-3': 'Low Noise Operation',
            'residential-highlight-4': 'Automatic Transfer Switches',
            'residential-view': 'View Residential Products',

            // Commercial products
            'commercial-title': 'Commercial Power Solutions',
            'commercial-p1': 'Reliable backup power for small to medium businesses and commercial spaces. Our commercial generators keep your business running smoothly during power outages.',
            'commercial-p2': 'With extended runtime capabilities and weather-resistant enclosures, these generators are built to perform in any condition.',
            'commercial-highlight-1': '50kW to 100kW Power Output',
            'commercial-highlight-2': 'Diesel Efficiency',
            'commercial-highlight-3': 'Weather-Resistant Enclosures',
            'commercial-highlight-4': 'Extended Runtime Capabilities',
            'commercial-view': 'View Commercial Products',

            // Industrial products
            'industrial-title': 'Industrial Power Systems',
            'industrial-p1': 'Heavy-duty generators designed for industrial applications and large-scale operations. Our industrial generators deliver reliable power for factories, data centers, and critical infrastructure.',
            'industrial-p2': 'Engineered for continuous operation and maximum reliability in demanding environments.',
            'industrial-highlight-1': '150kW to 500kW Power Output',
            'industrial-highlight-2': 'Diesel or Natural Gas Options',
            'industrial-highlight-3': 'Parallel Operation Capability',
            'industrial-highlight-4': 'Advanced Monitoring Systems',
            'industrial-view': 'View Industrial Products',

            // Portable products
            'portable-title': 'Portable Power Solutions',
            'portable-p1': 'Versatile, mobile generators for construction sites, outdoor events, and emergency situations. Our portable generators combine reliability with convenience.',
            'portable-p2': 'Easy to transport and set up, these generators provide power wherever you need it.',
            'portable-highlight-1': '2kW to 12kW Power Output',
            'portable-highlight-2': 'Gasoline or Dual-Fuel Options',
            'portable-highlight-3': 'Lightweight, Compact Design',
            'portable-highlight-4': 'Electric or Pull-Start Options',
            'portable-view': 'View Portable Products',
            'view-all': 'View All Products',

            // Services section
            'services-title': 'Generator Rental Services',
            'services-subtitle': 'Flexible rental solutions for any power requirement across Greece',

            'event-title': 'Event Power',
            'event-description': 'Reliable power solutions for concerts, festivals, weddings, and corporate events throughout Greece.',
            'event-feature-1': 'Silent operation options',
            'event-feature-2': 'Flexible rental periods',
            'event-feature-3': 'On-site technical support',

            'construction-title': 'Construction Sites',
            'construction-description': 'Heavy-duty generators for construction projects in remote locations and urban centers.',
            'construction-feature-1': 'Rugged, site-ready units',
            'construction-feature-2': 'Long-term rental discounts',
            'construction-feature-3': 'Delivery and setup included',

            'film-title': 'Film & Production',
            'film-description': 'Specialized quiet generators for film and TV production across Greece\'s scenic locations.',
            'film-feature-1': 'Ultra-quiet operation',
            'film-feature-2': 'Clean power for sensitive equipment',
            'film-feature-3': '24/7 emergency service',

            'emergency-title': 'Emergency Backup',
            'emergency-description': 'Short-term solutions for businesses and homes during power outages or grid maintenance.',
            'emergency-feature-1': 'Rapid deployment',
            'emergency-feature-2': 'Flexible capacity options',
            'emergency-feature-3': 'Island delivery available',

            // Why Choose Us section
            'why-us-title': 'Why Choose Pourtsidis Generators',

            'support-title': '24/7 Support',
            'support-description': 'Our technical support team is available around the clock to assist with any issues or emergencies.',

            'maintenance-title': 'Maintenance Service',
            'maintenance-description': 'Comprehensive maintenance plans to keep your generators running at peak performance.',

            'delivery-title': 'Nationwide Delivery',
            'delivery-description': 'Fast delivery and installation services across the Greek mainland and islands.',

            'quality-title': 'Quality Guarantee',
            'quality-description': 'We only offer top-tier generators from respected global manufacturers with full warranties.',

            // Contact section
            'contact-title': 'Contact Us',
            'contact-subtitle': 'Reach out for quotes, support, or information about our generator products and services',

            'location-title': 'Our Location',
            'phone-title': 'Phone Numbers',
            'email-title': 'Email Addresses',
            'email-sales': 'Sales: dimitrispourtsidis@yahoo.gr',
            'hours-title': 'Business Hours',
            'hours-weekday': 'Monday - Friday: 8:00 AM - 6:00 PM',
            'hours-saturday': 'Saturday: 9:00 AM - 3:00 PM',
            'hours-sunday': 'Sunday: Closed (Emergency Support Available)',

            'message-title': 'Send Us a Message',
            'form-name': 'Full Name',
            'form-email': 'Email Address',
            'form-phone': 'Phone Number',
            'form-subject': 'Subject',
            'form-select': 'Select an option',
            'form-sales': 'Generator Sales',
            'form-rental': 'Generator Rental',
            'form-support': 'Technical Support',
            'form-other': 'Other',
            'form-message': 'Message',
            'form-submit': 'Send Message',

            'map-title': 'Find Us',

            // Footer
            'footer-tagline': 'Your Trusted Power Partner',
            'footer-quick': 'Quick Links',
            'footer-products': 'Products',
            'footer-services': 'Services',
            'footer-connect': 'Connect With Us',
            'footer-rights': '© 2025 Pourtsidis Generators. All Rights Reserved.',
            'footer-privacy': 'Privacy Policy',
            'footer-terms': 'Terms of Service',
            'footer-cookie': 'Cookie Policy',

            'product-residential': 'Residential Generators',
            'product-commercial': 'Commercial Generators',
            'product-industrial': 'Industrial Generators',
            'product-portable': 'Portable Generators',
            'product-parts': 'Spare Parts',

            'service-rental': 'Generator Rental',
            'service-maintenance': 'Maintenance Plans',
            'service-installation': 'Installation Services',
            'service-emergency': 'Emergency Support',
            'service-consultation': 'Consultation',
        },
        gr: {
            // Navigation
            'nav-home': 'Αρχική',
            'nav-about': 'Σχετικά με Εμάς',
            'nav-products': 'Προϊόντα',
            'nav-contact': 'Επικοινωνία',
            'nav-quote': 'Ζητήστε Προσφορά',

            // Hero section
            'hero-title': 'Αξιόπιστες Λύσεις Γεννητριών για την Ελλάδα',
            'hero-subtitle': 'Πωλήσεις & Ενοικιάσεις σε Όλη την Χώρα',
            'hero-description': 'Τροφοδοτούμε επιχειρήσεις και εκδηλώσεις σε όλη την ηπειρωτική Ελλάδα και τα νησιά με αξιόπιστες ενεργειακές λύσεις.',
            'hero-explore': 'Εξερευνήστε τις Γεννήτριες μας',
            'hero-contact': 'Επικοινωνήστε Μαζί μας',

            // About section
            'about-title': 'Σχετικά με Εμάς',
            'about-p1': 'Από το 1991, η Π.Πουρτσίδης - Μ.Σταυριδης Ο.Ε. παρέχει λύσεις γεννητριών υψηλής ποιότητας σε επιχειρήσεις, εργοτάξια, εκδηλώσεις και ιδιοκτήτες σπιτιών σε όλη την Ελλάδα. Στον χώρο μας μπορείτε να βρείτε την μεγαλύτερη γκάμα γεννητριών, κινητήρων ακόμη και ανταλλακτικών. ',
            'about-highlight-1': '34+ χρόνια εμπειρίας στην ελληνική αγορά',
            'about-highlight-3': 'Τεχνική υποστήριξη 24/7',


            // Products section
            'products-title': 'Τα Προϊόντα μας',
            'tab-residential': 'Γεννήτριες',
            'tab-commercial': 'Κινητήρες',
            'tab-industrial': 'Ανταλλακτικά',

            // Residential products
            'residential-title': 'Γεννήτριες Οικιακής Εφεδρείας',
            'residential-p1': 'Ιδανικές για μικρά έως μεσαία σπίτια, παρέχοντας απαραίτητη ενέργεια κατά τη διάρκεια διακοπών ρεύματος. Οι οικιακές γεννήτριες μας εξασφαλίζουν ότι το σπίτι σας θα έχει ρεύμα όταν το χρειάζεστε περισσότερο.',
            'residential-p2': 'Με αυτόματους διακόπτες μεταφοράς και αξιόπιστη απόδοση ισχύος, δεν θα χρειαστεί ποτέ να ανησυχείτε ξανά για διακοπές ρεύματος.',
            'residential-highlight-1': 'Ισχύς από 8kW έως 15kW',
            'residential-highlight-2': 'Συμβατότητα με Υγραέριο/Φυσικό Αέριο',
            'residential-highlight-3': 'Λειτουργία Χαμηλού Θορύβου',
            'residential-highlight-4': 'Αυτόματοι Διακόπτες Μεταφοράς',
            'residential-view': 'Προβολή Οικιακών Προϊόντων',

            // Commercial products
            'commercial-title': 'Επαγγελματικές Λύσεις Ενέργειας',
            'commercial-p1': 'Αξιόπιστη εφεδρική ισχύς για μικρές έως μεσαίες επιχειρήσεις και εμπορικούς χώρους. Οι επαγγελματικές γεννήτριες μας διατηρούν την επιχείρησή σας σε ομαλή λειτουργία κατά τη διάρκεια διακοπών ρεύματος.',
            'commercial-p2': 'Με δυνατότητες παρατεταμένης λειτουργίας και περιβλήματα ανθεκτικά στις καιρικές συνθήκες, αυτές οι γεννήτριες είναι κατασκευασμένες για να αποδίδουν σε οποιεσδήποτε συνθήκες.',
            'commercial-highlight-1': 'Ισχύς από 50kW έως 100kW',
            'commercial-highlight-2': 'Αποδοτικότητα Πετρελαίου',
            'commercial-highlight-3': 'Περιβλήματα Ανθεκτικά στις Καιρικές Συνθήκες',
            'commercial-highlight-4': 'Δυνατότητες Παρατεταμένης Λειτουργίας',
            'commercial-view': 'Προβολή Επαγγελματικών Προϊόντων',

            // Industrial products
            'industrial-title': 'Βιομηχανικά Συστήματα Ενέργειας',
            'industrial-p1': 'Γεννήτριες βαρέως τύπου σχεδιασμένες για βιομηχανικές εφαρμογές και λειτουργίες μεγάλης κλίμακας. Οι βιομηχανικές γεννήτριες μας παρέχουν αξιόπιστη ενέργεια για εργοστάσια, κέντρα δεδομένων και κρίσιμες υποδομές.',
            'industrial-p2': 'Σχεδιασμένες για συνεχή λειτουργία και μέγιστη αξιοπιστία σε απαιτητικά περιβάλλοντα.',
            'industrial-highlight-1': 'Ισχύς από 150kW έως 500kW',
            'industrial-highlight-2': 'Επιλογές Πετρελαίου ή Φυσικού Αερίου',
            'industrial-highlight-3': 'Δυνατότητα Παράλληλης Λειτουργίας',
            'industrial-highlight-4': 'Προηγμένα Συστήματα Παρακολούθησης',
            'industrial-view': 'Προβολή Βιομηχανικών Προϊόντων',

            // Portable products
            'portable-title': 'Φορητές Λύσεις Ενέργειας',
            'portable-p1': 'Ευέλικτες, κινητές γεννήτριες για εργοτάξια, υπαίθριες εκδηλώσεις και καταστάσεις έκτακτης ανάγκης. Οι φορητές γεννήτριες μας συνδυάζουν αξιοπιστία με ευκολία.',
            'portable-p2': 'Εύκολες στη μεταφορά και την εγκατάσταση, αυτές οι γεννήτριες παρέχουν ενέργεια όπου τη χρειάζεστε.',
            'portable-highlight-1': 'Ισχύς από 2kW έως 12kW',
            'portable-highlight-2': 'Επιλογές Βενζίνης ή Διπλού Καυσίμου',
            'portable-highlight-3': 'Ελαφρύς, Συμπαγής Σχεδιασμός',
            'portable-highlight-4': 'Επιλογές Ηλεκτρικής ή Χειροκίνητης Εκκίνησης',
            'portable-view': 'Προβολή Φορητών Προϊόντων',
            'view-all': 'Προβολή Όλων των Προϊόντων',

            // Services section
            'services-title': 'Υπηρεσίες Ενοικίασης Γεννητριών',
            'services-subtitle': 'Ευέλικτες λύσεις ενοικίασης για οποιαδήποτε απαίτηση ισχύος σε όλη την Ελλάδα',

            'event-title': 'Ενέργεια Εκδηλώσεων',
            'event-description': 'Αξιόπιστες λύσεις ενέργειας για συναυλίες, φεστιβάλ, γάμους και εταιρικές εκδηλώσεις σε όλη την Ελλάδα.',
            'event-feature-1': 'Επιλογές αθόρυβης λειτουργίας',
            'event-feature-2': 'Ευέλικτες περίοδοι ενοικίασης',
            'event-feature-3': 'Επιτόπια τεχνική υποστήριξη',

            'construction-title': 'Εργοτάξια',
            'construction-description': 'Γεννήτριες βαρέως τύπου για κατασκευαστικά έργα σε απομακρυσμένες τοποθεσίες και αστικά κέντρα.',
            'construction-feature-1': 'Ανθεκτικές μονάδες έτοιμες για εργοτάξιο',
            'construction-feature-2': 'Εκπτώσεις μακροχρόνιας ενοικίασης',
            'construction-feature-3': 'Συμπεριλαμβάνεται παράδοση και εγκατάσταση',

            'film-title': 'Κινηματογράφος & Παραγωγή',
            'film-description': 'Εξειδικευμένες αθόρυβες γεννήτριες για κινηματογραφικές και τηλεοπτικές παραγωγές σε όλες τις γραφικές τοποθεσίες της Ελλάδας.',
            'film-feature-1': 'Εξαιρετικά αθόρυβη λειτουργία',
            'film-feature-2': 'Καθαρή ενέργεια για ευαίσθητο εξοπλισμό',
            'film-feature-3': 'Υπηρεσία έκτακτης ανάγκης 24/7',

            'emergency-title': 'Εφεδρική Έκτακτη Ανάγκη',
            'emergency-description': 'Βραχυπρόθεσμες λύσεις για επιχειρήσεις και σπίτια κατά τη διάρκεια διακοπών ρεύματος ή συντήρησης δικτύου.',
            'emergency-feature-1': 'Ταχεία ανάπτυξη',
            'emergency-feature-2': 'Ευέλικτες επιλογές χωρητικότητας',
            'emergency-feature-3': 'Διαθέσιμη παράδοση σε νησιά',

            // Why Choose Us section
            'why-us-title': 'Γιατί να Επιλέξετε την Πουρτσίδης Generators',

            'support-title': 'Υποστήριξη 24/7',
            'support-description': 'Η ομάδα τεχνικής υποστήριξής μας είναι διαθέσιμη όλο το 24ωρο για να σας βοηθήσει με οποιαδήποτε προβλήματα ή έκτακτες ανάγκες.',

            'maintenance-title': 'Υπηρεσία Συντήρησης',
            'maintenance-description': 'Ολοκληρωμένα προγράμματα συντήρησης για να διατηρούνται οι γεννήτριές σας σε μέγιστη απόδοση.',

            'delivery-title': 'Πανελλαδική Παράδοση',
            'delivery-description': 'Γρήγορες υπηρεσίες παράδοσης και εγκατάστασης σε όλη την ηπειρωτική Ελλάδα και τα νησιά.',

            'quality-title': 'Εγγύηση Ποιότητας',
            'quality-description': 'Προσφέρουμε μόνο γεννήτριες κορυφαίας ποιότητας από σεβαστούς παγκόσμιους κατασκευαστές με πλήρεις εγγυήσεις.',

            // Contact section
            'contact-title': 'Επικοινωνία',
            'contact-subtitle': 'Επικοινωνήστε μαζί μας για προσφορές, υποστήριξη ή πληροφορίες σχετικά με τα προϊόντα και τις υπηρεσίες γεννητριών μας',

            'location-title': 'Η Τοποθεσία μας',
            'phone-title': 'Τηλέφωνα',
            'email-title': 'Διευθύνσεις Email',
            'email-sales': 'Πωλήσεις: dimitrispourtsidis@yahoo.gr',
            'hours-title': 'Ώρες Λειτουργίας',
            'hours-weekday': 'Δευτέρα - Παρασκευή: 8:00 πμ - 6:00 μμ',
            'hours-saturday': 'Σάββατο: 9:00 πμ - 3:00 μμ',
            'hours-sunday': 'Κυριακή: Κλειστά (Διαθέσιμη Υποστήριξη Έκτακτης Ανάγκης)',

            'message-title': 'Στείλτε μας Μήνυμα',
            'form-name': 'Πλήρες Όνομα',
            'form-email': 'Διεύθυνση Email',
            'form-phone': 'Αριθμός Τηλεφώνου',
            'form-subject': 'Θέμα',
            'form-select': 'Επιλέξτε μια επιλογή',
            'form-sales': 'Πωλήσεις Γεννητριών',
            'form-rental': 'Ενοικίαση Γεννητριών',
            'form-support': 'Τεχνική Υποστήριξη',
            'form-other': 'Άλλο',
            'form-message': 'Μήνυμα',
            'form-submit': 'Αποστολή Μηνύματος',

            'map-title': 'Βρείτε μας',

            // Footer
            'footer-tagline': 'Ο Αξιόπιστος Συνεργάτης Ενέργειας',
            'footer-quick': 'Γρήγοροι Σύνδεσμοι',
            'footer-products': 'Προϊόντα',
            'footer-services': 'Υπηρεσίες',
            'footer-connect': 'Συνδεθείτε Μαζί μας',
            'footer-rights': '© 2025 Πουρτσίδης Generators. Όλα τα δικαιώματα διατηρούνται.',
            'footer-privacy': 'Πολιτική Απορρήτου',
            'footer-terms': 'Όροι Χρήσης',
            'footer-cookie': 'Πολιτική Cookie',

            'product-residential': 'Οικιακές Γεννήτριες',
            'product-commercial': 'Επαγγελματικές Γεννήτριες',
            'product-portable': 'Φορητές Γεννήτριες',
            'product-parts': 'Ανταλλακτικά',

            'service-rental': 'Ενοικίαση Γεννητριών',
            'service-maintenance': 'Προγράμματα Συντήρησης',
            'service-installation': 'Υπηρεσίες Εγκατάστασης',
            'service-emergency': 'Υποστήριξη Έκτακτης Ανάγκης',
            'service-consultation': 'Συμβουλευτική',
        },
    };

    // Function to update text content based on language
    function translatePage(language) {
        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[language] && translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });

        // Update form select options
        const selectOptions = document.querySelectorAll('option[data-i18n]');
        selectOptions.forEach(option => {
            const key = option.getAttribute('data-i18n');
            if (translations[language] && translations[language][key]) {
                option.textContent = translations[language][key];
            }
        });

        // Update placeholder attributes for forms
        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[language] && translations[language][key]) {
                element.setAttribute('placeholder', translations[language][key]);
            }
        });

        // Update button values
        const buttons = document.querySelectorAll('button[data-i18n-value]');
        buttons.forEach(button => {
            const key = button.getAttribute('data-i18n-value');
            if (translations[language] && translations[language][key]) {
                button.value = translations[language][key];
            }
        });

        // Store the language preference in localStorage
        localStorage.setItem('preferredLanguage', language);
    }

    // Language Switcher
    const languageLinks = document.querySelectorAll('.language-switch a');

    // Load saved language preference or default to English
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';

    // Set active language on page load
    languageLinks.forEach(link => {
        const lang = link.getAttribute('data-lang');
        if (lang === savedLanguage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Apply saved language on page load
    translatePage(savedLanguage);

    // Handle language switching
    languageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all language links
            languageLinks.forEach(item => item.classList.remove('active'));

            // Add active class to clicked language link
            this.classList.add('active');

            const language = this.getAttribute('data-lang');

            // Translate the page
            translatePage(language);
        });
    });

    // Contact Form Validation and Submission
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            const language = localStorage.getItem('preferredLanguage') || 'en';

            if (!name || !email || !subject || !message) {
                if (language === 'en') {
                    alert('Please fill in all required fields.');
                } else {
                    alert('Παρακαλώ συμπληρώστε όλα τα απαιτούμενα πεδία.');
                }
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                if (language === 'en') {
                    alert('Please enter a valid email address.');
                } else {
                    alert('Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email.');
                }
                return;
            }

            // If validation passes, you would typically send form data to a server
            // For demo purposes, we'll just show a success message
            if (language === 'en') {
                alert('Thank you for your message! We will get back to you shortly.');
            } else {
                alert('Ευχαριστούμε για το μήνυμά σας! Θα επικοινωνήσουμε μαζί σας σύντομα.');
            }
            contactForm.reset();
        });
    }

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('active');
        } else {
            scrollToTopBtn.classList.remove('active');
        }
    });

    scrollToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Skip if it's not an anchor link
            if (this.getAttribute('href') === '#') return;

            // Skip if it's a language switcher
            if (this.closest('.language-switch')) return;

            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

                window.scrollTo({
                    top: targetPosition - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animations to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .product-content, .why-us-card');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial styles for animation
    document.querySelectorAll('.service-card, .product-content, .why-us-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Run animation check on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // Image lazy loading
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.setAttribute('loading', 'lazy');
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        // You could implement a JavaScript lazy loading library here
    }

    // Initialize product grid
    // Show the first category by default
    document.querySelector('.product-category[data-category="residential"]').classList.add('active');
});