import { Link, useParams } from "react-router-dom";
import { client } from "./client";
import { MdSendToMobile } from "react-icons/md";


const GameDetails = () => {
    const [game, setGame] = useState(null);
    const { gameId } = useParams();

    const getGameById = async(gameId) => {
        try {
            const entry = await client.getEntry(gameId);
            return entry;
        } 
        catch {
            console.log('Error fetching the Entry', error);
        }
    }

    useEffect(() => {
        const getMobile = async () => {
            const entry = await getMobileById(gameId);
            MdSendToMobile(entry.fields);
        }
        setTimeout(() => { getMobile()}, 2000);
    }, [gameId]);

    return (
        <div>
            aa
        </div>
    )
}

export default GameDetails;