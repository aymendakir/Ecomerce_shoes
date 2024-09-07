import shoes from "../assets/images/nike-free-nike-air-max-sneakers-shoe-red-shoes-78c3ee1eb5170ce50ef0c55755e33899.png";

function MailList() {
  return (
    <div className="w-[70%] h-[42vh] mx-auto bg-yellow-400 rounded-lg flex flex-col items-center justify-center gap-5 relative">
      <div className="flex flex-col gap-4 mx-auto w-[80%]">
        <h1 className="text-3xl font-semibold font-mono ">
          We Have something for you!
        </h1>
        <p className="w-[70%] font-light font-serif">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos
          maxime ducimus molestiae quibusdam vel voluptatum blanditiis totam
          fugit, explicabo repellat eum corporis ut fugiat, error, enim ipsa
          officia cupiditate.
        </p>
        <div className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black">
          <input
            type="text"
            className="bg-transparent p-2 w-full text-black placeholder:text-black focus-within:border-none focus-visible:border-none focus:border-none"
            placeholder="Email"
          />
        </div>
        <button className="text-sm font-semibold rounded-full p-2 text-white bg-black w-[120px] mt-5">
          Subscribe
        </button>
      </div>
      <img
        src={shoes}
        className="absolute w-[270px] right-0 -top-10 -rotate-12"
      />
    </div>
  );
}

export default MailList;
