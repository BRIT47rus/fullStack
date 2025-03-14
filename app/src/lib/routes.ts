type ideaNickProp = {
    ideaNIck: string;
}

export const getAllIdeasRoute = () => '/';
export const getViewIdeaRoute = ({ ideaNIck }:ideaNickProp) => `/ideas/${ideaNIck}`
