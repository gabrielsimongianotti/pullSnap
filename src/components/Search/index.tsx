import { SearchContainer } from "./styles";

export function Search() {
  return (
    <SearchContainer>
      <input type="text" placeholder="Link do pull request" />
      <button>Pesquisar</button>
    </SearchContainer>
  );
}
