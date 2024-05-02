import "./button.css";

export const Button = ({ id, character, dataType, clickar }) => {
  return (
    <button onClick={() => clickar(character, dataType)} id={id} data-type={dataType} className="button">
      {character}
    </button>
  );
};
