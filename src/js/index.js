const Grid = require('./ui/grid')
const PopupNumbers = require('./ui/popupnumbers')

const grid = new Grid($('#container'))
grid.build()
grid.layout()

const popNumbers = new PopupNumbers($('popupNumbers'))
grid.bindPopup(PopupNumbers)

$('#check').on('click', e => {
    grid.check();
})
$('#reset').on('click', e => {
    grid.reset();
})
$('#clear').on('click', e => {
    grid.clear();
})
$('#rebuild').on('click', e => {
    grid.rebuild();
})