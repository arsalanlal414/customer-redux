import './sidebar.scss'

function Sidebar() {
  return (
    <div className='sidebar'>
        <img src="/images/images.png" alt="logo" />
        <div className="menu">
            <a href="/">
                <img src="./images/customers icon.png" alt=""/>
                <span>CUSTOMERS</span>
            </a>
        </div>
    </div>
  )
}

export default Sidebar