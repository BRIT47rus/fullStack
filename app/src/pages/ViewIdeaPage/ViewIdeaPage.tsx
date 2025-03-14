import { useParams } from "react-router-dom"
import { VievIdeaRouteParams } from "../../lib/routes"

export const ViewIdeaPage = () => {
  const {ideaNIck}=useParams() as VievIdeaRouteParams

  return( <div>
    <h1>{ideaNIck}</h1>
    <p>Description 1</p>
    <div>
        <p>Text paragrag 1</p>
        <p>Text paragrag 2</p>
        <p>Text paragrag 3</p>
    </div>
  </div>)
}
