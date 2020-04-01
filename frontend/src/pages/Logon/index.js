import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi'

import './styles.css';
import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';

import api from '../../service/api';

export default function Logon(){
    const [id,setId] = useState('');
    const history = useHistory();

    async function handleLogon(e){
        e.preventDefault();
        try {
            const response= await api.post('sessions',{id});
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);

            history.push('/profile');
        } catch (error) {
            alert('Falha no login, tente novamente.')
        }
    }
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="be the hero"/>
                <form onSubmit={handleLogon}>
                    <h1>Faça seu Logon</h1>
                    <input 
                        type="text" 
                        placeholder="Sua id"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type='submit'>Entrar</button>

                    <Link to="/register" className="black-link">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro.
                    </Link>
                </form>
            </section>
            <img src={herosImg} alt="Heros"/>
        </div>
    )
}