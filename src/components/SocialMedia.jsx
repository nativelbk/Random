/** @format */

export default function SocialMedia(props) {
  return (
    <section className="w-fit flex flex-col gap-3 items-center">
      <div className=" w-[150px] h-[90px]"> <img  className="" src={`${props.social}`} alt="" /></div>
      <div className="text-white flex gap-4 items-center flex-col ">
        <p className="font-bold text-[20px] ">{props.name}</p>
        <p>{props.contact}</p>
      </div>
    </section>
  );
}
