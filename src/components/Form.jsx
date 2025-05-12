import React from "react";

const Form = ({isOpen,onClose,mode,onSubmit}) => {
  return (
    <div className="text-neutral-200">


      <dialog id="my_modal_2" className="modal" open={isOpen}>
        <div className="modal-box bg-neutral-900">
          <h3 className="font-bold text-lg">{mode?'Edit Client':'Client Details'}</h3>
          <p className="py-4">Backend not done yet..</p>
          <button className="p-2 active:scale-95 bg-green-600/60 cursor-pointer  border-neutral-600 rounded-lg " onClick={onClose}>{mode?'save changes':'add client'}</button>
        </div>
        <form method="dialog" className="modal-backdrop backdrop-blur-xs">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Form;
