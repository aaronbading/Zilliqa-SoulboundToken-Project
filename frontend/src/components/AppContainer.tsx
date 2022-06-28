import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import cn from 'classnames';

export default function AppContainer() {
  return (
    <div>
      <Navbar />
<<<<<<< HEAD
      <div className={cn()}>
=======
      <div className={cn('')}>
>>>>>>> 2e08fa8455f0c65a1c91975979f26d9929cf8267
        <Outlet />
      </div>
    </div>
  );
}
