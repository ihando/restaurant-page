export function homepage() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const homeSection = document.createElement('div');
    homeSection.innerHTML = `
    <h1>Andrew restaurant</h1>
    <div>Welcome to Andrew restaurant. Pay what you think it's worth. Indie vibes here only</div>
    `;
    content.appendChild(homeSection);
}