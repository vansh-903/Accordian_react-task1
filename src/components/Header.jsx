import React, { useState } from 'react'
import './header.css';
import data from './data';

function Header() {

    const [selected, setSelected] = useState(null);
    const [multiple, setMultiple] = useState([]);
    const [enablemulti, setEnablemulti] = useState(false);

    function handleOpen(getCurrentId) {
        console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    function handleMultiple(getCurrentId) {
        let copy = [...multiple];
        const findIndex = copy.indexOf(getCurrentId);
        console.log(findIndex);
        if(findIndex === -1) copy.push(getCurrentId);
        else copy.splice(findIndex, 1);

        setMultiple(copy);
    }
    console.log(selected,multiple);

    return (
        <div className='accordians'>
            <button onClick={() => setEnablemulti(!enablemulti)}>Enable multiple selection</button>
            <div className='text'>
                {
                    data && data.length > 0 ? 
                    data.map((dataItem)=> (
                        <div className='item'>
                            <div onClick={ enablemulti ? () => handleMultiple(dataItem.id) : () =>handleOpen(dataItem.id)} className='title'>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enablemulti ? 
                                multiple.indexOf(dataItem.id) !== -1 && (
                                <div className='content'>
                                    {dataItem.answer}
                                </div>
                                )
                                : selected === dataItem.id && ( <div className='content'>{dataItem.answer}</div>)
                            }
                        </div>
                    ))
                    : <div>No data</div>
                }
            </div>
        </div>
    )
}

export default Header;
