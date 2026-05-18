import './style.css'

import './style.css';

async function loadPartial(elementId, filePath) {
  const element = document.getElementById(elementId);

  if (!element) {
    return;
  }

  try {
    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error(`Could not load ${filePath}`);
    }

    const html = await response.text();
    element.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

loadPartial('site-header', '/partials/header.html');
loadPartial('site-footer', '/partials/footer.html');