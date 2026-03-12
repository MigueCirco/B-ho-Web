const yearElement = document.querySelector('#current-year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const form = document.querySelector('.contact-form');
const message = document.querySelector('#form-message');

if (form && message) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    message.textContent = 'Formulario de ejemplo: conecta este bloque con tu proveedor de correo.';
  });
}

const instagramProfileUrl = 'https://www.instagram.com/buho_producciones_artisticas/';

const instagramGalleryItems = [
  {
    type: 'video',
    url: 'https://www.instagram.com/reel/C1ry00DOpZF/',
    title: 'Reel destacado · Show en acción'
  },
  {
    type: 'video',
    url: 'https://www.instagram.com/reel/DCO3hVmJo4T/',
    title: 'Reel destacado · Fuego y escena nocturna'
  },
  {
    type: 'video',
    url: 'https://www.instagram.com/reel/DNULtS0pLsW/',
    title: 'Reel destacado · Impacto visual en vivo'
  },
  {
    type: 'image',
    url: 'https://www.instagram.com/p/DSaWagOieni/',
    title: 'Publicación destacada · Producción en show'
  },
  {
    type: 'image',
    url: 'https://www.instagram.com/p/DGQum4rRvRe/',
    title: 'Publicación destacada · Momento escénico'
  },
  {
    type: 'image',
    url: 'https://www.instagram.com/p/CmO4ERJu6YH/',
    title: 'Publicación destacada · Búho en evento'
  }
];

const instagramGallery = document.querySelector('#instagram-gallery');
const instagramProfileLinks = document.querySelectorAll('[data-instagram-profile-link]');

instagramProfileLinks.forEach((link) => {
  link.setAttribute('href', instagramProfileUrl);
});

if (instagramGallery) {
  const galleryMarkup = instagramGalleryItems
    .map((item, index) => {
      const isVideo = item.type === 'video';
      const badge = isVideo ? '🎬 Reel' : '📷 Post';
      const visualLabel = isVideo ? 'Video real en Instagram' : 'Foto real en Instagram';

      return `
        <article class="instagram-item">
          <div class="instagram-visual" aria-hidden="true">
            <span>${visualLabel}</span>
            <strong>#${index + 1}</strong>
          </div>
          <div class="instagram-meta">
            <span class="instagram-type">${badge}</span>
            <h3>${item.title}</h3>
            <a class="button instagram-link" href="${item.url}" target="_blank" rel="noopener noreferrer">
              Ver en Instagram
            </a>
          </div>
        </article>
      `;
    })
    .join('');

  instagramGallery.innerHTML = galleryMarkup;
}

const contactConfig = {
  Miguel: {
    phone: '5493814012526',
    label: 'Hablar con Miguel'
  },
  Nano: {
    phone: '5493816711400',
    label: 'Hablar con Nano'
  },
  messages: {
    generalMiguel:
      'Hola Miguel, quiero consultar por un show de Búho Producciones Artísticas para un evento.',
    generalNano:
      'Hola Nano, quiero consultar por un show de Búho Producciones Artísticas para un evento.',
    bar: 'Hola, quiero consultar por la Experiencia Nocturna Búho para un bar o evento nocturno.',
    familiar: 'Hola, quiero consultar por El Circo de los Búhos para un evento.'
  }
};

const whatsappButtons = document.querySelectorAll('[data-whatsapp-contact]');

whatsappButtons.forEach((button) => {
  const person = button.getAttribute('data-whatsapp-contact');
  const messageKey = button.getAttribute('data-whatsapp-message');

  if (!person || !messageKey || !contactConfig[person] || !contactConfig.messages[messageKey]) {
    return;
  }

  const phone = contactConfig[person].phone;
  const text = encodeURIComponent(contactConfig.messages[messageKey]);
  button.setAttribute('href', `https://wa.me/${phone}?text=${text}`);
});
