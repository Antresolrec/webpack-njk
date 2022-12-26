import browserUpdate from 'browser-update';

const docHtml = document.querySelector('html');
const classIe = 'internet-explorer';

function getBrowser() {
  const ua = navigator.userAgent;
  let M =
    ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) ||
    [];

  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  const tem = ua.match(/version\/(\d+)/i);
  if (tem != null) {
    M.splice(1, 1, tem[1]);
  }
  return {
    name: M[0],
    version: M[1],
  };
}

if (!docHtml.classList.contains(classIe)) {
  browserUpdate({
    required: {
      e: 16,
      f: 54,
      o: 44,
      o_a: 44,
      s: 10,
      c: 58,
      y: 18.1,
      v: '1.10',
      uc: 11.5,
      samsung: 7.0,
    },
    reminder: 0,
    reminderClosed: 0,
    nomessage: true,
    onshow() {
      docHtml.classList.add(classIe);
    },
  });

  const browser = getBrowser();

  if (
    (browser.name === 'safari' || browser.name === 'Safari') &&
    browser.version < 10
  ) {
    docHtml.classList.add(classIe);
  }
}
