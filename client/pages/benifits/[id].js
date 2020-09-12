import { SitePage } from '../../components/pages/SitePage'
import { useRouter } from 'next/router'
import Benifit from '../../components/pages/benifits/Benifit'

export default function Index(params) {
    const router = useRouter()
    const template = {
        title: 'Title',
        created: '01.04.2020',
        socialStatus: ['Пенсионеры'],
        text: 'Оооооооооочень долгий прикаааааззззз',
        ministere: 'Министерство Важных Дел',
        benifits: 'тыща',
    }
    return (
        <SitePage>
            <Benifit {...template} />
        </SitePage>
    )
}
