import checkmark from "../src/assets/icons/accept.png";

interface CountryProps {
  id: number;
  name: string;
  isChecked: boolean;
  handleOptionClick: (id:number) => void
}

function Country({ id, name, handleOptionClick, isChecked }: CountryProps) {
  return (
    <li
      className="country-li"
      key={id}
      onClick={() => {
        handleOptionClick(id);
      }}
      onMouseDown={(e) => e.preventDefault()}
    >
      <span style={{ fontWeight: "900" }}>{name}</span>
      {isChecked && (
        <img
          src={checkmark}
          alt="Checkmark"
          style={{ width: "16px", height: "16px", marginLeft: "10px" }}
        />
      )}
    </li>
  );
}

export default Country;
