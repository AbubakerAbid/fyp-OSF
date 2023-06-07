import React, {useState } from 'react';
import { useDispatch} from 'react-redux';
import { workerSignin} from '../../actions/auth';
import { useNavigate } from 'react-router-dom';
import './myappointments.css'
  
function WorkerLogin(){
    const dispatch = useDispatch();
    const history = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const form = [username, password];
    const [error, setError] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(workerSignin(form, history));

    };

    return (
      <>
      <h1 style={{    color: '#1F253F',
      textAlign: 'center',
      marginTop: '80px'}}>Online Service Finder</h1>
      <h3 style={{    color: '#1F253F',
      textAlign: 'center',
      marginTop: '30px'}}>Worker Login</h3>
      <form className='workerloginbox' style={{
          textAlign: 'center',
          margin: '2% 36%', border: '2px solid', paddingTop: '30px', paddingBottom: '30px'
      }} onSubmit={handleSubmit}>
        {error && <p style={{color:'red'}}>{error}</p>}
        <label>
          USERNAME : 
          <input style={{padding:'5px', margin: '10px'}}
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          PASSWORD : 
          <input style={{padding:'5px', margin: '10px'}}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button style={{ margin: '10px'}}  type="submit">login</button>
        <br />
      </form>
      </>
    );
}

export default WorkerLogin;