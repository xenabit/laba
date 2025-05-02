import { gsap } from 'gsap';

const defaultConfig = {
  maxDistance: 400, // Максимальное расстояние для эффекта
  strength: 25, // Сила примагничивания
  duration: 0.3, // Длительность анимации
  ease: 'power2.out', // Тип смягчения
};

export const magnetEffect = (element, mouseX, mouseY, containerRect, config = {}) => {
  if (!element || !containerRect) return;

  const { maxDistance, strength, duration, ease } = {
    ...defaultConfig,
    ...config,
  };

  const elementRect = element.getBoundingClientRect();
  const elementX = elementRect.left - containerRect.left + elementRect.width / 2;
  const elementY = elementRect.top - containerRect.top + elementRect.height / 2;

  const distance = Math.sqrt((mouseX - elementX) ** 2 + (mouseY - elementY) ** 2);
  const isWithinRange = distance < maxDistance;

  const angle = Math.atan2(mouseY - elementY, mouseX - elementX);
  const x = isWithinRange ? Math.cos(angle) * (1 - distance / maxDistance) * strength : 0;
  const y = isWithinRange ? Math.sin(angle) * (1 - distance / maxDistance) * strength : 0;

  gsap.to(element, {
    x,
    y,
    duration,
    ease,
    overwrite: 'auto',
    onComplete: () => {
      if (!isWithinRange) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration,
          ease,
        });
      }
    },
  });
};
