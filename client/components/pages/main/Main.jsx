import React from 'react'
import Roter from '../../base/Roter'
import Button from '../../base/Button'

const Main = () => {
    const title = 'Узнай свои льготы прямо сейчас!'
    const description = `    Добро пожаловать на сервис, где вы можете  узнать все полагающиеся для Вас льготы. Вы можите заполнить анкету, чтобы Вам  максимально точно подобрали льготы. Или же сами посмотрите активные льготы, распределенные по категориям.`

    return (
        <div className="main">
            <h1>{title}</h1>
            <div className="content">
                <div className="description">{description}</div>
                <div className="control">
                    <Roter large href="anketa">
                        Заполнить анкету
                    </Roter>
                    <Roter large outline href="all">
                        Посмотреть все категории
                    </Roter>
                </div>
            </div>
        </div>
    )
}

export default Main
