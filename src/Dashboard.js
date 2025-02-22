import React from 'react';
import './Dashboard.css';
import FourSqaure from './assets/icons/four-squares.svg';
import Adsense from './assets/icons/adsense.svg';
import Analytics from './assets/icons/analytics.svg';
import Attach from './assets/icons/attach.svg';
import Seo from './assets/icons/seo.svg';
import ContentSearch from './assets/icons/content-search.svg';
import Meta from './assets/icons/meta.svg';
import PowerOff from './assets/icons/power-off.svg';
import SocialMedia from './assets/icons/social-media.svg';
import Robot from './assets/icons/robot.svg';
import Search from './assets/icons/search.svg';
import StarBars from './assets/icons/star-bars.svg';
import Wallet from './assets/icons/wallet.svg';
import BarImage from './assets/icons/bars.svg';
import MenuDrop from './components/shared/MenuDrop/MenuDrop';
import TitleBoard from './components/TitleBoard/TitleBoard';
import LeftDoughnut from './components/shared/Doughnut/LeftDougnut';
import Bars from './components/shared/Bars/Bars';
import { Line } from 'react-chartjs-2';
// import { Bar, Doughnut, Line } from 'react-chartjs-2';

const Dashboard = () => {

    const iconsArr = [Search, FourSqaure, StarBars, Seo, Adsense, Meta, BarImage, ContentSearch, SocialMedia, Analytics, Attach, Wallet, Robot, PowerOff]


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


    const barData = {
        labels: ["Jan 25", "Feb 25", "Mar 25", "Apr 25", "May 25", "Jun 25", "Jul 25", "Aug 25", "Sep 25", "Oct 25", "Nov 25", "Dec 25"],
        datasets: [
            {
                label: "Clicks",
                data: [100, 140, 160, 180, 200, 180, 170, 175, 165, 155, 150, 160],
                backgroundColor: "#325789",
            },
        ],
    };

    const doughnutData = {
        labels: ["www.abc.com/services", "www.abc.com/home", "www.demo.com/home"],
        datasets: [
            {
                data: [600, 800, 500],
                backgroundColor: ["#5CD3A8", "#FFC85C", "#FE6B6B"],
            },
        ],
    };

    const doughnutDataNegative = {
        labels: ["www.abc.com/services", "www.abc.com/services", "www.demo.com/home"],
        datasets: [
            {
                data: [4, 2, 1],
                backgroundColor: ["#FE6B6B", "#FFA07A", "#FF6347"],
            },
        ],
    };

    const lineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Pages Indexed",
                data: [120, 140, 160, 190, 150, 170, 130, 180, 160, 150, 140, 135],
                borderColor: "#2D60FF",
                backgroundColor: "rgba(45, 96, 255, 0.2)",
                fill: true,
            },
        ],
    };



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

                <TitleBoard />


                {/* <Bars /> */}


                {/* <Line data={lineData} /> */}
                {/* <LeftDoughnut /> */}

            </div>

        </div>
    )
}

export default Dashboard
