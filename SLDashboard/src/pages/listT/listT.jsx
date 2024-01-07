import "./listT.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import DatatableT from "../../components/datatable/DatatableT"
const ListT = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        {/* <Navbar/> */}
        <DatatableT/>
      </div>

    </div>
  )
}

export default ListT;