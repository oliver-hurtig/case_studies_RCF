window.MathJax = {
    loader: {load: ['[tex]/textmacros', '[tex]/textcomp']},
    tex: {
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]],
      processEscapes: true,
      processEnvironments: true,
      packages: {'[+]': ['textmacros']},
      textmacros: {packages: {'[+]': ['textcomp']}},
    },    
    
    
    options: {
      ignoreHtmlClass: ".*|",
      processHtmlClass: "arithmatex"
    }
  };
  
  document$.subscribe(() => { 

    // there is some strange behaviour of MathJax not correctly loading unicode after a page reload when MathJax is still in cache. The first line here throws an error, but then the rest works (it's probably just because it slows down the page load and might be better handled by waiting for page load)
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    MathJax.startup.output.clearCache()
    MathJax.typesetClear()
    MathJax.texReset()
    MathJax.typesetPromise()
  })