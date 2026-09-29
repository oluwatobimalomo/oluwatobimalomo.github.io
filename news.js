const NEWS_ITEMS = [
  `<strong>[Aug 2026]</strong> Our paper, <span style="color: rgb(128, 118, 10)">Adversarial Training and Differential Privacy-Style Noise Injection for Privacy-Preserving Vertical Federated Learning</span>, was published in <a href="http://www.mdpi.com/journal/informatics" target="_blank"><span style="color: rgb(128, 118, 10)">Informatics 2026</span></a>`,
  
  `<strong>[May 2026]</strong> Our paper, <span style="color: rgb(128, 118, 10)">Investigation of Augmented Datasets for Security In Internet Of Medical Things (IoMT) Ecosystems</span>, was published in <a href="https://www.mdpi.com/2073-431X/15/6/369" target="_blank"><span style="color: rgb(128, 118, 10)"><i>Computers 2026</i></span></a>`,
  
  `<strong>[May 2026]</strong> Our Case Study, <span style="color: rgb(128, 118, 10)">Overwhelmed and In Retreat: Expectation, Preparation, and Realized Experiences Clash on an Exchange Program</span>, was accepted in <a href="https://www.csiepub.org" target="_blank"><span style="color: rgb(128, 118, 10)">Case Studies in International Education Issue #7(1)</span></a>`,  
  
  `<strong>[Apr 2026]</strong> Our paper, <span style="color: rgb(128, 118, 10)">From Data to Diagnosis: Facilitating Physician-AI Synergy in Heart Disease Prediction Systems</span>, was submitted to <a href="http://jecasmu.org" target="_blank"><span style="color: rgb(128, 118, 10)">JECASMU 2026</span></a>`,
  
  `<strong>[Jan 2026]</strong> I completed my Masters Degree in <span style="color: rgb(128, 118, 10)">Computer Science</span> at the <a href="https://unilag.edu.ng/" target="_blank"><span style="color: rgb(128, 118, 10)">University of Lagos (The Nation's Pride)</span></a>.`,
  
  `<strong>[Dec 2025]</strong> Our paper, <a href="https://journals.ui.edu.ng/index.php/uijslictr/article/view/2041" target="_blank"><span style="color: rgb(128, 118, 10)">Artificial Intelligence in Cybersecurity: A Comparative Review of Its Role across the Cyber Kill Chain</span></a>, was published in <a href="https://journals.ui.edu.ng/index.php/uijslictr/index" target="_blank"><span style="color: rgb(128, 118, 10)">UIJSLICTR 2025</span></a>`,
  
  `<strong>[2022]</strong> Our paper, <a href="https://irepo.futminna.edu.ng/handle/123456789/18994" target="_blank" rel="noopener noreferrer"><span style="color: rgb(128, 118, 10)">Application of Machine Learning Algorithm for Classification of Fake COVID-19 Tweets</span></a>, was published in JOSTMED.`,

  `<strong>[2022]</strong> I graduated with First Class Honours in Computer Science from the Federal University of Technology, Minna.`,
];

function renderNews(containerId, limit) {
  const ul = document.getElementById(containerId);
  if (!ul) return;
  const items = limit ? NEWS_ITEMS.slice(0, limit) : NEWS_ITEMS;
  ul.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}
