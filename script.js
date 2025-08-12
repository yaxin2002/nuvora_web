// Simple i18n + ?lang=en|zh
const dict = {
  zh:{
    "nav_features":"功能","nav_demo":"Demo","nav_contact":"聯絡",
    "eyebrow":"一句話，開始健康管理",
    "hero_title":"Nuvora｜一站式 AI 語音健康助理",
    "hero_sub":"用「說的」就能記錄飲水、睡眠、心情與日常健康事項；Nuvora 會自動幫你整理、提醒，讓維持好習慣變容易。",
    "cta_demo":"觀看 Demo","cta_contact":"聯絡我",
    "sec_value_title":"你能得到什麼",
    "v1_t":"說一說就記錄","v1_d":"不必找欄位、不必學操作，開口就完成。",
    "v2_t":"自動整理成列表與圖表","v2_d":"今天做了什麼、還能做什麼，一眼看懂。",
    "v3_t":"貼心提醒","v3_d":"在你最容易做到的時刻，給剛剛好的提示。",
    "v4_t":"個人化建議","v4_d":"依你的步調，給可行的小步驟（持續推出）。",
    "v5_t":"雙語友善","v5_d":"中文／英文介面切換，出國或國際合作都能用。",
    "sec_audience_title":"適用對象",
    "aud1_t":"忙碌的上班族與學生","aud1_d":"快速記錄、穩定習慣。",
    "aud2_t":"長者與照護者","aud2_d":"用語音就能完成紀錄，家人更好協助。",
    "aud3_t":"關注健康的你","aud3_d":"需要溫和但持續的推進力。",
    "sec_why_title":"為什麼選擇 Nuvora",
    "why1_t":"零門檻","why1_d":"自然語句就能使用。",
    "why2_t":"不打擾","why2_d":"提醒精簡，不騷擾。",
    "why3_t":"重視隱私","why3_d":"資料優先存放在你的裝置，雲端將採加密與可控同步。",
    "sec_next_title":"近期與接下來",
    "next1_t":"近期","next1_d":"更聰明的每日總結與待辦清單，知道今天做到幾分。",
    "next2_t":"下一步","next2_d":"拍照記錄飲食，估算份量與營養。",
    "next3_t":"之後","next3_d":"整合 Apple Health／Google Fit，資料一次看完。",
    "next4_t":"企業／團隊版","next4_d":"匿名化儀表板，協助員工健康促進與 ESG（洽談中）。",
    "faq1_q":"Nuvora 會取代醫療建議嗎？","faq1_a":"不會。Nuvora 協助你培養習慣與自我管理，不提供醫療診斷；有任何不適請洽專業醫療人員。",
    "faq2_q":"什麼時候可以下載？","faq2_a":"目前開放 Demo 與體驗名單；想第一時間收到通知，歡迎來信。",
    "about_title":"關於我","about_body":"朱雅歆（Ya Xin Zhu / Vesper）｜Nuvora 創始人・獨立開發者。相信「健康管理應該是友善、可持續的」。Nuvora 的使命，是把複雜留在後台，把信心留給你。",
    "contact_title":"聯絡方式","contact_body":"商務／合作／投資意向，歡迎來信："
  },
  en:{
    "nav_features":"Features","nav_demo":"Demo","nav_contact":"Contact",
    "eyebrow":"One sentence to start your health journey",
    "hero_title":"Nuvora · Voice-first AI Health Companion",
    "hero_sub":"Speak to log water, sleep, mood and daily health notes. Nuvora organizes them into clear tasks and trends so building habits becomes easier.",
    "cta_demo":"Watch Demo","cta_contact":"Contact",
    "sec_value_title":"What you get",
    "v1_t":"Hands-free logging","v1_d":"No menus to hunt. Just say it—done.",
    "v2_t":"Auto lists & charts","v2_d":"See what you did and what’s next at a glance.",
    "v3_t":"Gentle reminders","v3_d":"Prompts arrive when you’re most likely to act.",
    "v4_t":"Personalized nudges","v4_d":"Small, doable steps tailored to your pace (rolling out).",
    "v5_t":"Bilingual friendly","v5_d":"Switch between English and Chinese for travel and global work.",
    "sec_audience_title":"Who it’s for",
    "aud1_t":"Busy professionals & students","aud1_d":"Log quickly, keep habits steady.",
    "aud2_t":"Seniors & caregivers","aud2_d":"Use your voice to record; families can assist more easily.",
    "aud3_t":"Anyone health-minded","aud3_d":"Get a gentle but steady push forward.",
    "sec_why_title":"Why Nuvora",
    "why1_t":"Zero learning curve","why1_d":"Use natural sentences—no training needed.",
    "why2_t":"Low-friction","why2_d":"Simple, respectful reminders—no nagging.",
    "why3_t":"Privacy-minded","why3_d":"Data is stored on your device first; cloud sync will be encrypted and opt-in.",
    "sec_next_title":"Roadmap",
    "next1_t":"Now","next1_d":"Smarter daily summaries and to-do lists to score your day.",
    "next2_t":"Next","next2_d":"Photo-based meal logging with portion and nutrition estimation.",
    "next3_t":"Later","next3_d":"Integrations with Apple Health / Google Fit to see everything in one place.",
    "next4_t":"For teams","next4_d":"Anonymous dashboards for employee wellness & ESG (in discussion).",
    "faq1_q":"Does Nuvora replace medical advice?","faq1_a":"No. Nuvora helps habit-building and self-management; it does not provide medical diagnosis. Please consult healthcare professionals when unwell.",
    "faq2_q":"When can I download it?","faq2_a":"Demo and pilot access are available. Email me to get early updates.",
    "about_title":"About me","about_body":"Ya Xin Zhu (Vesper) — Founder & Indie developer of Nuvora. I believe health tools should be friendly and sustainable—keep the complexity backstage and return confidence to you.",
    "contact_title":"Contact","contact_body":"For partnership, collaboration or investment interest:"
  }
};

function applyLang(lang){
  const pack = dict[lang]||dict.zh;
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh';
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(pack[key]) el.textContent = pack[key];
  });
  document.getElementById('btn-zh').classList.toggle('active', lang==='zh');
  document.getElementById('btn-en').classList.toggle('active', lang==='en');
  localStorage.setItem('nuvora_lang', lang);
}

// events
document.getElementById('btn-zh').addEventListener('click', ()=>applyLang('zh'));
document.getElementById('btn-en').addEventListener('click', ()=>applyLang('en'));
document.getElementById('mini-zh').addEventListener('click', ()=>applyLang('zh'));
document.getElementById('mini-en').addEventListener('click', ()=>applyLang('en'));

// init
const urlParams = new URLSearchParams(location.search);
const urlLang = urlParams.get('lang');
const stored = localStorage.getItem('nuvora_lang');
applyLang(urlLang || stored || 'zh');
document.getElementById('year').textContent = new Date().getFullYear();
