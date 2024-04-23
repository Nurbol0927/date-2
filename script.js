function updateTime() {
    const now = new Date();
    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

    document.getElementById('date').textContent = now.toLocaleDateString('ru-RU', optionsDate);
    document.getElementById('time').textContent = now.toLocaleTimeString('ru-RU', optionsTime);
    document.getElementById('weekday').textContent = now.toLocaleDateString('ru-RU', { weekday: 'long' });
    document.getElementById('year').textContent = `Год ${now.getFullYear()}`;
}

updateTime();
setInterval(updateTime, 1000);  // Обновляет время каждую секунду
