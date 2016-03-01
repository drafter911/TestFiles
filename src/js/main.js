import $ from 'jquery';
import 'jquery-ui';
import template from 'modules/template/elem';

$(document).ready(() => {

    var container = $('.time-list');
    var form = $('#time-list-form');

    $('#calendar').datepicker({
        beforeShowDay: $.datepicker.noWeekends,
        showOtherMonths: true,
        selectOtherMonths: true,
        firstDay: 1,
        gotoCurrent: true,
        minDate: 0,
        closeText: "",
        prevText: "",
        nextText: "",
        currentText: "",
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн",
            "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        dayNamesShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
        dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        dateFormat: "dd.mm.yy",
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ""
    });

    $('.ui-state-default').on('click', () => {
        $.ajax("times.json").then(
            (data) => {
                let c = container.find('#column-1');
                c.html();
                for (let i in data) {
                    let time = data[i];
                    c.append(template(time, i));
                    if ((+i + 1) % 12 == 0 && i != 0) {
                        c = c.next();
                        c.html();
                    }
                }
            }
        );
    });

    container.delegate('.toggle', 'change', (e) => {
        $(e.target).parent('.time-table-elem').toggleClass('booked available');
    });

    form.on('submit', (e) => {
        e.preventDefault();
        console.log(JSON.stringify(form.serializeArray()));
    });

});