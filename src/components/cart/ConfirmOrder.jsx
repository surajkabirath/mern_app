import React from 'react'

const ConfirmOrder = () => {
  return (
<section className="confirm_order">
  <main className="confirm_order_details">
    <h1>Confirm Order</h1>
    <form  className="confirm_order_details_form">
      <div>
        <label >Cash On Delivery</label>
        <input type="radio" name='payment' />

      </div>
      <div>
      <label >Online</label>
      <input type="radio" name='payment' />
      </div>
      <button type='submit'>Place Order</button>
    </form>
  </main>
</section>
  )
}

export default ConfirmOrder