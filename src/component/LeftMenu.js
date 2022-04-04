import React, {useCallback, useEffect} from 'react';
import '../css/Base.scss';
import '../css/LoginForm.scss';
import {Route, Routes, Link} from 'react-router-dom'
import axios from "axios";
import {array} from "prop-types";


const LeftMenu = () => {
    const menuArray = [{id: 1, name: '메인화면', link: '/'}, {id: 2, name: '카운트', link: '/Count'}, {id: 3, name: 'TodoList', link: '/TodoList'}];

    const LeftMenuCB = useCallback(() => {

        const MenuList = () => {

            const array = [...menuArray]

            const result = array.map((link, index) => {
                    return <li><Link key={link.id} to={link.link}>{link.name}</Link></li>
                }
            )
            console.log(result)
            return result;
        }
       return MenuList();
    },[menuArray])

    const data = axios.get('localhost:8282')

    console.log("LeftMenu")
    return (
        <div style={{ marginTop:'10px', marginRight:'10px', width: '200px', height: 'auto'}}>
            <div className="text-center" style={{margin: '5px'}}>
                <div className="logo">Login</div>
                <div className="login-form-1" style={{backgroundColor: 'white'}}>
                    <form id="login-form" className="text-left">
                        <div className="login-form-main-message"></div>
                        <div className="main-login-form">
                            <div className="login-group">
                                <div className="form-group">
                                    <label htmlFor="lg_username" className="sr-only">Username</label>
                                    <input type="text" className="form-control" id="lg_username" name="lg_username" placeholder="username" style={{width:'120px'}}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lg_password" className="sr-only">Password</label>
                                    <input type="password" className="form-control" id="lg_password" name="lg_password" placeholder="password" style={{width:'120px'}}/>
                                </div>
                            </div>
                            <button type="submit" className="login-button"><i className="fa fa-chevron-right"></i>
                            </button>
                        </div>
                        <div className="etc-login-form">
                            <p>forgot your password? <a href="#">click here</a></p>
                            <p>new user? <a href="#">create new account</a></p>
                        </div>
                    </form>
                </div>
            </div>
            <div key="메뉴" className="menu">
                <ul>
                    {LeftMenuCB()}
                </ul>
            </div>

        </div>

    )
}

export default React.memo(LeftMenu);