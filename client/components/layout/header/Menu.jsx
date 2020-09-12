import React from 'react'
import Link from 'next/link'

const Menu = () => {
    const items = [
        { label: 'Главная', link: '/' },
        { label: 'Подобрать льготу', link: '/anketa' },
        { label: 'Оформить льготу', link: '/take' },
        { label: 'Категории', link: '/benifits' },
    ]
    return (
        <div className="menu">
            {items.map(({ label, link }) => (
                <Link href={link}>
                    <a>{label}</a>
                </Link>
            ))}
        </div>
    )
}

export default Menu
