export type Language = 'en' | 'kn';

export const content = {
  en: {
    topbar: { phone: "+91 99000 00000", email: "sales@agricorp.com", news: "⚡ MONSOON DEAL: Free Service Kit with every Honda Weeder!" },
    nav: { home: "Home", about: "About", inventory: "Inventory", process: "How to Buy", contact: "Contact", lang: "ಕನ್ನಡ" },
    hero: {
      label: "Authorized Multi-Brand Dealership",
      title: "The Powerhouse of Indian Agriculture.",
      desc: "We are the authorized sales & service partners for India's top agricultural brands. Get genuine machines, original spare parts, and government subsidy support.",
      cta_main: "View Catalog",
      cta_sub: "Visit Showroom",
    },
    brands: ["Honda India", "Stihl", "VST Shakti", "KisanKraft", "Briggs & Stratton", "Husqvarna", "Oleo-Mac"],
    about: {
      title: "15 Years of Trust",
      subtitle: "More than just a dealer.",
      desc: "Started in 2009, AgriCorp has grown from a small shop in Hassan to a multi-district machinery powerhouse. We don't manufacture; we curate the best machines from around the world for Indian farmers.",
      points: ["Authorized Service Center", "Genuine Spare Parts Hub", "Govt. Subsidy Assistance"]
    },
    categories: [
      { id: "1", title: "Inter-Cultivation", subtitle: "Weeders & Tillers", img: "https://images.unsplash.com/photo-1592983794396-d98c17de2995?q=80&w=1000&auto=format&fit=crop" },
      { id: "2", title: "Plant Protection", subtitle: "Sprayers & Foggers", img: "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?q=80&w=1000&auto=format&fit=crop" },
      { id: "3", title: "Harvesting", subtitle: "Brush Cutters", img: "https://images.unsplash.com/photo-1622345574591-64d858348325?q=80&w=1000&auto=format&fit=crop" },
      { id: "4", title: "Water Solutions", subtitle: "Pumps & Pipes", img: "https://images.unsplash.com/photo-1574689049743-1e9c20a4025b?q=80&w=1000&auto=format&fit=crop" },
    ],
    testimonials: [
      { name: "Ramesh Gowda", place: "Hassan", text: "I bought a Honda Weeder here. The price was ₹5000 less than Bangalore dealers." },
      { name: "Suresh Patil", place: "Shimoga", text: "Best service center. They fixed my Brush Cutter in 2 hours." },
      { name: "Manjunath", place: "Mandya", text: "They helped me get the SMAM subsidy approved. Very helpful staff." }
    ],
    contact: {
      title: "Get The Best Price",
      form: { name: "Your Name", phone: "Mobile Number", place: "District", btn: "Check Availability" }
    },
    stats: [
       { label: "Brands", value: "25+" },
       { label: "Customers", value: "12k+" },
       { label: "Years", value: "15+" },
    ]
  },
  kn: {
    topbar: { phone: "+91 99000 00000", email: "sales@agricorp.com", news: "⚡ ಮುಂಗಾರು ಆಫರ್: ಪ್ರತಿ ಹೋಂಡಾ ವೀಡರ್ ಜೊತೆ ಸರ್ವಿಸ್ ಕಿಟ್ ಉಚಿತ!" },
    nav: { home: "ಮುಖಪುಟ", about: "ನಮ್ಮ ಬಗ್ಗೆ", inventory: "ಯಂತ್ರಗಳು", process: "ಖರೀದಿ ವಿಧಾನ", contact: "ಸಂಪರ್ಕ", lang: "English" },
    hero: {
      label: "ಅಧಿಕೃತ ಮಲ್ಟಿ-ಬ್ರಾಂಡ್ ಡೀಲರ್",
      title: "ಭಾರತೀಯ ಕೃಷಿಯ ಶಕ್ತಿ ಕೇಂದ್ರ.",
      desc: "ನಾವು ಭಾರತದ ಪ್ರಮುಖ ಕೃಷಿ ಬ್ರಾಂಡ್‌ಗಳ ಅಧಿಕೃತ ಪಾಲುದಾರರು. ಅಸಲಿ ಯಂತ್ರಗಳು, ಒರಿಜಿನಲ್ ಬಿಡಿಭಾಗಗಳು ಮತ್ತು ಸಬ್ಸಿಡಿ ಸೌಲಭ್ಯ ಒಂದೇ ಕಡೆ.",
      cta_main: "ಕ್ಯಾಟಲಾಗ್ ನೋಡಿ",
      cta_sub: "ಶೋರೂಮ್ ಭೇಟಿ ನೀಡಿ",
    },
    brands: ["ಹೋಂಡಾ ಇಂಡಿಯಾ", "ಸ್ಟಿಲ್", "ವಿಎಸ್ಟಿ ಶಕ್ತಿ", "ಕಿಸಾನ್‌ಕ್ರಾಫ್ಟ್", "ಬ್ರಿಗ್ಸ್ & ಸ್ಟ್ರಾಟನ್", "ಹುಸ್ಕ್ವಾರ್ನಾ", "ಓಲಿಯೋ-ಮ್ಯಾಕ್"],
    about: {
      title: "15 ವರ್ಷಗಳ ನಂಬಿಕೆ",
      subtitle: "ಕೇವಲ ಡೀಲರ್ ಅಲ್ಲ, ರೈತ ಮಿತ್ರ.",
      desc: "2009 ರಲ್ಲಿ ಹಾಸನದಲ್ಲಿ ಪ್ರಾರಂಭವಾದ ಅಗ್ರಿಕಾರ್ಪ್ ಇಂದು ದೊಡ್ಡ ಶಕ್ತಿ ಕೇಂದ್ರವಾಗಿದೆ. ನಾವು ಯಂತ್ರಗಳನ್ನು ತಯಾರಿಸುವುದಿಲ್ಲ; ವಿಶ್ವದ ಅತ್ಯುತ್ತಮ ಯಂತ್ರಗಳನ್ನು ರೈತರಿಗಾಗಿ ತರುತ್ತೇವೆ.",
      points: ["ಅಧಿಕೃತ ಸೇವಾ ಕೇಂದ್ರ", "ಅಸಲಿ ಬಿಡಿಭಾಗಗಳು", "ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿ ಸಹಾಯ"]
    },
    categories: [
      { id: "1", title: "ಅಂತರ ಬೇಸಾಯ", subtitle: "ವೀಡರ್ & ಟಿಲ್ಲರ್", img: "https://images.unsplash.com/photo-1592983794396-d98c17de2995?q=80&w=1000&auto=format&fit=crop" },
      { id: "2", title: "ಬೆಳೆ ರಕ್ಷಣೆ", subtitle: "ಸ್ಪ್ರೇಯರ್ & ಫಾಗರ್", img: "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?q=80&w=1000&auto=format&fit=crop" },
      { id: "3", title: "ಬೆಳೆ ಕಟಾವು", subtitle: "ಬ್ರಷ್ ಕಟ್ಟರ್", img: "https://images.unsplash.com/photo-1622345574591-64d858348325?q=80&w=1000&auto=format&fit=crop" },
      { id: "4", title: "ನೀರಾವರಿ", subtitle: "ಪಂಪ್ & ಪೈಪ್", img: "https://images.unsplash.com/photo-1574689049743-1e9c20a4025b?q=80&w=1000&auto=format&fit=crop" },
    ],
    testimonials: [
      { name: "ರಮೇಶ್ ಗೌಡ", place: "ಹಾಸನ", text: "ನಾನು ಇಲ್ಲಿ ಹೋಂಡಾ ವೀಡರ್ ಖರೀದಿಸಿದೆ. ಬೆಂಗಳೂರು ಡೀಲರ್‌ಗಳಿಗಿಂತ ಬೆಲೆ ₹5000 ಕಡಿಮೆ." },
      { name: "ಸುರೇಶ್ ಪಾಟೀಲ್", place: "ಶಿವಮೊಗ್ಗ", text: "ಅತ್ಯುತ್ತಮ ಸರ್ವಿಸ್ ಸೆಂಟರ್. ನನ್ನ ಬ್ರಷ್ ಕಟ್ಟರ್ ಅನ್ನು 2 ಗಂಟೆಯಲ್ಲಿ ರಿಪೇರಿ ಮಾಡಿಕೊಟ್ಟರು." },
      { name: "ಮಂಜುನಾಥ್", place: "ಮಂಡ್ಯ", text: "SMAM ಸಬ್ಸಿಡಿ ಪಡೆಯಲು ಅವರು ನನಗೆ ತುಂಬಾ ಸಹಾಯ ಮಾಡಿದರು." }
    ],
    contact: {
      title: "ಬೆಲೆ ತಿಳಿಯಿರಿ",
      form: { name: "ಹೆಸರು", phone: "ಮೊಬೈಲ್", place: "ಊರು", btn: "ವಿಚಾರಿಸಿ" }
    },
    stats: [
       { label: "ಬ್ರಾಂಡ್‌ಗಳು", value: "25+" },
       { label: "ಗ್ರಾಹಕರು", value: "12k+" },
       { label: "ವರ್ಷಗಳು", value: "15+" },
    ]
  }
};