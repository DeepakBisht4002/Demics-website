import React from "react";
import react_img from "../../../assets/react.svg"
import Button from "../Button";

const SectionTile = () => {
  return (
    <div className=" w-[350px] border flex flex-col md:flex-row">
      <div className="h-1/2 w-1/2  flex items-center justify-center">
        <img src={react_img} className="w-full h-full"/>
      </div>
      <div className="h-1/2 flex flex-col justify-center gap-5">
        <h2 className="text-4xl font-semibold text-left">Branding</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          ducimus, reprehenderit magni voluptas sint eos voluptates pariatur
          consequuntur dolor atque, itaque reiciendis. Distinctio in, dolores
          reiciendis officia numquam delectus perspiciatis nesciunt adipisci
          atque eius saepe.x
        </p>
        <Button label={"learn more"} />
      </div>
    </div>
  );
};

export default SectionTile;
