import React from "react";

export default function Main() {
  return (
    <main>
      <h2 className="a11y">필요한 시간 알아보기</h2>

      <form className="cont-input">
        <p className="txt-wannabe">
          나는 <input type="text" required />
          전문가가 될 것이다.
        </p>
        <p className="txt-time">
          그래서 앞으로 매일 하루에
          <input type="number" required />
          시간씩 훈련할 것이다.
        </p>
        <button type="submit" className="btn-exc">
          나는 며칠동안 훈련을 해야 1만 시간이 될까?
        </button>
      </form>
      <section className="cont-result">
        <h3 className="a11y">결과확인</h3>
        <p className="txt-wannabe">
          당신은 <strong>프로그래밍</strong> 전문가가 되기 위해서 <br />
          대략 <strong>1000</strong> 이상 훈련하셔야 합니다. :&#41;
        </p>
        <button className="btn-go" type="button">
          훈련하러가기 GO!GO!
        </button>
        <button className="btn-share" type="button">
          공유하기
        </button>
      </section>
    </main>
  );
}
