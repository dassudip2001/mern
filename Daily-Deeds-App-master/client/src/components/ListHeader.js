import { useState } from "react";
import Modal from "./Modal";
import { useCookies } from "react-cookie";

const ListHeader = ({ getData, listName }) => {
  const[cookies, setCookie, removeCookie]= useCookies(null)
  const [showModal, setShowModal] = useState(false);


  const signOut = () => {
    removeCookie('Email')
    removeCookie('AuthToken')
    window.location.reload()
  };

  return (
    <div className="list-header">
      <h2> {listName}</h2>
      <div className="button-container">
        <button className="create" onClick={() => setShowModal(true)}>
          ADD NEW
        </button>
        <button className="sign-out" onClick={signOut}>
          SIGN OUT
        </button>
      </div>
      {showModal && (
        <Modal mode={"create"} setShowModal={setShowModal} getData={getData} />
      )}
    </div>
  );
};

export default ListHeader;
