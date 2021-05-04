$(document).ready(function () {

    $.getJSON('https://mindicador.cl/api', function (data) {
        var dailyIndicators = data;
        $("<p/>", {
            html: 'El valor actual de la UF es $' + dailyIndicators.uf.valor
        }).appendTo("body");
    }).fail(function () {
        console.log('Error al consumir la API!');
    });
    $.getJSON('https://mindicador.cl/api', function (data) {
        var dailyIndicators = data;
        $("<p/>", {
            html: 'El valor actual de la UF es $' + dailyIndicators.ivp.valor
        }).appendTo("body");
    }).fail(function () {
        console.log('Error al consumir la API!');
    });
    $.getJSON('https://mindicador.cl/api', function (data) {
        var dailyIndicators = data;
        $("<p/>", {
            html: 'El valor actual de la UF es $' + dailyIndicators.dolar.valor
        }).appendTo("body");
    }).fail(function () {
        console.log('Error al consumir la API!');
    });
    $.getJSON('https://mindicador.cl/api', function (data) {
        var dailyIndicators = data;
        $("<p/>", {
            html: 'El valor actual de la UF es $' + dailyIndicators.dolar_intercambio.valor
        }).appendTo("body");
    }).fail(function () {
        console.log('Error al consumir la API!');
    });
    $.getJSON('https://mindicador.cl/api', function (data) {
        var dailyIndicators = data;
        $("<p/>", {
            html: 'El valor actual de la UF es $' + dailyIndicators.euro.valor
        }).appendTo("body");
    }).fail(function () {
        console.log('Error al consumir la API!');
    });
    $.getJSON('https://mindicador.cl/api', function (data) {
        var dailyIndicators = data;
        $("<p/>", {
            html: 'El valor actual de la UF es $' + dailyIndicators.ipc.valor
        }).appendTo("body");
    }).fail(function () {
        console.log('Error al consumir la API!');
    });
    $.getJSON('https://mindicador.cl/api', function (data) {
        var dailyIndicators = data;
        $("<p/>", {
            html: 'El valor actual de la UF es $' + dailyIndicators.utm.valor
        }).appendTo("body");
    }).fail(function () {
        console.log('Error al consumir la API!');
    });
    $.getJSON('https://mindicador.cl/api', function (data) {
        var dailyIndicators = data;
        $("<p/>", {
            html: 'El valor actual de la UF es $' + dailyIndicators.imacec.valor
        }).appendTo("body");
    }).fail(function () {
        console.log('Error al consumir la API!');
    });
    $.getJSON('https://mindicador.cl/api', function (data) {
        var dailyIndicators = data;
        $("<p/>", {
            html: 'El valor actual de la UF es $' + dailyIndicators.tpm.valor
        }).appendTo("body");
    }).fail(function () {
        console.log('Error al consumir la API!');
    });
    $.getJSON('https://mindicador.cl/api', function (data) {
        var dailyIndicators = data;
        $("<p/>", {
            html: 'El valor actual de la UF es $' + dailyIndicators.libra_cobre.valor
        }).appendTo("body");
    }).fail(function () {
        console.log('Error al consumir la API!');
    });
    $.getJSON('https://mindicador.cl/api', function (data) {
        var dailyIndicators = data;
        $("<p/>", {
            html: 'El valor actual de la UF es $' + dailyIndicators.tasa_desempleo.valor
        }).appendTo("body");
    }).fail(function () {
        console.log('Error al consumir la API!');
    });
    $.getJSON('https://mindicador.cl/api', function (data) {
        var dailyIndicators = data;
        $("<p/>", {
            html: 'El valor actual de la UF es $' + dailyIndicators.bitcoin.valor
        }).appendTo("body");
    }).fail(function () {
        console.log('Error al consumir la API!');
    });



});