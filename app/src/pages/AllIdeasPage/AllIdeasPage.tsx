import { Link } from 'react-router-dom'
import { trpc } from '../../lib/trpc'
import { getViewIdeaRoute } from '../../lib/routes'

export const AllIdeasPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getIdeas.useQuery()
  if (isLoading || isFetching) return <span>Loading..</span>
  if (isError) return <span>Error:{error.message}</span>
  return (
    <div>
      <h1>Ideanick</h1>

      {data.ideas.length &&
        data.ideas.map((idea) => (
          <div key={idea.nick}>
            <h2>
              <Link to={getViewIdeaRoute({ ideaNIck: idea.nick })}>{idea.name}</Link>
            </h2>
            <p>{idea.description}</p>
          </div>
        ))}
    </div>
  )
}
