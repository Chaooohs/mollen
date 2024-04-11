import { Accordion, Breadcrumbs } from '../../components'
import { returnData } from '../../utils'

export const ReturnPage = () => {
  return (
    <main className="main">
      <header className="accordion__header" >
      <Breadcrumbs current={"повернення"}/>
        <h1 className="txt-xl mg-0" >повернення та обмін</h1>
      </header>
      <div className='accordion'>
        {
          returnData?.map(({ title, content }) => {
            return (
              <Accordion title={title} content={content} key={title} />
            )
          })
        }
      </div>
    </main>
  )
}
