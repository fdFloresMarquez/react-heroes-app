import { HeroList } from '../components'

export const MarvelPage = () => {
  return (
    <>
      <header className='mt-3'>
        <h1>Marvel</h1>
        <hr />
      </header>

      <HeroList publisher={'Marvel Comics'}/>
    </>
  )
}
