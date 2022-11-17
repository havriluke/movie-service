const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'cfa8922d649b954bb43f561fd56a4655',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;