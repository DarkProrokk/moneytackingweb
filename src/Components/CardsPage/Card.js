import '../../css/card.css';
import GetTags from './GetTags';
import UsefulArea from './UsefulArea';

export default function Card({item}){
    var element = 
    <div className="card-container" key={item.guid}>
        
        <div className="values-container">
            <h2 className="title">{item.name}</h2>

            <p className="date">Дата: {item.date}</p>

            <p className="description"> <strong>Описание:</strong><br></br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos omnis perspiciatis dolor consectetur delectus tempore sint totam nemo voluptate. Velit alias recusandae deleniti culpa nisi. Dolor necessitatibus rerum sit nemo?</p>
            
            <ul className="tags">Тэги:
                <GetTags tags={item.tagsId}/>
            </ul>

            <div className="price">
                <p className="main">Цена: {item.price}</p>    
                <p className="possible">Возможная цена: {item.possiblePrice}</p>
            </div>
            <div className="useful">
                <UsefulArea/>
                <p className="possible">Возможная полезность: {item.possibleUseful}</p>
            </div>

        </div>
    </div>
    // for (var i = 0; i<100; i++){
    //     elements.push(<h2 className='card' key={i}>Test</h2>);
    // }

    return(element);
}