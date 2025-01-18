import Project from "@/components/Project";
import React from "react";
import SnakeGame from "../../public/SnakeGame.png";

function projects() {
  return (
    <div className="grid grid-cols-4 items-center pl-12 pt-6 content-center ">
      <Project image={SnakeGame} title="SnakeGame" />
    </div>
  );
}

export default projects;
