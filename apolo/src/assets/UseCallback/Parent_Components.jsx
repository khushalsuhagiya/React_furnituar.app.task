import React from 'react'
import { useState , useCallback } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

const Parent_Components = () => {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    } , [age])
    const incrementSalary = useCallback(() => {
        setSalary(salary + 10000)
    } , [salary])

    // const incrementAge  = () =>{
    //     setAge(age + 1)
    // }
    // const incrementSalary = () =>{
    //     setSalary(salary + 10000)
    // }
    

    return (
        <div className='flex justify-center items-center'>
            <div className=''>
                <Title />
                <p className='btn'><Count text="Age" count={age} /></p>
                <p className='btn'><Button handleClick={incrementAge}>IncrementAge</Button></p>
                <p className='btn'><Count text="Salary" count={salary} /></p>
                <p className='btn'><Button handleClick={incrementSalary}>IncrementSalary</Button></p>
            </div>
        </div>
    )
}

export default Parent_Components