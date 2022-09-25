import { useState } from "react";
import { Dialog } from "@headlessui/react";

function Photos() {
  let [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </Dialog>

      <img
        className="overflow-hidden lg:h-[21rem] lg:w-[20rem] md:h-[rem] absolute left-[100px] rounded-lg rotate-2"
        src="./assets/Alaska.png"
        alt=""
      />
      <img
        className="overflow-hidden lg:h-[21rem] lg:w-[20rem] md:h-[rem] absolute left-[450px] rounded-lg rotate-0"
        src="./assets/London.jpg"
        alt=""
      />
      <img
        className="overflow-hidden lg:h-[21rem] lg:w-[20rem] md:h-[rem] absolute right-[450px] rounded-lg rotate-4"
        src="./assets/Iceland.png"
        alt=""
      />
      <img
        className="overflow-hidden lg:h-[21rem] lg:w-[20rem] md:h-[rem] absolute right-[100px] rounded-lg rotate-3"
        src="./assets/Paris.png"
        alt=""
      />
      <img
        className="overflow-hidden lg:h-[21rem] lg:w-[20rem] md:h-[rem] absolute right-[800px] rounded-lg rotate-2"
        src="./assets/Turks.png"
        alt=""
      />
    </div>
  );
}

export default Photos;
