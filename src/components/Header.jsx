export default function Header() {
  return (
    <div
      id="header-component"
      className="container-fluid py-3 text-white d-flex flex-column flex-md-row justify-content-between align-items-center">

      <div id="header-left"
        className="container d-flex justify-content-center justify-content-md-start gap-2 ">
        <img src="/troll_face.png" alt="troll face icon" />
        <h4>Meme Generator</h4>
      </div>

      <div id="header-right" className="container d-flex justify-content-center justify-content-md-end pe-md-4">
        <p>React Course - Project 3</p>
      </div>
    </div>
  )
}