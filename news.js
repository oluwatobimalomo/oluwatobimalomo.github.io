const NEWS_ITEMS = [
  `<strong>[Aug 2026]</strong> <a href="https://www.mdpi.com/2227-9709/13/8/127" target="_blank" rel="noopener noreferrer">Adversarial Training and Differential Privacy-Style Noise Injection for Privacy-Preserving Vertical Federated Learning</a>. Azeez Nureni, Oluwatobi Malomo, et al. <i>Informatics</i>, 13(8), 127.`,
  `<strong>[May 2026]</strong> <a href="https://www.mdpi.com/2073-431X/15/6/369" target="_blank" rel="noopener noreferrer">Investigation of Augmented Datasets for Security in Internet of Medical Things (IoMT) Ecosystems</a>. Azeez Nureni, Ademoye Abdullateef, Oluwatobi Malomo, et al. <i>Computers</i>, 15(6), 369.`,
  `<strong>[May 2026]</strong> Overwhelmed and In Retreat: Expectation, Preparation, and Realized Experiences Clash on an Exchange Program. Accepted for <i>Case Studies in International Education</i>, issue 7(1).`,
  `<strong>[Apr 2026]</strong> From Data to Diagnosis: Facilitating Physician-AI Synergy in Heart Disease Prediction Systems. Oluwaseun Ojerinde and Oluwatobi Malomo. Manuscript under review at the <i>Journal of Engineering and Applied Sciences</i>.`,
  `<strong>[Jan 2026]</strong> MSc in Computer Science, University of Lagos. Degree completed.`,
  `<strong>[Dec 2025]</strong> <a href="https://journals.ui.edu.ng/index.php/uijslictr/article/view/2041" target="_blank" rel="noopener noreferrer">Artificial Intelligence in Cybersecurity: A Comparative Review of Its Role across the Cyber Kill Chain</a>. Azeez Nureni, Oluwatobi Malomo, et al. <i>UIJSLICTR</i>, 2025.`,
  `<strong>[2022]</strong> <a href="https://irepo.futminna.edu.ng/handle/123456789/18994" target="_blank" rel="noopener noreferrer">Application of Machine Learning Algorithm for Classification of Fake COVID-19 Tweets</a>. Oluwatobi Malomo, Andrew Uduimoh, and Alhassan John. <i>JOSTMED</i>, 2022.`,
  `<strong>[2022]</strong> First Class Honours in Computer Science, Federal University of Technology, Minna.`,
];

function renderNews(containerId, limit) {
  const ul = document.getElementById(containerId);
  if (!ul) return;
  const items = limit ? NEWS_ITEMS.slice(0, limit) : NEWS_ITEMS;
  ul.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}
