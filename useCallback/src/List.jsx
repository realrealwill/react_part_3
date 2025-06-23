import { useState, useEffect } from 'react'

const List = (props) => {
    const {getItems} = props;
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems(10));
        console.log('updating items');
    }, [getItems]);

    return (
        <div>
            {
              items.map((item, key) => 
                <div key={key}>
                  <span>{item}</span>
                </div>
              )
            }
        </div>
    )
}

export default List;