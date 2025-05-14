import React, { useEffect, useState } from "react";

const Form = ({ isOpen, onClose, mode, onSubmit, clientdata,status,setStatus }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [rate, setRate] = useState("");



  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  const handleSubmit =  async(e) => {
    e.preventDefault();
    try {
      const clientdata = {
        name,
        email,
        job,
        rate: Number(rate),
        isactive: status==='active',
      };
      await onSubmit(clientdata)
    } catch (error) {
      console.error("error loading client", error);
    }

    onClose();
  };


  useEffect(()=>{
    if(mode === 'edit' && clientdata){
      setName(clientdata.name)
      setEmail(clientdata.email)
      setJob(clientdata.job)
      setRate(clientdata.rate)
      setStatus(clientdata.isactive)
    }else{
      setName('')
      setEmail('')
      setJob('')
      setRate('')
      setStatus(false)
    }
  },[mode,clientdata])

  return (
    <div className="text-neutral-200 ">
      <dialog id="my_modal_2" className="modal" open={isOpen}>
        <div className="modal-box relative bg-neutral-900 ">
          <button
            className="absolute right-0 top-0 py-2 px-4 text-neutral-600 font-semibold text-lg
             cursor-pointer"
            onClick={onClose}
          >
            x
          </button>
          <h3 className="font-bold text-neutral-400 text-lg">
            {mode == "edit" ? "Edit Client" : "Client Details"}
          </h3>
          {/* input */}
          <div className="my-6 flex flex-col gap-3">
            <label className="flex p-2 rounded-md bg-neutral-800 validator border-none outline-none w-full">
              <h3 className="text-neutral-500 ">Name</h3>
              <input
                type="text"
                required
                placeholder=""
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minlength="3"
                maxlength="30"
                title="Only letters, numbers or dash"
                className="outline-none border-none px-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className="flex p-2 rounded-md bg-neutral-800 validator border-none outline-none w-full">
              <h3 className="text-neutral-500 ">Email</h3>
              <input
                type="email"
                required
                placeholder=""
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minlength="3"
                maxlength="30"
                title="Only letters, numbers or dash"
                className="outline-none border-none px-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="flex p-2 rounded-md bg-neutral-800 validator border-none outline-none w-full">
              <h3 className="text-neutral-500 ">Role</h3>
              <input
                type="text"
                required
                placeholder=""
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minlength="3"
                maxlength="30"
                title="Only letters, numbers or dash"
                className="outline-none border-none px-2"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </label>

            <div className="flex  gap-2 mb-4 justify-between mt-4">
              <label className="flex p-2 rounded-md w-1/2 bg-neutral-800 validator border-none outline-none">
                <h3 className="text-neutral-500 ">rate</h3>
                <input
                  type="number"
                  required
                  placeholder=""
                  pattern="[A-Za-z][A-Za-z0-9\-]*"
                  minlength="3"
                  maxlength="30"
                  className="outline-none border-none px-2"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </label>

              <select
                className="w-1/2 bg-neutral-800 p-2 text-neutral-400 rounded-md"
                onChange={handleStatus}
                value={status?'active':'inactive'}
              >
                <option >inactive</option>
                <option >active</option>
              </select>
            </div>
          </div>
          {/* input */}
          <button
            className="p-2 active:scale-95 bg-green-600/60 cursor-pointer  border-neutral-600 rounded-lg "
            onClick={handleSubmit}
          >
            {mode == "edit" ? "save changes" : "add client"}
          </button>
        </div>
        <form method="dialog" className="modal-backdrop backdrop-blur-xs">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Form;
