import viktorija from '../assets/viktorija.jpg';
import sasho from '../assets/sasho.png';

export const STUDIO_NAME = "Сенза Медиа";
export const BRAND_NAME = "Сенза";

export const VIKTORIJA_IMAGE = viktorija;
export const SASHO_IMAGE = sasho;
export const ALEKSANDAR_IMAGE = VIKTORIJA_IMAGE;
export const ELENA_IMAGE = SASHO_IMAGE;

export const NAV_ITEMS = [
  { href: '#home', label: 'Дома' },
  { href: '#team', label: 'Тим' },
  { href: '#services', label: 'Услуги' },
  { href: '#portfolio', label: 'Портфолио' },
  { href: '#booking', label: 'Контакт' },
];

export const TEAM_MEMBERS = [
  {
    name: "Викторија",
    role: "Фотограф & Уредник",
    bio: "Комерцијална фотографија и емоционално раскажување приказни.",
    imageSrc: VIKTORIJA_IMAGE,
    instagram: "https://instagram.com/aleksandar_profile",
  },
  {
    name: "Сашо",
    role: "Видеограф & & Дрон Пилот",
    bio: "Експерт за кинематографија, и висококвалитетно видео снимање со дрон. Искуство над 2 години.емоционално раскажување приказни.",
    imageSrc: SASHO_IMAGE,
    instagram: "https://instagram.com/elena_profile",
  },
];

export const PORTFOLIO_ITEMS = [
  { category: "Дрон", image: "https://placehold.co/800x600/1e293b/ffffff?text=City+View" },
  { category: "Свадби", image: "https://placehold.co/800x1200/1e293b/ffffff?text=Wedding+Details" },
  { category: "Комерцијала", image: "https://placehold.co/1200x800/1e293b/ffffff?text=Product+Shoot" },
  { category: "Видео", image: "https://placehold.co/1200x600/1e293b/ffffff?text=Film+Frame" },
  { category: "Портрети", image: "https://placehold.co/800x1000/1e293b/ffffff?text=Portrait" },
  { category: "Природа", image: "https://placehold.co/1000x800/1e293b/ffffff?text=Landscape+Drone" },
];

export const SERVICE_OPTIONS = [
  'Фотографија',
  'Видео Продукција',
  'Дрон Снимање',
  'Комбинација (Фото + Видео + Дрон)'
];
