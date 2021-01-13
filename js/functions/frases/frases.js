const frases = [
    '"Muy lindo." - Mi mamá',
    '"Excelente profesional." - Mi jefe, probablemente',
    '"Buen muchacho." - Mi abuela',
    '"非常に面白い" - ののか',
    '"¿En qué le puedo ayudar?" - El chatbot de Claro',
    '"Muy cumplido y responsable." - La DIAN',
    '"Aprende rápido." - Stack Overflow',
    '"Tiene buen gusto." - El algoritmo de Spotify',
    '"¿Quién?" - Mis compañeros de primaria',
    '"Muy malos chistes. - Mis compañeros de universidad"',
    '"Sigue ahí." - Netflix'
];

function sample(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

exports.handler = async (event, context) => {
    try {
        return {
            statusCode: 200,
            headers: { "content-type": "text/plain; charset=utf-8" },
            body: sample(frases)
        };
    } catch (err) {
        return { statusCode: 500, body: err.toString() };
    }
};
