import React from 'react';
import { useState } from 'react';
import './App.css';


function App() {
    const [result, setResult] = useState('');


    const handleClick = (e) => {
        setResult(result.concat(e.target.value));
    }

    const clear = () => {
        setResult('');
    }

    const calculate = () => {
       setResult(eval(result).toString());  
    }


    return (
       <>
            <div className='calc'>
                <input type='text' placeholder='0' id='answer' value={result}/>
                <input type='button' value={9} className='button' onClick={handleClick}/>
                <input type='button' value={8} className='button' onClick={handleClick}/>
                <input type='button' value={7} className='button' onClick={handleClick}/>
                <input type='button' value={6} className='button' onClick={handleClick}/>
                <input type='button' value={5} className='button' onClick={handleClick}/>
                <input type='button' value={4} className='button' onClick={handleClick}/>
                <input type='button' value={3} className='button' onClick={handleClick}/>
                <input type='button' value={2} className='button' onClick={handleClick}/>
                <input type='button' value={1} className='button' onClick={handleClick}/>

                <input type='button' value='0' className='button' onClick={handleClick}/>
                <input type='button' value='+' className='button' onClick={handleClick}/>
                <input type='button' value='-' className='button' onClick={handleClick}/>
                <input type='button' value='/' className='button' onClick={handleClick}/>
                <input type='button' value='*' className='button' onClick={handleClick}/>
                <input type='button' value='%' className='button' onClick={handleClick}/>
                <input type='button' value='.' className='button' onClick={handleClick}/>
                <input type='button' value='C' className='button button1' onClick={clear}/>
                <input type='button' value='=' className='button button1' onClick={calculate}/> 

            </div>


            <div><p>© Khalid Misbaudeen. All rights reserved.</p></div>
       </>
    );
};

export default App;