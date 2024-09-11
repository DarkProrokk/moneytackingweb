import React, { useState, useEffect } from 'react';
import Card from './Card'; // Предполагается, что у вас есть компонент Card

export default function LoadCards() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        // Запрос данных из API при монтировании компонента
        fetch('http://localhost:5000/api/items/all')
            .then((response) => {
                
                if (!response.ok) {
                    throw new Error("Сетевая ошибка");
                }
                return response.json();
            })
            .then((data) => {
                setData(data);  // Устанавливаем данные в состояние
                setLoading(false);  // Обновляем состояние загрузки
            })
            .catch((error) => {
                setError(error);  // Устанавливаем ошибку в состояние
                setLoading(false);  // Обновляем состояние загрузки
            });
    }, []);  // Пустой массив зависимостей гарантирует, что этот эффект выполнится только один раз после первого рендера

    // Показываем индикатор загрузки пока данные загружаются
    if (loading) {
        return <div>Загрузка...</div>;
    }

    // Показываем сообщение об ошибке, если она произошла
    if (error) {
        return <div>Ошибка: {error.message}</div>;
    }


    // Создаем массив карточек из данных
    const cards = data.map((element) => (
        <Card item={element} key={element.guid}/>  // Используем уникальный ключ для каждой карточки
    ));

    return (
        <div className="many-cards-container">
            {cards}
        </div>
    );
}