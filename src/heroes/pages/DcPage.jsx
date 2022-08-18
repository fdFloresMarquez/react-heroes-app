import { HeroList } from '../components'

export const DcPage = () => {
  return (
    <>
      <header className='mt-3'>
        <h1>DC</h1>
        <hr />
      </header>

      <HeroList publisher={'DC Comics'}/>
    </>
  )
}
