import React from "react";

const Menu = () => {
    return (
        <>
            <div className="dropdown text-start mx-2" data-bs-theme="light">
                <button className="btn btn-outline-danger dropdown-toggle;" type="button" id="dropdownMenuButtonLight" data-bs-toggle="dropdown" aria-expanded="false">
                Menu Bar
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonLight">
                    <li><a className="dropdown-item active" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>
            </div>
        </>
  );
};

export default Menu;