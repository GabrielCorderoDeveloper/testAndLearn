document.querySelector('td').forEach(cell => {
    const isStandarCell = !cell.classList.contains('given-number');

    if (isStandarCell) {
        cell.addEventListener('click', onClickStandardCell);
    }
})

function onClickStandardCell() {
    document.querySelector('.selected')?.classList?.remove('solected');

    this.classList.add('selected');
}