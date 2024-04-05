import { Accordion, Breadcrumbs } from '../../components'
import { guaranteeData } from '../../utils'

export const GuaranteePage = () => {
  return (
    <main className="main">
      <header className="accordion__header" >
      <Breadcrumbs current={"гарантії"}/>
        <h1 className="txt-lg mg-0" >гарантії</h1>
      </header>
      <div className='accordion'>
        {
          guaranteeData?.map(({ title, content }) => {
            return (
              <Accordion title={title} content={content} key={title} />
            )
          })
        }
      </div>
    </main>
  )
}