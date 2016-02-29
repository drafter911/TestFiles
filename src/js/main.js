import $ from 'jquery';
import 'jquery-ui';
import Calendar from 'modules/calendar/calendar';

$(document).ready(() => {

    $('#calendar').datepicker({
        beforeShowDay: $.datepicker.noWeekends,
        showOtherMonths: true,
        selectOtherMonths: true,
        firstDay: 1,
        gotoCurrent: true,
        minDate: 0,
        closeText: "�������",
        prevText: "&#x3C;����",
        nextText: "����&#x3E;",
        currentText: "�������",
        monthNames: [ "������","�������","����","������","���","����",
            "����","������","��������","�������","������","�������" ],
        monthNamesShort: [ "���","���","���","���","���","���",
            "���","���","���","���","���","���" ],
        dayNames: [ "�����������","�����������","�������","�����","�������","�������","�������" ],
        dayNamesShort: [ "���","���","���","���","���","���","���" ],
        dayNamesMin: [ "��","��","��","��","��","��","��" ],
        weekHeader: "���",
        dateFormat: "dd.mm.yy",
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ""
    });

    console.log('����');

    var container = $('.time-list');

    $.ajax("times.json").then(
        function(data){
            console.log(data.length);
            var c = container.find('#column-1');
            for(var i in data){
                let time = data[i];
                c.append('<label for="'+time.status + i +'" class="time-table-elem '+ time.status +'">' +
                    '<input class="toggle hidden" id="'+time.status + i +'" type="checkbox"'+
                    (time.status == "booked" ? 'checked' : '') + '>' +
                    '<label for="'+time.status + i +'" class="fancy pull-left">' +
                    '<i><span class="check abs"></span></i>' +
                    '</label>' +
                    '<span class="white">' + time.time + '</span>' +
                '</label>');

                if((+i+1)%12 == 0 && i != 0){

                    console.log(c.next());
                    c = c.next();
                }
            }
        }
    );

});