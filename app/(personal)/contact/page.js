

export default function page() {
  return (
    <div>
  <main>
    <div className="container">
      <div className="title t2">
        <h1>Contact us</h1>
      </div>
      <form action="#">
        <div className="row">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <textarea name id placeholder="Type your message" defaultValue={""} />
        <button>Submit</button>
      </form>
    </div>
  </main>
  <img className="main-bg" src="images/main2.svg" alt="" />
</div>

  )
}
