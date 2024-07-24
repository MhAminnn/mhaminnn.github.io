document.getElementById('searchButton').addEventListener('click', function() {
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const resultDiv = document.getElementById('result');

    if (latitude && longitude) {
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const address = data.display_name || 'Alamat tidak ditemukan';
                resultDiv.innerHTML = `Alamat: ${address}`;
            })
            .catch(error => {
                resultDiv.innerHTML = 'Error fetching address';
                console.error('Error:', error);
            });
    } else {
        resultDiv.innerHTML = 'Tolong Isi Nilai Yang Sesuai';
    }
});
