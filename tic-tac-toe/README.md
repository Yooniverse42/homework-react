# Tic Tac Toe Game

## 과제 내용

commit순으로 작성하였고, commit 메세지와 동일합니다.

### 1. first commit

초기 환경 세팅 한 commit 입니다.

커스텀 스캐폴딩을 하기 위해서 `pnpm add -D vite` 명령어를 사용 시 오류가 나지는 않았지만, pnpm-lock.yaml / package.json / node_modules 파일이 설치되지 않았습니다..오토 스캐폴딩은 파일도 제대로 설치되지만 커스텀 스캐폴딩이 되지 않는 이유를 모르겠습니다😭 그래서 수업 시간에 제공해주신 환경 구성된 폴더를 사용했습니다.

### 2. 컴포넌트 분리

`Game.jsx` 원본 파일을 컴포넌트 분리를 위해 폴더 생성 및 이동을 했습니다.

### 3. 플레이어 만들고 Square.jsx에서 import 해오기

constants.js에서 tic-tac-toe에 나올 플레이어를 설정했습니다.

### 4. Square 컴포넌트 구현

- `Squares.jsx` 파일에서 9개의 Square 컴포넌트를 임의로 만들어주었습니다.
- `Square.jsx` 파일
  - 컴포넌트에서 PLAYER가 들어올 수 있게 `children`이라는 prop을 받게 하였고, props 유효성 검사와 함께 그 `children`이 React 노드임을 지정했습니다.
  - 버튼에 이미 `children` 이 있다면, 버튼 비활성화를 위해 `const isDisabled = !!children;` 을 이용했습니다.

### 5. 버튼 클릭 시 PLAYER 삽입

- `handlePlay` 함수를 이용하여 버튼 클릭 시, 현재 PLAYER을 출력하게 했습니다.

### 6. winner 구하기

- `WINNER_CONDITIONS` 와 `checkWinner` 함수를 이용하여 빙고가 됐을 때 alert창을 이용하여 승자를 알려주도록 했습니다.

<br />
<br />

## 산출물

![](https://github.com/Yooniverse42/homework-react/blob/main/tic-tac-toe/render.png?raw=true)

<br />
<br />

## 느낀점

수업에서 배운 코드를 그대로 진행하려 하였고, 코드 자체를 이해하려 노력했습니다. 이 과정을 통해 수업 때보다 훨씬 더 깊이 있는 이해를 얻을 수 있었습니다. 그러나, 제가 직접 고민하며 코드를 작성하지 않았다는 점과 완성하지 못했다는 점에서 아쉬움이 남습니다.

자바스크립트에 대한 이해도가 아직 부족하다고 느껴져, 이를 보완하기 위해 추가적인 학습이 필요하다고 생각합니다.. 과제 제출 후에도 마지막까지 틱택토 게임을 완성하도록 하겠습니다. 감사합니다.
