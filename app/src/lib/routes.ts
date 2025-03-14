const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
    return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>
  }
  export const viewIdeaRouteParams = getRouteParams({ideaNIck:true})
export type VievIdeaRouteParams= typeof viewIdeaRouteParams

export const getAllIdeasRoute = () => '/';
export const getViewIdeaRoute = ({ ideaNIck }:VievIdeaRouteParams) => `/ideas/${ideaNIck}`
