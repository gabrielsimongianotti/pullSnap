export interface SearchProps {
  label: string
  textButton: string
  action: (nameOrUrl: string) => Promise<void>
}
