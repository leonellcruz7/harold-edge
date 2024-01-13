import React from "react";

const Eight = () => {
  const people = {
    "OFFICIATING MINISTER": "Pastor Sonner L. Soriano",
    "PARENTS BRIDE & GROOM": [
      "Elsie Villanueva",
      "Eleazar Villanueva",
      "Leonila A. Cruz",
    ],
    "PRINCIPAL SPONSORS": [
      "Mrs. Shelly Marie Cayaban - Mr. Adlai Cayaban",
      "Dra. Sierry Tendero - Bishop Efraim Tendero",
      "Mrs. Irma De Leon - Mr. Jonnel De Leon",
      "Ms. Zenaida Junsay",
      "Ms. Adelaida Pen",
      "Mrs. Roselyn Ejercito - Mr. Lemuel Ejercito",
      "Mrs. Victoria Soriano - Mr. Roseller Soriano",
      "Mrs. Jeniffer Bacolod - Mr. Julius Bacolod",
    ],
    "BEST MAN": "Lazarus De Guzman",
    "MAID OF HONOR": "Micah Lorena Antonio",
    "GROOMS MEN": [
      "Kyle Planta",
      "Juan Gabriel Gan",
      "Ivan Pineda",
      "RJ Catalan",
      "Sean Bacolod",
    ],
    "BRIDESMAIDS & MEN": [
      "Pauline Grace Villanueva",
      "Elah Eunice Tendero",
      "Blue Ivan Olfindo",
      "James Jobli",
      "Jenisis Patricio",
    ],
    "FLOWER BOYS": [
      "Lance Edward Nejal",
      "Edmond Dave Esponga",
      "Marco Edil Medoza",
      "Imman Narciso",
    ],
  };

  const keys = Object.keys(people);

  return (
    <div id="entourage" className="px-4 py-14 text-[#2F454E]">
      <p className="maple text-4xl text-center">Entourage</p>
      <div className="text-center flex flex-col gap-4 mt-10">
        {keys.map((key, index) => {
          return (
            <div key={index}>
              <p className="uppercase font-semibold">{key}</p>
              <div>
                {typeof people[key] === "string" ? (
                  <p>{people[key]}</p>
                ) : (
                  people[key].map((item, index) => {
                    return <p key={index}>{item}</p>;
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Eight;
