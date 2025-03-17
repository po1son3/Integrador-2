
const SearchBar = () => {
  return (
    <div className="search-bar">
    <div className="search-bar__logo-container">
      <span className="texto-largo">Luxury Paradise</span>
      <span className="texto-corto">LP</span>
    </div>
    <form action="#" class="search-bar__form-container">
      <label htmlFor="busqueda" className="search-bar__form-label">Buscar Productos</label>
      <input type="search" id="busqueda" className="search-bar__form-search" />
      <button type="submit" className="search-bar__form-submit">Buscar</button>
    </form>
    <div className="search-bar__carrito-container">
      <span className="iconamoon--shopping-bag"></span>
    </div>
    <div className="menu-toogle">
      <label htmlFor="menu" className="menu-toogle__label">
        <span className="menu-toogle__top-bread"></span>
        <span className="menu-toogle__meat"></span>
        <span className="menu-toogle__bottom-bread"></span>
      </label>
    </div> 
  </div> 
  )
}

export default SearchBar