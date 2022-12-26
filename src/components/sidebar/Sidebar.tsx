import { NavLink } from 'react-router-dom';
import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrp">
        <div className="sidebar__logo">
          <p> Logo </p>
        </div>
        <div className="sidebar__links">
          <ul>
            <li>
              <NavLink to="/products">
                <p>Products</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
