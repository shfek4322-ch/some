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

// 인스타 피드: 옆으로 밀거나 화살표 버튼으로 게시물을 넘깁니다.
(() => {
  const feed = document.querySelector('.feed');
  if (!feed) return;
  const posts = Array.from(feed.querySelectorAll('.post'));
  const count = document.querySelector('.feed__count');
  const [prev, next] = document.querySelectorAll('.feed__btn');

  const current = () => {
    let best = 0;
    let min = Infinity;
    posts.forEach((p, i) => {
      const d = Math.abs(p.offsetLeft - feed.scrollLeft);
      if (d < min) { min = d; best = i; }
    });
    return best;
  };

  const update = () => {
    const i = current();
    count.textContent = `${i + 1} / ${posts.length}`;
    prev.disabled = i === 0;
    next.disabled = i === posts.length - 1;
  };

  const go = (dir) => {
    const i = Math.min(Math.max(current() + dir, 0), posts.length - 1);
    feed.scrollTo({ left: posts[i].offsetLeft, behavior: 'smooth' });
  };

  prev.addEventListener('click', () => go(-1));
  next.addEventListener('click', () => go(1));
  feed.addEventListener('scroll', () => window.requestAnimationFrame(update));
  feed.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
  });
  update();
})();
