const NEWS_ITEMS = [
  `<strong>[Aug 2026]</strong> Our paper, Adversarial Training and Differential Privacy-Style Noise Injection for Privacy-Preserving Vertical Federated Learning, was published in <a href="http://www.mdpi.com/journal/informatics" target="_blank" rel="noopener noreferrer">Informatics 2026</a>`,
  
  `<strong>[May 2026]</strong> Our paper, Investigation of Augmented Datasets for Security In Internet Of Medical Things (IoMT) Ecosystems, was published in <a href="https://www.mdpi.com/2073-431X/15/6/369" target="_blank" rel="noopener noreferrer"><i>Computers 2026</i></a>`,
  
  `<strong>[May 2026]</strong> Our Case Study, Overwhelmed and In Retreat: Expectation, Preparation, and Realized Experiences Clash on an Exchange Program, was accepted in <a href="https://www.csiepub.org" target="_blank" rel="noopener noreferrer">Case Studies in International Education Issue #7(1)</a>`,
  
  `<strong>[Apr 2026]</strong> Our paper, From Data to Diagnosis: Facilitating Physician-AI Synergy in Heart Disease Prediction Systems, was submitted to <a href="http://jecasmu.org" target="_blank" rel="noopener noreferrer">JECASMU 2026</a>`,
  
  `<strong>[Jan 2026]</strong> I completed my Masters Degree in Computer Science at the <a href="https://unilag.edu.ng/" target="_blank" rel="noopener noreferrer">University of Lagos (The Nation's Pride)</a>.`,
  
  `<strong>[Dec 2025]</strong> Our paper, <a href="https://journals.ui.edu.ng/index.php/uijslictr/article/view/2041" target="_blank" rel="noopener noreferrer">Artificial Intelligence in Cybersecurity: A Comparative Review of Its Role across the Cyber Kill Chain</a>, was published in <a href="https://journals.ui.edu.ng/index.php/uijslictr/index" target="_blank" rel="noopener noreferrer">UIJSLICTR 2025</a>`,
  
  `<strong>[2022]</strong> Our paper, <a href="https://irepo.futminna.edu.ng/handle/123456789/18994" target="_blank" rel="noopener noreferrer">Application of Machine Learning Algorithm for Classification of Fake COVID-19 Tweets</a>, was published in JOSTMED.`,

  `<strong>[2022]</strong> I graduated with First Class Honours in Computer Science from the Federal University of Technology, Minna.`,
];

function renderNews(containerId, limit) {
  const ul = document.getElementById(containerId);
  if (!ul) return;
  const items = limit ? NEWS_ITEMS.slice(0, limit) : NEWS_ITEMS;
  ul.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}
