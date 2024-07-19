/**
 * author : yangbo
 * date : 2023/09/18 09:42:04
 * fileName: index.jsx
 * description :
 **/
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Template from '@template';
import Fish from '@template/fish';
import TodoList from '@template/todoList';
import Fruit from '@template/todoList/fruit';

function Preview(props) {
    return (
        <>
            <div>
                <NavLink to="/project">project</NavLink>
                <span> | </span>
                <NavLink to="/preview">preview</NavLink>
                <span> | </span>
                <NavLink to="/manage">manage</NavLink>
                <span> | </span>
                <NavLink to="/authority">authority</NavLink>
                <span> | </span>
                <NavLink to="/authority/characterSet">characterSet</NavLink>
                <span> | </span>
                <NavLink to="/authority/userManage">userManage</NavLink>
            </div>
            <div>Preview</div>
            <Template />
            <Fish />
            <TodoList />
            <Fruit />
        </>
    );
}

export default Preview;
