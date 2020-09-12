import React, { useState, useEffect } from 'react'
import Family from './forms/Family'
import Finally from './forms/Finally'
import Maried from './forms/Maried'
import Start from './forms/Start'
import University from './forms/University'
import War from './forms/War'
import Work from './forms/Work'

const Anketa = () => {
    const [type, setType] = useState('START')
    const [anketa, setAnketa] = useState({})
    const [queue, setQueue] = useState([])
    const onNext = (values, nextForm) => {
        console.log(values, nextForm)
        setAnketa({ ...anketa, ...values })
        if (nextForm.length) {
            setType(nextForm[0])
            setQueue([...nextForm.slice(1), ...queue])
        } else {
            setType(queue[0])
            setQueue([...queue.slice(1)])
        }
    }

    const [form, setForm] = useState(<Start onSubmit={onNext} />)

    useEffect(() => {
        console.log(type, queue)
        switch (type) {
            case 'START':
                setForm(<Start onSubmit={onNext} />)
                break
            case 'FAMILY':
                setForm(<Family onSubmit={onNext} />)
                break
            case 'MARIED':
                setForm(<Maried onSubmit={onNext} />)
                break
            case 'WORKER':
                setForm(<Work onSubmit={onNext} />)
                break
            case 'UNIVERSITY':
                setForm(<University onSubmit={onNext} />)
                break
            case 'WAR':
                setForm(<War onSubmit={onNext} />)
                break
            case 'FINAL':
                setForm(<Finally form={anketa} />)
                break
            default:
                setForm(<Finally form={anketa} />)
                break
        }
        console.log(type, queue)
    }, [type, queue])

    return (
        <div className="anketa">
            <div className="anketa__header">
                <h2>Заполните все поля, чтобы мы могли побобрать для Вас льготы</h2>
                <h5>Поля отмечанные * обязательны для заполнения</h5>
            </div>
            <div className="anketa__wrapper">{form}</div>
        </div>
    )
}

export default Anketa
