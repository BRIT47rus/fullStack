import { Link, Outlet } from 'react-router-dom'
import { addNewIdeaRoute, getAllIdeasRoute } from '../../lib/routes'
import css from './Layout.module.scss'
export const Layout = () => {
  return (
    <div className={css.layout}>
    <div className={css.navigation}>
      <div className={css.logo}>IdeaNick</div>
      <ul className={css.menu}>
        <li className={css.item}>
          <Link className={css.link} to={getAllIdeasRoute()}>
            All Ideas
          </Link>
          <li className={css.item}>

          <Link to={addNewIdeaRoute()} className={css.link}>Add new idea</Link>
          </li>
        </li>
      </ul>
    </div>
    <div className={css.content}>
      <Outlet />
    </div>
  </div>
  )
}
