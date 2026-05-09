// Wrap Sec+ existing global arrays into CERT_DATA registry
window.CERT_DATA = window.CERT_DATA || {};
CERT_DATA.secplus = {
  theory: window.THEORY,
  theory_en: window.THEORY_EN,
  questions: window.QUESTIONS,
  questions_en: window.QUESTIONS_EN,
  flashcards: window.FLASHCARDS
};
