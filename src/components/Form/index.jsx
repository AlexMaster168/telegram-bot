import React, {useCallback, useEffect} from 'react';
import "./Form.css"
import {useTelegram} from "../../hooks/useTelegram";
import useInput from "../../hooks/useInput";

const Form = () => {
    const country = useInput('');
    const street = useInput('');
    const phone = useInput();
    const subject = useInput('physical');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            phone,
            subject
        }
        tg.sendData(JSON.stringify(data));
    }, [country, street, phone, subject])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if(!street || !country || !phone) tg.MainButton.hide();
        else tg.MainButton.show();
    }, [country, street, phone])

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Страна'}
                {...country}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Улица'}
                {...street}
            />
            <input
                className={'input'}
                type="number"
                placeholder={'Номер телефона'}
                {...phone}
            />
            <select className={'select'} {...subject}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;
