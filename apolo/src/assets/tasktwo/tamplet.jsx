import React from 'react'
import Pizza from '../tasktwo/pizza.jpg'
import Pasta from '../tasktwo/pasta.jpg'


let pizza = () => {
    return (
        <div>
            <div className='w-2/5 h-auto p-5 bg-gray-300 shadow-2xl mx-auto my-10 rounded-3xl' >
                <h1 className='text-5xl p-6 flex justify-center'>Pizza</h1>
                <div className='flex justify-center'>
                    <img src={Pizza} alt="" width={250} />
                </div>
                <div className=' flex justify-center font-bold mt-5'>pizza Recipe</div>
                <div className='grid grid-cols-2 p-7 gap-y-1'>
                    <div>- 2 cup all purpose flour</div>
                    <div>- 100 gm processed cheese</div>
                    <div>- 100 ml tomato ketchup</div>
                    <div>- 4 mushroom</div>
                    <div>- 1 tomato</div>
                    <div>- 1/2 capsicum (green pepper)</div>
                    <div>- 2 onion</div>
                    <div>- 1 teaspoon oregano</div>
                    <div>- 1 teaspoon chilli flakes</div>
                    <div>- 1/2 cup mozzarella</div>
                    <div>- 1 teaspoon baking powder</div>
                    <div>- 1 tablespoon dry yeast</div>
                    <div>- 1 teaspoon sugar</div>
                    <div>- water as required</div>
                    <div>- 2 teaspoon virgin olive oil</div>
                </div>
            </div>
        </div>
    )
}

let pasta = () => {

    return (
        <div>
            <div className='w-2/5 h-auto p-5 bg-gray-300 shadow-2xl mx-auto my-10 rounded-3xl'>
                <h1 className='text-5xl mb-4 flex justify-center'>Pasta</h1>
                <div className='flex justify-center'>
                    <img src={Pasta} alt="" width={150} />
                </div>
            </div>

        </div>
    )
}

let Product = ({ Item, Status, isStock }) => {
    switch (isStock) {
        case "Pizza":
            return (<h1>{Item}</h1>)

        case "pasta":
            return (<h1>{Status}</h1>)

        default:
            return (<h1>Not Found!</h1>);

    };

}

const Task = () => {
    return (
        <>
            <div>
                <Product Item={pizza()} Status={pasta()} isStock="Pizza" />
            </div>
        </>
    )
}

export default Task