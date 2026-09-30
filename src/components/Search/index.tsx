import { SearchContainer, SearchContent, LoadSharp } from './styles'
import { useState } from 'react'
import { GrSearch } from 'react-icons/gr'
import { BiEditAlt } from 'react-icons/bi'
import { SearchProps } from './types'
export function Search({ label, textButton, action }: SearchProps) {
  const [searchUrlPullReq, setSearchUrlPullReq] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <SearchContainer>
      <SearchContent>
        <input
          type="text"
          placeholder={label}
          onChange={({ target }) => setSearchUrlPullReq(target.value)}
        />
        <button
          onClick={async () => {
            setLoading(true)
            await action(searchUrlPullReq)
            setLoading(false)
          }}
        >
          {textButton === 'Editar' ? (
            <BiEditAlt size={17} fontWeight="bold" />
          ) : loading ? (
            <LoadSharp size={17} fontWeight="bold" />
          ) : (
            <GrSearch size={17} fontWeight="bold" />
          )}
          {textButton}
        </button>
      </SearchContent>
    </SearchContainer>
  )
}
