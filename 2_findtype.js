let findmytype=true

if (typeof(findmytype) == 'number') {
    console.log('это число')
} else if (typeof(findmytype) == 'string') {
    console.log('это строка')
} else if (typeof(findmytype) == 'boolean') {
    console.log('это логическая переменная')
} else {console.log('тип переменной не определён')}