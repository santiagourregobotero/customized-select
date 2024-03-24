import styles from './gallerai-birthday-modal.module.scss';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import {useRef, useState} from 'react';

const GalleraiDatePicker = () => {
    const selectRefs = {
        month: useRef(null),
    };

    const [month, setMonth] = useState('Month');

    const months = [
        { value: '01', label: 'January' },
        { value: '02', label: 'February' },
        { value: '03', label: 'March' },
        { value: '04', label: 'April' },
        { value: '05', label: 'May' },
        { value: '06', label: 'June' },
        { value: '07', label: 'July' },
        { value: '08', label: 'August' },
        { value: '09', label: 'September' },
        { value: '10', label: 'Octorber' },
        { value: '11', label: 'November' },
        { value: '12', label: 'December' },
    ];

    const handleMonthChange = (event: any) => {
        setMonth(event.target.value);
        const selectedIndex = event.target.selectedIndex;
        const selectedText = event.target.options[selectedIndex].text;
        setMonth(selectedText);
    };

    return (
        <div style={{ display: 'flex', gap: '8px' }}>
                <select id="select" ref={selectRefs.month} onChange={handleMonthChange} className={month == '0' ? styles.date_selector_placeholder : styles.date_selector}>
                    <option value="0" disabled className={styles.date_selector_option_item_placeholder}>Month</option>
                    {months.map((month) => (
                        <option key={month.value} value={month.value} className={styles.date_selector_option_item}>
                            {month.label}
                        </option>
                    ))}
                </select>
                <button>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                        <div>{month}</div>
                        <ArrowDropDownIcon />
                    </div>
                </button>
        </div>
    );
};


export default GalleraiDatePicker;