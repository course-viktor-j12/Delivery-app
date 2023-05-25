import { useRouteError } from "react-router-dom"

export const Error = () => {
    const error = useRouteError()
    return (
        <div className="error-page">
            <h1>Oops!</h1>
            <h2>{error.statusText ?? error.message}</h2>
        </div>
    )
}