import React, { useEffect } from 'react';
import Nav from "../components/navbar/nav"
import style from "../../src/pages/pages.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store/actions/users-action';
import UsersCard from '../components/usersCard/UsersCard';
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()
    const isConnected = useSelector(state => state.auth.isConnected)
    const navigate = useNavigate()


    useEffect(() => {
        console.log("coucou")
        if(!isConnected){
            navigate("/connection")
        }

        dispatch(getUsers())



    }, [isConnected])


    return (
        <div>
            <div>
                <Nav />
            </div>
            <div className={style.left}></div>
            <div className={style.userlist}>

                <div className={style.usersContainer}>
                    <div >
                        <UsersCard />
                    </div>
                </div>

            </div>
            <div className={style.right}></div>
        </div>
    );
};

export default Users;