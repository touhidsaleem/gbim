import { useState } from 'react';
import './App.css';
import Button from './components/shared/Button/Button';
import DataTable from './components/shared/DataTable/DataTable';
import DateRangePicker from './components/shared/DateRangePicker/DateRangePicker';
import ProfileCard from './components/shared/ProfileCard/ProfileCard';
import Tab from './components/shared/Tab/Tab';
import Dropdown from './components/shared/Dropdown/Dropdown';
import MenuDrop from './components/shared/MenuDrop/MenuDrop';

function Test() {

    const tableData = [
        { type: "Breadcrumbs", valid: 77, invalid: 0 },
        { type: "FAQ", valid: 4, invalid: 0 },
        { type: "Review Snippet", valid: 33, invalid: 0 },
        { type: "Sitelink Checkbox", valid: 40, invalid: 0 },
    ];

    const options = ["Daily", "Weekly", "Monthly", "Yearly"];
    const [selected, setSelected] = useState("Monthly");

    const seoItems = ["Keyword Ranking", "Onpage", "Website Audit", "Backlink"];


    return (
        <div className="Test" >

            {/* <h2>Dark Variant</h2>
            <Tab variant="dark" />

            <h2>Light Variant</h2>
            <Tab variant="light" />

            <div style={{ display: "flex", justifyContent: "center", padding: "20px", background: 'red' }}>
                <DateRangePicker />
            </div>


            <Button text="My Plan" variant="success" iconClass="vip-crown-fill" />
            <Button text="Export" variant="outlined" iconClass="download-2-line" />
            <Button text="Share" variant="primary" iconClass="share-line" />
            <Button variant="danger" iconClass="power-off" />
            <Button text="View more" variant="secondary" />


            <div>
                <DataTable title="Improvements in Website" data={tableData} />
            </div>

            <div>
                <ProfileCard name="John Doe" role="Project Manager" avatar={null} />
            </div>


            <div>
                <Dropdown options={options} selected={selected} onChange={setSelected} />
            </div> */}

            <MenuDrop title="SEO" items={seoItems} />

        </div>
    );
}

export default Test;
