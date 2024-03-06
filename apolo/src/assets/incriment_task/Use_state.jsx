import React, { useState } from 'react'

/* ------------------COUNT -------------------*/
export const Use_state = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <>
      <span className='btn'>{count}</span>
      <button className='btn' onClick={increment}>Increment</button>
      <button className='btn' onClick={decrement}>Decrement</button>
    </>
  )
}

/*---------------SET NAME  AND SET AGE ------------------- */
export const Use_state2 = () => {
  const [state, setstate] = useState();
  const [age, setAge] = useState();

  const setname = () => {
    setstate("Khushal")
  }
  const setage = () => {
    setAge(21)
  }
  return (
    <>
      <span className='name'>{state}</span>
      <button className='name' onClick={setname}>Name</button>

      <span className='name'>{age}</span>
      <button className='name' onClick={setage}>age</button>
    </>
  )
}

export const Age_name_pic = () => {

  const [age, setAge] = useState();
  const [Name, setName] = useState();
  const [pic, setPic] = useState();

  const update_profile = () => {
    const newage = 20;
    setAge(newage);

    if (newage >= 0 && newage <= 25) {
      setName("abhi")
      setPic("data:image/jpeg;base64,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")
    }
    else if (newage > 25) {
      setName("shruti")
      setPic("data:image/jpeg;base64,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")
    }
  }
  return (
    <div>
      <p className='Name mt-10 rounded-xl w-16' onClick={update_profile}>Age:</p>
      <span className='Name'>{age}</span>

      <span>{Name}</span>
      <img src={pic} alt=""className='h-52 w-58 mt-8 '/>

      <button on onClick={update_profile}></button>
    </div>
  )
}


export const Functionobject = () => {
  const [form, setForm] = useState({
    firstName: 'johan',
    lastName: 'charli',
    email: 'bhepworth@sculpture.com',
  });

  return (
    <>
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={e => {
            setForm({
              ...form,
              firstName: e.target.value
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={e => {
            setForm({
              ...form,
              lastName: e.target.value
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}
        />
      </label>
      <p>
        {form.firstName}{' '}
        {form.lastName}{' '}
        ({form.email})
      </p>
    </>
  );
}
