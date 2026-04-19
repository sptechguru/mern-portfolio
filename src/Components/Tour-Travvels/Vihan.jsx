import { useState, useEffect } from "react";
import { content } from "./content";
import { useLocation } from "react-router-dom";

// ── ALL CONTENT IN BOTH LANGUAGES ──
// const content = {
//   en: {
//     brandMain: "Dhruv Vihaan",
//     brandSub: "Tour & Travels",
//     brandSubScript: "ध्रुव विहान टूर एंड ट्रेवल्स",
//     toggleBtn: "हिंदी में देखें 🇮🇳",
//     callStrip: "📞 Call Now — Dheeraj Pal:",
//     callStrip2: "| 💬 Chat on WhatsApp",
//     navLinks: ["Home", "Destinations", "Packages", "Gallery", "Contact"],
//     navIds: ["home", "destinations", "packages", "gallery", "contact"],
//     navCta: "📞 Book Now",
//     heroBadge: "✦ Sacred Journey Awaits ✦",
//     heroTitle1: "Dhruv Vihaan",
//     heroTitle2: "Tour & Travels",
//     heroSubtitle: "Discover the Divine Heart of Madhya Pradesh",
//     heroDesc: "Embark on a soulful journey through Ujjain, Omkareshwar & Indore. Experience ancient temples, sacred rivers, and the timeless spirituality of Central India.",
//     heroBtnPrimary: "Book Your Journey ✦",
//     heroBtnOutline: "Explore Destinations",
//     stats: [["500+","Happy Travelers"],["3","Holy Destinations"],["10+","Packages"],["24/7","Support"]],
//     destTag: "✦ Holy Destinations ✦",
//     destTitle: "Sacred Places of",
//     destTitleGold: "Madhya Pradesh",
//     destDesc: "Journey to the most revered spiritual destinations in the heart of India",
//     destinations: [
//       {
//         emoji: "🕌", label: "Ujjain", title: "Ujjain – City of the Great God",
//         tag: "Jyotirlinga",
//         desc: "One of the seven sacred cities of India, home to the revered Mahakaleshwar Jyotirlinga. Experience the mystical Bhasma Aarti at dawn.",
//         bg: "linear-gradient(135deg,#FF6B00,#8B2500)",
//         highlights: ["Mahakaleshwar","Kumbh Mela","Kal Bhairav","Shipra Ghat"],
//       },
//       {
//         emoji: "🛕", label: "Omkareshwar", title: "Omkareshwar – Island of Om",
//         tag: "Jyotirlinga",
//         desc: "Situated on an island shaped like the sacred 'Om', this divine destination houses the Omkareshwar and Mamleshwar Jyotirlingas.",
//         bg: "linear-gradient(135deg,#6B0F1A,#FF6B00)",
//         highlights: ["Omkareshwar Temple","Narmada Aarti","Boat Ride","Siddhanath"],
//       },
//       {
//         emoji: "🌆", label: "Indore", title: "Indore – The Cultural Capital",
//         tag: "Cultural Hub",
//         desc: "India's cleanest city and cultural heart of Madhya Pradesh. Explore the vibrant Rajwada, Sarafa Bazaar, and mouth-watering street food.",
//         bg: "linear-gradient(135deg,#1A0A00,#8B6914)",
//         highlights: ["Rajwada Palace","Sarafa Bazaar","Lal Baag","Chappan Dukaan"],
//       },
//     ],
//     khajranaTag: "✦ Top 10 Must-Visit ✦",
//     khajranaTitle: "Khajrana",
//     khajranaTitleGold: "Ganesh Mandir",
//     khajranaDesc: "The miraculous Ganesh temple of Indore — explore every sacred spot",
//     places: [
//       { num:"01", icon:"🙏", name:"Khajrana Ganesh Mandir", desc:"The most revered Ganesh temple in Indore, known for miraculous wish-fulfillment. Millions visit annually." },
//       { num:"02", icon:"🌸", name:"Prasad Counter & Modak Stall", desc:"Taste the sacred Modak and Ladoo prasad made fresh daily at the temple complex." },
//       { num:"03", icon:"🪔", name:"Morning Aarti (5:00 AM)", desc:"Witness the breathtaking Mangal Aarti as priests perform rituals to welcome the deity at dawn." },
//       { num:"04", icon:"💧", name:"Holy Kund (Sacred Pond)", desc:"A serene holy pond near the temple where devotees take a sacred dip on auspicious occasions." },
//       { num:"05", icon:"🎪", name:"Ganesh Van (Temple Garden)", desc:"A lush garden surrounding the temple complex — perfect for peaceful strolls and meditation." },
//       { num:"06", icon:"🛍️", name:"Religious Market (Bazaar)", desc:"Explore vibrant stalls selling religious items, flowers, jewelry, and traditional MP artifacts." },
//       { num:"07", icon:"🍛", name:"Local Prasad Thalis", desc:"Savor traditional bhojan thalis served near the temple — authentic Malwi cuisine at its finest." },
//       { num:"08", icon:"🎵", name:"Evening Aarti (Sandhya)", desc:"The mesmerizing evening aarti with dhol, shehnai, and hundreds of diyas lighting the temple." },
//       { num:"09", icon:"🏮", name:"Diwali & Festival Celebrations", desc:"During Ganesh Chaturthi and Diwali, the temple transforms into a breathtaking festival of lights." },
//       { num:"10", icon:"🌟", name:"Wish Fulfillment Ritual", desc:"Devotees tie threads and offer coconuts as part of the sacred mannat ritual at the temple." },
//     ],
//     whyTag: "✦ Why Choose Us ✦",
//     whyTitle: "Travel with",
//     whyTitleGold: "Confidence",
//     why: [
//       {icon:"🚗", title:"Comfortable Transport", desc:"AC cabs and buses for all group sizes — clean, punctual, and safe."},
//       {icon:"🏨", title:"Premium Hotels", desc:"Carefully selected accommodations near temple zones with modern amenities."},
//       {icon:"🎯", title:"Expert Local Guides", desc:"Knowledgeable guides who bring history and spirituality alive at every site."},
//       {icon:"💰", title:"Best Price Guarantee", desc:"Transparent pricing with no hidden charges. Best rates in Madhya Pradesh."},
//       {icon:"📞", title:"24/7 Support", desc:"Dheeraj ji is always available for your assistance — before, during, and after."},
//       {icon:"🙏", title:"Spiritual Experience", desc:"Curated temple visits with priority darshan arrangements at key shrines."},
//     ],
//     pkgTag: "✦ Tour Packages ✦",
//     pkgTitle: "Choose Your",
//     pkgTitleGold: "Sacred Journey",
//     pkgBookBtn: "Book This Package",
//     packages: [
//       {
//         icon:"🌅", title:"Ujjain Day Tour", price:"Starting ₹1,499/person",
//         features:["Mahakaleshwar Darshan","Bhasma Aarti Priority","Kal Bhairav Temple","Shipra River Aarti","Hotel Stay Included","Guided Tour"],
//       },
//       {
//         icon:"🕉️", title:"Divine Trio Package", price:"Starting ₹4,999/person", featured:true, badge:"MOST POPULAR",
//         features:["Ujjain + Omkareshwar + Indore","3 Days 2 Nights","AC Transport","Premium Hotels","Both Jyotirlinga Darshan","All Meals Included","Expert Guide"],
//       },
//       {
//         icon:"🛕", title:"Omkareshwar Special", price:"Starting ₹1,999/person",
//         features:["Omkareshwar Jyotirlinga","Narmada Boat Ride","Mamleshwar Temple","Sunrise Aarti","Hotel Stay","Cab Included"],
//       },
//     ],
//     galleryTag: "✦ Gallery ✦",
//     galleryTitle: "Moments of",
//     galleryTitleGold: "Divine Beauty",
//     gallery: [
//       {emoji:"🕌", bg:"linear-gradient(135deg,#FF6B00,#6B0F1A)", caption:"Mahakaleshwar Temple, Ujjain"},
//       {emoji:"🛕", bg:"linear-gradient(135deg,#8B2500,#3D0408)", caption:"Omkareshwar Jyotirlinga"},
//       {emoji:"🌊", bg:"linear-gradient(135deg,#0A3D62,#1E6091)", caption:"Narmada River Aarti"},
//       {emoji:"🏛️", bg:"linear-gradient(135deg,#6B0F1A,#8B6914)", caption:"Rajwada Palace, Indore"},
//       {emoji:"🙏", bg:"linear-gradient(135deg,#D4A017,#8B2500)", caption:"Khajrana Ganesh Mandir"},
//       {emoji:"🎪", bg:"linear-gradient(135deg,#1A0A00,#FF6B00)", caption:"Kumbh Mela, Ujjain"},
//     ],
//     testiTag: "✦ Testimonials ✦",
//     testiTitle: "What Our",
//     testiTitleGold: "Travelers Say",
//     testimonials: [
//       {stars:5, text:"Dheeraj bhai made our Ujjain trip absolutely divine! The Bhasma Aarti experience was once in a lifetime. Highly recommend Dhruv Vihaan Tour Travelers!", name:"Rajesh Sharma", city:"Bhopal", avatar:"👨"},
//       {stars:5, text:"Superb service! The Omkareshwar package was perfectly planned. Everything from transport to hotel was excellent. Will book again!", name:"Priya Patel", city:"Mumbai", avatar:"👩"},
//       {stars:5, text:"Best tour operator in Indore! Covered all three destinations beautifully. The guide was very knowledgeable. 10/10 experience!", name:"Sunil Verma", city:"Delhi", avatar:"🧔"},
//     ],
//     contactTag: "✦ Get In Touch ✦",
//     contactTitle: "Book Your",
//     contactTitleGold: "Sacred Journey Today",
//     contactDesc: "Ready to experience the divine? Contact Dheeraj Pal for customized tour packages across Ujjain, Omkareshwar, Indore & beyond.",
//     contactItems: [
//       {icon:"📞", label:"Mobile / WhatsApp", value:"6265370030"},
//       {icon:"👤", label:"Tour Coordinator", value:"Dheeraj Pal"},
//       {icon:"🏢", label:"Company", value:"Dhruv Vihaan Tour & Travels"},
//       {icon:"📍", label:"Base Location", value:"Indore, Madhya Pradesh"},
//       {icon:"🕐", label:"Working Hours", value:"6:00 AM – 10:00 PM (Daily)"},
//       {icon:"✈️", label:"Service Area", value:"Ujjain • Omkareshwar • Indore"},
//     ],
//     formTitle: "🙏 Request a Booking",
//     formName: "Your Name", formNamePh: "Full Name",
//     formPhone: "Phone Number", formPhonePh: "Mobile Number",
//     formDest: "Select Destination", formDestPh: "Choose Destination...",
//     formDestOpts: ["Ujjain Day Tour","Omkareshwar Special","Divine Trio (Ujjain + Omkareshwar + Indore)","Khajrana Ganesh Mandir Tour","Custom Package"],
//     formDate: "Travel Date",
//     formMsg: "Your Message", formMsgPh: "Group size, special requirements...",
//     formSubmit: "📲 Send via WhatsApp",
//     formSubmitted: "✓ Sent to WhatsApp!",
//     formOr: "Or call directly:",
//     footerLinks: ["Ujjain","Omkareshwar","Indore","Khajrana","Packages"],
//     footerContact: "Contact: Dheeraj Pal",
//     footerCopy: "© 2024 Dhruv Vihaan Tour & Travels • Dheeraj Pal • Indore, MP • All Rights Reserved",
//     footerCopy2: "🙏 Crafted with love for Divine Travelers",
//     whatsappMsg: (d) => `Hello Dheeraj ji! My name is ${d.name} (Ph: ${d.phone}). I am interested in ${d.destination || "your tour packages"}. Travel Date: ${d.date || "TBD"}. ${d.message}`,
//   },
//   hi: {
//     brandMain: "ध्रुव विहान",
//     brandSub: "टूर एंड ट्रेवल्स",
//     brandSubScript: "Dhruv Vihaan Tour & Travels",
//     toggleBtn: "English में देखें 🇬🇧",
//     callStrip: "📞 अभी कॉल करें — धीरज पाल:",
//     callStrip2: "| 💬 WhatsApp पर बात करें",
//     navLinks: ["होम","गंतव्य","पैकेज","गैलरी","संपर्क"],
//     navIds: ["home","destinations","packages","gallery","contact"],
//     navCta: "📞 अभी बुक करें",
//     heroBadge: "✦ दिव्य यात्रा आपकी प्रतीक्षा कर रही है ✦",
//     heroTitle1: "ध्रुव विहान",
//     heroTitle2: "टूर एंड ट्रेवल्स",
//     heroSubtitle: "मध्यप्रदेश के पवित्र हृदय की खोज करें",
//     heroDesc: "उज्जैन, ओंकारेश्वर और इंदौर की आत्मीय यात्रा पर चलें। प्राचीन मंदिरों, पावन नदियों और मध्य भारत की शाश्वत आध्यात्मिकता का अनुभव करें।",
//     heroBtnPrimary: "यात्रा बुक करें ✦",
//     heroBtnOutline: "गंतव्य देखें",
//     stats: [["५००+","खुश यात्री"],["३","पवित्र स्थान"],["१०+","पैकेज"],["२४/७","सहायता"]],
//     destTag: "✦ पवित्र गंतव्य ✦",
//     destTitle: "मध्यप्रदेश के",
//     destTitleGold: "धार्मिक स्थल",
//     destDesc: "भारत के हृदय में स्थित सबसे पूजनीय आध्यात्मिक स्थलों की यात्रा करें",
//     destinations: [
//       {
//         emoji:"🕌", label:"उज्जैन", title:"उज्जैन – महाकाल की नगरी",
//         tag:"ज्योतिर्लिंग",
//         desc:"भारत के सात पवित्र नगरों में से एक — महाकालेश्वर ज्योतिर्लिंग का धाम। भस्म आरती का दिव्य अनुभव लें जो आत्मा को पावन कर देती है।",
//         bg:"linear-gradient(135deg,#FF6B00,#8B2500)",
//         highlights:["महाकालेश्वर","कुंभ मेला","काल भैरव","शिप्रा घाट"],
//       },
//       {
//         emoji:"🛕", label:"ओंकारेश्वर", title:"ओंकारेश्वर – ओम द्वीप",
//         tag:"ज्योतिर्लिंग",
//         desc:"पवित्र 'ॐ' के आकार के द्वीप पर स्थित यह स्थान ओंकारेश्वर और ममलेश्वर ज्योतिर्लिंगों का पवित्र धाम है।",
//         bg:"linear-gradient(135deg,#6B0F1A,#FF6B00)",
//         highlights:["ओंकारेश्वर मंदिर","नर्मदा आरती","नाव सवारी","सिद्धनाथ"],
//       },
//       {
//         emoji:"🌆", label:"इंदौर", title:"इंदौर – स्वच्छ व सांस्कृतिक नगरी",
//         tag:"सांस्कृतिक केंद्र",
//         desc:"भारत का सबसे स्वच्छ शहर और मध्यप्रदेश का सांस्कृतिक हृदय। राजवाड़ा, सराफा बाजार और लजीज स्ट्रीट फूड का आनंद लें।",
//         bg:"linear-gradient(135deg,#1A0A00,#8B6914)",
//         highlights:["राजवाड़ा महल","सराफा बाजार","लाल बाग","छप्पन दुकान"],
//       },
//     ],
//     khajranaTag: "✦ शीर्ष १० स्थान ✦",
//     khajranaTitle: "खजराना",
//     khajranaTitleGold: "गणेश मंदिर",
//     khajranaDesc: "इंदौर का चमत्कारी गणेश मंदिर — हर पवित्र स्थान का अन्वेषण करें",
//     places: [
//       {num:"01",icon:"🙏",name:"खजराना गणेश मंदिर",desc:"इंदौर का सबसे पूजनीय गणेश मंदिर — मनोकामना पूर्ण करने वाला दिव्य स्थान। लाखों श्रद्धालु प्रतिवर्ष आते हैं।"},
//       {num:"02",icon:"🌸",name:"प्रसाद काउंटर व मोदक स्टॉल",desc:"मंदिर परिसर में प्रतिदिन बनने वाले ताज़े मोदक और लड्डू का दिव्य प्रसाद ग्रहण करें।"},
//       {num:"03",icon:"🪔",name:"प्रातः आरती (सुबह ५ बजे)",desc:"देवता के स्वागत में पुजारियों द्वारा की जाने वाली भव्य मंगल आरती का दर्शन करें।"},
//       {num:"04",icon:"💧",name:"पवित्र कुण्ड",desc:"मंदिर के समीप स्थित पवित्र सरोवर जहाँ श्रद्धालु शुभ अवसरों पर स्नान करते हैं।"},
//       {num:"05",icon:"🎪",name:"गणेश वन (मंदिर उद्यान)",desc:"मंदिर परिसर के चारों ओर हरा-भरा उद्यान — ध्यान और शांति के लिए आदर्श स्थान।"},
//       {num:"06",icon:"🛍️",name:"धार्मिक बाजार",desc:"फूल, आभूषण, पूजन सामग्री और मध्यप्रदेश के पारंपरिक हस्तशिल्प की रंगीन दुकानें।"},
//       {num:"07",icon:"🍛",name:"प्रसाद थाली",desc:"मंदिर के पास परोसी जाने वाली पारंपरिक भोजन थाली — असली मालवी स्वाद का अनुभव।"},
//       {num:"08",icon:"🎵",name:"संध्या आरती (सायं)",desc:"ढोल, शहनाई और सैकड़ों दीपों के साथ होने वाली मनमोहक संध्या आरती।"},
//       {num:"09",icon:"🏮",name:"दीवाली व उत्सव",desc:"गणेश चतुर्थी और दीवाली पर मंदिर रोशनी के अद्भुत महोत्सव में बदल जाता है।"},
//       {num:"10",icon:"🌟",name:"मन्नत (इच्छापूर्ति विधि)",desc:"श्रद्धालु धागा बाँधते और नारियल चढ़ाते हैं — यह पवित्र मन्नत विधि विश्वभर में प्रसिद्ध है।"},
//     ],
//     whyTag: "✦ हमें क्यों चुनें ✦",
//     whyTitle: "विश्वास के साथ",
//     whyTitleGold: "यात्रा करें",
//     why: [
//       {icon:"🚗",title:"आरामदायक वाहन",desc:"सभी समूहों के लिए AC कैब और बसें — स्वच्छ, समय पर और सुरक्षित।"},
//       {icon:"🏨",title:"प्रीमियम होटल",desc:"मंदिर क्षेत्र के पास सावधानी से चयनित आवास, आधुनिक सुविधाओं के साथ।"},
//       {icon:"🎯",title:"स्थानीय विशेषज्ञ गाइड",desc:"ज्ञानी गाइड जो हर स्थान पर इतिहास और आध्यात्मिकता को जीवंत करते हैं।"},
//       {icon:"💰",title:"सर्वोत्तम मूल्य गारंटी",desc:"पारदर्शी मूल्य, कोई छुपा शुल्क नहीं। मध्यप्रदेश में सर्वोत्तम दरें।"},
//       {icon:"📞",title:"२४/७ सहायता",desc:"धीरज जी यात्रा से पहले, दौरान और बाद में हमेशा उपलब्ध हैं।"},
//       {icon:"🙏",title:"आध्यात्मिक अनुभव",desc:"मुख्य मंदिरों में प्राथमिकता दर्शन की व्यवस्था के साथ दिव्य यात्रा।"},
//     ],
//     pkgTag: "✦ टूर पैकेज ✦",
//     pkgTitle: "अपनी",
//     pkgTitleGold: "पवित्र यात्रा चुनें",
//     pkgBookBtn: "यह पैकेज बुक करें",
//     packages: [
//       {
//         icon:"🌅", title:"उज्जैन दिवस यात्रा", price:"मात्र ₹१,४९९/व्यक्ति से",
//         features:["महाकालेश्वर दर्शन","भस्म आरती प्राथमिकता","काल भैरव मंदिर","शिप्रा नदी आरती","होटल आवास सहित","गाइडेड टूर"],
//       },
//       {
//         icon:"🕉️", title:"दिव्य त्रिवेणी पैकेज", price:"मात्र ₹४,९९९/व्यक्ति से", featured:true, badge:"सबसे लोकप्रिय",
//         features:["उज्जैन + ओंकारेश्वर + इंदौर","३ दिन २ रात","AC वाहन सुविधा","प्रीमियम होटल","दोनों ज्योतिर्लिंग दर्शन","सभी भोजन सहित","विशेषज्ञ गाइड"],
//       },
//       {
//         icon:"🛕", title:"ओंकारेश्वर स्पेशल", price:"मात्र ₹१,९९९/व्यक्ति से",
//         features:["ओंकारेश्वर ज्योतिर्लिंग","नर्मदा नाव सवारी","ममलेश्वर मंदिर","सूर्योदय आरती","होटल आवास","कैब सेवा सहित"],
//       },
//     ],
//     galleryTag: "✦ गैलरी ✦",
//     galleryTitle: "दिव्य",
//     galleryTitleGold: "सौंदर्य के क्षण",
//     gallery: [
//       {emoji:"🕌",bg:"linear-gradient(135deg,#FF6B00,#6B0F1A)",caption:"महाकालेश्वर मंदिर, उज्जैन"},
//       {emoji:"🛕",bg:"linear-gradient(135deg,#8B2500,#3D0408)",caption:"ओंकारेश्वर ज्योतिर्लिंग"},
//       {emoji:"🌊",bg:"linear-gradient(135deg,#0A3D62,#1E6091)",caption:"नर्मदा नदी आरती"},
//       {emoji:"🏛️",bg:"linear-gradient(135deg,#6B0F1A,#8B6914)",caption:"राजवाड़ा महल, इंदौर"},
//       {emoji:"🙏",bg:"linear-gradient(135deg,#D4A017,#8B2500)",caption:"खजराना गणेश मंदिर"},
//       {emoji:"🎪",bg:"linear-gradient(135deg,#1A0A00,#FF6B00)",caption:"कुंभ मेला, उज्जैन"},
//     ],
//     testiTag: "✦ यात्री अनुभव ✦",
//     testiTitle: "हमारे",
//     testiTitleGold: "यात्री क्या कहते हैं",
//     testimonials: [
//       {stars:5,text:"ध्रुव विहान टूर ने हमारी उज्जैन यात्रा को अविस्मरणीय बना दिया! भस्म आरती का अनुभव जीवन में एक बार होता है। धीरज पाल जी को हार्दिक धन्यवाद!",name:"राजेश शर्मा",city:"भोपाल",avatar:"👨"},
//       {stars:5,text:"बेहतरीन सेवा! ओंकारेश्वर पैकेज बिल्कुल परफेक्ट था। यातायात से होटल तक सब कुछ शानदार। दोबारा जरूर बुक करेंगे!",name:"प्रिया पटेल",city:"मुंबई",avatar:"👩"},
//       {stars:5,text:"इंदौर का सबसे बढ़िया टूर ऑपरेटर! तीनों स्थानों को बखूबी कवर किया। गाइड बहुत ज्ञानी थे। १०/१० अनुभव!",name:"सुनील वर्मा",city:"दिल्ली",avatar:"🧔"},
//     ],
//     contactTag: "✦ संपर्क करें ✦",
//     contactTitle: "आज ही अपनी",
//     contactTitleGold: "पवित्र यात्रा बुक करें",
//     contactDesc: "दिव्य अनुभव के लिए तैयार हैं? उज्जैन, ओंकारेश्वर, इंदौर व अन्य स्थानों के अनुकूलित टूर पैकेज के लिए धीरज पाल जी से संपर्क करें।",
//     contactItems: [
//       {icon:"📞",label:"मोबाइल / WhatsApp",value:"6265370030"},
//       {icon:"👤",label:"टूर समन्वयक",value:"धीरज पाल"},
//       {icon:"🏢",label:"संस्था",value:"ध्रुव विहान टूर एंड ट्रेवल्स"},
//       {icon:"📍",label:"मुख्यालय",value:"इंदौर, मध्यप्रदेश"},
//       {icon:"🕐",label:"कार्य समय",value:"प्रातः ६ बजे – रात्रि १० बजे (प्रतिदिन)"},
//       {icon:"✈️",label:"सेवा क्षेत्र",value:"उज्जैन • ओंकारेश्वर • इंदौर"},
//     ],
//     formTitle: "🙏 बुकिंग अनुरोध भेजें",
//     formName:"आपका नाम", formNamePh:"पूरा नाम",
//     formPhone:"मोबाइल नंबर", formPhonePh:"मोबाइल नंबर",
//     formDest:"गंतव्य चुनें", formDestPh:"गंतव्य चुनें...",
//     formDestOpts:["उज्जैन दिवस यात्रा","ओंकारेश्वर स्पेशल","दिव्य त्रिवेणी (उज्जैन + ओंकारेश्वर + इंदौर)","खजराना गणेश मंदिर टूर","कस्टम पैकेज"],
//     formDate:"यात्रा दिनांक",
//     formMsg:"संदेश", formMsgPh:"समूह का आकार, विशेष आवश्यकताएं...",
//     formSubmit:"📲 WhatsApp पर भेजें",
//     formSubmitted:"✓ WhatsApp पर भेजा गया!",
//     formOr:"या सीधे कॉल करें:",
//     footerLinks:["उज्जैन","ओंकारेश्वर","इंदौर","खजराना","पैकेज"],
//     footerContact:"संपर्क: धीरज पाल",
//     footerCopy:"© २०२४ ध्रुव विहान टूर एंड ट्रेवल्स • धीरज पाल • इंदौर, मध्यप्रदेश • सर्वाधिकार सुरक्षित",
//     footerCopy2:"🙏 दिव्य यात्रियों के लिए प्रेम से निर्मित",
//     whatsappMsg: (d) => `नमस्ते धीरज जी! मेरा नाम ${d.name} है (मो: ${d.phone})। मुझे ${d.destination || "आपके टूर पैकेज"} में रुचि है। यात्रा दिनांक: ${d.date || "तय करना है"}। ${d.message}`,
//   },
// };

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Hindi:ital@0;1&family=Hind:wght@300;400;500;600;700&family=Playfair+Display:wght@700;900&family=Rajdhani:wght@500;600;700&display=swap');

  :root {
    --saffron:#FF6B00; --deep-saffron:#E55A00; --gold:#D4A017;
    --bright-gold:#FFD700; --maroon:#6B0F1A; --deep-maroon:#3D0408;
    --cream:#FFF8EE; --light-cream:#FFFDF8; --dark:#1A0A00; --text-muted:#8B6914;
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{font-family:'Hind',sans-serif;background:var(--light-cream);color:var(--dark);overflow-x:hidden;}

  /* LANGUAGE TOGGLE */
  .lang-toggle-wrap{
    position:fixed;top:14px;right:160px;z-index:2000;
  }
  .lang-toggle{
    display:flex;align-items:center;gap:0;
    background:rgba(61,4,8,0.92);
    border:1.5px solid var(--gold);border-radius:30px;
    overflow:hidden;cursor:pointer;
    box-shadow:0 4px 18px rgba(0,0,0,0.3);
  }
  .lang-opt{
    padding:7px 16px;font-family:'Hind',sans-serif;
    font-size:0.82rem;font-weight:700;letter-spacing:1px;
    color:rgba(255,248,238,0.55);border:none;background:transparent;
    cursor:pointer;transition:all 0.3s ease;white-space:nowrap;
  }
  .lang-opt.active{
    background:linear-gradient(135deg,var(--saffron),var(--gold));
    color:white;border-radius:26px;
  }
  .lang-divider{width:1px;height:22px;background:rgba(212,160,23,0.4);}

  /* CALL STRIP */
  .call-strip{
    background:linear-gradient(135deg,var(--saffron),var(--gold));
    padding:9px 40px;text-align:center;
    font-family:'Hind',sans-serif;font-size:0.95rem;font-weight:600;color:white;letter-spacing:0.5px;
    position:relative;z-index:900;
  }
  .call-strip a{color:white;text-decoration:none;font-weight:800;font-size:1.05rem;}

  /* NAVBAR */
  .navbar{
    position:sticky;top:0;left:0;right:0;z-index:1000;
    background:rgba(61,4,8,0.97);backdrop-filter:blur(12px);
    border-bottom:2px solid var(--gold);padding:10px 40px;
    display:flex;align-items:center;justify-content:space-between;
  }
  .nav-logo{font-family:'Tiro Devanagari Hindi',serif;color:var(--bright-gold);font-size:1.4rem;line-height:1.25;}
  .nav-logo span{color:var(--saffron);}
  .nav-sub{font-family:'Rajdhani',sans-serif;font-size:0.6rem;letter-spacing:2.5px;text-transform:uppercase;color:rgba(255,215,0,0.52);display:block;}
  .nav-links{display:flex;gap:22px;list-style:none;}
  .nav-links a{color:var(--cream);font-family:'Hind',sans-serif;font-size:0.93rem;font-weight:500;text-decoration:none;transition:color 0.3s;position:relative;}
  .nav-links a::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:2px;background:var(--gold);transition:width 0.3s;}
  .nav-links a:hover{color:var(--bright-gold);}
  .nav-links a:hover::after{width:100%;}
  .nav-cta{background:linear-gradient(135deg,var(--saffron),var(--gold));color:white;border:none;padding:9px 18px;font-family:'Hind',sans-serif;font-weight:700;font-size:0.88rem;border-radius:4px;cursor:pointer;transition:all 0.25s;}
  .nav-cta:hover{transform:translateY(-2px);box-shadow:0 6px 18px rgba(255,107,0,0.4);}

  /* HERO */
  .hero{
    min-height:100vh;
    background:linear-gradient(135deg,var(--deep-maroon) 0%,var(--maroon) 40%,#8B2500 70%,var(--saffron) 100%);
    position:relative;overflow:hidden;
    display:flex;align-items:center;justify-content:center;
    flex-direction:column;text-align:center;padding:90px 20px 60px;
  }

  /* ANIMATIONS */
  @keyframes spin{from{transform:translate(-50%,-50%) rotate(0deg);}to{transform:translate(-50%,-50%) rotate(360deg);}}
  @keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-14px);}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(34px);}to{opacity:1;transform:translateY(0);}}
  @keyframes fadeDown{from{opacity:0;transform:translateY(-28px);}to{opacity:1;transform:translateY(0);}}
  @keyframes shimmer{0%,100%{opacity:1;}50%{opacity:0.52;}}
  @keyframes pulse{0%,100%{transform:scale(1);}50%{transform:scale(1.06);}}
  @keyframes glow{0%,100%{text-shadow:0 0 16px rgba(255,215,0,0.22);}50%{text-shadow:0 0 38px rgba(255,215,0,0.85),0 0 58px rgba(255,107,0,0.38);}}
  @keyframes borderGlow{0%,100%{box-shadow:0 0 12px rgba(212,160,23,0.22);}50%{box-shadow:0 0 28px rgba(212,160,23,0.7),0 0 48px rgba(255,107,0,0.22);}}
  @keyframes particleFloat{0%{transform:translateY(100vh) rotate(0deg);opacity:0;}10%{opacity:1;}90%{opacity:1;}100%{transform:translateY(-80px) rotate(720deg);opacity:0;}}
  @keyframes langSwitch{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}
  .lang-anim{animation:langSwitch 0.4s ease both;}

  .hero-mandala{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:680px;height:680px;opacity:0.08;animation:spin 60s linear infinite;}
  .hero-mandala2{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:430px;height:430px;opacity:0.06;animation:spin 38s linear infinite reverse;}
  .particle{position:absolute;border-radius:50%;background:radial-gradient(circle,var(--bright-gold),transparent);animation:particleFloat linear infinite;pointer-events:none;}

  .hero-badge{display:inline-block;background:rgba(255,215,0,0.13);border:1px solid rgba(255,215,0,0.4);color:var(--bright-gold);padding:8px 24px;border-radius:30px;font-family:'Hind',sans-serif;font-size:0.88rem;font-weight:600;letter-spacing:1.5px;margin-bottom:20px;animation:fadeDown 1s ease both,shimmer 3s ease infinite 2s;}
  .hero-title{font-family:'Tiro Devanagari Hindi',serif;font-size:clamp(2.4rem,6vw,5.2rem);color:var(--cream);line-height:1.2;margin-bottom:10px;animation:fadeUp 1s ease 0.3s both;}
  .hero-title .accent{color:var(--bright-gold);animation:glow 3s ease infinite;}
  .hero-subtitle{font-family:'Hind',sans-serif;font-size:clamp(1rem,2.2vw,1.55rem);color:rgba(255,248,238,0.78);font-weight:300;font-style:italic;margin-bottom:26px;animation:fadeUp 1s ease 0.6s both;}
  .hero-desc{max-width:570px;margin:0 auto 42px;font-size:1.05rem;color:rgba(255,248,238,0.7);line-height:1.9;font-family:'Hind',sans-serif;animation:fadeUp 1s ease 0.9s both;}
  .hero-buttons{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;animation:fadeUp 1s ease 1.2s both;}
  .btn-primary{background:linear-gradient(135deg,var(--saffron),var(--gold));color:white;padding:14px 36px;border:none;font-family:'Hind',sans-serif;font-weight:700;font-size:0.97rem;letter-spacing:1px;cursor:pointer;border-radius:4px;transition:all 0.3s;box-shadow:0 8px 22px rgba(255,107,0,0.38);}
  .btn-primary:hover{transform:translateY(-3px);box-shadow:0 14px 32px rgba(255,107,0,0.5);}
  .btn-outline{background:transparent;border:2px solid var(--gold);color:var(--bright-gold);padding:12px 36px;font-family:'Hind',sans-serif;font-weight:700;font-size:0.97rem;letter-spacing:1px;cursor:pointer;border-radius:4px;transition:all 0.3s;}
  .btn-outline:hover{background:rgba(212,160,23,0.14);transform:translateY(-3px);}

  .hero-stats{display:flex;gap:40px;justify-content:center;flex-wrap:wrap;margin-top:52px;animation:fadeUp 1s ease 1.5s both;}
  .stat{text-align:center;}
  .stat-num{font-family:'Playfair Display',serif;font-size:2.3rem;font-weight:900;color:var(--bright-gold);display:block;}
  .stat-label{font-family:'Hind',sans-serif;font-size:0.8rem;color:rgba(255,248,238,0.58);}

  /* SECTIONS */
  .section{padding:90px 40px;}
  .section-alt{background:linear-gradient(180deg,var(--cream),#FFF4E0);}
  .section-dark{background:linear-gradient(135deg,var(--deep-maroon),var(--maroon));color:var(--cream);}
  .section-header{text-align:center;margin-bottom:56px;}
  .section-tag{display:inline-block;font-family:'Hind',sans-serif;font-size:0.78rem;letter-spacing:3px;color:var(--saffron);margin-bottom:9px;font-weight:700;}
  .section-title{font-family:'Tiro Devanagari Hindi',serif;font-size:clamp(1.7rem,3.6vw,2.7rem);line-height:1.3;margin-bottom:13px;}
  .section-title .gold{color:var(--gold);}
  .section-desc{font-size:1.05rem;color:var(--text-muted);max-width:520px;margin:0 auto;line-height:1.9;font-family:'Hind',sans-serif;}
  .section-dark .section-desc{color:rgba(255,248,238,0.65);}
  .divider{display:flex;align-items:center;gap:13px;justify-content:center;margin:13px 0;}
  .divider-line{flex:1;max-width:76px;height:1px;background:var(--gold);}
  .divider-icon{color:var(--gold);font-size:1.1rem;}

  /* DESTINATIONS */
  .destinations-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:28px;max-width:1180px;margin:0 auto;}
  .dest-card{border-radius:13px;overflow:hidden;cursor:pointer;transition:transform 0.4s,box-shadow 0.4s;box-shadow:0 10px 36px rgba(0,0,0,0.1);}
  .dest-card:hover{transform:translateY(-8px);box-shadow:0 24px 56px rgba(0,0,0,0.18);}
  .dest-card-img{height:265px;position:relative;overflow:hidden;}
  .dest-card-bg{width:100%;height:100%;transition:transform 0.6s;display:flex;align-items:center;justify-content:center;}
  .dest-card:hover .dest-card-bg{transform:scale(1.06);}
  .dest-emoji{font-size:4.8rem;filter:drop-shadow(0 4px 13px rgba(0,0,0,0.28));animation:float 4s ease infinite;}
  .dest-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.7),transparent 60%);}
  .dest-label{position:absolute;bottom:13px;left:15px;font-family:'Tiro Devanagari Hindi',serif;color:white;font-size:1.45rem;}
  .dest-tag{position:absolute;top:13px;right:13px;background:var(--saffron);color:white;font-family:'Hind',sans-serif;font-size:0.73rem;font-weight:700;letter-spacing:1.3px;padding:5px 13px;border-radius:20px;}
  .dest-body{padding:21px;background:white;}
  .dest-body h3{font-family:'Tiro Devanagari Hindi',serif;font-size:1.15rem;margin-bottom:7px;color:var(--deep-maroon);}
  .dest-body p{color:#666;line-height:1.8;font-size:0.95rem;margin-bottom:13px;font-family:'Hind',sans-serif;}
  .dest-highlights{display:flex;gap:6px;flex-wrap:wrap;}
  .highlight-chip{background:#FFF4E0;color:var(--saffron);font-family:'Hind',sans-serif;font-size:0.76rem;font-weight:600;padding:4px 11px;border-radius:20px;border:1px solid rgba(255,107,0,0.2);}

  /* KHAJRANA */
  .places-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(265px,1fr));gap:20px;max-width:1180px;margin:0 auto;}
  .place-card{background:rgba(255,255,255,0.04);border:1px solid rgba(212,160,23,0.22);border-radius:12px;padding:24px 20px;transition:all 0.4s;position:relative;overflow:hidden;}
  .place-card::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(212,160,23,0.08),transparent);opacity:0;transition:opacity 0.3s;}
  .place-card:hover{transform:translateY(-5px);border-color:var(--gold);animation:borderGlow 2s ease infinite;}
  .place-card:hover::before{opacity:1;}
  .place-num{font-family:'Playfair Display',serif;font-size:3rem;font-weight:900;color:rgba(212,160,23,0.17);line-height:1;margin-bottom:5px;}
  .place-icon{font-size:1.8rem;margin-bottom:9px;display:block;}
  .place-name{font-family:'Tiro Devanagari Hindi',serif;font-size:1.1rem;color:var(--bright-gold);margin-bottom:6px;}
  .place-desc{color:rgba(255,248,238,0.6);font-size:0.9rem;line-height:1.75;font-family:'Hind',sans-serif;}

  /* PACKAGES */
  .packages-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:28px;max-width:1080px;margin:0 auto;}
  .pkg-card{background:white;border-radius:15px;padding:36px 28px;text-align:center;position:relative;transition:all 0.4s;box-shadow:0 10px 36px rgba(0,0,0,0.08);border:2px solid transparent;}
  .pkg-card.featured{border-color:var(--gold);background:linear-gradient(135deg,var(--deep-maroon),var(--maroon));color:var(--cream);animation:borderGlow 3s ease infinite;transform:scale(1.02);}
  .pkg-card:hover{transform:translateY(-6px) scale(1.01);box-shadow:0 20px 55px rgba(0,0,0,0.14);}
  .pkg-card.featured:hover{transform:translateY(-6px) scale(1.03);}
  .pkg-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,var(--saffron),var(--gold));color:white;padding:5px 17px;border-radius:20px;font-family:'Hind',sans-serif;font-size:0.74rem;font-weight:700;letter-spacing:1.5px;}
  .pkg-icon{font-size:2.7rem;margin-bottom:13px;animation:float 3s ease infinite;}
  .pkg-title{font-family:'Tiro Devanagari Hindi',serif;font-size:1.4rem;margin-bottom:6px;color:var(--deep-maroon);}
  .pkg-card.featured .pkg-title{color:var(--bright-gold);}
  .pkg-price{font-family:'Hind',sans-serif;font-size:0.97rem;font-weight:600;color:var(--saffron);margin-bottom:20px;}
  .pkg-card.featured .pkg-price{color:rgba(255,248,238,0.68);}
  .pkg-features{list-style:none;margin-bottom:26px;text-align:left;}
  .pkg-features li{padding:6px 0;border-bottom:1px solid rgba(0,0,0,0.06);font-size:0.91rem;display:flex;align-items:center;gap:8px;font-family:'Hind',sans-serif;}
  .pkg-card.featured .pkg-features li{border-color:rgba(255,248,238,0.1);color:rgba(255,248,238,0.82);}
  .pkg-features li::before{content:'✦';color:var(--gold);font-size:0.62rem;flex-shrink:0;}

  /* GALLERY */
  .gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:13px;max-width:1080px;margin:0 auto;}
  .gallery-item{border-radius:11px;overflow:hidden;transition:transform 0.4s;position:relative;}
  .gallery-item:hover{transform:scale(1.03);z-index:2;}
  .gallery-item:nth-child(1),.gallery-item:nth-child(4){grid-column:span 2;}
  .gallery-inner{height:205px;display:flex;align-items:center;justify-content:center;font-size:3.6rem;transition:transform 0.5s;}
  .gallery-item:hover .gallery-inner{transform:scale(1.08);}
  .gallery-caption{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to top,rgba(0,0,0,0.8),transparent);color:white;padding:16px 13px 10px;font-family:'Hind',sans-serif;font-size:0.86rem;font-weight:600;opacity:0;transition:opacity 0.3s;}
  .gallery-item:hover .gallery-caption{opacity:1;}

  /* WHY */
  .why-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(205px,1fr));gap:26px;max-width:1080px;margin:0 auto;}
  .why-card{text-align:center;padding:28px 16px;}
  .why-icon{font-size:2.7rem;margin-bottom:13px;display:block;animation:float 4s ease infinite;}
  .why-title{font-family:'Tiro Devanagari Hindi',serif;font-size:1.08rem;margin-bottom:8px;color:var(--deep-maroon);}
  .why-desc{color:var(--text-muted);font-size:0.91rem;line-height:1.78;font-family:'Hind',sans-serif;}

  /* TESTIMONIALS */
  .testimonials-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;max-width:1080px;margin:0 auto;}
  .testimonial-card{background:white;border-radius:11px;padding:28px;border-left:4px solid var(--gold);box-shadow:0 8px 26px rgba(0,0,0,0.07);transition:transform 0.3s;}
  .testimonial-card:hover{transform:translateY(-4px);}
  .stars{color:var(--gold);font-size:0.97rem;letter-spacing:2px;margin-bottom:13px;}
  .testimonial-text{font-size:1rem;line-height:1.85;color:#444;margin-bottom:17px;font-style:italic;font-family:'Hind',sans-serif;}
  .testimonial-author{display:flex;align-items:center;gap:11px;}
  .author-avatar{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,var(--saffron),var(--maroon));display:flex;align-items:center;justify-content:center;font-size:1.2rem;}
  .author-name{font-family:'Hind',sans-serif;font-weight:700;font-size:0.95rem;color:var(--deep-maroon);}
  .author-city{font-size:0.8rem;color:var(--text-muted);font-family:'Hind',sans-serif;}

  /* CONTACT */
  .contact-section{background:linear-gradient(135deg,var(--deep-maroon) 0%,#5C0A0A 50%,var(--maroon) 100%);padding:90px 40px;color:var(--cream);position:relative;overflow:hidden;}
  .contact-inner{max-width:1080px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:68px;align-items:center;}
  .contact-info h2{font-family:'Tiro Devanagari Hindi',serif;font-size:clamp(1.7rem,3vw,2.5rem);margin-bottom:13px;}
  .contact-info h2 span{color:var(--bright-gold);}
  .contact-info p{color:rgba(255,248,238,0.7);font-size:1.02rem;line-height:1.88;margin-bottom:34px;font-family:'Hind',sans-serif;}
  .contact-item{display:flex;align-items:center;gap:13px;margin-bottom:20px;}
  .contact-icon{width:46px;height:46px;background:rgba(212,160,23,0.13);border:1px solid rgba(212,160,23,0.3);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0;transition:all 0.3s;}
  .contact-item:hover .contact-icon{background:rgba(212,160,23,0.27);animation:pulse 1s ease infinite;}
  .contact-label{font-family:'Hind',sans-serif;font-size:0.74rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold);margin-bottom:2px;}
  .contact-value{font-size:1.02rem;font-weight:600;color:var(--cream);font-family:'Hind',sans-serif;}
  .contact-form{background:rgba(255,255,255,0.05);border:1px solid rgba(212,160,23,0.2);border-radius:15px;padding:36px;}
  .contact-form h3{font-family:'Tiro Devanagari Hindi',serif;font-size:1.45rem;color:var(--bright-gold);margin-bottom:24px;}
  .form-group{margin-bottom:16px;}
  .form-label{display:block;font-family:'Hind',sans-serif;font-size:0.78rem;letter-spacing:1.2px;color:rgba(255,248,238,0.55);margin-bottom:6px;}
  .form-input,.form-select,.form-textarea{width:100%;background:rgba(255,255,255,0.07);border:1px solid rgba(212,160,23,0.23);border-radius:7px;padding:12px 14px;color:var(--cream);font-family:'Hind',sans-serif;font-size:0.95rem;transition:border-color 0.3s,box-shadow 0.3s;outline:none;}
  .form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--gold);box-shadow:0 0 13px rgba(212,160,23,0.18);}
  .form-select option{background:var(--deep-maroon);}
  .form-textarea{resize:vertical;min-height:90px;}
  .form-row{display:grid;grid-template-columns:1fr 1fr;gap:13px;}
  .submit-btn{width:100%;background:linear-gradient(135deg,var(--saffron),var(--gold));color:white;border:none;padding:14px;font-family:'Hind',sans-serif;font-weight:700;font-size:0.97rem;letter-spacing:1.5px;cursor:pointer;border-radius:7px;transition:all 0.3s;margin-top:5px;}
  .submit-btn:hover{transform:translateY(-3px);box-shadow:0 11px 30px rgba(255,107,0,0.38);}

  /* FOOTER */
  .footer{background:var(--deep-maroon);color:rgba(255,248,238,0.55);padding:36px 40px 20px;border-top:1px solid rgba(212,160,23,0.2);}
  .footer-inner{max-width:1080px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:20px;}
  .footer-logo{font-family:'Tiro Devanagari Hindi',serif;font-size:1.25rem;color:var(--bright-gold);}
  .footer-logo span{color:var(--saffron);}
  .footer-links{display:flex;gap:20px;flex-wrap:wrap;}
  .footer-links a{color:rgba(255,248,238,0.45);text-decoration:none;font-family:'Hind',sans-serif;font-size:0.86rem;transition:color 0.3s;}
  .footer-links a:hover{color:var(--gold);}
  .footer-copy{width:100%;text-align:center;margin-top:20px;padding-top:20px;border-top:1px solid rgba(212,160,23,0.1);font-size:0.82rem;font-family:'Hind',sans-serif;}

  /* FABs */
  .whatsapp-fab{position:fixed;bottom:90px;right:28px;z-index:999;width:52px;height:52px;background:#25D366;border:none;border-radius:50%;color:white;font-size:1.65rem;cursor:pointer;box-shadow:0 6px 18px rgba(37,211,102,0.38);transition:all 0.3s;display:flex;align-items:center;justify-content:center;animation:pulse 2.2s ease infinite;}
  .whatsapp-fab:hover{transform:scale(1.12);}
  .scroll-top{position:fixed;bottom:28px;right:28px;z-index:999;width:46px;height:46px;background:linear-gradient(135deg,var(--saffron),var(--gold));border:none;border-radius:50%;color:white;font-size:1.25rem;cursor:pointer;box-shadow:0 6px 18px rgba(255,107,0,0.38);transition:all 0.3s;display:flex;align-items:center;justify-content:center;}
  .scroll-top:hover{transform:translateY(-4px);}

  @media(max-width:768px){
    .navbar{padding:10px 14px;}
    .nav-links{display:none;}
    .lang-toggle-wrap{top:10px;right:10px;}
    .lang-opt{padding:6px 11px;font-size:0.74rem;}
    .section{padding:60px 16px;}
    .contact-inner{grid-template-columns:1fr;gap:34px;}
    .gallery-grid{grid-template-columns:1fr 1fr;}
    .gallery-item:nth-child(1),.gallery-item:nth-child(4){grid-column:span 1;}
    .footer-inner{flex-direction:column;text-align:center;}
    .form-row{grid-template-columns:1fr;}
    .hero-stats{gap:22px;}
    .call-strip{padding:8px 14px;font-size:0.83rem;}
  }
`;

const particles = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  size: Math.random() * 5 + 3,
  left: Math.random() * 100,
  delay: Math.random() * 15,
  duration: Math.random() * 12 + 10,
}));


export default function DhruvViihaanTours() {

 const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/dv-travelers") {
      document.body.classList.add("hide-wa");
    } else {
      document.body.classList.remove("hide-wa");
    }
  }, [location.pathname]);
    
  const [lang, setLang] = useState("en");
  const [animKey, setAnimKey] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destination: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const t = content[lang];

  const switchLang = (l) => {
    if (l === lang) return;
    setLang(l);
    setAnimKey((k) => k + 1);
  };

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const whatsappMsg = (data) => {
    console.log("Generating WhatsApp message with data:", data);
    return `Hello Dheeraj ji,
    My Name is ${data.name}, 
    Mobile Number is : ${data.phone}),
    Travel Date: ${data.date}.
    I am planning to : ${data.destination ? `visit ${data.destination}` : "travel with you"}.
    message: ${data.message || "No additional message provided."}
    Thank you.`;
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone) return;
    const msg = whatsappMsg(formData);
    console.log("WhatsApp Message:", msg);
    const phoneNumber = "918839102688";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappURL, "_blank");
    // Reset form
    setFormData({
      name: "",
      phone: "",
      destination: "",
      date: "",
      message: "",
    });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div>
      <style>{CSS}</style>

      {/* ── LANGUAGE TOGGLE ── */}
      <div className="lang-toggle-wrap">
        <div className="lang-toggle">
          <button
            className={`lang-opt${lang === "en" ? " active" : ""}`}
            onClick={() => switchLang("en")}
          >
            🇬🇧 EN
          </button>
          <div className="lang-divider" />
          <button
            className={`lang-opt${lang === "hi" ? " active" : ""}`}
            onClick={() => switchLang("hi")}
          >
            🇮🇳 हिंदी
          </button>
        </div>
      </div>

      {/* ── CALL STRIP ── */}
      <div className="call-strip">
        {t.callStrip}&nbsp;<a href="tel:6265370030">6265370030</a>&nbsp;
        {t.callStrip2}
      </div>

      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <div>
          <div className="nav-logo">
            <span>{t.brandMain}</span> {t.brandSub}
          </div>
          <span className="nav-sub">{t.brandSubScript}</span>
        </div>
        <ul className="nav-links">
          {t.navLinks.map((label, i) => (
            <li key={i}>
              <a
                href={`#${t.navIds[i]}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(t.navIds[i]);
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="nav-cta"
          onClick={() => window.open("tel:6265370030")}
        >
          {t.navCta}
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" id="home">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
        <svg className="hero-mandala" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="190" stroke="#D4A017" strokeWidth="1" />
          <circle
            cx="200"
            cy="200"
            r="155"
            stroke="#D4A017"
            strokeWidth="0.5"
          />
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={i}
              x1="200"
              y1="12"
              x2="200"
              y2="52"
              stroke="#D4A017"
              strokeWidth="1"
              transform={`rotate(${i * 15} 200 200)`}
            />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <ellipse
              key={i}
              cx="200"
              cy="78"
              rx="20"
              ry="40"
              fill="none"
              stroke="#D4A017"
              strokeWidth="0.5"
              transform={`rotate(${i * 30} 200 200)`}
            />
          ))}
        </svg>
        <svg className="hero-mandala2" viewBox="0 0 400 400" fill="none">
          {Array.from({ length: 8 }).map((_, i) => (
            <rect
              key={i}
              x="158"
              y="38"
              width="84"
              height="84"
              rx="10"
              fill="none"
              stroke="#FF6B00"
              strokeWidth="1"
              transform={`rotate(${i * 45} 200 200)`}
            />
          ))}
        </svg>

        <div key={`badge-${animKey}`} className="hero-badge lang-anim">
          {t.heroBadge}
        </div>
        <h1 key={`title-${animKey}`} className="hero-title lang-anim">
          <span className="accent">{t.heroTitle1}</span>
          <br />
          {t.heroTitle2}
        </h1>
        <p key={`sub-${animKey}`} className="hero-subtitle lang-anim">
          {t.heroSubtitle}
        </p>
        <p key={`desc-${animKey}`} className="hero-desc lang-anim">
          {t.heroDesc}
        </p>
        <div key={`btns-${animKey}`} className="hero-buttons lang-anim">
          <button className="btn-primary" onClick={() => scrollTo("contact")}>
            {t.heroBtnPrimary}
          </button>
          <button
            className="btn-outline"
            onClick={() => scrollTo("destinations")}
          >
            {t.heroBtnOutline}
          </button>
        </div>
        <div key={`stats-${animKey}`} className="hero-stats lang-anim">
          {t.stats.map(([num, label], i) => (
            <div key={i} className="stat">
              <span className="stat-num">{num}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── DESTINATIONS ── */}
      <section className="section section-alt" id="destinations">
        <div className="section-header">
          <div className="section-tag">{t.destTag}</div>
          <h2 className="section-title">
            {t.destTitle} <span className="gold">{t.destTitleGold}</span>
          </h2>
          <div className="divider">
            <div className="divider-line" />
            <span className="divider-icon">🕉️</span>
            <div className="divider-line" />
          </div>
          <p className="section-desc">{t.destDesc}</p>
        </div>
        <div className="destinations-grid">
          {t.destinations.map((d, i) => (
            <div key={i} className="dest-card">
              <div className="dest-card-img">
                <div className="dest-card-bg" style={{ background: d.bg }}>
                  <div className="dest-emoji">{d.emoji}</div>
                </div>
                <div className="dest-overlay" />
                <div className="dest-label">{d.label}</div>
                <div className="dest-tag">{d.tag}</div>
              </div>
              <div className="dest-body">
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
                <div className="dest-highlights">
                  {d.highlights.map((h, j) => (
                    <span key={j} className="highlight-chip">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── KHAJRANA TOP 10 ── */}
      <section className="section section-dark" id="khajrana">
        <div className="section-header">
          <div className="section-tag" style={{ color: "#FFD700" }}>
            {t.khajranaTag}
          </div>
          <h2 className="section-title" style={{ color: "#FFF8EE" }}>
            {t.khajranaTitle}{" "}
            <span className="gold">{t.khajranaTitleGold}</span>
          </h2>
          <div className="divider">
            <div
              className="divider-line"
              style={{ background: "rgba(212,160,23,0.4)" }}
            />
            <span className="divider-icon">🙏</span>
            <div
              className="divider-line"
              style={{ background: "rgba(212,160,23,0.4)" }}
            />
          </div>
          <p className="section-desc">{t.khajranaDesc}</p>
        </div>
        <div className="places-grid">
          {t.places.map((p, i) => (
            <div key={i} className="place-card">
              <div className="place-num">{p.num}</div>
              <span className="place-icon">{p.icon}</span>
              <div className="place-name">{p.name}</div>
              <div className="place-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section section-alt" id="why">
        <div className="section-header">
          <div className="section-tag">{t.whyTag}</div>
          <h2 className="section-title">
            {t.whyTitle} <span className="gold">{t.whyTitleGold}</span>
          </h2>
          <div className="divider">
            <div className="divider-line" />
            <span className="divider-icon">⭐</span>
            <div className="divider-line" />
          </div>
        </div>
        <div className="why-grid">
          {t.why.map((w, i) => (
            <div key={i} className="why-card">
              <span className="why-icon">{w.icon}</span>
              <div className="why-title">{w.title}</div>
              <div className="why-desc">{w.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section
        className="section"
        id="packages"
        style={{ background: "#FFF8EE" }}
      >
        <div className="section-header">
          <div className="section-tag">{t.pkgTag}</div>
          <h2 className="section-title">
            {t.pkgTitle} <span className="gold">{t.pkgTitleGold}</span>
          </h2>
          <div className="divider">
            <div className="divider-line" />
            <span className="divider-icon">🗺️</span>
            <div className="divider-line" />
          </div>
        </div>
        <div className="packages-grid">
          {t.packages.map((pkg, i) => (
            <div
              key={i}
              className={`pkg-card${pkg.featured ? " featured" : ""}`}
            >
              {pkg.badge && <div className="pkg-badge">{pkg.badge}</div>}
              <div className="pkg-icon">{pkg.icon}</div>
              <div className="pkg-title">{pkg.title}</div>
              <div className="pkg-price">{pkg.price}</div>
              <ul className="pkg-features">
                {pkg.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <button
                className="btn-primary"
                style={{ width: "100%" }}
                onClick={() => scrollTo("contact")}
              >
                {t.pkgBookBtn}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="section section-alt" id="gallery">
        <div className="section-header">
          <div className="section-tag">{t.galleryTag}</div>
          <h2 className="section-title">
            {t.galleryTitle} <span className="gold">{t.galleryTitleGold}</span>
          </h2>
          <div className="divider">
            <div className="divider-line" />
            <span className="divider-icon">📷</span>
            <div className="divider-line" />
          </div>
        </div>
        <div className="gallery-grid">
          {t.gallery.map((g, i) => (
            <div key={i} className="gallery-item">
              <div className="gallery-inner" style={{ background: g.bg }}>
                {g.emoji}
              </div>
              <div className="gallery-caption">{g.caption}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" style={{ background: "#FFF4E0" }}>
        <div className="section-header">
          <div className="section-tag">{t.testiTag}</div>
          <h2 className="section-title">
            {t.testiTitle} <span className="gold">{t.testiTitleGold}</span>
          </h2>
          <div className="divider">
            <div className="divider-line" />
            <span className="divider-icon">💬</span>
            <div className="divider-line" />
          </div>
        </div>
        <div className="testimonials-grid">
          {t.testimonials.map((te, i) => (
            <div key={i} className="testimonial-card">
              <div className="stars">{"★".repeat(te.stars)}</div>
              <p className="testimonial-text">"{te.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{te.avatar}</div>
                <div>
                  <div className="author-name">{te.name}</div>
                  <div className="author-city">{te.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-info">
            <div
              className="section-tag"
              style={{ color: "#FFD700", textAlign: "left" }}
            >
              {t.contactTag}
            </div>
            <h2>
              {t.contactTitle} <span>{t.contactTitleGold}</span>
            </h2>
            <p>{t.contactDesc}</p>
            {t.contactItems.map((c, i) => (
              <div key={i} className="contact-item">
                <div className="contact-icon">{c.icon}</div>
                <div>
                  <div className="contact-label">{c.label}</div>
                  <div className="contact-value">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="contact-form">
            <h3>{t.formTitle}</h3>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">{t.formName}</label>
                <input
                  className="form-input"
                  placeholder={t.formNamePh}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label className="form-label">{t.formPhone}</label>
                <input
                  className="form-input"
                  placeholder={t.formPhonePh}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">{t.formDest}</label>
              <select
                className="form-select"
                value={formData.destination}
                onChange={(e) =>
                  setFormData({ ...formData, destination: e.target.value })
                }
              >
                <option value="">{t.formDestPh}</option>
                {t.formDestOpts.map((o, i) => (
                  <option key={i}>{o}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">{t.formDate}</label>
              <input
                className="form-input"
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label className="form-label">{t.formMsg}</label>
              <textarea
                className="form-textarea"
                placeholder={t.formMsgPh}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button className="submit-btn" onClick={handleSubmit}>
              {submitted ? t.formSubmitted : t.formSubmit}
            </button>
            <div
              style={{
                marginTop: 11,
                textAlign: "center",
                color: "rgba(255,248,238,0.45)",
                fontSize: "0.82rem",
                fontFamily: "'Hind',sans-serif",
              }}
            >
              {t.formOr}&nbsp;
              <a
                href="tel:6265370030"
                style={{
                  color: "#FFD700",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                6265370030
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">
              <span>{t.brandMain}</span> {t.brandSub}
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "rgba(255,248,238,0.38)",
                fontFamily: "'Hind',sans-serif",
                marginTop: 3,
              }}
            >
              {t.brandSubScript}
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                color: "#D4A017",
                fontFamily: "'Hind',sans-serif",
                fontSize: "0.81rem",
                marginBottom: 3,
              }}
            >
              {t.footerContact}
            </div>
            <a
              href="tel:6265370030"
              style={{
                color: "#FFD700",
                fontFamily: "'Playfair Display',serif",
                fontSize: "1.15rem",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              📞 6265370030
            </a>
          </div>
          <div className="footer-links">
            {t.footerLinks.map((l, i) => (
              <a
                key={i}
                href="#destinations"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("destinations");
                }}
              >
                {l}
              </a>
            ))}
          </div>
          <div className="footer-copy">
            {t.footerCopy}
            <br />
            <span style={{ fontSize: "0.76rem", opacity: 0.42 }}>
              {t.footerCopy2}
            </span>
          </div>
        </div>
      </footer>

      {/* ── FABs ── */}
      <button
        className="whatsapp-fab"
        title="WhatsApp"
        onClick={() => window.open("https://wa.me/916265370030", "_blank")}
      >
        💬
      </button>
      
      {/* <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button> */}
    </div>
  );
}
