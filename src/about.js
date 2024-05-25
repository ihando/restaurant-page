export function about() {
    const content = document.getElementById('content');

    content.innerHTML = '';
    const aboutSection = document.createElement('div');
    aboutSection.innerHTML = `
    <h1>About</h1>
    <div>Andrew Kim is a mysterious guy</div>
    `
    content.append(aboutSection);
}