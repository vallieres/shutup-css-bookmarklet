javascript: (function shutup() {
    var headID = document.getElementsByTagName('head')[0];
    var cssNode = document.createElement('link');
    cssNode.type = 'text/css';
    cssNode.rel = 'stylesheet';
    cssNode.href = location.protocol + '//stevenf.com/shutup/shutup-latest.css';
    headID.appendChild(cssNode);
})();
