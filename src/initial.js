export function initial() {
    const content = document.getElementById('content');

    const homeSection = document.createElement('div');
    homeSection.innerHTML = `
    <h1>Andrew restaurant</h1>
    <div>Welcome to Andrew restaurant. Pay what you think it's worth. Indie vibes here only</div>
    `;
    content.appendChild(homeSection);
}