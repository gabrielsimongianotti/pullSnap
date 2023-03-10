import { SearchContainer } from "./styles";
import Link from "next/link";
import { useState } from "react";

interface SearchProps {
  label: string;
  textButton: string;
  action: (nameOrUrl: string) => void;
}

export function Search({ label, textButton, action }: SearchProps) {
  const [searchUrlPullReq, setSearchUrlPullReq] = useState("");
  return (
    <SearchContainer>
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
        {textButton}
      </button>
    </SearchContainer>
  );
}
