import React from 'react'
import Logo from '../../assets/images/gbim-logo.svg'
import SettingIcon from '../../assets/icons/search-console-icon.svg'
import './TitleBoard.css'
import DateRangePicker from '../shared/DateRangePicker/DateRangePicker'

const TitleBoard = () => {
    return (
        <div className='board'>
            <img src={Logo} alt='gbim-logo' className='logo-img' />

            <span className='google-search'>Google Search Console <img src={SettingIcon} alt='icon' className='setting-icon' /></span>

            <DateRangePicker />

        </div>
    )
}

export default TitleBoard
