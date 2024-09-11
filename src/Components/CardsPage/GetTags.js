import React, {useState, useEffect} from "react";
export default function GetTags({tags}){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        let param = tags.map(guid => `guids=${encodeURIComponent(guid)}`).join('&');
        let url = 'http://localhost:5000/api/tags/byguids?';
        var queryString = url + param;
        // Запрос данных из API при монтировании компонента
        fetch(queryString, {
        })
        
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
    }, []); 


    if (loading) {
        return <div>Загрузка...</div>;
    }

    // Показываем сообщение об ошибке, если она произошла
    if (error) {
        return <div>Ошибка: {error.message}</div>;
    }
    return (
            <>
            {data.map((element)=> 
            <li className="tag" key={element.guid}>{element.name}</li> 
            )}
            </>
            
    );
}