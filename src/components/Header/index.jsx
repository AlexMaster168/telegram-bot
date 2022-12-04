import React from 'react';
import "./Header.css"
import Button from "../Button";
import {useTelegram} from "../../hooks/useTelegram";

const Index = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Index;
