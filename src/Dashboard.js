import React from 'react';
import './Dashboard.css';
import FourSqaure from './icons/four-squares.svg';
import Adsense from './icons/adsense.svg';
import Analytics from './icons/analytics.svg';
import Attach from './icons/attach.svg';
import Seo from './icons/seo.svg';
import ContentSearch from './icons/content-search.svg';
import Meta from './icons/meta.svg';
import PowerOff from './icons/power-off.svg';
import SocialMedia from './icons/social-media.svg';
import Robot from './icons/robot.svg';
import Search from './icons/search.svg';
import StarBars from './icons/star-bars.svg';
import Wallet from './icons/wallet.svg';
import Bars from './icons/bars.svg';
import MenuDrop from './components/shared/MenuDrop/MenuDrop';

const Dashboard = () => {

    const iconsArr = [Search, FourSqaure, StarBars, Seo, Adsense, Meta, Bars, ContentSearch, SocialMedia, Analytics, Attach, Wallet, Robot, PowerOff]


    const menuLinks = [
        {
            title: 'SEO',
            links: ["Keyword Ranking", "Onpage", "Website Audit", "Backlink"]
        },
        {
            title: 'Social',
            links: ["Facebook", "Instagram", "Planning"]
        },
        {
            title: 'Paid Media',
            links: ["Google Ads", "Meta Ads"]
        },
        {
            title: 'Analytics & Traffic',
            links: ["Google Analytics", "GSC"]
        },
        {
            title: 'Tools',
            links: ["Keyword Ranking", "Onpage", "Website Audit", "Backlink"]
        },
    ]

    return (
        <div className='dashboard-wrapper'>
            <div className='left-dashboard-content'>
                <div className='menu-icons-wrapper'>
                    <i className={`ri-arrow-right-s-line chev-right`}></i>
                    {iconsArr?.map((data) =>
                        <img src={data} alt='menu-icon' className='menu-icon' />
                    )}
                </div>
                <div className='menu-drop-wrapper'>
                    <i className={`ri-arrow-right-s-line chev-right`}></i>
                    {menuLinks?.map((item) =>
                        <MenuDrop title={item?.title} items={item?.links} />
                    )}

                </div>
            </div>

            <div className='right-dashboard-content'>

            </div>

        </div>
    )
}

export default Dashboard
