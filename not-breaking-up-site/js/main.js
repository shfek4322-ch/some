// 등장인물 카드: 누를 때마다 이미지 ↔ 설명이 번갈아 나타납니다.
document.querySelectorAll('.char-card').forEach((card) => {
  const image = card.querySelector('.face--image');
  const info = card.querySelector('.face--info');

  card.addEventListener('click', () => {
    const showInfo = info.hidden;
    image.hidden = showInfo;
    info.hidden = !showInfo;
    card.setAttribute('aria-pressed', String(showInfo));
  });
});
