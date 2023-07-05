function euros(dolar) {
    const data =  parseInt(dolar)*0.92;
    return data;
}

function libras(dolar) {
    const data = parseInt(dolar)*0.79;
    return data;
}

export{
    euros,
    libras
}