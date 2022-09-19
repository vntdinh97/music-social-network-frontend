import { useRef, useState } from 'react';
import './Player.scss';
import TimeSlider from "react-input-slider";
import { PlayIcon, PauseIcon, NextIcon, PrevIcon } from "../../assets/icons";
import audios from "../../assets/audios";
import thumb from '../../assets/images/thumb.jpg'

export const Player = () => {
    const audioRef = useRef();
    const [audioIndex, setAudioIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlay, setPlay] = useState(false);

    const handleLoadedData = () => {
        setDuration(audioRef.current.duration);
        if (isPlay) audioRef.current.play();
    };

    const handlePausePlayClick = () => {
        if (isPlay) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlay(!isPlay);
    };

    const handleTimeSliderChange = ({ x }) => {
        audioRef.current.currentTime = x;
        setCurrentTime(x);

        if (!isPlay) {
            setPlay(true);
            audioRef.current.play();
        }
    };

    return (
        <div className="player">
            <img className="song-thumbnail" src={thumb} alt="thumb" />
            <div className='song-info'>
                <h2 className="song-title">{audios[audioIndex].title}</h2>
                <p className="singer">{audios[audioIndex].artist}</p>
            </div>

            <TimeSlider
                className='time-slider'
                axis="x"
                xmax={duration}
                x={currentTime}
                onChange={handleTimeSliderChange}
                styles={{
                    track: {
                        backgroundColor: "#e3e3e3",
                        height: "2px",
                    },
                    active: {
                        backgroundColor: "#333",
                        height: "2px",
                    },
                    thumb: {
                        marginTop: "-3px",
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#333",
                        borderRadius: 0,
                    },
                }}
            />

            <div className="control-button-group">
                <div
                    className="prev-button"
                    onClick={() => setAudioIndex((audioIndex - 1) % audios.length)}
                >
                    <PrevIcon />
                </div>
                <div className="pause-play-button" onClick={handlePausePlayClick}>
                    {isPlay ? <PauseIcon /> : <PlayIcon />}
                </div>
                <div
                    className="next-button"
                    onClick={() => setAudioIndex((audioIndex + 1) % audios.length)}
                >
                    <NextIcon />
                </div>
            </div>
            
            <audio
                ref={audioRef}
                src={audios[audioIndex].src}
                onLoadedData={handleLoadedData}
                onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                onEnded={() => setPlay(false)}
            />
        </div>
    );
}