import { RoofingOutlined, TrendingUpOutlined, QueueMusicOutlined } from "@mui/icons-material";
import { useNavigate  } from "react-router-dom";
import './LeftMenu.css';

export const LeftMenu = () => {
    const navigate = useNavigate();
    const handleNavigate = (url) => {
        navigate(`/${url}`)
    }
    return (
        <div className="left-menu">
            <div className="nav-button" onClick={() => handleNavigate('')}>
                <RoofingOutlined color="secondary" fontSize="large"></RoofingOutlined>
                <p>Home</p>
            </div>
            <div className="nav-button" onClick={() => handleNavigate('trending')}>
                <TrendingUpOutlined color="secondary" fontSize="large"></TrendingUpOutlined>
                <p>Trending</p>
            </div>
            <div className="nav-button" onClick={() => handleNavigate('playlist')}>
                <QueueMusicOutlined color="secondary" fontSize="large"></QueueMusicOutlined>
                <p>Playlist</p>
            </div>
        </div>
    );
}