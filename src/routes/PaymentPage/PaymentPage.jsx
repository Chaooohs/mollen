import { Accordion, Breadcrumbs } from '../../components'
import { paymentData } from '../../utils'

export const PaymentPage = () => {
  return (
    <main className="main">
      <header className="accordion__header" >
      <Breadcrumbs current={"доставка"}/>
        <h1 className="txt-xl mg-0" >доставка та оплата</h1>
      </header>
      <div className='accordion'>
        {
          paymentData?.map(({ title, content }) => {
            return (
              <Accordion title={title} content={content} key={title} />
            )
          })
        }
      </div>
    </main>
  )
}
