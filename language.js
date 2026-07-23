(() => {
  const common = [
    ['footer p', '\u00A9 2026 Wenzheng Wang. Last updated July 2026.', '\u00A9 2026 Wenzheng Wang \u738B\u6587\u653F\u3002\u6700\u540E\u66F4\u65B0\u4E8E 2026 \u5E74 7 \u6708\u3002']
  ];
  const home = [
    ['nav a[href="#about"]', 'About', '\u5173\u4E8E\u6211'],
    ['nav a[href="#research"]', 'Research', '\u7814\u7A76'],
    ['nav a[href="#education"]', 'Education', '\u6559\u80B2'],
    ['nav a[href="#teaching"]', 'Teaching', '\u6559\u5B66'],
    ['nav a[href="#documents"]', 'Documents', '\u8D44\u6599'],
    ['nav a[href="lecture-notes.html"]', 'Lecture Notes', '\u8BB2\u4E49'],
    ['.eyebrow', 'Academic homepage', '\u5B66\u672F\u4E3B\u9875'],
    ['.role', 'PhD Student in Mathematics', '\u6570\u5B66\u535A\u58EB\u7814\u7A76\u751F'],
    ['.quick-links .button', 'Curriculum Vitae', '\u4E2A\u4EBA\u7B80\u5386'],
    ['.quick-links .text-link', 'Email', '\u7535\u5B50\u90AE\u4EF6'],
    ['.sidebar p:nth-of-type(2)', 'PhD Student<br>Mathematics', '\u535A\u58EB\u7814\u7A76\u751F<br>\u6570\u5B66', true],
    ['.sidebar p:nth-of-type(3)', 'Paris-Saclay, France', '\u6CD5\u56FD Paris-Saclay'],
    ['.sidebar > a', 'Download CV', '\u4E0B\u8F7D\u7B80\u5386'],
    ['#about h2', 'About', '\u5173\u4E8E\u6211'],
    ['#about > p', `I am a PhD student in mathematics at Universit\u00E9 Paris-Saclay. My current research interests are microlocal analysis and Ruelle\u2013Pollicott resonances. My master's thesis at the University of Bonn studied conditional stability estimates for the geodesic X-ray transform. My undergraduate advisor was <a href="https://faculty.ustc.edu.cn/haoyin/en/index.htm" target="_blank" rel="noopener noreferrer">Yin Hao</a>, my master's advisor was <a href="https://www.math.uni-bonn.de/people/bohr/" target="_blank" rel="noopener noreferrer">Jan Bohr</a>, and my PhD advisor is <a href="https://sites.google.com/view/zhongkai-tao/" target="_blank" rel="noopener noreferrer">Zhongkai Tao</a>.`, `我是巴黎萨克雷大学的数学博士生，目前主要关注微局部分析和 Ruelle\u2013Pollicott 共振。硕士期间，我在波恩大学研究测地 X 射线变换的条件稳定性估计。我的本科导师是 <a href="https://faculty.ustc.edu.cn/haoyin/en/index.htm" target="_blank" rel="noopener noreferrer">殷浩</a>，硕士导师是 <a href="https://www.math.uni-bonn.de/people/bohr/" target="_blank" rel="noopener noreferrer">Jan Bohr</a>，博士导师是 <a href="https://sites.google.com/view/zhongkai-tao/" target="_blank" rel="noopener noreferrer">Zhongkai Tao</a>。`, true],
    ['#research h2', 'Research interests', '\u7814\u7A76\u5174\u8DA3'],
    ['#research > h3', 'Selected projects', '\u7814\u7A76\u9879\u76EE'],
    ['#research article:nth-of-type(1) .entry-heading span', "Master's thesis", '\u7855\u58EB\u8BBA\u6587'],
    ['#research article:nth-of-type(1) > p', 'Conditional stability estimates for geodesic X-ray transforms on tensor fields, using microlocal analysis and pseudodifferential operator theory, with extensions to scalar- and matrix-weighted transforms on simple Riemannian manifolds.', '\u7814\u7A76 tensor fields \u4E0A geodesic X-ray transforms \u7684 conditional stability estimates\uFF0C\u4F7F\u7528 microlocal analysis \u4E0E pseudodifferential operator theory\uFF0C\u5E76\u63A8\u5E7F\u81F3 simple Riemannian manifolds \u4E0A\u7684 scalar- and matrix-weighted transforms\u3002'],
    ['#research article:nth-of-type(2) .entry-heading span', "Bachelor's thesis", '\u672C\u79D1\u8BBA\u6587'],
    ['#research article:nth-of-type(2) > p', 'Stability and gap phenomena for Yang-Mills connections, including the second variation of the Yang-Mills functional and applications of Bochner techniques.', '\u7814\u7A76 Yang-Mills connections \u7684 stability \u4E0E gap phenomena\uFF0C\u5305\u62EC Yang-Mills functional \u7684 second variation \u53CA Bochner techniques \u7684\u5E94\u7528\u3002'],
    ['#research article:nth-of-type(3) > p', 'Undergraduate research project advised by Prof. Yin Hao at USTC.', 'USTC \u672C\u79D1\u751F\u7814\u7A76\u9879\u76EE\uFF0C\u5BFC\u5E08\u4E3A Yin Hao \u6559\u6388\u3002'],
    ['#education h2', 'Education', '\u6559\u80B2\u7ECF\u5386'],
    ['#education article:nth-of-type(1) > p', 'M.Sc. in Pure Mathematics. Thesis supervisor: <a href="https://www.math.uni-bonn.de/people/bohr/" target="_blank" rel="noopener noreferrer">Jan Bohr</a>.', '纯数学硕士。论文导师：<a href="https://www.math.uni-bonn.de/people/bohr/" target="_blank" rel="noopener noreferrer">Jan Bohr</a>。', true],
    ['#education article:nth-of-type(2) > p', 'B.Sc. in Mathematics. Thesis supervisor: <a href="https://faculty.ustc.edu.cn/haoyin/en/index.htm" target="_blank" rel="noopener noreferrer">Yin Hao</a>.', '数学学士。论文导师：<a href="https://faculty.ustc.edu.cn/haoyin/en/index.htm" target="_blank" rel="noopener noreferrer">殷浩</a>。', true],
    ['#teaching h2', 'Teaching', '\u6559\u5B66\u7ECF\u5386'],
    ['#teaching h3', 'Teaching Assistant, USTC', '\u52A9\u6559\uFF0CUSTC'],
    ['#teaching article > p', 'Exercise classes and grading for Mathematical Analysis II and III.', '\u8D1F\u8D23 Mathematical Analysis II \u548C III \u7684\u4E60\u9898\u8BFE\u4E0E\u4F5C\u4E1A\u6279\u6539\u3002'],
    ['#documents h2', 'Documents', '\u8D44\u6599'],
    ['#documents .document-card:first-of-type h3', 'Curriculum Vitae', '\u4E2A\u4EBA\u7B80\u5386'],
    ['#documents .document-card:first-of-type p', 'Education, research experience, and teaching.', '\u6559\u80B2\u3001\u7814\u7A76\u4E0E\u6559\u5B66\u7ECF\u5386\u3002'],
    ['#documents .document-card:first-of-type a', 'View PDF', '\u67E5\u770B PDF'],
    ['#documents .document-card:last-of-type h3', 'Lecture Notes', '\u8BB2\u4E49'],
    ['#documents .document-card:last-of-type p', 'Notes and expository material from courses and seminars.', '\u8BFE\u7A0B\u4E0E\u7814\u8BA8\u73ED\u8BB2\u4E49\u53CA\u7EFC\u8FF0\u6750\u6599\u3002'],
    ['#documents .document-card:last-of-type a', 'View notes', '\u67E5\u770B\u8BB2\u4E49']
  ];
  const notes = [
    ['nav a[href="index.html"]', 'Home', '\u4E3B\u9875'],
    ['nav a[href="index.html#research"]', 'Research', '\u7814\u7A76'],
    ['nav a[href="index.html#teaching"]', 'Teaching', '\u6559\u5B66'],
    ['nav a[href="index.html#documents"]', 'Documents', '\u8D44\u6599'],
    ['.eyebrow', 'Mathematics', '\u6570\u5B66'],
    ['.hero h1', 'Lecture Notes', '\u8BB2\u4E49'],
    ['.role', 'Notes and expository material', '\u8BB2\u4E49\u4E0E\u7EFC\u8FF0\u6750\u6599'],
    ['.affiliation', 'This page collects lecture notes from courses, seminars, and independent study.', '\u672C\u9875\u9762\u6536\u5F55\u8BFE\u7A0B\u3001\u7814\u8BA8\u73ED\u4E0E\u72EC\u7ACB\u5B66\u4E60\u7684\u8BB2\u4E49\u3002'],
    ['.quick-links a', '\u2190 Back to homepage', '\u2190 \u8FD4\u56DE\u5B66\u672F\u4E3B\u9875'],
    ['.sidebar p:first-of-type strong', 'Lecture Notes', '\u8BB2\u4E49'],
    ['.sidebar p:nth-of-type(2)', 'Wenzheng Wang<br>Mathematics', 'Wenzheng Wang \u738B\u6587\u653F<br>\u6570\u5B66', true],
    ['.sidebar > a', 'Academic homepage', '\u5B66\u672F\u4E3B\u9875'],
    ['.main-content h2', 'Notes', '\u8BB2\u4E49'],
    ['.document-card p', '2025 Summer', '2025 \u5E74\u590F\u5B63'],
    ['.document-card a', 'View PDF', '\u67E5\u770B PDF']
  ];
  const isNotes = location.pathname.endsWith('lecture-notes.html');
  const rows = common.concat(isNotes ? notes : home);
  let current = 'en';
  function applyLanguage(language) {
    current = language;
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = language === 'zh'
      ? (isNotes ? '\u8BB2\u4E49 | Wenzheng Wang \u738B\u6587\u653F' : 'Wenzheng Wang \u738B\u6587\u653F | \u6570\u5B66')
      : (isNotes ? 'Lecture Notes | Wenzheng Wang' : 'Wenzheng Wang | Mathematics');
    rows.forEach(([selector, en, zh, html]) => {
      const element = document.querySelector(selector);
      if (element) element[html ? 'innerHTML' : 'textContent'] = language === 'zh' ? zh : en;
    });
    const button = document.querySelector('.language-toggle');
    button.textContent = language === 'zh' ? 'EN / \u4E2D\u6587' : '\u4E2D\u6587 / EN';
    button.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : 'Switch to Chinese');
    try { localStorage.setItem('site-language', language); } catch (_) {}
  }
  const button = document.querySelector('.language-toggle');
  button.addEventListener('click', () => applyLanguage(current === 'en' ? 'zh' : 'en'));
  let preferred = 'en';
  try { preferred = localStorage.getItem('site-language') || 'en'; } catch (_) {}
  applyLanguage(preferred === 'zh' ? 'zh' : 'en');
})();
