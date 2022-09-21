import React, { useEffect } from 'react';
import Nav from "../components/navbar/nav"
import style from "../../src/pages/pages.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store/actions/users-action';
import UsersCard from '../components/usersCard/UsersCard';

const Users = () => {
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()


    useEffect(() => {

        dispatch(getUsers())



    }, [])


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