import { SearchContainer } from "./styles";
import Link from 'next/link'
import { useState } from "react";

export function Search({label, textButton, action}:{label:string, textButton:string, action:(nameOrUrl:string)=>void }) {
const [ nameOrUrl, setNameOrUrl ]= useState('')
  return (
    <SearchContainer>
      <input type="text" placeholder={label} onChange={({target})=>setNameOrUrl(target.value)}/>
      {/* <Link href="/post" > */}
        <button onClick={()=>{action(nameOrUrl)}}>{textButton}</button>
      {/* </Link> */}
    </SearchContainer>
  );
}
