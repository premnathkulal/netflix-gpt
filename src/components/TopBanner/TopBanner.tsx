import BannerImage from '../../assets/banner-bg.jpg'
import './TopBanner.scss';

const TopBanner = () => {
    return (
        <div className="top-banner">
            <img src={BannerImage} alt="banner-img" srcSet={BannerImage} />
        </div>
    )
}

export default TopBanner
