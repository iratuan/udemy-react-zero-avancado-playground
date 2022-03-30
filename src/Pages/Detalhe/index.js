
import {useParams} from 'react-router-dom'

export default function Detalhe(){
    const { id } = useParams();
return(<>
        <h1>Detalhe do produto {id} </h1>
    </>)
}