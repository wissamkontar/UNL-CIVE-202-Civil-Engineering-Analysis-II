import './styles/main.css';

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

function setupProjectFilters() {
  const tabs = document.querySelectorAll('.project-tab');
  const cards = document.querySelectorAll('.project-card');

  if (!tabs.length || !cards.length) {
    return;
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const selectedCategory = tab.dataset.filter;

      tabs.forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');

      cards.forEach((card) => {
        const cardCategory = card.dataset.category;

        const shouldShow =
          selectedCategory === 'all' ||
          cardCategory === selectedCategory ||
          cardCategory === 'all';

        card.classList.toggle('is-hidden', !shouldShow);
      });
    });
  });
}

setupProjectFilters();