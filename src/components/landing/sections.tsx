import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Пасха 2026 — приём заказов открыт</Badge>,
    title: "Яркие яйца для светлого праздника.",
    showButton: true,
    buttonText: 'Заказать окраску',
    image: 'https://cdn.poehali.dev/projects/e252263c-a661-45ed-bb53-da2ef00da3b6/files/3800fec1-5c9e-4474-89dc-bca3166bd01f.jpg'
  },
  {
    id: 'about',
    title: 'Почему мы?',
    content: 'Мы красим яйца вручную с любовью — натуральными красителями, без химии. Каждое яйцо уникально, как и ваш праздник.'
  },
  {
    id: 'features',
    title: 'Что входит в заказ',
    content: 'Окраска в любые цвета и узоры, индивидуальная упаковка в подарочные корзины, доставка по городу. Минимальный заказ — 10 штук.'
  },
  {
    id: 'testimonials',
    title: 'Нас уже выбрали',
    content: 'В прошлом году мы окрасили более 5 000 яиц для частных семей, кафе и корпоративных подарков. Клиенты возвращаются каждый год.'
  },
  {
    id: 'join',
    title: 'Успейте до Пасхи',
    content: 'Количество мест ограничено — приём заказов завершается за 5 дней до праздника. Оставьте заявку сейчас и получите скидку 10% на первый заказ.',
    showButton: true,
    buttonText: 'Оставить заявку'
  },
]