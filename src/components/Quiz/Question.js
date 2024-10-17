/*
    MSSV: CE181662
    Ho ten: Tran Gia Bao
*/

import Button from 'react-bootstrap/Button';
import "./quiz.scss";

function Question({question, option, selectedOption, optionSelect, submitSelect}) {
    return (
        <>
            <h4>{question}</h4>
            <div className="quiz__question">
                <ul className='quiz__list'>
                    {
                        option.map((Option, i) => (
                            <li key={i} className='quiz__item'>
                                <input className='quiz__input' type="radio" value={Option} checked={selectedOption===Option} onChange={() => optionSelect(Option)}/>
                                {Option}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <Button onClick={submitSelect} disabled={!selectedOption} className="next__button" variant='success'>Next</Button>
        </>
    )
}

export default Question;