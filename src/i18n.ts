import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to NKR Library",
      chatbot: "Chatbot",
      beta: "Beta",
      typeMessage: "Type your message...",
      send: "Send",
      freebies: "Freebies",
      donate: "Donate",
      social: "Social",
      freebiesTitle: "Freebies & Resources",
      freebiesDesc:
        "Get free downloads and updates! Enter your details to access exclusive resources.",
      freebiesThankYou: "Thank you! Check your email for the download link.",
      name: "Name",
      email: "Email",
      getFreebies: "Get Freebies",
      availableDownloads: "Available Downloads",
      sampleResume: "Sample Resume Template",
      coverLetter: "Cover Letter Example",
      download: "Download",
      unlockDownloads: "Submit the form to unlock downloads.",
      enterNameEmail: "Please enter your name and email.",
      validEmail: "Please enter a valid email address.",
      donateTitle: "Support Our Mission 💖",
      donateDesc:
        "Your donation helps us keep resources free and accessible for everyone. Thank you for your support!",
      upiQr: "UPI / QR Code",
      scanToDonate: "Scan to donate via UPI",
      upiId: "UPI ID",
      donateWithPaypal: "Donate with PayPal",
      bankTransfer: "Bank Transfer",
      contactForBank: "Contact us for direct bank details:",
      donateTransparency:
        "For transparency, we use donations only for educational and operational costs.",
      donateThanks: "Thank you for your generosity!",
      connectWithUs: "Connect With Us",
      youtubeChannel: "YouTube Channel",
      followUs: "Follow Us",
      youtube: "YouTube",
      twitter: "Twitter",
      facebook: "Facebook",
      instagram: "Instagram",
      stayTuned: "Stay tuned for updates, new videos, and more!",
      skipToChat: "Skip to chatbot",
      yourMessage: "Your message",
      botMessage: "Bot message",
      sendMessageToChatbot: "Send a message to the chatbot",
      messageInput: "Message input",
      skipToFreebies: "Skip to freebies section",
      leadCaptureForm: "Lead capture form",
      skipToDonate: "Skip to donate section",
      skipToSocial: "Skip to social section",
      // Add more keys as needed
      // Hero section
      "hero.headline1": "Empower Yourself With",
      "hero.headline2": "Tech That Matters",
      "hero.subtitle":
        "Master software, stay cyber-safe, and explore science with clarity.",
      "hero.ctaYoutube": "Watch on YouTube",
      "hero.ctaYoutubeAria": "Watch tutorials on YouTube",
      "hero.ctaCourses": "Explore Courses",
      "hero.ctaCoursesAria": "Explore available courses",
      "hero.statStudents": "Students Helped",
      "hero.statWebsites": "Free Websites Built",
      "hero.statTutorials": "Tech Tutorials",
      // About section
      "about.heading": "Who is behind NKR Library?",
      "about.para1":
        "I'm a tech creator passionate about helping students and freshers become digitally confident. Through NKR Library, I share knowledge about software installation, digital security, and provide free custom websites to students who need them most.",
      "about.para2":
        "My mission is simple: make technology accessible, understandable, and safe for everyone. From tutorial videos to scam awareness content, everything is designed to empower learners in their digital journey.",
      "about.featureStudentTitle": "Student-Focused",
      "about.featureStudentDesc":
        "Educational content designed specifically for students and freshers entering the tech world.",
      "about.featureScamTitle": "Scam Awareness",
      "about.featureScamDesc":
        "Protecting our community from digital threats and fraudulent schemes targeting students.",
      "about.featureWebsitesTitle": "Free Websites",
      "about.featureWebsitesDesc":
        "Custom websites for students at no cost, helping build their digital presence.",
      "about.featureCommunityTitle": "Community Driven",
      "about.featureCommunityDesc":
        "Building a supportive community of learners, creators, and tech enthusiasts.",
      // Vision section
      "vision.header": "Our Foundation",
      "vision.subtitle":
        "Built on principles that drive meaningful innovation.",
      "vision.ourVisionTitle": "Our Vision",
      "vision.ourVisionContent":
        "We envision a world where software & science solve real problems.",
      "vision.ourExpertiseTitle": "Our Expertise",
      "vision.ourExpertiseContent":
        "We unite scientists & developers to tackle real-world challenges.",
      "vision.ourApproachTitle": "Our Approach",
      "vision.ourApproachContent":
        "Every solution is crafted collaboratively, with users at the core.",
      // SoftwareSkills section
      "software.header": "Software",
      "software.subtitle": "Learn top IT software from scratch.",
      "software.computerBasicsTitle": "Computer Basics",
      "software.computerBasicsDesc": "Master fundamental computer skills",
      "software.computerBasicsTopic1": "Adjust Display Settings",
      "software.computerBasicsTopic2": "Uninstall Programs",
      "software.computerBasicsTopic3": "Windows Themes",
      "software.computerBasicsTopic4": "Internet Speed in Taskbar",
      "software.computerBasicsTopic5": "Windows 11 Features",
      "software.installationsTitle": "Software Installations",
      "software.installationsDesc": "Install and configure software correctly",
      "software.installationsTopic1": "Git Installation",
      "software.installationsTopic2": "Node.js",
      "software.installationsTopic3": "React JS",
      "software.installationsTopic4": "Windows Setup",
      "software.installationsTopic5": "Bootstrap",
      "software.coursesTitle": "All Courses",
      "software.coursesDesc": "Comprehensive learning paths",
      "software.coursesTopic1": "Project-based Learning",
      "software.coursesTopic2": "Interactive Tutorials",
      "software.coursesTopic3": "Real-world Examples",
      "software.photoshopTitle": "Photoshop",
      "software.photoshopDesc": "Design and photo editing",
      "software.photoshopTopic1": "Logo Designing",
      "software.photoshopTopic2": "Photo Editing",
      "software.photoshopTopic3": "UI Design",
      "software.learnNow": "Learn Now",
      "software.getNotified": "Get Notified",
      "software.inDevelopment": "In Development",
      "software.more": "+{{count}} more...",
      // Newsletter section
      "newsletter.headline": "Join 1,000+ Learners",
      "newsletter.subtitle":
        "Get exclusive tutorials, scam alerts, and coding tips delivered to your inbox.",
      "newsletter.note": "Only .edu and .ac.in email addresses accepted.",
      "newsletter.placeholder": "student@university.edu",
      "newsletter.subscribe": "Subscribe",
      "newsletter.errorNoEmail": "Please enter your email address.",
      "newsletter.errorDomain":
        "Only .edu or .ac.in email addresses are allowed.",
      "newsletter.success":
        "Welcome to our learning community! Check your inbox for confirmation.",
      // Services section
      "services.header": "What We Offer",
      "services.subtitle":
        "Comprehensive tech education and free services designed specifically for students and freshers",
      "services.customWebsitesTitle": "Custom Student Websites",
      "services.customWebsitesDesc":
        "Professional, responsive websites built specifically for students. Perfect for portfolios, resumes, and academic projects.",
      "services.responsiveDesign": "Responsive Design",
      "services.seoOptimized": "SEO Optimized",
      "services.fastLoading": "Fast Loading",
      "services.mobileFriendly": "Mobile Friendly",
      "services.scamAwarenessTitle": "Scam Awareness Videos",
      "services.scamAwarenessDesc":
        "Educational content to help you identify and avoid online scams, phishing attempts, and fraudulent schemes.",
      "services.latestThreats": "Latest Threats",
      "services.preventionTips": "Prevention Tips",
      "services.realExamples": "Real Examples",
      "services.safetyGuides": "Safety Guides",
      "services.techTutorialsTitle": "Tech Tutorials",
      "services.techTutorialsDesc":
        "Step-by-step guides for software installation, troubleshooting, and technology tips for students and beginners.",
      "services.videoTutorials": "Video Tutorials",
      "services.writtenGuides": "Written Guides",
      "services.toolReviews": "Tool Reviews",
      "services.tipsTricks": "Tips & Tricks",
      "services.free": "Free",
      "services.mostPopular": "Most Popular",
      "services.requestYours": "Request Yours",
      "services.learnMore": "Learn More",
      // CyberScams section
      "cyberscams.header": "CyberScams & Awareness",
      "cyberscams.subtitle":
        "Understand and stay protected from the latest digital fraud. Knowledge is your best defense.",
      "cyberscams.dataLeaksTitle": "Data Leaks",
      "cyberscams.dataLeaksDesc":
        "How scammers steal and misuse your personal data",
      "cyberscams.honeyTrapTitle": "Honey Trap",
      "cyberscams.honeyTrapDesc": "Fake romantic scams targeting emotions",
      "cyberscams.phishingTitle": "Phishing",
      "cyberscams.phishingDesc": "Fraudulent login pages and fake emails",
      "cyberscams.cyberAttacksTitle": "Cyber Attacks",
      "cyberscams.cyberAttacksDesc": "Malware, trojans, and system attacks",
      "cyberscams.sextortionTitle": "Sextortion",
      "cyberscams.sextortionDesc": "Blackmail through compromising content",
      "cyberscams.strangerCallsTitle": "Stranger Calls",
      "cyberscams.strangerCallsDesc": "Unknown number scams and fraud calls",
      "cyberscams.gbWhatsappTitle": "GB WhatsApp",
      "cyberscams.gbWhatsappDesc": "Risks of unofficial messaging apps",
      "cyberscams.cyberbullyingTitle": "Cyberbullying",
      "cyberscams.cyberbullyingDesc": "Online harassment and digital abuse",
      "cyberscams.severity.critical": "Critical",
      "cyberscams.severity.high": "High",
      "cyberscams.severity.medium": "Medium",
      "cyberscams.cta": "Learn More About Digital Safety",
      // AboutSection
      "aboutSection.heading": "Who We Are",
      "aboutSection.intro":
        "At NKR Library, we create content that bridges software skills, cyber safety, and science. We empower learners with practical knowledge and build a safer digital future together.",
      "aboutSection.behindTitle": "Who is behind NKR Library?",
      "aboutSection.behindPara1":
        "I'm a tech creator passionate about helping students and freshers become digitally confident. Through NKR Library, I share knowledge about software installation, digital security, and provide free custom websites to students who need them most.",
      "aboutSection.behindPara2":
        "My mission is simple: make technology accessible, understandable, and safe for everyone. From tutorial videos to scam awareness content, everything is designed to empower learners in their digital journey.",
      "aboutSection.featureStudentTitle": "Student-Focused",
      "aboutSection.featureStudentDesc":
        "Educational content designed specifically for students and freshers entering the tech world.",
      "aboutSection.featureScamTitle": "Scam Awareness",
      "aboutSection.featureScamDesc":
        "Protecting our community from digital threats and fraudulent schemes targeting students.",
      "aboutSection.featureWebsitesTitle": "Free Websites",
      "aboutSection.featureWebsitesDesc":
        "Custom websites for students at no cost, helping build their digital presence.",
      "aboutSection.featureCommunityTitle": "Community Driven",
      "aboutSection.featureCommunityDesc":
        "Building a supportive community of learners, creators, and tech enthusiasts.",
      "aboutSection.impactTitle": "Our Impact",
      "aboutSection.impactStatStudents": "Students Empowered",
      "aboutSection.impactStatVideos": "Tutorial Videos",
      "aboutSection.impactStatResources": "Free Resources",
      // VideoShowcase section
      "videoShowcase.header": "Featured Videos",
      // Updated subtitle for perfect centering and clarity
      "videoShowcase.subtitle":
        "Explore our comprehensive library of tutorials, guides, and educational content.",
      "videoShowcase.viewAllVideos": "View All Videos",
      "videoShowcase.exploreAllCategories": "Explore All Categories",
      "videoShowcase.all": "All",
      "videoShowcase.allDesc": "All Categories",
      "videoShowcase.software": "Software",
      "videoShowcase.softwareDesc": "Development & Programming",
      "videoShowcase.cyberScams": "CyberScams",
      "videoShowcase.cyberScamsDesc": "Security & Awareness",
      "videoShowcase.medical": "Medical",
      "videoShowcase.medicalDesc": "Medical Coding",
      "videoShowcase.science": "Science",
      "videoShowcase.scienceDesc": "Tech & Innovation",
      "videoShowcase.career": "Career",
      "videoShowcase.careerDesc": "Jobs & Professional",
    },
  },
  hi: {
    translation: {
      welcome: "एनकेआर लाइब्रेरी में आपका स्वागत है",
      chatbot: "चैटबोट",
      beta: "बीटा",
      typeMessage: "अपना संदेश लिखें...",
      send: "भेजें",
      freebies: "फ्रीबीज़",
      donate: "दान करें",
      social: "सोशल",
      freebiesTitle: "फ्रीबीज़ और संसाधन",
      freebiesDesc:
        "नि:शुल्क डाउनलोड और अपडेट प्राप्त करें! विशेष संसाधनों तक पहुँचने के लिए अपना विवरण दर्ज करें।",
      freebiesThankYou: "धन्यवाद! डाउनलोड लिंक के लिए अपना ईमेल देखें।",
      name: "नाम",
      email: "ईमेल",
      getFreebies: "फ्रीबीज़ प्राप्त करें",
      availableDownloads: "उपलब्ध डाउनलोड",
      sampleResume: "नमूना रिज़्यूमे टेम्पलेट",
      coverLetter: "कवर लेटर उदाहरण",
      download: "डाउनलोड",
      unlockDownloads: "डाउनलोड अनलॉक करने के लिए फॉर्म सबमिट करें।",
      enterNameEmail: "कृपया अपना नाम और ईमेल दर्ज करें।",
      validEmail: "कृपया एक मान्य ईमेल पता दर्ज करें।",
      donateTitle: "हमारे मिशन का समर्थन करें 💖",
      donateDesc:
        "आपका दान हमें संसाधनों को सभी के लिए निःशुल्क और सुलभ बनाए रखने में मदद करता है। आपके समर्थन के लिए धन्यवाद!",
      upiQr: "यूपीआई / क्यूआर कोड",
      scanToDonate: "यूपीआई के माध्यम से दान करने के लिए स्कैन करें",
      upiId: "यूपीआई आईडी",
      donateWithPaypal: "पेपैल से दान करें",
      bankTransfer: "बैंक ट्रांसफर",
      contactForBank: "सीधे बैंक विवरण के लिए हमसे संपर्क करें:",
      donateTransparency:
        "पारदर्शिता के लिए, हम दान का उपयोग केवल शैक्षिक और संचालन लागत के लिए करते हैं।",
      donateThanks: "आपकी उदारता के लिए धन्यवाद!",
      connectWithUs: "हमसे जुड़ें",
      youtubeChannel: "यूट्यूब चैनल",
      followUs: "हमें फॉलो करें",
      youtube: "यूट्यूब",
      twitter: "ट्विटर",
      facebook: "फेसबुक",
      instagram: "इंस्टाग्राम",
      stayTuned: "अपडेट्स, नए वीडियो और अधिक के लिए जुड़े रहें!",
      skipToChat: "चैटबोट पर जाएं",
      yourMessage: "आपका संदेश",
      botMessage: "बॉट संदेश",
      sendMessageToChatbot: "चैटबोट को संदेश भेजें",
      messageInput: "संदेश इनपुट",
      skipToFreebies: "फ्रीबीज़ अनुभाग पर जाएं",
      leadCaptureForm: "लीड कैप्चर फॉर्म",
      skipToDonate: "दान अनुभाग पर जाएं",
      skipToSocial: "सोशल अनुभाग पर जाएं",
      // Add more keys as needed
      // Hero section
      "hero.headline1": "अपने आप को सशक्त बनाएं",
      "hero.headline2": "टेक जो मायने रखती है",
      "hero.subtitle":
        "सॉफ्टवेयर में महारत हासिल करें, साइबर-सुरक्षित रहें, और विज्ञान को स्पष्टता के साथ जानें।",
      "hero.ctaYoutube": "यूट्यूब पर देखें",
      "hero.ctaYoutubeAria": "यूट्यूब पर ट्यूटोरियल देखें",
      "hero.ctaCourses": "कोर्स एक्सप्लोर करें",
      "hero.ctaCoursesAria": "उपलब्ध कोर्स देखें",
      "hero.statStudents": "छात्रों की मदद की",
      "hero.statWebsites": "नि:शुल्क वेबसाइटें बनाई गई",
      "hero.statTutorials": "टेक ट्यूटोरियल्स",
      // About section
      "about.heading": "एनकेआर लाइब्रेरी के पीछे कौन है?",
      "about.para1":
        "मैं एक टेक क्रिएटर हूं जो छात्रों और फ्रेशर्स को डिजिटल रूप से आत्मविश्वासी बनाने के लिए समर्पित हूं। एनकेआर लाइब्रेरी के माध्यम से, मैं सॉफ्टवेयर इंस्टॉलेशन, डिजिटल सुरक्षा के बारे में ज्ञान साझा करता हूं और ज़रूरतमंद छात्रों को मुफ्त कस्टम वेबसाइट्स प्रदान करता हूं।",
      "about.para2":
        "मेरा मिशन सरल है: तकनीक को सभी के लिए सुलभ, समझने योग्य और सुरक्षित बनाना। ट्यूटोरियल वीडियो से लेकर स्कैम अवेयरनेस कंटेंट तक, सब कुछ शिक्षार्थियों को उनके डिजिटल सफर में सशक्त बनाने के लिए डिज़ाइन किया गया है।",
      "about.featureStudentTitle": "छात्र-केंद्रित",
      "about.featureStudentDesc":
        "छात्रों और फ्रेशर्स के लिए विशेष रूप से डिज़ाइन की गई शैक्षिक सामग्री।",
      "about.featureScamTitle": "स्कैम अवेयरनेस",
      "about.featureScamDesc":
        "छात्रों को लक्षित करने वाले डिजिटल खतरों और धोखाधड़ी से हमारी कम्युनिटी की सुरक्षा।",
      "about.featureWebsitesTitle": "मुफ्त वेबसाइट्स",
      "about.featureWebsitesDesc":
        "छात्रों के लिए बिना किसी लागत के कस्टम वेबसाइट्स, उनकी डिजिटल उपस्थिति बनाने में मदद करने के लिए।",
      "about.featureCommunityTitle": "समुदाय संचालित",
      "about.featureCommunityDesc":
        "सीखने वालों, क्रिएटर्स और टेक उत्साही लोगों का एक सहायक समुदाय बनाना।",
      // Vision section
      "vision.header": "हमारी नींव",
      "vision.subtitle":
        "सार्थक नवाचार को प्रेरित करने वाले सिद्धांतों पर आधारित।",
      "vision.ourVisionTitle": "हमारा विज़न",
      "vision.ourVisionContent":
        "हम एक ऐसी दुनिया की कल्पना करते हैं जहाँ सॉफ्टवेयर और विज्ञान असली समस्याओं का समाधान करें।",
      "vision.ourExpertiseTitle": "हमारी विशेषज्ञता",
      "vision.ourExpertiseContent":
        "हम वैज्ञानिकों और डेवलपर्स को एकजुट करते हैं ताकि वास्तविक दुनिया की चुनौतियों का समाधान किया जा सके।",
      "vision.ourApproachTitle": "हमारा दृष्टिकोण",
      "vision.ourApproachContent":
        "हर समाधान सहयोग से तैयार किया जाता है, जिसमें उपयोगकर्ता केंद्र में होते हैं।",
      // SoftwareSkills section
      "software.header": "सॉफ्टवेयर",
      "software.subtitle": "शुरुआत से टॉप आईटी सॉफ्टवेयर सीखें।",
      "software.computerBasicsTitle": "कंप्यूटर बेसिक्स",
      "software.computerBasicsDesc":
        "मूलभूत कंप्यूटर कौशल में महारत हासिल करें",
      "software.computerBasicsTopic1": "डिस्प्ले सेटिंग्स समायोजित करें",
      "software.computerBasicsTopic2": "प्रोग्राम्स अनइंस्टॉल करें",
      "software.computerBasicsTopic3": "विंडोज़ थीम्स",
      "software.computerBasicsTopic4": "टास्कबार में इंटरनेट स्पीड",
      "software.computerBasicsTopic5": "विंडोज़ 11 फीचर्स",
      "software.installationsTitle": "सॉफ्टवेयर इंस्टॉलेशन",
      "software.installationsDesc":
        "सॉफ्टवेयर को सही तरीके से इंस्टॉल और कॉन्फ़िगर करें",
      "software.installationsTopic1": "Git इंस्टॉलेशन",
      "software.installationsTopic2": "Node.js",
      "software.installationsTopic3": "React JS",
      "software.installationsTopic4": "Windows सेटअप",
      "software.installationsTopic5": "Bootstrap",
      "software.coursesTitle": "सभी कोर्स",
      "software.coursesDesc": "व्यापक लर्निंग पाथ्स",
      "software.coursesTopic1": "प्रोजेक्ट-आधारित लर्निंग",
      "software.coursesTopic2": "इंटरएक्टिव ट्यूटोरियल्स",
      "software.coursesTopic3": "वास्तविक दुनिया के उदाहरण",
      "software.photoshopTitle": "फोटोशॉप",
      "software.photoshopDesc": "डिज़ाइन और फोटो एडिटिंग",
      "software.photoshopTopic1": "लोगो डिज़ाइनिंग",
      "software.photoshopTopic2": "फोटो एडिटिंग",
      "software.photoshopTopic3": "UI डिज़ाइन",
      "software.learnNow": "अभी सीखें",
      "software.getNotified": "सूचित करें",
      "software.inDevelopment": "विकासाधीन",
      "software.more": "+{{count}} और...",
      // Newsletter section
      "newsletter.headline": "1,000+ शिक्षार्थियों से जुड़ें",
      "newsletter.subtitle":
        "विशेष ट्यूटोरियल, स्कैम अलर्ट और कोडिंग टिप्स सीधे अपने इनबॉक्स में पाएं।",
      "newsletter.note": "केवल .edu और .ac.in ईमेल पते स्वीकार किए जाते हैं।",
      "newsletter.placeholder": "student@university.edu",
      "newsletter.subscribe": "सब्सक्राइब करें",
      "newsletter.errorNoEmail": "कृपया अपना ईमेल पता दर्ज करें।",
      "newsletter.errorDomain":
        "केवल .edu या .ac.in ईमेल पते स्वीकार किए जाते हैं।",
      "newsletter.success":
        "हमारे लर्निंग कम्युनिटी में आपका स्वागत है! पुष्टि के लिए अपना इनबॉक्स देखें।",
      // Services section
      "services.header": "हमारी सेवाएँ",
      "services.subtitle":
        "छात्रों और फ्रेशर्स के लिए विशेष रूप से डिज़ाइन की गई व्यापक तकनीकी शिक्षा और निःशुल्क सेवाएँ",
      "services.customWebsitesTitle": "कस्टम छात्र वेबसाइट्स",
      "services.customWebsitesDesc":
        "छात्रों के लिए विशेष रूप से बनाई गई पेशेवर, उत्तरदायी वेबसाइट्स। पोर्टफोलियो, रिज़्यूमे और शैक्षणिक प्रोजेक्ट्स के लिए उपयुक्त।",
      "services.responsiveDesign": "उत्तरदायी डिज़ाइन",
      "services.seoOptimized": "एसईओ अनुकूलित",
      "services.fastLoading": "तेज़ लोडिंग",
      "services.mobileFriendly": "मोबाइल फ्रेंडली",
      "services.scamAwarenessTitle": "स्कैम अवेयरनेस वीडियो",
      "services.scamAwarenessDesc":
        "ऑनलाइन स्कैम, फ़िशिंग और धोखाधड़ी की पहचान और बचाव के लिए शैक्षिक सामग्री।",
      "services.latestThreats": "नवीनतम खतरे",
      "services.preventionTips": "रोकथाम के टिप्स",
      "services.realExamples": "वास्तविक उदाहरण",
      "services.safetyGuides": "सुरक्षा गाइड्स",
      "services.techTutorialsTitle": "टेक ट्यूटोरियल्स",
      "services.techTutorialsDesc":
        "सॉफ्टवेयर इंस्टॉलेशन, ट्रबलशूटिंग और तकनीकी टिप्स के लिए चरण-दर-चरण गाइड्स।",
      "services.videoTutorials": "वीडियो ट्यूटोरियल्स",
      "services.writtenGuides": "लिखित गाइड्स",
      "services.toolReviews": "टूल रिव्यूज़",
      "services.tipsTricks": "टिप्स और ट्रिक्स",
      "services.free": "निःशुल्क",
      "services.mostPopular": "सबसे लोकप्रिय",
      "services.requestYours": "अपना अनुरोध करें",
      "services.learnMore": "और जानें",
      // CyberScams section
      "cyberscams.header": "साइबर स्कैम्स और जागरूकता",
      "cyberscams.subtitle":
        "नवीनतम डिजिटल धोखाधड़ी को समझें और सुरक्षित रहें। ज्ञान ही आपकी सबसे अच्छी सुरक्षा है।",
      "cyberscams.dataLeaksTitle": "डेटा लीक",
      "cyberscams.dataLeaksDesc":
        "कैसे स्कैमर आपकी व्यक्तिगत जानकारी चुराते और दुरुपयोग करते हैं",
      "cyberscams.honeyTrapTitle": "हनी ट्रैप",
      "cyberscams.honeyTrapDesc":
        "भावनाओं को निशाना बनाने वाले नकली रोमांटिक स्कैम्स",
      "cyberscams.phishingTitle": "फिशिंग",
      "cyberscams.phishingDesc": "फर्जी लॉगिन पेज और नकली ईमेल",
      "cyberscams.cyberAttacksTitle": "साइबर अटैक्स",
      "cyberscams.cyberAttacksDesc": "मैलवेयर, ट्रोजन और सिस्टम अटैक्स",
      "cyberscams.sextortionTitle": "सेक्सटॉर्शन",
      "cyberscams.sextortionDesc":
        "समझौता करने वाली सामग्री के माध्यम से ब्लैकमेल",
      "cyberscams.strangerCallsTitle": "अनजान कॉल्स",
      "cyberscams.strangerCallsDesc": "अज्ञात नंबर से स्कैम और धोखाधड़ी कॉल्स",
      "cyberscams.gbWhatsappTitle": "जीबी व्हाट्सएप",
      "cyberscams.gbWhatsappDesc": "अनौपचारिक मैसेजिंग ऐप्स के जोखिम",
      "cyberscams.cyberbullyingTitle": "साइबरबुलिंग",
      "cyberscams.cyberbullyingDesc": "ऑनलाइन उत्पीड़न और डिजिटल दुर्व्यवहार",
      "cyberscams.severity.critical": "गंभीर",
      "cyberscams.severity.high": "उच्च",
      "cyberscams.severity.medium": "मध्यम",
      "cyberscams.cta": "डिजिटल सुरक्षा के बारे में और जानें",
      // AboutSection
      "aboutSection.heading": "हम कौन हैं",
      "aboutSection.intro":
        "एनकेआर लाइब्रेरी में, हम ऐसा कंटेंट बनाते हैं जो सॉफ्टवेयर स्किल्स, साइबर सुरक्षा और विज्ञान को जोड़ता है। हम प्रैक्टिकल ज्ञान के साथ शिक्षार्थियों को सशक्त बनाते हैं और मिलकर एक सुरक्षित डिजिटल भविष्य बनाते हैं।",
      "aboutSection.behindTitle": "एनकेआर लाइब्रेरी के पीछे कौन है?",
      "aboutSection.behindPara1":
        "मैं एक टेक क्रिएटर हूं जो छात्रों और फ्रेशर्स को डिजिटल रूप से आत्मविश्वासी बनाने के लिए समर्पित हूं। एनकेआर लाइब्रेरी के माध्यम से, मैं सॉफ्टवेयर इंस्टॉलेशन, डिजिटल सुरक्षा के बारे में ज्ञान साझा करता हूं और ज़रूरतमंद छात्रों को मुफ्त कस्टम वेबसाइट्स प्रदान करता हूं।",
      "aboutSection.behindPara2":
        "मेरा मिशन सरल है: तकनीक को सभी के लिए सुलभ, समझने योग्य और सुरक्षित बनाना। ट्यूटोरियल वीडियो से लेकर स्कैम अवेयरनेस कंटेंट तक, सब कुछ शिक्षार्थियों को उनके डिजिटल सफर में सशक्त बनाने के लिए डिज़ाइन किया गया है।",
      "aboutSection.featureStudentTitle": "छात्र-केंद्रित",
      "aboutSection.featureStudentDesc":
        "छात्रों और फ्रेशर्स के लिए विशेष रूप से डिज़ाइन की गई शैक्षिक सामग्री।",
      "aboutSection.featureScamTitle": "स्कैम अवेयरनेस",
      "aboutSection.featureScamDesc":
        "छात्रों को लक्षित करने वाले डिजिटल खतरों और धोखाधड़ी से हमारी कम्युनिटी की सुरक्षा।",
      "aboutSection.featureWebsitesTitle": "मुफ्त वेबसाइट्स",
      "aboutSection.featureWebsitesDesc":
        "छात्रों के लिए बिना किसी लागत के कस्टम वेबसाइट्स, जिससे उनकी डिजिटल उपस्थिति बनती है।",
      "aboutSection.featureCommunityTitle": "समुदाय संचालित",
      "aboutSection.featureCommunityDesc":
        "शिक्षार्थियों, क्रिएटर्स और टेक उत्साही लोगों का सहयोगी समुदाय बनाना।",
      "aboutSection.impactTitle": "हमारा प्रभाव",
      "aboutSection.impactStatStudents": "सशक्त छात्र",
      "aboutSection.impactStatVideos": "ट्यूटोरियल वीडियो",
      "aboutSection.impactStatResources": "मुफ्त संसाधन",
      // VideoShowcase section
      "videoShowcase.header": "फीचर्ड वीडियो",
      "videoShowcase.subtitle":
        "हमारे ट्यूटोरियल, गाइड्स और शैक्षिक कंटेंट की व्यापक लाइब्रेरी को एक्सप्लोर करें।",
      "videoShowcase.viewAllVideos": "सभी वीडियो देखें",
      "videoShowcase.exploreAllCategories": "सभी श्रेणियाँ देखें",
      "videoShowcase.all": "सभी",
      "videoShowcase.allDesc": "सभी श्रेणियाँ",
      "videoShowcase.software": "सॉफ्टवेयर",
      "videoShowcase.softwareDesc": "डेवलपमेंट और प्रोग्रामिंग",
      "videoShowcase.cyberScams": "साइबर स्कैम्स",
      "videoShowcase.cyberScamsDesc": "सुरक्षा और जागरूकता",
      "videoShowcase.medical": "मेडिकल",
      "videoShowcase.medicalDesc": "मेडिकल कोडिंग",
      "videoShowcase.science": "विज्ञान",
      "videoShowcase.scienceDesc": "टेक और नवाचार",
      "videoShowcase.career": "करियर",
      "videoShowcase.careerDesc": "नौकरियाँ और प्रोफेशनल",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
