import { RiNotification4Line } from "react-icons/ri";

function LoginStatus() {
  return (
    <div className="flex items-center gap-2 relative">
      <div className="size-10 rounded-full border-[1px] border-[#9CA5B0]">
        <img
          className="w-full overflow-hidden object-cover rounded-full"
          src="/user-profile-image.jpg"
          alt="user image"
        />
      </div>
      <p className="text-base text-black font-sans font-bold">Harvey Mark</p>
      <span className="absolute right-0 flex justify-center items-center">
        <RiNotification4Line className="text-2xl text-[#9CA5B0]" />
      </span>
    </div>
  );
}

export default LoginStatus;
