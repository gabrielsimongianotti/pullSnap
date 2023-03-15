import { SearchContainer, SearchContent } from "./styles";
import { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { BiEditAlt } from "react-icons/bi";
interface SearchProps {
  label: string;
  textButton: string;
  action: (nameOrUrl: string) => void;
}

export function Search({ label, textButton, action }: SearchProps) {
  const [searchUrlPullReq, setSearchUrlPullReq] = useState("");
  return (
    <SearchContainer>
      <SearchContent>
        <input
          type="text"
          placeholder={label}
          onChange={({ target }) => setSearchUrlPullReq(target.value)}
        />
        <button
          onClick={() => {
            action(searchUrlPullReq);
          }}
        >
          {textButton === "Editar" ? (
            <BiEditAlt size={17} fontWeight="bold" />
          ) : (
            <GrSearch size={17} fontWeight="bold" />
          )}

          {textButton}
        </button>
      </SearchContent>
    </SearchContainer>
  );
}
