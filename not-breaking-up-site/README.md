# 아니, 안 헤어진다니까?

현대 로맨스 · 후회물 「아니, 안 헤어진다니까?」의 작품 소개 페이지입니다.
빌드 과정이 없는 순수 HTML/CSS/JS 정적 사이트라서 그대로 GitHub Pages에 올릴 수 있어요.

## 폴더 구조

```
.
├── index.html        # 페이지 본문
├── css/style.css     # 스타일 (맨 위 :root 에서 색상 변경)
├── js/main.js        # 등장인물 카드 클릭 동작
├── images/           # 등장인물 일러스트
└── .nojekyll         # GitHub Pages가 파일을 그대로 서비스하도록 하는 빈 파일
```

## GitHub Pages로 배포하기

1. GitHub에서 새 저장소를 만듭니다. (예: `not-breaking-up`)
2. 이 폴더의 파일을 저장소 맨 위(루트)에 올립니다.
   ```bash
   git init
   git add .
   git commit -m "작품 소개 페이지 추가"
   git branch -M main
   git remote add origin https://github.com/<내-아이디>/<저장소-이름>.git
   git push -u origin main
   ```
3. 저장소의 **Settings → Pages** 로 이동합니다.
4. **Source** 를 `Deploy from a branch` 로 두고, Branch 는 `main` / `/ (root)` 를 선택한 뒤 Save 합니다.
5. 1~2분 뒤 `https://<내-아이디>.github.io/<저장소-이름>/` 에서 확인할 수 있어요.

## 내 컴퓨터에서 미리 보기

```bash
python3 -m http.server 8000
```

브라우저에서 http://localhost:8000 을 열면 됩니다.

## 자주 바꾸는 부분

- **강조색**: `css/style.css` 맨 위 `--accent` (균열선, 물음표, "당신" 카드 테두리)
- **등장인물 이미지**: `images/` 의 파일을 같은 이름으로 교체
- **소개, 인물 설명, 타임라인 문구**: `index.html` 에서 해당 문장을 직접 수정
- **글꼴**: Google Fonts 의 Black Han Sans, Noto Sans KR 을 사용합니다. 인터넷에 연결되어 있어야 보입니다.

## 참고

- 등장인물 일러스트는 웹에서 빨리 뜨도록 가로 720px, JPG 로 줄여 두었습니다.
- 저장소를 공개(Public)로 두면 이미지와 설정 문구도 누구나 볼 수 있어요. 비공개로 두고 싶다면 Private 저장소로 만들고, GitHub Pages 공개 범위를 확인하세요.
