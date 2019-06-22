export default function copyToClipBoard(text: string) {
  const textArea = createTextArea(text);
  selectText(textArea);
  copyToClipboard(textArea);
}

function isIOS() {
  return navigator.userAgent.match(/ipad|iphone/i);
}

function createTextArea(text: string) {
  const textArea = document.createElement('textArea') as HTMLTextAreaElement;
  textArea.value = text;
  document.body.appendChild(textArea);
  return textArea;
}

function selectText(textArea: HTMLTextAreaElement) {
  let range;
  let selection;

  if (isIOS()) {
    range = document.createRange();
    range.selectNodeContents(textArea);
    selection = window.getSelection();
    if (!selection) { return; }
    selection.removeAllRanges();
    selection.addRange(range);
    textArea.setSelectionRange(0, 999999);
  } else {
    textArea.select();
  }
}

function copyToClipboard(textArea: HTMLTextAreaElement) {
  document.execCommand('copy');
  document.body.removeChild(textArea);
}
