export function menu() {
    const content = document.getElementById('content');

    content.innerHTML = '';
    const menuSection = document.createElement('div');
    menuSection.innerHTML = `
    <h1>Menu</h1>
    <div>Skateboard $3</div>
    <div>Indie music $5</div>
    <div>Book $2</div>
    <div>Valorant $10000</div>
    `
    content.append(menuSection);
}