import React from "react";

const GroupBtn = () => {
  return (
    <>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button " class="bTn1 btn btn-outline-danger mx-2 my-2">
          Login
        </button>
        <button type="button" class="bTn1 btn btn-outline-danger mx-2 my-2">
          Sign up
        </button>
        <button type="button" class="bTn1 btn btn-outline-danger mx-2 my-2">
          Help
        </button>
      </div>
    </>
  );
};

export default GroupBtn;
