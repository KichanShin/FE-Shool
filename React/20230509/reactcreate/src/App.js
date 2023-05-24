import { useState } from "react";
import Login from "./Login";
import Homepage from "./Homepage";
import Modal from "./Modal";

function App() {
  const user = {
    idUser: "jaehyun@weniv.com",
    pwUser: "1234",
  };

  const [login, setLogin] = useState(false);
  const [modalShow, setModalShow] = useState(true);

  function modalClose() {
    setModalShow(false);
  }

  return (
    <>
      {login ? <Homepage /> : <Login infoUser={user} setLogin={setLogin} />}
      {modalShow && (
        <Modal modalClose={modalClose}>
          <h2>사용약관에 대해 말씀 드리겠습니다. </h2>
          <p>
            ㅇㅁㅁㅇㄴㅁㄴㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇㅇㅁㄴㅁㅇㄴㅇㄴㅁㄴㅇㅁㅇㄴㅁㅇㄴㅁㄴㅇㅁㅁㄴㅇㄴㅁㄴㅇㅁㅇㄴㅁ
          </p>
          <a href="#none">더 보기</a>
        </Modal>
      )}
      ;
    </>
  );
}

export default App;
