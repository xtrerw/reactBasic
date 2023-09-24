import { useParams } from "react-router-dom";

export function Book() {
    const {id}=useParams();
    return <h1>libro {id}</h1>
}
