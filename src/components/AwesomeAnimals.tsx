import React from "react";

let animals = ["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"];

export default function AwesomeAnimals() {
  let counter = 0;
  return (
    <div>
      <ul>
        {animals.map((animal, index) => {
          return (
            <li key={index}>
              Awesomeness level {index + 1}: {animal}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
