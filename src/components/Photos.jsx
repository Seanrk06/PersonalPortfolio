function Photos() {
  return (
    <div className="mt-10 ">
      <div className=" -my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        <img
          className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate-2"
          src="./assets/Pictures/Pic1.jpg"
          alt=""
        />
        <img
          className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl -rotate-2"
          src="./assets/Pictures/Pic2.jpg"
          alt=""
        />
        <img
          className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100  sm:w-72 sm:rounded-2xl rotate-2"
          src="./assets/Pictures/Pic3.jpg"
          alt=""
        />
        <img
          className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100  sm:w-72 sm:rounded-2xl rotate-2"
          src="./assets/Pictures/Pic4.png"
          alt=""
        />
        <img
          className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl -rotate-2"
          src="./assets/Pictures/Pic5.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Photos;
