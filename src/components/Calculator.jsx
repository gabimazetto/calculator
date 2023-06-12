import React, { useState } from 'react';
import './Calculator.css';


export function Calculator() {

    const [num, setNum] = useState('');

    function inputNum(e) {
        const input = e.target.id;
        if(num === 0) {
            setNum(input);
        }else {
            setNum(num + input);
        }
    }

    function clear(e) {
        setNum(0);
    }

    return (
        <>
        <div>
            <div className="container">
                <div className="calculator dark">
                    <div className="theme-toggler active">
                        <i className="toggler-icon"></i>
                    </div>
                    <div className="display-screen">
                        <div id="display">{num}</div>
                    </div>
                    <div className="buttons">
                        <table>
                            <tr>
                                <td><button className="btn-operator" id="clear" onClick={clear}>C</button></td>
                                <td><button className="btn-operator" id="/">&divide;</button></td>
                                <td><button className="btn-operator" id="*">&times;</button></td>
                                <td><button className="btn-operator" id="backspace">&lt;</button></td>
                            </tr>
                            <tr>
                                <td><button className="btn-number" id="7" onClick={inputNum}>7</button></td>
                                <td><button className="btn-number" id="8" onClick={inputNum}>8</button></td>
                                <td><button className="btn-number" id="9" onClick={inputNum}>9</button></td>
                                <td><button className="btn-operator" id="-">-</button></td>
                            </tr>
                            <tr>
                                <td><button className="btn-number" id="4" onClick={inputNum}>4</button></td>
                                <td><button className="btn-number" id="5" onClick={inputNum}>5</button></td>
                                <td><button className="btn-number" id="6" onClick={inputNum}>6</button></td>
                                <td><button className="btn-operator" id="+" >+</button></td>
                            </tr>
                            <tr>
                                <td><button className="btn-number" id="1" onClick={inputNum}>1</button></td>
                                <td><button className="btn-number" id="2" onClick={inputNum}>2</button></td>
                                <td><button className="btn-number" id="3" onClick={inputNum}>3</button></td>
                                <td rowSpan="2"><button className="btn-equal" id="equal">=</button></td>
                            </tr>
                            <tr>
                                <td><button className="btn-operator" id="(">(</button></td>
                                <td><button className="btn-number" id="0" onClick={inputNum}>0</button></td>
                                <td><button className="btn-operator" id=")">)</button></td>

                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}