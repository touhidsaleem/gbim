import React, { useState } from 'react';
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
import Tab from './components/shared/Tab/Tab';
import Button from './components/shared/Button/Button';
// import { Bar, Doughnut, Line } from 'react-chartjs-2';


import Logout from './assets/icons/logout.svg'
import RightDoughnut from './components/shared/Doughnut/RightDoughnut';
import DataTable from './components/shared/DataTable/DataTable';
import IndexingChart from './components/shared/IndexingChart/IndexingChart';

const Dashboard = () => {

    const [dropWrapperClose, setDropWrapperClose] = useState(false)

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

    const tabs = [
        { name: "Overview" },
        { name: "Performance Monitoring" },
        { name: "Indexing" },
        { name: "Core Web Vitals" },
        { name: "Site Health" },
    ];

    const tableData = {
        "Improvements in Website": [
            { type: "Breadcrumbs", valid: 77, invalid: 0 },
            { type: "FAQ", valid: 4, invalid: 0 },
            { type: "Review Snippet", valid: 33, invalid: 0 },
            { type: "Sitelink Checkbox", valid: 40, invalid: 0 }
        ],
        "Top Opportunity Keywords": [
            { keyword: "Dog Food", impressions: "30k", clicks: "20,133", ctr: "12%" },
            { keyword: "Cat Food", impressions: "20k", clicks: "30,000", ctr: "15%" },
            { keyword: "Bird Food", impressions: "5k", clicks: "35,135", ctr: "20%" }
        ],
        "Slow-Growth Opportunity Keyword": [
            { keyword: "Food", impressions: 100, clicks: 1, ctr: "2%" },
            { keyword: "Rabbit Food", impressions: 150, clicks: 2, ctr: "3%" },
            { keyword: "Bird Food", impressions: 120, clicks: 3, ctr: "4%" }
        ]
    };




    return (
        <div className='dashboard-wrapper'>


            <div className='left-dashboard-content'>

                <div className='menu-icons-wrapper'>
                    <div className='chev-right-wrapper'>
                        <i className={`ri-arrow-right-s-line chev-right`}></i>
                    </div>
                    {iconsArr?.map((data) =>
                        <img src={data} alt='menu-icon' className='menu-icon' />
                    )}
                </div>

                <div className={`menu-drop-wrapper ${dropWrapperClose ? 'close' : ''}`} >
                    <div className='chev-right-wrapper' onClick={() => setDropWrapperClose(!dropWrapperClose)}>
                        <i className={`ri-arrow-right-s-line chev-right ${!dropWrapperClose ? 'iconOpen' : ''}`}></i>
                    </div>
                    {!dropWrapperClose &&
                        <div>
                            {menuLinks?.map((item) =>
                                <MenuDrop title={item?.title} items={item?.links} />
                            )}
                        </div>
                    }

                    {dropWrapperClose && <div className='dummy-link-text'>Menu Links Here</div>}
                </div>

            </div>

            <div className='right-dashboard-content'>

                <TitleBoard />

                <div className='tab-view-actions-wrapper'>
                    <Tab variant="light" tabs={tabs} />
                    <div className='right-actions-wrapper'>
                        <Button text="Export" variant="outlined" iconClass="download-2-line" />
                        <Button text="Share" variant="primary" iconClass="share-line" />
                        <Button variant="danger" icon={<img src={Logout} alt='logout-btn' />} />
                    </div>

                </div>


                <Bars />

                <div className='doughnut-wrapper'>
                    <LeftDoughnut />
                    <RightDoughnut />
                </div>

                <IndexingChart />

                <div className='table-wrapper'>
                    {Object.entries(tableData).map(([title, data], index) => (
                        <DataTable key={index} title={title} data={data} />
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Dashboard
