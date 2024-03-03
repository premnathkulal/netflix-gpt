import './VideoTitle.scss';
import Button from '../Button/Button';

interface VideoTitleProps {
    title: string;
    overview: string;
}

const VideoTitle = (props: VideoTitleProps) => {
    const { title, overview } = props;
    return (
        <div className="video-title">
            <h1>{title}</h1>
            <p>{overview}</p>
            <div className="video-title-btn-grp">
                <Button
                    text="Play"
                    width="30%"
                    textColor="#000"
                    bacgroundColor="#fff"
                    clickHandler={() => { }}
                />
                <Button
                    text="More Info"
                    width="35%"
                    textColor="#fff"
                    bacgroundColor="#777"
                    clickHandler={() => { }}
                />
            </div>
        </div>
    );
};

export default VideoTitle;
