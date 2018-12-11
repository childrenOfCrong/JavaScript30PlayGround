## This Week JS 30

이번에 배울 것은

VideoAPi

되도록이면 arrow Fn을 쓰고 싶은데 this로 바로 접근해서 api에 접근하는 이점이 있어서 이럴 때는 function이 좋고 ;;;
그렇지만 arrow랑 fn 섞어 쓰기도 싫은데 ㅜ

어쩔 수 없이 내가 지향하는 convention은 arrow로 쓰되 이렇게 this로 바로 접근하기 좋은 애들은 fn을 써줘야 될 것 같다 !!!

이런 부분도 한 번 커뮤니티에 질문 올려봐야겠다

```js
function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  console.log(icon);
  toggle.innerText = icon;
}
```
