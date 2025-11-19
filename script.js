// Scroll to details section
function scrollToDetails() {
    const detailsSection = document.getElementById('details');
    if (detailsSection) {
        detailsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Show email options
function showEmailOptions() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Send email via Gmail web interface
function sendEmailGmail() {
    const emailTo = 'dlokeshchand96@gmail.com';
    const emailSubject = 'Domain Inquiry: Suwate26.com';
    const emailBody = 
        'Hello,\n\n' +
        'I am interested in purchasing the domain Suwate26.com.\n\n' +
        'My offer: \n\n' +
        'Additional details:\n\n\n' +
        'Please let me know the next steps.\n\n' +
        'Thank you,';
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailTo)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.open(gmailUrl, '_blank');
    
    trackEvent('email_clicked', {
        method: 'gmail'
    });
}

// Send email via Outlook web interface
function sendEmailOutlook() {
    const emailTo = 'dlokeshchand96@gmail.com';
    const emailSubject = 'Domain Inquiry: Suwate26.com';
    const emailBody = 
        'Hello,\n\n' +
        'I am interested in purchasing the domain Suwate26.com.\n\n' +
        'My offer: \n\n' +
        'Additional details:\n\n\n' +
        'Please let me know the next steps.\n\n' +
        'Thank you,';
    
    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(emailTo)}&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.open(outlookUrl, '_blank');
    
    trackEvent('email_clicked', {
        method: 'outlook'
    });
}

// Send email via default email client
function sendEmailDefault() {
    const emailSubject = encodeURIComponent('Domain Inquiry: Suwate26.com');
    const emailBody = encodeURIComponent(
        'Hello,\n\n' +
        'I am interested in purchasing the domain Suwate26.com.\n\n' +
        'My offer: \n\n' +
        'Additional details:\n\n\n' +
        'Please let me know the next steps.\n\n' +
        'Thank you,'
    );
    
    const mailtoLink = `mailto:dlokeshchand96@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailtoLink;
    
    trackEvent('email_clicked', {
        method: 'default'
    });
}

// Add animation on scroll
function handleScroll() {
    const features = document.querySelectorAll('.feature-card');
    
    features.forEach(feature => {
        const featurePosition = feature.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (featurePosition < screenPosition) {
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
window.addEventListener('load', () => {
    const features = document.querySelectorAll('.feature-card');
    features.forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'all 0.5s ease';
    });
});

window.addEventListener('scroll', handleScroll);

// Track analytics (optional - you can add Google Analytics or similar)
function trackEvent(eventName, eventData) {
    console.log('Event:', eventName, eventData);
    // Add your analytics tracking code here
    // Example: gtag('event', eventName, eventData);
}

// Track button clicks
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        trackEvent('button_click', {
            button_text: e.target.textContent
        });
    }
});
