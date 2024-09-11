import React, {useState, useEffect} from "react";

export default function DataFetchingComponent() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://localhost:5001/api/items/all')
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            setData(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
    })

    if (!loading){
        return data;
    }
}