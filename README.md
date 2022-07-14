# Тестовое задание для интервью. Возникило несколько сложностей. Карусель сделал масимально "костыльную", если так можно выразиться. Так же сделал мобильную версию данного тестового задания (на мой взгляд карусель нужно было убрать).
# По структуре проекта. Весь контент разделил на 3 части: Header, Main, Footer. Так же сделал Layout с пропсом children. В ***Header*** поместил всего 2 заголовка как было в макете
# ***Main*** часть вышла тоже достаточно проблемной. По началу я пытался сделать общий интерфейс ***"human"*** для взрослого и ребенка. Далее опрокинул это все в api и в файле index.tsx получал эти данные через GetStaticProps, но все получилось не очень красиво и вылетали ошибки. Пытался гуглить эти ошибки, но толком в гугле ни на русском, ни на английском сообществе не было ответа. Тогда решил делать какие то костыли. Все сработало, но мне вообще не понравлось как я это реализовал. Поэтому решил, что Main опрокину 2 элемента Adult и Kid. В Adult и Kid уже создал для каждого интерфейс и данные. Потом их все в рендере промапил и вывел что нужно.
# С ***Footer'ом*** и с каруселью промучался очень очень долго. Было 3 варианта реализации. ***1 способ*** - нашел в интернете хук useHover и попытался через него выводить текст при наведении, но к сожалению выдавал ошибку по поводу ref и опять ж не смог нигде найти решение данной ошибки. ***2 способ*** - к каждому элементу делал хуй useState (тобишь было 8 хуков для каждой картинки) и отслеживал событе onMouseEnter и onMouseLeave. И в зависимости от этих событий делал проверку на true и false. И далее если true, то показывал элемент. Но 8 хуков мне показалось это нецелесообразно и решил отказаться от этого способа. ***3 способ*** - это использовать псевдоэлемент ::after вместе с псевдоклассом :hover. Остановился на этом способе и решил, что оставлю так. Так же чтобы отказаться от много повторяющихся элементов решил создать массив с картинками и промапить его. Но map работать не хотел ни в какую и достаточно плохо и примитивно сделал данную карусель
# **Если даже не пройду данное тестовое задания по критерям, буду очень рад если напишите в комментариях\сообщения в hh.ru как можно реализовать данную карусель.**
