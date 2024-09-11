function Header() {

    return(
      <div className="headerTop">
        <header>
        <nav>
            <ul className="nav-ul">
                <li><a href="http://localhost:3000" className="nav-link">Главная</a></li>
                <li><a href="http://localhost:3000/items/" className="nav-link">Мои покупки</a></li>
                <li><a href="http://localhost:3000" className="nav-link">Статистика</a></li>
            </ul>
        </nav>
        <p className="page-title">Money Tracking</p>
        <img src="../img/check.png" alt="" />
    </header>
      </div>
    )
  }
export default Header