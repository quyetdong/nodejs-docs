function convertHTML(str) {
  const regEx = /[&<>"']/g;
  let res = '';

  const obj = {
    '&': '&amp;',
    '"': '&quot;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&apos;',
  };

  if (str) {
    res = str.replace(regEx, match => obj[match]);
  }

  return res;
}

convertHTML('');
export { convertHTML };
