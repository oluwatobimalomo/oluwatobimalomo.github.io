const NEWS_ITEMS = [
  `<strong>[Apr 2026]</strong> Our paper, Adversarial Training and Differential Privacy for Privacy-Preserving Vertical Federated Learning, was accepted in <a href="http://jecasmu.org" target="_blank"><span style="color: rgb(10, 93, 128)">JECASMU 2026</span></a>`,
  
  `<strong>[Apr 2026]</strong> Our paper, From Data to Diagnosis: Facilitating Physician-AI Synergy in Heart Disease Prediction Systems, was accepted in <a href="http://www.mdpi.com/journal/informatics" target="_blank"><span style="color: rgb(10, 93, 128)">MDPI Informatics 2026</span></a>`,
  
  `<strong>[Jan 2026]</strong> I completed my Masters Degree in Computer Science at the University of Lagos</a>.`,
  
  `<strong>[Dec 2025]</strong> Our paper, <a href="https://journals.ui.edu.ng/index.php/uijslictr/article/view/2041" target="_blank"><span style="color: rgb(10, 93, 128)">Artificial Intelligence in Cybersecurity: A Comparative Review of Its Role across the Cyber Kill Chain</span></a>, was published in <a href="https://journals.ui.edu.ng/index.php/uijslictr/index" target="_blank"><span style="color: rgb(10, 93, 128)">UIJSLICTR 2025</span></a>`,
  
  `<strong>[Jun 2023]</strong> Our paper, <a href="http://irepo.futminna.edu.ng:8080/jspui/bitstream/123456789/18994/1/Application%20of%20Machine%20Learning%20Algorithm%20for%20Classification%20of%20Fake%20COVID-19%20Tweets.doc" target="_blank"><span style="color: rgb(10, 93, 128)">Application of Machine Learning Algorithm for Classification of Fake COVID-19 Tweets</span></a>, was published in <a href="" target="_blank"><span style="color: rgb(10, 93, 128)">JOSTMED 2023</span></a>,`,

  `<strong>[Feb 2022]</strong> I convoked from the Federal University of Technology Minna, graduating Top 2 in my class with First Class honors.`,
];

function renderNews(containerId, limit) {
  const ul = document.getElementById(containerId);
  if (!ul) return;
  const items = limit ? NEWS_ITEMS.slice(0, limit) : NEWS_ITEMS;
  ul.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}
