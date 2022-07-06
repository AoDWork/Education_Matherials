/*

1) display - основные значения и как они работают.

    *none - не показывать эл.

    *block - размер эл. определяется заданными в стилях размерами, блок занимает всю свободную ширину экрана. Следующие блоки
            переносятся на новую строку.

    *inline - эл. принимают размер контента, расположены в линию, идут один за другим.

    *inline-block - размер эл. определяется заданными в стилях размерами, блоки идут в линию один за другим.
    
    *flex - flex должен быть задан обертке элементов(иначе будет работать внутри них, а не на них) и свойства прописаны тоже в 
           обертке, позволяет гибко управлять расположением элементов. настройки по умолчанию,  позволяют легко создавать
           сложные макеты с относительно небольшим кодом
            
    *grid -  технология не только позиционирует элементы, но и позволяет создавать полноценные макеты любой сложности.



2) keyframes - для чего нужно и как использовать

    Это ключевое слово для создания анимации - определяет ключевые кадры по кторым будет работать анимация. Указывается начальная
        точка, что будет происходить вначале анимации и конечная, эти точки можно указывать в % и на каждом этапе создавать
        отдельный ключевой кадр. 
        

    Возьмем блок(квадрат). 

        .block{
            width: 100px;
            height: 100px;
            font-size: 50px;
            border: 2px solid black;
            background-color: red;
        }


    Сделаем для него анимацию на двух ключевых кадрах. Она будет вращать по оси Х наш квадрат.

        @keyframes rotate{
            from {
                transform: rotateX(0deg);
            }
            to {
                transform: rotateX(360deg);
            }
        }


    Для запуска анимации на блока пропишем в него animation: rotate 1s infinite; - с названием анимации, длительностью и 
        количеством выполнений.
       
            background-color: red;
            animation: rotate 1s infinite;
        }



3) position - какие значения и как при этом ведут себя эл.

        Есть 3 блока(квадраты 100 на 100 пкс) с разными цветами для того чтобы их можно было различить, располагаются блочной 
            моделью один над другим.

        *static - значение по умолчанию. Каждый элемент расположен с естественным порядком добаления его на страницу.
                  Элементы блоков располагаются под элементами блоков, а линейные(строковые) - один за другим. По умолчанию или при
                  записи position: static; попытавшись сместить блок вниз top: 50px; - ничего не выйдет, он останется на месте
                  потому что не спозиционирован.

                  .block:first-child{
                        background-color: rgb(18, 230, 18);
                        position: static;
                        top: 50px;
                        }

        *relative - относительное позиционирование. Эти элементы располагаются относительно своей позиции. Сдвиг производится 
                    относительно его изначального положения. При сдвиге блока на его месте остается образ относительно которого все 
                    элементы располагаются и накладываются один на другой. Элементы с relative выходят из общего потока, но ведут 
                    себя так как будто в нем находятся. 
                    position: relative;

                    При таком позиц. первый квадрат сместится вниз и закроет половину второго квадрата, но второй останется на
                    месте так как будто первый находится на своем месте. Если второму прописать position: relative; то он выйдет
                    на первый план.

        *absolute - вырывает блок из общего потока(структуры) документа. Точка отсчета - эти элементы располагаются
                    относительно ближайшего родительского элемента с позиционирование отличным от static(***НЕ static).
                    Если такого родительского эл. нету - позиционирование производится относительно основного документа, тоесть
                    элемента body. ***Для того что бы абсолютное поз. работало, нужно дочернему эл. прописать absolute, 
                    а родительскому relative.

                    При таком поз. на втором квадрате он вырвался из общего позиционирования и стал позиционироваться относительно
                    страницы, а третий квадрат поднялся на его место.

        *fixed - фиксированное. Всегда игнорирует родительские элементы и располагается относительно окна браузера(ВЫРЫВАЕТСЯ из
                 общего потока).Во время просмотра страницы элемент не смещается. Применяется для создания вкладок, меню, 
                 заголовков, ... элементов которые должны бытьпостоянно видны пользователю и оторые он не может проскролить.
                 position: fixed;

                 Пример - блок в самом верху и дальше много текста чтобы был скролл. Блок остаетс на своем месте ВСЕГДА при скроле
                 страницы.

        *sticky - НЕ ВЫРЫВАЕТСЯ из общего контекста, работает как relative, но при скроле ведет себя также как fixed в пределах
                  своего родителя. Так как он в теге <div class="container"> он доезжает со скролом до конца своего блока обертки
                  и остается там.

        *inherit - дочерний элемент наследует позишн от родительского.



4) Кастомный checkbox как реализовать. !* У меня просто скрылся чекбокс и ничего не произошло.

    Есть чекбокс <input id="check" type="checkbox">, для него написаны стили.
        #check{
            width: 100px;
            height: 100px;
            background-color: black;
            border-radius: 50%;
        }

    Задний фон должен быть черный и скругление 50%, но эти свойства не действуют на него. Нужно написать тег label и указать
        айди чекбокса, потом стилизуем label - переносим в него все стили, в инпуте ставим прозрачность 0, и прописываем 
        input:cheked + label  - для отслаживания нажатия на чекбокс, при нажатии будет менять цвет на красный.

        <label for="check"></label>

        input {
            opacity: 1;
        }

        label {
            width: 100px;
            height: 100px;
            background-color: black;
            border-radius: 50%;
        }

        input:cheked + label {
            background-color: red;
        }



5) Как отцентрировать блок по горизонтали и по вертикали

    Есть один блок в body. Самый простой способ сделать флекс бокс  display: flex; и отцентровать по основной оси 
    justify-content: center; и по дополнительной align-items: center; в родительском элементе. Для того что бы квадрат был в
    центре экрана прописали размер родительского элемента бади в вью хейтс(видимой на экране высоте) и вью видз(видимой 
    на экаране ширине) height: 100vh; width: 100vw;
    
        body{
            height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .block{
            width: 100px;
            height: 100px;
            border: 2px solid black;
            background-color: red;
        }



6) box-sizing: border-box что делает? - Включает border и padding в размер элемента.
    
    

7) Как ОБРАБАТЫВАЕТ WEB страницу браузер.

    * Формирует DOM дерево из HTML

    * Загружает стили

    * На основа DOM и CSS формирует дерево РЕНДЕРИНГА

    * Для каждого эл. рассчитывает положение на странице

    * Отрисовывает в браузере страницу



8) inline стили - что это и какой приоритет. Это стили которые пишутся c помощью аттрибута style напрямую в тег в верстку 
                <h1 style="color: red"></h1> Имеют самый высокий приоритет и перебивают стили из CSS.

            

9) Чем отличается border от outline. 
    
    Есть элемент(квадрат) и под ним текст. 

    Зададим рамку border: 50px solid blue; для наглядности большую, эта рамка является частью элемента и подвинула текст на свою 
        ширину вниз и элемент на искосок на свою ширину.
    
    Рамка заданая через   outline: 50px solid blue; - не является частью элемента, элемент остался прежним, сдвинулся на свое место
        как если бы рамки не было, а рамка слева ушла за экран, а внизу накрыла текст. outline - визуальная составляющая, которая 
        никак не влияет на блочную модель и на нее не действует скругление.



10) Адаптивная верстка. Какими методами можно сделать страницу адаптивной.

    * Резиновая верстка(указание размеров в относительных единицах %, rem, em)

    * Flex, grid layouts

    * Медиазапросы под разные размеры



11) БЭМ - что такое. Методология (Блок Элемент Модификатор) пропагандирует компонентные подход в веб разработке. В ее основе
        лежит принцип разделения интерфейса на независимые блоки, позволяет разрабатывать быстро и легко интерфейсы любой
        сложности и повторно переиспользовать существующий код избегая копипаста.



12) Как при нажатии на ССЫЛКУ открывать страницу в новом окне. Для этого в ссылке нужно указать аттрибут target="_blank"



13) СТРОЧНЫЕ и БЛОЧНЫЕ эл. - различия.
        
    * Строчные - располагаются в одну строку и принимают ширину контента
        
    * Блочные - занимают всю свободную ширину, и располагаются один над другим.



14) margin и padding - разница.

    * margin - внешний отступ от эл.
        
        Между ними граница border

    * padding - внутренний отступ от эл.



15) Семантические эл. и для чего они нужны. Семантические теги - определяют конкретные части страницы, правильное их использование
        улучшает SEO оптимизацию, что позволяет поисковым роботам лучше индексировать страницу.
        (article, aside, details, figcaption, figure, footer, header, main, mark, nav, section, summary, time).



16) overflow - что делает и когда использовать. Если указать для элемента с полосой прокрутки overflow: hidden; полоса прокрутки
                пропадет.



17) vh, vw при указании размеров. Относительные единицы измерения, вне зависимости от размера родительского элемента всегда
        высчитываются от размеров окна браузера 1 vh - 1% от высоты окна браузера , 1 vw - 1% от ширины окна браузера.
    
    

18) Как визуально изменить курсор. В блоке при наведении на который курсор должен изменяться пропишем cursore: pointer; - для
        указывающей руки; cursore: grab; - для хватающей.



19) Как изменить направление главной оси flexbox. Существует метод flex-direction. По умолчанию при создании флексбокса у него
        свойство row - ряд, при этом основаня ось Х, если задать значение flex-direction: column; - элементы выстроятся в колонку
        при этом основная ось будет У.



20) Из чего строится размер элемента. Из: ширины+высоты содержимого(размер контента), внутренних отступов(padding), рамки(border),
        внешних отступов(margin).



21) За что отвечает z-index. Управляет верикальным порядком расположениея элементов которые перекрываются(глубина). !* Оо влияет
        только на позиционированные элементы. По умолчанию его значение = 1. 
        
        Два блока накладываются один на другой, у обоих position: absolute; - второй блок конечно же находится сверху первого.
        Если первому прописать z-index: 2; - то теперь этот блок будет показывать выше второго(наслаиваться на него).



22) input - какие виды бывают.
        text  -  Обычный текст
        email  -  e-mail адрес (требует ввода знака - '@')
        tel  -  Номер телефона (при вводе на мобильных устройствах включается цифровая клавиатура)
        url  -  URL адрес (требует ввода точки и названия протокола)
        password  -  Пароль (прячет вводимые символы под звездочкой - '*')
        number  -  Число (добавляет элементы управления - стрелочки)
        search  -  Текст для поиска (отличие от обычного text только в стилистике)
        datetime-local  -  Локальные дата и время (добавляет элементы управления: календарь и часы)
        date  -  Дата (добавляет элементы управления и календарь)
        month  -  Месяц и год (добавляет элементы управления и календарь)
        week  -  Номер недели (добавляет элементы управления и календарь)
        time  -  Время, часы и минуты (добавляет элементы управления)
        range  -  Регулятор выбора заданных значений
        radio  -  Поле для выбора только одного значения из представленных
        checkbox  -  Поле для выбора одного или нескольких значений из представленных
        color  -  Поле для выбора цвета
        file  -  Поле для загрузки файла
        image  -  Изображение для отправки формы на сервер (аналог типу submit)
        submit  -  Кнопка отправки формы на сервер
        reset  -  Кнопка для очистки полей. Если в поле есть значение по умолчанию то будет оно будет вставлено вместо очистки.
        button  -  Обычная кнопка (по умолчанию ничего не делает)
        hidden  -  Скрытое поле с текстом



23) justify-content и align-items - за что отвечают.  justify-content - расположение эл. относительно главной оси.
                                                      align-items     - расположение эл. относительно второстепенной оси.



24) Как убрать маркер(точки у элементов) в списке <ul>.  По умолчанию используются точки, пропишем ul{list-style: none;} - что бы
        они пропали, или можно выбрать другое отображение georgian,...



25) Приоритет(вес) селекторов. Самый приоритетный inline стиль, наименее приоритетній селектор тега.
        inline стиль    = 1000
        ID              = 100
        селектор класса = 10
        селектор тега   = 1



26) Псевдоклассы. Какие часто используют. - Псевдоклассы предназначены для описания хар-к элемента(динамическое состояние - нажатая
        ссылка, язык кодировки, ...) они не отображаются в исходном документе и не принадлежат дереву DOM. 
        Частоиспользуемые: :hover, :cheked, :disabled,...



27) background-size - какие значения. Кратко о каждом.

    Есть пустой блок див 300 на 300пкс. Ему в ксс установим картинку background: url('./img.jpg');, пока что она вся не 
            помещается в блок(обрезается).

        background-size: cover; - изображение сохраняет пропорции но изменяется в размере что бы покрыть весь блок (часть картинки
            все равно обрезалась, потому что она прямоугольная, а блок квадратный)

        background-size: contain; - ужимает картинку пока она не вместится в блок. При этом ее часть доставляется что бы покрыть
            низ блока. Чтобы убрать это повторение пропишем ноу репит к бекграунду background: url('./img.jpg') no-repeat;



28) Псевдоэлементы, частоиспользуемые. Псевдоселекторы - позволяют стилизовать определенную часть выбранного элемента(::after,
        ::before, ::cue, ::first-letter, ::placeholder, ::marker, ...), например ::first-letter - позволяет изменять заглавную букву
        абзаца  p::first-letter{font-size: 50px; color: red;}.



29) Flexbox свойство, позволяющее переносить элементы на новую строку при переполнении.

    На странице много блоков с заданой высотой + шириной, контейнер флексовый. Все блоки помещаются в одну линию при этом
        ужимаясь по ширине. Что бы они переносились на новую строку и занимали прописанный размер допишем контейнеру
            
            flex-wrap: wrap;



30) !important - ключевое слово которое дописываем свойству в ксс файле что бы это свойство имело больший приоритет чем inline
                стиль и перебивало аналогичное свойство прописаное в inline.



31) <script>, <script async>, <script defer>. 
        
    * <script> - загружается тогда когда браузер до него доходит, блокируя построение страницы пока не загрузится.
        
    * <script async> - асинхронная загрузка(паралельно с построением страницы). Если два скрипта с асинк, будут загружаться оба,
                        и первым начнет выполняться тот который ранбше загрузился(меньше весит или лучше скорость от сервера).

    * <script defer> - асинхронная загрузка(паралельно с построением страницы). Скрипты формируют очередь и загружаются по очереди,
                        тоесть сохраняется порядок выполнения скриптов. Девер срабатывает только тогда когда весь html будет
                        обработан браузером(когда html загрузится).



32) Как увеличить эл. при наведении на него не сдвигая при этом соседние.

    Есть две рядом стоящие кнопки. Попробуем одну из них увеличить. Для плавности пропишем в button{transition: 1s all;}
        Воспользуемся псевдоклассом ховер и в нем пропишем width и height больше чем изначальные - но это подвигает соседнюю кнопку.
        Что бы такого не было используем transform: scale(2); - указывая во сколько раз увеличить элемент, тут в два раза.
            .btn:hover{ transform: scale(2);}



33) Кратко о медиазапросах под мобильные приложения. 

    Есть текст h1. Записываем в ксс. Так тоже работает - @media (max-width: 700px)
        @media screen and (max-width: 700px) {
            h1{
                color: green;
            }
        }



34) Cвойство используется для перевода текста в заглавные(большие) - text-transform: uppercase; ,
            или строчные(маленькие) буквы - text-transform: lowercase;



35) data аттрибуты - могут хранить значения. Например показывать подсказки без применения JS. В теге пишем data-somename="some text"
                    После data- имя можно писать любое. Потом в ксс файле пропишем
                    
                    div:hover::after{
                        content: attr(data-somename);
                        position: absolute;
                        top: 100%;
                        background-color: yellow;
                    }

                    Теперь при наведении на блок выпадает такая подсказка.










*/