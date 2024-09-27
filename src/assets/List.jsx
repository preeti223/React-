
function List(){

    const fruits = [{id:1,name:"apple", calories: 95},
                    {id:2,name:"orange", calories: 45}, 
                    {id:3,name:"banana", calories: 105},
                    {id:4,name:"coconut",calories: 159},
                    {id:5,name:"pineapple", calories: 37}];

// To arrange the fruits in corresponding order(sorting)

    // fruits.sort((a,b) => a.name.localeCompare(b.name)); ALPHABETICAL
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); REVERSE ALPHABETICAL
       fruits.sort((a,b) => a.calories - b.calories); //Numeric
    //    fruits.sort((a,b) => b.calories - a.calories); //Numeric Reverse


 // To check the level of calories(filtering)

       const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    //    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);


    // const listItems = fruits.map(fruit => <li key={fruit.id}>
    //                                               {fruit.name}: &nbsp;
    //                                               <b>{fruit.calories}</b></li>);


    const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                                       {lowCalFruit.name}: &nbsp;
                                                       <b>{lowCalFruit.calories}</b></li>);
                                                
   

    return(<ol>{listItems}</ol>);
}
export default List